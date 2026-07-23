// Dynamic Routes in Next.js
// Dynamic routes let you create pages for dynamic content like blog posts, user profiles, products.

import Link from "next/link";

// ============================================
// Dynamic Segments — [param]
// ============================================

// Folder name in brackets creates a dynamic segment
// app/blog/[slug]/page.jsx → matches /blog/hello-world, /blog/my-post, etc.

// app/blog/[slug]/page.jsx:
export default function BlogPost({ params }) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      <Link href="/blog">← Back to Blog</Link>
    </div>
  );
}

// URL: /blog/my-first-post  → params = { slug: "my-first-post" }
// URL: /blog/react-tips     → params = { slug: "react-tips" }

// ============================================
// Fetching Data with Dynamic Params
// ============================================

// app/users/[id]/page.jsx:
// export default async function UserPage({ params }) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
//   const user = await res.json();
//
//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <p>Email: {user.email}</p>
//       <p>Phone: {user.phone}</p>
//       <p>Website: {user.website}</p>
//     </div>
//   );
// }

// ============================================
// generateStaticParams — Pre-generate Pages at Build Time
// ============================================

// For static generation, tell Next.js which dynamic pages to pre-build

// app/blog/[slug]/page.jsx:
// export async function generateStaticParams() {
//   const res = await fetch('https://api.example.com/posts');
//   const posts = await res.json();
//
//   // Return array of params objects — one per page
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }
//
// // This generates:
// // /blog/hello-world
// // /blog/react-tips
// // /blog/nextjs-guide
// // ... one page for each post

// app/users/[id]/page.jsx:
// export async function generateStaticParams() {
//   return [
//     { id: '1' },
//     { id: '2' },
//     { id: '3' },
//   ];
// }
// Pre-generates: /users/1, /users/2, /users/3

// ============================================
// Catch-All Segments — [...slug]
// ============================================

// Three dots = catch ALL remaining segments as an array
// app/docs/[...slug]/page.jsx

// Matches:
// /docs/getting-started        → params = { slug: ["getting-started"] }
// /docs/api/auth               → params = { slug: ["api", "auth"] }
// /docs/api/auth/login          → params = { slug: ["api", "auth", "login"] }
// ❌ /docs                      → Does NOT match (at least one segment required)

// export default function DocsPage({ params }) {
//   const path = params.slug.join(' / ');
//   return <h1>Docs: {path}</h1>;
// }

// ============================================
// Optional Catch-All — [[...slug]]
// ============================================

// Double brackets = OPTIONAL catch-all (also matches the root)
// app/docs/[[...slug]]/page.jsx

// Matches:
// /docs                         → params = { slug: undefined } or { slug: [] }
// /docs/getting-started         → params = { slug: ["getting-started"] }
// /docs/api/auth                → params = { slug: ["api", "auth"] }

// export default function DocsPage({ params }) {
//   if (!params.slug) {
//     return <h1>Docs Home</h1>;
//   }
//   return <h1>Docs: {params.slug.join(' / ')}</h1>;
// }

// ============================================
// Blog Example — Listing + Detail Pages
// ============================================

// app/blog/page.jsx — Blog listing
// export default async function BlogList() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
//   const posts = await res.json();
//
//   return (
//     <div>
//       <h1>Blog</h1>
//       {posts.map(post => (
//         <div key={post.id}>
//           <Link href={`/blog/${post.id}`}>
//             <h2>{post.title}</h2>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// app/blog/[id]/page.jsx — Individual blog post
// export default async function BlogPost({ params }) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
//   const post = await res.json();
//
//   return (
//     <article>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <Link href="/blog">← Back to Blog</Link>
//     </article>
//   );
// }
//
// export async function generateStaticParams() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
//   const posts = await res.json();
//   return posts.map(post => ({ id: String(post.id) }));
// }

// ============================================
// Summary
// ============================================

// [param]       → Single dynamic segment    → /users/5
// [...slug]     → Catch-all segments        → /docs/a/b/c
// [[...slug]]   → Optional catch-all        → /docs or /docs/a/b
// generateStaticParams → Pre-build dynamic pages at build time
