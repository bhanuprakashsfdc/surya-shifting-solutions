import { Award, MapPin, Users, Shield, Clock } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Serving customers since 2014",
    },
    {
      icon: MapPin,
      title: "All India Service",
      description: "Pan-India coverage",
    },
    {
      icon: Users,
      title: "Professional Staff",
      description: "Trained & verified team",
    },
    {
      icon: Shield,
      title: "GST Bill & Insurance",
      description: "Complete protection",
    },
    {
      icon: Clock,
      title: "24×7 Support",
      description: "Always available",
    },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="bg-trust-bg rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-trust-icon" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
