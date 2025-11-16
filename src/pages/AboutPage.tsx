import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Flame, Shield, Smile, Zap, Activity, Users, Target, Globe, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const benefits = [
    {
      icon: Flame,
      title: "Burns More Calories",
      description: "Water resistance increases calorie burn by up to 800 calories per hour"
    },
    {
      icon: Shield,
      title: "Joint Protection",
      description: "Zero-impact exercise ideal for injury recovery and chronic pain management"
    },
    {
      icon: Smile,
      title: "Reduces Stress",
      description: "Water's natural calming effect combined with endorphin release"
    },
    {
      icon: Zap,
      title: "Builds Strength",
      description: "Water provides natural resistance that tones muscles effectively"
    },
    {
      icon: Activity,
      title: "Improves Cardio",
      description: "Excellent cardiovascular workout without strain on the heart"
    },
    {
      icon: Users,
      title: "Social & Fun",
      description: "Perfect for group classes and community fitness programs"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To revolutionize aquatic fitness by providing world-class poolbiking equipment that makes exercise accessible, enjoyable, and effective for everyone."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving fitness centers, rehabilitation facilities, and private pools across 50+ countries worldwide with premium equipment and support."
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Every piece of equipment undergoes rigorous testing to ensure it meets our highest standards for durability, safety, and performance."
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 flex items-center justify-center overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1614954553401-811f9df3f9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="About us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-900/80" />
        </motion.div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl mb-4"
          >
            About AquaCycle Pro
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-blue-100"
          >
            Leading the aquatic fitness revolution since 2010
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6">Who We Are</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  AquaCycle Pro is the world's leading manufacturer and supplier of premium poolbiking equipment. Since 2010, we've been passionate about making fitness accessible and enjoyable through innovative aquatic exercise solutions.
                </p>
                <p>
                  Our team of engineers, fitness experts, and aquatic specialists work together to create equipment that combines cutting-edge technology with proven biomechanics, ensuring every workout is safe, effective, and enjoyable.
                </p>
                <p>
                  With over 1,000 satisfied customers across 50+ countries, we've helped transform countless fitness facilities, rehabilitation centers, and private pools into thriving aquatic fitness destinations.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="rounded-lg overflow-hidden shadow-2xl"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760863329482-aa37dba2fd9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Our equipment"
                  className="w-full h-96 object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-4"
                >
                  <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-2xl mb-3">{value.title}</h3>
                <p className="text-gray-600 text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Benefits of Poolbiking
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience the unique advantages of aquatic cycling
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="h-12 w-12 bg-blue-700 rounded-lg flex items-center justify-center"
                  >
                    <benefit.icon className="h-6 w-6" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-xl mb-2">{benefit.title}</h3>
                  <p className="text-blue-200">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Equipment Models" },
              { number: "1000+", label: "Happy Customers" },
              { number: "50+", label: "Countries" },
              { number: "14", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-5xl md:text-6xl mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-xl text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
