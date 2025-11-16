import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1633430480411-9b0e11d8202e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcXVhJTIwYmlrZSUyMHBvb2x8ZW58MXx8fHwxNzYzMzE3MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Pool biking"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-900/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
          Transform Your Fitness with Poolbiking
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">
          Low-impact, high-intensity aquatic cycling equipment for pools and aquatic centers
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={scrollToContact} className="bg-white text-blue-900 hover:bg-gray-100">
            Rent Equipment
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToContact} className="border-white text-white hover:bg-white/10">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}
