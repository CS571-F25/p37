// src/components/SectionTitle.jsx
export default function SectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`section-title ${className}`.trim()}
      style={{ marginBottom: "32px" }}
    >
      {children}
    </h2>
  );
}
