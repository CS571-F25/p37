// src/pages/Home.jsx
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="text-center">
      <h1 className="display-5">Welcome to Your Restaurant</h1>
      <p className="lead mt-3">
        Farm-to-table comfort food, handmade daily.
      </p>
      <div className="d-flex gap-3 justify-content-center mt-4 flex-wrap">
        <Button as={Link} to="/menu">View Menu</Button>
        <Button variant="outline-dark" as={Link} to="/reservation">
          Make a Reservation
        </Button>
      </div>
      <img
        className="img-fluid rounded shadow mt-4"
        alt="Hero dish"
        src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
      />
    </section>
  )
}
