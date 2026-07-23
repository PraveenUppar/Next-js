// Next.js Introduction
// Next.js is a React framework that adds server-side rendering, file-based routing, and more.

// ============================================
// Creating a Next.js Project
// ============================================

// npx create-next-app@latest my-app
// Options it asks:
//   TypeScript? No
//   ESLint? Yes
//   Tailwind CSS? No (or Yes if you prefer)
//   src/ directory? No
//   App Router? Yes (recommended)
//   Import alias? @/*

// cd my-app
// npm run dev  → opens http://localhost:3000

// ============================================
// Project Structure (App Router)
// ============================================

// my-app/
//   app/
//     layout.jsx    ← Root layout (wraps every page)
//     page.jsx      ← Home page (/)
//     globals.css   ← Global styles
//   public/          ← Static files (images, icons)
//   next.config.js   ← Next.js configuration
//   package.json

// ============================================
// app/page.jsx — Home Page
// ============================================

// This is the home page — renders at /
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>This is the home page.</p>
    </div>
  );
}

// ============================================
// app/layout.jsx — Root Layout
// ============================================

// Layout wraps ALL pages — good for navbar, footer, html/body tags

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <nav>
//           <a href="/">Home</a>
//           <a href="/about">About</a>
//         </nav>
//         <main>{children}</main>
//         <footer>© 2025</footer>
//       </body>
//     </html>
//   );
// }

// ============================================
// Key Differences from React
// ============================================

// 1. No React Router needed — routing is automatic based on file structure
//    app/page.jsx        → /
//    app/about/page.jsx  → /about
//    app/blog/page.jsx   → /blog

// 2. Components are Server Components by default (no hooks allowed!)
//    To use useState, useEffect, onClick → add "use client" at top

// 3. No index.js or main.jsx entry point — Next.js handles that

// 4. Images use <Image /> from next/image (optimized)
//    import Image from 'next/image';
//    <Image src="/photo.jpg" width={500} height={300} alt="Photo" />

// 5. Links use <Link /> from next/link (client-side navigation)
//    import Link from 'next/link';
//    <Link href="/about">About</Link>

// ============================================
// Server Component vs "use client"
// ============================================

// By default, ALL components in app/ are Server Components
// Server Components:
// ✅ Can fetch data directly (async/await)
// ✅ Can access server-side resources
// ❌ Cannot use hooks (useState, useEffect)
// ❌ Cannot use event handlers (onClick, onChange)

// To make a Client Component, add "use client" at the very first line:
// "use client";
// import { useState } from 'react';
// export default function Counter() {
//   const [count, setCount] = useState(0);
//   return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
// }

// ============================================
// Running the Dev Server
// ============================================

// npm run dev     → Development (with hot reload)
// npm run build   → Build for production
// npm start       → Start production server
