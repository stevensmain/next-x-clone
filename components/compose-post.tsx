import { Avatar, Card } from "@nextui-org/react";

import ComposePostForm from "./compose-post-form";

export default function ComposePost({ avatarUrl }: { avatarUrl: string }) {
  return (
    <Card className="shadow-none bg-transparent rounded-none flex flex-row border-b p-3 border-white/20">
      <Avatar src={avatarUrl} radius="full" size="md" className="mr-4" />
      <ComposePostForm />
    </Card>
  );
}
