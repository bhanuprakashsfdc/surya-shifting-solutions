import { Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "1BHK Local Shifting",
      price: "3,499",
      features: [
        "Complete packing materials",
        "Loading & unloading",
        "Local transportation",
        "Basic insurance",
      ],
      popular: false,
    },
    {
      name: "2BHK Local Shifting",
      price: "5,499",
      features: [
        "Premium packing materials",
        "Professional team",
        "Loading & unloading",
        "Comprehensive insurance",
      ],
      popular: true,
    },
    {
      name: "Car Transport India",
      price: "7,999",
      features: [
        "Door-to-door service",
        "GPS tracking",
        "Enclosed carrier",
        "Full vehicle insurance",
      ],
      popular: false,
    },
    {
      name: "Bike Transport India",
      price: "1,499",
      features: [
        "Safe packaging",
        "All India coverage",
        "Transit insurance",
        "Timely delivery",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Affordable and honest pricing for all your moving needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-border hover:shadow-xl transition-all duration-300 animate-scale-in ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">₹{plan.price}</span>
                  <span className="text-muted-foreground ml-2">onwards</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <svg
                        className="w-5 h-5 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a href="tel:+919876543210">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary-hover text-secondary-foreground"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for Exact Estimate
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            *Prices may vary based on distance, volume, and specific requirements
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
