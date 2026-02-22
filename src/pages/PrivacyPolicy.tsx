import { Helmet } from "react-helmet";
import { COMPANY } from "@/constants/constants";

const PrivacyPolicy = () => {
  const canonical = `${COMPANY.url}/privacy-policy.html`;
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Helmet>
        <title>Privacy Policy | {COMPANY.name}</title>
        <meta name="description" content="Read our Privacy Policy covering data collection, usage, cookies, and contact information." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-muted-foreground mb-6">Last updated: {new Date().toISOString().slice(0,10)}</p>
      <h2 className="text-xl font-semibold mt-6">Information We Collect</h2>
      <p className="mt-2">We collect contact details you share (name, phone, email) and moving requirements to provide estimates and service updates.</p>
      <ul className="list-disc pl-6 mt-2">
        <li>Contact information and move details provided via forms or calls.</li>
        <li>Basic analytics and device data for performance and security.</li>
        <li>Cookie preferences necessary to run the site smoothly.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Use of Information</h2>
      <p className="mt-2">We use information to schedule moves, provide quotes, customer support, and service communications. We do not sell personal data.</p>
      <ul className="list-disc pl-6 mt-2">
        <li>Preparing accurate estimates and scheduling services.</li>
        <li>Responding to support requests and operational updates.</li>
        <li>Improving site usability and service quality.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Cookies</h2>
      <p className="mt-2">We use necessary and analytics cookies to improve site experience. You can manage cookies via browser settings.</p>
      <p className="mt-2">Advertising partners (like Google) may use cookies to serve relevant ads. You can opt out or manage ad personalization in your Google settings.</p>
      <h2 className="text-xl font-semibold mt-6">Third-Party Services</h2>
      <p className="mt-2">Analytics and advertising partners may process limited data in accordance with their policies.</p>
      <p className="mt-2">We may share limited data with service providers strictly to deliver and improve our services.</p>
      <h2 className="text-xl font-semibold mt-6">Contact</h2>
      <p className="mt-2">For privacy questions, contact us at {COMPANY.url} or email {"contact@suryaallindiapackersandmovers.com"}.</p>
    </div>
  );
};

export default PrivacyPolicy;