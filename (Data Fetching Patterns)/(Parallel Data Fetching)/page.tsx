// app/dashboard/page.tsx
async function getStats() {
  const res = await fetch("https://api.example.com/stats");
  return res.json();
}

async function getRecentPosts() {
  const res = await fetch("https://api.example.com/posts?limit=5");
  return res.json();
}

async function getUsers() {
  const res = await fetch("https://api.example.com/users?limit=10");
  return res.json();
}

export default async function Dashboard() {
  // Fetch all in parallel
  const [stats, posts, users] = await Promise.all([
    getStats(),
    getRecentPosts(),
    getUsers(),
  ]);

  return (
    <div>
      <h1>Dashboard</h1>
      <section>
        <h2>Stats: {stats.totalUsers} users</h2>
      </section>
      <section>
        <h2>Recent Posts</h2>
        {posts.map((post: any) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </section>
      <section>
        <h2>Users</h2>
        {users.map((user: any) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </section>
    </div>
  );
}
