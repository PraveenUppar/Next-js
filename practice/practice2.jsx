// Practice 2: Blog with Dynamic Routes
// Task: Create a blog listing and dynamic individual post pages using App Router.
// Concepts: Dynamic segments ([slug]), server components fetching data, generateStaticParams

import Link from "next/link";

// ============================================
// Data Source (Mock API)
// ============================================

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

const getPostById = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) return null;
  return res.json();
};

// ============================================
// app/blog/page.jsx (Blog Listing)
// ============================================

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>📝 My Blog</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {posts.map((post) => (
          <div key={post.id} style={{
            border: "1px solid #eee",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
          }}>
            <h2 style={{ margin: "0 0 8px 0" }}>
              <Link href={`/blog/${post.id}`} style={{ color: "#007bff", textDecoration: "none" }}>
                {post.title}
              </Link>
            </h2>
            <p style={{ color: "#666", margin: 0 }}>
              {post.body.substring(0, 100)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// app/blog/[id]/page.jsx (Dynamic Post Page)
// ============================================

export async function BlogPost({ params }) {
  const post = await getPostById(params.id);

  if (!post) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1>Post Not Found 😢</h1>
        <Link href="/blog">Go back to blog</Link>
      </div>
    );
  }

  return (
    <article style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <Link href="/blog" style={{ color: "#666", textDecoration: "none" }}>
        ← Back to all posts
      </Link>
      
      <h1 style={{ fontSize: "2rem", marginTop: "20px" }}>{post.title}</h1>
      <p style={{ color: "#888" }}>Post ID: {post.id}</p>
      
      <div style={{
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "8px",
        marginTop: "20px",
        lineHeight: "1.6"
      }}>
        {post.body}
      </div>
    </article>
  );
}

// Optional: Pre-generate these dynamic pages at build time (SSG)
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
