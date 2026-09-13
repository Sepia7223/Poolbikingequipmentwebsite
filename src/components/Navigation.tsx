import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../content/Logo's/Poolbiking CW.png";

const links = [
  { label: "Products", to: "/equipment" },
  { label: "Solutions", to: "/#solutions" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
];

export function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <nav className={`pb-nav ${!isHome ? "is-solid" : ""} ${scrolled ? "is-scrolled" : ""}`}>
      <div className="pb-container pb-nav-inner">
        <Link to="/" className="pb-brand" aria-label="Poolbiking Caribbean home">
          <img src={logo} alt="Poolbiking Caribbean" />
          <span className="pb-brand-copy">
            <strong>Poolbiking Caribbean</strong>
            <span>Professional aquatic fitness</span>
          </span>
        </Link>

        <div className="pb-nav-links">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={location.pathname === link.to ? "is-active" : ""}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="pb-button pb-button-aqua">
            Request a quote
          </Link>
        </div>

        <button
          type="button"
          className="pb-nav-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {open && (
        <div className="pb-mobile-nav">
          {links.map((link) => (
            <Link key={link.label} to={link.to}>{link.label}</Link>
          ))}
          <Link to="/contact" className="pb-button pb-button-aqua pb-button-full">
            Request a quote
          </Link>
        </div>
      )}
    </nav>
  );
}
