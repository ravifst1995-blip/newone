import Link from "next/link";

const COMPANY_NAME = "Startup Company";
const COMPANY_EMAIL = "privacy@startupcompany.com"; 
const COMPANY_ADDRESS = "123 Example Street, City, Country"; 
const EFFECTIVE_DATE = "October 6, 2025"; 
const LAST_UPDATED = "October 6, 2025"; 


export const metadata = {
  title: `${COMPANY_NAME} | Privacy Policy`,
  description:
    `${COMPANY_NAME} Privacy Policy describing how we collect, use, disclose, and safeguard personal information when you use our IT services or website.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    name: `${COMPANY_NAME} Privacy Policy`,
    datePublished: EFFECTIVE_DATE,
    dateModified: LAST_UPDATED,
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
      email: COMPANY_EMAIL,
      address: COMPANY_ADDRESS,
    },
    url: "/privacy-policy",
  };

  return (
    <main className="mx-auto privacypolicy max-w-6xl px-5 py-10 prose prose-neutral">
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> {EFFECTIVE_DATE}</p>
      <p><strong>Last Updated:</strong> {LAST_UPDATED}</p>

      <p>
        {COMPANY_NAME} values your trust. This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you use our
        IT services, visit our website, or interact with us.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, billing details, and company details provided by you.
        </li>
        <li>
          <strong>Technical Information:</strong> IP address, browser type,
          operating system, device identifiers, and website usage data.
        </li>
        <li>
          <strong>Service Data:</strong> Information provided while using our IT
          services (e.g., project details, system access information, or files).
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information to:</p>
      <ul>
        <li>Deliver, operate, and improve our IT services.</li>
        <li>Communicate with you regarding projects, support, or inquiries.</li>
        <li>Process payments and billing.</li>
        <li>Maintain security and prevent fraud.</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>We do not sell your personal information. We may share information with:</p>
      <ul>
        <li>
          <strong>Service Providers:</strong> Third-party vendors who help us
          provide IT services (e.g., cloud hosting, payment processing).
        </li>
        <li>
          <strong>Legal Authorities:</strong> If required by law or in response
          to valid legal requests.
        </li>
        <li>
          <strong>Business Transfers:</strong> In case of a merger, acquisition,
          or sale of assets.
        </li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We implement industry-standard security measures (encryption, firewalls,
        access controls) to protect your data. However, no method of
        transmission or storage is completely secure.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain personal information as long as necessary to provide services,
        comply with legal obligations, and resolve disputes.
      </p>

      <h2>6. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access, correct, or delete your personal information.</li>
        <li>Restrict or object to certain processing.</li>
        <li>Request data portability.</li>
        <li>Withdraw consent at any time (where applicable).</li>
      </ul>

      <h2>7. Cookies and Tracking Technologies</h2>
      <p>
        Our website may use cookies or similar technologies to enhance user
        experience, analyze usage, and improve our services. You can control
        cookies through your browser settings.
      </p>

      <h2>8. International Data Transfers</h2>
      <p>
        If you are outside our operating country, your data may be transferred
        and stored in countries with different data protection laws. We ensure
        appropriate safeguards are in place.
      </p>

      <h2>9. Children’s Privacy</h2>
      <p>
        Our services are not directed to individuals under 18. We do not
        knowingly collect personal data from children.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The updated version
        will be posted on our website with a revised “Last Updated” date.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or our practices,
        contact us:
      </p>
      <address>
        <div><strong>{COMPANY_NAME}</strong></div>
        <div>{COMPANY_ADDRESS}</div>
        <div>
          Email: <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
        </div>
      </address>


      <p className="text-sm">
        <Link href="/">Back to Home</Link>
      </p>
    </main>
  );
}
