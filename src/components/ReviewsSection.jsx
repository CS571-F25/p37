// src/components/ReviewsSection.jsx
import { Container } from "react-bootstrap";
import SectionTitle from "./SectionTitle";

export default function ReviewsSection() {
  return (
    <section className="reviews-section">
      <Container>
        <SectionTitle className="text-center reviews-title">
          Reviews
        </SectionTitle>

        <div className="reviews-card">
          <div className="reviews-quote-mark">“</div>
          <p className="reviews-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset......
          </p>
          <p className="reviews-name">John Doe</p>
        </div>
      </Container>
    </section>
  );
}
