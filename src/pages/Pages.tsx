import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import "./Pages.css";

export function Pages() {
  return (
    <div className="pages-page">
      <div className="pages-container">
        <div className="pages-header">
          <Link to="/" className="back-link">
            ← Back to App
          </Link>
          <h1>Pages</h1>
        </div>

        <section className="pages-section">
          <h2>Available Pages</h2>
          <div className="pages-links">
            <Link to="/gltf-example" className="about-link">
              GLTF Example
            </Link>
            <Link to="/" className="about-link">
              Home
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
