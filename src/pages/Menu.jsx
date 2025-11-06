// src/pages/Menu.jsx
const menu = {
  Starters: [
    { name: 'Tomato Basil Soup', price: 6.5, desc: 'Creamy, with garlic croutons' },
    { name: 'Crispy Calamari',  price: 11,  desc: 'Lemon aioli' }
  ],
  Mains: [
    { name: 'Herb Roast Chicken', price: 18, desc: 'Pan jus, seasonal veg' },
    { name: 'Rigatoni Bolognese', price: 17, desc: 'Parmesan, basil' }
  ],
  Desserts: [
    { name: 'Tiramisu', price: 8.5, desc: 'Espresso-soaked ladyfingers' }
  ]
}

export default function Menu() {
  return (
    <section>
      <h1 className="mb-4">Menu</h1>
      {Object.entries(menu).map(([section, items]) => (
        <div key={section} className="mb-4">
          <h3 className="border-bottom pb-2">{section}</h3>
          <ul className="list-unstyled m-0">
            {items.map((i) => (
              <li key={i.name} className="d-flex justify-content-between py-2 border-bottom">
                <div>
                  <div className="fw-semibold">{i.name}</div>
                  <div className="text-muted small">{i.desc}</div>
                </div>
                <div className="fw-semibold">${i.price.toFixed(2)}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="text-muted small">* Menu items and prices subject to change.</p>
    </section>
  )
}
