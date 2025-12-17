import { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MOVE_TYPES } from "@/constants/constants";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
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
    
    if (!formData.name || !formData.phone || !formData.fromCity || !formData.toCity) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Quote Request Sent!",
      description: "We'll contact you shortly with a detailed estimate.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      fromCity: "",
      toCity: "",
      moveType: "",
      message: "",
    });
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Get Free Quote</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll send you a detailed estimate within minutes.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-name" className="block text-sm font-medium text-foreground mb-1">
                Name *
              </label>
              <Input
                id="modal-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="modal-phone" className="block text-sm font-medium text-foreground mb-1">
                Phone *
              </label>
              <Input
                id="modal-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91-XXXXXXXXXX"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="modal-email" className="block text-sm font-medium text-foreground mb-1">
              Email
            </label>
            <Input
              id="modal-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-fromCity" className="block text-sm font-medium text-foreground mb-1">
                From City *
              </label>
              <Input
                id="modal-fromCity"
                value={formData.fromCity}
                onChange={(e) => setFormData({ ...formData, fromCity: e.target.value })}
                placeholder="Current location"
                required
              />
            </div>
            <div>
              <label htmlFor="modal-toCity" className="block text-sm font-medium text-foreground mb-1">
                To City *
              </label>
              <Input
                id="modal-toCity"
                value={formData.toCity}
                onChange={(e) => setFormData({ ...formData, toCity: e.target.value })}
                placeholder="Destination"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="modal-moveType" className="block text-sm font-medium text-foreground mb-1">
              Move Type
            </label>
            <Select
              value={formData.moveType}
              onValueChange={(value) => setFormData({ ...formData, moveType: value })}
            >
              <SelectTrigger id="modal-moveType">
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
            <label htmlFor="modal-message" className="block text-sm font-medium text-foreground mb-1">
              Additional Details
            </label>
            <Textarea
              id="modal-message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Any specific requirements..."
              rows={3}
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              Send Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
