import { Database } from "./database";

type PostEntity = Database["public"]["Tables"]["posts"]["Row"];
type UserEntity = Database["public"]["Tables"]["users"]["Row"];

type Post = PostEntity & {
  user: UserEntity;
};

export type { Post };
