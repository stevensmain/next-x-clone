import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { type Database } from "@/types";

import AuthButtonServer from "@/components/auth-button-server";
import PostList from "@/components/post-list";
import ComposePost from "@/components/compose-post";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: posts } = await supabase
    .from("posts")
    .select("*, user:users(*)")
    .order("created_at", { ascending: false });

  if (session === null) {
    redirect("/login");
  }

  return (
    <>
      <ComposePost avatarUrl={session.user.user_metadata.avatar_url} />
      <PostList posts={posts} />
    </>
  );
}
