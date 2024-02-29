import GoBackButton from './go-back-button';

interface HeaderProps {
  showBackArrow?: boolean;
  label: string;
}

export default function Header({ showBackArrow, label }: HeaderProps) {
  return (
    <div className='sticky top-0 px-4 py-2 bg-black/50 backdrop-blur z-50'>
      <div className='flex flex-row items-center gap-2'>
        {showBackArrow && <GoBackButton />}
        <h1 className='text-white text-xl font-semibold'>{label}</h1>
      </div>
    </div>
  );
}
