# Ibrahim Abdo — Portfolio

Modern Next.js 14 portfolio for **Ibrahim Abdo**, Project Manager & Digital Marketing Specialist.
Bold creative marketing aesthetic — vibrant gradients (orange → pink → violet), animated hero, glassmorphism cards, and a CV-driven content layer.

---

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with custom brand palette
- **Framer Motion** for scroll & entry animations
- **Lucide Icons**
- **Google Fonts** (Inter + Space Grotesk)

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build
npm run start
```

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Composes all sections
│   └── globals.css       # Theme, gradients, animations
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── BrandsMarquee.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── SectionHeading.tsx
├── lib/
│   └── data.ts           # ALL content edits live here
├── public/
│   ├── CV-Ibrahim-Abdo.pdf
│   └── profile.jpg       # ⚠️ ADD THIS — see below
└── tailwind.config.ts
```

---

## ⚠️ Important: Add Profile Photo

Replace the SVG placeholder with the real photo:

1. Drop a square/4:5 photo (recommended: **1200×1500 px**, JPG/WEBP) at:
   ```
   public/profile.jpg
   ```
2. Open `components/Hero.tsx` and **replace `<PortraitPlaceholder />`** with:
   ```tsx
   <img
     src="/profile.jpg"
     alt="Ibrahim Abdo"
     className="absolute inset-0 h-full w-full object-cover"
   />
   ```
3. Delete the `PortraitPlaceholder` function at the bottom of the file.

---

## Edit Content

All copy lives in **`lib/data.ts`** — profile, stats, experience timeline, skills, languages, education, certifications, and the brand marquee. Update once, the whole site reflects it.

Update social links inside `profile.social` (LinkedIn, Instagram, Facebook, WhatsApp).

---

## Deploy to Vercel (Free)

```bash
npm i -g vercel
vercel
```

Or push the project to GitHub and import it at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js. Free tier is enough for a portfolio.

---

## Customization Notes

- **Brand colors** → `tailwind.config.ts` (`theme.extend.colors.brand`)
- **Gradient direction** → `bg-grad-primary` utility in same file
- **Section spacing** → each section uses `py-28` — tweak per taste
- **Animations** → tuned via Framer Motion `initial / whileInView / transition`

---

## Contact Form

The form opens the user's mail client via `mailto:`. To upgrade to a real backend without a server, plug in **Formspree** or **EmailJS** — replace the `handleSubmit` body in `components/Contact.tsx`.

---

Built for Ibrahim Abdo · 2026
