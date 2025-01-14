import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type Tparams = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const posts = (await response.json()).posts;

  return posts.map((post: { id: number }) => ({
    params: {
      id: post.id,
    },
  }));
}

export async function generateMetadata({ params }: Tparams): Promise<Metadata> {
  const id = (await params).id;
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const post = await response.json();
  if (!post) return notFound();
  return {
    title: post.title,
  };
}

export default async function Page({ params }: Tparams) {
  const id = (await params).id;
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const post = await response.json();
  return (
    <main className="text-center pt-24 px-7">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  );
}
