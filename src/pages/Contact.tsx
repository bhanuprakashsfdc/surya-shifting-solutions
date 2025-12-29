import { Helmet } from "react-helmet";
import { COMPANY, CONTACT_INFO } from "@/constants/constants";

const Contact = () => {
  const canonical = `${COMPANY.url}/contact.html`;
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Helmet>
        <title>Contact Us | {COMPANY.name}</title>
        <meta name="description" content="Get in touch for moving quotes and support via phone, email, or our office address." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <ul className="space-y-3">
        <li>
          <strong>Phone:</strong> <a href={CONTACT_INFO.phoneHref} className="text-primary">{CONTACT_INFO.phoneDisplay}</a>
        </li>
        <li>
          <strong>Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary">{CONTACT_INFO.email}</a>
        </li>
        <li>
          <strong>Address:</strong> {CONTACT_INFO.address}
        </li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Business Hours</h2>
      <p className="mt-2">We operate 7 days a week. For urgent relocations, please call us directly.</p>
    </div>
  );
};

export default Contact;