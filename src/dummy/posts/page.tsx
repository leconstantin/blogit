import React, { Suspense } from "react";
import PostsList from "@/components/posts/PostList";
import Loading from "./loading";

export default async function Page() {
  return (
    <main className="text-center pt-20 px-5">
      <h1 className="text-4xl font-bold mb-5">All posts</h1>
      <Suspense fallback={<Loading />}>
        <PostsList />
      </Suspense>
    </main>
  );
}
