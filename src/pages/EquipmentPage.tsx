import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { categories, equipmentData } from "../data/equipment";

export function EquipmentPage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const products = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return equipmentData.filter((item) => {
      const categoryMatch = category === "All" || item.category === category;
      const searchMatch = !normalized || [item.name, item.shortDescription, item.description]
        .some((value) => value.toLowerCase().includes(normalized));
      return categoryMatch && searchMatch;
    });
  }, [category, query]);

  return (
    <>
      <section className="pb-page-hero">
        <div className="pb-container">
          <div className="pb-eyebrow pb-eyebrow-light">Product catalogue</div>
          <h1 className="pb-title">POOLBIKING bikes, platforms and aquatic accessories.</h1>
          <p className="pb-copy">
            Browse equipment for hotel programs, commercial fitness, rehabilitation and other pool-based training.
          </p>
        </div>
      </section>

      <section className="pb-section">
        <div className="pb-container">
          <div className="pb-filterbar">
            <div className="pb-filters" aria-label="Product categories">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`pb-chip ${category === item ? "is-active" : ""}`}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <label style={{ position: "relative" }}>
              <Search size={17} style={{ position: "absolute", left: 15, top: 14, color: "#7b8e96" }} />
              <input
                className="pb-search"
                style={{ paddingLeft: 42 }}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search equipment"
                aria-label="Search equipment"
              />
            </label>
          </div>

          {products.length > 0 ? (
            <div className="pb-grid-3">
              {products.map((item) => (
                <Link key={item.id} to={`/equipment/${item.id}`} className="pb-product-card">
                  <div className="pb-product-media">
                    <span className="pb-product-pill">{item.category}</span>
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>
                  <div className="pb-product-body">
                    <h3>{item.name}</h3>
                    <p>{item.shortDescription}</p>
                    <div className="pb-product-meta">
                      <span>{item.warrantyYears ? `${item.warrantyYears}-year warranty` : item.category}</span>
                      <span className="pb-product-arrow">View details <ArrowRight size={13} style={{ display: "inline", verticalAlign: "middle" }} /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="pb-empty">No equipment matches that search.</div>
          )}
        </div>
      </section>

      <section className="pb-section-compact pb-section-soft">
        <div className="pb-container">
          <div className="pb-cta">
            <div className="pb-cta-inner">
              <div>
                <div className="pb-eyebrow pb-eyebrow-light">Need help choosing a model?</div>
                <h2>Tell us how and where the equipment will be used.</h2>
                <p>Facility type, pool environment, rider profile and training goal help narrow the options.</p>
              </div>
              <Link to="/contact" className="pb-button pb-button-white pb-button-lg">Contact us <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
