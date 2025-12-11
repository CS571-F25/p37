import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoImage from "../assets/mad-logo.png";

const menuSections = [
  {
    title: "Appetizers",
    items: [
      { name: "Cajun Fries", price: "4.25" },
      { name: "Cajun Wings", price: "10" },
      { name: "Fried Calamari", price: "10", description: "With French fries." },
      {
        name: "Fried Soft Shell Crab",
        price: "12",
        description: "With French fries.",
      },
      { name: "Crab Rangoon", price: "5.95" },
      {
        name: "Shu Mai",
        price: "6.95",
        description: "Steamed shrimp dumplings.",
      },
      { name: "Fried Veg Spring Rolls", price: "2.95" },
      {
        name: "Takoyaki",
        price: "6.95",
        description:
          "Octopus dumplings with mayonnaise, tonkatsu sauce, and bonito.",
      },
      {
        name: "Gyoza",
        price: "6.95",
        description: "Pan-fried chicken dumplings.",
      },
      {
        name: "Fried Tempura Shrimp",
        price: "10",
        description: "With French fries.",
      },
      { name: "Chicken Tenders w. Fries", price: "10" },
    ],
  },
  {
    title: "Sushi Appetizers",
    items: [
      { name: "Edamame", price: "5", description: "Healthy snacks in pods." },
      {
        name: "Salmon Tartar",
        price: "8.95",
        description:
          "Avocado, salmon, and tobiko with Chef's special sauce.",
      },
      {
        name: "Tuna Tartar",
        price: "8.95",
        description: "Avocado, tuna, and tobiko with Chef's special sauce.",
      },
      {
        name: "Yellowtail Jalapeno",
        price: "7.95",
        description:
          "Spicy yellowtail, jalapeno, and tobiko with yuzu sauce.",
      },
    ],
  },
  {
    title: "Soup",
    items: [
      {
        name: "Miso Soup",
        price: "2.95",
        description: "Traditional Japanese soup.",
      },
    ],
  },
  {
    title: "Salad",
    items: [
      { name: "House Salad", price: "4.95" },
      { name: "Spicy Crab Meat Salad", price: "5.95", description: "Spicy." },
      { name: "Avocado Salad", price: "5.95" },
      { name: "Seaweed Salad", price: "5.95" },
    ],
  },
  {
    title: "Raw Oysters",
    items: [
      {
        name: "Each",
        price: "3",
        description: "Add a description about this item.",
      },
      {
        name: "Half Dozen",
        price: "16",
        description: "Add a description about this item.",
      },
      {
        name: "One Dozen",
        price: "30",
        description: "Add a description about this item.",
      },
    ],
  },
  {
    title: "Choose Your Seafood",
    items: [
      { name: "Shrimp (per lb.)", price: "18.99" },
      { name: "Crawfish (per lb.)", price: "13.99" },
      { name: "Mussel (per lb.)", price: "17.99" },
      { name: "Snow Crab Legs (per lb.)", price: "30.99" },
      { name: "Lobster Tail (6 oz.)", price: "16.99" },
      { name: "King Crab Leg (per lb.)", price: "55.99" },
    ],
  },
  {
    title: "Combo Platters",
    items: [
      {
        name: "Combo 1",
        price: "29.99",
        description:
          "1/2 lb shrimp, 1/2 lb mussels, 1/2 lb crawfish. Served with 2 corn on the cob, 4 potatoes and white rice.",
      },
      {
        name: "Combo 2",
        price: "29.99",
        description:
          "1/2 lb shrimp, 1 lobster tail. Served with 2 corn on the cob, 4 potatoes and white rice.",
      },
      {
        name: "Combo 3",
        price: "34.99",
        description:
          "1/2 lb snow crab legs, 1/2 lb mussels, 1/2 lb crawfish. Served with 2 corn on the cob, 4 potatoes and white rice.",
      },
      {
        name: "Combo A",
        price: "33.99",
        description:
          "1/2 lb snow crab legs, 1/2 lb mussels, or 1/2 lb crawfish or side of sausage. Served with corn, potato and rice.",
      },
    ],
  },
  {
    title: "Regular Roll",
    items: [
      { name: "Any Rolls (2)", price: "10.95", description: "Six pieces." },
      { name: "Any Rolls (3)", price: "14.95", description: "Six pieces." },
      {
        name: "California Roll",
        price: "5.75",
        description: "Crab stick, cucumber, and avocado.",
      },
      {
        name: "Spicy California Roll",
        price: "6.25",
        description:
          "Spicy crab stick, cucumber, avocado, and spicy mayonnaise.",
      },
      {
        name: "Shrimp Tempura Roll",
        price: "6.45",
        description:
          "Shrimp tempura, cucumber, avocado, and eel sauce.",
      },
      {
        name: "Philly Roll",
        price: "6.25",
        description: "Smoked salmon, cream cheese, and avocado.",
      },
    ],
  },
  {
    title: "Special Roll",
    items: [
      {
        name: "Madison Roll",
        price: "13.95",
        description:
          "Spicy tuna, deep fried. Seven pieces cream cheese, avocado and spicy mayo.",
      },
      {
        name: "Volcano Roll",
        price: "13.95",
        description:
          "Spicy deep fried roll with crab stick, salmon, crunch, and spicy mayo.",
      },
      {
        name: "Rainbow Roll",
        price: "11.95",
        description:
          "California roll topped with tuna, salmon, white fish, and avocado.",
      },
      {
        name: "Crazy Tuna Roll",
        price: "12.95",
        description:
          "Spicy tuna roll topped with seared tuna, crunch, avocado, and spicy mayo.",
      },
    ],
  },
];

export default function Menu() {
  return (
    <main className="menu-page">
      {/* ⭐ SAME NAV BAR AS HOME */}
      <div className="menu-nav">
        <div className="hero-header">
          <div className="hero-brand">
            <img
              src={logoImage}
              alt="Mad Seafood Boiler logo"
              className="hero-logo-img"
            />
            <span className="hero-logo-text">Mad Seafood Boiler</span>
          </div>

          <nav className="hero-nav">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/order">Order</Link>
            <a href="https://squareup.com/gift/MLD985VS0ZG0E/order">
              Giftcards
            </a>
          </nav>
        </div>
      </div>

      {/* MENU CONTENT */}
      <Container>
        <header className="menu-header">
          <h1 className="menu-title">MENU</h1>
          <p className="menu-subtitle">
            Fresh seafood boils, sushi rolls, and more — crafted with love.
          </p>
        </header>

        {menuSections.map((section) => (
          <section key={section.title} className="menu-section">
            <h2 className="menu-section-title">{section.title}</h2>
            <div className="menu-items-grid">
              {section.items.map((item) => (
                <div key={item.name} className="menu-item">
                  <div className="menu-item-left">
                    <div className="menu-item-name">{item.name}</div>
                    {item.description && (
                      <div className="menu-item-desc">{item.description}</div>
                    )}
                  </div>
                  <div className="menu-item-price">{item.price}</div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </Container>
    </main>
  );
}
