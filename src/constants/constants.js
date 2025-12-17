import {
  Award,
  MapPin,
  Users,
  Shield,
  Clock,
  Home,
  Truck,
  Building2,
  Car,
  Package,
  Boxes,
  MessageSquare,
  Calculator,
  Truck as TruckIcon,
} from "lucide-react";

// Brand and contact details reused across the site
export const COMPANY = {
  name: "Surya All India Packers and Movers",
  shortName: "Surya Packers",
  tagline: "All India Movers",
  logoInitial: "S",
  url: "https://suryaallindiapackers.com",
};

export const CONTACT_INFO = {
  phoneDisplay: "+91-9876543210",
  phoneHref: "tel:+919876543210",
  whatsappDisplay: "+91-9876543210",
  whatsappHref: "https://wa.me/919876543210",
  email: "contact@suryaallindiapackers.com",
  address: "Hyderabad, Telangana, India",
  mainOffice: "Main Office: Hyderabad, Telangana",
  serviceAreas: [
    "Hyderabad",
    "Bangalore",
    "Chennai",
    "Vijayawada",
    "Guntur",
    "Vizag",
    "India",
  ],
};

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Prices", href: "#pricing" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
  title:
    "Packers and Movers in Hyderabad – Safe, Insured, GST-Billed Moves Across India",
  subtitle:
    "Fast local & all-India house shifting, office relocation, and vehicle transport with verified staff and full insurance.",
  primaryCta: "Call Now",
  secondaryCta: "Get Free Quote",
};

export const CTA_LABELS = {
  pricingCall: "Call for Exact Estimate",
};

export const HERO_TRUST_POINTS = [
  "500+ moves | 4.8/5 rating",
  "GST billing & full insurance",
  "24×7 support & live updates",
];

export const CITY_COVERAGE = [
  {
    city: "Hyderabad",
    headline: "Fast local moves with GST billing & insured transport",
    lanes: [
      "Hyderabad → Bangalore (2-3 days)",
      "Hyderabad → Chennai (2-3 days)",
      "Hyderabad → Vizag (1-2 days)",
    ],
    notes: ["Same-day packing available", "GPS tracking & 24×7 support"],
  },
  {
    city: "Bangalore",
    headline: "Expert IT/office moves and high-rise access",
    lanes: [
      "Bangalore → Hyderabad (2-3 days)",
      "Bangalore → Chennai (1-2 days)",
      "Bangalore → Pune/Mumbai (2-4 days)",
    ],
    notes: ["Weeknight office moves to reduce downtime", "Lift/hoist support on request"],
  },
  {
    city: "Chennai",
    headline: "Port-city expertise for vehicle and household moves",
    lanes: [
      "Chennai → Hyderabad (2-3 days)",
      "Chennai → Bangalore (1-2 days)",
      "Chennai → Coimbatore (1-2 days)",
    ],
    notes: ["Full insurance for vehicles", "Door-to-door enclosed carrier options"],
  },
  {
    city: "Vizag",
    headline: "Coastal lane specialists for household and bike moves",
    lanes: [
      "Vizag → Hyderabad (1-2 days)",
      "Vizag → Chennai (2-3 days)",
      "Vizag → Bangalore (3-4 days)",
    ],
    notes: ["Moisture-safe packing materials", "Bike crating and transit insurance"],
  },
];

export const TRUST_BADGES = [
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

export const SERVICES = [
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

export const PRICING_PLANS = [
  {
    name: "1BHK Local Shifting",
    price: "3,499",
    features: [
      "Complete packing materials",
      "Loading & unloading",
      "Local transportation",
      "Basic insurance",
    ],
    popular: false,
  },
  {
    name: "2BHK Local Shifting",
    price: "5,499",
    features: [
      "Premium packing materials",
      "Professional team",
      "Loading & unloading",
      "Comprehensive insurance",
    ],
    popular: true,
  },
  {
    name: "Car Transport India",
    price: "7,999",
    features: [
      "Door-to-door service",
      "GPS tracking",
      "Enclosed carrier",
      "Full vehicle insurance",
    ],
    popular: false,
  },
  {
    name: "Bike Transport India",
    price: "1,499",
    features: [
      "Safe packaging",
      "All India coverage",
      "Transit insurance",
      "Timely delivery",
    ],
    popular: false,
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    icon: MessageSquare,
    title: "Share Your Moving Details",
    description:
      "Contact us via call, WhatsApp, or our quote form. Provide your moving requirements and preferred dates.",
  },
  {
    icon: Calculator,
    title: "Get Instant Estimate",
    description:
      "Receive a transparent cost estimate within minutes. We confirm the schedule and send our team details.",
  },
  {
    icon: TruckIcon,
    title: "Relax & We Deliver",
    description:
      "Our professional team handles packing, loading, transport, and delivery. Track your shipment in real-time.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    location: "Hyderabad to Bangalore",
    rating: 5,
    text: "Excellent service! The team was professional and handled all my belongings with care. The entire process was smooth and stress-free. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    location: "Chennai to Vijayawada",
    rating: 5,
    text: "Very satisfied with their service. They arrived on time, packed everything carefully, and delivered within the promised time. Great experience overall!",
  },
  {
    name: "Anil Reddy",
    location: "Guntur to Vizag",
    rating: 5,
    text: "Best packers and movers I've used. Professional team, affordable pricing, and excellent customer service. My car was delivered safely without any scratches.",
  },
  {
    name: "Sneha Patel",
    location: "Bangalore to Hyderabad",
    rating: 4,
    text: "Good service at reasonable prices. The packing was done professionally and nothing was damaged. Would definitely use their services again.",
  },
  {
    name: "Vikram Singh",
    location: "Hyderabad to Chennai",
    rating: 5,
    text: "Impressed with their professionalism. They provided insurance, proper GST bill, and timely updates throughout the move. Trustworthy company!",
  },
];

export const TESTIMONIAL_META = {
  averageRating: "4.8/5",
  ratingValue: 4.8,
  reviewCount: 500,
};

// Structured data helpers and schema
const formatPrice = (price) => price.replace(/,/g, "");

export const PRICING_SCHEMA = PRICING_PLANS.map((plan) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: plan.name,
  brand: COMPANY.name,
  offers: {
    "@type": "Offer",
    price: formatPrice(plan.price),
    priceCurrency: "INR",
    availability: "http://schema.org/InStock",
  },
}));

