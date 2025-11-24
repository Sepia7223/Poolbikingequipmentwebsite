import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Check, Calendar, Truck, Wrench, HeadphonesIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import heroBg from "../content/Marketing/formació Melia 076 poolbiking.jpg";

export function RentalPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const rentalPlans = [
    {
      id: "daily",
      name: "Daily Rental",
      price: "$50-130",
      period: "per day",
      description: "Perfect for events and trials",
      features: [
        "Any model available",
        "Delivery & setup included",
        "24-hour rental period",
        "Technical support",
        "No long-term commitment"
      ],
      icon: Calendar
    },
    {
      id: "weekly",
      name: "Weekly Rental",
      price: "$280-850",
      period: "per week",
      description: "Great for short-term programs",
      features: [
        "Choose any model",
        "Free delivery & setup",
        "7-day rental period",
        "Free maintenance check",
        "Priority support",
        "Flexible extension options"
      ],
      popular: true,
      icon: Calendar
    },
    {
      id: "monthly",
      name: "Monthly Rental",
      price: "$850-3000",
      period: "per month",
      description: "Best value for ongoing use",
      features: [
        "All models available",
        "Free delivery & setup",
        "30-day rental period",
        "Weekly maintenance",
        "24/7 support",
        "Flexible upgrade options",
        "Discounted rates"
      ],
      icon: Calendar
    }
  ];

  const benefits = [
    {
      icon: Truck,
      title: "Free Delivery",
      description: "We deliver and set up the equipment at your location"
    },
    {
      icon: Wrench,
      title: "Maintenance Included",
      description: "Regular maintenance checks and repairs included"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all rental clients"
    },
    {
      icon: Calendar,
      title: "Flexible Terms",
      description: "Easy extension or early return options available"
    }
  ];

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
            <h1 className="text-5xl md:text-6xl mb-6">Equipment Rental</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Flexible rental options for events, trials, or ongoing programs
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Rental Plans */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Choose Your Rental Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All plans include delivery, setup, and ongoing support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {rentalPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setSelectedPlan(plan.id)}
                onHoverEnd={() => setSelectedPlan(null)}
              >
                <Card className={`relative h-full transition-all ${
                  plan.popular ? 'border-blue-600 border-2 shadow-2xl' : 'shadow-lg'
                } ${selectedPlan === plan.id ? 'shadow-2xl' : ''}`}>
                  {plan.popular && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full"
                    >
                      Most Popular
                    </motion.div>
                  )}
                  <CardHeader>
                    <motion.div
                      animate={selectedPlan === plan.id ? { rotate: 360 } : {}}
                      transition={{ duration: 0.6 }}
                      className="mb-4"
                    >
                      <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <plan.icon className="h-8 w-8 text-blue-600" />
                      </div>
                    </motion.div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl">{plan.price}</span>
                      <span className="text-gray-600"> {plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
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
                        <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                          Get Started
                        </Button>
                      </motion.div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-3xl text-center mb-12">Rental Benefits</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  className="text-center"
                >
                  <div className="inline-block mb-4">
                    <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
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
              Ready to Rent?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today to discuss your rental needs and get a custom quote
            </p>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  Contact Us Now
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
