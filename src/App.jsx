import React,{ useState, useEffect } from 'react';
import Preloader from './components/Preloader';

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
import TopCities from "@/components/TopCities.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      {loading ? <Preloader /> : (
        <>
        <Header onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <TrustBadges />
        <Services />
        <CityCoverage />
        {/* City cloud showcasing a shuffled selection of 100 cities */}
        <TopCities labelPrefix="Packers and Movers in" limit={100} />
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
        </>
      )}
    </div>
  )
}

export default App