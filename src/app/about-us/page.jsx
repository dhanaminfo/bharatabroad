export const metadata = {
  title: "About Us | BharatAbroad",
  description: "Learn about BharatAbroad — connecting the Indian diaspora with news, culture, and community from home and around the world.",
};

export default function AboutUsPage() {
  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "50px 20px 80px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10, color: "#1a1a1a" }}>About BharatAbroad</h1>
      <p style={{ fontSize: 14, color: "#9ca3af", marginBottom: 36 }}>Our story and mission</p>

      <Section title="Who we are">
        BharatAbroad is a digital platform built for the global Indian diaspora — bringing together news, culture,
        and community from India and the countries Indians now call home. Whether you're a first-generation
        immigrant, a student abroad, or simply someone who wants to stay connected to your roots, BharatAbroad is
        built to keep you informed and connected.
      </Section>

      <Section title="What we do">
        We curate and deliver news across the topics that matter most to our community — from immigration policy
        updates and sports to technology, health, entertainment, and travel. Alongside daily news, we're building a
        Heritage section that celebrates India's traditions: its regional fashion, its food, and the stories behind
        both.
      </Section>

      <Section title="Our mission">
        We believe distance shouldn't mean disconnection. Our mission is to give Indians abroad a single, trustworthy
        place to follow what's happening back home, understand the issues affecting their lives overseas, and stay
        rooted in the culture they carry with them wherever they go.
      </Section>

      <Section title="Join our community">
        BharatAbroad is more than a news site — it's a growing community. Follow us on social media, join our
        WhatsApp community, and subscribe to our newsletter to be part of the conversation.
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: "#1a1a1a", borderLeft: "3px solid #f97316", paddingLeft: 10 }}>
        {title}
      </h2>
      <p style={{ fontSize: 14.5, lineHeight: 1.8, color: "#4a463f" }}>{children}</p>
    </div>
  );
}
