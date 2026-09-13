import { Link } from "react-router-dom";
import logo from "../content/Logo's/Poolbiking CW.png";

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
              Premium POOLBIKING aquatic fitness equipment for hotels, resorts,
              fitness facilities, rehabilitation environments and professional pools
              across the Caribbean.
            </p>
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
            <div className="pb-footer-heading">Solutions</div>
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
