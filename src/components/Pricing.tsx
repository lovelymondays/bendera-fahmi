import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    qty: '1 – 10 pcs',
    price: 'Rp 85.000',
    unit: '/lembar',
    desc: 'Cocok untuk kebutuhan personal atau acara kecil.',
    features: [
      'Ukuran hingga 90×60 cm',
      'Bahan Polyester',
      'Full color printing',
      'Jahit tepi rapi',
      'Pengiriman 3–5 hari kerja',
    ],
    cta: 'Pesan Starter',
    highlight: false,
  },
  {
    name: 'Business',
    qty: '11 – 50 pcs',
    price: 'Rp 45.000',
    unit: '/lembar',
    desc: 'Untuk bisnis, event, atau organisasi. Paling populer!',
    features: [
      'Ukuran custom bebas',
      'Bahan Knit / Satin',
      'Full color + laminasi',
      'Finishing tiang / lubang',
      'Pengiriman 2–3 hari kerja',
      'Gratis revisi desain 2×',
    ],
    cta: 'Pesan Business',
    highlight: true,
  },
  {
    name: 'Enterprise',
    qty: '51+ pcs',
    price: 'Nego',
    unit: 'hubungi kami',
    desc: 'Harga terbaik untuk pesanan massal dan tender.',
    features: [
      'Semua ukuran & bahan',
      'Harga spesial borongan',
      'Prioritas produksi',
      'Pengiriman ekspres',
      'Dedicated project manager',
      'Invoice & kwitansi resmi',
    ],
    cta: 'Hubungi Kami',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="harga" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-brand-red font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Harga
          </p>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white mb-4">
            Transparan & <span className="text-brand-red">Terjangkau</span>
          </h2>
          <p className="text-white/50 font-body max-w-md mx-auto">
            Harga sudah termasuk desain, cetak, dan jahit. Makin banyak makin hemat!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-7 flex flex-col border transition-all ${
                p.highlight
                  ? 'bg-brand-red border-brand-red shadow-2xl shadow-brand-red/20 scale-105'
                  : 'bg-white/5 border-white/10 hover:border-white/30'
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-dark text-xs font-display font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  ⭐ Paling Populer
                </div>
              )}

              <div className="mb-6">
                <p className="font-display font-semibold text-sm text-white/60 mb-1">{p.qty}</p>
                <h3 className="font-display font-extrabold text-2xl text-white mb-1">{p.name}</h3>
                <p className="font-body text-sm text-white/60">{p.desc}</p>
              </div>

              <div className="mb-6">
                <span className="font-display font-extrabold text-4xl text-white">{p.price}</span>
                <span className="font-body text-white/50 text-sm ml-1">{p.unit}</span>
              </div>

              <ul className="space-y-2.5 flex-1 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className={`mt-0.5 flex-shrink-0 ${p.highlight ? 'text-white' : 'text-brand-red'}`}
                    />
                    <span className="font-body text-sm text-white/80">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontak"
                className={`text-center font-display font-semibold py-3 rounded-lg transition-all ${
                  p.highlight
                    ? 'bg-white text-brand-red hover:bg-brand-cream'
                    : 'bg-brand-red text-white hover:bg-red-700'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
