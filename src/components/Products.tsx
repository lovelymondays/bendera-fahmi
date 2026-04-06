// ============================================================
// 🎯 GANTI GAMBAR PRODUK DI SINI
// Ubah nilai 'image' pada setiap produk ke path gambar kamu
// Contoh: image: '/images/bendera-promosi.jpg'
// ============================================================

interface Product {
  id: number
  name: string
  desc: string
  image: string       // ← GANTI KE PATH GAMBAR PRODUKMU
  tags: string[]
  popular?: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: 'Bendera Promosi',
    desc: 'Ideal untuk promosi bisnis, stand pameran, dan kampanye marketing.',
    image: '/images/bendera-promosi.jpg',   // 🖼️ Ganti gambar
    tags: ['Tetra', 'Knit', 'Satin'],
    popular: true,
  },
  {
    id: 2,
    name: 'Bendera Merah Putih',
    desc: 'Bendera nasional dengan warna akurat dan bahan tahan lama.',
    image: '/images/bendera-merahputih.jpg', // 🖼️ Ganti gambar
    tags: ['Polyester', 'Nylon'],
  },
  {
    id: 3,
    name: 'Umbul-Umbul',
    desc: 'Dekorasi jalan dan area event yang terlihat menarik dari kejauhan.',
    image: '/images/umbul-umbul.jpg',        // 🖼️ Ganti gambar
    tags: ['Kain Parasut', 'Spunbond'],
  },
  {
    id: 4,
    name: 'Bendera Event',
    desc: 'Untuk konser, olahraga, festival, dan semua jenis acara.',
    image: '/images/bendera-event.jpg',      // 🖼️ Ganti gambar
    tags: ['Full Color', 'Dye Sublimation'],
  },
  {
    id: 5,
    name: 'X-Banner & Roll Banner',
    desc: 'Display profesional untuk toko, kantor, dan pameran.',
    image: '/images/x-banner.jpg',           // 🖼️ Ganti gambar
    tags: ['Indoor', 'Outdoor'],
  },
  {
    id: 6,
    name: 'Bendera Custom',
    desc: 'Desain bebas sesuai kebutuhanmu. Konsultasi gratis!',
    image: '/images/bendera-custom.jpg',     // 🖼️ Ganti gambar
    tags: ['Semua Ukuran', 'Semua Bahan'],
  },
]

export default function Products() {
  return (
    <section id="produk" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-brand-red font-display font-semibold text-sm uppercase tracking-widest mb-3">
              Produk Kami
            </p>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white leading-tight">
              Semua Jenis Bendera<br />
              <span className="text-stroke">Tersedia di Sini</span>
            </h2>
          </div>
          <p className="text-white/50 font-body max-w-xs">
            Tersedia berbagai jenis bendera dengan pilihan bahan dan ukuran sesuai kebutuhan.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.id}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-brand-red/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Popular badge */}
              {p.popular && (
                <div className="absolute top-3 left-3 z-10 bg-brand-red text-white text-xs font-display font-semibold px-3 py-1 rounded-full">
                  Terlaris
                </div>
              )}

              {/* Image area */}
              <div className="aspect-[4/3] relative overflow-hidden bg-white/5">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🚩</div>
                    <p className="text-white/30 text-xs font-body">Ganti dengan foto produk</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-bold text-white text-lg mb-1">{p.name}</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-body bg-white/10 text-white/60 px-2.5 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
