import fs from "fs";
import path from "path";
import Parser from "rss-parser";

const parser = new Parser({
  timeout: 8000,
  customFields: {
    item: [["media:content", "mediaContent"], ["enclosure", "enclosure"]],
  },
});

function readFeedUrls(category) {
  const filePath = path.join(process.cwd(), "data", "rss-feeds.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const feeds = JSON.parse(raw || "{}");
  return feeds[category] || [];
}

function extractImage(item) {
  if (item.enclosure?.url) return item.enclosure.url;
  if (item.mediaContent?.$?.url) return item.mediaContent.$.url;
  // fallback: try to pull the first <img> src out of the content HTML
  const html = item["content:encoded"] || item.content || "";
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
}

function stripHtml(html = "") {
  return html.replace(/<[^>]+>/g, "").trim();
}

/**
 * Fetch + parse every RSS feed configured for a category, merge into one
 * sorted list. Individual feed failures are skipped, not fatal — a dead
 * feed shouldn't take a whole page down.
 */
export async function getRssArticles(category, limit = 12) {
  const urls = readFeedUrls(category);
  if (urls.length === 0) return [];

  const results = await Promise.allSettled(urls.map((url) => parser.parseURL(url)));

  const articles = [];
  for (const result of results) {
    if (result.status !== "fulfilled") continue;
    const feed = result.value;
    for (const item of feed.items || []) {
      articles.push({
        title: item.title || "Untitled",
        description: stripHtml(item.contentSnippet || item.summary || "").slice(0, 220),
        image: extractImage(item),
        link: item.link,
        source: feed.title || new URL(urls[0]).hostname,
        publishedAt: item.isoDate || item.pubDate || null,
      });
    }
  }

  articles.sort((a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0));
  return articles.slice(0, limit);
}
