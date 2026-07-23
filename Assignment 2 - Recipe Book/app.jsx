// Assignment 2: Recipe Book
// =============================
//
// Build a recipe application that fetches data from an external API.
//
// Setup: npx create-next-app@latest recipe-book
//
// API: TheMealDB API (Free, no key required)
//      - List Categories: https://www.themealdb.com/api/json/v1/1/categories.php
//      - Filter by Category: https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
//      - Lookup by ID: https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
//
// Requirements:
// 1. Home Page (/): Fetch and display a list of all recipe categories.
// 2. Category Page (/category/[name]): Fetch and display all recipes for a specific category.
// 3. Recipe Detail Page (/recipe/[id]): Fetch and display the full details of a specific recipe (ingredients, instructions, image).
// 4. Use Server Components for all data fetching (no useState/useEffect for the core data).
// 5. Use the `next/image` component for all recipe images to ensure optimization.
// 6. Handle loading states gracefully (you can use loading.jsx).
//
// Concepts Tested:
// - Server Components data fetching (async/await)
// - Dynamic routing with URL parameters
// - next/image component usage and configuration
// - loading.jsx for automatic suspense boundaries
//
// Hints:
// - You will need to configure `next.config.js` to allow images from `www.themealdb.com` in the `remotePatterns` array.
// - Use the `priority` prop on the main recipe image to load it faster.
// - TheMealDB returns ingredients in a slightly annoying way (strIngredient1, strIngredient2). You'll need to write a small helper function to extract them into a clean array.
//
// Bonus:
// - Implement a Search Client Component in the header that navigates to `/search?q=query`.
// - Add a `/search` page (Server Component) that reads `searchParams` and fetches results from `https://www.themealdb.com/api/json/v1/1/search.php?s={query}`.
