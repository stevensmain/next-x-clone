import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { type Database } from "@/types";

export default async function useUsers() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: users } = await supabase.from("users").select();

  if (!users) return null;

  return users;
}
