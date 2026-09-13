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
    text: "Turn the pool and spa into an experience guests remember, with professional equipment built for demanding hospitality environments.",
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
            <h1 className="pb-title">Professional aquatic fitness, made for serious pools.</h1>
            <p className="pb-hero-lede">
              Premium POOLBIKING bikes and aquatic training equipment for hotels,
              resorts, fitness facilities and rehabilitation environments throughout the Caribbean.
            </p>
            <div className="pb-hero-actions">
              <Link to="/equipment" className="pb-button pb-button-aqua pb-button-lg">
                Explore products <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="pb-button pb-button-outline-light pb-button-lg">
                Request a quote
              </Link>
            </div>
            <div className="pb-hero-note"><span /> Designed and manufactured in Barcelona. Regional sales and project support in the Caribbean.</div>
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
          <div className="pb-eyebrow">Built around your facility</div>
          <h2 className="pb-title pb-title-md">One aquatic platform. Three high-value applications.</h2>
          <p className="pb-copy">
            The right equipment is only part of the project. We help match the product to the pool,
            the users and the experience you want to create.
          </p>

          <div className="pb-grid-3" style={{ marginTop: 46 }}>
            {solutions.map((solution) => (
              <article key={solution.title} className="pb-solution-card">
                <img src={solution.image} alt={solution.title} />
                <div className="pb-solution-content">
                  <h3>{solution.title}</h3>
                  <p>{solution.text}</p>
                  <Link className="pb-solution-link" to="/contact">Plan a project →</Link>
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
              <h2 className="pb-title pb-title-md">Professional bikes for different training goals.</h2>
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
            <div className="pb-eyebrow">Professional by design</div>
            <h2 className="pb-title pb-title-md">Equipment that belongs in a premium facility.</h2>
            <p className="pb-copy">
              POOLBIKING develops its equipment for professional, repeated use. The result is a range focused on biomechanics,
              durability, corrosion resistance and straightforward operation in real aquatic environments.
            </p>

            <div className="pb-feature-points">
              <div className="pb-feature-point">
                <div className="pb-feature-icon"><ShieldCheck size={19} /></div>
                <div><strong>Built for aquatic environments</strong><span>Selected stainless-steel construction and corrosion-conscious engineering for pools and professional facilities.</span></div>
              </div>
              <div className="pb-feature-point">
                <div className="pb-feature-icon"><Waves size={19} /></div>
                <div><strong>Water-powered resistance</strong><span>Progressive resistance supports a broad range of fitness levels without turning the pool into a complicated gym floor.</span></div>
              </div>
              <div className="pb-feature-point">
                <div className="pb-feature-icon"><Check size={19} /></div>
                <div><strong>Purpose-built product range</strong><span>Models are tailored for general fitness, heavy-duty training, hotels, beaches, public pools and rehabilitation applications.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-section pb-section-sand">
        <div className="pb-container">
          <div className="pb-eyebrow">From first question to poolside</div>
          <h2 className="pb-title pb-title-md">A simpler way to specify aquatic equipment.</h2>
          <div className="pb-process">
            <div>
              <span className="pb-step-number">01 — DISCOVER</span>
              <h3>Tell us about your pool.</h3>
              <p>Share the facility type, water environment, intended users and the experience you want to offer.</p>
            </div>
            <div>
              <span className="pb-step-number">02 — SPECIFY</span>
              <h3>Choose the right equipment.</h3>
              <p>We help narrow the range by use case, rider fit, resistance, durability and operational requirements.</p>
            </div>
            <div>
              <span className="pb-step-number">03 — DELIVER</span>
              <h3>Move from quote to installation.</h3>
              <p>Once the specification is confirmed, the project can move into pricing, delivery planning and ongoing product support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-section">
        <div className="pb-container">
          <div className="pb-cta">
            <div className="pb-cta-inner">
              <div>
                <div className="pb-eyebrow pb-eyebrow-light">Start your project</div>
                <h2>Bring professional aquatic fitness to your facility.</h2>
                <p>Tell us whether you are planning for a hotel, resort, gym, rehabilitation facility or private project and we will help you identify the right POOLBIKING equipment.</p>
              </div>
              <Link to="/contact" className="pb-button pb-button-white pb-button-lg">Request a quote <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
