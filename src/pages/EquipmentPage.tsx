import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "react-intersection-observer";
import { equipmentData, categories } from "../data/equipment";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "../components/ui/input";

export function EquipmentPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredEquipment = equipmentData.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl mb-6">Our Equipment</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Browse 10 Poolbiking bikes, platforms, and accessories built for aquatic fitness and rehab
            </p>
          </motion.div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search equipment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600">Filter:</span>
            </div>
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Equipment Grid */}
        <div ref={ref}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredEquipment.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  layout
                >
                  <Link to={`/equipment/${item.id}`}>
                    <Card className="h-full overflow-hidden hover:shadow-2xl transition-shadow group">
                      <div className="h-64 overflow-hidden relative bg-white flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                        >
                          <ImageWithFallback
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain p-4"
                          />
                        </motion.div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-blue-600">{item.category}</Badge>
                        </div>
                        {item.inStock && (
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            className="absolute top-4 left-4"
                          >
                            <Badge className="bg-green-600">In Stock</Badge>
                          </motion.div>
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle className="group-hover:text-blue-600 transition">
                          {item.name}
                        </CardTitle>
                        <CardDescription>{item.shortDescription}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-gray-600 mb-4">
                          Pricing available on request for purchase or rental.
                        </div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="text-blue-600 flex items-center gap-2"
                        >
                          View Details
                          <span>&rarr;</span>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredEquipment.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-600">No equipment found matching your criteria</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
