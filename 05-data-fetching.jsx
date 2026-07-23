// Data Fetching in Next.js
// In the App Router, Server Components can fetch data directly with async/await.
// No useEffect, no loading state management — Next.js handles it!

// ============================================
// Fetching in Server Components (simplest!)
// ============================================

// Just make the component async and use await
export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

// Compare with React (useEffect):
// In React, you'd need: useState, useEffect, loading state, error state, async function
// In Next.js Server Component: just await!

// ============================================
// Caching Behavior (fetch options)
// ============================================

// Next.js extends fetch() with caching options

// 1. Default — Static (cached at build time, like SSG)
// const res = await fetch('https://api.example.com/data');
// Data is fetched ONCE at build time and cached forever

// 2. No Cache — Dynamic (fetched on every request, like SSR)
// const res = await fetch('https://api.example.com/data', {
//   cache: 'no-store',
// });
// Data is fetched fresh on EVERY page visit

// 3. Revalidation — ISR (re-fetches after X seconds)
// const res = await fetch('https://api.example.com/data', {
//   next: { revalidate: 60 },  // Re-fetch every 60 seconds
// });
// Data is cached but re-generated periodically

// ============================================
// Static Generation (Default Caching)
// ============================================

// By default, data is statically generated (cached)
// Best for: blog posts, product listings, documentation

async function BlogPage() {
  // This fetch is cached — page is generated at build time
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts = await res.json();

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}

// ============================================
// Dynamic Rendering (No Cache)
// ============================================

// Use cache: 'no-store' for data that changes frequently

async function DashboardPage() {
  // Fresh data on every request
  const res = await fetch("https://api.example.com/stats", {
    cache: "no-store",
  });
  const stats = await res.json();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total Users: {stats.users}</p>
      <p>Revenue: ${stats.revenue}</p>
    </div>
  );
}

// ============================================
// Revalidation (ISR — Incremental Static Regeneration)
// ============================================

// Page is static BUT re-generates after the revalidate period

async function ProductsPage() {
  const res = await fetch("https://api.example.com/products", {
    next: { revalidate: 3600 }, // Re-fetch every 1 hour (3600 seconds)
  });
  const products = await res.json();

  return (
    <div>
      <h1>Products</h1>
      {/* Products update every hour without rebuilding */}
    </div>
  );
}

// ============================================
// Multiple Fetches (Parallel)
// ============================================

// Fetch multiple resources in parallel for better performance

async function DashboardParallel() {
  // Start all fetches at the same time (don't await one by one)
  const [usersRes, postsRes, commentsRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5"),
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=5"),
  ]);

  const users = await usersRes.json();
  const posts = await postsRes.json();
  const comments = await commentsRes.json();

  return (
    <div>
      <h2>Users: {users.length}</h2>
      <h2>Posts: {posts.length}</h2>
      <h2>Comments: {comments.length}</h2>
    </div>
  );
}

// ============================================
// Error Handling
// ============================================

async function SafeFetch() {
  try {
    const res = await fetch("https://api.example.com/data");
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    return <div>{/* Render data */}</div>;
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
}

// Or use error.jsx for automatic error handling (see 03-layouts.jsx)

// ============================================
// Summary
// ============================================

// | Method                      | When to Use                        |
// |-----------------------------|------------------------------------|
// | Default (cached)            | Static content (blogs, docs)       |
// | cache: 'no-store'           | Real-time data (dashboards, feeds) |
// | next: { revalidate: N }     | Semi-static (products, news)       |
// | Promise.all()               | Multiple fetches in parallel       |
