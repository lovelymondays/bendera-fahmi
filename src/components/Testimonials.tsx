import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Owner Toko Elektronik, Jakarta',
    text: 'Kualitasnya jauh melampaui ekspektasi saya. Warnanya sangat tajam dan bahannya tebal. Sudah 3 kali pesan dan selalu puas!',
    rating: 5,
  },
  {
    name: 'Siti Rahayu',
    role: 'Koordinator Event, Surabaya',
    text: 'Baru pertama coba langsung cocok. Prosesnya cepat, desain dibantu tim mereka, dan pengiriman tepat waktu sebelum acara.',
    rating: 5,
  },
  {
    name: 'Anwar Hidayat',
    role: 'Ketua Karang Taruna, Bandung',
    text: 'Harga kompetitif untuk kualitas premium. Pesan 200 pcs untuk HUT RI dan semuanya sempurna. Recommended banget!',
    rating: 5,
  },
  {
    name: 'Maya Putri',
    role: 'Marketing Manager, Medan',
    text: 'Tim CS-nya ramah dan fast response. Revisi desain gratis dan tidak dipersulit. Pasti balik lagi order!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-brand-red font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Testimoni
          </p>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white">
            Kata Mereka yang<br />
            <span className="text-brand-red">Sudah Percaya</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-white/20 transition-colors relative"
            >
              <Quote size={32} className="text-brand-red/30 mb-4" />
              <p className="font-body text-white/80 leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-white">{t.name}</div>
                  <div className="font-body text-sm text-white/40">{t.role}</div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust logos strip */}
        <div className="mt-16 border border-white/10 rounded-2xl p-8 text-center">
          <p className="font-body text-white/40 text-sm uppercase tracking-widest mb-6">
            Dipercaya oleh 500+ bisnis & organisasi
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['Perusahaan Retail', 'Organisasi Pemerintah', 'Event Organizer', 'Partai Politik', 'LSM & NGO', 'UMKM Indonesia'].map((b) => (
              <span key={b} className="font-display font-semibold text-white/30 text-sm">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
