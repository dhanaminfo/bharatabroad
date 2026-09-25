export const metadata = {
  title: "Advertising Policy | BharatAbroad",
  description: "Guidelines and standards for advertising on BharatAbroad.",
};

export default function AdvertisingPolicyPage() {
  return (
    <div style={{ maxWidth: 780, margin: "0 auto", padding: "50px 20px 80px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10, color: "#1a1a1a" }}>Advertising Policy</h1>
      <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 36 }}>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <Section title="1. Overview">
        BharatAbroad partners with advertisers to help sustain free access to our content while connecting our
        readers with products and services relevant to the Indian diaspora. This policy explains how advertising
        works on our platform.
      </Section>

      <Section title="2. Ad placement">
        Advertisements appear in clearly marked slots across the site — including near featured stories, within
        article grids, and as section banners. Ads are never disguised as editorial content.
      </Section>

      <Section title="3. Content standards">
        We do not accept advertising that is false, misleading, discriminatory, or promotes illegal products or
        services. BharatAbroad reserves the right to reject or remove any advertisement that does not meet our
        standards, at our sole discretion.
      </Section>

      <Section title="4. Editorial independence">
        Advertisers have no influence over our editorial content, story selection, or coverage. Advertising and
        editorial decisions are made independently of one another.
      </Section>

      <Section title="5. Third-party links">
        Clicking on an advertisement will take you to a third-party website. BharatAbroad is not responsible for the
        content, privacy practices, or products/services offered on advertisers' websites.
      </Section>

      <Section title="6. Advertise with us">
        If you're interested in advertising on BharatAbroad, reach out via our Contact Us page with details about
        your business and advertising goals, and our team will follow up.
      </Section>

      <Section title="7. Changes to this policy">
        We may update this Advertising Policy from time to time. Changes will be posted on this page with an
        updated revision date.
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2 style={{ fontSize: 16.5, fontWeight: 700, marginBottom: 8, color: "#1a1a1a" }}>{title}</h2>
      <p style={{ fontSize: 14, lineHeight: 1.8, color: "#4a463f" }}>{children}</p>
    </div>
  );
}
