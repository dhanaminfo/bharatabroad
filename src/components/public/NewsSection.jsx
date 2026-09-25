import NewsCard from "./NewsCard";
import AdCard from "./AdCard";
import { getAdsForSection } from "@/lib/ads";

// Server Component — articles are passed in already fetched (see getRssArticles).
export default function NewsSection({ title, articles, category }) {
  if (!articles || articles.length === 0) {
    return (
      <div style={{ marginBottom: 35 }}>
        <div className="ns-section-title">{title}</div>
        <p style={{ color: "#777", padding: 20 }}>No articles available right now.</p>
      </div>
    );
  }

  const bigCard = articles[0];
  const gridArticles = articles.slice(1, 12); // row2(4) + row3(3) + row4(4) = 11
  const { ad1, ad2, ad3 } = getAdsForSection(category || title);

  const row2Articles = gridArticles.slice(0, 4);
  const row3Articles = gridArticles.slice(4, 7); // 3 news, ad2 fills the 4th column
  const row4Articles = gridArticles.slice(7, 11);

  return (
    <>
      <div style={{ marginBottom: 40 }}>
        <div className="ns-section-title">{title}</div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="ns-desktop-layout">
          {/* Row 1: big card + ad1 */}
          <div className="ns-row-1">
            <div className="ns-card ns-big-card">
              <BigCardContent bigCard={bigCard} />
            </div>
            <div className="ns-ad-column">{ad1 && <AdCard ad={ad1} />}</div>
          </div>

          {/* Row 2: 4 news */}
          <div className="ns-news-row ns-row-4col">
            {row2Articles.map((article, i) => (
              <NewsCard key={`r2-${i}`} article={article} />
            ))}
          </div>

          {/* Row 3: 3 news + ad2 in the last column */}
          <div className="ns-news-row ns-row-4col">
            {row3Articles.map((article, i) => (
              <NewsCard key={`r3-${i}`} article={article} />
            ))}
            {ad2 && (
              <div className="ns-ad-slot">
                <AdCard ad={ad2} />
              </div>
            )}
          </div>

          {/* Row 4: 4 news */}
          <div className="ns-news-row ns-row-4col">
            {row4Articles.map((article, i) => (
              <NewsCard key={`r4-${i}`} article={article} />
            ))}
          </div>
        </div>

        {/* ── MEDIUM / MOBILE LAYOUT ── */}
        <div className="ns-medium-layout">
          <div className="ns-card ns-big-card ns-medium-big-card">
            <BigCardContent bigCard={bigCard} />
          </div>

          <div className="ns-medium-grid">
            {ad1 && (
              <div className="ns-medium-ad-slot">
                <AdCard ad={ad1} />
              </div>
            )}
            {row2Articles.map((article, i) => (
              <NewsCard key={`m-a-${i}`} article={article} />
            ))}
            {row3Articles.map((article, i) => (
              <NewsCard key={`m-b-${i}`} article={article} />
            ))}
            {ad2 && (
              <div className="ns-medium-ad-slot">
                <AdCard ad={ad2} />
              </div>
            )}
            {row4Articles.map((article, i) => (
              <NewsCard key={`m-c-${i}`} article={article} />
            ))}
          </div>
        </div>

        {/* ── SECTION ADVERTISEMENT (full width, below the grid) ── */}
        {ad3 && (
          <a
            href={ad3.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", width: "100%", marginTop: 20 }}
          >
            <img
              src={ad3.image}
              alt={ad3.label || "Advertisement"}
              style={{ width: "100%", maxHeight: 140, objectFit: "cover", borderRadius: 10, display: "block" }}
            />
          </a>
        )}
      </div>

      <style>{`
        .ns-section-title {
          margin: 30px 0 10px;
          font-size: 22px;
          font-weight: bold;
          color: #1a1a1a;
          border-left: 4px solid #0066cc;
          padding-left: 10px;
        }
        .ns-card {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .ns-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
        }
        .ns-desktop-layout { display: block; }
        .ns-medium-layout  { display: none; }
        .ns-row-1 {
          display: grid;
          grid-template-columns: 3fr 1fr;
          gap: 15px;
          margin-bottom: 15px;
          align-items: start;
        }
        .ns-big-card-link { text-decoration: none; color: inherit; display: block; height: 100%; }
        .ns-big-card-content { display: flex; height: 100%; min-height: 280px; }
        .ns-big-card-image { flex: 0 0 42%; }
        .ns-big-card-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .ns-big-card-body { padding: 20px; display: flex; flex-direction: column; flex: 1; }
        .ns-big-card-title {
          font-size: 20px;
          font-weight: bold;
          margin: 6px 0 12px;
          color: #222;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .ns-big-card-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }
        .ns-big-card-readmore { margin-top: 14px; font-size: 14px; color: #0066cc; font-weight: 500; text-decoration: none; }
        .ns-ad-column { display: flex; align-items: stretch; }
        .ns-ad-column > * { width: 100%; height: 100%; }
        .ns-news-row { display: grid; gap: 15px; margin-bottom: 15px; grid-template-columns: repeat(4, 1fr); }
        .ns-ad-slot { display: flex; align-items: stretch; }
        .ns-ad-slot > * { width: 100%; height: 100%; }

        @media (max-width: 1024px) and (min-width: 601px) {
          .ns-desktop-layout { display: none; }
          .ns-medium-layout  { display: block; }
          .ns-medium-big-card { margin-bottom: 15px; height: auto; }
          .ns-medium-big-card .ns-big-card-content { flex-direction: column; min-height: auto; }
          .ns-medium-big-card .ns-big-card-image { flex: none; height: 220px; }
          .ns-medium-big-card .ns-big-card-title { font-size: 18px; }
          .ns-medium-big-card .ns-big-card-desc { -webkit-line-clamp: 3; }
          .ns-medium-grid { display: grid; grid-template-columns: repeat(2, 1fr); grid-auto-rows: auto; align-items: stretch; gap: 15px; }
          .ns-medium-grid > * { height: 100%; min-height: 280px; }
          .ns-medium-ad-slot { display: flex; align-items: stretch; height: 100%; min-height: 280px; }
          .ns-medium-ad-slot > * { width: 100%; height: 100%; min-height: 280px; }
        }

        @media (max-width: 600px) {
          .ns-desktop-layout { display: none; }
          .ns-medium-layout  { display: block; }
          .ns-section-title { font-size: 18px; }
          .ns-medium-big-card { margin-bottom: 15px; height: auto; }
          .ns-medium-big-card .ns-big-card-content { flex-direction: column; min-height: auto; }
          .ns-medium-big-card .ns-big-card-image { flex: none; height: 190px; }
          .ns-medium-big-card .ns-big-card-title { font-size: 16px; }
          .ns-medium-big-card .ns-big-card-desc { font-size: 13px; -webkit-line-clamp: 3; }
          .ns-medium-grid { display: grid; grid-template-columns: repeat(2, 1fr); grid-auto-rows: auto; align-items: stretch; gap: 12px; }
          .ns-medium-grid > * { height: 100%; min-height: 240px; }
          .ns-medium-ad-slot { display: flex; align-items: stretch; height: 100%; min-height: 240px; }
          .ns-medium-ad-slot > * { width: 100%; height: 100%; min-height: 240px; }
        }

        @media (max-width: 400px) {
          .ns-medium-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

function BigCardContent({ bigCard }) {
  return (
    <a href={bigCard.link} target="_blank" rel="noopener noreferrer" className="ns-big-card-link">
      <div className="ns-big-card-content">
        <div className="ns-big-card-image">
          {bigCard.image ? (
            <img src={bigCard.image} alt={bigCard.title} />
          ) : (
            <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#f3f4f6,#e5e7eb)" }} />
          )}
        </div>
        <div className="ns-big-card-body">
          <span style={{ fontSize: 12, fontWeight: 700, color: "#0066cc", textTransform: "uppercase", letterSpacing: 0.5 }}>
            {bigCard.source}
          </span>
          <div className="ns-big-card-title">{bigCard.title}</div>
          <div className="ns-big-card-desc">{bigCard.description}</div>
          <span className="ns-big-card-readmore">Read More →</span>
        </div>
      </div>
    </a>
  );
}
