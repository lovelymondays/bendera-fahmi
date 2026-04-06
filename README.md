# 🚩 CetakBendera Pro — Landing Page

Website promosi jasa cetak bendera berbasis **React + TypeScript + Tailwind CSS + Vite**.

---

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js ≥ 18
- pnpm (`npm install -g pnpm`)

### Install & Run

```bash
pnpm install
pnpm dev
```

Buka http://localhost:5173

### Build Production

```bash
pnpm build
pnpm preview
```

---

## 🎬 Cara Menambahkan Video / Gambar Promo

### 1. Hero Section (src/components/Hero.tsx)
Cari bagian komentar `🎯 GANTI VIDEO/GAMBAR DI SINI` di atas komponen:

```ts
const USE_VIDEO = false           // true = tampilkan video, false = tampilkan gambar
const VIDEO_SRC = '/video/promo-bendera.mp4'   // Path video kamu
const HERO_IMAGE = '/images/hero-bendera.jpg'   // Path gambar hero kamu
```

**Untuk gambar**: taruh file di folder `public/images/` lalu ubah `HERO_IMAGE`.
**Untuk video**: taruh file di folder `public/video/` lalu ubah `VIDEO_SRC` dan set `USE_VIDEO = true`.

---

### 2. Section Video Promo (src/components/PromoVideo.tsx)
Cari bagian komentar `🎬 SECTION VIDEO PROMOSI`:

```ts
const USE_YOUTUBE = false                                     // true = embed YouTube
const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/ID' // Ganti ID video YouTube
const LOCAL_VIDEO_SRC = '/video/promo-bendera.mp4'           // Atau pakai video lokal
const VIDEO_THUMBNAIL = '/images/video-thumbnail.jpg'        // Gambar thumbnail
```

**YouTube**: Set `USE_YOUTUBE = true` dan ganti `YOUTUBE_EMBED_URL` dengan embed URL dari YouTube.
**Video lokal**: Taruh di `public/video/` dan set path `LOCAL_VIDEO_SRC`.

---

### 3. Gambar Produk (src/components/Products.tsx)
Ganti properti `image` pada setiap item produk:

```ts
{
  name: 'Bendera Promosi',
  image: '/images/bendera-promosi.jpg',   // ← Ganti ini
  ...
}
```

Taruh semua gambar produk di folder `public/images/`.

---

## 📞 Mengubah Informasi Kontak

Edit file `src/components/Contact.tsx`:

```ts
const PHONE = '+62 812-XXXX-XXXX'
const WHATSAPP_NUMBER = '628XXXXXXXXX'   // Format: 62 + nomor tanpa 0 di depan
const EMAIL = 'kamu@domain.com'
const ADDRESS = 'Jl. Alamat Kamu...'
const HOURS = 'Senin – Sabtu, 08.00 – 17.00 WIB'
```

Juga ubah di `src/components/WhatsAppFloat.tsx`:
```ts
const WHATSAPP_NUMBER = '628XXXXXXXXX'
```

---

## 🎨 Mengubah Warna / Tema

Edit `tailwind.config.ts`:

```ts
colors: {
  brand: {
    red: '#E8251A',     // Warna utama merah
    dark: '#0F0F0F',    // Background gelap
    cream: '#F5F0E8',   // Warna cream / light
    gold: '#D4A853',    // Warna aksen emas
  },
},
```

---

## 📁 Struktur File

```
cetak-bendera/
├── public/
│   ├── favicon.svg
│   ├── images/          ← Taruh gambar di sini
│   └── video/           ← Taruh video di sini
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx          ← Hero + gambar/video utama
│   │   ├── Features.tsx      ← Keunggulan
│   │   ├── Products.tsx      ← Grid produk
│   │   ├── Process.tsx       ← Cara kerja
│   │   ├── PromoVideo.tsx    ← Section video promo
│   │   ├── Pricing.tsx       ← Tabel harga
│   │   ├── Testimonials.tsx  ← Testimoni
│   │   ├── Contact.tsx       ← Kontak & CTA
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloat.tsx ← Tombol WA mengambang
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html            ← SEO meta tags — ubah title, description, dll
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🔍 SEO

Meta tags sudah tersedia di `index.html`. Sesuaikan:
- `<title>` — judul halaman
- `<meta name="description">` — deskripsi untuk Google
- `<meta name="keywords">` — kata kunci target
- `<link rel="canonical">` — URL domain kamu
- Schema.org JSON-LD — data bisnis terstruktur

---

## 📦 Deploy

Rekomendasi platform deploy gratis / murah:
- **Vercel**: `vercel deploy`
- **Netlify**: drag & drop folder `dist/`
- **Cloudflare Pages**: connect git repo

Build output ada di folder `dist/` setelah `pnpm build`.
