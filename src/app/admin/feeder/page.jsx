import DashboardHeader from "@/components/common/DashboardHeader";

export default function NewsFeederPage() {
  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
      <DashboardHeader title="News Feeder" />
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 24px 60px" }}>
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
          News Feeder auto-pull from RSS sources — coming soon.
          <br />
          This will read from the categories configured in RSS Handling
          and let you pull in headlines to review before publishing.
        </div>
      </div>
    </div>
  );
}
