// Not part of the original files you shared — reconstructed here since
// Fashion.jsx and IndianFashionFilter.jsx both import { getZone, ZONE_ORDER }
// from this module. Zones are inferred from keywords in each garment's
// "region" string.

export const ZONE_ORDER = ["North", "South", "East", "West", "Pan-India & Ancient"];

const NORTH_KEYWORDS = [
  "uttar pradesh", "lucknow", "varanasi", "delhi", "punjab", "rajasthan",
  "kashmir", "himachal", "haryana", "uttarakhand", "jodhpur", "north india",
  "mughal",
];

const SOUTH_KEYWORDS = [
  "tamil nadu", "kerala", "karnataka", "andhra pradesh", "telangana",
  "kanchipuram", "hyderabad", "nilgiris", "south india",
];

const EAST_KEYWORDS = [
  "west bengal", "odisha", "assam", "sikkim", "nagaland", "bengal",
];

const WEST_KEYWORDS = [
  "gujarat", "maharashtra", "kutch", "goa", "madhya pradesh",
];

export function getZone(region = "") {
  const r = region.toLowerCase();

  if (NORTH_KEYWORDS.some((k) => r.includes(k))) return "North";
  if (SOUTH_KEYWORDS.some((k) => r.includes(k))) return "South";
  if (EAST_KEYWORDS.some((k) => r.includes(k))) return "East";
  if (WEST_KEYWORDS.some((k) => r.includes(k))) return "West";
  return "Pan-India & Ancient";
}
