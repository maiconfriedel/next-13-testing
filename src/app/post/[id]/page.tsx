import Link from "next/link";

interface PostPageParams {
  params: {
    id: string;
  };
}

export default async function Post({ params }: PostPageParams) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {
      next: { revalidate: 3600 },
    }
  );

  const post = await response.json();

  return (
    <div>
      <h1>Post</h1>
      <p>{JSON.stringify(post, null, 2)}</p>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}

export async function generateStaticParams() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  let posts = await response.json();

  posts = posts.filter((post: any) => post.id <= 5);

  return posts.map((post: any) => ({
    id: post.id.toString(),
  }));
}
