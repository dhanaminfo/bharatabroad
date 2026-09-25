// Page keys (from src/lib/pages.js) don't always match the category keys
// used in data/rss-feeds.json — e.g. "sport" (page) vs "sports" (feed category).
// This maps one to the other so RSS lookups always hit the right bucket.
export const RSS_CATEGORY_MAP = {
  sport: "sports",
  immigration: "immigration",
  health: "health",
  technology: "technology",
  auto: "auto",
  entertainment: "entertainment",
  travel: "global", // no dedicated "travel" category yet — falls back to global
};

export function resolveRssCategory(pageKey) {
  return RSS_CATEGORY_MAP[pageKey] || pageKey;
}
