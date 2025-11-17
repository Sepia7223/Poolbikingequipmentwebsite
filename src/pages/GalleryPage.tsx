import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Play, X, Image as ImageIcon, Video, Tag } from "lucide-react";
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

export function GalleryPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");

  const media: MediaItem[] = [
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

  const filteredMedia = media.filter(item => 
    filter === "all" ? true : item.type === filter
  );

  const categories = ["all", "image", "video"];

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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredMedia.map((item, index) => (
              <motion.div
                key={`${item.type}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
                onClick={() => setSelectedMedia(item)}
              >
                <div className="aspect-video relative">
                  <ImageWithFallback
                    src={item.type === "video" ? (item.thumbnail || item.src) : item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center"
                  >
                    {item.type === "video" && (
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                      >
                        <Play className="h-8 w-8 text-blue-600 ml-1" />
                      </motion.div>
                    )}
                  </motion.div>
                  
                  {/* Type badge */}
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center gap-1">
                    {item.type === "video" ? (
                      <Video className="h-3 w-3" />
                    ) : (
                      <ImageIcon className="h-3 w-3" />
                    )}
                    <span className="capitalize">{item.type}</span>
                  </div>

                  {/* Equipment tag */}
                  {item.equipmentId && (() => {
                    const equipment = equipmentData.find(e => e.id === item.equipmentId);
                    return equipment ? (
                      <Link 
                        to={`/equipment/${item.equipmentId}`}
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-3 left-3"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center gap-1 hover:bg-blue-700 transition"
                        >
                          <Tag className="h-3 w-3" />
                          <span>{equipment.name}</span>
                        </motion.div>
                      </Link>
                    ) : null;
                  })()}
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent text-white"
                >
                  <h3 className="text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.category}</p>
                  {item.equipmentId && (() => {
                    const equipment = equipmentData.find(e => e.id === item.equipmentId);
                    return equipment ? (
                      <Link 
                        to={`/equipment/${item.equipmentId}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <motion.p 
                          whileHover={{ x: 5 }}
                          className="text-xs text-blue-300 mt-1 flex items-center gap-1 hover:text-blue-200"
                        >
                          <Tag className="h-3 w-3" />
                          Featured: {equipment.name}
                        </motion.p>
                      </Link>
                    ) : null;
                  })()}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* No results message */}
          {filteredMedia.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-500">No {filter}s found</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="h-8 w-8" />
          </motion.button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === "video" ? (
              <div className="aspect-video">
                <iframe
                  src={selectedMedia.src}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative">
                <ImageWithFallback
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              </div>
            )}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-white text-center"
            >
              <h3 className="text-2xl mb-2">{selectedMedia.title}</h3>
              <p className="text-gray-400 mb-2">{selectedMedia.category}</p>
              {selectedMedia.equipmentId && (() => {
                const equipment = equipmentData.find(e => e.id === selectedMedia.equipmentId);
                return equipment ? (
                  <Link to={`/equipment/${selectedMedia.equipmentId}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 bg-blue-600/80 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm hover:bg-blue-700 transition mt-2"
                    >
                      <Tag className="h-4 w-4" />
                      <span>Featured Model: {equipment.name}</span>
                    </motion.div>
                  </Link>
                ) : null;
              })()}
            </motion.div>
          </motion.div>
        </motion.div>
      )}

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
