"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";

export const createPost = async (formData: FormData) => {
  "use server";
  const content = formData.get("content");

  if (content === null) return;

  const supabase = createServerActionClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  await supabase.from("posts").insert({ content, user_id: user.id });

  revalidatePath("/");
};
