import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Waves, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <Waves className="h-8 w-8 text-blue-500" />
              </motion.div>
              <span className="text-xl text-white">AquaCycle Pro</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Leading provider of premium poolbiking equipment for fitness centers, rehabilitation facilities, and private pools.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-blue-500 transition"
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Equipment", path: "/equipment" },
                { name: "Rental", path: "/rental" },
                { name: "Sales", path: "/sales" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={link.path} className="hover:text-blue-500 transition">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Equipment Rental",
                "Equipment Sales",
                "Maintenance",
                "Training Programs",
                "Custom Solutions",
                "Support"
              ].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="hover:text-blue-500 transition">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AquaCycle Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
