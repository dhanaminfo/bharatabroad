"use client";

import React, { useState, useEffect, useRef } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/my_logo4.png";


const WA_LINK = "https://chat.whatsapp.com/LNfGI3UFWbt69VeUbBoxLj";

const NAV_LINKS = [
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

const WhatsAppIcon = ({ size = 15 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="#25D366"
    viewBox="0 0 16 16"
    style={{ flexShrink: 0 }}
  >
    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
  </svg>
);

/* ── reCAPTCHA v2 hook ── */
function useRecaptcha(siteKey) {
  const [ready, setReady] = useState(false);
  const widgetIdRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const SCRIPT_ID = "recaptcha-script";
    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.src =
        "https://www.google.com/recaptcha/api.js?render=explicit&onload=__rcOnload";
      s.async = true;
      s.defer = true;
      window.__rcOnload = () => setReady(true);
      document.head.appendChild(s);
    } else if (window.grecaptcha && window.grecaptcha.render) {
      setReady(true);
    } else {
      window.__rcOnload = () => setReady(true);
    }
  }, []);

  useEffect(() => {
    if (ready && containerRef.current && widgetIdRef.current === null) {
      widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
        sitekey: siteKey,
        theme: "light",
        size: "normal",
      });
    }
  }, [ready, siteKey]);

  const getToken = () => {
    if (widgetIdRef.current === null) return null;
    return window.grecaptcha.getResponse(widgetIdRef.current);
  };

  const reset = () => {
    if (widgetIdRef.current !== null)
      window.grecaptcha.reset(widgetIdRef.current);
  };

  return { containerRef, getToken, reset };
}

/* ── Subscribe Modal ── */
const RECAPTCHA_SITE_KEY = "6Lf7WvUsAAAAAMiRjC2bMCs2sI42NS3hkZRPevCT";

