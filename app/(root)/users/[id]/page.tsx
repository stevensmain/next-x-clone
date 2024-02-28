import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/types";

import PostList from "@/components/posts/post-list";
import UserBio from "@/components/users/user-bio";
import Header from "@/components/header";

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

  const { data: user, error } = await supabase
    .from("users")
    .select()
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return (
    <>
      <Header label={user?.name} showBackArrow />
      <UserBio user={user} />
      <PostList posts={posts} />
    </>
  );
}
