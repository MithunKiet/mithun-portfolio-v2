# Mithun Kumar — Portfolio v2

🚀 A premium, modern developer portfolio built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **TypeScript**.

[![Live Demo](https://img.shields.io/badge/Live-Demo-00bcd4?style=for-the-badge&logo=vercel)](https://mithun-portfolio-v2.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-MithunKiet-181717?style=for-the-badge&logo=github)](https://github.com/MithunKiet)

---

## ✨ Features

- **Dark-first, minimal luxury design** — inspired by Linear, Vercel & Raycast
- **Space Grotesk + Inter typography** — geometric, modern, highly legible
- **Smooth animations** — Framer Motion scroll reveals, typing effect, micro-interactions
- **Pill-style navbar** — with animated active section indicator using IntersectionObserver
- **Infinite scrolling skills marquee** — auto-pausing on hover
- **GitHub API integration** — live project cards with language filters
- **Fully responsive** — mobile, tablet, and desktop optimized
- **Light & dark mode** — seamless theme toggle with next-themes
- **Gradient mesh background** — subtle radial gradients with noise overlay
- **Glassmorphism cards** — frosted glass effects with border shimmer on hover

## 🛠 Tech Stack

| Category     | Technologies                                      |
|-------------|---------------------------------------------------|
| Framework   | Next.js 14, React 18, TypeScript                  |
| Styling     | Tailwind CSS 3, CSS Variables (HSL tokens)         |
| Animations  | Framer Motion                                      |
| Icons       | Lucide React                                       |
| Theme       | next-themes                                        |
| Scrolling   | react-scroll                                       |
| Deployment  | Vercel                                             |

## 📂 Project Structure

```
├── app/
│   ├── globals.css          # Design system tokens & utilities
│   ├── layout.tsx           # Root layout with fonts & providers
│   ├── page.tsx             # Main page composition
│   ├── loading.tsx          # Loading spinner
│   └── sitemap.ts           # SEO sitemap
├── components/
│   ├── Navbar.tsx           # Sticky pill navigation
│   ├── Footer.tsx           # Minimal footer
│   ├── CustomCursor.tsx     # Custom cursor effect
│   ├── ScrollProgressBar.tsx
│   ├── ScrollToTop.tsx
│   ├── ThemeProvider.tsx
│   └── sections/
│       ├── Hero.tsx         # Hero with typing effect
│       ├── About.tsx        # Bento grid about section
│       ├── Skills.tsx       # Marquee skills display
│       ├── Experience.tsx   # Timeline experience
│       ├── Projects.tsx     # GitHub API project cards
│       └── Contact.tsx      # CTA contact section
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/MithunKiet/mithun-portfolio-v2.git

# Navigate to the project
cd mithun-portfolio-v2

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## 📄 License

MIT © [Mithun Kumar](https://github.com/MithunKiet)
