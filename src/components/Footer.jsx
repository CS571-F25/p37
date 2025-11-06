export default function Footer() {
  return (
    <footer className="border-top py-4 mt-5">
      <div className="container small text-muted d-flex flex-wrap gap-3 justify-content-between">
        <span>© {new Date().getFullYear()} Your Restaurant</span>
        <span>123 Main St · Your City · (555) 555-5555</span>
        <span>Open: Mon–Sun 11:00–22:00</span>
      </div>
    </footer>
  )
}