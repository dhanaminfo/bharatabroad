"use client";

import { useState } from "react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Sports", href: "/sports" },
  { label: "Auto", href: "/auto" },
  { label: "Technology", href: "/technology" },
  { label: "Entertainment", href: "/entertainment" },
  { label: "Health", href: "/health" },
  { label: "Immigration", href: "/immigration" },
  { label: "Heritage", href: "/heritage" },
  { label: "Travel", href: "/travel" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Advertising Policy", href: "/advertising-policy" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/thebharatabroad/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TheBharatAbroad",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M10.5 9.5L15 12l-4.5 2.5v-5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="7.5" cy="7.5" r="1.4" fill="currentColor" />
        <path d="M7.5 11v7M12 11v7M12 14c0-2 2-3 3.5-3s2.5 1.2 2.5 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://chat.whatsapp.com/LNfGI3UFWbt69VeUbBoxLj",
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    // TODO: wire to a real /api/subscribe endpoint once built.
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer style={{ background: "linear-gradient(180deg, #0f172a 0%, #111827 100%)", color: "#cbd5e1" }}>
      {/* Top accent line */}
      <div style={{ height: 3, background: "linear-gradient(90deg, #f97316, #fb923c, #f97316)" }} />

      {/* Newsletter strip */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "28px 24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
              Stay in the loop
            </div>
            <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
              News, culture, and community updates — straight to your inbox.
            </div>
          </div>

          {subscribed ? (
            <div style={{ fontSize: 13, color: "#4ade80", fontWeight: 600 }}>You're on the list ✓</div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: "flex", gap: 8 }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.05)",
                  color: "#fff",
                  fontSize: 13,
                  minWidth: 220,
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  borderRadius: 8,
                  border: "none",
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main columns */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "44px 24px 28px",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr",
          gap: 36,
        }}
      >
        <div>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#fff", letterSpacing: -0.3 }}>
            bharat<span style={{ color: "#f97316" }}>abroad</span>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: "#94a3b8", maxWidth: 320, margin: "12px 0 20px" }}>
            Connecting the Indian diaspora with news, culture, and community — from home and around
            the world.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            {SOCIALS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#cbd5e1",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "all 0.2s",
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Explore" links={QUICK_LINKS} />
        <FooterColumn title="Company" links={COMPANY_LINKS} />
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 8,
            fontSize: 12,
            color: "#64748b",
          }}
        >
          <span>© {new Date().getFullYear()} BharatAbroad. All rights reserved.</span>
          <span>BharatAbroad is not responsible for the content of external sites.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <div style={{ fontSize: 12.5, fontWeight: 700, color: "#fff", marginBottom: 16, letterSpacing: 0.8, textTransform: "uppercase" }}>
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map(({ label, href }) => (
          <FooterLink key={href} href={href} label={label} />
        ))}
      </div>
    </div>
  );
}

function FooterLink({ href, label }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontSize: 13,
        color: hover ? "#f97316" : "#94a3b8",
        textDecoration: "none",
        transition: "color 0.15s",
        width: "fit-content",
      }}
    >
      {label}
    </a>
  );
}
