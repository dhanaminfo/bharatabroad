"use client";

import { useMemo, useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { useRouter } from "next/navigation";
import NavigationBar from "@/components/heritage/NavigationBar";
import IndianFashionFilter from "@/components/heritage/IndianFashionFilter";
import fashionEncyclopedia from "@/data/indian-fashion-encyclopedia.json";
import { getZone, ZONE_ORDER } from "@/components/heritage/fashionZones";
import "@/components/heritage/FashionHeritage.css";

const GARMENT_ROUTES = {
  "Kanjeevaram Saree": "/heritage/kanjeevaram-saree",
  "Banarasi Silk Saree": "/heritage/banarasi-silk",
  Dhoti: "/heritage/dhoti",
  Churidar: "/heritage/churidar",
  "Anarkali Suit": "/heritage/anarkaliSuit",
};

function GarmentCard({ garment, indexKey, onSelect }) {
  return (
    <button type="button" className="fh-card" key={indexKey} onClick={() => onSelect(garment)}>
      <div className="fh-card-img-wrap">
        <img src={garment.image} alt={garment.name} loading="lazy" />
      </div>
      <div className="fh-card-body">
        <div className="fh-card-meta">
          {garment.region} · {garment.wearer}
        </div>
        <div className="fh-card-title">{garment.name}</div>
        <p className="fh-card-desc">
          {typeof garment.description === "string" ? garment.description : JSON.stringify(garment.description)}
        </p>
      </div>
    </button>
  );
}

function GarmentModal({ garment, onClose }) {
  if (!garment) return null;

  return (
    <Modal show={!!garment} onHide={onClose} centered size="lg" className="fh-modal">
      <button type="button" className="fh-modal-close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <div className="fh-modal-content-wrap">
        <div className="fh-modal-img-wrap">
          <img src={garment.image} alt={garment.name} />
        </div>
        <div className="fh-modal-body">
          <div className="fh-modal-meta">
            {garment.region} · {garment.wearer}
            {garment.occasion ? ` · ${garment.occasion}` : ""}
          </div>
          <h2 className="fh-modal-title">{garment.name}</h2>
          <p className="fh-modal-desc">
            {typeof garment.description === "string" ? garment.description : JSON.stringify(garment.description)}
          </p>

          <div className="fh-modal-extra">
            {Object.entries(garment)
              .filter(([key]) => !["name", "image", "region", "wearer", "occasion", "description", "letter", "zone"].includes(key))
              .map(([key, value]) => (
                <div className="fh-modal-extra-row" key={key}>
                  <span className="fh-modal-extra-label">{key}</span>
                  <span className="fh-modal-extra-value">{typeof value === "string" ? value : JSON.stringify(value)}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default function Fashion() {
  const router = useRouter();
  const [filterState, setFilterState] = useState({ results: [], isFiltering: false });
  const [selectedGarment, setSelectedGarment] = useState(null);

  const handleSelectGarment = (garment) => {
    const route = GARMENT_ROUTES[garment.name];
    if (route) {
      router.push(route);
      return;
    }
    setSelectedGarment(garment);
  };

  const groupedByZone = useMemo(() => {
    const groups = {};
    (fashionEncyclopedia.sections || []).forEach((section) => {
      section.garments.forEach((garment) => {
        const zone = getZone(garment.region);
        if (!groups[zone]) groups[zone] = [];
        groups[zone].push(garment);
      });
    });
    return groups;
  }, []);

  const { results, isFiltering } = filterState;

  return (
    <div className="fh-root">
      <NavigationBar />

      <header className="fh-header">
        <Container>
          <span className="fh-eyebrow">A living record of Indian attire</span>
          <h1 className="fh-title">Ancient &amp; Authentic Attire of Bharat</h1>
          <p className="fh-subtitle">
            Rooted in region, ritual and everyday life — traditional and functional garments of India, organised by
            wearer, region and occasion.
          </p>
        </Container>
      </header>

      <div className="fh-filter">
        <IndianFashionFilter onResults={setFilterState} />
      </div>

      {isFiltering ? (
        <section className="fh-zone">
          <Container>
            <div className="fh-zone-head">
              <h2 className="fh-zone-title">Filtered results</h2>
              <span className="fh-zone-count">
                {results.length} garment{results.length !== 1 ? "s" : ""}
              </span>
            </div>

            {results.length > 0 ? (
              <div className="fh-grid">
                {results.map((garment, index) => (
                  <GarmentCard garment={garment} indexKey={`filtered-${index}`} key={`filtered-${index}`} onSelect={handleSelectGarment} />
                ))}
              </div>
            ) : (
              <div className="fh-empty">
                <p className="fh-empty-title">No garments match those filters.</p>
                <p className="fh-empty-text">Try clearing a filter or searching a different region or garment name.</p>
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
                  {groupedByZone[zone].length} garment{groupedByZone[zone].length !== 1 ? "s" : ""}
                </span>
              </div>

              <div className="fh-grid">
                {groupedByZone[zone].map((garment, index) => (
                  <GarmentCard garment={garment} indexKey={`${zone}-${index}`} key={`${zone}-${index}`} onSelect={handleSelectGarment} />
                ))}
              </div>

              <div className="fh-callout">
                <span className="fh-callout-label">Note</span>
                <span className="fh-callout-text">
                  Learn traditional draping styles from regional artisans — workshop details coming soon.
                </span>
              </div>
            </Container>
          </section>
        ))
      )}

      <GarmentModal garment={selectedGarment} onClose={() => setSelectedGarment(null)} />
    </div>
  );
}
