// src/components/InfoRow.jsx
import { Row, Col } from "react-bootstrap";

export default function InfoRow() {
  return (
    <Row className="info-row text-center gy-4">
      <Col md={4}>
        <div className="info-icon">📍</div>
        <p className="info-heading">201 West Gorham</p>
        <p className="info-text">
          Street, Madison,
          <br />
          Wisconsin 53703,
          <br />
          United States
        </p>
      </Col>

      <Col md={4}>
        <div className="info-icon">⏰</div>
        <p className="info-heading">Hours</p>
        <p className="info-text">
          Mon: Closed
          <br />
          Tue – Thur: 11:00 am – 09:30 pm
          <br />
          Fri: 11:00 am – 10:30 pm
          <br />
          Sat: 12:00 am – 10:30 pm
          <br />
          Sun: 12:00 am – 09:30 pm
        </p>
      </Col>

      <Col md={4}>
        <div className="info-icon">📞</div>
        <p className="info-heading">Contact</p>
        <p className="info-text">(608) 819-6168</p>
      </Col>
    </Row>
  );
}
