// Layouts in Next.js
// Layouts are shared UI that wraps pages. They persist across navigation (no re-mount).

import Link from "next/link";

// ============================================
// Root Layout — app/layout.jsx (Required!)
// ============================================

// Every Next.js app MUST have a root layout
// It wraps ALL pages and provides <html> and <body> tags

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2025 My App</p>
        </footer>
      </body>
    </html>
  );
}

// children = the page content (whatever page.jsx renders)
// The nav and footer persist across ALL page navigations

// ============================================
// Nested Layouts
// ============================================

// You can add layout.jsx inside any folder for nested layouts

// app/layout.jsx          → Root layout (wraps everything)
// app/dashboard/layout.jsx → Dashboard layout (wraps only /dashboard/*)

// app/dashboard/layout.jsx:
// export default function DashboardLayout({ children }) {
//   return (
//     <div style={{ display: 'flex' }}>
//       <aside>
//         <nav>
//           <Link href="/dashboard">Overview</Link>
//           <Link href="/dashboard/settings">Settings</Link>
//           <Link href="/dashboard/profile">Profile</Link>
//         </nav>
//       </aside>
//       <section style={{ flex: 1 }}>
//         {children}
//       </section>
//     </div>
//   );
// }

// Result:
// /dashboard          → RootLayout > DashboardLayout > DashboardHome
// /dashboard/settings → RootLayout > DashboardLayout > Settings
// /dashboard/profile  → RootLayout > DashboardLayout > Profile
// /about              → RootLayout > About (no DashboardLayout!)

// ============================================
// template.jsx vs layout.jsx
// ============================================

// layout.jsx:
// - Persists across navigation (does NOT re-mount)
// - State is preserved when navigating between child pages
// - Used for: navbars, sidebars, persistent UI

// template.jsx:
// - Re-mounts on every navigation (creates new instance)
// - State resets when navigating
// - Used for: animations on enter, per-page logging, resetting forms

// app/dashboard/template.jsx:
// export default function DashboardTemplate({ children }) {
//   // This component re-renders on every navigation within /dashboard/*
//   console.log("Template mounted!");
//   return <div className="fade-in">{children}</div>;
// }

// ============================================
// Metadata — <head> Management
// ============================================

// Static metadata (in any page.jsx or layout.jsx)
// export const metadata = {
//   title: "My App",
//   description: "A Next.js application",
//   keywords: ["next.js", "react", "web"],
// };

// Page-specific metadata (overrides parent)
// app/about/page.jsx:
// export const metadata = {
//   title: "About Us — My App",
//   description: "Learn more about our company",
// };

// Dynamic metadata (based on params or data)
// export async function generateMetadata({ params }) {
//   const product = await getProduct(params.id);
//   return {
//     title: product.name,
//     description: product.description,
//   };
// }

// ============================================
// loading.jsx — Loading UI
// ============================================

// Place loading.jsx in a route folder — shows while the page is loading

// app/dashboard/loading.jsx:
// export default function Loading() {
//   return (
//     <div className="loading-spinner">
//       <p>Loading dashboard...</p>
//     </div>
//   );
// }

// This uses React Suspense under the hood
// While page.jsx is fetching data, loading.jsx is shown automatically

// ============================================
// error.jsx — Error UI
// ============================================

// Place error.jsx in a route folder — shown when an error occurs in that segment

// "use client"; // Error components MUST be client components!
// export default function Error({ error, reset }) {
//   return (
//     <div>
//       <h2>Something went wrong!</h2>
//       <p>{error.message}</p>
//       <button onClick={() => reset()}>Try Again</button>
//     </div>
//   );
// }

// error.jsx catches errors in the page and its children
// The reset() function re-renders the error boundary

// ============================================
// Special Files Summary
// ============================================

// layout.jsx    → Shared persistent UI (navbar, footer, sidebar)
// template.jsx  → Shared UI that re-mounts on every navigation
// page.jsx      → The actual page content (creates the route)
// loading.jsx   → Loading UI (shown while page loads)
// error.jsx     → Error UI (shown when errors occur)
// not-found.jsx → 404 page
