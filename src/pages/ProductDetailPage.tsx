import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { equipmentData } from "../data/equipment";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Check, ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function ProductDetailPage() {
  const { id } = useParams();
  const product = equipmentData.find(item => item.id === id);

  if (!product) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Product Not Found</h1>
          <Link to="/equipment">
            <Button>Back to Equipment</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/equipment">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition" />
              Back to Equipment
            </Button>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Badge className="bg-blue-600">{product.category}</Badge>
                {product.inStock && (
                  <Badge className="bg-green-600">In Stock</Badge>
                )}
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl mb-4">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-8">{product.description}</p>

            {/* Pricing */}
            <div className="mb-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-2xl mb-2">Pricing available on request</h3>
                <p className="text-gray-700 mb-4">
                  Contact our team to buy or rent this equipment. We’ll tailor a quote to your project.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/sales">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full group">Contact Sales</Button>
                    </motion.div>
                  </Link>
                  <Link to="/rental">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="outline" className="w-full group">Rental Inquiry</Button>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl mb-6">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                        </div>
                        <span className="text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specs" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl mb-6">Technical Specifications</h3>
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex justify-between py-3 border-b last:border-0"
                      >
                        <span className="text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span>{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl mb-8">Similar Equipment</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {equipmentData
              .filter(item => item.category === product.category && item.id !== product.id)
              .slice(0, 3)
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Link to={`/equipment/${item.id}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition">
                      <div className="h-48 overflow-hidden">
                        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
                          <ImageWithFallback
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </div>
                      <CardContent className="pt-4">
                        <h4 className="text-xl mb-2">{item.name}</h4>
                        <p className="text-gray-600 mb-2">{item.shortDescription}</p>
                        <div className="text-sm text-blue-600">View details →</div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
