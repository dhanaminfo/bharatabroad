"use client";

import { useMemo, useState } from "react";
import { Modal } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import "./GarmentPage.css";

const TILE_VARIANTS = ["normal", "wide", "tall", "large"];
const getTileVariant = (index) => TILE_VARIANTS[index % TILE_VARIANTS.length];

const STANDARD_FIELDS = new Set([
  "name", "category", "region", "occasion", "description", "image", "materials", "difficulty", "notes",
]);

function GarmentCard({ item, index, onSelect, fallbackImage }) {
  return (
    <button type="button" className={`kj-card kj-tile-${getTileVariant(index)}`} onClick={() => onSelect(item)}>
      <div className="kj-card-img-wrap">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
        />
      </div>
      <div className="kj-card-body">
        <span className="kj-card-meta">{item.category}</span>
        <h3 className="kj-card-title">{item.name}</h3>
        <p className="kj-card-desc">{item.description}</p>
      </div>
    </button>
  );
}

function GarmentModal({ item, onClose, fallbackImage }) {
  if (!item) return null;
  const extraFields = Object.entries(item).filter(([key, val]) => !STANDARD_FIELDS.has(key) && val);

  return (
    <Modal show={!!item} onHide={onClose} centered size="lg" className="kj-modal">
      <Modal.Header closeButton>
        <Modal.Title>{item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="kj-modal-content-wrap">
          <div className="kj-modal-img">
            <img
              src={item.image}
              alt={item.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallbackImage;
              }}
            />
          </div>
          <div className="kj-modal-details">
            <p className="kj-modal-desc">{item.description}</p>
            <ul className="kj-modal-facts">
              <li><strong>Category:</strong> {item.category}</li>
              <li><strong>Region:</strong> {item.region}</li>
              <li><strong>Occasion:</strong> {item.occasion}</li>
              <li><strong>Materials:</strong> {item.materials}</li>
              <li><strong>Weave difficulty:</strong> {item.difficulty}</li>
            </ul>
            {item.notes && (
              <p className="kj-modal-notes">
                <strong>Note:</strong> {item.notes}
              </p>
            )}
            {extraFields.length > 0 && (
              <ul className="kj-modal-facts kj-modal-extra">
                {extraFields.map(([key, val]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {String(val)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function CategoryFilter({ active, onChange, categoryOrder }) {
  return (
    <div className="kj-filter-bar">
      <button className={`kj-filter-pill ${active === "All" ? "is-active" : ""}`} onClick={() => onChange("All")}>
        All
      </button>
      {categoryOrder.map((cat) => (
        <button key={cat} className={`kj-filter-pill ${active === cat ? "is-active" : ""}`} onClick={() => onChange(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
}

/**
 * Shared page shell for a garment's variety encyclopedia. Pass the JSON
 * data (grouped by category), the category order, badge/title/subtitle
 * copy, and a fallback image for broken links.
 */
export default function GarmentPage({ data, categoryOrder, badge, title, fallbackImage }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const sections = useMemo(() => {
    return categoryOrder
      .map((cat) => ({ category: cat, items: data[cat] || [] }))
      .filter((section) => activeCategory === "All" || section.category === activeCategory);
  }, [activeCategory, data, categoryOrder]);

  const totalCount = useMemo(() => Object.values(data).reduce((sum, arr) => sum + arr.length, 0), [data]);

  return (
    <div className="kj-page">
      <NavigationBar />
      <header className="kj-hero">
        <div className="kj-hero-inner">
          <span className="kj-hero-badge">Textile Heritage</span>
          <h1>{title}</h1>
          <p>
            {totalCount} varieties of {title.toLowerCase()} — grouped by {categoryOrder.map((c) => c.toLowerCase()).join(", ")}.
          </p>
        </div>
      </header>

      <CategoryFilter active={activeCategory} onChange={setActiveCategory} categoryOrder={categoryOrder} />

      <main className="kj-main">
        {sections.map((section) => (
          <section key={section.category} className="kj-section">
            <h2 className="kj-section-title">{section.category}</h2>
            <div className="kj-grid">
              {section.items.map((item, idx) => (
                <GarmentCard key={item.name} item={item} index={idx} onSelect={setSelected} fallbackImage={fallbackImage} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <GarmentModal item={selected} onClose={() => setSelected(null)} fallbackImage={fallbackImage} />
    </div>
  );
}
