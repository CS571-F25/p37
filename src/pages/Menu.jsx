import { Container, Row, Col, Card } from "react-bootstrap";

export default function Menu() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="mb-4 text-center">Menu</h2>

        <Card className="mb-5 border-0 shadow-sm">
          <Card.Img
            variant="top"
            src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/8ec325b1-e335-4cdb-9ff3-475879096c86.jpeg"
            alt="Seafood boil"
          />
        </Card>

        {/* Menu */}
        <Row className="gy-4">
          <Col md={6}>
            <h4>Appetizers</h4>
            <ul className="menu-list">
              <li>
                <span>Cajun Fries</span>
                <span>$4.25</span>
              </li>
              <li>
                <span>Fried Veg Spring Rolls</span>
                <span>$2.95</span>
              </li>
              <li>
                <span>Takoyaki</span>
                <span>$6.95</span>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <h4>Seafood Boil</h4>
            <ul className="menu-list">
              <li>
                <span>Shrimp Boil</span>
                <span>Market</span>
              </li>
              <li>
                <span>Snow Crab Legs</span>
                <span>Market</span>
              </li>
              <li>
                <span>Combo Platter</span>
                <span>Market</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}