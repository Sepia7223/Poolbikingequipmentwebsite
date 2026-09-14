import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Columns3, Menu, X } from "lucide-react";
import { useComparison } from "./Comparison";
import logo from "../content/Logo's/Poolbiking CW.png";

const links = [
  { label: "Equipment", to: "/equipment" },
  { label: "Find your fit", to: "/#solutions" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
];

export function Navigation() {
  const location = useLocation();
  const { ids } = useComparison();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    if (location.state?.restoreProductId) return;
    const frame = requestAnimationFrame(() => {
      if (location.hash === "#solutions")
        document
          .getElementById("solutions")
          ?.scrollIntoView({ behavior: "instant" });
      else window.scrollTo({ top: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key, location.state]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav
      aria-label="Main navigation"
      className={`pb-nav is-solid ${scrolled ? "is-scrolled" : ""}`}
    >
      <div className="pb-container pb-nav-inner">
        <Link
          to="/"
          className="pb-brand"
          aria-label="Poolbiking Caribbean home"
        >
          <img src={logo} alt="" width="48" height="48" />
          <span className="pb-brand-copy">
            <strong>Poolbiking Caribbean</strong>
            <span>Professional aquatic fitness</span>
          </span>
        </Link>
        <div className="pb-nav-links">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={location.pathname === link.to ? "page" : undefined}
              className={
                location.pathname.startsWith(link.to) &&
                link.to !== "/#solutions"
                  ? "is-active"
                  : ""
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/compare"
            className="pb-nav-compare"
            aria-label={`Compare equipment, ${ids.length} selected`}
          >
            <Columns3 size={18} />
            <span>{ids.length}</span>
          </Link>
          <Link to="/contact" className="pb-button pb-button-aqua">
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <button
          ref={toggle}
          type="button"
          className="pb-nav-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
      {open && (
        <div
          id="mobile-navigation"
          className="pb-mobile-nav"
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
          <Link to="/compare">Compare equipment ({ids.length})</Link>
          <Link
            to="/contact"
            className="pb-button pb-button-aqua pb-button-full"
          >
            Tell us about your project
          </Link>
        </div>
      )}
    </nav>
  );
}
