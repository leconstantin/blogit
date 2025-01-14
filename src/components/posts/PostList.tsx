import Link from "next/link";

export default async function PostsList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const posts = (await response.json()).posts;

  return (
    <ul>
      {posts.map((post: { id: number; title: string }) => (
        <li key={post.id} className="mb-3">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
