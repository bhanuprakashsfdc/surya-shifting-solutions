import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CONTACT_INFO, MOVE_TYPES } from "@/constants/constants";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    fromCity: "",
    toCity: "",
    moveType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.fromCity || !formData.toCity) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "Quote Request Sent!",
      description: "We'll contact you shortly with a detailed estimate.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      fromCity: "",
      toCity: "",
      moveType: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Free Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us for a detailed estimate and start your hassle-free relocation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91-XXXXXXXXXX"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fromCity" className="block text-sm font-medium text-foreground mb-2">
                    From City *
                  </label>
                  <Input
                    id="fromCity"
                    value={formData.fromCity}
                    onChange={(e) => setFormData({ ...formData, fromCity: e.target.value })}
                    placeholder="Current location"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="toCity" className="block text-sm font-medium text-foreground mb-2">
                    To City *
                  </label>
                  <Input
                    id="toCity"
                    value={formData.toCity}
                    onChange={(e) => setFormData({ ...formData, toCity: e.target.value })}
                    placeholder="Destination"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="moveType" className="block text-sm font-medium text-foreground mb-2">
                  Move Type
                </label>
                <Select
                  value={formData.moveType}
                  onValueChange={(value) => setFormData({ ...formData, moveType: value })}
                >
                  <SelectTrigger id="moveType">
                    <SelectValue placeholder="Select move type" />
                  </SelectTrigger>
                    <SelectContent>
                      {MOVE_TYPES.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Additional Details
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide any specific requirements or questions..."
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                Get Free Quote
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a 
                  href={CONTACT_INFO.phoneHref}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <p className="text-muted-foreground">{CONTACT_INFO.phoneDisplay}</p>
                    <p className="text-sm text-primary mt-1">Click to call now</p>
                  </div>
                </a>

                <a 
                  href={CONTACT_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">WhatsApp</p>
                    <p className="text-muted-foreground">{CONTACT_INFO.whatsappDisplay}</p>
                    <p className="text-sm text-secondary mt-1">Chat with us</p>
                  </div>
                </a>

                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <p className="text-muted-foreground break-all">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p className="text-muted-foreground">
                      {CONTACT_INFO.mainOffice}
                      <br />
                      Serving: {CONTACT_INFO.serviceAreas.slice(0, 6).join(", ")} & All India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg h-64">
              <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                <MapPin className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
