import { Link } from "react-router-dom";
import logo from "../assets/mad-logo.png";

export default function Order() {
  return (
    <main className="order-page">
      {/* NAV BAR (same as home & menu) */}
      <header className="hero-header" style={{ padding: "20px 7%" }}>
        <div className="hero-brand">
          <img src={logo} alt="Mad Seafood Boiler" className="hero-logo-img" />
          <span className="hero-logo-text">Mad Seafood Boiler</span>
        </div>

        <nav className="hero-nav">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/order">Order</Link>
          <a
            href="https://squareup.com/gift/MLD985VS0ZG0E/order"
          >
            Giftcards
          </a>
        </nav>
      </header>

      {/* PAGE CONTENT */}
      <section className="order-content">
        <h1 className="order-title">Order Online</h1>
        <p className="order-subtitle">
          Choose your preferred delivery or pickup service below.
        </p>

        <div className="order-grid">
          <a
            className="order-card"
            href="https://www.ubereats.com/store/mad-seafood-boiler-and-sushi/VoKs2uZmTECYCeVECDm78A?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Uber Eats
          </a>

          <a
            className="order-card"
            href="https://eatstreet.com/madison-wi/restaurants/mad-sushi-station?order-source=OWG_REDIRECT&rwg=1&rwg_token=ACgRB3eS5WeBvPJY3_SsM9diPPliqYM-Sfc_uP8W84xVyBOTuErMxtSrMsxpvztMAAfqXYwoaUXKz6PHpQgG2oRPX-nznupkuQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            EatStreet
          </a>

          <a
            className="order-card"
            href="https://order.online/store/-288920/?pickup=true&hideModal=true&utm_source=gfo&rwg_token=ACgRB3cSYIDFuyKX165vGABPFweqDqw34Xb65maeb-BoNhJJaCdvy13VBtZiVyo01yfllip3CsCCpBsipjju_ArCbJgBvOylaA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            DoorDash
          </a>

          <a
            className="order-card"
            href="https://www.grubhub.com/restaurant/mad-seafood-boiler--sushi-201-w-gorham-st-madison/2201920?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=ACgRB3dAkBp39H2iitnfzZihxXHl0HEIDZerH8m6b83e0WePdLRFv3krqlPW20DUjUa5S3l11e0pPVcz4FcIVkbtnp_VopOIcg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Grubhub
          </a>
        </div>
      </section>
    </main>
  );
}
