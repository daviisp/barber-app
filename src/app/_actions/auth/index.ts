"use server";

import { signIn } from "@/lib/auth";

export const authWithGoogle = async () => {
  await signIn("google");
};
