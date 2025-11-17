import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Waves } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];

  const serviceLinks = [
    { name: "Browse Equipment", path: "/equipment" },
    { name: "Equipment Rental", path: "/rental" },
    { name: "Equipment Sales", path: "/sales" },
    { name: "Maintenance", path: "/services/maintenance" },
    { name: "Training Programs", path: "/services/training" },
    { name: "Custom Solutions", path: "/services/custom-solutions" },
    { name: "Support", path: "/services/support" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Waves className="h-8 w-8 text-blue-600" />
            </motion.div>
            <span className="text-xl group-hover:text-blue-600 transition">AquaCycle Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span className={`transition ${
                  location.pathname === link.path ? "text-blue-600" : "hover:text-blue-600"
                }`}>
                  {link.name}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`transition ${
                serviceLinks.some(s => location.pathname === s.path) ? "text-blue-600" : "hover:text-blue-600"
              }`}>
                Services ▾
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50"
                  >
                    {serviceLinks.map((service, index) => (
                      <motion.div
                        key={service.path}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={service.path}
                          className={`block px-4 py-2 transition hover:bg-blue-50 ${
                            location.pathname === service.path ? "text-blue-600 bg-blue-50" : "text-gray-700"
                          }`}
                        >
                          {service.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact">
              <Button className="group">
                Get Started
                <motion.span
                  className="inline-block ml-1"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-2 rounded transition ${
                        location.pathname === link.path
                          ? "bg-blue-50 text-blue-600"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Services Dropdown */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition flex items-center justify-between"
                  >
                    <span>Services</span>
                    <motion.span
                      animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ▾
                    </motion.span>
                  </button>
                  
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {serviceLinks.map((service, idx) => (
                          <motion.div
                            key={service.path}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link
                              to={service.path}
                              className={`block pl-8 pr-4 py-2 text-sm rounded transition ${
                                location.pathname === service.path
                                  ? "bg-blue-50 text-blue-600"
                                  : "hover:bg-gray-100"
                              }`}
                            >
                              {service.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <div className="px-4 pt-2">
                  <Link to="/contact">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
