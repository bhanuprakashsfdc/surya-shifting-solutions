import { Helmet } from "react-helmet";
import { COMPANY } from "@/constants/constants";

const Terms = () => {
  const canonical = `${COMPANY.url}/terms.html`;
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Helmet>
        <title>Terms & Conditions | {COMPANY.name}</title>
        <meta name="description" content="Read our terms and conditions covering bookings, payments, insurance, and responsibilities." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="text-muted-foreground mb-6">Last updated: {new Date().toISOString().slice(0,10)}</p>
      <h2 className="text-xl font-semibold mt-6">Bookings</h2>
      <p className="mt-2">Bookings are confirmed upon acceptance of estimate and scheduled date. Changes are subject to availability.</p>
      <ul className="list-disc pl-6 mt-2">
        <li>Rescheduling depends on crew and vehicle availability.</li>
        <li>Delays due to weather or traffic will be communicated.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Payments</h2>
      <p className="mt-2">Payments are due as per agreed milestones. GST invoices are provided for services rendered.</p>
      <ul className="list-disc pl-6 mt-2">
        <li>Accepted modes include UPI, bank transfer, and cash.</li>
        <li>Advance may be required for long-distance moves.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Insurance</h2>
      <p className="mt-2">Transit insurance coverage applies per policy. Claims must be submitted within the specified timeframe.</p>
      <ul className="list-disc pl-6 mt-2">
        <li>Declared value and policy terms govern claims.</li>
        <li>Report damages promptly with photos and documents.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Liability</h2>
      <p className="mt-2">We exercise utmost care. Liability is limited to terms in the service agreement and applicable law.</p>
      <p className="mt-2">We are not liable for items prohibited by policy, incorrectly packed by customer, or undisclosed fragile goods.</p>
    </div>
  );
};

export default Terms;