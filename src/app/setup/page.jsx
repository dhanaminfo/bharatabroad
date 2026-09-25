"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SetupPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [available, setAvailable] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch("/api/setup", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setAvailable(data.setupAvailable);
        setChecking(false);
      })
      .catch(() => setChecking(false));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setSubmitting(true);
    const res = await fetch("/api/setup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    setSubmitting(false);

    if (res.ok) {
      setDone(true);
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Setup failed.");
    }
  }

  if (checking) {
    return (
      <div style={{ maxWidth: 420, margin: "100px auto", padding: "0 20px", textAlign: "center" }}>
        <p style={{ color: "#9ca3af" }}>Checking setup status…</p>
      </div>
    );
  }

  if (done) {
    return (
      <div style={{ maxWidth: 420, margin: "100px auto", padding: "0 20px", textAlign: "center" }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
        <h1 style={{ fontSize: 20, marginBottom: 10 }}>Super Admin account created</h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 20 }}>
          You can now sign in and start adding employees and admins from the "Manage Employees" section.
        </p>
        <button
          onClick={() => router.push("/login")}
          style={{
            padding: "11px 28px",
            background: "#f97316",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Go to login
        </button>
      </div>
    );
  }

  if (!available) {
    return (
      <div style={{ maxWidth: 420, margin: "100px auto", padding: "0 20px", textAlign: "center" }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>🔒</div>
        <h1 style={{ fontSize: 20, marginBottom: 10 }}>Setup already completed</h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 20 }}>
          A Super Admin account already exists for this site. If you've lost access, contact whoever set it up
          originally.
        </p>
        <button
          onClick={() => router.push("/login")}
          style={{
            padding: "11px 28px",
            background: "#1a1a1a",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Go to login
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 420, margin: "70px auto", padding: "0 20px" }}>
      <h1 style={{ fontSize: 22, marginBottom: 6 }}>Welcome — let's set up your account</h1>
      <p style={{ color: "#6b7280", fontSize: 13, marginBottom: 28 }}>
        This is a one-time setup. Create the Super Admin account that will manage all employees, admins, content,
        ads, and RSS feeds for this site. This screen disables itself once you're done.
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 14 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Full name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: 6 }}
          />
        </div>

        <div style={{ marginBottom: 14 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: 6 }}
          />
        </div>

        <div style={{ marginBottom: 14 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: 6 }}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
            Confirm password
          </label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: 6 }}
          />
        </div>

        {error && <p style={{ color: "#ef4444", fontSize: 13, marginBottom: 14 }}>{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          style={{
            width: "100%",
            padding: 12,
            background: "#f97316",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontWeight: 700,
            cursor: submitting ? "not-allowed" : "pointer",
          }}
        >
          {submitting ? "Creating account…" : "Create Super Admin account"}
        </button>
      </form>
    </div>
  );
}
