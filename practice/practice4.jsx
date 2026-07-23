// Practice 4: Server vs Client Components
// Task: Build a page mixing server components (data fetching) and client components (interactivity).
// Concepts: Server/Client boundary, passing data as props, composition

// ============================================
// app/users/page.jsx (Server Component - Default)
// ============================================
// This component runs ONLY on the server. It can fetch data securely and quickly.

import UserSearchFilter from "./UserSearchFilter"; // Client component

export default async function UsersDirectoryPage() {
  // 1. Fetch data on the server
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  
  // Transform data slightly if needed before sending to client
  const mappedUsers = users.map(u => ({
    id: u.id,
    name: u.name,
    email: u.email,
    company: u.company.name
  }));

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <h1>🏢 Corporate Directory</h1>
      <p style={{ color: "#666" }}>
        Data fetched securely on the server. Interactivity handled by the client.
      </p>
      
      {/* 2. Pass data to the Client Component for interactivity */}
      <UserSearchFilter initialUsers={mappedUsers} />
    </div>
  );
}

// ============================================
// app/users/UserSearchFilter.jsx (Client Component)
// ============================================
// "use client" MUST be the first line!

/*
"use client";

import { useState } from "react";

export default function UserSearchFilter({ initialUsers }) {
  const [search, setSearch] = useState("");
  
  // Filter the data that was passed from the server
  const filteredUsers = initialUsers.filter(user => 
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "20px"
        }}
      />
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <div key={user.id} style={{ padding: "16px", border: "1px solid #eee", borderRadius: "8px", backgroundColor: "#fafafa" }}>
              <h3 style={{ margin: "0 0 8px 0" }}>{user.name}</h3>
              <p style={{ margin: "4px 0", color: "#666" }}>✉️ {user.email}</p>
              <p style={{ margin: "4px 0", color: "#666", fontWeight: "bold" }}>💼 {user.company}</p>
            </div>
          ))
        ) : (
          <p>No users found matching "{search}"</p>
        )}
      </div>
    </div>
  );
}
*/
