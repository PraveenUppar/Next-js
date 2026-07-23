// Assignment 8: Weather App with SSR
// ====================================
//
// Build a weather application that relies heavily on Server-Side Rendering (SSR).
//
// Setup: npx create-next-app@latest weather-ssr
//
// API: OpenWeatherMap or wttr.in (e.g., https://wttr.in/London?format=j1)
//
// Requirements:
// 1. Home Page (`/`): A Client Component with a search input. When a user submits a city name, redirect them to `/weather/[city]` using `useRouter`.
// 2. Weather Page (`/weather/[city]`): A Server Component that:
//    - Reads the `city` from the dynamic `params`.
//    - Fetches the weather data for that city directly on the server.
//    - Use `cache: 'no-store'` in your fetch call so the weather data is always fresh on every request (simulating SSR).
//    - Displays the current temperature, conditions, and humidity.
// 3. Error Handling: Add an `error.jsx` file in the `weather/` directory to catch API failures or invalid cities gracefully.
//
// Concepts Tested:
// - Server-Side Rendering (SSR) via `cache: 'no-store'`
// - Reading dynamic params in Server Components
// - Error Boundaries (`error.jsx`)
// - Client to Server navigation
//
// Hints:
// - Next.js automatically treats dynamic routes that use `cache: 'no-store'` as dynamic rendering (SSR).
// - Your `error.jsx` MUST be a `"use client"` component.
//
// Bonus:
// - Change the fetch to use `next: { revalidate: 1800 }` to implement Incremental Static Regeneration (ISR). This means the page will be statically cached, but automatically updated in the background every 30 minutes!
// - Add dynamic metadata in `/weather/[city]/page.jsx` so the page title becomes "Weather in [City]".
