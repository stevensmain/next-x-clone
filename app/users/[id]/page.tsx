import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/types";

import PostList from "@/components/post-list";

export default async function ProfilePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: posts } = await supabase
    .from("posts")
    .select("*, user:users(*)")
    .order("created_at", { ascending: false })
    .match({ user_id: id });

  return <PostList posts={posts} />;
}