function SubscribeModal({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const { containerRef, getToken, reset } = useRecaptcha(RECAPTCHA_SITE_KEY);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const captchaToken = getToken();
    if (!captchaToken) {
      setStatus("captcha");
      return;
    }

    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            captchaToken,
          }),
        }
      );
      if (res.status === 201) {
        setStatus("success");
      } else if (res.status === 409) {
        setStatus("duplicate");
        reset();
      } else {
        setStatus("error");
        reset();
      }
    } catch (err) {
      console.error("Subscribe error:", err);
      setStatus("error");
      reset();
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    border: "1.5px solid #e5e7eb",
    borderRadius: "7px",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
    
    transition: "border-color 0.15s",
  };

  const labelStyle = {
    display: "block",
    fontSize: "12px",
    fontWeight: "600",
    color: "#374151",
    marginBottom: "5px",
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        backdropFilter: "blur(2px)",
        animation: "fadeInOverlay 0.2s ease",
        padding: "16px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "36px 28px 28px",
          width: "100%",
          maxWidth: "420px",
          maxHeight: "92vh",
          overflowY: "auto",
          boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
          position: "relative",
          
          animation: "slideUpModal 0.28s cubic-bezier(.34,1.56,.64,1)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "14px",
            right: "16px",
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            color: "#9ca3af",
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {status === "success" ? (
          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>🎉</div>
            <h3
              style={{
                margin: "0 0 8px",
                fontSize: "20px",
                color: "#111",
                fontWeight: "700",
              }}
            >
              You're subscribed!
            </h3>
            <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>
              Welcome to BharatAbroad. We'll keep you updated with the latest
              stories.
            </p>
            <button
              onClick={onClose}
              style={{
                marginTop: "20px",
                padding: "10px 28px",
                background: "#f97316",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: "24px" }}>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  color: "#f97316",
                  textTransform: "uppercase",
                  margin: "0 0 6px",
                }}
              >
                Newsletter
              </p>
              <h2
                style={{
                  margin: "0 0 6px",
                  fontSize: "22px",
                  color: "#111",
                  fontWeight: "700",
                  lineHeight: 1.3,
                }}
              >
                Stay Connected with BharatAbroad
              </h2>
              <p style={{ margin: 0, fontSize: "13px", color: "#6b7280" }}>
                Get the latest news, stories &amp; updates delivered to your
                inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "14px" }}>
                <label style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Arjun Sharma"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
              </div>

              <div style={{ marginBottom: "18px" }}>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="arjun@email.com"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <div ref={containerRef} />
                {status === "captcha" && (
                  <p
                    style={{
                      color: "#ef4444",
                      fontSize: "12px",
                      marginTop: "6px",
                      marginBottom: 0,
                    }}
                  >
                    Please complete the CAPTCHA verification.
                  </p>
                )}
              </div>

              {status === "duplicate" && (
                <p
                  style={{
                    color: "#ef4444",
                    fontSize: "13px",
                    margin: "-4px 0 14px",
                  }}
                >
                  This email is already subscribed.
                </p>
              )}
              {status === "error" && (
                <p
                  style={{
                    color: "#ef4444",
                    fontSize: "13px",
                    margin: "-4px 0 14px",
                  }}
                >
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "12px",
                  background: loading ? "#fdba74" : "#f97316",
                  color: "#fff",
                  border: "none",
                  borderRadius: "7px",
                  fontSize: "14px",
                  fontWeight: "700",
                  cursor: loading ? "not-allowed" : "pointer",
                  letterSpacing: "0.3px",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!loading) e.currentTarget.style.background = "#ea6c0a";
                }}
                onMouseLeave={(e) => {
                  if (!loading) e.currentTarget.style.background = "#f97316";
                }}
              >
                {loading ? "Subscribing…" : "Subscribe — It's Free"}
              </button>

              <p
                style={{
                  marginTop: "12px",
                  fontSize: "11px",
                  color: "#9ca3af",
                  textAlign: "center",
                }}
              >
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes fadeInOverlay { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUpModal { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:translateY(0) } }
      `}</style>
    </div>
  );
}

/* ── Subscribe Button (reusable) ── */
function SubscribeBtn({ onOpen, compact = false }) {
  return (
    <button
      onClick={onOpen}
      style={{
        background: "#f97316",
        color: "#fff",
        border: "none",
        borderRadius: compact ? 5 : 6,
        padding: compact ? "5px 12px" : "6px 16px",
        fontSize: compact ? 11 : 12,
        fontWeight: 600,
        cursor: "pointer",
        letterSpacing: "0.3px",
        whiteSpace: "nowrap",
        transition: "background 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#ea6c0a";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#f97316";
      }}
    >
      Subscribe
    </button>
  );
}

/* ── Main Navbar ── */
function AppNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showModal && <SubscribeModal onClose={() => setShowModal(false)} />}

      {/* ========== MOBILE & TABLET (< lg) ========== */}
      <div
        className="d-lg-none"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1030,
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.09)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 16px",
          }}
        >
          <Link href="/">
            <Image src={logo} alt="Logo" height={38} style={{ width: "auto" }} priority />
          </Link>

          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "1.5px solid #e0e0e0",
              borderRadius: 6,
              padding: "6px 9px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <span style={{ display: "block", width: 20, height: 2, background: "#444", borderRadius: 2 }} />
            <span style={{ display: "block", width: 20, height: 2, background: "#444", borderRadius: 2 }} />
            <span style={{ display: "block", width: 20, height: 2, background: "#444", borderRadius: 2 }} />
          </button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "6px 16px 8px",
            borderTop: "1px solid #f3f4f6",
            background: "#fafafa",
          }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "#25D366",
              fontWeight: 600,
              fontSize: 12,
              textDecoration: "none",
              flexShrink: 1,
              minWidth: 0,
            }}
          >
            <WhatsAppIcon size={16} />
            <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Join our WhatsApp Community
            </span>
          </a>

          <button
            onClick={() => setShowModal(true)}
            style={{
              flexShrink: 0,
              marginLeft: 12,
              background: "#f97316",
              color: "#fff",
              border: "none",
              borderRadius: 5,
              padding: "6px 14px",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Subscribe
          </button>
        </div>

        {mobileMenuOpen && (
          <div style={{ borderTop: "1px solid #eee", background: "#fff", paddingBottom: 6 }}>
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "block",
                  color: "#111",
                  fontWeight: 500,
                  fontSize: 15,
                  padding: "11px 20px",
                  textDecoration: "none",
                  borderBottom: "1px solid #f5f5f5",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Spacer for fixed mobile header */}
      <div className="d-lg-none" style={{ height: 91 }} />
      {/* NewsBanner intentionally omitted — port separately when ready */}

      {/* ========== DESKTOP (>= lg) ========== */}
      <div className="d-none d-lg-block">
        <div
          style={{
            background: "#f8f9fa",
            borderBottom: "1px solid #e0e0e0",
            padding: "8px 0",
            fontSize: "13px",
          }}
        >
          <Container fluid className="px-4">
            <div className="d-flex justify-content-between align-items-center">
              <div style={{ color: "#666" }}>
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "#25D366",
                    fontWeight: 600,
                    fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  <WhatsAppIcon size={15} />
                  Join our WhatsApp Community
                </a>

                <div style={{ width: 1, height: 16, background: "#ddd" }} />

                <SubscribeBtn onOpen={() => setShowModal(true)} />
              </div>
            </div>
          </Container>
        </div>

        <div style={{ padding: "22px 0", background: "#fff", borderBottom: "1px solid #e0e0e0" }}>
          <Container>
            <div className="text-center">
              <Link href="/">
                <Image src={logo} alt="Logo" height={80} style={{ width: "auto" }} priority />
              </Link>
            </div>
          </Container>
        </div>

        <Navbar
          bg="white"
          style={{
            borderTop: "0.2px solid #bed7fdff",
            borderBottom: "0.2px solid #e0e0e0",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          }}
        >
          <Container>
            <Nav className="mx-auto">
              {NAV_LINKS.map(({ label, href }) => (
                <Nav.Link key={href} as={Link} href={href} className="px-3 fw-semibold" style={{ color: "#222" }}>
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Container>
        </Navbar>

        {/* NewsBanner intentionally omitted — port separately when ready */}

        {scrolled && (
          <Navbar
            bg="white"
            fixed="top"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)", borderBottom: "0.2px solid #0066ff" }}
          >
            <Container>
              <Navbar.Brand as={Link} href="/">
                <Image src={logo} alt="Logo" height={35} style={{ width: "auto" }} />
              </Navbar.Brand>
              <Nav className="mx-auto">
                {NAV_LINKS.map(({ label, href }) => (
                  <Nav.Link key={href} as={Link} href={href} className="px-3" style={{ color: "#222" }}>
                    {label}
                  </Nav.Link>
                ))}
              </Nav>
              <div className="ms-3">
                <SubscribeBtn onOpen={() => setShowModal(true)} compact />
              </div>
            </Container>
          </Navbar>
        )}
      </div>
    </>
  );
}

export default AppNavbar;
