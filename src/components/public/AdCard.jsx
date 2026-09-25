export default function AdCard({ ad }) {
  if (!ad) return null;
  return (
    <a href={ad.link} target="_blank" rel="noopener noreferrer" style={{ display: "block", height: "100%" }}>
      <img
        src={ad.image}
        alt={ad.label || "Advertisement"}
        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10 }}
      />
    </a>
  );
}
