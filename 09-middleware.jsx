// Middleware in Next.js
// Middleware allows you to run code BEFORE a request is completed.
// You can modify the response, redirect, rewrite, or add headers.

import { NextResponse } from "next/server";

// ============================================
// 1. Basic Middleware — middleware.js
// ============================================

// Must be created at the root of the project (same level as app/ folder)
// File name MUST be middleware.js (or middleware.ts)

// middleware.js:
export function middleware(request) {
  // Runs on EVERY request that matches the config below
  console.log("Request to:", request.nextUrl.pathname);

  // Continue to the requested page
  return NextResponse.next();
}

// Config to specify which paths the middleware runs on
export const config = {
  // Run on everything EXCEPT api routes, static files, and images
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

// ============================================
// 2. Redirecting Requests
// ============================================

// Useful for old URLs, maintenance mode, or auth redirects

// export function middleware(request) {
//   const path = request.nextUrl.pathname;
//
//   // Redirect old-about to about
//   if (path === '/old-about') {
//     return NextResponse.redirect(new URL('/about', request.url));
//   }
//
//   return NextResponse.next();
// }

// ============================================
// 3. Authentication Check Pattern
// ============================================

// Check if user is logged in before accessing protected routes

// export function middleware(request) {
//   const path = request.nextUrl.pathname;
//
//   // Check if path starts with /dashboard (protected area)
//   const isProtected = path.startsWith('/dashboard');
//
//   if (isProtected) {
//     // Check for auth cookie/token
//     const token = request.cookies.get('auth_token')?.value;
//
//     if (!token) {
//       // Not logged in — redirect to login page
//       // Add ?next=/dashboard so login page knows where to send them back
//       const loginUrl = new URL('/login', request.url);
//       loginUrl.searchParams.set('next', path);
//
//       return NextResponse.redirect(loginUrl);
//     }
//   }
//
//   return NextResponse.next();
// }

// ============================================
// 4. Rewrites (Proxying)
// ============================================

// URL stays the same, but content is served from a different URL
// Good for A/B testing, migrating systems, or proxying APIs

// export function middleware(request) {
//   const path = request.nextUrl.pathname;
//
//   // Rewrite /blog to /articles silently
//   if (path === '/blog') {
//     return NextResponse.rewrite(new URL('/articles', request.url));
//   }
//
//   return NextResponse.next();
// }

// ============================================
// 5. Setting Cookies & Headers
// ============================================

// export function middleware(request) {
//   // Read a cookie from the incoming request
//   const theme = request.cookies.get('theme')?.value || 'light';
//
//   // Create a response object
//   const response = NextResponse.next();
//
//   // Set a new cookie on the response
//   response.cookies.set('visited_at', new Date().toISOString());
//
//   // Add a custom header to the response
//   response.headers.set('x-custom-header', 'hello-world');
//
//   return response;
// }

// ============================================
// 6. Geolocation & User Agent (Next.js specific)
// ============================================

// import { userAgent } from 'next/server';
//
// export function middleware(request) {
//   // Get country from request (works on Vercel)
//   const country = request.geo?.country || 'US';
//
//   // Parse User-Agent string
//   const { isBot, device } = userAgent(request);
//
//   if (isBot) {
//     return new Response('Bots not allowed', { status: 403 });
//   }
//
//   // Redirect mobile users to a mobile-specific path
//   if (device.type === 'mobile' && !request.nextUrl.pathname.startsWith('/m')) {
//     return NextResponse.redirect(new URL('/m' + request.nextUrl.pathname, request.url));
//   }
//
//   return NextResponse.next();
// }

// ============================================
// Summary
// ============================================

// Middleware runs BEFORE the request completes.
// Use cases:
// 1. Authentication (protecting routes)
// 2. Redirects (moving users from old URLs)
// 3. Rewrites (proxying requests, A/B testing)
// 4. Headers & Cookies (reading/setting global state)
// 5. Bot protection & localization (geo-routing)
