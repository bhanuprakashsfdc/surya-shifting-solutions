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

          {/* SEO-friendly content sections that naturally reinforce the topic */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground">Trusted Packers and Movers in {city}</h2>
              <p className="mt-2 text-muted-foreground">
                As experienced packers and movers in {city}, we handle local house shifting, office relocation, and vehicle transport with insured service and GST billing. Our movers and packers team plans your move, packs with premium materials, and delivers safely across {city} and pan‑India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">Neighborhood Coverage in {city}</h2>
              <p className="mt-2 text-muted-foreground">
                We regularly serve popular neighborhoods in {city} with door‑to‑door packers and movers support:
              </p>
              <ul className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                <li>Downtown {city}</li>
                <li>Old Town {city}</li>
                <li>Industrial Area</li>
                <li>University Quarter</li>
                <li>Transport Nagar</li>
                <li>Residential Enclaves</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">Relocation Services in {city}</h2>
              <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Home shifting by professional packers and movers in {city}</li>
                <li>Office relocation with labeling and insured transport</li>
                <li>Car and bike transport with GPS tracking</li>
                <li>Premium packing, careful loading, and safe delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">Moving Tips for {city}</h2>
              <p className="mt-2 text-muted-foreground">
                For a smooth experience with packers and movers in {city}, book 3–5 days in advance, share an item list, and keep fragile items clearly marked. Our team provides real‑time updates and 24×7 assistance.
              </p>
            </section>
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
import { Helmet } from "react-helmet";
import { COMPANY } from "@/constants/constants";

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
  const hyphenSlug = (derived || "").toLowerCase();
  const canonical = `${COMPANY.url}/packers-and-movers-in/${hyphenSlug}`;
  const pageTitle = `${titlePrefix} ${city} | ${COMPANY.name}`;
  const pageDescription = `Safe, insured house shifting, office relocation and vehicle transport in ${city}. Free 5‑minute quote. GST bill. Pan‑India network.`;
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": COMPANY.url,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `Packers and Movers in ${city}`,
        "item": canonical,
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbList)}</script>
      </Helmet>
      <CityLanding
        city={city}
        title={`${titlePrefix} ${city}`}
        subtitle={subtitle}
      />
    </>
  );
};

