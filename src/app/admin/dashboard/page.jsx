"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PAGES } from "@/lib/pages";
import DashboardHeader from "@/components/common/DashboardHeader";

const PAGE_LABEL = Object.fromEntries(PAGES.map((p) => [p.key, p.label]));

export default function AdminDashboard() {
  return (
    <Suspense fallback={null}>
      <AdminDashboardInner />
    </Suspense>
  );
}

function AdminDashboardInner() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") === "PUBLISHED" ? "PUBLISHED" : "PENDING";
  const [tab, setTab] = useState(initialTab);
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlTab = searchParams.get("tab");
    if (urlTab === "PUBLISHED" || urlTab === "PENDING") setTab(urlTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  async function load() {
    setLoading(true);
    const res = await fetch(`/api/posts?status=${tab}`);
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  function startEdit(post) {
    setEditingId(post.id);
    setDraft({ title: post.title, description: post.description, pages: post.pages });
  }

  function togglePage(key) {
    setDraft((d) => ({
      ...d,
      pages: d.pages.includes(key) ? d.pages.filter((p) => p !== key) : [...d.pages, key],
    }));
  }

  async function saveEdit(id) {
    await fetch(`/api/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(draft),
    });
    setEditingId(null);
    load();
  }

  async function approve(id) {
    await fetch(`/api/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "PUBLISHED" }),
    });
    load();
  }

  async function reject(id) {
    const reason = window.prompt("Reason for rejection?") || "";
    await fetch(`/api/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "REJECTED", rejectReason: reason }),
    });
    load();
  }

  async function remove(id) {
    if (!window.confirm("Delete this post permanently?")) return;
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
      <DashboardHeader title="Admin dashboard" />

      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 24px 60px" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          {["PENDING", "PUBLISHED"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                background: tab === t ? "#1a1a1a" : "#fff",
                color: tab === t ? "#fff" : "#374151",
                fontWeight: 600,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {t === "PENDING" ? "Pending review" : "Published"}
            </button>
          ))}
        </div>

        {loading && <p style={{ color: "#9ca3af", fontSize: 14 }}>Loading…</p>}
        {!loading && posts.length === 0 && (
          <div
            style={{
              background: "#fff",
              border: "1px dashed #e5e7eb",
              borderRadius: 12,
              padding: 40,
              textAlign: "center",
              color: "#9ca3af",
              fontSize: 14,
            }}
          >
            Nothing here yet.
          </div>
        )}

        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              background: "#fff",
              border: "1px solid #eee",
              borderRadius: 12,
              padding: 20,
              marginBottom: 14,
              boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
            }}
          >
            {editingId === post.id ? (
              <>
                <input
                  value={draft.title}
                  onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                  style={{ ...inputStyle, marginBottom: 10 }}
                />
                <textarea
                  rows={4}
                  value={draft.description}
                  onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                  style={{ ...inputStyle, marginBottom: 10, fontFamily: "inherit" }}
                />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
                  {PAGES.map(({ key, label }) => (
                    <label
                      key={key}
                      style={{
                        fontSize: 12,
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        border: "1px solid #e5e7eb",
                        borderRadius: 999,
                        padding: "4px 10px",
                      }}
                    >
                      <input type="checkbox" checked={draft.pages.includes(key)} onChange={() => togglePage(key)} />
                      {label}
                    </label>
                  ))}
                </div>
                <ActionBtn color="#16a34a" onClick={() => saveEdit(post.id)}>Save</ActionBtn>
                <ActionBtn color="#6b7280" onClick={() => setEditingId(null)}>Cancel</ActionBtn>
              </>
            ) : (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#1a1a1a" }}>{post.title}</h3>
                  <span style={{ fontSize: 11, color: "#9ca3af", whiteSpace: "nowrap", marginLeft: 12 }}>
                    by {post.authorName}
                  </span>
                </div>

                {post.leadImage && (
                  <img
                    src={post.leadImage}
                    alt=""
                    style={{ maxWidth: 180, borderRadius: 8, marginBottom: 10, border: "1px solid #eee" }}
                  />
                )}

                <p style={{ fontSize: 13.5, color: "#4b5563", lineHeight: 1.6, marginBottom: 10 }}>
                  {post.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                  {post.pages.map((p) => (
                    <span
                      key={p}
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#c2410c",
                        background: "#fff7ed",
                        padding: "2px 9px",
                        borderRadius: 999,
                      }}
                    >
                      {PAGE_LABEL[p] || p}
                    </span>
                  ))}
                </div>

                <ActionBtn color="#374151" onClick={() => startEdit(post)}>Edit</ActionBtn>
                {tab === "PENDING" && (
                  <>
                    <ActionBtn color="#16a34a" onClick={() => approve(post.id)}>Approve</ActionBtn>
                    <ActionBtn color="#ef4444" onClick={() => reject(post.id)}>Reject</ActionBtn>
                  </>
                )}
                {tab === "PUBLISHED" && (
                  <ActionBtn color="#ef4444" onClick={() => remove(post.id)}>Delete</ActionBtn>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ActionBtn({ color, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "7px 15px",
        marginRight: 8,
        background: color,
        color: "#fff",
        border: "none",
        borderRadius: 6,
        fontSize: 12.5,
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

const inputStyle = {
  width: "100%",
  padding: "9px 12px",
  border: "1px solid #e5e7eb",
  borderRadius: 7,
  fontSize: 13.5,
};
