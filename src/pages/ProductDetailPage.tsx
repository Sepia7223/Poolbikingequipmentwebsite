import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, PlayCircle } from "lucide-react";
import { equipmentData } from "../data/equipment";
import { productVideos } from "../data/productVideos";

export function ProductDetailPage() {
  const { id } = useParams();
  const product = equipmentData.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="pb-detail">
        <div className="pb-container">
          <h1 className="pb-title pb-title-md">Product not found.</h1>
          <p className="pb-copy">The requested product is not in the current catalogue.</p>
          <Link to="/equipment" className="pb-button" style={{ marginTop: 28 }}>Back to products</Link>
        </div>
      </section>
    );
  }

  const related = equipmentData
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);
  const video = productVideos[product.id];

  const specificationLabels: Record<string, string> = {
    weight: "Weight",
    dimensions: "Dimensions",
    material: "Material",
    maxUserWeight: "User / application",
    resistanceLevels: "Resistance",
  };

  return (
    <section className="pb-detail">
      <div className="pb-container">
        <Link to="/equipment" className="pb-back"><ArrowLeft size={17} /> Back to products</Link>

        <div className="pb-detail-grid">
          <div className="pb-detail-media">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="pb-detail-info">
            <div className="pb-eyebrow">{product.category}</div>
            <h1>{product.name}</h1>
            <p className="pb-detail-summary">{product.description}</p>

            <div className="pb-detail-actions">
              <Link to="/contact" className="pb-button pb-button-aqua pb-button-lg">Request pricing <ArrowRight size={18} /></Link>
              <Link to="/contact" className="pb-button pb-button-outline pb-button-lg">Ask about this model</Link>
              {video && (
                <a
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="pb-button pb-button-video pb-button-lg"
                >
                  <PlayCircle size={19} /> {video.label} <ExternalLink size={15} />
                </a>
              )}
            </div>

            {video && (
              <div className="pb-video-source">
                <PlayCircle size={17} />
                <span>{video.source}{video.direct ? "" : ". Opens the official channel search for this model."}</span>
              </div>
            )}

            {product.warrantyYears && (
              <div className="pb-status">International warranty: {product.warrantyYears} years for this model.</div>
            )}

            <div className="pb-detail-block">
              <h2>Key features</h2>
              <div className="pb-feature-list">
                {product.features.map((feature) => (
                  <div key={feature} className="pb-feature-row">
                    <CheckCircle2 size={18} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pb-detail-block">
              <h2>Specifications</h2>
              <div className="pb-spec-list">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div className="pb-spec-row" key={key}>
                    <span>{specificationLabels[key] ?? key}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="pb-related">
            <h2 className="pb-title pb-title-sm">Related equipment.</h2>
            <div className="pb-grid-3" style={{ marginTop: 34 }}>
              {related.map((item) => (
                <Link key={item.id} to={`/equipment/${item.id}`} className="pb-product-card">
                  <div className="pb-product-media">
                    <span className="pb-product-pill">{item.category}</span>
                    {productVideos[item.id] && <span className="pb-video-pill"><PlayCircle size={13} /> Video</span>}
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>
                  <div className="pb-product-body">
                    <h3>{item.name}</h3>
                    <p>{item.shortDescription}</p>
                    <div className="pb-product-meta"><span>{item.category}</span><span className="pb-product-arrow">Details →</span></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
