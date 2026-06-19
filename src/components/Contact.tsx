import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

// ============================================================
// 🔧 GANTI INFORMASI KONTAK DI SINI
// ============================================================
const PHONE = "+62 812-1111-1055";
const WHATSAPP_NUMBER = "6281211111055"; // Format tanpa + dan tanpa spasi
const EMAIL = "pabrikbenderapartaipartai@gmail.com";
const ADDRESS = "Desa samprok kec pangaur , kabupaten bogor, jawa barat 16370";
const HOURS = "Senin – Sabtu, 08.00 – 17.00 WIB";
// ============================================================

export default function Contact() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20ingin%20memesan%20bendera.%20Bisa%20info%20lebih%20lanjut?`;

  return (
    <section
      id="kontak"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-brand-red/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* CTA banner */}
        <div className="rounded-2xl bg-brand-red p-10 md:p-14 mb-16 relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="dots"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="10" cy="10" r="1.5" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          <div className="relative z-10">
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-white mb-4">
              Siap Cetak Bendera Impianmu?
            </h2>
            <p className="font-body text-white/80 text-lg max-w-lg mx-auto mb-8">
              Konsultasi gratis, respon cepat, harga terbaik. Hubungi kami
              sekarang!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand-red font-display font-bold px-8 py-3.5 rounded-lg hover:bg-brand-cream transition-all hover:gap-3 group"
              >
                <MessageCircle size={18} />
                Chat WhatsApp
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 border-2 border-white text-white font-display font-bold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all"
              >
                <Phone size={18} />
                Telepon Kami
              </a>
            </div>
          </div>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: PHONE,
              href: waLink,
            },
            {
              icon: Phone,
              label: "Telepon",
              value: PHONE,
              href: `tel:${PHONE.replace(/\s/g, "")}`,
            },
            {
              icon: Mail,
              label: "Email",
              value: EMAIL,
              href: `mailto:${EMAIL}`,
            },
            { icon: MapPin, label: "Alamat", value: ADDRESS, href: "#" },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-red/20 flex items-center justify-center mb-3 group-hover:bg-brand-red transition-colors">
                  <Icon
                    size={18}
                    className="text-brand-red group-hover:text-white transition-colors"
                  />
                </div>
                <div className="font-display font-semibold text-white/60 text-xs mb-1">
                  {c.label}
                </div>
                <div className="font-body text-white text-sm leading-relaxed">
                  {c.value}
                </div>
              </a>
            );
          })}
        </div>

        {/* Hours */}
        <div className="mt-5 bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-3">
          <Clock size={18} className="text-brand-red flex-shrink-0" />
          <div>
            <span className="font-display font-semibold text-white/60 text-xs">
              Jam Operasional:{" "}
            </span>
            <span className="font-body text-white text-sm">{HOURS}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
