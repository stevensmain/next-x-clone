import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import Link from "next/link";
import { IconHeart, IconMessage, IconRepeat } from "@tabler/icons-react";

interface PostCardProps {
  userFullName: string;
  userName: string;
  avatarUrl: string;
  content: string;
}

export default function PostCard({
  userFullName,
  userName,
  avatarUrl,
  content,
}: PostCardProps) {
  return (
    <Card className="shadow-none bg-transparent rounded-none border-b border-white/20 cursor-pointer hover:bg-slate-800/20">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Link href={`/${userName}`}>
            <Avatar radius="full" size="md" src={avatarUrl} />
          </Link>

          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {userFullName}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{userName}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-default-400">
        <p>{content}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessage className="w-4 h-4" />
        </button>
        <button>
          <IconHeart className="w-4 h-4" />
        </button>
        <button>
          <IconRepeat className="w-4 h-4" />
        </button>
      </CardFooter>
    </Card>
  );
}
