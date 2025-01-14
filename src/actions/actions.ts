"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  // auth check
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated)) {
    redirect("/api/auth/login");
  }

  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  console.log(title, body);
}

const { getUser } = getKindeServerSession();
const user = await getUser();

console.log(user);
