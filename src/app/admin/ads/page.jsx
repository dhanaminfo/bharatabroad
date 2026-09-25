"use client";

import { useEffect, useState } from "react";
import DashboardHeader from "@/components/common/DashboardHeader";

const SLOTS = [
  { key: "ad1", label: "Ad 1", hint: "Beside the featured story" },
  { key: "ad2", label: "Ad 2", hint: "Last column of row 3" },
  { key: "ad3", label: "Ad 3", hint: "Section-ending banner" },
];

export default function AdsAdminPage() {
  const [ads, setAds] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const [uploadingSlot, setUploadingSlot] = useState(null); // `${category}:${slot}`

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    setError(null);
    const res = await fetch("/api/ads", { cache: "no-store" });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || `Request failed (${res.status})`);
      setAds({});
      setLoading(false);
      return;
    }
    const data = await res.json();
    // Defensive: normalize anything malformed into the expected shape.
    const clean = {};
    for (const [category, entry] of Object.entries(data)) {
      if (typeof entry === "object" && entry !== null && !Array.isArray(entry)) {
        clean[category] = {
          ad1: entry.ad1 || null,
          ad2: entry.ad2 || null,
          ad3: entry.ad3 || null,
        };
      }
    }
    setAds(clean);
    setLoading(false);
  }

  async function save(next) {
    setSaving(true);
    const res = await fetch("/api/ads", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next),
    });
    if (res.ok) {
      setAds(next);
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Save failed");
    }
    setSaving(false);
  }

  async function handleUpload(category, slot, file) {
    if (!file) return;
    const key = `${category}:${slot}`;
    setUploadingSlot(key);

    const formData = new FormData();
    formData.append("file", file);
    const uploadRes = await fetch("/api/upload", { method: "POST", body: formData });
    const uploadData = await uploadRes.json();

    const existing = ads[category]?.[slot] || { link: "#", label: "" };
    const nextSlotValue = { ...existing, image: uploadData.path };

    const next = {
      ...ads,
      [category]: { ...ads[category], [slot]: nextSlotValue },
    };
    await save(next);
    setUploadingSlot(null);
  }

  function updateField(category, slot, field, value) {
    const current = ads[category]?.[slot];
    if (!current) return;
    const next = {
      ...ads,
      [category]: { ...ads[category], [slot]: { ...current, [field]: value } },
    };
    setAds(next);
  }

  function commitField(category) {
    save(ads);
  }

  function clearSlot(category, slot) {
    if (!window.confirm(`Clear ${slot} for "${category}"?`)) return;
    const next = { ...ads, [category]: { ...ads[category], [slot]: null } };
    save(next);
  }

  if (loading) {
    return (
      <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
        <DashboardHeader title="Ad Management" />
        <p style={{ textAlign: "center", color: "#9ca3af" }}>Loading…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
        <DashboardHeader title="Ad Management" />
        <div style={{ maxWidth: 600, margin: "40px auto", padding: "0 24px" }}>
          <div style={{ background: "#fef2f2", color: "#dc2626", padding: 16, borderRadius: 8, fontSize: 14 }}>
            {error}. If this mentions "Forbidden", log in at <a href="/login">/login</a> with an ADMIN account.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
      <DashboardHeader title="Ad Management" />

      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 24px 80px" }}>
        <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 24 }}>
          Each category has three fixed slots. Uploading replaces just that slot's image — the other two
          are untouched, and deleting one never shifts the others.
          {saving && <span style={{ color: "#f97316", marginLeft: 8 }}>Saving…</span>}
        </p>

        {Object.keys(ads)
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
              <h3 style={{ margin: "0 0 14px", fontSize: 15, fontWeight: 700, textTransform: "capitalize" }}>
                {category}
              </h3>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                {SLOTS.map(({ key, label, hint }) => {
                  const ad = ads[category]?.[key] || null;
                  const uploading = uploadingSlot === `${category}:${key}`;

                  return (
                    <div
                      key={key}
                      style={{
                        width: 220,
                        border: "1px solid #eee",
                        borderRadius: 8,
                        padding: 12,
                        background: "#fafafa",
                      }}
                    >
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#374151" }}>{label}</div>
                      <div style={{ fontSize: 10.5, color: "#9ca3af", marginBottom: 8 }}>{hint}</div>

                      {ad?.image ? (
                        <img
                          src={ad.image}
                          alt={ad.label}
                          style={{ width: "100%", height: 90, objectFit: "cover", borderRadius: 6, marginBottom: 8 }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "100%",
                            height: 90,
                            borderRadius: 6,
                            marginBottom: 8,
                            background: "#f3f4f6",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 11,
                            color: "#9ca3af",
                          }}
                        >
                          Empty
                        </div>
                      )}

                      <input
                        value={ad?.label || ""}
                        placeholder="Label"
                        disabled={!ad}
                        onChange={(e) => updateField(category, key, "label", e.target.value)}
                        onBlur={() => commitField(category)}
                        style={{ ...smallInput, marginBottom: 6 }}
                      />
                      <input
                        value={ad?.link || ""}
                        placeholder="Link URL"
                        disabled={!ad}
                        onChange={(e) => updateField(category, key, "link", e.target.value)}
                        onBlur={() => commitField(category)}
                        style={{ ...smallInput, marginBottom: 8 }}
                      />

                      <input
                        type="file"
                        accept="image/*"
                        disabled={uploading}
                        onChange={(e) => handleUpload(category, key, e.target.files?.[0])}
                        style={{ fontSize: 11, marginBottom: 8 }}
                      />
                      {uploading && <div style={{ fontSize: 11, color: "#f97316" }}>Uploading…</div>}

                      {ad && (
                        <button onClick={() => clearSlot(category, key)} style={dangerBtn}>
                          Clear slot
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

const smallInput = {
  padding: "6px 9px",
  border: "1px solid #e5e7eb",
  borderRadius: 6,
  fontSize: 12,
  width: "100%",
};

const dangerBtn = {
  padding: "5px 12px",
  background: "#fef2f2",
  color: "#dc2626",
  border: "1px solid #fecaca",
  borderRadius: 6,
  fontSize: 11,
  fontWeight: 600,
  cursor: "pointer",
  width: "100%",
};
