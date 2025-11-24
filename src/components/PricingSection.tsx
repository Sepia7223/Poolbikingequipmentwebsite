import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

export function PricingSection() {
  const rentalPlans = [
    {
      name: "Daily Rental",
      price: "$50",
      period: "per day",
      features: [
        "Any model available",
        "Delivery & setup included",
        "24-hour rental period",
        "Technical support"
      ]
    },
    {
      name: "Weekly Rental",
      price: "$300",
      period: "per week",
      features: [
        "Choose any model",
        "Delivery & setup included",
        "7-day rental period",
        "Free maintenance check",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Monthly Rental",
      price: "$1,000",
      period: "per month",
      features: [
        "All models available",
        "Free delivery & setup",
        "30-day rental period",
        "Weekly maintenance",
        "24/7 support",
        "Flexible upgrade options"
      ]
    }
  ];

  const purchasePlans = [
    {
      name: "Poolbiking Caribbean Classic",
      price: "$2,500",
      features: [
        "2-year warranty",
        "Free delivery",
        "Setup assistance",
        "Maintenance guide"
      ]
    },
    {
      name: "Poolbiking Caribbean Pro",
      price: "$4,200",
      features: [
        "3-year warranty",
        "Free delivery & setup",
        "Training session included",
        "Priority maintenance service",
        "Extended support"
      ],
      popular: true
    },
    {
      name: "Poolbiking Caribbean Rehab",
      price: "$3,500",
      features: [
        "3-year warranty",
        "Free delivery & setup",
        "Medical consultation",
        "Customization options",
        "Dedicated support line"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Flexible Options for Every Budget
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose to rent for short-term needs or purchase for long-term investment
          </p>
        </div>

        {/* Rental Pricing */}
        <div className="mb-16">
          <h3 className="text-3xl text-center mb-8">Rental Plans</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {rentalPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-blue-600 border-2 shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-3xl text-gray-900">{plan.price}</span>
                    <span className="text-gray-600"> {plan.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Rent Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Purchase Pricing */}
        <div>
          <h3 className="text-3xl text-center mb-8">Purchase Options</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {purchasePlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-blue-600 border-2 shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full">
                    Best Value
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-3xl text-gray-900">{plan.price}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Purchase
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
