import { Link } from "react-router-dom";
import "./SiteNav.css";
import logo from "../assets/mad_logo.png";

export default function SiteNav() {
  return (
    <nav className="site-nav">
      <div className="nav-left">
        <img src={logo} alt="Mad Seafood Boiler" className="nav-logo" />
        <span className="nav-title">Mad Seafood Boiler</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <a
          href="https://www.ubereats.com/store/mad-seafood-boiler-and-sushi/VoKs2uZmTECYCeVECDm78A"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order
        </a>
        <Link to="/gift-cards">Giftcards</Link>
      </div>
    </nav>
  );
}
