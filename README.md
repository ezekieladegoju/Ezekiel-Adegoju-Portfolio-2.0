# Ezekiel Adegoju — Full-Stack Engineer Portfolio

A modern, high-performance portfolio website built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Motion**. Designed with an editorial dark aesthetic, subtle interactive micro-animations, smooth parallax scrolling, and full responsive layout support across mobile, tablet, and desktop viewports.

---

## ✨ Features

- **Editorial Visual Design**: High-contrast dark theme with balanced typography, refined accents, and custom pointer cursor physics.
- **Fluid Micro-Interactions**: Framer Motion layout animations, counting statistics, animated work process timeline, and interactive project showcase modals.
- **Responsive Architecture**: Desktop multi-column parallax layout paired with a mobile-optimized, single-column top-to-bottom stack.
- **Native Document Head / SEO**: Integrated metadata management covering Open Graph previews, Twitter cards, and search engine optimization.
- **Interactive Project Showcase**: Detailed breakdowns of featured client applications, tech stacks, and live links.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Motion (Framer Motion)](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ or 20+ recommended)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ezekieladegoju/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example environment configuration:
   ```bash
   cp .env.example .env
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## ⚙️ Environment Variables

The project includes a `.env.example` file documenting optional configuration parameters:

| Variable | Description | Default |
| :--- | :--- | :--- |
| `APP_URL` | Canonical base URL where the application is hosted | `http://localhost:3000` |
| `GEMINI_API_KEY` | Optional API key for Gemini features if backend AI services are enabled | — |

---

## 📦 Build & Production

To generate an optimized, static production build:

```bash
npm run build
```

The compiled assets will be written to the `dist/` directory ready for deployment to platforms such as Vercel, Netlify, Cloudflare Pages, or container runtimes.

To preview the production build locally:

```bash
npm run preview
```

To validate TypeScript types across the project:

```bash
npm run lint
```

---

## 🧹 Git Tracking Cleanup

If transitioning from earlier revisions that tracked generator artifacts, ensure they are untracked in git history:

```bash
# Remove cached artifacts from git index without deleting local files
git rm -r --cached assets/.aistudio metadata.json 2>/dev/null || true
git add .gitignore README.md
git commit -m "chore: purge generator artifacts and update repository configuration"
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
