import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "../content/Marketing/IMG_3066retocado.jpg";
import fitnessImage from "../content/Marketing/IMG_3053.JPG";
import hotelsImage from "../content/Marketing/IMG_3055.JPG";
import rehabImage from "../content/Marketing/IMG_3056retocado.jpg";
import ceLogo from "../content/Logo's/sello_fabricacion_eng.tif";
import pedalLogo from "../content/Logo's/segell_pedal_230_en.png";
import proEquipLogo from "../content/Logo's/poolbiking_professional_equipment.svg";
import warrantyGroupLogo from "../content/Logo's/garantia_en_grup.svg";
import geometryLogo from "../content/Logo's/poolbiking_perfect_geometry.png";
import ultraStrongLogo from "../content/Logo's/ultra_strong.svg";

export function HomePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const pillars = [
    {
      title: "Fitness",
      body: "Poolbiking is shaking up aquabike with innovative, high-quality equipment engineered for results.",
      image: fitnessImage
    },
    {
      title: "Hotels",
      body: "Resorts worldwide choose Poolbiking to deliver unforgettable fitness, sport, fun and health experiences.",
      image: hotelsImage
    },
    {
      title: "Rehabilitation",
      body: "Weightless resistance makes aquatic rehab gentle and effective—developed with clinicians and technicians.",
      image: rehabImage
    }
  ];

  const videos = [
    { title: "Poolmat Activity", embed: "https://www.youtube.com/embed/UF8uR6Z6KLc" },
    { title: "MasterClass", embed: "https://www.youtube.com/embed/J---aiyznGQ" },
    { title: "Spa Gym Corner", embed: "https://www.youtube.com/embed/tAGnKpE4NCI" }
  ];

  const logoStrip = [ceLogo, pedalLogo, proEquipLogo, warrantyGroupLogo, geometryLogo, ultraStrongLogo];

  // Water bubble component
  const WaterBubble = ({ delay = 0, duration = 4, x = 0 }: { delay?: number; duration?: number; x?: number }) => (
    <motion.div
      initial={{ y: 0, opacity: 0, scale: 0 }}
      animate={{
        y: -1000,
        opacity: [0, 0.6, 0.8, 0.6, 0],
        scale: [0, 1, 1.2, 1, 0.8],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute bottom-0 w-3 h-3 bg-white/30 rounded-full blur-sm"
      style={{ left: `${x}%` }}
    />
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <ImageWithFallback src={heroImage} alt="Pool biking" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-cyan-900/5" />
        </motion.div>

        {/* Animated water bubbles */}
        {[...Array(20)].map((_, i) => (
          <WaterBubble
            key={i}
            delay={i * 0.5}
            duration={3 + Math.random() * 3}
            x={Math.random() * 100}
          />
        ))}

        {/* Water ripple effects */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white/20 rounded-full"
              initial={{ width: 0, height: 0, opacity: 0 }}
              animate={{
                width: [0, 800, 1200],
                height: [0, 800, 1200],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 6,
                delay: i * 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="h-4 w-4" />
              <span>Transform Your Fitness Journey</span>
            </motion.div>
          </motion.div>

          {/* Animated title with water wave effect */}
          <div className="mb-6 overflow-hidden">
            <h1 className="text-5xl md:text-6xl lg:text-7xl">
              {["Premium", "Poolbiking", "Equipment"].map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  className="inline-block mr-4"
                  initial={{ opacity: 0, y: 100 }}
                  animate={heroInView ? { 
                    opacity: 1, 
                    y: 0,
                  } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6 + wordIndex * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      className="inline-block"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: wordIndex * 0.3 + charIndex * 0.1,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                      }}
                      style={{
                        textShadow: "0 0 20px rgba(96, 165, 250, 0.8), 0 0 40px rgba(34, 211, 238, 0.6)",
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              ))}
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-100"
          >
            Low-impact, high-intensity aquatic cycling for pools and aquatic centers
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/equipment">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 group">
                  View Equipment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
                </Button>
              </motion.div>
            </Link>
            <Link to="/rental">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                  Rental Options
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white"
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Poolbiking for Every Need</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fitness, hotels, and rehabilitation—tailored aquatic solutions for every environment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl shadow-2xl"
              >
                <ImageWithFallback src={pillar.image} alt={pillar.title} className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-white/80 backdrop-blur">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900 uppercase tracking-wide">{pillar.title}</h3>
                  <p className="text-gray-800 text-sm leading-relaxed">{pillar.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl mb-3">See Poolbiking in Action</h2>
            <p className="text-lg text-gray-600">Real sessions across fitness, hotels, and rehabilitation settings.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl shadow-xl bg-black border border-gray-200"
              >
                <iframe
                  title={video.title}
                  src={video.embed}
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos Strip */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {logoStrip.map((logoSrc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-3 bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <img
                  src={logoSrc}
                  alt="Poolbiking credential"
                  className="object-contain"
                  style={{ width: "18rem", height: "9.5rem" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
