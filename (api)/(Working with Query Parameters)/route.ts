// app/api/search/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");
  const limit = searchParams.get("limit") || "10";

  if (!query) {
    return Response.json(
      { error: "Query parameter is required" },
      { status: 400 },
    );
  }

  return Response.json({
    query,
    limit: parseInt(limit),
    results: [
      // Mock search results
      { id: 1, title: `Result for "${query}" 1` },
      { id: 2, title: `Result for "${query}" 2` },
    ],
  });
}
