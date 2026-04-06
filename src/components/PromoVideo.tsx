import { Play } from 'lucide-react'
import { useState } from 'react'

// ============================================================
// 🎬 SECTION VIDEO PROMOSI
// Ganti VIDEO_URL ke URL video YouTube embed atau path file video
// Contoh YouTube: 'https://www.youtube.com/embed/ID_VIDEO_KAMU'
// Contoh file lokal: '/video/promo.mp4'
// Set USE_YOUTUBE = true jika pakai YouTube embed
// ============================================================
const USE_YOUTUBE = false
const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/GANTI_ID_VIDEO_KAMU'
const LOCAL_VIDEO_SRC = '/video/promo-bendera.mp4'
const VIDEO_THUMBNAIL = '/images/video-thumbnail.jpg'   // Gambar thumbnail sebelum play
// ============================================================

export default function PromoVideo() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 via-transparent to-brand-red/5" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-brand-red font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Promo
          </p>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white">
            Lihat Sendiri <span className="text-brand-red">Kualitasnya</span>
          </h2>
          <p className="text-white/50 font-body mt-4 max-w-md mx-auto">
            Tonton bagaimana kami memproduksi bendera berkualitas tinggi untuk klien kami.
          </p>
        </div>

        {/* Video container */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-video bg-white/5">
          {USE_YOUTUBE && playing ? (
            /* YouTube embed */
            <iframe
              src={`${YOUTUBE_EMBED_URL}?autoplay=1`}
              title="Video Promo Cetak Bendera"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : !USE_YOUTUBE && playing ? (
            /* Local video */
            <video
              src={LOCAL_VIDEO_SRC}
              autoPlay
              controls
              className="w-full h-full object-cover"
            />
          ) : (
            /* Thumbnail + play button */
            <>
              <img
                src={VIDEO_THUMBNAIL}
                alt="Video promo cetak bendera"
                className="w-full h-full object-cover"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).style.display = 'none'
                }}
              />
              {/* Placeholder overlay jika thumbnail belum diisi */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 to-brand-dark/70 flex flex-col items-center justify-center">
                <button
                  onClick={() => setPlaying(true)}
                  className="w-20 h-20 rounded-full bg-brand-red flex items-center justify-center hover:scale-110 transition-transform shadow-xl shadow-brand-red/40 mb-4"
                  aria-label="Putar video promo"
                >
                  <Play size={26} className="text-white fill-white ml-1.5" />
                </button>
                <p className="font-display font-semibold text-white text-lg">Putar Video Promo</p>
                <p className="font-body text-white/40 text-sm mt-1">
                  Ganti dengan video atau thumbnail kamu di <code className="text-brand-red">PromoVideo.tsx</code>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
