import { Container, Row, Col } from "react-bootstrap";

const images = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80",
];

export default function Gallery() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="mb-4 text-center">Photo Gallery</h2>
        <Row className="gy-4">
          {images.map((src, idx) => (
            <Col md={3} sm={6} key={idx}>
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="img-fluid rounded shadow-sm gallery-img"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}