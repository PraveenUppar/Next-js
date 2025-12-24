export default async function GET(req: Request) {
  return Response.json({
    posts: [
      { id: 1, title: "First Post" },
      { id: 2, title: "Second Post" },
    ],
  });
}

export async function POST(request: Request) {
  const data = await request.json();

  if (!data.title) {
    return Response.json({ error: "Title is required" }, { status: 400 });
  }

  // Save to database
  return Response.json({ success: true, data }, { status: 201 });
}