export const REVIEWS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: TESTIMONIALS.slice(0, 5).map((review, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.text,
    },
  })),
};

export const FAQ_ITEMS = [
  {
    question: "How much do packers and movers charge in India?",
    answer:
      "Charges vary based on distance, volume, and specific services. Local shifting typically starts from ₹3,499 for 1BHK. We provide transparent, competitive pricing with no hidden costs. Contact us for a detailed estimate based on your requirements.",
  },
  {
    question: "Do you provide insurance for goods during transportation?",
    answer:
      "Yes, we offer comprehensive transit insurance to protect your belongings during the move. We also provide proper GST bills and maintain complete documentation for your peace of mind.",
  },
  {
    question: "How long does it take to shift from one city to another?",
    answer:
      "Transit time depends on the distance between cities. Typically, inter-city moves within the same state take 1-2 days, while long-distance relocations can take 3-7 days. We provide real-time tracking and regular updates throughout the journey.",
  },
  {
    question: "What packing materials do you use?",
    answer:
      "We use high-quality packing materials including corrugated boxes, bubble wrap, foam sheets, packing paper, and specialized boxes for fragile items. All materials meet industry standards to ensure maximum protection for your belongings.",
  },
  {
    question: "Can you transport vehicles (cars and bikes) across India?",
    answer:
      "Yes, we provide professional car and bike transport services across India. We use enclosed carriers with GPS tracking for safe transportation. Bike transport starts from ₹1,499 and car transport from ₹7,999, with full vehicle insurance included.",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "We provide real-time tracking for all our shipments. You'll receive regular updates via phone and WhatsApp. Our customer support team is available 24/7 to provide status updates and address any concerns.",
  },
  {
    question: "What if my goods get damaged during the move?",
    answer:
      "While we take utmost care in handling your belongings, in the rare event of damage, our transit insurance covers the loss. We process claims quickly and ensure fair compensation as per the insurance policy terms.",
  },
];

export const MOVE_TYPES = [
  { value: "local-house", label: "Local House Shifting" },
  { value: "long-distance", label: "Long Distance Relocation" },
  { value: "office", label: "Office Moving" },
  { value: "car", label: "Car Transport" },
  { value: "bike", label: "Bike Transport" },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Local House Shifting", href: "#services" },
    { name: "Long Distance Relocation", href: "#services" },
    { name: "Office Moving", href: "#services" },
    { name: "Car & Bike Transport", href: "#services" },
    { name: "Packing & Unpacking", href: "#services" },
  ],
  socials: [
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
  ],
};

export const HERO_QUICK_CONTACT = [
  {
    type: "phone",
    label: CONTACT_INFO.phoneDisplay,
    href: CONTACT_INFO.phoneHref,
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    href: CONTACT_INFO.whatsappHref,
  },
];

export const PRELOADER_TEXT = {
  brand: "SURYA",
  sublineTop: "All India",
  sublineBottom: "Packers and Movers",
};

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: COMPANY.name,
  image: "https://suryaallindiapackers.com/images/logo.png",
  telephone: CONTACT_INFO.phoneDisplay,
  email: CONTACT_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Office",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "17.385044",
    longitude: "78.486671",
  },
  url: COMPANY.url,
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "500",
  },
  areaServed: CONTACT_INFO.serviceAreas,
  serviceType: [
    "House Shifting",
    "Office Relocation",
    "Vehicle Transport",
    "Packing Services",
    "Loading and Unloading",
  ],
};

export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.slice(0, 3).map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};
