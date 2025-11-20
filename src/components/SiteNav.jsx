import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function SiteNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand className="fw-bold">
          <span className="me-2">🦀</span>MAD Seafood Boiler
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/menu">
              Menu
            </Nav.Link>
            <Nav.Link as={NavLink} to="/gift-cards">
              Gift Cards
            </Nav.Link>
            <Nav.Link as={NavLink} to="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link as={NavLink} to="/reservation">
              Reserve a Table
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}