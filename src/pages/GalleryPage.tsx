import { type MouseEvent, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Play, Image as ImageIcon, Video, Tag, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { equipmentData } from "../data/equipment";

interface MediaItem {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  category: string;
  equipmentId?: string;
}

const galleryMedia: MediaItem[] = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1633430480411-9b0e11d8202e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Pool Biking Session",
    category: "Training",
    equipmentId: "aquacycle-rehab"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1614954553401-811f9df3f9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Group Class",
    category: "Classes",
    equipmentId: "aquacycle-classic"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1760863329482-aa37dba2fd9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Premium Equipment",
    category: "Equipment",
    equipmentId: "aquacycle-pro"
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Aquatic Fitness Demo",
    category: "Training",
    equipmentId: "aquacycle-studio"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Underwater Training",
    category: "Training",
    equipmentId: "aquacycle-elite"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Modern Facility",
    category: "Facilities",
    equipmentId: "aquacycle-studio"
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "How to Use Poolbike",
    category: "Tutorial",
    equipmentId: "aquacycle-classic"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Advanced Techniques",
    category: "Training",
    equipmentId: "aquacycle-sport"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Pool Setup",
    category: "Facilities",
    equipmentId: "aquacycle-compact"
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Benefits of Aquatic Cycling",
    category: "Education",
    equipmentId: "aquacycle-rehab"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Rehabilitation Session",
    category: "Therapy",
    equipmentId: "aquacycle-balance"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Team Training",
    category: "Classes",
    equipmentId: "aquacycle-studio"
  }
];

