import { useComparison } from "../components/Comparison";
import { PhotoHero } from "../components/PhotoHero";
import heroPhoto from "../content/optimized/pool-cycling.webp";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { ProductCard, type CatalogueState } from "../components/ProductCard";
import { categories, equipmentData } from "../data/equipment";

import { EquipmentComparison } from "./ComparePage";

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
  const { ids } = useComparison();
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
      const searchMatch =
        !normalized ||
        [item.name, item.shortDescription, item.description].some((value) =>
          value.toLowerCase().includes(normalized),
        );
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
      <PhotoHero
        image={heroPhoto}
        eyebrow="Product catalogue"
        title="Make your next move."
        description="Explore aquatic bikes, platforms and accessories. Add up to three models to compare the details side by side."
      />

      <section className="pb-section" id="product-catalogue">
        <div className="pb-container">
          <p className="pb-catalogue-guidance">
            Choosing for older adults or frequent daily use?{" "}
            <Link to="/#why-equipment">Explore construction and care</Link> or{" "}
            <Link to="/#senior-living">read about supported movement</Link>.
          </p>
          <div className="pb-filterbar">
            <div className="pb-filters" aria-label="Product categories">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`pb-chip ${category === item ? "is-active" : ""}`}
                  aria-pressed={category === item}
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
          <div className="pb-catalogue-summary">
            <Link
              to="/equipment#compare"
              className="pb-text-link"
              aria-label={`Compare equipment, ${ids.length} selected`}
            >
              Compare selected ({ids.length}/3)
            </Link>
            <p role="status">
              {products.length} {products.length === 1 ? "model" : "models"}
              {category !== "All" ? ` · ${category}` : " to explore"}
              {query.trim() ? ` matching “${query.trim()}”` : ""}
            </p>
            {(category !== "All" || query) && (
              <button
                type="button"
                className="pb-text-button"
                onClick={() => {
                  setCategory("All");
                  setQuery("");
                }}
              >
                Clear filters
              </button>
            )}
          </div>

          {products.length > 0 ? (
            <div className="pb-grid-3">
              {products.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  catalogueState={catalogueState}
                />
              ))}
            </div>
          ) : (
            <div className="pb-empty">
              <h2>No matches just yet.</h2>
              <p>
                Try a model name such as “One”, or reset the filters to explore
                the full range.
              </p>
              <button
                type="button"
                className="pb-button pb-button-aqua"
                onClick={() => {
                  setCategory("All");
                  setQuery("");
                }}
              >
                Show all equipment
              </button>
            </div>
          )}
        </div>
      </section>

      <EquipmentComparison />

      <section className="pb-section-compact pb-section-soft">
        <div className="pb-container">
          <div className="pb-cta">
            <div className="pb-cta-inner">
              <div>
                <div className="pb-eyebrow pb-eyebrow-light">
                  Need help choosing a model?
                </div>
                <h2>Tell us how and where the equipment will be used.</h2>
                <p>
                  Facility type, pool environment, rider profile and training
                  goal help narrow the options.
                </p>
              </div>
              <Link
                to="/contact"
                className="pb-button pb-button-white pb-button-lg"
              >
                Contact us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
