import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { EquipmentPage } from "./pages/EquipmentPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { ComparePage } from "./pages/ComparePage";
import { ComparisonProvider, ComparisonTray } from "./components/Comparison";

export default function App() {
  return (
    <Router>
      <ComparisonProvider>
        <div className="pb-shell">
          <a
            className="pb-skip-link"
            href="#main-content"
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("main-content")?.focus();
              document.getElementById("main-content")?.scrollIntoView();
            }}
          >
            Skip to content
          </a>
          <Navigation />
          <main id="main-content" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/equipment" element={<EquipmentPage />} />
              <Route path="/equipment/:id" element={<ProductDetailPage />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route
                path="/sales"
                element={<Navigate to="/contact" replace />}
              />
              <Route
                path="/rental"
                element={<Navigate to="/contact" replace />}
              />
              <Route
                path="/services/*"
                element={<Navigate to="/contact" replace />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <ComparisonTray />
        </div>
      </ComparisonProvider>
    </Router>
  );
}
