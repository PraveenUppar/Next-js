// Assignment 6: Notes App Full Stack
// =====================================
//
// Build a full-stack Notes application, managing data purely through API routes.
//
// Setup: npx create-next-app@latest notes-app
//
// Requirements:
// 1. Backend API (`app/api/notes/route.js` & `app/api/notes/[id]/route.js`):
//    - Implement standard CRUD operations (GET, POST, PUT, DELETE).
//    - Use Node.js `fs` module to read/write data to a `data.json` file in your project root (simulate a real database).
// 2. Frontend:
//    - `/`: Display all notes. Provide a form to add a new note.
//    - `/note/[id]`: Display a single note with edit and delete capabilities.
// 3. Client Components: Use Client Components to handle forms and make `fetch` calls to your API routes.
//
// Concepts Tested:
// - Full CRUD API Routes in Next.js
// - File system interactions on the server (via API routes)
// - Client-side data fetching and state updates after API calls
//
// Hints:
// - In your API route, you can use `fs.promises` from Node.js to read and write your JSON file.
// - Remember to parse the JSON string when reading the file, and stringify it when saving.
// - When a note is added/deleted on the frontend, you'll need to update the local state or trigger a re-fetch to reflect the changes.
//
// Bonus:
// - Implement optimistic UI updates (update the UI instantly before the API call finishes).
// - Use Server Actions (Next.js 14 feature) instead of manual API routes to perform the CRUD operations.
