import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
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

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our packers and movers services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
