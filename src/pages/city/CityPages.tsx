import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO, HERO_CONTENT } from "@/constants/constants";
import TopCities from "@/components/TopCities.jsx";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import StickyCTA from "@/components/StickyCTA";
import CityCoverage from "@/components/CityCoverage";

interface CityPageProps {
  city: string;
  title: string;
  subtitle: string;
}

const CityLanding = ({ city, title, subtitle }: CityPageProps) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const keywordPhrase = title; // e.g. "Packers and Movers in {city}" or similar

  return (
    <div className="min-h-screen bg-background">
      {/* Reuse homepage components for consistent look */}
      <Header onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <Hero 
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
        title={title}
        subtitle={subtitle}
      />
      <TrustBadges />
      <Services />
      <CityCoverage />
      <Pricing />
      <HowItWorks />
      <Testimonials />

      {/* City-specific intro and CTAs */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{city}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">{title}</h1>
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={CONTACT_INFO.phoneHref}>
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                {HERO_CONTENT.primaryCta}
              </Button>
            </a>
            <Button
              variant="outline"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Get Instant Quote
            </Button>
            <a href={CONTACT_INFO.whatsappHref} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">WhatsApp</Button>
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2 bg-muted/40 border border-border rounded-xl p-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Why choose us in {city}?</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>Verified crew, GST billing, and full insurance coverage</li>
                <li>Door-to-door service with loading/unloading included</li>
                <li>Real-time updates and dedicated support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Get your move started</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Call or WhatsApp for an instant estimate tailored to your pickup/drop in {city}.
              </p>
              <div className="text-sm text-foreground">
                <div className="font-semibold">Call: {CONTACT_INFO.phoneDisplay}</div>
                <div>WhatsApp: {CONTACT_INFO.whatsappDisplay}</div>
                <div>Email: {CONTACT_INFO.email}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified city link cloud using a single source of truth */}
      <TopCities labelPrefix="Packers and Movers in" />

      {/* FAQ, Contact, Footer and sticky CTA like homepage */}
      <FAQ />
      <Contact />
      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <StickyCTA onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
    </div>
  );
};

const makePage = (titlePrefix: string, subtitle: string) => {
  return ({ city }: { city: string }) => (
    <CityLanding
      city={city}
      title={`${titlePrefix} ${city}`}
      subtitle={subtitle}
    />
  );
};

export const CityService = makePage(
  "Packers and Movers in",
  "Trusted city-to-city and local relocations with insured transport."
);

export const Packersandmovers = makePage(
  "Packers and Movers",
  "Safe packing, loading, transport, and unloading with real-time updates."
);

export const Packersandmoversnearme = makePage(
  "Packers and Movers Near",
  "Nearby crews for quick response, local moves, and urgent packing support."
);

export const BestPackersandMovers = makePage(
  "Best Packers and Movers",
  "Experienced teams, quality materials, and transparent pricing."
);

export const BestPackersandMoversin = makePage(
  "Best Packers and Movers in",
  "Top-rated moves with GST billing and full insurance options."
);

export const LocalPackerandMovers = makePage(
  "Local Packers and Movers",
  "Fast local shifting with careful handling of fragile and bulky items."
);

export const LocalPackerandMoversin = makePage(
  "Local Packers and Movers in",
  "Neighborhood specialists for same-day packing and local transport."
);

export const ProfessionalPackerandMovers = makePage(
  "Professional Packers and Movers",
  "Trained staff, protective packing, and door-to-door delivery."
);

export const ProfessionalPackerandMoversin = makePage(
  "Professional Packers and Movers in",
  "Professional-grade packing, secure loading, and insured transit."
);

export const Packersandmoversnearmein = makePage(
  "Packers and Movers Near Me in",
  "Local crews ready for quick deployment with live support."
);

// Dynamic route wrapper: supports /packers-and-movers-in-:slug.html
// Derives city name from URL for dynamic routing use cases.
import { useParams, useLocation } from "react-router-dom";

export const CityServiceParam = () => {
  const { slug } = useParams();
  const location = useLocation();
  // Fallback: derive slug from pathname for wildcard routes like /packers-and-movers-in-*.html
  let derived = slug;
  if (!derived) {
    const path = location.pathname || "";
    // Strip leading prefix and trailing .html if present
    derived = path
      .replace(/^\/?packers-and-movers-in-/, "")
      .replace(/\.html$/, "");
  }
  const city = decodeURIComponent((derived || "").replace(/-/g, " "));
  const titlePrefix = "Packers and Movers in";
  const subtitle = "Trusted city-to-city and local relocations with insured transport.";
  return (
    <CityLanding
      city={city}
      title={`${titlePrefix} ${city}`}
      subtitle={subtitle}
    />
  );
};

