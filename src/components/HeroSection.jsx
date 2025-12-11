// src/components/HeroSection.jsx
import { Button } from "react-bootstrap";
import heroImage from "../assets/main.png";
import MainNav from "./MainNav";

const RESERVE_URL =
  "https://www.google.com/maps/reserve/v/dine/c/yfE7JckZN0c?source=pa&opi=89978449&hl=en-US";

export default function HeroSection() {
  return (
    <section
      className="hero-section"
      id="home"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay" />

      <div className="hero-inner">
        {/* NAVBAR */}
        <MainNav />

        {/* HERO CONTENT */}
        <div className="hero-content-row">
          <div className="hero-left">
            <p className="hero-eyebrow">
              Best Seafood boil and Sushi in Madison, WI
            </p>

            <h1 className="hero-script">Seafood</h1>

            <p className="hero-subtext">
              From appetizers, sushi, and seafood
              <br />
              Enjoy the best dining experience
            </p>

            <Button
              className="hero-cta"
              href={RESERVE_URL}
              target="_blank"
              rel="noreferrer"
            >
              Reserve a Table
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
