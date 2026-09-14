import { useEffect } from "react";
import { useLocation } from "react-router-dom";
/** Content stays visible if motion is disabled or IntersectionObserver is unavailable. */
export function PageMotion() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (
      !window.IntersectionObserver ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pb-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(
        ".pb-section-head, .pb-intro-grid, .pb-audience-grid article, .pb-project-story, .pb-detail-copy",
      )
      .forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
