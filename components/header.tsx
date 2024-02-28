import GoBackButton from "./go-back-button";

interface HeaderProps {
  showBackArrow?: boolean;
  label: string;
}

export default function Header({ showBackArrow, label }: HeaderProps) {
  return (
    <div className="border-b-[1px] border-white/20 p-4">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && <GoBackButton />}
        <h1 className="text-white text-xl font-semibold">{label}</h1>
      </div>
    </div>
  );
}
