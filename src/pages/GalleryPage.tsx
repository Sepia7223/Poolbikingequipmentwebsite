import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import image1 from "../content/Marketing/IMG_3066retocado.jpg";
import image2 from "../content/Marketing/IMG_3053.JPG";
import image3 from "../content/Marketing/IMG_3055.JPG";
import image4 from "../content/Marketing/IMG_3056retocado.jpg";
import image5 from "../content/Marketing/formacio-melia-076-poolbiking.jpg";

const images = [
  { src: image1, alt: "Aquatic cycling session" },
  { src: image2, alt: "Poolbiking fitness training" },
  { src: image3, alt: "Poolbiking in a hotel and resort environment" },
  { src: image4, alt: "Aquatic rehabilitation training" },
  { src: image5, alt: "Professional Poolbiking training session" },
];

export function GalleryPage() {
  return (
    <>
      <section className="pb-page-hero">
        <div className="pb-container">
          <div className="pb-eyebrow pb-eyebrow-light">Gallery</div>
          <h1 className="pb-title">POOLBIKING in use.</h1>
          <p className="pb-copy">
            Photos of POOLBIKING equipment in fitness, hospitality, training and rehabilitation settings.
          </p>
        </div>
      </section>

      <section className="pb-section">
        <div className="pb-container">
          <div className="pb-gallery">
            {images.map((image) => (
              <figure key={image.alt} className="pb-gallery-item">
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-section-compact pb-section-soft">
        <div className="pb-container">
          <div className="pb-cta">
            <div className="pb-cta-inner">
              <div>
                <div className="pb-eyebrow pb-eyebrow-light">Browse the catalogue</div>
                <h2>Compare the equipment shown here.</h2>
                <p>Browse the bikes, platforms and accessories, or contact us if you need help choosing a model for your facility.</p>
              </div>
              <Link to="/equipment" className="pb-button pb-button-white pb-button-lg">Browse products <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