export function GalleryPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");

  const handleEquipmentLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  const filteredMedia = useMemo(() => {
    return galleryMedia.filter((item) => (filter === "all" ? true : item.type === filter));
  }, [filter]);

  useEffect(() => {
    if (!filteredMedia.length) {
      setSelectedMedia(null);
      return;
    }

    if (selectedMedia && !filteredMedia.includes(selectedMedia)) {
      setSelectedMedia(null);
    }
  }, [filteredMedia, selectedMedia]);

  const categories = ["all", "image", "video"];

  const selectedEquipment = selectedMedia?.equipmentId
    ? equipmentData.find((equipment) => equipment.id === selectedMedia.equipmentId)
    : undefined;

  // Water bubble animation component
  const WaterBubble = ({ delay = 0, duration = 4, x = 0 }: { delay?: number; duration?: number; x?: number }) => (
    <motion.div
      initial={{ y: 0, opacity: 0, scale: 0 }}
      animate={{
        y: -800,
        opacity: [0, 0.6, 0.8, 0.6, 0],
        scale: [0, 1, 1.2, 1, 0.8],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute bottom-0 w-2 h-2 bg-white/30 rounded-full blur-sm"
      style={{ left: `${x}%` }}
    />
  );

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-96 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-900/80" />
        </motion.div>

        {/* Animated water bubbles */}
        {[...Array(15)].map((_, i) => (
          <WaterBubble
            key={i}
            delay={i * 0.4}
            duration={3 + Math.random() * 2}
            x={Math.random() * 100}
          />
        ))}

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <ImageIcon className="h-4 w-4" />
            <span>Photos & Videos</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-6xl mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl text-blue-100"
          >
            Experience the world of aquatic fitness through our lens
          </motion.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section ref={galleryRef} className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Button
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category as typeof filter)}
                  className="capitalize"
                >
                  {category === "image" && <ImageIcon className="h-4 w-4 mr-2" />}
                  {category === "video" && <Video className="h-4 w-4 mr-2" />}
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
              {filteredMedia.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="col-span-full text-center py-16 bg-white rounded-2xl border border-dashed border-gray-200"
                >
                  <p className="text-2xl text-gray-500">No {filter}s found</p>
                </motion.div>
              ) : (
                filteredMedia.map((item: MediaItem, index: number) => {
                  const equipment = item.equipmentId ? equipmentData.find((eq) => eq.id === item.equipmentId) : undefined;
                  const isSelected = selectedMedia === item;

                  return (
                    <motion.div
                      key={`${item.src}-${item.title}`}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ y: -6 }}
                      className={`group rounded-2xl overflow-hidden border bg-white shadow-lg transition cursor-pointer ${
                        isSelected ? "border-blue-500 shadow-blue-100" : "border-transparent hover:border-blue-200"
                      }`}
                      onClick={() => setSelectedMedia(item)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${item.title} details`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedMedia(item);
                        }
                      }}
                    >
                      <div className="aspect-square relative overflow-hidden">
                        <ImageWithFallback
                          src={item.type === "video" ? item.thumbnail || item.src : item.src}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

                        {/* Type badge */}
                        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs flex items-center gap-1">
                          {item.type === "video" ? <Video className="h-3 w-3" /> : <ImageIcon className="h-3 w-3" />}
                          <span className="capitalize">{item.type}</span>
                        </div>

                        {/* Equipment tag */}
                        {equipment && (
                          <Link
                            to={`/equipment/${equipment.id}`}
                            onClick={handleEquipmentLinkClick}
                            className="absolute top-3 left-3"
                          >
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs flex items-center gap-1"
                            >
                              <Tag className="h-3 w-3" />
                              <span>{equipment.name}</span>
                            </motion.div>
                          </Link>
                        )}

                        {item.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                              <Play className="h-7 w-7 text-blue-600 ml-1" />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <p className="text-sm uppercase tracking-wide text-blue-600">{item.category}</p>
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        {equipment && (
                          <Link
                            to={`/equipment/${equipment.id}`}
                            onClick={handleEquipmentLinkClick}
                            className="text-sm text-blue-600 flex items-center gap-1 mt-2 hover:underline"
                          >
                            <Tag className="h-3 w-3" />
                            {equipment.name}
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  );
                })
              )}
            </motion.div>
        </div>
      </section>

      {/* Modal for Media Details */}
      <AnimatePresence>
        {selectedMedia && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setSelectedMedia(null)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:max-h-[90vh] bg-white rounded-3xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition shadow-lg"
                aria-label="Close modal"
              >
                <X className="h-6 w-6 text-gray-900" />
              </button>

              <div className="overflow-y-auto max-h-[90vh]">
                {/* Media Preview */}
                <div className="aspect-video bg-gray-50 relative">
                  {selectedMedia.type === "video" ? (
                    <iframe
                      src={selectedMedia.src}
                      title={selectedMedia.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <ImageWithFallback
                      src={selectedMedia.src}
                      alt={selectedMedia.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-6">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-blue-600 mb-2">{selectedMedia.category}</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{selectedMedia.title}</h2>
                  </div>

                  {selectedEquipment ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 space-y-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-3 rounded-xl">
                          <Tag className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wide text-blue-600">Featured Equipment</p>
                          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">{selectedEquipment.name}</h3>
                        </div>
                      </div>
                      <p className="text-gray-700">{selectedEquipment.shortDescription}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="font-semibold">{selectedEquipment.category}</span>
                        <span>•</span>
                        <span className="text-lg font-bold text-blue-600">${selectedEquipment.price.toLocaleString()}</span>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        {selectedEquipment.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to={`/equipment/${selectedEquipment.id}`} onClick={() => setSelectedMedia(null)}>
                        <Button className="w-full mt-4" size="lg">View Full Product Details</Button>
                      </Link>
                    </motion.div>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-gray-200 p-6 text-center text-gray-500">
                      No equipment tagged for this media.
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-gray-500 pt-4 border-t">
                    {selectedMedia.type === "video" ? <Video className="h-4 w-4" /> : <ImageIcon className="h-4 w-4" />}
                    <span className="capitalize">{selectedMedia.type}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Ready to Join the Aquatic Fitness Revolution?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Transform your facility with our premium poolbiking equipment
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Get Started Today
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
