import Link from "next/link";

export default function PostsGrid({ title, posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div style={{ marginBottom: 40 }}>
      <div
        style={{
          margin: "0 0 16px",
          fontSize: 22,
          fontWeight: "bold",
          color: "#1a1a1a",
          borderLeft: "4px solid #f97316",
          paddingLeft: 10,
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/news/${post.id}`}
            style={{
              background: "#fff",
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              textDecoration: "none",
              color: "inherit",
              display: "block",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
          >
            {post.leadImage && (
              <img
                src={post.leadImage}
                alt={post.title}
                style={{ width: "100%", height: 140, objectFit: "cover" }}
              />
            )}
            <div style={{ padding: 14 }}>
              <h3 style={{ fontSize: 15, margin: "0 0 6px", color: "#1a1a1a" }}>{post.title}</h3>
              <p style={{ fontSize: 12.5, color: "#666", margin: 0, lineHeight: 1.5 }}>
                {post.description?.slice(0, 90)}
                {post.description?.length > 90 ? "…" : ""}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
