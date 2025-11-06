// src/pages/Reservation.jsx
import { useState } from 'react'
import { Form, Button, Row, Col, Alert } from 'react-bootstrap'

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire to your backend or a service like Formspree
    setSubmitted(true)
    e.target.reset()
  }

  return (
    <section>
      <h1 className="mb-4">Reservation</h1>
      {submitted && <Alert variant="success">Request received! We’ll confirm by email.</Alert>}

      <Form onSubmit={handleSubmit}>
        <Row className="g-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control required name="name" placeholder="Full name" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required name="email" placeholder="you@example.com" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control name="phone" placeholder="(555) 555-5555" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Party Size</Form.Label>
              <Form.Select name="party" defaultValue="2">
                {[...Array(12)].map((_, i) => <option key={i+1}>{i+1}</option>)}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" required name="date" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Form.Select name="time" defaultValue="18:00">
                {['17:00','17:30','18:00','18:30','19:00','19:30','20:00'].map(t =>
                  <option key={t} value={t}>{t}</option>
                )}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows={2} name="notes" placeholder="Allergies, occasion, seating preference..." />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Button type="submit" variant="dark">Request Reservation</Button>
          </Col>
        </Row>
      </Form>
    </section>
  )
}
