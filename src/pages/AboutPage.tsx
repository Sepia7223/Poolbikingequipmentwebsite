import { PhotoHero } from "../components/PhotoHero";
import heroPhoto from "../content/optimized/instructor-training.webp";
import { ArrowRight, Building2, Dumbbell, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import image from "../content/optimized/pool-cycling.webp";

export function AboutPage() {
  return (
    <>
      <PhotoHero
        image={heroPhoto}
        eyebrow="About Poolbiking Caribbean"
        title="POOLBIKING equipment for Caribbean facilities."
        description="POOLBIKING aquatic equipment for hotels, senior living, fitness facilities and aquatic exercise programs across the region."
      />

      <section className="pb-section">
        <div className="pb-container pb-about-grid">
          <div>
            <div className="pb-eyebrow">About the equipment</div>
            <h2 className="pb-title pb-title-md">
              Designed and manufactured in Barcelona.
            </h2>
            <p className="pb-copy">
              POOLBIKING designs and manufactures professional aquatic bikes and
              fitness equipment in Barcelona. Its range is used in hotels,
              fitness facilities and rehabilitation environments around the
              world.
            </p>
            <p className="pb-copy" style={{ marginTop: 16 }}>
              We help Caribbean customers compare models, choose equipment for
              their users and plan quotations and delivery.
            </p>
            <Link
              to="/equipment"
              className="pb-button"
              style={{ marginTop: 30 }}
            >
              Explore equipment <ArrowRight size={17} />
            </Link>
          </div>
          <div className="pb-about-photo">
            <img
              src={image}
              alt="Professional Poolbiking equipment in a hospitality environment"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="pb-section pb-section-soft">
        <div className="pb-container">
          <div className="pb-eyebrow">Typical applications</div>
          <h2 className="pb-title pb-title-md">
            Equipment for different movement goals.
          </h2>
          <div className="pb-values">
            <article className="pb-value">
              <Building2 size={26} />
              <h3>Hotels & Resorts</h3>
              <p>
                Aquatic fitness sessions, spa-gym concepts and guest activities
                using equipment made for regular professional use.
              </p>
            </article>
            <article className="pb-value">
              <Dumbbell size={26} />
              <h3>Fitness</h3>
              <p>
                Group and individual training that uses water resistance for
                low-impact conditioning and cardio work.
              </p>
            </article>
            <article className="pb-value">
              <HeartPulse size={26} />
              <h3>Senior living & rehabilitation</h3>
              <p>
                Bikes and supported walking equipment to assess with care teams
                for individually supervised exercise.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="pb-section">
        <div className="pb-container">
          <div className="pb-cta">
            <div className="pb-cta-inner">
              <div>
                <div className="pb-eyebrow pb-eyebrow-light">
                  Choosing equipment
                </div>
                <h2>Tell us who the equipment needs to support.</h2>
                <p>
                  User abilities, exercise goals and expected daily use help us
                  shortlist models. We also check water depth and compatibility.
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
