// Routing in Next.js
// Next.js uses FILE-BASED routing — no React Router needed!
// The file structure inside app/ determines your routes.

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// ============================================
// File-Based Routing
// ============================================

// Folder structure → URL routes:
// app/page.jsx                → /
// app/about/page.jsx          → /about
// app/contact/page.jsx        → /contact
// app/blog/page.jsx           → /blog
// app/blog/first-post/page.jsx → /blog/first-post

// ONLY page.jsx files create routes!
// Other files (components, utils) in the folder are NOT routes.

// ============================================
// app/page.jsx — Home Page (/)
// ============================================

export default function Home() {
  return <h1>Home Page</h1>;
}

// ============================================
// app/about/page.jsx — About Page (/about)
// ============================================

// export default function About() {
//   return <h1>About Page</h1>;
// }

// ============================================
// Link Component (Client-side Navigation)
// ============================================

// Use Link instead of <a> tags for navigation (no full page reload)

function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}

// ============================================
// Dynamic Routes — [param]
// ============================================

// Folder name in brackets → dynamic segment
// app/blog/[slug]/page.jsx → /blog/hello-world, /blog/my-post, /blog/anything

// app/blog/[slug]/page.jsx:
// export default function BlogPost({ params }) {
//   return <h1>Blog Post: {params.slug}</h1>;
// }

// app/users/[id]/page.jsx → /users/1, /users/2, /users/abc
// export default function UserProfile({ params }) {
//   return <h1>User ID: {params.id}</h1>;
// }

// ============================================
// Nested Dynamic Routes
// ============================================

// app/shop/[category]/[product]/page.jsx
// → /shop/electronics/laptop
// → /shop/clothing/shirt

// export default function Product({ params }) {
//   return (
//     <div>
//       <p>Category: {params.category}</p>
//       <p>Product: {params.product}</p>
//     </div>
//   );
// }

// ============================================
// Route Groups — (groupName)
// ============================================

// Parentheses in folder names create "groups" — they DON'T affect the URL
// Useful for organizing routes or applying different layouts

// app/(marketing)/page.jsx     → / (not /marketing!)
// app/(marketing)/about/page.jsx → /about
// app/(dashboard)/settings/page.jsx → /settings

// ============================================
// usePathname — Get Current Path
// ============================================

// "use client";
// import { usePathname } from 'next/navigation';

// function ActiveLink({ href, children }) {
//   const pathname = usePathname();
//   const isActive = pathname === href;
//
//   return (
//     <Link href={href} style={{ fontWeight: isActive ? 'bold' : 'normal' }}>
//       {children}
//     </Link>
//   );
// }

// ============================================
// useRouter — Programmatic Navigation
// ============================================

// "use client";
// import { useRouter } from 'next/navigation';

// function LoginButton() {
//   const router = useRouter();
//
//   const handleLogin = () => {
//     // ... login logic
//     router.push('/dashboard');      // Navigate to dashboard
//     router.replace('/dashboard');   // Navigate (no back button)
//     router.back();                  // Go back
//     router.refresh();              // Refresh current page
//   };
//
//   return <button onClick={handleLogin}>Login</button>;
// }

// ============================================
// not-found.jsx — 404 Page
// ============================================

// app/not-found.jsx — shown when route doesn't match
// export default function NotFound() {
//   return (
//     <div>
//       <h1>404 — Page Not Found</h1>
//       <Link href="/">Go Home</Link>
//     </div>
//   );
// }

// ============================================
// Routing Summary
// ============================================

// page.jsx        → Creates a route
// layout.jsx      → Wraps child routes (persistent UI)
// loading.jsx     → Loading UI for the segment
// error.jsx       → Error UI for the segment
// not-found.jsx   → 404 page
// [param]         → Dynamic route segment
// (group)         → Route group (no URL impact)
// [...slug]       → Catch-all route
// [[...slug]]     → Optional catch-all route
