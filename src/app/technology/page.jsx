import fs from "fs";
import path from "path";
import NewsSection from "@/components/public/NewsSection";
import PostsGrid from "@/components/public/PostsGrid";
import { getRssArticles } from "@/lib/rss";
import { resolveRssCategory } from "@/lib/rssCategoryMap";

async function getPublishedPosts(pageKey) {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const posts = JSON.parse(raw || "[]");
  return posts.filter((p) => p.status === "PUBLISHED" && p.pages.includes(pageKey));
}

export default async function TechnologyPage() {
  const [posts, rssArticles] = await Promise.all([
    getPublishedPosts("technology"),
    getRssArticles(resolveRssCategory("technology")),
  ]);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "30px 20px" }}>
      <h1 style={{ marginBottom: 24 }}>Technology</h1>

      <PostsGrid title="Latest Technology Stories" posts={posts} />

      <NewsSection title="Latest Technology Headlines" articles={rssArticles} category="technology" />
    </div>
  );
}
