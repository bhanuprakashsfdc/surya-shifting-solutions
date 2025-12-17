import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-moving.jpg";
import {
  HERO_CONTENT,
  CONTACT_INFO,
  HERO_QUICK_CONTACT,
  HERO_TRUST_POINTS,
} from "@/constants/constants";

const Hero = ({ onOpenQuoteModal }: { onOpenQuoteModal: () => void }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional packers and movers team with happy family"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {HERO_CONTENT.title}
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {HERO_CONTENT.subtitle}
            </p>
          </div>

          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
          >
            <a href={CONTACT_INFO.phoneHref}>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                {HERO_CONTENT.primaryCta}
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto bg-secondary hover:bg-secondary-hover text-secondary-foreground border-0 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {HERO_CONTENT.secondaryCta}
            </Button>
          </div>

          {/* Trust proof chips */}
          <div
            className="mt-6 flex flex-wrap gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}
          >
            {HERO_TRUST_POINTS.map((point) => (
              <span
                key={point}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-sm font-semibold text-primary"
              >
                {point}
              </span>
            ))}
          </div>

          {/* Quick Contact */}
          <div 
            className="mt-8 flex flex-wrap gap-4 text-sm animate-fade-in-up"
            style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}
          >
            {HERO_QUICK_CONTACT.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.type === "whatsapp" ? "_blank" : undefined}
                rel={link.type === "whatsapp" ? "noopener noreferrer" : undefined}
                className="flex items-center text-foreground hover:text-primary transition-colors"
              >
                {link.type === "phone" ? (
                  <Phone className="w-4 h-4 mr-2" />
                ) : (
                  <MessageCircle className="w-4 h-4 mr-2" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
