import { type Post } from "@/types";

import PostCard from "./post-card";

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts?.map((post) => {
        const { id, content, user } = post;
        const { name, avatar_url, user_name } = user;

        return (
          <PostCard
            key={id}
            userFullName={name}
            userName={user_name}
            avatarUrl={avatar_url}
            content={content}
          />
        );
      })}
    </>
  );
}
