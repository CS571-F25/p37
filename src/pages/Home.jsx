import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section text-white d-flex align-items-center">
        <Container>
          <Row>
            <Col md={8}>
              <h1 className="display-4 fw-bold mb-3">
                MAD SEAFOOD BOILER
              </h1>
              <h2 className="h3 mb-3">
                BEST SEAFOOD BOIL AND SUSHI IN MADISON, WI
              </h2>
              <p className="mb-4">
                Locally owned | Prepared and crafted with love
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Button variant="light">View Menu</Button>
                <Button variant="outline-light">Reserve a Table</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ABOUT US */}
      <section className="py-5 bg-light">
        <Container>
          <h3 className="text-center mb-4">About Us</h3>
          <Row className="gy-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title>Our Chef and Staff</Card.Title>
                  <Card.Text>
                    With years of experience cooking seafood boil and crafting
                    sushi rolls, our team is excited to present their vision to
                    you and all our guests. We make sure you have a fantastic
                    experience with us.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title>Dine In or Take Out</Card.Title>
                  <Card.Text>
                    We have worked to package our meals in a way that lets you
                    bring the quality of our meals into your home. We always
                    love to see you in person, but we ensure your home
                    experience is top notch as well.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title>Seasonal and Local</Card.Title>
                  <Card.Text>
                    We refuse to compromise on quality in our restaurant. No
                    matter what time of year, you can be sure you&apos;re eating
                    the best of the season.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* REVIEWS */}
      <section className="py-5 reviews-section text-white">
        <Container>
          <h3 className="text-center mb-4">Reviews</h3>
          <Row className="gy-4">
            {[
              {
                name: "Brad T.",
                text: "Very good seafood boil! Very fresh and great service!!",
              },
              {
                name: "Corey E.",
                text: "Crab legs and sushi options were all very tasty. Stellar staff.",
              },
              {
                name: "Joni D.",
                text: "Tried for the first time tonight after a recommendation and loved it.",
              },
            ].map((review, idx) => (
              <Col md={4} key={idx}>
                <Card className="h-100 border-0 shadow-sm review-card">
                  <Card.Body>
                    <Card.Text className="mb-3">“{review.text}”</Card.Text>
                    <Card.Subtitle className="text-muted">
                      — {review.name}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* GIFT CARDS */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center gy-4">
            <Col md={6}>
              <img
                className="img-fluid rounded shadow-sm"
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
                alt="Restaurant interior"
              />
            </Col>
            <Col md={6}>
              <h3 className="mb-3">Gift Cards</h3>
              <p className="mb-4">
                Send a gift card to friends and family or buy it now for your
                future use. Perfect for seafood lovers and special occasions.
              </p>
              <Button variant="dark">Buy Gift Card</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}