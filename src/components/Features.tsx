import { Shield, Zap, Palette, Headphones, Package, Award } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Kualitas Premium',
    desc: 'Mesin cetak digital terkini dengan resolusi tinggi. Warna akurat, tajam, dan tidak mudah pudar.',
  },
  {
    icon: Zap,
    title: 'Proses Cepat',
    desc: 'Ekspres 1×24 jam tersedia. Standar 2–3 hari kerja. Cocok untuk kebutuhan mendesak sekalipun.',
  },
  {
    icon: Palette,
    title: 'Desain Gratis',
    desc: 'Tim desainer berpengalaman siap membantu mewujudkan ide kamu menjadi bendera yang memukau.',
  },
  {
    icon: Package,
    title: 'Pengiriman Nasional',
    desc: 'Dikirim ke seluruh pelosok Indonesia dengan kemasan aman dan tracking real-time.',
  },
  {
    icon: Shield,
    title: 'Garansi Kualitas',
    desc: 'Tidak puas dengan hasilnya? Kami cetak ulang tanpa biaya tambahan. Kepuasanmu adalah prioritas.',
  },
  {
    icon: Headphones,
    title: 'Support 7 Hari',
    desc: 'Customer service siap membantu via WhatsApp, telepon, dan email setiap hari.',
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-brand-red font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Keunggulan
          </p>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white">
            Mengapa Pilih <span className="text-brand-red">Kami?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="group flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-red/40 transition-all hover:-translate-y-0.5"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-red/20 flex items-center justify-center group-hover:bg-brand-red transition-colors">
                  <Icon size={20} className="text-brand-red group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white mb-1.5">{f.title}</h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
