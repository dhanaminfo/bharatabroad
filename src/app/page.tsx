import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import NewsSection from "@/components/public/NewsSection";
import PostsGrid from "@/components/public/PostsGrid";
import { getRssArticles } from "@/lib/rss";

export const metadata: Metadata = {
  title: "Latest Bharat News | IPL, Entertainment, Tech & Travel Updates",
  description:
    "Get the latest news from India and around the world on BharatAbroad. Stay updated with cricket, Bollywood news, technology, auto, health, travel, immigration, and more daily updates.",
  openGraph: {
    title: "Bharat Abroad – Connecting Indians Worldwide",
    description: "Join a global platform for Indians abroad. Explore culture, heritage, and community worldwide.",
    type: "website",
    url: "https://www.bharatabroad.com/",
    images: ["https://ayg.s3.us-east-2.amazonaws.com/BharatAbroad.com.png"],
  },
  alternates: {
    canonical: "https://www.bharatabroad.com/",
  },
  robots: "index, follow",
};

async function getHomePosts() {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const posts = JSON.parse(raw || "[]");
  return posts
    .filter((p: any) => p.status === "PUBLISHED" && p.pages?.includes("home"))
    .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export default async function HomePage() {
  const [posts, bharat, global, sports, finance, gossip] = await Promise.all([
    getHomePosts(),
    getRssArticles("bharat"),
    getRssArticles("global"),
    getRssArticles("sports"),
    getRssArticles("finance"),
    getRssArticles("gossip"),
  ]);

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", padding: "20px 0" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 20px" }}>
        <PostsGrid title="Latest from BharatAbroad" posts={posts} />

        <NewsSection title="Bharat News" articles={bharat} category="bharat" />
        <Divider />

        <NewsSection title="Global News" articles={global} category="global" />
        <Divider />

        <NewsSection title="Sports News" articles={sports} category="sports" />
        <Divider />

        <NewsSection title="Finance News" articles={finance} category="finance" />
        <Divider />

        <NewsSection title="Entertainment Stories" articles={gossip} category="gossip" />
      </div>
    </div>
  );
}

function Divider() {
  return <hr style={{ border: "none", borderTop: "2px solid #e0e0e0", margin: "10px 0 30px" }} />;
}
