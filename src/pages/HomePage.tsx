import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Droplets, Heart, Users, Award, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "../content/Marketing/IMG_3066retocado.jpg";

export function HomePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: Droplets,
      title: "Aquatic Excellence",
      description: "Professional-grade equipment designed specifically for pool environments"
    },
    {
      icon: Heart,
      title: "Low Impact",
      description: "Gentle on joints while providing intense cardiovascular workouts"
    },
    {
      icon: Users,
      title: "For Everyone",
      description: "Perfect for fitness centers, rehabilitation facilities, and private pools"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Durable, corrosion-resistant materials built to last"
    }
  ];

  const stats = [
    { number: "15+", label: "Equipment Models" },
    { number: "1000+", label: "Happy Customers" },
    { number: "50+", label: "Countries Worldwide" },
    { number: "24/7", label: "Customer Support" }
  ];

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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-900/70" />
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

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Why Choose Poolbiking?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Poolbiking combines the benefits of cycling with the resistance of water
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-shadow"
              >
                <div>
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="text-5xl md:text-6xl mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-xl text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore our full range of equipment or contact us for personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/equipment">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                    Browse Equipment
                  </Button>
                </motion.div>
              </Link>
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-blue-900 text-white hover:bg-blue-800">
                    Contact Us
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
