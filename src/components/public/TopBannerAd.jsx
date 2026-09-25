import { getAdsForSection } from "@/lib/ads";

export default function TopBannerAd() {
  const { ad1 } = getAdsForSection("top-banner");
  if (!ad1) return null;

  return (
    <a href={ad1.link} target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%" }}>
      <img
        src={ad1.image}
        alt={ad1.label || "Advertisement"}
        style={{ width: "100%", maxHeight: 120, objectFit: "cover", display: "block" }}
      />
    </a>
  );
}
