import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Waves, Wrench } from "lucide-react";
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
  },
  {
    title: "Fitness",
    text: "Add low-impact, high-resistance training to aquatic programs with equipment engineered for recurring professional use.",
    image: fitnessImage,
  },
  {
    title: "Rehabilitation",
    text: "Use the support and resistance of water for controlled movement, conditioning and low-impact rehabilitation programs.",
    image: rehabImage,
  },
];

export function HomePage() {
  const featured = equipmentData.filter((item) => item.category === "Bikes").slice(0, 4);

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
          <div className="pb-stat"><strong>AISI 316L</strong><span>Professional stainless-steel construction</span></div>
          <div className="pb-stat"><strong>2–7 years</strong><span>Warranty coverage depending on model</span></div>
          <div className="pb-stat"><strong>60+ countries</strong><span>POOLBIKING equipment used worldwide</span></div>
          <div className="pb-stat"><strong>3 core uses</strong><span>Fitness · Hotels · Rehabilitation</span></div>
        </div>
      </div>

      <section className="pb-section" id="solutions">
        <div className="pb-container">
          <div className="pb-eyebrow">Choose by use</div>
          <h2 className="pb-title pb-title-md">Match the equipment to the pool and the program.</h2>
          <p className="pb-copy">
            We help compare models based on the facility, the users and how the equipment will be used.
          </p>

          <div className="pb-grid-3" style={{ marginTop: 46 }}>
            {solutions.map((solution) => (
              <article key={solution.title} className="pb-solution-card">
                <img src={solution.image} alt={solution.title} />
                <div className="pb-solution-content">
                  <h3>{solution.title}</h3>
                  <p>{solution.text}</p>
                  <Link className="pb-solution-link" to="/contact">Discuss your facility →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-section pb-section-soft">
        <div className="pb-container">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 30, alignItems: "end", flexWrap: "wrap", marginBottom: 40 }}>
            <div>
              <div className="pb-eyebrow">Selected equipment</div>
              <h2 className="pb-title pb-title-md">Aquabikes for different training needs.</h2>
            </div>
            <Link to="/equipment" className="pb-button pb-button-outline">View all equipment <ArrowRight size={17} /></Link>
          </div>

          <div className="pb-grid-4">
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
                    <span className="pb-product-arrow">Details →</span>
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
            <div className="pb-eyebrow">For regular pool use</div>
            <h2 className="pb-title pb-title-md">Designed for repeated professional use.</h2>
            <p className="pb-copy">
              POOLBIKING focuses on biomechanics, corrosion resistance, durability and straightforward day-to-day operation in aquatic facilities.
            </p>

            <div className="pb-feature-points">
              <div className="pb-feature-point">
                <div className="pb-feature-icon"><ShieldCheck size={19} /></div>
                <div><strong>Built for aquatic environments</strong><span>Selected stainless-steel construction and corrosion-conscious engineering for pools and professional facilities.</span></div>
              </div>
              <div className="pb-feature-point">
                <div className="pb-feature-icon"><Waves size={19} /></div>
                <div><strong>Progressive water resistance</strong><span>Water resistance changes with effort, so the same equipment can support different fitness levels and session intensities.</span></div>
              </div>
              <div className="pb-feature-point">
                <div className="pb-feature-icon"><Check size={19} /></div>
                <div><strong>Models for different pool settings</strong><span>The range includes options for general fitness, heavy-duty training, hotels, beaches, public pools and rehabilitation.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-section pb-section-sand">
        <div className="pb-container">
          <div className="pb-eyebrow">How we help</div>
          <h2 className="pb-title pb-title-md">From pool details to a quote.</h2>
          <div className="pb-process">
            <div>
              <span className="pb-step-number">01 / POOL</span>
              <h3>Tell us about the facility.</h3>
              <p>Share the pool environment, intended users and the type of program you plan to run.</p>
            </div>
            <div>
              <span className="pb-step-number">02 / EQUIPMENT</span>
              <h3>Compare suitable models.</h3>
              <p>We narrow the range using rider fit, resistance, durability and the practical requirements of the facility.</p>
            </div>
            <div>
              <span className="pb-step-number">03 / QUOTE</span>
              <h3>Plan pricing and delivery.</h3>
              <p>Once the equipment is selected, we can move into pricing, delivery planning and product support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-section">
        <div className="pb-container">
          <div className="pb-cta">
            <div className="pb-cta-inner">
              <div>
                <div className="pb-eyebrow pb-eyebrow-light">Need help choosing?</div>
                <h2>Tell us about your pool and the program you want to run.</h2>
                <p>We can help identify suitable POOLBIKING models for a hotel, resort, gym, rehabilitation facility or private project.</p>
              </div>
              <Link to="/contact" className="pb-button pb-button-white pb-button-lg">Request a quote <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
