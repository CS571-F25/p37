// src/pages/Gallery.jsx
const imgs = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop'
]

export default function Gallery() {
  return (
    <section>
      <h1 className="mb-4">Gallery</h1>
      <div className="row g-3">
        {imgs.map(src => (
          <div key={src} className="col-6 col-md-4">
            <img src={src} alt="gallery" className="img-fluid rounded shadow-sm" />
          </div>
        ))}
      </div>
    </section>
  )
}
