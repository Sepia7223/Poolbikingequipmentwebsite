import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Dumbbell,
  House,
  Accessibility,
} from "lucide-react";
import { equipmentData } from "../data/equipment";
import {
  buildInquiryUrl,
  getStartingPoints,
  useCases,
} from "../data/discovery";
import { CompareButton } from "./Comparison";

const icons = [Building2, Dumbbell, Accessibility, Accessibility, House];

export function EquipmentFinder() {
  const [use, setUse] = useState("resort");
  const [environment, setEnvironment] = useState("pool");
  const [family, setFamily] = useState("Recommended");
  const selection = getStartingPoints(use, environment, family);
  const products = selection.products.map(
    (id) => equipmentData.find((item) => item.id === id)!,
  );
  return (
    <section
      className="pb-section pb-finder-section"
      id="solutions"
      aria-labelledby="finder-title"
    >
      <div className="pb-container">
        <div className="pb-section-head">
          <div>
            <div className="pb-eyebrow">Find your fit</div>
            <h2 className="pb-title pb-title-md" id="finder-title">
              Your pool. Your people.
              <br />
              Your starting point.
            </h2>
          </div>
          <p className="pb-copy">
            A little guidance goes a long way. Tell us where you’ll use the
            equipment to explore a few options.
          </p>
        </div>
        <div className="pb-finder">
          <div className="pb-finder-questions">
            <fieldset>
              <legend>
                <span>01</span> What kind of facility?
              </legend>
              <div className="pb-use-options">
                {useCases.map((item, index) => {
                  const Icon = icons[index];
                  return (
                    <button
                      type="button"
                      key={item.id}
                      aria-pressed={use === item.id}
                      onClick={() => setUse(item.id)}
                      className={use === item.id ? "is-active" : ""}
                    >
                      <Icon size={19} />
                      <span>{item.label}</span>
                      <ArrowRight size={16} />
                    </button>
                  );
                })}
              </div>
            </fieldset>
            <div className="pb-finder-environment">
              <label htmlFor="finder-environment">
                <span>02</span> Where will it be used?
              </label>
              <select
                id="finder-environment"
                value={environment}
                onChange={(event) => setEnvironment(event.target.value)}
              >
                <option value="pool">In a swimming pool</option>
                <option value="sea">At the beach / in the sea</option>
              </select>
            </div>
            <div className="pb-finder-environment">
              <label htmlFor="finder-family">
                <span>03</span> What would you like to explore?
              </label>
              <select
                id="finder-family"
                value={family}
                onChange={(event) => setFamily(event.target.value)}
              >
                <option>Recommended</option>
                <option>Bikes</option>
                <option>Platforms</option>
                <option>Accessories</option>
              </select>
            </div>
            <p className="pb-small-copy">
              Pool depth, water treatment and rider needs still matter. We’ll
              help you check the details.
            </p>
          </div>
          <div
            className="pb-finder-results"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="pb-eyebrow">A good place to start</div>
            <h3>{selection.description}</h3>
            <p>{selection.reason}</p>
            <div className="pb-finder-products">
              {products.map((item) => (
                <article key={item.id}>
                  <Link
                    to={`/equipment/${item.id}`}
                    className="pb-finder-product-image"
                    aria-label={`Explore ${item.name}`}
                  >
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </Link>
                  <div>
                    <Link to={`/equipment/${item.id}`}>
                      <h4>{item.name}</h4>
                      <p>{item.shortDescription}</p>
                    </Link>
                    <CompareButton id={item.id} />
                  </div>
                  <Link
                    to={`/equipment/${item.id}`}
                    className="pb-finder-product-arrow"
                    aria-label={`View details for ${item.name}`}
                  >
                    <ArrowRight size={20} />
                  </Link>
                </article>
              ))}
            </div>
            <Link
              to={buildInquiryUrl(selection.products, selection.interest)}
              className="pb-text-link"
            >
              Discuss these options <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
