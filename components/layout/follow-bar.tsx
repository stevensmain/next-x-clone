import { Avatar } from "@nextui-org/react";

import useUsers from "@/hooks/useUsers";

export default async function FollowBar() {
  const users = await useUsers();

  if (!users || users.length === 0) {
    return null;
  }

  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-neutral-800 rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          {users.map((user) => (
            <div key={user.id} className="flex flex-row gap-4">
              <Avatar src={user.avatar_url} size="lg" />
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">{user.name}</p>
                <p className="text-neutral-400 text-sm">@{user.user_name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
