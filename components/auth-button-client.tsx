"use client";
import { useRouter } from "next/navigation";
import {
  type Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { Button } from "@nextui-org/button";
import { IconBrandGithub } from "@tabler/icons-react";

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
    return (
      <Button fullWidth onClick={handleSignOut}>
        Sign Out
      </Button>
    );
  }

  return (
    <Button onClick={handleSignIn} fullWidth>
      <IconBrandGithub className="w-4 h-4" />
      Sign in with Github
    </Button>
  );
}
