// src/components/MenuItemRow.jsx
export default function MenuItemRow({ item }) {
  return (
    <div className="menu-item">
      <div className="menu-item-left">
        <div className="menu-item-name">{item.name}</div>
        {item.description && (
          <div className="menu-item-desc">{item.description}</div>
        )}
      </div>
      <div className="menu-item-price">{item.price}</div>
    </div>
  );
}
