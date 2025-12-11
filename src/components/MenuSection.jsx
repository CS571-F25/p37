// src/components/MenuSection.jsx
import MenuItemRow from "./MenuItemRow";

export default function MenuSection({ title, items }) {
  return (
    <section className="menu-section">
      <h2 className="menu-section-title">{title}</h2>
      <div className="menu-items-grid">
        {items.map((item) => (
          <MenuItemRow key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
