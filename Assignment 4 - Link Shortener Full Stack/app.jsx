// Assignment 4: Link Shortener Full Stack
// ==========================================
//
// Build a full-stack URL shortener using Next.js.
//
// Setup: npx create-next-app@latest link-shortener
//
// Requirements:
// 1. Database (In-Memory for now): Create a simple JavaScript object in a file (e.g., `lib/db.js`) to store links.
//    - Example: `{ "abc12": "https://google.com", "xyz89": "https://react.dev" }`
//    - Note: In a real app, you'd use a database like Vercel Postgres or MongoDB. For this assignment, in-memory is fine (it will reset on server restart).
//
// 2. API Route (`/api/shorten`):
//    - Accepts a POST request with a `url` in the body.
//    - Generates a random 5-character string (the short code).
//    - Saves the mapping to your "database".
//    - Returns the short code to the client.
//
// 3. Frontend (`/`):
//    - A Client Component with a form to enter a long URL.
//    - Calls the `/api/shorten` endpoint.
//    - Displays the generated short URL (e.g., `localhost:3000/r/abc12`).
//
// 4. Redirection Logic (`/r/[code]`):
//    - Create a dynamic route that catches the short code.
//    - Inside the Server Component, look up the original URL from your database.
//    - If found, use `redirect(originalUrl)` from `next/navigation`.
//    - If not found, show a 404 page (`notFound()`).
//
// Concepts Tested:
// - API Routes (Route Handlers) handling POST requests
// - Server Components handling redirects (`next/navigation`)
// - Dynamic routes for handling the short codes
// - Client-side data fetching (submitting the form to the API)
//
// Hints:
// - Generate a random string: `Math.random().toString(36).substring(2, 7)`
// - Use `import { redirect, notFound } from 'next/navigation'` in your Server Component.
//
// Bonus:
// - Add basic analytics: track how many times a link was clicked.
// - Implement a real database (e.g., using Prisma with SQLite or PostgreSQL).
