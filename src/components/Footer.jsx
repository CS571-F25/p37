import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="py-3 bg-dark text-white-50 mt-auto">
      <Container className="text-center small">
        © {new Date().getFullYear()} MAD Seafood Boiler · Madison, WI
      </Container>
    </footer>
  );
}