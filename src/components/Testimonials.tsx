import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-xl font-semibold text-foreground">4.8/5</span>
          </div>
          <p className="text-lg text-muted-foreground">
            Rated by 500+ happy customers
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="border-border shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
