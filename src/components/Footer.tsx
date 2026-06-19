export default function Footer() {
  const year = new Date().getFullYear();

  const links = {
    Produk: [
      "Bendera Promosi",
      "Umbul-Umbul",
      "X-Banner",
      "Bendera Custom",
      "Bendera Merah Putih",
    ],
    Layanan: [
      "Cetak Ekspres",
      "Desain Gratis",
      "Pengiriman Nasional",
      "Konsultasi",
    ],
    Perusahaan: ["Tentang Kami", "Blog", "Karir", "Kontak"],
  };

  const socials = [
    {
      name: "fb",
      href: "https://facebook.com/yourpage",
    },
    {
      name: "ig",
      href: "https://instagram.com/yourpage",
    },
    {
      name: "tw",
      href: "https://x.com/yourpage",
    },
    {
      name: "yt",
      href: "https://youtube.com/@yourchannel",
    },
    {
      name: "tt",
      href: "https://www.tiktok.com/@pabrik.sablon.kis",
    },
  ];

  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <rect x="2" y="4" width="3" height="16" rx="1" />
                  <path d="M5 6h14l-3 5 3 5H5V6z" />
                </svg>
              </div>
              <span className="font-display font-bold text-lg">
                Cetak<span className="text-brand-red">Bendera</span>
              </span>
            </a>
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Jasa cetak bendera berkualitas tinggi dengan pengiriman cepat ke
              seluruh Indonesia. Harga terjangkau, hasil premium.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors text-white/60 hover:text-white text-xs font-display font-bold uppercase"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-display font-bold text-white text-sm mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-body text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-sm">
            © {year} CetakBendera Pro. Hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            {["Kebijakan Privasi", "Syarat & Ketentuan", "Sitemap"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-body text-white/30 hover:text-white/60 text-sm transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
