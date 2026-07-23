// Practice 1: Static Pages with Layout
// Task: Create a basic multi-page site with a shared layout using App Router.
// Concepts: File-based routing, layout.jsx, page.jsx, next/link

import Link from "next/link";

// ============================================
// app/layout.jsx
// ============================================

export function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
        <header style={{
          backgroundColor: "#333",
          color: "white",
          padding: "1rem",
          display: "flex",
          gap: "1rem"
        }}>
          <strong>My Next Site</strong>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link href="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
            <Link href="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
            <Link href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
          </nav>
        </header>

        <main style={{ padding: "2rem", minHeight: "80vh" }}>
          {children}
        </main>

        <footer style={{
          backgroundColor: "#f4f4f4",
          padding: "1rem",
          textAlign: "center",
          borderTop: "1px solid #ddd"
        }}>
          <p>© {new Date().getFullYear()} Next.js Practice</p>
        </footer>
      </body>
    </html>
  );
}

// ============================================
// app/page.jsx
// ============================================

export default function Home() {
  return (
    <div>
      <h1>🏠 Welcome Home</h1>
      <p>This is the main page rendered at the root URL (/).</p>
      <p>Notice how the header and footer (from layout.jsx) surround this content!</p>
    </div>
  );
}

// ============================================
// app/about/page.jsx
// ============================================

export function About() {
  return (
    <div>
      <h1>ℹ️ About Us</h1>
      <p>This page is rendered because of the folder structure: app/about/page.jsx.</p>
    </div>
  );
}

// ============================================
// app/contact/page.jsx
// ============================================

export function Contact() {
  return (
    <div>
      <h1>📬 Contact Us</h1>
      <p>Reach out to us at contact@example.com.</p>
    </div>
  );
}
