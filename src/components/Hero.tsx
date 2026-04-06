import { Play, ArrowRight, Star } from 'lucide-react'
import { useState } from 'react'

// ============================================================
// 🎯 GANTI VIDEO/GAMBAR DI SINI
// Untuk video: ubah VIDEO_SRC ke path file video kamu (contoh: '/video/promo.mp4')
// Untuk gambar hero: ubah HERO_IMAGE ke path gambar kamu
// Set USE_VIDEO = true untuk menggunakan video, false untuk gambar
// ============================================================
const USE_VIDEO = false
const VIDEO_SRC = '/video/promo-bendera.mp4'   // Ganti dengan path video kamu
const HERO_IMAGE = '/images/hero-bendera.jpg'   // Ganti dengan path gambar kamu
// ============================================================

export default function Hero() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-brand-dark">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 clip-diagonal" />
        <div className="absolute bottom-32 left-0 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl" />
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl" />
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 flex flex-col lg:flex-row items-center gap-12 flex-1">
        {/* Left: copy */}
        <div className="flex-1 max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-xs font-body text-white/80 tracking-wide">
              #1 Jasa Cetak Bendera Indonesia
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-extrabold text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6">
            <span className="block text-white">Cetak</span>
            <span className="block text-stroke">Bendera</span>
            <span className="block text-white">
              Kualitas <span className="text-brand-red">Premium</span>
            </span>
          </h1>

          <p className="font-body text-white/60 text-lg leading-relaxed mb-8 max-w-md">
            Cetak bendera promosi, event, partai, dan organisasi dengan bahan premium,
            warna tajam, dan pengiriman cepat ke seluruh Indonesia.
          </p>

          {/* Stars */}
          <div className="flex items-center gap-2 mb-8">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <span className="text-white/60 text-sm font-body">
              4.9 dari 2.400+ pelanggan puas
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 bg-brand-red text-white font-display font-semibold px-7 py-3.5 rounded hover:bg-red-700 transition-all hover:gap-3 group"
            >
              Pesan Sekarang
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#produk"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-display font-semibold px-7 py-3.5 rounded hover:border-white/60 transition-all"
            >
              Lihat Produk
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
            {[
              { value: '10.000+', label: 'Pesanan Selesai' },
              { value: '500+', label: 'Klien Aktif' },
              { value: '2 Hari', label: 'Rata-rata Selesai' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-2xl text-white">{s.value}</div>
                <div className="font-body text-xs text-white/50 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Video / Image block */}
        <div className="flex-1 w-full max-w-xl relative">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-red/10 aspect-video bg-white/5">

            {USE_VIDEO ? (
              /* ---- VIDEO MODE ---- */
              videoPlaying ? (
                <video
                  src={VIDEO_SRC}
                  autoPlay
                  controls
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  {/* Video thumbnail / poster */}
                  <img
                    src={HERO_IMAGE}
                    alt="Video promo cetak bendera"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() => setVideoPlaying(true)}
                      className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-brand-red/40"
                      aria-label="Putar video"
                    >
                      <Play size={22} className="text-white fill-white ml-1" />
                    </button>
                  </div>
                </>
              )
            ) : (
              /* ---- IMAGE MODE ---- */
              <div className="relative w-full h-full">
                <img
                  src={HERO_IMAGE}
                  alt="Cetak bendera berkualitas tinggi"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback placeholder saat gambar belum diisi
                    ;(e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
                {/* Placeholder — tampil saat gambar belum diisi */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white/5 to-white/10 border-2 border-dashed border-white/20">
                  <div className="text-5xl mb-3">🚩</div>
                  <p className="font-display font-bold text-white/80 text-lg text-center px-4">
                    Taruh Foto / Video<br />Produk di Sini
                  </p>
                  <p className="font-body text-white/40 text-sm mt-2 text-center px-6">
                    Ubah <code className="text-brand-red">HERO_IMAGE</code> atau{' '}
                    <code className="text-brand-red">VIDEO_SRC</code> di komponen <code className="text-white/50">Hero.tsx</code>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-brand-cream text-brand-dark rounded-xl px-4 py-3 shadow-xl">
            <div className="font-display font-bold text-sm">Mulai dari</div>
            <div className="font-display font-extrabold text-xl text-brand-red">Rp 15.000</div>
            <div className="font-body text-xs text-brand-dark/60">per lembar</div>
          </div>

          {/* Floating badge 2 */}
          <div className="absolute -top-4 -right-4 bg-brand-dark border border-white/20 rounded-xl px-4 py-2.5 shadow-xl">
            <div className="flex items-center gap-2">
              <span className="text-lg">🚀</span>
              <div>
                <div className="font-display font-semibold text-xs text-white">Ekspres</div>
                <div className="font-body text-xs text-white/50">Siap 1×24 Jam</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative border-t border-b border-white/10 py-3 overflow-hidden bg-brand-red/10">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) =>
            ['Bendera Promosi', 'Bendera Partai', 'Bendera Event', 'Bendera Negara', 'Bendera Umbul-Umbul', 'Spanduk Custom', 'Banner Roll', 'X-Banner'].map(
              (item) => (
                <span key={`${i}-${item}`} className="font-display font-semibold text-sm text-white/70 uppercase tracking-widest">
                  ✦ {item}
                </span>
              )
            )
          )}
        </div>
      </div>
    </section>
  )
}
