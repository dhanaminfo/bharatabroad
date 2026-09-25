"use client";

import { useEffect, useMemo, useState } from "react";
import fashionEncyclopedia from "@/data/indian-fashion-encyclopedia.json";
import { getZone, ZONE_ORDER } from "./fashionZones";

const ALL_GARMENTS = (fashionEncyclopedia.sections || []).flatMap((section) =>
  section.garments.map((garment) => ({
    ...garment,
    letter: section.letter,
    zone: getZone(garment.region),
  }))
);

const WEARERS = ["All", "Men", "Women", "Children", "Unisex"];
const OCCASIONS = ["Wedding", "Daily", "Office", "Festive", "Ceremonial"];

const ZONE_ICONS = {
  North: (
    <svg viewBox="0 0 20 20" width="12" height="12">
      <path d="M10 2 L10 18 M10 2 L6 6 M10 2 L14 6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  South: (
    <svg viewBox="0 0 20 20" width="12" height="12">
      <path d="M10 18 L10 2 M10 18 L6 14 M10 18 L14 14" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  East: (
    <svg viewBox="0 0 20 20" width="12" height="12">
      <path d="M2 10 L18 10 M18 10 L14 6 M18 10 L14 14" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  West: (
    <svg viewBox="0 0 20 20" width="12" height="12">
      <path d="M18 10 L2 10 M2 10 L6 6 M2 10 L6 14" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Pan-India & Ancient": (
    <svg viewBox="0 0 20 20" width="12" height="12">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="10" cy="10" r="1.6" fill="currentColor" />
    </svg>
  ),
};

const toggleInArray = (arr, value) =>
  arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];

export default function IndianFashionFilter({ onResults }) {
  const [search, setSearch] = useState("");
  const [wearer, setWearer] = useState("All");
  const [zones, setZones] = useState([]);
  const [occasions, setOccasions] = useState([]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return ALL_GARMENTS.filter((garment) => {
      const matchesSearch =
        !query ||
        garment.name.toLowerCase().includes(query) ||
        garment.region.toLowerCase().includes(query) ||
        garment.description.toLowerCase().includes(query);

      const wearerTokens = (garment.wearer || "").toLowerCase().split(/\s*\/\s*/).map((w) => w.trim());
      const matchesWearer = wearer === "All" || wearerTokens.includes(wearer.toLowerCase());

      const matchesZone = zones.length === 0 || zones.includes(garment.zone);

      const matchesOccasion =
        occasions.length === 0 ||
        occasions.some((o) => (garment.occasion || "").toLowerCase().includes(o.toLowerCase()));

      return matchesSearch && matchesWearer && matchesZone && matchesOccasion;
    });
  }, [search, wearer, zones, occasions]);

  const isFiltering = search.trim() !== "" || wearer !== "All" || zones.length > 0 || occasions.length > 0;

  useEffect(() => {
    if (typeof onResults === "function") {
      onResults({ results: filtered, isFiltering });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered, isFiltering]);

  const clearAll = () => {
    setSearch("");
    setWearer("All");
    setZones([]);
    setOccasions([]);
  };

  return (
    <div className="fh-filterbar">
      <div className="fh-filterbar-row">
        <div className="fh-search">
          <svg viewBox="0 0 20 20" width="15" height="15" className="fh-search-icon">
            <circle cx="8.5" cy="8.5" r="6" stroke="currentColor" strokeWidth="1.6" fill="none" />
            <line x1="13.2" y1="13.2" x2="18" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search saree, sherwani, region…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search garments"
          />
        </div>

        <div className="fh-segmented" role="group" aria-label="Filter by wearer">
          {WEARERS.map((w) => (
            <button
              key={w}
              type="button"
              className={`fh-segmented-btn${wearer === w ? " is-active" : ""}`}
              onClick={() => setWearer(w)}
            >
              {w}
            </button>
          ))}
        </div>
      </div>

      <div className="fh-filterbar-row fh-filterbar-row--chips">
        <div className="fh-chip-group">
          <span className="fh-chip-group-label">Region</span>
          {ZONE_ORDER.map((zone) => (
            <button
              key={zone}
              type="button"
              className={`fh-chip fh-chip--zone${zones.includes(zone) ? " is-active" : ""}`}
              onClick={() => setZones((z) => toggleInArray(z, zone))}
              aria-pressed={zones.includes(zone)}
            >
              <span className="fh-chip-icon">{ZONE_ICONS[zone]}</span>
              {zone}
            </button>
          ))}
        </div>

        <div className="fh-chip-group">
          <span className="fh-chip-group-label">Occasion</span>
          {OCCASIONS.map((o) => (
            <button
              key={o}
              type="button"
              className={`fh-chip${occasions.includes(o) ? " is-active" : ""}`}
              onClick={() => setOccasions((arr) => toggleInArray(arr, o))}
              aria-pressed={occasions.includes(o)}
            >
              {o}
            </button>
          ))}
        </div>
      </div>

      <div className="fh-filterbar-status">
        <span className="fh-result-count">
          <strong>{filtered.length}</strong> of {ALL_GARMENTS.length} garments
        </span>
        {isFiltering && (
          <button type="button" className="fh-clear-btn" onClick={clearAll}>
            Clear all filters
          </button>
        )}
      </div>
    </div>
  );
}
