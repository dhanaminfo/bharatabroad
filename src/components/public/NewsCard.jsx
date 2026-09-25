export default function NewsCard({ article }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="nc-card"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="nc-image">
        {article.image ? (
          <img src={article.image} alt={article.title} />
        ) : (
          <div className="nc-image-fallback" />
        )}
      </div>
      <div className="nc-body">
        <span className="nc-source">{article.source}</span>
        <div className="nc-title">{article.title}</div>
      </div>

      <style>{`
        .nc-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          height: 100%;
        }
        .nc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
        }
        .nc-image { height: 140px; background: #f3f4f6; }
        .nc-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .nc-image-fallback { width: 100%; height: 100%; background: linear-gradient(135deg, #f3f4f6, #e5e7eb); }
        .nc-body { padding: 12px 14px; flex: 1; display: flex; flex-direction: column; }
        .nc-source {
          font-size: 10.5px;
          font-weight: 700;
          color: #0066cc;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }
        .nc-title {
          font-size: 13.5px;
          font-weight: 600;
          color: #1a1a1a;
          margin-top: 5px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </a>
  );
}
