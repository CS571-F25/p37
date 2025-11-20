import { Card, Button } from 'react-bootstrap'

const tiers = [
  { amount: 25,  perk: 'Perfect for lunch' },
  { amount: 50,  perk: 'Dinner for two' },
  { amount: 100, perk: 'Great for celebrations' }
]

export default function GiftCards() {
  return (
    <section>
      <h1 className="mb-4">Gift Cards</h1>
      <p className="text-muted">Give the gift of great food! Physical & e-gift cards available.</p>
      <div className="row g-3">
        {tiers.map(t => (
          <div key={t.amount} className="col-12 col-sm-6 col-lg-4">
            <Card className="h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title>${t.amount}</Card.Title>
                <Card.Text className="text-muted flex-grow-1">{t.perk}</Card.Text>
                <Button variant="dark">Buy e-Gift</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <p className="small text-muted mt-3">
        For bulk or corporate purchases, please contact us.
      </p>
    </section>
  )
}
