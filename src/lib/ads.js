import fs from "fs";
import path from "path";

const ADS_FILE = path.join(process.cwd(), "data", "ads.json");

export function readAds() {
  const raw = fs.readFileSync(ADS_FILE, "utf-8");
  return JSON.parse(raw || "{}");
}

/**
 * Returns the fixed ad slots for a category: { ad1, ad2, ad3 }.
 * ad1 sits beside the featured story, ad2 fills the last column of
 * row 3, ad3 is the full-width section-ending banner. Each slot is
 * either an ad object ({ image, link, label }) or null — slots are
 * addressed by name, not array position, so deleting one never
 * shifts the others.
 */
export function getAdsForSection(category) {
  const ads = readAds();
  const entry = ads[category];
  if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
    return { ad1: null, ad2: null, ad3: null };
  }
  return {
    ad1: entry.ad1 || null,
    ad2: entry.ad2 || null,
    ad3: entry.ad3 || null,
  };
}
