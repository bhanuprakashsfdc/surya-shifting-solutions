import { Helmet } from "react-helmet";
import { COMPANY } from "@/constants/constants";

const Disclaimer = () => {
  const canonical = `${COMPANY.url}/disclaimer.html`;
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Helmet>
        <title>Disclaimer | {COMPANY.name}</title>
        <meta name="description" content="Legal disclaimer regarding information accuracy, third-party links, and service representations." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
      <p className="text-muted-foreground mb-6">Last updated: {new Date().toISOString().slice(0,10)}</p>
      <p className="mt-2">Information on this site is provided for general guidance. We strive for accuracy but make no warranties of completeness.</p>
      <p className="mt-2">Pricing and availability may vary based on location, item inventory, crew, and seasonal demand.</p>
      <p className="mt-2">References to third-party sites are for convenience; we are not responsible for their content or practices.</p>
      <p className="mt-2">Advertising content may be displayed by our partners subject to their policies.</p>
      <p className="mt-2">Service descriptions are indicative; actual scope is defined in written agreements and confirmed estimates.</p>
      <p className="mt-2">Nothing on this site constitutes legal or professional advice.</p>
    </div>
  );
};

export default Disclaimer;