"use client";

import { useMemo, useState } from "react";
import { Container, Modal } from "react-bootstrap";
import foodEncyclopedia from "@/data/indian-foods-az.json";
import { getZone, ZONE_ORDER } from "./fashionZones";

const ALL_FOODS = (foodEncyclopedia.sections || []).flatMap((section) =>
  section.foods.map((food) => ({ ...food, letter: section.letter, zone: getZone(food.region) }))
);

export default function IndianFoodFilter() {
  const [search, setSearch] = useState("");
  const [zones, setZones] = useState([]);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return ALL_FOODS.filter((food) => {
      const matchesSearch =
        !query ||
        food.name.toLowerCase().includes(query) ||
        food.region.toLowerCase().includes(query) ||
        food.description.toLowerCase().includes(query);
      const matchesZone = zones.length === 0 || zones.includes(food.zone);
      return matchesSearch && matchesZone;
    });
  }, [search, zones]);

  const isFiltering = search.trim() !== "" || zones.length > 0;

  const groupedByZone = useMemo(() => {
    const groups = {};
    ALL_FOODS.forEach((food) => {
      if (!groups[food.zone]) groups[food.zone] = [];
      groups[food.zone].push(food);
    });
    return groups;
  }, []);

  const toggleZone = (zone) => {
    setZones((z) => (z.includes(zone) ? z.filter((v) => v !== zone) : [...z, zone]));
  };

  return (
    <div className="fh-root">
      <header className="fh-header">
        <Container>
          <span className="fh-eyebrow">A living record of Indian cuisine</span>
          <h1 className="fh-title">Ancient &amp; Authentic Foods of Bharat</h1>
          <p className="fh-subtitle">
            Rooted in Ayurveda, temples, tribes and time — discover the sacred flavours of India, organised by region
            from A to Z.
          </p>
        </Container>
      </header>

      <div className="fh-filter">
        <div className="fh-filterbar">
          <div className="fh-filterbar-row">
            <div className="fh-search">
              <svg viewBox="0 0 20 20" width="15" height="15" className="fh-search-icon">
                <circle cx="8.5" cy="8.5" r="6" stroke="currentColor" strokeWidth="1.6" fill="none" />
                <line x1="13.2" y1="13.2" x2="18" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search dish, region, ingredient…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search foods"
              />
            </div>
          </div>

          <div className="fh-filterbar-row fh-filterbar-row--chips">
            <div className="fh-chip-group">
              <span className="fh-chip-group-label">Region</span>
              {ZONE_ORDER.map((zone) => (
                <button
                  key={zone}
                  type="button"
                  className={`fh-chip${zones.includes(zone) ? " is-active" : ""}`}
                  onClick={() => toggleZone(zone)}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>

          <div className="fh-filterbar-status">
            <span className="fh-result-count">
              <strong>{filtered.length}</strong> of {ALL_FOODS.length} dishes
            </span>
            {isFiltering && (
              <button
                type="button"
                className="fh-clear-btn"
                onClick={() => {
                  setSearch("");
                  setZones([]);
                }}
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </div>

      {isFiltering ? (
        <section className="fh-zone">
          <Container>
            <div className="fh-zone-head">
              <h2 className="fh-zone-title">Filtered results</h2>
              <span className="fh-zone-count">
                {filtered.length} dish{filtered.length !== 1 ? "es" : ""}
              </span>
            </div>
            {filtered.length > 0 ? (
              <div className="fh-grid">
                {filtered.map((food, index) => (
                  <FoodCard key={`f-${index}`} food={food} onSelect={setSelected} />
                ))}
              </div>
            ) : (
              <div className="fh-empty">
                <p className="fh-empty-title">No dishes match those filters.</p>
                <p className="fh-empty-text">Try clearing a filter or searching a different dish or region.</p>
              </div>
            )}
          </Container>
        </section>
      ) : (
        ZONE_ORDER.filter((zone) => groupedByZone[zone]?.length).map((zone) => (
          <section className="fh-zone" key={zone}>
            <Container>
              <div className="fh-zone-head">
                <h2 className="fh-zone-title">{zone}</h2>
                <span className="fh-zone-count">
                  {groupedByZone[zone].length} dish{groupedByZone[zone].length !== 1 ? "es" : ""}
                </span>
              </div>
              <div className="fh-grid">
                {groupedByZone[zone].map((food, index) => (
                  <FoodCard key={`${zone}-${index}`} food={food} onSelect={setSelected} />
                ))}
              </div>
            </Container>
          </section>
        ))
      )}

      <FoodModal food={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

function FoodCard({ food, onSelect }) {
  return (
    <button type="button" className="fh-card" onClick={() => onSelect(food)}>
      <div className="fh-card-img-wrap">
        <img src={food.image} alt={food.name} loading="lazy" />
      </div>
      <div className="fh-card-body">
        <div className="fh-card-meta">
          {food.region} · {food.difficulty}
        </div>
        <div className="fh-card-title">{food.name}</div>
        <p className="fh-card-desc">{food.description}</p>
      </div>
    </button>
  );
}

function FoodModal({ food, onClose }) {
  if (!food) return null;
  return (
    <Modal show={!!food} onHide={onClose} centered size="lg" className="fh-modal">
      <button type="button" className="fh-modal-close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <div className="fh-modal-content-wrap">
        <div className="fh-modal-img-wrap">
          <img src={food.image} alt={food.name} />
        </div>
        <div className="fh-modal-body">
          <div className="fh-modal-meta">
            {food.region} · {food.prepTime} · {food.difficulty}
          </div>
          <h2 className="fh-modal-title">{food.name}</h2>
          <p className="fh-modal-desc">{food.description}</p>

          {food.ingredients && (
            <>
              <div className="fh-modal-extra-label" style={{ display: "block", marginBottom: 6 }}>
                Ingredients
              </div>
              <ul style={{ fontSize: 13.5, color: "#4a463f", lineHeight: 1.7, marginBottom: 16 }}>
                {food.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </>
          )}

          {food.preparation && (
            <>
              <div className="fh-modal-extra-label" style={{ display: "block", marginBottom: 6 }}>
                Preparation
              </div>
              <ol style={{ fontSize: 13.5, color: "#4a463f", lineHeight: 1.7, marginBottom: 16 }}>
                {food.preparation.map((step, i) => (
                  <li key={i} style={{ marginBottom: 4 }}>
                    {step}
                  </li>
                ))}
              </ol>
            </>
          )}

          {food.youtube && (
            <a href={food.youtube} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#a97c3d" }}>
              Watch video tutorial →
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}
