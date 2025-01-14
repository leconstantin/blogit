import { createPost } from "@/actions/actions";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

export default async function Page() {
  return (
    <main className="text-center pt-16 pb-6 mx-4">
      <h1 className="text-4xl font-bold mb-5">Create Post</h1>
      <form
        action={createPost}
        className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
      >
        <input
          type="text"
          name="title"
          placeholder="Title for new post"
          required
          className="border rounded px-3 h-10 outline-none focus:ring-1 "
        />
        <textarea
          name="body"
          placeholder="Body content for new post"
          rows={10}
          className="border rounded px-3 py-2 outline-none"
        />
        <button className="h-10 bg-blue-500 px-5 rounded text-white ">
          Submit
        </button>
      </form>
      <LogoutLink className="hover:underline">Log out</LogoutLink>
    </main>
  );
}
