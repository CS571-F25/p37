import { Container, Form, Button } from "react-bootstrap";

export default function Reservation() {
  return (
    <section className="py-5">
      <Container style={{ maxWidth: "600px" }}>
        <h2 className="mb-4 text-center">Reserve a Table</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="you@example.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Party Size</Form.Label>
            <Form.Control type="number" min="1" max="12" />
          </Form.Group>
          <Button variant="dark" type="submit" className="w-100">
            Submit Reservation
          </Button>
        </Form>
      </Container>
    </section>
  );
}