import { IconDots } from "@tabler/icons-react";

interface SidebarItemProps {
  label: string;
  icon: any;
  alert?: boolean;
}

export default function SidebarItem({
  label,
  icon: Icon,
  alert,
}: SidebarItemProps) {
  return (
    <div className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
        <Icon />
        {alert ? (
          <IconDots className="text-sky-500 absolute -top-4 left-0" />
        ) : null}
      </div>
      <div className="relative hidden lg:flex items-row gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer items-center">
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
        {alert ? (
          <IconDots className="text-sky-500 absolute -top-4 left-0" size={70} />
        ) : null}
      </div>
    </div>
  );
}
