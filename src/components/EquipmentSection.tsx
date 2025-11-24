import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Check } from "lucide-react";

export function EquipmentSection() {
  const equipment = [
    {
      name: "Poolbiking Caribbean Classic",
      description: "Our standard poolbike, perfect for group classes and personal training",
      image: "https://images.unsplash.com/photo-1614954553401-811f9df3f9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBmaXRuZXNzfGVufDF8fHx8MTc2MzMxNzM2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Adjustable resistance levels",
        "Ergonomic seat design",
        "Corrosion-resistant frame",
        "Non-slip pedals"
      ]
    },
    {
      name: "Poolbiking Caribbean Pro",
      description: "Premium model with advanced features for serious athletes",
      image: "https://images.unsplash.com/photo-1760863329482-aa37dba2fd9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGN5Y2xpbmclMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYzMzE3MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Digital resistance control",
        "Performance tracking display",
        "Premium cushioned seat",
        "Customizable handlebar positions"
      ]
    },
    {
      name: "Poolbiking Caribbean Rehab",
      description: "Therapeutic model designed for rehabilitation and recovery",
      image: "https://images.unsplash.com/photo-1633430480411-9b0e11d8202e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcXVhJTIwYmlrZSUyMHBvb2x8ZW58MXx8fHwxNzYzMzE3MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Extra stability features",
        "Low-entry design",
        "Gentle resistance options",
        "Medical-grade construction"
      ]
    }
  ];

  return (
    <section id="equipment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Our Equipment Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our selection of premium poolbiking equipment designed for every need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition">
              <div className="h-64 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Button className="flex-1">Rent</Button>
                  <Button variant="outline" className="flex-1">Buy</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
