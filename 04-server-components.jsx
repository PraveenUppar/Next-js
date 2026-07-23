// Server Components vs Client Components
// In Next.js App Router, components are SERVER components by default.
// This is the biggest mental shift from React!

// ============================================
// Server Components (Default)
// ============================================

// Server Components run ONLY on the server
// ✅ Can fetch data directly (async/await)
// ✅ Can access databases, file system, server secrets
// ✅ Don't send JavaScript to the browser (smaller bundle)
// ❌ Cannot use hooks (useState, useEffect, useRef)
// ❌ Cannot use event handlers (onClick, onChange)
// ❌ Cannot use browser APIs (localStorage, window)

// This is a Server Component (no "use client" = server by default)
async function UserProfile() {
  // Fetch data directly — no useEffect needed!
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await res.json();

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}

// Another example — reading from database directly
// async function BlogPosts() {
//   const posts = await db.post.findMany();  // Direct database access!
//   return (
//     <ul>
//       {posts.map(post => <li key={post.id}>{post.title}</li>)}
//     </ul>
//   );
// }

export default UserProfile;

// ============================================
// Client Components ("use client")
// ============================================

// Add "use client" at the VERY FIRST LINE to make a client component
// Client Components run in the browser (like regular React)

// "use client";
// import { useState } from 'react';
//
// export default function Counter() {
//   const [count, setCount] = useState(0);
//
//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Count: {count}
//     </button>
//   );
// }

// ============================================
// When to Use Server vs Client
// ============================================

// USE SERVER COMPONENT when:
// - Fetching data from database or API
// - Accessing server-only resources (env secrets, file system)
// - Keeping sensitive logic on the server
// - Reducing JavaScript sent to browser
// - The component has NO interactivity

// USE CLIENT COMPONENT when:
// - Using hooks (useState, useEffect, useRef, useContext)
// - Using event handlers (onClick, onChange, onSubmit)
// - Using browser APIs (localStorage, window, navigator)
// - Using third-party libraries that need browser (chart libraries, etc.)

// ============================================
// Mixing Server and Client Components
// ============================================

// You CAN use Client Components inside Server Components
// But you CANNOT use Server Components inside Client Components

// ✅ Server Component containing a Client Component
// app/page.jsx (Server Component)
// import Counter from './Counter'; // Counter is "use client"
//
// export default async function Page() {
//   const data = await fetchData();  // Server-side fetch
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <p>Data: {data.message}</p>
//       <Counter />  {/* Client Component for interactivity */}
//     </div>
//   );
// }

// ============================================
// Passing Server Data to Client Components
// ============================================

// Fetch data in Server Component → pass via props to Client Component

// app/page.jsx (Server)
// import UserList from './UserList';
//
// export default async function Page() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await res.json();
//
//   return <UserList users={users} />;  // Pass data as props
// }

// UserList.jsx (Client — needs interactivity)
// "use client";
// import { useState } from 'react';
//
// export default function UserList({ users }) {
//   const [search, setSearch] = useState('');
//   const filtered = users.filter(u =>
//     u.name.toLowerCase().includes(search.toLowerCase())
//   );
//
//   return (
//     <div>
//       <input value={search} onChange={e => setSearch(e.target.value)} />
//       {filtered.map(user => <p key={user.id}>{user.name}</p>)}
//     </div>
//   );
// }

// ============================================
// Common Pattern: Server Parent + Client Child
// ============================================

// Server Component → Fetches data, renders static content
// Client Component → Handles interactivity (search, filters, forms, modals)

// Think of it as:
// Server = Get the data
// Client = Make it interactive

// ============================================
// Common Mistake
// ============================================

// ❌ Using hooks in a Server Component
// export default function Page() {
//   const [count, setCount] = useState(0);  // ERROR!
//   return <p>{count}</p>;
// }

// ✅ Fix: Add "use client" OR move the interactive part to a client component
