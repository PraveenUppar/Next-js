// Assignment 1: Personal Blog
// =============================
//
// Build a multi-page blog using Next.js App Router and file-based routing.
//
// Setup: npx create-next-app@latest personal-blog
//
// Requirements:
// 1. Root Layout: Create a persistent navbar and footer that appear on all pages.
// 2. Home Page (/): Welcome message and featured posts.
// 3. Blog Listing (/blog): Display a list of all blog posts (title, excerpt, date).
// 4. Dynamic Post Page (/blog/[slug]): Display the full content of a specific post.
// 5. Use Server Components for fetching and displaying the blog data.
// 6. Use the next/link <Link> component for navigation.
// 7. Data Source: Create a local JSON array of posts or fetch from JSONPlaceholder.
// 8. Handle 404s using a custom not-found.jsx page.
//
// Concepts Tested:
// - File-based routing (pages, layouts)
// - Dynamic segments ([slug])
// - Server Components (default data fetching)
// - next/link for optimized navigation
// - not-found.jsx for custom 404s
//
// Hints:
// - Use `generateStaticParams` in /blog/[slug]/page.jsx to statically generate the post pages at build time.
// - Posts data structure: { slug: 'my-first-post', title: '...', content: '...', date: '...' }
// - Pass the `params` prop to the dynamic page to read the slug.
//
// Bonus:
// - Add static metadata (title, description) to each page using `export const metadata`.
// - Add dynamic metadata to individual post pages using `generateMetadata`.
// - Add a search bar to the blog listing page (requires converting it to a Client Component).
