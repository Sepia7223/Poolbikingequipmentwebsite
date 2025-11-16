import { Droplets, Heart, Users, Award } from "lucide-react";

export function AboutSection() {
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

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Why Choose Poolbiking?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Poolbiking combines the benefits of cycling with the resistance of water, creating the ultimate low-impact, high-intensity workout
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
