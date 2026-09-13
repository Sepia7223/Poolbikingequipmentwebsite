import { ArrowRight, Building2, Dumbbell, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import image from "../content/Marketing/IMG_3055.JPG";

export function AboutPage() {
  return (
    <>
      <section className="pb-page-hero">
        <div className="pb-container">
          <div className="pb-eyebrow pb-eyebrow-light">About Poolbiking Caribbean</div>
          <h1 className="pb-title">A regional partner for professional aquatic fitness.</h1>
          <p className="pb-copy">
            Poolbiking Caribbean is focused on bringing POOLBIKING aquatic equipment to facilities across the Caribbean,
            with a clearer regional path from product selection and quotation to delivery planning and support.
          </p>
        </div>
      </section>

      <section className="pb-section">
        <div className="pb-container pb-about-grid">
          <div>
            <div className="pb-eyebrow">The equipment behind the brand</div>
            <h2 className="pb-title pb-title-md">Barcelona engineering, adapted to Caribbean projects.</h2>
            <p className="pb-copy">
              POOLBIKING designs and manufactures professional aquatic bikes and fitness equipment in Barcelona.
              Its range is used in hotels, fitness facilities and rehabilitation environments around the world.
            </p>
            <p className="pb-copy" style={{ marginTop: 16 }}>
              Our role is to make that range easier to understand and specify for Caribbean facilities—whether the priority is
              a resort guest experience, a commercial group class, a rehabilitation program or a specialist pool project.
            </p>
            <Link to="/equipment" className="pb-button" style={{ marginTop: 30 }}>Explore equipment <ArrowRight size={17} /></Link>
          </div>
          <div className="pb-about-photo">
            <img src={image} alt="Professional Poolbiking equipment in a hospitality environment" />
          </div>
        </div>
      </section>

      <section className="pb-section pb-section-soft">
        <div className="pb-container">
          <div className="pb-eyebrow">Where it fits</div>
          <h2 className="pb-title pb-title-md">Designed around real aquatic facilities.</h2>
          <div className="pb-values">
            <article className="pb-value">
              <Building2 size={26} />
              <h3>Hotels & Resorts</h3>
              <p>Premium aquatic experiences, spa-gym concepts and structured guest activities with professional-grade equipment.</p>
            </article>
            <article className="pb-value">
              <Dumbbell size={26} />
              <h3>Fitness</h3>
              <p>Low-impact group and individual training that uses water resistance to create a distinctive fitness offering.</p>
            </article>
            <article className="pb-value">
              <HeartPulse size={26} />
              <h3>Rehabilitation</h3>
              <p>Controlled aquatic movement and conditioning supported by the buoyancy and resistance characteristics of water.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="pb-section">
        <div className="pb-container">
          <div className="pb-cta">
            <div className="pb-cta-inner">
              <div>
                <div className="pb-eyebrow pb-eyebrow-light">Planning a facility?</div>
                <h2>We can help narrow the range before you request pricing.</h2>
                <p>Tell us about the pool, the users and the business goal. We will help identify which product families deserve a closer look.</p>
              </div>
              <Link to="/contact" className="pb-button pb-button-white pb-button-lg">Start a conversation <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
