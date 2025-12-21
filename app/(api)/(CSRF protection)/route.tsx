// Get CSRF token from server
"use client";

import { getCSRFToken } from "@/app/actions";

export async function Form() {
  const token = await getCSRFToken();

  return (
    <form action="/api/submit" method="POST">
      <input type="hidden" name="csrf_token" value={token} />
      {/* form fields */}
    </form>
  );
}

// Verify on server
export async function POST(request: Request) {
  const token = request.headers.get("csrf-token");

  if (!verifyCSRFToken(token)) {
    return Response.json({ error: "Invalid token" }, { status: 403 });
  }

  // Process request
}
