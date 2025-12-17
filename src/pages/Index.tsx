import { useState } from "react";
import { Helmet } from "react-helmet";
import heroImage from "@/assets/hero-moving.jpg";
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
import {
  FAQ_SCHEMA,
  LOCAL_BUSINESS_SCHEMA,
  PRICING_SCHEMA,
  REVIEWS_SCHEMA,
} from "@/constants/constants";

const Index = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(LOCAL_BUSINESS_SCHEMA)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(FAQ_SCHEMA)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(PRICING_SCHEMA)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(REVIEWS_SCHEMA)}
        </script>
        <link rel="preload" as="image" href={heroImage} />
      </Helmet>

      <div className="min-h-screen">
        <Header onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <TrustBadges />
        <Services />
        <CityCoverage />
        <Pricing />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <QuoteModal 
          isOpen={isQuoteModalOpen} 
          onClose={() => setIsQuoteModalOpen(false)} 
        />
        <StickyCTA onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      </div>
    </>
  );
};

export default Index;
