// Assignment 3: Dashboard App
// =============================
//
// Build an admin dashboard demonstrating nested layouts and protected routes.
//
// Setup: npx create-next-app@latest dashboard-app
//
// Requirements:
// 1. App Structure:
//    - / (Public Landing Page)
//    - /login (Public Login Page)
//    - /dashboard (Protected Overview)
//    - /dashboard/users (Protected Users List)
//    - /dashboard/settings (Protected Settings)
//
// 2. Nested Layouts:
//    - Root Layout (`app/layout.jsx`): Simple wrapper for the whole app.
//    - Dashboard Layout (`app/dashboard/layout.jsx`): A sidebar navigation and top header that wraps all dashboard pages.
//
// 3. Protected Routes (Middleware):
//    - Create a `middleware.js` file at the root.
//    - If a user tries to access `/dashboard/*` without a valid cookie (e.g., `auth=true`), redirect them to `/login`.
//
// 4. Login Flow:
//    - Create an API route (`app/api/login/route.js`) that accepts a POST request (username/password).
//    - If valid (hardcode admin/password), use `NextResponse` to set the `auth=true` cookie and return success.
//    - On the `/login` Client Component, call this API and then redirect to `/dashboard` using `useRouter`.
//
// Concepts Tested:
// - Nested layouts (layout.jsx)
// - Middleware for route protection and redirects
// - API Routes (Route Handlers)
// - Setting and reading cookies via Next.js APIs
// - Programmatic navigation with `useRouter`
//
// Hints:
// - In `middleware.js`, use `request.nextUrl.pathname.startsWith('/dashboard')` to check the path.
// - Use `request.cookies.get('auth')` to check for the cookie.
// - To set a cookie in the API Route: `response.cookies.set('auth', 'true', { path: '/' })`.
//
// Bonus:
// - Add a logout button in the dashboard header that calls an API route to clear the cookie and redirects home.
// - Fetch dummy stats on the dashboard overview page using a Server Component.
