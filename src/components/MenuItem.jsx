// src/components/MenuItem.jsx
export default function MenuItem({ name, price, description }) {
  return (
    <div className="menu-item">
      <div className="menu-item-left">
        <div className="menu-item-name">{name}</div>
        {description && <div className="menu-item-desc">{description}</div>}
      </div>
      <div className="menu-item-price">{price}</div>
    </div>
  );
}
