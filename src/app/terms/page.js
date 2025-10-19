import Link from "next/link";

const COMPANY_NAME = "Startup Company";
const COMPANY_EMAIL = "legal@startupcompany.com";
const COMPANY_ADDRESS = "123 Example Street, City, Country";
const EFFECTIVE_DATE = "October 6, 2025";
const LAST_UPDATED = "October 6, 2025";
const GOVERNING_LAW = "Startup";

export const metadata = {
  title: `${COMPANY_NAME} | Terms of Service`,
  description: `${COMPANY_NAME} Terms of Service for IT services and website use.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${COMPANY_NAME} Terms of Service`,
    datePublished: EFFECTIVE_DATE,
    dateModified: LAST_UPDATED,
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
      email: COMPANY_EMAIL,
      address: COMPANY_ADDRESS,
    },
    url: "/terms",
  };

  return (
      <main className="mx-auto privacypolicy max-w-6xl px-5 py-10 prose prose-neutral">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1>Terms of Service</h1>
      <p><strong>Effective Date:</strong> {EFFECTIVE_DATE}</p>
      <p><strong>Last Updated:</strong> {LAST_UPDATED}</p>

      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of {COMPANY_NAME}&rsquo;s
        IT services, website, and related offerings (collectively, the &ldquo;Services&rdquo;).
        By accessing or using the Services, you agree to be bound by these Terms.
        If you do not agree, do not use the Services.
      </p>

      <h2>1. Eligibility &amp; Account</h2>
      <p>
        You must be at least 18 years old to use the Services. When creating an
        account, you agree to provide accurate information, keep your credentials
        secure, and notify us of any unauthorized use. You are responsible for
        all activities under your account.
      </p>

      <h2>2. Scope of Services</h2>
      <p>
        We provide professional IT services which may include software development,
        integration, maintenance and support, consulting, and cloud-related work.
        Specific deliverables, timelines, and fees may be set out in a separate
        statement of work, order form, or proposal (each, an &ldquo;Order&rdquo;). In the
        event of a conflict, the Order prevails over these Terms.
      </p>

      <h2>3. Fees, Billing &amp; Taxes</h2>
      <ul>
        <li>Fees are as specified in the applicable Order or price quotation.</li>
        <li>Invoices are payable as stated; late payments may incur interest or suspension of Services.</li>
        <li>You are responsible for applicable taxes, except taxes based on our net income.</li>
      </ul>

      <h2>4. Acceptable Use</h2>
      <p>You agree not to, and not to allow others to:</p>
      <ul>
        <li>Violate any applicable law or third-party rights.</li>
        <li>Upload or transmit malware or harmful code.</li>
        <li>Attempt to gain unauthorized access to systems or data.</li>
        <li>Interfere with or disrupt the integrity or performance of the Services.</li>
      </ul>

      <h2>5. Customer Responsibilities</h2>
      <ul>
        <li>Provide timely access, information, and approvals reasonably required to deliver the Services.</li>
        <li>Ensure your materials and instructions are lawful and do not infringe third-party rights.</li>
        <li>Maintain appropriate backups of your data unless expressly included in an Order.</li>
      </ul>

      <h2>6. Confidentiality</h2>
      <p>
        Each party may receive non-public information marked or reasonably considered
        confidential (&ldquo;Confidential Information&rdquo;). The receiving party will use
        such information only to perform under these Terms, protect it with reasonable
        care, and not disclose it to third parties except to personnel and service
        providers under similar obligations. This section survives termination.
      </p>

      <h2>7. Intellectual Property</h2>
      <ul>
        <li>
          <strong>Your Materials:</strong> You retain ownership of content, data, and
          materials you provide. You grant us a limited license to use them solely
          to deliver the Services.
        </li>
        <li>
          <strong>Our Materials:</strong> We retain ownership of pre-existing IP, tools,
          templates, and know-how. Unless the Order states otherwise, we grant you a
          non-exclusive, non-transferable license to use deliverables for your
          internal business purposes.
        </li>
      </ul>

      <h2>8. Third-Party Services</h2>
      <p>
        The Services may integrate with third-party products (e.g., cloud hosting,
        payment processors). Your use of such products is governed by the third-party
        terms, and we are not responsible for their actions, content, or availability.
      </p>

      <h2>9. Data Protection &amp; Privacy</h2>
      <p>
        Our handling of personal information is described in our <Link href="/privacy-policy">Privacy Policy</Link>.
        By using the Services, you consent to such processing. Where data processing
        agreements or regional addenda (e.g., GDPR/CCPA/APPs/DPDP) are required, they
        may be incorporated into the applicable Order.
      </p>

      <h2>10. Warranties &amp; Disclaimers</h2>
      <ul>
        <li>
          We warrant that we will provide the Services in a professional and
          workmanlike manner consistent with industry standards.
        </li>
        <li>
          EXCEPT AS EXPRESSLY PROVIDED, THE SERVICES AND DELIVERABLES ARE PROVIDED
          &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR
          STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </li>
      </ul>

      <h2>11. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY WILL BE LIABLE FOR ANY
        INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES,
        OR FOR LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS, EVEN IF ADVISED OF THE
        POSSIBILITY. EXCEPT FOR PAYMENT OBLIGATIONS OR LIABILITY THAT CANNOT BE
        LIMITED BY LAW, EACH PARTY&rsquo;S TOTAL LIABILITY UNDER THESE TERMS WILL NOT
        EXCEED THE AMOUNTS PAID OR PAYABLE BY YOU FOR THE SERVICES GIVING RISE TO THE
        CLAIM IN THE 12 MONTHS PRECEDING THE EVENT.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold harmless {COMPANY_NAME} and our
        affiliates, officers, employees, and agents from and against claims arising
        from (a) your use of the Services in violation of these Terms or law; (b)
        your content or instructions; or (c) your violation of third-party rights.
      </p>

      <h2>13. Suspension &amp; Termination</h2>
      <ul>
        <li>We may suspend or terminate access for breach, legal risk, or non-payment.</li>
        <li>You may terminate for convenience by providing written notice as set out in the applicable Order.</li>
        <li>Upon termination, you must cease use of our materials and pay any accrued fees.</li>
      </ul>

      <h2>14. Governing Law &amp; Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of {GOVERNING_LAW}, without regard to
        conflicts of laws principles. Any dispute will be subject to the exclusive
        jurisdiction of the courts located in {GOVERNING_LAW}. The parties will first
        attempt to resolve disputes through good-faith negotiations.
      </p>

      <h2>15. Changes to the Terms</h2>
      <p>
        We may update these Terms from time to time. The updated version will be
        posted at this URL with a revised &ldquo;Last Updated&rdquo; date. Continued use of the
        Services after changes take effect constitutes acceptance of the updated Terms.
      </p>

      <h2>16. General</h2>
      <ul>
        <li><strong>Notices:</strong> We may send notices to the email address associated with your account.</li>
        <li><strong>Assignment:</strong> You may not assign these Terms without our written consent; we may assign as part of a merger or sale.</li>
        <li><strong>Severability:</strong> If a provision is unenforceable, the remainder stays in effect.</li>
        <li><strong>No Waiver:</strong> Failure to enforce a provision is not a waiver.</li>
        <li><strong>Entire Agreement:</strong> These Terms and any Orders constitute the entire agreement regarding the Services.</li>
      </ul>

      <h2>17. Contact</h2>
      <address>
        <div><strong>{COMPANY_NAME}</strong></div>
        <div>{COMPANY_ADDRESS}</div>
        <div>Email: <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a></div>
      </address>

      <p className="text-sm mt-6">
        Also see our <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <p className="text-sm">
        <Link href="/">Back to Home</Link>
      </p>
    </main>
  );
}
