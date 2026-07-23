// Practice 5: Full Next.js Dashboard
// Task: Build a dashboard with layout, multiple pages, API routes, and middleware.
// Concepts: Connecting all Next.js features (Routing, Layouts, APIs, Middleware, Server Components)

/*
Project Structure:

app/
  middleware.js                  (Protects /dashboard routes)
  layout.jsx                     (Root layout)
  page.jsx                       (Landing page, public)
  login/
    page.jsx                     (Login page, sets cookie)
  api/
    login/route.js               (API to set auth cookie)
    stats/route.js               (API providing dashboard stats)
  dashboard/
    layout.jsx                   (Dashboard sidebar + topbar)
    page.jsx                     (Dashboard overview, fetches stats)
    settings/page.jsx            (Settings page)
*/

// ============================================
// app/middleware.js
// ============================================
/*
import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  
  if (path.startsWith('/dashboard')) {
    const token = request.cookies.get('auth-token');
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  return NextResponse.next();
}

export const config = { matcher: ['/dashboard/:path*'] };
*/

// ============================================
// app/api/login/route.js
// ============================================
/*
import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, password } = await request.json();
  
  if (username === 'admin' && password === 'admin') {
    const response = NextResponse.json({ success: true });
    // Set a cookie that middleware will look for
    response.cookies.set('auth-token', 'valid-token-123', { path: '/' });
    return response;
  }
  
  return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
}
*/

// ============================================
// app/login/page.jsx (Client Component)
// ============================================
/*
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });
    
    if (res.ok) {
      router.push('/dashboard');
      router.refresh(); // Refresh to ensure middleware sees the new cookie
    } else {
      setError("Invalid credentials (use admin/admin)");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "100px auto" }}>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
*/

// ============================================
// app/dashboard/layout.jsx
// ============================================
/*
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside style={{ width: "250px", backgroundColor: "#222", color: "white", padding: "20px" }}>
        <h2>Dashboard</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
          <Link href="/dashboard" style={{ color: "white" }}>Overview</Link>
          <Link href="/dashboard/settings" style={{ color: "white" }}>Settings</Link>
          <Link href="/" style={{ color: "#aaa", marginTop: "40px" }}>Logout (Go Home)</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "40px", backgroundColor: "#f4f4f4" }}>
        {children}
      </main>
    </div>
  );
}
*/

// ============================================
// app/dashboard/page.jsx (Server Component)
// ============================================
/*
export default async function DashboardOverview() {
  // Mock fetch to internal API (or external)
  // const res = await fetch('http://localhost:3000/api/stats', { cache: 'no-store' });
  // const stats = await res.json();
  
  const stats = { users: 1540, revenue: 45000, active: 340 };

  return (
    <div>
      <h1>Overview</h1>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ background: "white", padding: "20px", borderRadius: "8px", flex: 1 }}>
          <h3>Users</h3>
          <p style={{ fontSize: "2rem", margin: 0 }}>{stats.users}</p>
        </div>
        <div style={{ background: "white", padding: "20px", borderRadius: "8px", flex: 1 }}>
          <h3>Revenue</h3>
          <p style={{ fontSize: "2rem", margin: 0 }}>${stats.revenue}</p>
        </div>
      </div>
    </div>
  );
}
*/
