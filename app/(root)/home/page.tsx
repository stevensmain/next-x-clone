import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { Post, type Database } from "@/types";

import ComposePost from "@/components/posts/compose-post";
import Header from "@/components/header";
import PostList from "@/components/posts/post-list";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: posts } = await supabase
    .from("posts")
    .select("*, user:users(*)")
    .order("created_at", { ascending: false })
    .returns<Post[]>();

  if (session === null) {
    redirect("/login");
  }

  return (
    <>
      <Header label="Home" />
      <ComposePost avatarUrl={session.user.user_metadata.avatar_url} />
      {posts === null || posts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        <PostList posts={posts} />
      )}
    </>
  );
}
