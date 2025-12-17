import { useState } from "react";
import { Helmet } from "react-helmet";
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
import { FAQ_SCHEMA, LOCAL_BUSINESS_SCHEMA } from "@/constants/constants";

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
      </Helmet>

      <div className="min-h-screen">
        <Header onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <TrustBadges />
        <Services />
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
      </div>
    </>
  );
};

export default Index;
