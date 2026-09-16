import { Link } from "react-router-dom";
import {
  ArrowRight,
  Accessibility,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import { equipmentData } from "../data/equipment";

const sources = {
  one: "https://poolbiking.com/en/products/poolbiking-one-plus.html",
  evolution: "https://poolbiking.com/en/products/poolbiking-evolution.html",
  medical: "https://poolbiking.com/en/products/pooltrekking-medical.html",
  care: "https://www.poolbiking.com/index_en.html",
  therapy:
    "https://www.southtees.nhs.uk/services/physiotherapy/community-outpatient-physiotherapy-middlesbrough-redcar-and-cleveland/what-treatments-are-available/what-is-hydrotherapy-aquatic-therapy/",
  cycling: "https://pubmed.ncbi.nlm.nih.gov/32169459/",
  walking: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9467329/",
};

export function EquipmentBenefits() {
  const medical = equipmentData.find(
    (item) => item.id === "pooltrekking-medical",
  )!;
  return (
    <>
      <section
        className="pb-section pb-section-soft"
        id="why-equipment"
        aria-labelledby="benefits-title"
      >
        <div className="pb-container">
          <div className="pb-section-head">
            <div>
              <div className="pb-eyebrow">Why choose POOLBIKING equipment?</div>
              <h2 className="pb-title pb-title-md" id="benefits-title">
                Built for repeated use.
                <br />
                Designed around movement.
              </h2>
            </div>
            <p className="pb-copy">
              Choose the construction, resistance and support features that
              match the people you serve.
            </p>
          </div>
          <div className="pb-benefit-grid">
            <article>
              <ShieldCheck />
              <h3>Construction for professional use</h3>
              <p>
                The One Plus and Evolution use AISI 316L stainless steel and
                robotic welds. Evolution adds a reinforced structure for
                demanding use.
              </p>
              <a href={sources.evolution}>
                See manufacturer construction details ↗
              </a>
            </article>
            <article>
              <Settings2 />
              <h3>Adjust the fit. Vary the effort.</h3>
              <p>
                One Plus offers horizontal saddle adjustment and vertical seat
                and handlebar adjustment. Its hydrodynamic resistance increases
                with pedalling speed.
              </p>
              <a href={sources.one}>See One Plus features ↗</a>
            </article>
            <article>
              <Accessibility />
              <h3>Support where it matters</h3>
              <p>
                Pooltrekking Medical combines dual handholds, interchangeable
                armrests and 65 mm supports. These give care teams practical
                features to assess for supported walking.
              </p>
              <a href={sources.medical}>See Medical treadmill features ↗</a>
            </article>
          </div>
          <div className="pb-equipment-care">
            <h3>Reliability includes looking after the equipment.</h3>
            <p>
              POOLBIKING recommends inspecting moving parts and following each
              model’s manual. Ask about care requirements, replacement parts and
              written warranty coverage before ordering. We confirm delivery and
              support arrangements for your island with your quotation.
            </p>
            <a href={sources.care}>
              Manufacturer care and warranty information ↗
            </a>
          </div>
        </div>
      </section>
      <section
        className="pb-section pb-senior-section"
        id="senior-living"
        aria-labelledby="senior-title"
      >
        <div className="pb-container pb-senior-grid">
          <div className="pb-senior-product">
            <img
              src={medical.image}
              alt="Pooltrekking Medical aquatic treadmill with dual support rails"
              loading="lazy"
            />
            <Link to="/equipment/pooltrekking-medical" className="pb-text-link">
              Explore supported walking equipment <ArrowRight size={16} />
            </Link>
          </div>
          <div>
            <div className="pb-eyebrow">Older adults & limited mobility</div>
            <h2 className="pb-title pb-title-md" id="senior-title">
              Keep movement within reach.
            </h2>
            <p className="pb-copy">
              When exercise on land is uncomfortable, the buoyancy of water can
              reduce joint loading and make movement easier. Aquatic bikes and
              treadmills offer ways to practise cycling or walking as part of an
              individually planned program.
            </p>
            <a className="pb-evidence-link" href={sources.therapy}>
              How aquatic physiotherapy supports movement — NHS ↗
            </a>
            <div className="pb-senior-points">
              <h3>Choose around the resident</h3>
              <p>
                Review walking support, seat fit, foot placement, getting on and
                off the equipment, and access to the water. For residents with
                limited mobility, involve their physiotherapist or care team in
                choosing equipment and planning supervision.
              </p>
              <h3>Build a routine people can take part in</h3>
              <p>
                Use the equipment for supervised individual sessions or
                appropriately supported small groups. The aim is meaningful
                participation at a suitable pace, with progress reviewed by the
                team.
              </p>
            </div>
            <Link
              to="/contact?interest=Senior+living+%2F+care+residence"
              className="pb-button pb-button-aqua"
            >
              Discuss equipment for your residents <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="pb-container">
          <details className="pb-research-note">
            <summary>What does the research show?</summary>
            <p>
              A randomized trial enrolled 111 adults aged 50–70 with
              mild-to-moderate knee osteoarthritis. A 12-week aquatic cycling
              program improved self-reported pain and physical function compared
              with usual care.{" "}
              <a href={sources.cycling}>Read the cycling trial ↗</a>
            </p>
            <p>
              A separate, small trial of 32 men aged 60 or older with knee
              osteoarthritis reported improvements in pain, gait and balance
              after eight weeks of aquatic exercise.{" "}
              <a href={sources.walking}>Read the older-adult trial ↗</a>
            </p>
            <p>
              These studies support specific exercise programs, not a guarantee
              for POOLBIKING products or every care-home resident. They do not
              establish that this equipment prevents falls or restores
              independent walking. Outcomes depend on the person, program and
              supervision.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
