"use server";

import { signIn } from "@/auth";

export async function ServerSignIn() {
  await signIn();
}
