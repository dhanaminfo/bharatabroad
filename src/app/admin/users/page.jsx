"use client";

import { useEffect, useState } from "react";
import DashboardHeader from "@/components/common/DashboardHeader";

const ROLES = ["EMPLOYEE", "ADMIN", "SUPERADMIN"];

export default function UsersAdminPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  const [showAdd, setShowAdd] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "", role: "EMPLOYEE" });

  const [editingId, setEditingId] = useState(null);
  const [editDraft, setEditDraft] = useState({});

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    setError(null);
    const res = await fetch("/api/users", { cache: "no-store" });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || `Request failed (${res.status})`);
      setUsers([]);
      setLoading(false);
      return;
    }
    setUsers(await res.json());
    setLoading(false);
  }

  async function handleAdd(e) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    if (res.ok) {
      setNewUser({ name: "", email: "", password: "", role: "EMPLOYEE" });
      setShowAdd(false);
      load();
    } else {
      const data = await res.json().catch(() => ({}));
      alert(data.error || "Failed to create user");
    }
    setSaving(false);
  }

  function startEdit(user) {
    setEditingId(user.id);
    setEditDraft({ name: user.name, role: user.role, password: "" });
  }

  async function saveEdit(id) {
    setSaving(true);
    const payload = { name: editDraft.name, role: editDraft.role };
    if (editDraft.password) payload.password = editDraft.password;

    const res = await fetch(`/api/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      setEditingId(null);
      load();
    } else {
      const data = await res.json().catch(() => ({}));
      alert(data.error || "Failed to update user");
    }
    setSaving(false);
  }

  async function handleDelete(id, name) {
    if (!window.confirm(`Delete ${name}'s account? This can't be undone.`)) return;
    const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
    if (res.ok) {
      load();
    } else {
      const data = await res.json().catch(() => ({}));
      alert(data.error || "Failed to delete user");
    }
  }

  if (loading) {
    return (
      <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
        <DashboardHeader title="Manage Employees" />
        <p style={{ textAlign: "center", color: "#9ca3af" }}>Loading…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
        <DashboardHeader title="Manage Employees" />
        <div style={{ maxWidth: 600, margin: "40px auto", padding: "0 24px" }}>
          <div style={{ background: "#fef2f2", color: "#dc2626", padding: 16, borderRadius: 8, fontSize: 14 }}>
            {error}. This page requires a SUPERADMIN account.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
      <DashboardHeader title="Manage Employees" />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>
            {users.length} account{users.length !== 1 ? "s" : ""}
            {saving && <span style={{ color: "#f97316", marginLeft: 8 }}>Saving…</span>}
          </p>
          <button onClick={() => setShowAdd((v) => !v)} style={primaryBtn}>
            {showAdd ? "Cancel" : "+ Add account"}
          </button>
        </div>

        {showAdd && (
          <form
            onSubmit={handleAdd}
            style={{ background: "#fff", border: "1px solid #eee", borderRadius: 10, padding: 18, marginBottom: 20 }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
              <input
                placeholder="Full name"
                required
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                style={input}
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                style={input}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                style={input}
              />
              <select value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })} style={input}>
                {ROLES.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" disabled={saving} style={primaryBtn}>
              Create account
            </button>
          </form>
        )}

        {users.map((user) => (
          <div key={user.id} style={{ background: "#fff", border: "1px solid #eee", borderRadius: 10, padding: 16, marginBottom: 12 }}>
            {editingId === user.id ? (
              <>
                <input
                  value={editDraft.name}
                  onChange={(e) => setEditDraft({ ...editDraft, name: e.target.value })}
                  style={{ ...input, marginBottom: 8 }}
                />
                <select
                  value={editDraft.role}
                  onChange={(e) => setEditDraft({ ...editDraft, role: e.target.value })}
                  style={{ ...input, marginBottom: 8 }}
                >
                  {ROLES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <input
                  type="password"
                  placeholder="New password (leave blank to keep current)"
                  value={editDraft.password}
                  onChange={(e) => setEditDraft({ ...editDraft, password: e.target.value })}
                  style={{ ...input, marginBottom: 10 }}
                />
                <button onClick={() => saveEdit(user.id)} style={smallBtn("#16a34a")}>
                  Save
                </button>
                <button onClick={() => setEditingId(null)} style={smallBtn("#6b7280")}>
                  Cancel
                </button>
              </>
            ) : (
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14.5 }}>{user.name}</div>
                  <div style={{ fontSize: 12.5, color: "#6b7280" }}>{user.email}</div>
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: 6,
                      fontSize: 10.5,
                      fontWeight: 700,
                      padding: "2px 9px",
                      borderRadius: 999,
                      background: roleColor(user.role).bg,
                      color: roleColor(user.role).text,
                    }}
                  >
                    {user.role}
                  </span>
                </div>
                <div>
                  <button onClick={() => startEdit(user)} style={smallBtn("#374151")}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(user.id, user.name)} style={smallBtn("#ef4444")}>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function roleColor(role) {
  if (role === "SUPERADMIN") return { bg: "#fae8ff", text: "#a21caf" };
  if (role === "ADMIN") return { bg: "#fee2e2", text: "#b91c1c" };
  return { bg: "#dbeafe", text: "#1d4ed8" };
}

const input = {
  padding: "9px 12px",
  border: "1px solid #e5e7eb",
  borderRadius: 7,
  fontSize: 13,
  width: "100%",
};

const primaryBtn = {
  padding: "9px 18px",
  background: "#f97316",
  color: "#fff",
  border: "none",
  borderRadius: 7,
  fontSize: 13,
  fontWeight: 700,
  cursor: "pointer",
};

function smallBtn(color) {
  return {
    padding: "6px 14px",
    marginLeft: 8,
    background: color,
    color: "#fff",
    border: "none",
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
  };
}
