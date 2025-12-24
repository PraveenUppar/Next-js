// app/posts/page.tsx (Server Component by default)
async function getPosts() {
  const res = await fetch("https://api.example.com/posts");
  return res.json();
}

export default async function PostsList() {
  const posts = await getPosts();

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
