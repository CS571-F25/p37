// src/components/GallerySection.jsx
import { useState } from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "./SectionTitle";

import gallery1 from "../assets/gallery.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";
import gallery8 from "../assets/gallery8.png";
import gallery9 from "../assets/gallery9.png";
import gallery10 from "../assets/gallery10.png";
import gallery11 from "../assets/gallery11.png";
import gallery12 from "../assets/gallery12.png";
import gallery13 from "../assets/gallery13.png";
import gallery14 from "../assets/gallery14.png";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="gallery-section" id="gallery">
      <Container>
        <SectionTitle className="text-center gallery-title">
          Gallery
        </SectionTitle>
      </Container>

      <div className="gallery-main-wrapper">
        <button
          type="button"
          className="gallery-arrow"
          onClick={showPrev}
          aria-label="Previous image"
        >
          ‹
        </button>

        <div className="gallery-main-image-frame">
          <img
            src={galleryImages[currentIndex]}
            alt={`Menu item ${currentIndex + 1}`}
            className="gallery-main-image"
          />
        </div>

        <button
          type="button"
          className="gallery-arrow"
          onClick={showNext}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      <div className="gallery-thumbnails-wrapper">
        {galleryImages.map((img, idx) => (
          <button
            key={idx}
            type="button"
            className={
              "gallery-thumb-button" +
              (idx === currentIndex ? " active" : "")
            }
            onClick={() => setCurrentIndex(idx)}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="gallery-thumbnail"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
