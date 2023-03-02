import Link from "next/link";

export default async function Dashboard() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  const posts = await response.json();

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
