// API Routes in Next.js (Route Handlers)
// Next.js lets you create API endpoints inside your app — no separate backend needed!
// Route Handlers use app/api/... directory with route.js files.

import { NextResponse } from "next/server";

// ============================================
// Basic API Route — app/api/hello/route.js
// ============================================

// GET /api/hello
export async function GET() {
  return NextResponse.json({ message: "Hello from the API!" });
}

// ============================================
// Multiple Methods in One File
// ============================================

// app/api/users/route.js — handles GET and POST

const users = [
  { id: 1, name: "Praveen", email: "praveen@example.com" },
  { id: 2, name: "John", email: "john@example.com" },
];

// GET /api/users — Get all users
// export async function GET() {
//   return NextResponse.json({ users });
// }

// POST /api/users — Create a user
// export async function POST(request) {
//   const body = await request.json();  // Parse JSON body
//   const newUser = {
//     id: users.length + 1,
//     ...body,
//   };
//   users.push(newUser);
//   return NextResponse.json(
//     { message: "User created", user: newUser },
//     { status: 201 }
//   );
// }

// ============================================
// Dynamic API Routes — app/api/users/[id]/route.js
// ============================================

// GET /api/users/1
// export async function GET(request, { params }) {
//   const { id } = params;
//   const user = users.find(u => u.id === parseInt(id));
//
//   if (!user) {
//     return NextResponse.json(
//       { error: "User not found" },
//       { status: 404 }
//     );
//   }
//
//   return NextResponse.json({ user });
// }

// PUT /api/users/1
// export async function PUT(request, { params }) {
//   const { id } = params;
//   const body = await request.json();
//   const index = users.findIndex(u => u.id === parseInt(id));
//
//   if (index === -1) {
//     return NextResponse.json({ error: "User not found" }, { status: 404 });
//   }
//
//   users[index] = { ...users[index], ...body };
//   return NextResponse.json({ message: "Updated", user: users[index] });
// }

// DELETE /api/users/1
// export async function DELETE(request, { params }) {
//   const { id } = params;
//   const index = users.findIndex(u => u.id === parseInt(id));
//
//   if (index === -1) {
//     return NextResponse.json({ error: "User not found" }, { status: 404 });
//   }
//
//   const deleted = users.splice(index, 1)[0];
//   return NextResponse.json({ message: "Deleted", user: deleted });
// }

// ============================================
// Request Object
// ============================================

// export async function GET(request) {
//   // URL and search params
//   const { searchParams } = new URL(request.url);
//   const query = searchParams.get('q');       // /api/search?q=hello
//   const page = searchParams.get('page');     // /api/search?q=hello&page=2
//
//   // Headers
//   const authHeader = request.headers.get('authorization');
//
//   // Method
//   console.log(request.method);  // "GET"
//
//   return NextResponse.json({ query, page });
// }

// POST with body:
// export async function POST(request) {
//   const body = await request.json();     // JSON body
//   // const formData = await request.formData();  // Form data
//   // const text = await request.text();           // Plain text
//
//   return NextResponse.json({ received: body });
// }

// ============================================
// NextResponse API
// ============================================

// Return JSON
// return NextResponse.json({ data: "value" });

// Return with status code
// return NextResponse.json({ error: "Not found" }, { status: 404 });

// Return with custom headers
// return NextResponse.json(
//   { data: "value" },
//   { headers: { "X-Custom-Header": "MyValue" } }
// );

// Redirect
// return NextResponse.redirect(new URL('/login', request.url));

// ============================================
// Consuming API Routes from Pages
// ============================================

// "use client";
// import { useState, useEffect } from 'react';
//
// export default function UsersPage() {
//   const [users, setUsers] = useState([]);
//
//   useEffect(() => {
//     fetch('/api/users')
//       .then(res => res.json())
//       .then(data => setUsers(data.users));
//   }, []);
//
//   return (
//     <ul>
//       {users.map(user => <li key={user.id}>{user.name}</li>)}
//     </ul>
//   );
// }

// ============================================
// File Structure for API Routes
// ============================================

// app/api/
//   hello/route.js         → GET /api/hello
//   users/
//     route.js             → GET, POST /api/users
//     [id]/
//       route.js           → GET, PUT, DELETE /api/users/:id
//   products/
//     route.js             → GET, POST /api/products
//   auth/
//     login/route.js       → POST /api/auth/login
//     register/route.js    → POST /api/auth/register
