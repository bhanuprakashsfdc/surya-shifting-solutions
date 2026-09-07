import { AlertCircle, MessageCircle, Phone } from "lucide-react";
import { CONTACT_INFO, WEBSITE_CREDIT } from "@/constants/constants";

const OwnerNoticeBanner = () => {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm sm:px-6 sm:py-10"
      role="dialog"
      aria-modal="true"
      aria-label="Owner payment notice"
    >
      <div className="w-full max-w-2xl rounded-3xl border border-amber-400/30 bg-background/95 p-6 shadow-2xl sm:p-10">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full bg-amber-500/15 px-4 py-1.5 text-base font-semibold text-amber-700">
            <AlertCircle className="mr-2 h-5 w-5" />
            Owner Update
          </span>

          <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl">
            Pending Payment Notice
          </h2>

          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            This project has a pending payment. Please contact us at the number below to settle the balance and continue the service.
          </p>

          <div className="mt-8 flex w-full max-w-md flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`tel:+91${WEBSITE_CREDIT.phone.replace(/^\+91-/, "")}`}
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              {WEBSITE_CREDIT.phone}
            </a>
            <a
              href={`https://wa.me/91${WEBSITE_CREDIT.phone.replace(/^\+91-/, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-secondary/40 px-6 py-4 text-lg font-medium text-secondary transition-colors hover:bg-secondary/10 sm:w-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
          </div>

          <p className="mt-6 text-base text-muted-foreground">
            This notice stays active until the payment is resolved.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Designed & maintained by <span className="font-medium">{WEBSITE_CREDIT.designer}</span> — {WEBSITE_CREDIT.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OwnerNoticeBanner;
