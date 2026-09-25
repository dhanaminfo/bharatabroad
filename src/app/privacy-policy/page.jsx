export const metadata = {
  title: "Privacy Policy | BharatAbroad",
  description: "How BharatAbroad collects, uses, and protects your personal information.",
};

const TOC = [
  { id: "privacy-notice", label: "1. Privacy Notice" },
  { id: "information-we-gather", label: "2. What Information We Gather" },
  { id: "gdpr-rights", label: "3. GDPR Rights (EU Residents)" },
  { id: "ccpa-rights", label: "4. CCPA Rights (California Residents)" },
  { id: "how-data-is-used", label: "5. How Data is Used" },
  { id: "interest-based-advertising", label: "6. Interest-Based Advertising" },
  { id: "ad-sponsors", label: "7. Ad Sponsors & Advertisers" },
  { id: "retention", label: "8. Retention & Storage" },
  { id: "security", label: "9. Security of Information" },
  { id: "cookies", label: "10. Why We Use Cookies" },
  { id: "changes", label: "11. Changes to Privacy Policy" },
  { id: "contact", label: "12. Contact Us" },
];

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div id="top" style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px 100px", scrollBehavior: "smooth" }}>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2.4fr 1fr",
          gap: 60,
          alignItems: "start",
        }}
      >
        {/* Main content */}
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 6, color: "#111827" }}>
            Privacy Policy – BharatAbroad
          </h1>
          <p style={{ fontSize: 13.5, color: "#6b7280", marginBottom: 36 }}>Last updated {lastUpdated}</p>

          <Section id="privacy-notice" title="1. Privacy Notice">
            We encourage you to read this Privacy Policy in its entirety to understand the information we collect
            and how we use and disclose it. Thank you for visiting the BharatAbroad website. BharatAbroad
            appreciates your interest in our platform and the services we offer. By visiting our website, you are
            accepting the Privacy Policy and Terms and Conditions in every other manner.
          </Section>

          <Section id="information-we-gather" title="2. What Information We Gather">
            We gather both anonymous and personally identifiable information. This includes First/Last Name, Email
            (when subscribing to mailing lists, submitting content, or applying for jobs), IP address, ISP
            information, date/time stamp, and click stream data. This information is used to improve user
            experience and develop products and services.
          </Section>

          <Section id="gdpr-rights" title="3. GDPR Rights (EU Residents)">
            <p style={{ marginBottom: 10 }}>If you are a resident of the EU, you have the following rights under GDPR:</p>
            <List
              items={[
                "The right to be informed",
                "The right of access",
                "The right to rectification",
                "The right to erasure",
                "The right to restrict processing",
                "The right to data portability",
                "The right to object",
                "Rights in relation to automated decision making and profiling.",
              ]}
            />
          </Section>

          <Section id="ccpa-rights" title="4. CCPA Rights (California Residents)">
            <p style={{ marginBottom: 10 }}>
              If you are a California resident, you have the following rights under the CCPA:
            </p>
            <List
              items={[
                "The right to know what personal information is collected, used, shared, or sold",
                "The right to delete personal information held by us",
                "The right to opt-out of the sale of personal information",
                "The right to non-discrimination for exercising your CCPA rights",
              ]}
            />
          </Section>

          <Section id="how-data-is-used" title="5. How Data is Used">
            We use the information we collect to operate and improve BharatAbroad, deliver the content and
            newsletters you've signed up for, respond to your inquiries, personalize your experience, and
            understand how our site is used so we can make it better.
          </Section>

          <Section id="interest-based-advertising" title="6. Interest-Based Advertising">
            We and our advertising partners may use cookies and similar technologies to serve ads that are more
            relevant to you based on your browsing behavior, both on BharatAbroad and other websites. You can opt
            out of interest-based advertising through your browser settings or industry opt-out tools.
          </Section>

          <Section id="ad-sponsors" title="7. Ad Sponsors & Advertisers">
            BharatAbroad partners with advertisers and sponsors to display advertising on our site. These third
            parties may collect information via cookies according to their own privacy policies. BharatAbroad is
            not responsible for the privacy practices of our advertising partners.
          </Section>

          <Section id="retention" title="8. Retention & Storage">
            We retain personal information for as long as necessary to fulfill the purposes outlined in this policy,
            unless a longer retention period is required or permitted by law.
          </Section>

          <Section id="security" title="9. Security of Information">
            We implement reasonable administrative, technical, and physical safeguards designed to protect your
            personal information from unauthorized access, disclosure, alteration, or destruction. However, no
            method of transmission over the internet is 100% secure.
          </Section>

          <Section id="cookies" title="10. Why We Use Cookies">
            Cookies help us remember your preferences, understand site traffic, and improve your browsing
            experience. You can control cookies through your browser settings, though disabling them may affect
            certain site features.
          </Section>

          <Section id="changes" title="11. Changes to Privacy Policy">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an
            updated revision date, and your continued use of the site after changes constitutes acceptance of the
            updated policy.
          </Section>

          <Section id="contact" title="12. Contact Us">
            If you have questions about this Privacy Policy or how your information is handled, please reach out
            via our Contact Us page or email us at hello@bharatabroad.com.
          </Section>
        </div>

        {/* Table of contents sidebar */}
        <aside
          style={{
            position: "sticky",
            top: 24,
            fontSize: 13.5,
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14, color: "#111827" }}>Table of contents</div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {TOC.map(({ id, label }) => (
              <a key={id} href={`#${id}`} style={{ color: "#374151", textDecoration: "none" }}>
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#top"
            style={{
              display: "block",
              marginTop: 18,
              fontSize: 13,
              color: "#374151",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            ↑ Back to top
          </a>
        </aside>
      </div>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <div id={id} style={{ marginBottom: 30, scrollMarginTop: 24 }}>
      <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: "#111827" }}>{title}</h2>
      <div style={{ fontSize: 14, lineHeight: 1.8, color: "#4b5563" }}>{children}</div>
    </div>
  );
}

function List({ items }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {items.map((item, i) => (
        <div key={i} style={{ fontSize: 14, color: "#4b5563" }}>
          - {item}
        </div>
      ))}
    </div>
  );
}
