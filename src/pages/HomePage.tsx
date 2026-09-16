import { EquipmentBenefits } from "../components/EquipmentBenefits";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Waves } from "lucide-react";
import { equipmentData } from "../data/equipment";
import { ProductCard } from "../components/ProductCard";
import { ProjectFAQ } from "../components/ProjectFAQ";
import { VideoDialog } from "../components/VideoDialog";
import { HeroVideo } from "../components/HeroVideo";
import equipmentPhoto from "../content/optimized/pool-cycling.webp";
import trainingImage from "../content/optimized/instructor-training.webp";

export function HomePage() {
  const featured = [
    "poolbiking-one-2-0",
    "poolbiking-one-plus",
    "poolbiking-evolution",
  ].map((id) => equipmentData.find((item) => item.id === id)!);

  return (
    <div className="pb-home">
      <section className="pb-hero">
        <HeroVideo />
        <div className="pb-container pb-hero-layout">
          <div className="pb-hero-content">
            <h1 className="pb-title">Move Together</h1>
            <p className="pb-hero-lede">
              Professional aquatic bikes and walking equipment for active
              guests, older adults and supervised exercise.
            </p>
            <div className="pb-hero-actions">
              <Link
                to="/equipment"
                className="pb-button pb-button-aqua pb-button-lg"
              >
                Explore equipment <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-proof-strip">
        <div className="pb-container">
          <p>
            Professional equipment
            <br />
            <strong>for movement in water.</strong>
          </p>
          <div>
            <Waves size={23} />
            <span>
              Water-powered
              <br />
              <strong>resistance</strong>
            </span>
          </div>
          <div>
            <ShieldCheck size={23} />
            <span>
              Equipment for
              <br />
              <strong>professional use</strong>
            </span>
          </div>
          <div>
            <Check size={23} />
            <span>
              Guidance for
              <br />
              <strong>equipment selection</strong>
            </span>
          </div>
        </div>
      </div>

      <section className="pb-section pb-intro-section">
        <div className="pb-container pb-intro-grid">
          <div>
            <div className="pb-eyebrow">Aquatic exercise equipment</div>
            <h2 className="pb-title pb-title-md">
              Real equipment.
              <br />A different way to exercise.
            </h2>
          </div>
          <div>
            <div className="pb-intro-video">
              <VideoDialog />
            </div>
            <p className="pb-copy">
              POOLBIKING bikes, aquatic treadmills and training accessories
              bring structured exercise into the water. Compare how each model
              supports pedalling, walking or resistance work, then choose the
              features that suit your users.
            </p>
            <Link to="/find-your-fit" className="pb-text-link">
              Explore your possibilities <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-section pb-audiences">
        <div className="pb-container pb-audience-grid">
          <article>
            <span className="pb-eyebrow">Hotels & resorts</span>
            <h2>Give guests more ways to stay active.</h2>
            <p>
              Offer seated cycling and instructor-led aquatic exercise with
              equipment designed for professional use. Compare adjustment and
              resistance features for your guest fitness program.
            </p>
            <Link
              className="pb-text-link"
              to="/contact?interest=Hotel+%2F+resort"
            >
              Discuss a hotel demonstration <ArrowRight size={16} />
            </Link>
          </article>
          <article>
            <span className="pb-eyebrow">Senior living & care residences</span>
            <h2>Support participation as mobility changes.</h2>
            <p>
              Look beyond a model name: assess handholds, seating, mounting and
              water access with your care team. Choose equipment around each
              resident’s abilities and the support available.
            </p>
            <Link
              className="pb-text-link"
              to="/contact?interest=Senior+living+%2F+care+residence"
            >
              Discuss your residence’s needs <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>

      <EquipmentBenefits />

      <section className="pb-section pb-home-products">
        <div className="pb-container">
          <div className="pb-section-head pb-section-head-tight">
            <div>
              <div className="pb-eyebrow">Meet the equipment</div>
              <h2 className="pb-title pb-title-md">Find your kind of ride.</h2>
            </div>
            <Link to="/equipment" className="pb-text-link">
              Explore the full collection <ArrowRight size={16} />
            </Link>
          </div>
          <div className="pb-grid-3 pb-featured-products">
            {featured.map((item, index) => (
              <div className="pb-featured-item" key={item.id}>
                <div className="pb-model-context">
                  <span>0{index + 1}</span>
                  {
                    [
                      "A straightforward start",
                      "More adjustment. More flexibility.",
                      "A reinforced frame for demanding use",
                    ][index]
                  }
                </div>
                <ProductCard item={item} />
              </div>
            ))}
          </div>
          <p className="pb-collection-note">
            Compare construction, adjustment and support features to choose
            equipment for your users and daily workload.
          </p>
        </div>
      </section>

      <section className="pb-experience-section">
        <div className="pb-experience-photo">
          <img
            src={equipmentPhoto}
            alt="A row of stainless-steel Poolbiking bikes beside an outdoor pool"
            loading="lazy"
            width="1200"
            height="800"
          />
        </div>
        <div className="pb-experience-copy">
          <div className="pb-eyebrow pb-eyebrow-light">Made for the water</div>
          <h2 className="pb-title pb-title-md">
            Purpose in
            <br />
            every detail.
          </h2>
          <p>
            From the saddle adjustment to the pedals, the details shape the
            ride. Explore the materials, movement and fit of each model before
            you choose.
          </p>
          <div className="pb-experience-point">
            <span>01</span>
            <div>
              <h3>Fit that makes a difference</h3>
              <p>
                Compare saddle and handlebar adjustments for your riders,
                including their reach and ability to mount the bike.
              </p>
            </div>
          </div>
          <div className="pb-experience-point">
            <span>02</span>
            <div>
              <h3>Resistance you can feel</h3>
              <p>
                Different pedal and blade designs create different training
                experiences in the water.
              </p>
            </div>
          </div>
          <Link to="/equipment" className="pb-button pb-button-white">
            Get to know the range <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="pb-section">
        <div className="pb-container pb-project-story">
          <div className="pb-project-image">
            <img
              src={trainingImage}
              alt="Poolbiking riders taking part in an instructor-led training session"
              loading="lazy"
              width="1200"
              height="800"
            />
            <span>See the equipment in use.</span>
          </div>
          <div>
            <div className="pb-eyebrow">
              Choose your equipment with confidence
            </div>
            <h2 className="pb-title pb-title-md">
              From the first idea
              <br />
              to the right setup.
            </h2>
            <div className="pb-story-steps">
              <div>
                <span>01</span>
                <div>
                  <h3>Tell us who will use the equipment</h3>
                  <p>
                    Mobility, exercise goals, supervision and expected daily
                    use.
                  </p>
                </div>
              </div>
              <div>
                <span>02</span>
                <div>
                  <h3>Explore the possibilities</h3>
                  <p>
                    Compare equipment around your program and practical needs.
                  </p>
                </div>
              </div>
              <div>
                <span>03</span>
                <div>
                  <h3>Bring the details together</h3>
                  <p>Discuss quantities, pricing and delivery planning.</p>
                </div>
              </div>
            </div>
            <Link to="/contact" className="pb-text-link">
              Start a conversation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <ProjectFAQ />
    </div>
  );
}
