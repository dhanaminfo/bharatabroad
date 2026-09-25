"use client";

import { useSession, signOut } from "next-auth/react";

export default function DashboardHeader({ title }) {
  const { data: session } = useSession();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 24px",
        background: "#fff",
        borderBottom: "1px solid #eee",
        marginBottom: 32,
      }}
    >
      <div>
        <h1 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: "#1a1a1a" }}>{title}</h1>
        {session?.user && (
          <p style={{ fontSize: 12, color: "#888", margin: "3px 0 0" }}>
            Signed in as <strong>{session.user.name}</strong>{" "}
            <span
              style={{
                marginLeft: 6,
                padding: "1px 8px",
                borderRadius: 999,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 0.4,
                background: session.user.role === "ADMIN" ? "#fee2e2" : "#dbeafe",
                color: session.user.role === "ADMIN" ? "#b91c1c" : "#1d4ed8",
              }}
            >
              {session.user.role}
            </span>
          </p>
        )}
      </div>

      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        style={{
          padding: "8px 18px",
          background: "#f3f4f6",
          color: "#374151",
          border: "1px solid #e5e7eb",
          borderRadius: 7,
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#e5e7eb")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#f3f4f6")}
      >
        Log out
      </button>
    </div>
  );
}
