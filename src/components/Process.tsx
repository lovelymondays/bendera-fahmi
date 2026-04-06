import { MessageSquare, Palette, Printer, Truck } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Konsultasi',
    desc: 'Hubungi kami via WhatsApp atau telepon. Ceritakan kebutuhan dan ukuran bendera kamu.',
  },
  {
    num: '02',
    icon: Palette,
    title: 'Desain & Approval',
    desc: 'Tim desainer kami siapkan mockup. Kamu approve sebelum masuk produksi.',
  },
  {
    num: '03',
    icon: Printer,
    title: 'Produksi',
    desc: 'Proses cetak dengan mesin digital terbaru. Warna akurat, hasil tajam dan tahan lama.',
  },
  {
    num: '04',
    icon: Truck,
    title: 'Pengiriman',
    desc: 'Dikemas rapi dan dikirim via kurir terpercaya ke seluruh Indonesia.',
  },
]

export default function Process() {
  return (
    <section id="proses" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-red/3 clip-diagonal pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-red font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Cara Kerja
          </p>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white">
            Mudah & Cepat, <span className="text-brand-red">4 Langkah</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.num} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-0px)] w-full h-px border-t border-dashed border-white/20 z-0" />
                )}

                <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-red/40 transition-colors group">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-red/20 flex items-center justify-center group-hover:bg-brand-red transition-colors">
                      <Icon size={20} className="text-brand-red group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-display font-extrabold text-4xl text-white/10 leading-none">
                      {s.num}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{s.title}</h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
