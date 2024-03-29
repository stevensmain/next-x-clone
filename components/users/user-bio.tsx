import { Avatar, Button } from "@nextui-org/react";
import { IconCalendar } from "@tabler/icons-react";

import { type Database } from "@/types";
import useSession from "@/hooks/useSession";

interface UserBioProps {
  user: Database["public"]["Tables"]["users"]["Row"];
}

export default async function UserBio({ user }: UserBioProps) {
  const session = await useSession();

  const createdAtDate = user ? new Date(user.created_at) : new Date();
  const createdAt = createdAtDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="border-b-[1px] border-white/20 pb-4">
      <div className="flex justify-end p-4"></div>
      <div className="mt-12 px-4">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <Avatar src={user?.avatar_url} className="w-24 h-24 -mt-12" />
            {user?.id === session?.user?.id ? (
              <Button variant="bordered" className="rounded-full">
                Edit profile
              </Button>
            ) : (
              <Button>Follow</Button>
            )}
          </div>
          <p className="text-white text-2xl font-semibold">{user?.name}</p>
          <p className="text-md text-neutral-500">@{user?.user_name}</p>
        </div>
        <div className="flex flex-col mt-4">
          {/* <p className="text-white">{fetchedUser?.bio}</p> */}
          <div
            className="
              flex 
              flex-row 
              items-center 
              gap-2 
              mt-4 
              text-neutral-500
          "
          >
            <IconCalendar className="h-6 w-6" />
            <p>Joined {createdAt}</p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-6">
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">0</p>
            <p className="text-neutral-500">Following</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">0</p>
            <p className="text-neutral-500">Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
