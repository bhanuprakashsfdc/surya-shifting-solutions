import { MapPin, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CITY_COVERAGE, CONTACT_INFO } from "@/constants/constants";

const CityCoverage = () => {
  return (
    <section className="py-20 bg-background" id="cities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            City-Specific Packers & Movers Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Optimized routes, insured transport, and verified crews for your top lanes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CITY_COVERAGE.map((city) => (
            <Card key={city.city} className="border-border shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{city.city}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{city.headline}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {city.lanes.map((lane) => (
                    <div key={lane} className="flex items-center gap-2 text-sm text-foreground">
                      <Truck className="w-4 h-4 text-primary" />
                      <span>{lane}</span>
                    </div>
                  ))}
                </div>

                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {city.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a href={CONTACT_INFO.phoneHref}>
                    <Button size="sm" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                      Call for this lane
                    </Button>
                  </a>
                  <a href={CONTACT_INFO.whatsappHref} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityCoverage;

