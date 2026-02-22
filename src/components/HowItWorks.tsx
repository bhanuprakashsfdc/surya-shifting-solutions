import { HOW_IT_WORKS_STEPS } from "@/constants/constants";

const HowItWorks = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple 3-step process for hassle-free relocation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (Hidden on mobile) */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-border -z-10"></div>

          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s`, opacity: 0, animationFillMode: "forwards" }}
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-full mb-6 relative z-10 shadow-lg">
                  <Icon className="w-12 h-12 text-primary-foreground" />
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary/20 rounded-full -z-10"></div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
