import React,{ useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import Error from './components/Error'

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

function App() {
  const [loading, setLoading] = useState(true);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

   // JSON-LD Structured Data
   const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Surya All India Packers and Movers",
    "image": "https://suryaallindiapackers.com/images/logo.png",
    "telephone": "+91-9876543210",
    "email": "contact@suryaallindiapackers.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Office",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.385044",
      "longitude": "78.486671"
    },
    "url": "https://suryaallindiapackers.com",
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    },
    "areaServed": [
      "Hyderabad",
      "Bangalore",
      "Chennai",
      "Vijayawada",
      "Guntur",
      "Vizag",
      "India"
    ],
    "serviceType": [
      "House Shifting",
      "Office Relocation",
      "Vehicle Transport",
      "Packing Services",
      "Loading and Unloading"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do packers and movers charge in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Charges vary based on distance, volume, and specific services. Local shifting typically starts from ₹3,499 for 1BHK. We provide transparent, competitive pricing with no hidden costs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide insurance for goods during transportation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive transit insurance to protect your belongings during the move. We also provide proper GST bills and maintain complete documentation."
        }
      },
      {
        "@type": "Question",
        "name": "Can you transport vehicles (cars and bikes) across India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide professional car and bike transport services across India. We use enclosed carriers with GPS tracking for safe transportation with full vehicle insurance included."
        }
      }
    ]
  };
  
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
        </>
      )}
    </div>
  )
}

export default App