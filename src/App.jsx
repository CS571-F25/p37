import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Gallery from "./pages/Order.jsx";
import GiftCards from "./pages/GiftCards.jsx";
import Reservation from "./pages/Reservation.jsx";
import Footer from "./components/Footer.jsx";
import Order from "./pages/Order.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app-root">
      {/* Nav lives inside Home hero only */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}
