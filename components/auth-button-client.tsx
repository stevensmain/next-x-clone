"use client";
import { useRouter } from "next/navigation";
import {
  type Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { Button } from "@nextui-org/button";

import { GithubIcon } from "./Icons";

export default function AuthButtonClient({
  session,
}: {
  session: Session | null;
}) {
  const supabase = createClientComponentClient();
  const route = useRouter();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    route.refresh();
  };

  if (session !== null) {
    return <Button onClick={handleSignOut}>Sign Out</Button>;
  }

  return (
    <button
      onClick={handleSignIn}
      type="button"
      className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
    >
      <GithubIcon />
      Sign in with Github
    </button>
  );
}
