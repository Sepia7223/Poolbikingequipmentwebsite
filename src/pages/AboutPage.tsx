import { ArrowRight, Building2, Dumbbell, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import image from "../content/optimized/pool-cycling.webp";

export function AboutPage() {
  return (
    <>
      <section className="pb-page-hero">
        <div className="pb-container">
          <div className="pb-eyebrow pb-eyebrow-light">About Poolbiking Caribbean</div>
          <h1 className="pb-title">POOLBIKING equipment for Caribbean facilities.</h1>
          <p className="pb-copy">
            Poolbiking Caribbean supplies POOLBIKING aquatic equipment for hotels, fitness facilities,
            rehabilitation programs and other pool-based projects across the region.
          </p>
        </div>
      </section>

      <section className="pb-section">
        <div className="pb-container pb-about-grid">
          <div>
            <div className="pb-eyebrow">About the equipment</div>
            <h2 className="pb-title pb-title-md">Designed and manufactured in Barcelona.</h2>
            <p className="pb-copy">
              POOLBIKING designs and manufactures professional aquatic bikes and fitness equipment in Barcelona.
              Its range is used in hotels, fitness facilities and rehabilitation environments around the world.
            </p>
            <p className="pb-copy" style={{ marginTop: 16 }}>
              We help Caribbean customers compare models, choose equipment for their pool and plan quotations and delivery.
            </p>
            <Link to="/equipment" className="pb-button" style={{ marginTop: 30 }}>Explore equipment <ArrowRight size={17} /></Link>
          </div>
          <div className="pb-about-photo">
            <img src={image} alt="Professional Poolbiking equipment in a hospitality environment" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="pb-section pb-section-soft">
        <div className="pb-container">
          <div className="pb-eyebrow">Typical applications</div>
          <h2 className="pb-title pb-title-md">Equipment for different types of pool programs.</h2>
          <div className="pb-values">
            <article className="pb-value">
              <Building2 size={26} />
              <h3>Hotels & Resorts</h3>
              <p>Aquatic fitness sessions, spa-gym concepts and guest activities using equipment made for regular professional use.</p>
            </article>
            <article className="pb-value">
              <Dumbbell size={26} />
              <h3>Fitness</h3>
              <p>Group and individual training that uses water resistance for low-impact conditioning and cardio work.</p>
            </article>
            <article className="pb-value">
              <HeartPulse size={26} />
              <h3>Rehabilitation</h3>
              <p>Controlled aquatic movement and conditioning that uses the buoyancy and resistance of water.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="pb-section">
        <div className="pb-container">
          <div className="pb-cta">
            <div className="pb-cta-inner">
              <div>
                <div className="pb-eyebrow pb-eyebrow-light">Choosing equipment</div>
                <h2>Tell us about the pool before you request pricing.</h2>
                <p>Facility type, pool conditions, intended users and expected use are enough to start narrowing the range.</p>
              </div>
              <Link to="/contact" className="pb-button pb-button-white pb-button-lg">Contact us <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
