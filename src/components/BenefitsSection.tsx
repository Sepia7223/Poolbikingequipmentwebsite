import { Flame, Shield, Smile, Zap, Activity, Users } from "lucide-react";

export function BenefitsSection() {
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

  return (
    <section id="benefits" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Benefits of Poolbiking
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experience the unique advantages of aquatic cycling for fitness, rehabilitation, and wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-blue-700 rounded-lg flex items-center justify-center">
                  <benefit.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">{benefit.title}</h3>
                <p className="text-blue-200">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
