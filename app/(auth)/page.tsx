import AuthButtonServer from "@/components/auth-button-server";
import useSession from "@/hooks/useSession";
import { Button } from "@nextui-org/react";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await useSession();

  if (session) {
    redirect("/home");
  }

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-4">
      <div className="text-white max-w-[600px] space-y-8">
        <h1 className="text-6xl font-extrabold">Happening now</h1>
        <h2 className="text-5xl font-bold">Join today.</h2>
        <div>
          <AuthButtonServer />
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-600" />
            <span className="px-4 text-gray-400">or</span>
            <div className="flex-grow h-px bg-gray-600" />
          </div>
          <Button className="bg-[#1d9bf0] text-white w-full">
            Create account
          </Button>
        </div>
        <div className="text-gray-400 text-sm mt-4">
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </div>
        <div className="border border-gray-700 rounded-full text-center py-2 mt-8">
          <Button className="text-white bg-transparent">Sign in</Button>
        </div>
      </div>
    </div>
  );
}
