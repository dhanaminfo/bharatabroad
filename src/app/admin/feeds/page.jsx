"use client";

import { useEffect, useState } from "react";
import DashboardHeader from "@/components/common/DashboardHeader";

export default function FeedsAdminPage() {
  const [feeds, setFeeds] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [newUrlByCategory, setNewUrlByCategory] = useState({});

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    setError(null);
    const res = await fetch("/api/feeds", { cache: "no-store" });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || `Request failed (${res.status})`);
      setFeeds({});
      setLoading(false);
      return;
    }
    const data = await res.json();
    // Defensive: only keep entries that are actually arrays.
    const clean = {};
    for (const [key, value] of Object.entries(data)) {
      if (Array.isArray(value)) clean[key] = value;
    }
    setFeeds(clean);
    setLoading(false);
  }

  async function save(next) {
    setSaving(true);
    const res = await fetch("/api/feeds", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next),
    });
    if (res.ok) {
      setFeeds(next);
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Save failed");
    }
    setSaving(false);
  }

  function addCategory() {
    const key = newCategory.trim().toLowerCase().replace(/\s+/g, "-");
    if (!key || feeds[key]) return;
    save({ ...feeds, [key]: [] });
    setNewCategory("");
  }

  function deleteCategory(key) {
    if (!window.confirm(`Delete the entire "${key}" category and all its feeds?`)) return;
    const next = { ...feeds };
    delete next[key];
    save(next);
  }

  function addUrl(category) {
    const url = (newUrlByCategory[category] || "").trim();
    if (!url) return;
    const next = { ...feeds, [category]: [...feeds[category], url] };
    save(next);
    setNewUrlByCategory((s) => ({ ...s, [category]: "" }));
  }

  function deleteUrl(category, index) {
    const next = { ...feeds, [category]: feeds[category].filter((_, i) => i !== index) };
    save(next);
  }

  function editUrl(category, index, value) {
    const next = { ...feeds };
    next[category] = [...next[category]];
    next[category][index] = value;
    setFeeds(next);
  }

  function commitEditUrl(category) {
    save(feeds);
  }

  if (loading) {
    return (
      <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
        <DashboardHeader title="RSS feeds" />
        <p style={{ textAlign: "center", color: "#9ca3af" }}>Loading…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
        <DashboardHeader title="RSS feeds" />
        <div style={{ maxWidth: 600, margin: "40px auto", padding: "0 24px" }}>
          <div style={{ background: "#fef2f2", color: "#dc2626", padding: 16, borderRadius: 8, fontSize: 14 }}>
            {error}. If this mentions "Forbidden", log in at <a href="/login">/login</a> with an ADMIN or
            SUPERADMIN account.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
      <DashboardHeader title="RSS feeds" />

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>
            Changes save automatically as you add or remove feeds.
          </p>
          {saving && <span style={{ fontSize: 12, color: "#f97316" }}>Saving…</span>}
        </div>

        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 28,
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: 10,
            padding: 14,
          }}
        >
          <input
            placeholder="New category name (e.g. lifestyle)"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addCategory()}
            style={{ flex: 1, padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: 7, fontSize: 13 }}
          />
          <button onClick={addCategory} style={primaryBtn}>
            Add category
          </button>
        </div>

        {Object.keys(feeds)
          .sort()
          .map((category) => (
            <div
              key={category}
              style={{
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: 10,
                padding: 18,
                marginBottom: 16,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, textTransform: "capitalize" }}>
                  {category}{" "}
                  <span style={{ fontSize: 11, color: "#9ca3af", fontWeight: 400 }}>
                    ({feeds[category].length} feed{feeds[category].length !== 1 ? "s" : ""})
                  </span>
                </h3>
                <button onClick={() => deleteCategory(category)} style={dangerBtnSmall}>
                  Delete category
                </button>
              </div>

              {feeds[category].map((url, idx) => (
                <div key={idx} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                  <input
                    value={url}
                    onChange={(e) => editUrl(category, idx, e.target.value)}
                    onBlur={() => commitEditUrl(category)}
                    style={{ flex: 1, padding: "7px 10px", border: "1px solid #e5e7eb", borderRadius: 6, fontSize: 12.5 }}
                  />
                  <button onClick={() => deleteUrl(category, idx)} style={dangerBtnSmall}>
                    Remove
                  </button>
                </div>
              ))}

              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                <input
                  placeholder="https://example.com/feed/"
                  value={newUrlByCategory[category] || ""}
                  onChange={(e) => setNewUrlByCategory((s) => ({ ...s, [category]: e.target.value }))}
                  onKeyDown={(e) => e.key === "Enter" && addUrl(category)}
                  style={{ flex: 1, padding: "7px 10px", border: "1px solid #e5e7eb", borderRadius: 6, fontSize: 12.5 }}
                />
                <button onClick={() => addUrl(category)} style={secondaryBtnSmall}>
                  Add feed
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

const primaryBtn = {
  padding: "9px 18px",
  background: "#f97316",
  color: "#fff",
  border: "none",
  borderRadius: 7,
  fontSize: 13,
  fontWeight: 700,
  cursor: "pointer",
  whiteSpace: "nowrap",
};

const secondaryBtnSmall = {
  padding: "7px 14px",
  background: "#1a1a1a",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  fontSize: 12,
  fontWeight: 600,
  cursor: "pointer",
  whiteSpace: "nowrap",
};

const dangerBtnSmall = {
  padding: "6px 12px",
  background: "#fef2f2",
  color: "#dc2626",
  border: "1px solid #fecaca",
  borderRadius: 6,
  fontSize: 11.5,
  fontWeight: 600,
  cursor: "pointer",
  whiteSpace: "nowrap",
};
