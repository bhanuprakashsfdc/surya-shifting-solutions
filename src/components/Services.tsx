import { Home, Truck, Building2, Car, Package, Boxes } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Local House Shifting",
      description:
        "Professional packing and moving services for local household relocations. We handle everything from packing to unpacking with care and efficiency.",
    },
    {
      icon: Truck,
      title: "Long-Distance Relocation",
      description:
        "All-India shifting services for inter-city and inter-state moves. Safe transportation of your belongings across the country with real-time tracking.",
    },
    {
      icon: Building2,
      title: "Office Moving",
      description:
        "Corporate and commercial relocation services with minimal downtime. We handle office furniture, IT equipment, and documents with professional care.",
    },
    {
      icon: Car,
      title: "Car & Bike Transport",
      description:
        "Secure vehicle transportation services across India. Enclosed carriers and GPS tracking ensure your vehicle reaches safely to any destination.",
    },
    {
      icon: Package,
      title: "Packing & Unpacking",
      description:
        "Expert packing services using high-quality materials. Our trained staff ensures proper cushioning and protection for all your valuable items.",
    },
    {
      icon: Boxes,
      title: "Loading & Unloading",
      description:
        "Professional loading and unloading services with modern equipment. Our experienced team handles heavy items and fragile goods with expertise.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive packers and movers solutions for all your relocation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-xl transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
