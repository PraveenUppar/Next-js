// Styling and Images in Next.js
// Next.js provides built-in solutions for CSS, images, and fonts.

import Image from "next/image";
import Link from "next/link";

// ============================================
// 1. CSS Modules (Recommended)
// ============================================

// Create: app/page.module.css
// .title {
//   color: #333;
//   font-size: 2rem;
// }
// .card {
//   padding: 20px;
//   border: 1px solid #eee;
//   border-radius: 8px;
// }

// Import and use:
// import styles from './page.module.css';
//
// export default function Home() {
//   return (
//     <div>
//       <h1 className={styles.title}>Hello</h1>
//       <div className={styles.card}>Card content</div>
//     </div>
//   );
// }

// ============================================
// 2. Global Styles
// ============================================

// app/globals.css — imported in app/layout.jsx
// This CSS applies to ALL pages

// app/layout.jsx:
// import './globals.css';
//
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }

// ============================================
// 3. next/image — Optimized Images
// ============================================

// next/image automatically:
// - Optimizes images (WebP/AVIF conversion)
// - Lazy loads images (loads when visible)
// - Prevents layout shift (reserves space)
// - Serves responsive sizes

// Local image (from public/ folder)
function LocalImage() {
  return (
    <Image
      src="/hero.jpg"          // File in public/hero.jpg
      width={800}
      height={400}
      alt="Hero banner"
      priority                 // Load immediately (for above-the-fold images)
    />
  );
}

// Remote/external image (needs config)
function RemoteImage() {
  return (
    <Image
      src="https://picsum.photos/800/400"
      width={800}
      height={400}
      alt="Random photo"
    />
  );
}

// For remote images, add domains to next.config.js:
// module.exports = {
//   images: {
//     remotePatterns: [
//       { protocol: 'https', hostname: 'picsum.photos' },
//       { protocol: 'https', hostname: '*.example.com' },
//     ],
//   },
// };

// Fill mode (cover the container)
function FillImage() {
  return (
    <div style={{ position: "relative", width: "100%", height: "300px" }}>
      <Image
        src="/banner.jpg"
        fill                  // Fills the parent container
        style={{ objectFit: "cover" }}
        alt="Banner"
      />
    </div>
  );
}

// ============================================
// 4. next/font — Optimized Fonts
// ============================================

// Next.js automatically optimizes fonts (no layout shift!)

// import { Inter, Roboto } from 'next/font/google';
//
// const inter = Inter({ subsets: ['latin'] });
// const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });
//
// // Use in layout.jsx
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {children}
//       </body>
//     </html>
//   );
// }

// Use different fonts for different elements:
// <h1 className={roboto.className}>Roboto Heading</h1>
// <p className={inter.className}>Inter paragraph</p>

// ============================================
// 5. next/link — Optimized Navigation
// ============================================

// Link component for client-side navigation (no full page reload)
// It pre-fetches linked pages in the background!

function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog" prefetch={false}>Blog (no prefetch)</Link>

      {/* With custom styling */}
      <Link href="/contact" className="nav-link" style={{ color: "blue" }}>
        Contact
      </Link>

      {/* External link — use <a> tag */}
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </nav>
  );
}

// ============================================
// Summary
// ============================================

// | Feature      | What to Use         | Why                              |
// |-------------|---------------------|----------------------------------|
// | Scoped CSS  | CSS Modules (.module.css) | No class name conflicts   |
// | Global CSS  | globals.css         | Base styles, resets              |
// | Images      | next/image          | Auto optimization, lazy loading  |
// | Fonts       | next/font           | No layout shift, self-hosted     |
// | Navigation  | next/link           | Client-side nav, prefetching     |

export default function Page() {
  return (
    <div>
      <h1>Styling and Images</h1>
      <LocalImage />
    </div>
  );
}
