import { Link } from "react-router-dom";
import logo from "../content/Logo's/Poolbiking CW.png";

const CONTACT_EMAIL = "info@seraphic.me";
const CONTACT_PHONE_DISPLAY = "+5999 5142050";
const CONTACT_PHONE_HREF = "tel:+59995142050";

export function Footer() {
  return (
    <footer className="pb-footer">
      <div className="pb-container">
        <div className="pb-footer-grid">
          <div className="pb-footer-brand">
            <Link to="/" className="pb-brand">
              <img src={logo} alt="Poolbiking Caribbean" />
              <span className="pb-brand-copy">
                <strong>Poolbiking Caribbean</strong>
                <span>Professional aquatic fitness</span>
              </span>
            </Link>
            <p>
              POOLBIKING aquatic fitness equipment for hotels, resorts,
              fitness facilities, rehabilitation programs and other pool-based projects
              across the Caribbean.
            </p>
            <div className="pb-footer-links" style={{ marginTop: 18 }}>
              <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE_DISPLAY}</a>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>

          <div>
            <div className="pb-footer-heading">Explore</div>
            <div className="pb-footer-links">
              <Link to="/equipment">Products</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Request a quote</Link>
            </div>
          </div>

          <div>
            <div className="pb-footer-heading">Applications</div>
            <div className="pb-footer-links">
              <Link to="/contact">Hotels & resorts</Link>
              <Link to="/contact">Fitness facilities</Link>
              <Link to="/contact">Rehabilitation</Link>
              <Link to="/contact">Product support</Link>
            </div>
          </div>
        </div>

        <div className="pb-footer-bottom">
          <span>© {new Date().getFullYear()} Poolbiking Caribbean. All rights reserved.</span>
          <span>POOLBIKING products are designed and manufactured in Barcelona, Spain.</span>
        </div>
      </div>
    </footer>
  );
}
