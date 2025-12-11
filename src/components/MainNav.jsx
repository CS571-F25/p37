// src/components/MainNav.jsx
import { Link } from "react-router-dom";
import logoImage from "../assets/mad-logo.png";

export default function MainNav() {
  return (
    <header className="hero-header">
      <div className="hero-brand">
        <img
          src={logoImage}
          alt="Mad Seafood Boiler logo"
          className="hero-logo-img"
        />
        <span className="hero-logo-text">Mad Seafood Boiler</span>
      </div>

      <nav className="hero-nav">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/order">Order</Link>
        <a href="https://squareup.com/gift/MLD985VS0ZG0E/order">
          Giftcards
        </a>
      </nav>
    </header>
  );
}
