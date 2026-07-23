// Advanced Next.js Features
// Some additional powerful features provided by Next.js.

// ============================================
// 1. Environment Variables
// ============================================

// Create a `.env.local` file at the root of your project
// API_KEY=secret123
// NEXT_PUBLIC_API_URL=https://api.example.com

// Note: Prefix with NEXT_PUBLIC_ to make it available in the browser (Client Components)
// Variables WITHOUT the prefix are ONLY available on the server!

// Usage in Server Component (can access secret API_KEY):
// export default async function ServerPage() {
//   const apiKey = process.env.API_KEY;
//   const res = await fetch(`https://api.com/data?key=${apiKey}`);
//   // ...
// }

// Usage in Client Component (can only access NEXT_PUBLIC_ variables):
// "use client";
// export default function ClientComponent() {
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
//   // ...
// }

// ============================================
// 2. Parallel Routes (@folder)
// ============================================

// Render multiple pages simultaneously in the same layout
// Folders starting with @ are "slots"

// Structure:
// app/
//   layout.jsx
//   page.jsx
//   @analytics/page.jsx
//   @team/page.jsx

// app/layout.jsx:
// export default function Layout({ children, analytics, team }) {
//   return (
//     <div>
//       {children} {/* This is app/page.jsx */}
//       <div className="sidebar">{analytics}</div>
//       <div className="sidebar">{team}</div>
//     </div>
//   );
// }

// ============================================
// 3. Intercepting Routes (..)
// ============================================

// Load a route within the current layout while keeping the context (e.g., Modals)
// Folders starting with (..) match the segment one level above

// Structure:
// app/
//   feed/
//     page.jsx
//   photo/
//     [id]/page.jsx
//   (..)photo/
//     [id]/page.jsx   <-- Intercepts the route when clicked from /feed!

// If you click a photo from the feed, it shows as a modal (using the intercepted route).
// If you refresh the page or share the URL, it shows the full photo page.

// ============================================
// 4. Client-side Search Params — useSearchParams
// ============================================

// Access query string parameters (?query=value) in Client Components

// "use client";
// import { useSearchParams, useRouter, usePathname } from 'next/navigation';
//
// export default function SearchBar() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const pathname = usePathname();
//
//   const query = searchParams.get('q') || '';
//
//   const updateSearch = (newQuery) => {
//     const params = new URLSearchParams(searchParams);
//     if (newQuery) {
//       params.set('q', newQuery);
//     } else {
//       params.delete('q');
//     }
//     // Update the URL without reloading the page
//     router.replace(`${pathname}?${params.toString()}`);
//   };
//
//   return (
//     <input value={query} onChange={(e) => updateSearch(e.target.value)} />
//   );
// }

// ============================================
// 5. next.config.js
// ============================================

// Configuration file at the project root

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configure allowed image domains
//   images: {
//     remotePatterns: [
//       { protocol: 'https', hostname: 'example.com' }
//     ],
//   },
//
//   // Configure redirects
//   async redirects() {
//     return [
//       {
//         source: '/old-path',
//         destination: '/new-path',
//         permanent: true, // Returns 301 status
//       },
//     ];
//   },
//
//   // Configure rewrites (proxying)
//   async rewrites() {
//     return [
//       {
//         source: '/api/external/:path*',
//         destination: 'https://external-api.com/:path*',
//       },
//     ];
//   },
// };
//
// module.exports = nextConfig;

// ============================================
// 6. Server Actions (Next.js 14+)
// ============================================

// Run server code directly from client components or forms (no API route needed!)

// app/actions.js
// 'use server';
// export async function createPost(formData) {
//   const title = formData.get('title');
//   // Save to database...
//   return { success: true };
// }

// app/page.jsx
// import { createPost } from './actions';
//
// export default function Page() {
//   return (
//     <form action={createPost}>
//       <input name="title" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
