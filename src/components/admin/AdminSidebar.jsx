"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Pending Review", href: "/admin/dashboard?tab=PENDING", match: "/admin/dashboard" },
  { label: "Published Posts", href: "/admin/dashboard?tab=PUBLISHED", match: "/admin/dashboard" },
  { label: "News Feeder", href: "/admin/feeder", match: "/admin/feeder" },
  { label: "RSS Handling", href: "/admin/feeds", match: "/admin/feeds" },
  { label: "Ad Management", href: "/admin/ads", match: "/admin/ads" },
  { label: "Manage Employees", href: "/admin/users", match: "/admin/users" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div
      style={{
        width: 220,
        minHeight: "100vh",
        background: "#111827",
        color: "#e5e7eb",
        padding: "24px 0",
        flexShrink: 0,
      }}
    >
      <div style={{ padding: "0 20px 24px", fontSize: 15, fontWeight: 800, color: "#f97316" }}>
        BharatAbroad
        <div style={{ fontSize: 10, fontWeight: 500, color: "#9ca3af", marginTop: 2, letterSpacing: 0.5 }}>
          ADMIN PANEL
        </div>
      </div>

      <nav>
        {NAV_ITEMS.map(({ label, href, match }) => {
          const active = pathname === match;
          return (
            <Link
              key={href}
              href={href}
              style={{
                display: "block",
                padding: "11px 20px",
                fontSize: 13.5,
                fontWeight: 600,
                color: active ? "#fff" : "#9ca3af",
                background: active ? "rgba(249,115,22,0.15)" : "transparent",
                borderLeft: active ? "3px solid #f97316" : "3px solid transparent",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
