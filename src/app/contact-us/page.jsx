"use client";

import { useEffect, useRef, useState } from "react";

const RECAPTCHA_SITE_KEY = "6Lf7WvUsAAAAAMiRjC2bMCs2sI42NS3hkZRPevCT";

function loadRecaptchaScript(onLoad) {
  if (window.grecaptcha && window.grecaptcha.render) {
    onLoad();
    return;
  }
  const SCRIPT_ID = "recaptcha-script";
  if (!document.getElementById(SCRIPT_ID)) {
    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.src = "https://www.google.com/recaptcha/api.js?render=explicit&onload=__rcOnload";
    s.async = true;
    s.defer = true;
    window.__rcOnload = onLoad;
    document.head.appendChild(s);
  } else {
    window.__rcOnload = onLoad;
  }
}

function useRecaptcha(siteKey) {
  const [ready, setReady] = useState(false);
  const widgetIdRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    loadRecaptchaScript(() => setReady(true));
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

  const getToken = () => (widgetIdRef.current === null ? null : window.grecaptcha.getResponse(widgetIdRef.current));
  const reset = () => {
    if (widgetIdRef.current !== null) window.grecaptcha.reset(widgetIdRef.current);
  };

  return { containerRef, getToken, reset };
}

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const { containerRef, getToken, reset } = useRecaptcha(RECAPTCHA_SITE_KEY);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const captchaToken = getToken();
    if (!captchaToken) {
      setStatus("captcha");
      return;
    }

    // No backend endpoint wired yet — captchaToken is captured and ready
    // to send once /api/contact exists to verify it server-side and
    // deliver the message.
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    reset();
  }

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "50px 20px 80px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10, color: "#1a1a1a" }}>Contact Us</h1>
      <p style={{ fontSize: 14.5, color: "#6b7280", marginBottom: 36, lineHeight: 1.7 }}>
        Have a question, a story tip, or feedback about BharatAbroad? We'd love to hear from you.
      </p>

      <div
        style={{
          background: "#fff7ed",
          border: "1px solid #fed7aa",
          borderRadius: 10,
          padding: 18,
          marginBottom: 32,
          fontSize: 13.5,
          color: "#7c2d12",
        }}
      >
        <strong>General inquiries:</strong> hello@bharatabroad.com
        <br />
        <strong>WhatsApp community:</strong>{" "}
        <a href="https://chat.whatsapp.com/LNfGI3UFWbt69VeUbBoxLj" target="_blank" rel="noopener noreferrer" style={{ color: "#c2410c" }}>
          Join here
        </a>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <div>
            <label style={labelStyle}>Name</label>
            <input name="name" required value={form.name} onChange={handleChange} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input type="email" name="email" required value={form.email} onChange={handleChange} style={inputStyle} />
          </div>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={labelStyle}>Subject</label>
          <input name="subject" required value={form.subject} onChange={handleChange} style={inputStyle} />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={labelStyle}>Message</label>
          <textarea
            name="message"
            rows={6}
            required
            value={form.message}
            onChange={handleChange}
            style={{ ...inputStyle, fontFamily: "inherit", resize: "vertical" }}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <div ref={containerRef} />
          {status === "captcha" && (
            <p style={{ color: "#ef4444", fontSize: 12.5, marginTop: 6, marginBottom: 0 }}>
              Please complete the CAPTCHA verification.
            </p>
          )}
        </div>

        {status === "success" && (
          <p style={{ color: "#16a34a", fontSize: 13.5, marginBottom: 14 }}>
            Thanks for reaching out — we'll get back to you soon.
          </p>
        )}

        <button
          type="submit"
          style={{
            padding: "12px 28px",
            background: "#f97316",
            color: "#fff",
            border: "none",
            borderRadius: 7,
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Send message
        </button>
      </form>
    </div>
  );
}

const labelStyle = { display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 5 };
const inputStyle = { width: "100%", padding: "10px 12px", border: "1px solid #e5e7eb", borderRadius: 7, fontSize: 14 };
