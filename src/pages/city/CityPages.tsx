import { Button } from "@/components/ui/button";
import { CONTACT_INFO, HERO_CONTENT } from "@/constants/constants";

interface CityPageProps {
  city: string;
  title: string;
  subtitle: string;
}

const CityLanding = ({ city, title, subtitle }: CityPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {city}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={CONTACT_INFO.phoneHref}>
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                {HERO_CONTENT.primaryCta}
              </Button>
            </a>
            <a href={CONTACT_INFO.whatsappHref} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">WhatsApp</Button>
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2 bg-muted/40 border border-border rounded-xl p-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Why choose us in {city}?</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>Verified crew, GST billing, and full insurance coverage</li>
                <li>Door-to-door service with loading/unloading included</li>
                <li>Real-time updates and dedicated support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Get your move started</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Call or WhatsApp for an instant estimate tailored to your pickup/drop in {city}.
              </p>
              <div className="text-sm text-foreground">
                <div className="font-semibold">Call: {CONTACT_INFO.phoneDisplay}</div>
                <div>WhatsApp: {CONTACT_INFO.whatsappDisplay}</div>
                <div>Email: {CONTACT_INFO.email}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const makePage = (titlePrefix: string, subtitle: string) => {
  return ({ city }: { city: string }) => (
    <CityLanding
      city={city}
      title={`${titlePrefix} ${city}`}
      subtitle={subtitle}
    />
  );
};

export const CityService = makePage(
  "Packers and Movers in",
  "Trusted city-to-city and local relocations with insured transport."
);

export const Packersandmovers = makePage(
  "Packers and Movers",
  "Safe packing, loading, transport, and unloading with real-time updates."
);

export const Packersandmoversnearme = makePage(
  "Packers and Movers Near",
  "Nearby crews for quick response, local moves, and urgent packing support."
);

export const BestPackersandMovers = makePage(
  "Best Packers and Movers",
  "Experienced teams, quality materials, and transparent pricing."
);

export const BestPackersandMoversin = makePage(
  "Best Packers and Movers in",
  "Top-rated moves with GST billing and full insurance options."
);

export const LocalPackerandMovers = makePage(
  "Local Packers and Movers",
  "Fast local shifting with careful handling of fragile and bulky items."
);

export const LocalPackerandMoversin = makePage(
  "Local Packers and Movers in",
  "Neighborhood specialists for same-day packing and local transport."
);

export const ProfessionalPackerandMovers = makePage(
  "Professional Packers and Movers",
  "Trained staff, protective packing, and door-to-door delivery."
);

export const ProfessionalPackerandMoversin = makePage(
  "Professional Packers and Movers in",
  "Professional-grade packing, secure loading, and insured transit."
);

export const Packersandmoversnearmein = makePage(
  "Packers and Movers Near Me in",
  "Local crews ready for quick deployment with live support."
);

