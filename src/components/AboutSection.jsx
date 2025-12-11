// src/components/AboutSection.jsx
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import chefImage from "../assets/chef.png";

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="align-items-center gy-4">
          <Col lg={6}>
            <SectionTitle className="about-title">About us</SectionTitle>
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
  );
}
