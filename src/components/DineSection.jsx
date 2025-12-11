// src/components/DineSection.jsx
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import storeImage from "../assets/store.png";
import deliveryImage from "../assets/delivery.png";

const RESERVE_URL =
  "https://www.google.com/maps/reserve/v/dine/c/yfE7JckZN0c?source=pa&opi=89978449&hl=en-US";

const DELIVERY_URL =
  "https://www.ubereats.com/store/mad-seafood-boiler-and-sushi/VoKs2uZmTECYCeVECDm78A?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas";

export default function DineSection() {
  return (
    <section className="dine-section">
      <Container>
        <SectionTitle className="text-center dine-title">
          Dine In or Take Out
        </SectionTitle>

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
                alt="Food delivery options"
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
      </Container>
    </section>
  );
}
