// Practice 3: API Routes CRUD
// Task: Build API endpoints for a simple resource and a page to consume them.
// Concepts: Route Handlers (app/api/...), GET/POST methods, Client components fetching from own API

// ============================================
// app/api/tasks/route.js (API Backend)
// ============================================

import { NextResponse } from "next/server";

// Simple in-memory database (resets when server restarts)
let tasks = [
  { id: 1, title: "Learn Next.js App Router", completed: false },
  { id: 2, title: "Build an API Route", completed: true }
];

export async function GET() {
  return NextResponse.json(tasks);
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    if (!body.title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }
    
    const newTask = {
      id: Date.now(),
      title: body.title,
      completed: false
    };
    
    tasks.push(newTask);
    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

// ============================================
// app/tasks/page.jsx (Frontend consuming the API)
// ============================================

"use client"; // Needs to be a client component for interactivity and fetching on action

import { useState, useEffect } from "react";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch tasks from our own API
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch("/api/tasks");
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  // Add a new task via our POST API
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTaskTitle })
      });
      
      if (res.ok) {
        const newTask = await res.json();
        setTasks([...tasks, newTask]);
        setNewTaskTitle("");
      }
    } catch (error) {
      console.error("Failed to add task");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px" }}>
      <h1>✅ Task Manager</h1>
      
      <form onSubmit={handleAddTask} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="New task..."
          style={{ flex: 1, padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px" }}>
          Add
        </button>
      </form>

      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map(task => (
            <li key={task.id} style={{
              padding: "15px",
              borderBottom: "1px solid #eee",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>
              <input type="checkbox" checked={task.completed} readOnly />
              <span style={{ textDecoration: task.completed ? "line-through" : "none", color: task.completed ? "#999" : "#333" }}>
                {task.title}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
