import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function SiteNav() {
  const linkClass = ({ isActive }) =>
    'nav-link' + (isActive ? ' fw-bold text-decoration-underline' : '')

  return (
    <Navbar bg="light" expand="md" className="border-bottom">
      <Container>
        <Navbar.Brand as={NavLink} to="/">🍽️ Your Restaurant</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <NavLink to="/" className={linkClass} end>Home</NavLink>
            <NavLink to="/menu" className={linkClass}>Menu</NavLink>
            <NavLink to="/giftcards" className={linkClass}>Gift Cards</NavLink>
            <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
            <NavLink to="/reservation" className={linkClass}>Reservation</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
