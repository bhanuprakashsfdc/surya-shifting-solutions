import { Helmet } from "react-helmet";
import { COMPANY } from "@/constants/constants";

const About = () => {
  const canonical = `${COMPANY.url}/about.html`;
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Helmet>
        <title>About Us | {COMPANY.name}</title>
        <meta name="description" content="Learn about our nationwide moving services, team, values, and customer-first approach." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mt-2">{COMPANY.name} is a nationwide packers and movers company offering reliable home, office, and vehicle relocation.</p>
      <p className="mt-2">Our team is trained to handle packing, loading, transit, and unpacking with care, transparency, and timely delivery.</p>
      <p className="mt-2">We operate across major Indian cities with a mission to make moving simple and stress-free.</p>
      <h2 className="text-xl font-semibold mt-6">Why Choose Us</h2>
      <ul className="list-disc pl-6 mt-2">
        <li>All-India coverage with trained professionals.</li>
        <li>Quality packing materials for safe transit.</li>
        <li>Transparent pricing and reliable scheduling.</li>
      </ul>
    </div>
  );
};

export default About;