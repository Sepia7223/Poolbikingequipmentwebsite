import { Link } from "react-router-dom";
import { ArrowRight, Columns3, X } from "lucide-react";
import { useComparison } from "../components/Comparison";
import { equipmentData, type Equipment } from "../data/equipment";
import { buildInquiryUrl } from "../data/discovery";

const rows: { label: string; value: (item: Equipment) => string }[] = [
  { label: "At a glance", value: (item) => item.shortDescription },
  { label: "Material", value: (item) => item.specifications.material },
  {
    label: "Resistance",
    value: (item) => item.specifications.resistanceLevels,
  },
  {
    label: "Rider / application",
    value: (item) => item.specifications.maxUserWeight,
  },
  { label: "Weight", value: (item) => item.specifications.weight },
  {
    label: "Dimensions / packaging",
    value: (item) => item.specifications.dimensions,
  },
  {
    label: "Listed warranty",
    value: (item) =>
      item.warrantyYears
        ? `${item.warrantyYears} years`
        : (item.warrantyNote ?? "Ask us for coverage"),
  },
];

export function EquipmentComparison() {
  const { ids, toggle } = useComparison();
  const products = ids.map(
    (id) => equipmentData.find((item) => item.id === id)!,
  );
  return (
    <>
      <section
        className="pb-section pb-inline-comparison"
        id="compare"
        aria-labelledby="comparison-title"
      >
        <div className="pb-container">
          <div className="pb-eyebrow">Compare equipment</div>
          <h2 className="pb-title pb-title-md" id="comparison-title">
            The details, side by side.
          </h2>
          <p className="pb-copy">
            Choose up to three models from the catalogue above to build your
            shortlist.
          </p>
          {!products.length ? (
            <div className="pb-compare-empty">
              <Columns3 size={42} />
              <h2>Your comparison starts here.</h2>
              <p>
                Add equipment from the catalogue to see the differences in one
                place.
              </p>
              <Link
                to="/equipment#product-catalogue"
                className="pb-button pb-button-aqua"
              >
                Explore equipment <ArrowRight size={17} />
              </Link>
            </div>
          ) : (
            <>
              <div className="pb-comparison-heading">
                <p>
                  {products.length} of 3 models selected
                  {products.length === 1
                    ? " · Add another model to compare."
                    : ""}
                </p>
                <Link
                  to="/equipment#product-catalogue"
                  className="pb-text-link"
                >
                  Add equipment <ArrowRight size={16} />
                </Link>
              </div>
              <div
                className="pb-comparison-scroll"
                role="region"
                aria-label="Equipment specifications comparison; scroll horizontally on smaller screens"
                tabIndex={0}
              >
                <table className="pb-comparison-table">
                  <caption className="pb-visually-hidden">
                    Selected equipment specifications
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Your shortlist</th>
                      {products.map((item) => (
                        <th key={item.id} scope="col">
                          <button
                            type="button"
                            className="pb-remove-model"
                            onClick={() => toggle(item.id)}
                            aria-label={`Remove ${item.name}`}
                          >
                            <X size={16} />
                          </button>
                          <Link to={`/equipment/${item.id}`}>
                            <img src={item.image} alt={item.name} />
                            <span>{item.name}</span>
                          </Link>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.label}>
                        <th scope="row">{row.label}</th>
                        {products.map((item) => (
                          <td key={item.id}>{row.value(item)}</td>
                        ))}
                      </tr>
                    ))}
                    <tr>
                      <th scope="row">Next step</th>
                      {products.map((item) => (
                        <td key={item.id}>
                          <Link
                            className="pb-text-link"
                            to={`/equipment/${item.id}`}
                          >
                            View model <ArrowRight size={15} />
                          </Link>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="pb-comparison-footer">
                <p>
                  Specifications are from the product catalogue. Confirm pool
                  compatibility, current availability and warranty terms with
                  us.
                </p>
                <Link
                  to={buildInquiryUrl(ids)}
                  className="pb-button pb-button-aqua"
                >
                  Ask about my shortlist <ArrowRight size={17} />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
