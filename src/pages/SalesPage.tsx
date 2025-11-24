import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Check, Package, Shield, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { equipmentData } from "../data/equipment";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import heroBg from "../content/Marketing/formacio-melia-076-poolbiking.jpg";

export function SalesPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const purchasePackages = [
    {
      name: "Single Unit",
      price: "$2,200 - $7,500",
      description: "Perfect for home pools or small facilities",
      features: [
        "Choose any model",
        "2-3 year warranty",
        "Free delivery & setup",
        "Installation guide",
        "Email support"
      ]
    },
    {
      name: "Studio Package",
      price: "From $15,000",
      description: "5-10 bikes for fitness studios",
      features: [
        "Mix & match models",
        "3-year warranty",
        "Free delivery & setup",
        "Staff training session",
        "Priority support",
        "10% bulk discount"
      ],
      popular: true
    },
    {
      name: "Commercial Fleet",
      price: "Custom Quote",
      description: "10+ bikes for large facilities",
      features: [
        "Custom configuration",
        "5-year warranty",
        "White-glove service",
        "Comprehensive training",
        "24/7 dedicated support",
        "Up to 20% discount",
        "Maintenance package"
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Extended Warranty",
      description: "Industry-leading warranty coverage on all equipment"
    },
    {
      icon: Package,
      title: "Free Delivery",
      description: "Complimentary delivery and professional setup"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Premium materials built to last years"
    },
    {
      icon: Zap,
      title: "Quick Shipping",
      description: "Fast processing and delivery times"
    }
  ];

  const featuredModels = equipmentData.slice(0, 6);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative text-white py-20 overflow-hidden"
      >
        <div className="absolute inset-0">
          <ImageWithFallback src={heroBg} alt="Poolbiking equipment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/65 to-cyan-900/45" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl mb-6">Purchase Equipment</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Invest in premium poolbiking equipment for your facility
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Purchase Packages */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Purchase Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that fits your needs, from single units to full fleets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {purchasePackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className={`relative h-full ${
                  pkg.popular ? 'border-blue-600 border-2 shadow-2xl' : 'shadow-lg'
                }`}>
                  {pkg.popular && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full"
                    >
                      Best Value
                    </motion.div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-base">{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <div className="text-3xl">{pkg.price}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                          className="flex items-start gap-2"
                        >
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                          Request Quote
                        </Button>
                      </motion.div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <motion.div
            ref={benefitsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl text-center mb-12">Purchase Benefits</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={benefitsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block mb-4"
                  >
                    <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                  </motion.div>
                  <h4 className="text-xl mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Featured Models</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our top-selling poolbiking equipment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link to={`/equipment/${model.id}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition h-full">
                    <CardHeader>
                      <CardTitle>{model.name}</CardTitle>
                      <CardDescription>{model.shortDescription}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl mb-4">${model.price.toLocaleString()}</div>
                      <motion.div whileHover={{ x: 5 }} className="text-blue-600 flex items-center gap-2">
                        View Details
                        <span>→</span>
                      </motion.div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/equipment">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg">View All Equipment</Button>
              </motion.div>
            </Link>
          </motion.div>
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
              Ready to Purchase?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our sales team for pricing and custom configurations
            </p>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  Get a Quote
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
