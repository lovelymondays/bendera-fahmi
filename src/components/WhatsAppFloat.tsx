import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '6281234567890' // Ganti dengan nomor WhatsApp kamu

export default function WhatsAppFloat() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20ingin%20memesan%20bendera.%20Bisa%20info%20lebih%20lanjut?`

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-2xl shadow-green-500/40 hover:bg-green-600 transition-all hover:scale-105 group"
    >
      <MessageCircle size={22} className="fill-white" />
      <span className="font-display font-semibold text-sm max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        Chat Sekarang
      </span>
    </a>
  )
}
