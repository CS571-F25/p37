// src/pages/Home.jsx
import { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import heroImage from "../assets/main.png";
import logoImage from "../assets/mad-logo.png";
import chefImage from "../assets/chef.png";
import deliveryImage from "../assets/delivery.png";
import storeImage from "../assets/store.png";

// Gallery images
import gallery1 from "../assets/gallery.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";
import gallery8 from "../assets/gallery8.png";
import gallery9 from "../assets/gallery9.png";
import gallery10 from "../assets/gallery10.png";
import gallery11 from "../assets/gallery11.png";
import gallery12 from "../assets/gallery12.png";
import gallery13 from "../assets/gallery13.png";
import gallery14 from "../assets/gallery14.png";

const RESERVE_URL =
  "https://www.google.com/maps/reserve/v/dine/c/yfE7JckZN0c?source=pa&opi=89978449&hl=en-US";

const DELIVERY_URL =
  "https://www.ubereats.com/store/mad-seafood-boiler-and-sushi/VoKs2uZmTECYCeVECDm78A?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* ================= HERO (background image + nav) ================= */}
      <section
        className="hero-section"
        id="home"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay" />

        <div className="hero-inner">
          {/* NAVBAR */}
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

              <a href={DELIVERY_URL} target="_blank" rel="noreferrer">
                Order
              </a>
              <a
                href="https://squareup.com/gift/MLD985VS0ZG0E/order"
                target="_blank"
                rel="noreferrer"
              >
                Giftcards
              </a>
            </nav>
          </header>

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

      {/* ================= ABOUT ================= */}
      <section className="about-section" id="about">
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <h2 className="section-title about-title">About us</h2>
              <p className="about-body">
                With years of experience cooking seafood boil and crafting
                authentic and original sushi rolls, our chef is excited to
                present Mad Seafood team&apos;s vision to you and all our
                guests. Our caring and committed staff make sure you have a
                fantastic experience with us.
              </p>
            </Col>

            <Col lg={6} className="d-flex justify-content-center">
              <div className="about-image-frame">
                <img
                  src={chefImage}
                  alt="Chef preparing sushi"
                  className="about-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= DINE IN OR TAKE OUT ================= */}
      <section className="dine-section">
        <Container>
          <h2 className="section-title text-center dine-title">
            Dine In or Take Out
          </h2>

          <p className="dine-body text-center">
            We have worked to package our meals in a way that lets you bring the
            quality of our meals into your home. We always love to see you in
            person, but even when we can&apos;t we ensure your dining
            experience is top notch!
          </p>

          <Row className="justify-content-center gy-4 dine-card-row">
            <Col md={4}>
              <Card className="dine-card text-center">
                <Card.Img
                  src={storeImage}
                  className="dine-card-img"
                  alt="Mad Seafood Boiler exterior"
                />
                <Card.Body>
                  <Button
                    className="pill-btn"
                    href={RESERVE_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Reserve
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="dine-card text-center">
                <Card.Img
                  src={deliveryImage}
                  className="dine-card-img"
                  alt="Delivery platforms"
                />
                <Card.Body>
                  <Button
                    className="pill-btn"
                    href={DELIVERY_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Order Delivery
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* LOCATION / HOURS / CONTACT */}
          <Row className="info-row text-center gy-4">
            <Col md={4}>
              <div className="info-icon">📍</div>
              <p className="info-heading">201 West Gorham</p>
              <p className="info-text">
                Street, Madison,
                <br />
                Wisconsin 53703,
                <br />
                United States
              </p>
            </Col>

            <Col md={4}>
              <div className="info-icon">⏰</div>
              <p className="info-heading">Hours</p>
              <p className="info-text">
                Mon: Closed
                <br />
                Tue – Thur: 11:00 am – 09:30 pm
                <br />
                Fri: 11:00 am – 10:30 pm
                <br />
                Sat: 12:00 am – 10:30 pm
                <br />
                Sun: 12:00 am – 09:30 pm
              </p>
            </Col>

            <Col md={4}>
              <div className="info-icon">📞</div>
              <p className="info-heading">Contact</p>
              <p className="info-text">(608) 819-6168</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="reviews-section">
        <Container>
          <h2 className="section-title text-center reviews-title">Reviews</h2>

          <div className="reviews-card">
            <div className="reviews-quote-mark">“</div>
            <p className="reviews-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset......
            </p>
            <p className="reviews-name">John Doe</p>
          </div>
        </Container>
      </section>

      {/* ================= GALLERY (CAROUSEL + THUMBNAILS) ================= */}
      <section className="gallery-section" id="gallery">
        <Container>
          <h2 className="section-title text-center gallery-title">Gallery</h2>
        </Container>

        <div className="gallery-main-wrapper">
          <button
            type="button"
            className="gallery-nav-button"
            onClick={showPrev}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="gallery-main-image-frame">
            <img
              src={galleryImages[currentIndex]}
              alt={`Gallery item ${currentIndex + 1}`}
              className="gallery-main-image"
            />
          </div>

          <button
            type="button"
            className="gallery-nav-button"
            onClick={showNext}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        <div className="gallery-thumbnails-wrapper">
          {galleryImages.map((img, index) => (
            <button
              key={index}
              type="button"
              className={
                "gallery-thumb-button" +
                (index === currentIndex ? " active" : "")
              }
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="gallery-thumbnail"
              />
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
