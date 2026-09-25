import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

function getPost(id) {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const posts = JSON.parse(raw || "[]");
  return posts.find((p) => p.id === id && p.status === "PUBLISHED") || null;
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = getPost(id);
  if (!post) return { title: "Story not found | BharatAbroad" };
  return {
    title: `${post.title} | BharatAbroad`,
    description: post.description?.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.description?.slice(0, 160),
      images: post.leadImage ? [post.leadImage] : undefined,
    },
  };
}

export default async function NewsDetailPage({ params }) {
  const { id } = await params;
  const post = getPost(id);

  if (!post) notFound();

  const publishedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article style={{ maxWidth: 760, margin: "0 auto", padding: "40px 20px 80px" }}>
      <a
        href="javascript:history.back()"
        style={{ fontSize: 13, color: "#0066cc", textDecoration: "none", marginBottom: 20, display: "inline-block" }}
      >
        ← Back
      </a>

      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
        {post.pages?.map((p) => (
          <span
            key={p}
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#c2410c",
              background: "#fff7ed",
              padding: "3px 10px",
              borderRadius: 999,
              textTransform: "capitalize",
            }}
          >
            {p}
          </span>
        ))}
      </div>

      <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.25, color: "#111827", margin: "0 0 12px" }}>
        {post.title}
      </h1>

      <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 24 }}>
        By {post.authorName || "BharatAbroad Desk"} · {publishedDate}
      </div>

      {post.leadImage && (
        <img
          src={post.leadImage}
          alt={post.title}
          style={{ width: "100%", maxHeight: 420, objectFit: "cover", borderRadius: 12, marginBottom: 28 }}
        />
      )}

      <div style={{ fontSize: 17, lineHeight: 1.8, color: "#1f2937", whiteSpace: "pre-wrap" }}>
        {post.description}
      </div>
    </article>
  );
}
