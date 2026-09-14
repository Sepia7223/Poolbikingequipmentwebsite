import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { ProductCard, type CatalogueState } from "../components/ProductCard";
import { categories, equipmentData } from "../data/equipment";

interface CatalogueRestoreState extends CatalogueState {
  restoreProductId?: string;
}

const categoryPriority: Record<string, number> = {
  Bikes: 0,
  Platforms: 1,
  Accessories: 2,
};

export function EquipmentPage() {
  const location = useLocation();
  const restoreState = (location.state as CatalogueRestoreState | null) ?? null;
  const [category, setCategory] = useState(
    restoreState?.category && categories.includes(restoreState.category)
      ? restoreState.category
      : "All",
  );
  const [query, setQuery] = useState(restoreState?.query ?? "");

  const products = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const filtered = equipmentData.filter((item) => {
      const categoryMatch = category === "All" || item.category === category;
      const searchMatch = !normalized || [item.name, item.shortDescription, item.description]
        .some((value) => value.toLowerCase().includes(normalized));
      return categoryMatch && searchMatch;
    });

    if (category !== "All") return filtered;

    return [...filtered].sort((a, b) => {
      const aPriority = categoryPriority[a.category] ?? 99;
      const bPriority = categoryPriority[b.category] ?? 99;
      return aPriority - bPriority;
    });
  }, [category, query]);

  useEffect(() => {
    if (!restoreState?.restoreProductId) return;

    const frame = window.requestAnimationFrame(() => {
      document
        .getElementById(`product-card-${restoreState.restoreProductId}`)
        ?.scrollIntoView({ block: "center", behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [restoreState?.restoreProductId, products.length]);

  const catalogueState: CatalogueState = { category, query };

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

      <section className="pb-section" id="product-catalogue">
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
            <label className="pb-search-wrap">
              <Search size={17} aria-hidden="true" />
              <input
                className="pb-search"
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
                <ProductCard key={item.id} item={item} catalogueState={catalogueState} />
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
