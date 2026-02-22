import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO, HERO_CONTENT } from "@/constants/constants";

interface StickyCTAProps {
  onOpenQuoteModal: () => void;
}

// Mobile-only sticky bar for quick call / WhatsApp / quote actions
const StickyCTA = ({ onOpenQuoteModal }: StickyCTAProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="mx-auto max-w-screen-sm px-4 pb-4">
        <div className="rounded-full shadow-2xl bg-background border border-border flex">
          <a
            href={CONTACT_INFO.phoneHref}
            className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold text-primary"
          >
            <Phone className="w-4 h-4" />
            {HERO_CONTENT.primaryCta}
          </a>
          <span className="w-px bg-border" />
          <a
            href={CONTACT_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold text-secondary"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <span className="w-px bg-border" />
          <Button
            onClick={onOpenQuoteModal}
            className="flex-1 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-sm font-semibold"
          >
            {HERO_CONTENT.secondaryCta}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;

