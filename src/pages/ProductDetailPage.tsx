import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, PlayCircle } from "lucide-react";
import { ProductCard, type CatalogueState } from "../components/ProductCard";
import { equipmentData } from "../data/equipment";
import { getProductBadges, productPresentation } from "../data/productPresentation";
import { productVideos } from "../data/productVideos";

interface ProductLocationState {
  catalogueState?: CatalogueState;
}

export function ProductDetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const product = equipmentData.find((item) => item.id === id);
  const catalogueState = (location.state as ProductLocationState | null)?.catalogueState;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

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
  const presentation = productPresentation[product.id];
  const badges = getProductBadges(product);

  const backState = {
    category: catalogueState?.category ?? "All",
    query: catalogueState?.query ?? "",
    restoreProductId: product.id,
  };

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
        <Link to="/equipment" state={backState} className="pb-back">
          <ArrowLeft size={17} /> Back to products
        </Link>

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
                <span>{video.source}</span>
              </div>
            )}

            {product.warrantyYears && (
              <div className="pb-status">International warranty: {product.warrantyYears} years for this model.</div>
            )}

            {badges.length > 0 && (
              <div className="pb-manufacturer-panel">
                <div className="pb-detail-kicker">Manufacturer information</div>
                <h2>POOLBIKING systems used on this model</h2>
                <p className="pb-detail-block-copy">
                  Warranty marks and technology information are based on POOLBIKING manufacturer material for the current product range.
                </p>
                <div className="pb-manufacturer-badges">
                  {badges.map((badge) => (
                    <article className="pb-manufacturer-badge" key={badge.title}>
                      <div className="pb-manufacturer-badge-media">
                        <img src={badge.image} alt="" loading="lazy" />
                      </div>
                      <div>
                        <h3>{badge.title}</h3>
                        <p>{badge.copy}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
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

            {presentation?.accessories && presentation.accessories.length > 0 && (
              <div className="pb-detail-block pb-accessories-block">
                <div className="pb-detail-kicker">Available complements</div>
                <h2>Accessories listed by POOLBIKING</h2>
                <p className="pb-detail-block-copy">
                  These are manufacturer-listed options for this model. Ask us about current Caribbean availability when requesting a quote.
                </p>
                <div className="pb-accessory-grid">
                  {presentation.accessories.map((accessory) => (
                    <article className="pb-accessory-card" key={accessory.name}>
                      <div className="pb-accessory-media">
                        <img
                          src={accessory.image}
                          alt={accessory.name}
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                      <div className="pb-accessory-copy">
                        <h3>{accessory.name}</h3>
                        <p>{accessory.note}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

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
                <ProductCard key={item.id} item={item} catalogueState={catalogueState} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
