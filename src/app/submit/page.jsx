"use client";

import { useState } from "react";
import { PAGES } from "@/lib/pages";

const MAX_WORDS_PER_PARAGRAPH = 100;

function wordCount(text) {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

// Enforces the 100-word cap by truncating extra words as they're typed,
// rather than just warning after the fact.
function capToWordLimit(text) {
  const words = text.split(/\s+/);
  if (words.length <= MAX_WORDS_PER_PARAGRAPH) return text;
  return words.slice(0, MAX_WORDS_PER_PARAGRAPH).join(" ");
}

export default function SubmitPage() {
  const [title, setTitle] = useState("");
  const [paragraphs, setParagraphs] = useState([""]);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedPages, setSelectedPages] = useState([]);
  const [status, setStatus] = useState(null);

  function togglePage(key) {
    setSelectedPages((prev) => (prev.includes(key) ? prev.filter((p) => p !== key) : [...prev, key]));
  }

  function updateParagraph(index, value) {
    const capped = capToWordLimit(value);
    setParagraphs((prev) => prev.map((p, i) => (i === index ? capped : p)));
  }

  function addParagraph() {
    setParagraphs((prev) => [...prev, ""]);
  }

  function removeParagraph(index) {
    setParagraphs((prev) => (prev.length === 1 ? prev : prev.filter((_, i) => i !== index)));
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
    setImagePreview(file ? URL.createObjectURL(file) : null);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const nonEmptyParagraphs = paragraphs.map((p) => p.trim()).filter(Boolean);
    if (selectedPages.length === 0 || nonEmptyParagraphs.length === 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    let leadImage = null;
    if (imageFile) {
      const formData = new FormData();
      formData.append("file", imageFile);
      const uploadRes = await fetch("/api/upload", { method: "POST", body: formData });
      const uploadData = await uploadRes.json();
      leadImage = uploadData.path;
    }

    // Paragraphs are joined with a blank line between them — the detail
    // page and cards already render description with whiteSpace: pre-wrap,
    // so this displays as proper separate paragraphs without any backend
    // or storage changes needed.
    const description = nonEmptyParagraphs.join("\n\n");

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, leadImage, pages: selectedPages }),
    });

    if (res.ok) {
      setStatus("success");
      setTitle("");
      setParagraphs([""]);
      setImageFile(null);
      setImagePreview(null);
      setSelectedPages([]);
    } else {
      setStatus("error");
    }
  }

  return (
    <div style={{ maxWidth: 560, margin: "50px auto", padding: "0 20px" }}>
      <h1 style={{ fontSize: 22, marginBottom: 6 }}>Submit content</h1>
      <p style={{ color: "#888", fontSize: 13, marginBottom: 28 }}>
        This goes to the admin queue for review — it won't appear on any page until approved.
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 5 }}>Title</label>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: 6 }}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 5 }}>Lead Image</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{ marginTop: 10, maxWidth: 220, borderRadius: 8, border: "1px solid #eee" }}
            />
          )}
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 5 }}>Description</label>

          {paragraphs.map((paragraph, index) => {
            const count = wordCount(paragraph);
            const atLimit = count >= MAX_WORDS_PER_PARAGRAPH;
            return (
              <div key={index} style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#6b7280" }}>Paragraph {index + 1}</span>
                  <span style={{ fontSize: 11.5, color: atLimit ? "#dc2626" : "#9ca3af" }}>
                    {count}/{MAX_WORDS_PER_PARAGRAPH} words
                  </span>
                </div>
                <textarea
                  rows={4}
                  value={paragraph}
                  onChange={(e) => updateParagraph(index, e.target.value)}
                  placeholder={`Write paragraph ${index + 1}...`}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    border: `1px solid ${atLimit ? "#fca5a5" : "#ddd"}`,
                    borderRadius: 6,
                    fontFamily: "inherit",
                  }}
                />
                {paragraphs.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeParagraph(index)}
                    style={{
                      marginTop: 4,
                      background: "none",
                      border: "none",
                      color: "#ef4444",
                      fontSize: 11.5,
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    Remove paragraph
                  </button>
                )}
              </div>
            );
          })}

          <button
            type="button"
            onClick={addParagraph}
            style={{
              padding: "7px 16px",
              background: "#fff7ed",
              color: "#c2410c",
              border: "1px solid #fed7aa",
              borderRadius: 6,
              fontSize: 12.5,
              fontWeight: 600,
              cursor: "pointer",
              marginTop: 4,
            }}
          >
            + Add paragraph
          </button>
        </div>

        <div style={{ marginBottom: 22 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
            Show on page(s)
          </label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {PAGES.map(({ key, label }) => (
              <label
                key={key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  border: "1px solid #ddd",
                  borderRadius: 6,
                  padding: "6px 10px",
                  fontSize: 13,
                  cursor: "pointer",
                  background: selectedPages.includes(key) ? "#fff7ed" : "#fff",
                  borderColor: selectedPages.includes(key) ? "#f97316" : "#ddd",
                }}
              >
                <input type="checkbox" checked={selectedPages.includes(key)} onChange={() => togglePage(key)} />
                {label}
              </label>
            ))}
          </div>
        </div>

        {status === "error" && (
          <p style={{ color: "#ef4444", fontSize: 13, marginBottom: 14 }}>
            Select at least one page, and write at least one paragraph of description.
          </p>
        )}
        {status === "success" && (
          <p style={{ color: "#16a34a", fontSize: 13, marginBottom: 14 }}>Submitted — pending admin approval.</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          style={{
            padding: "11px 24px",
            background: "#f97316",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontWeight: 700,
            cursor: status === "submitting" ? "not-allowed" : "pointer",
          }}
        >
          {status === "submitting" ? "Submitting…" : "Submit for review"}
        </button>
      </form>
    </div>
  );
}
