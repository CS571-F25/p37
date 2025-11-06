import { HashRouter, Routes, Route } from 'react-router-dom'
import SiteNav from './components/SiteNav'
import Footer from './components/Footer'

import Home from './pages/Home'
import Menu from './pages/Menu'
import GiftCards from './pages/GiftCards'
import Gallery from './pages/Gallery'
import Reservation from './pages/Reservation'

export default function App() {
  return (
    <HashRouter>
      <SiteNav />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/giftcards" element={<GiftCards />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
