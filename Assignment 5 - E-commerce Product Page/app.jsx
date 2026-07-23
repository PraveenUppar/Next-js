// Assignment 5: E-commerce Product Page
// =======================================
//
// Build an e-commerce product page demonstrating the composition of Server and Client Components.
//
// Setup: npx create-next-app@latest ecommerce-product
//
// Requirements:
// 1. Data Source: Use FakeStoreAPI (https://fakestoreapi.com/products)
// 2. Product Listing (`/`): A Server Component that fetches and displays all products in a grid.
// 3. Product Detail (`/product/[id]`): A Server Component that fetches a single product based on the dynamic ID.
// 4. Client Components (Interactivity):
//    - Create an `AddToCartButton` Client Component. It should maintain a simple local state (e.g., added count) or use Context if you're ambitious.
//    - Include the `AddToCartButton` inside the Server Component product detail page.
// 5. Use `next/image` for product images.
// 6. Provide a nice loading state while the products are fetching.
//
// Concepts Tested:
// - Composing Server and Client Components (Passing Server data as props to Client components).
// - Server-side data fetching.
// - next/image for external domains (requires config).
// - Dynamic routes.
//
// Hints:
// - Remember to configure FakeStoreAPI's domain in `next.config.js` for `next/image` to work.
// - The Server Component fetches the data and passes the specific necessary fields (like product ID and title) as props to the Client Component (`AddToCartButton`).
//
// Bonus:
// - Implement a real cart using React Context (Client Component provider wrapping the app in layout.jsx).
// - Add a "Sort by Price" dropdown on the listing page. Since sorting requires interactivity, you'll need to figure out how to manage that state while keeping data fetching on the server (hint: use URL search parameters).
