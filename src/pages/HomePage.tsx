import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Waves } from "lucide-react";
import { equipmentData } from "../data/equipment";
import heroImage from "../content/Marketing/IMG_3066retocado.jpg";
import fitnessImage from "../content/Marketing/IMG_3053.JPG";
import hotelsImage from "../content/Marketing/IMG_3055.JPG";
import rehabImage from "../content/Marketing/IMG_3056retocado.jpg";
import trainingImage from "../content/Marketing/formacio-melia-076-poolbiking.jpg";

const solutions = [
  {
    title: "Hotels & Resorts",
    text: "Add structured aquatic fitness to hotel and resort programs with equipment designed for regular professional use.",
    image: hotelsImage,
    interest: "Hotel / resort",
  },
  {
    title: "Fitness",
    text: "Add low-impact, high-resistance training to aquatic programs with equipment engineered for recurring professional use.",
    image: fitnessImage,
    interest: "Fitness facility",
  },
  {
    title: "Rehabilitation",
    text: "Use the support and resistance of water for controlled movement, conditioning and low-impact rehabilitation programs.",
    image: rehabImage,
    interest: "Rehabilitation",
  },
];

export function HomePage() {
  const featured = equipmentData
    .filter((item) => ["poolbiking-one-2-0", "poolbiking-one-plus", "poolbiking-evolution"].includes(item.id));

  return (
    <>
      <section className="pb-hero">
        <div className="pb-hero-media">
          <img src={heroImage} alt="Aquatic cycling session with Poolbiking equipment" />
        </div>
        <div className="pb-container">
          <div className="pb-hero-content">
            <div className="pb-eyebrow pb-eyebrow-light">Poolbiking Caribbean</div>
            <h1 className="pb-title">POOLBIKING equipment for hotels, fitness facilities and rehabilitation pools.</h1>
            <p className="pb-hero-lede">
              Aquatic bikes and training equipment for commercial and specialist pool programs across the Caribbean.
            </p>
            <div className="pb-hero-actions">
              <Link to="/equipment" className="pb-button pb-button-aqua pb-button-lg">
                Explore products <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="pb-button pb-button-outline-light pb-button-lg">
                Request a quote
              </Link>
            </div>
            <div className="pb-hero-note"><span /> Designed and manufactured in Barcelona. Sales and project support for Caribbean customers.</div>
          </div>
        </div>
      </section>

      <div className="pb-statbar">
        <div className="pb-container pb-stats">
          <div className="pb-stat"><strong>AISI 316L</strong><span>Stainless-steel construction on core bike models</span></div>
          <div className="pb-stat"><strong>2–7 years</strong><span>Warranty coverage depending on model</span></div>
          <div className="pb-stat"><strong>60+ countries</strong><span>POOLBIKING equipment used worldwide</span></div>
          <div className="pb-stat"><strong>Since 2005</strong><span>Designed and manufactured in Barcelona</span></div>
        </div>
      </div>

      <section className="pb-section pb-solutions-section" id="solutions">
        <div className="pb-container">
          <div className="pb-section-head">
            <div>
              <div className="pb-eyebrow">Choose by use</div>
              <h2 className="pb-title pb-title-md">Match the equipment to the pool and the program.</h2>
            </div>
            <p className="pb-copy">
              Start with the facility type. We can then compare models by fit, resistance, durability and intended use.
            </p>
          </div>

          <div className="pb-grid-3 pb-solution-grid">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                className="pb-solution-card"
                to={`/contact?interest=${encodeURIComponent(solution.interest)}`}
              >
                <img src={solution.image} alt={solution.title} />
                <div className="pb-solution-content">
                  <div className="pb-solution-kicker">Facility type</div>
                  <h3>{solution.title}</h3>
                  <p>{solution.text}</p>
                  <span className="pb-solution-link">Discuss this project <ArrowRight size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-section pb-section-soft">
        <div className="pb-container">
          <div className="pb-section-head pb-section-head-tight">
            <div>
              <div className="pb-eyebrow">Aquatic bikes</div>
              <h2 className="pb-title pb-title-md">Three models to start the comparison.</h2>
            </div>
            <Link to="/equipment" className="pb-text-link">View the full range <ArrowRight size={16} /></Link>
          </div>

          <div className="pb-grid-3 pb-featured-products">
            {featured.map((item) => (
              <Link key={item.id} to={`/equipment/${item.id}`} className="pb-product-card">
                <div className="pb-product-media">
                  <span className="pb-product-pill">{item.category}</span>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="pb-product-body">
                  <h3>{item.name}</h3>
                  <p>{item.shortDescription}</p>
                  <div className="pb-product-meta">
                    <span>{item.warrantyYears ? `${item.warrantyYears}-year warranty` : "Professional equipment"}</span>
                    <span className="pb-product-arrow">View model <ArrowRight size={13} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-section">
        <div className="pb-container pb-feature-split">
          <div className="pb-feature-photo">
            <img src={trainingImage} alt="POOLBIKING professional training session" />
          </div>
          <div>
            <div className="pb-eyebrow">Why POOLBIKING</div>
            <h2 className="pb-title pb-title-md">Built for repeated use in aquatic facilities.</h2>
            <p className="pb-copy">
              POOLBIKING designs its equipment for professional pool environments, with an emphasis on rider fit, corrosion resistance and straightforward daily operation.
            </p>

            <div className="pb-feature-points">
              <div className="pb-feature-point">
                <div className="pb-feature-icon"><ShieldCheck size={19} /></div>
                <div><strong>Pool-ready materials</strong><span>Selected bike models use AISI 316L stainless steel and components intended for aquatic environments.</span></div>
              </div>
              <div className="pb-feature-point">
                <div className="pb-feature-icon"><Waves size={19} /></div>
                <div><strong>Resistance from the water</strong><span>Pedalling in water creates progressive resistance for low-impact cardio and conditioning work.</span></div>
              </div>
              <div className="pb-feature-point">
                <div className="pb-feature-icon"><Check size={19} /></div>
                <div><strong>Models for different settings</strong><span>The range includes options for general fitness, intensive training, hotels, public pools, beaches and rehabilitation.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-section pb-section-sand">
        <div className="pb-container">
          <div className="pb-section-head pb-section-head-tight">
            <div>
              <div className="pb-eyebrow">Project support</div>
              <h2 className="pb-title pb-title-md">From product selection to delivery planning.</h2>
            </div>
            <p className="pb-copy">You can contact us before choosing a model. We will narrow the range around the pool, users and intended program.</p>
          </div>

          <div className="pb-process pb-process-cards">
            <div>
              <span className="pb-step-number">01</span>
              <h3>Tell us about the facility.</h3>
              <p>Share the pool environment, intended users, program and approximate number of units.</p>
            </div>
            <div>
              <span className="pb-step-number">02</span>
              <h3>Compare suitable models.</h3>
              <p>We narrow the range by fit, resistance, construction and operational requirements.</p>
            </div>
            <div>
              <span className="pb-step-number">03</span>
              <h3>Plan the order.</h3>
              <p>Once the model and quantity are confirmed, we can move into quotation and delivery planning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-section">
        <div className="pb-container">
          <div className="pb-cta pb-cta-clean">
            <div className="pb-cta-inner">
              <div>
                <div className="pb-eyebrow pb-eyebrow-light">Request a quote</div>
                <h2>Tell us what kind of pool project you are planning.</h2>
                <p>We can recommend a starting point for hotels, fitness facilities, rehabilitation programs and other professional aquatic settings.</p>
              </div>
              <Link to="/contact" className="pb-button pb-button-white pb-button-lg">Contact Poolbiking Caribbean <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
