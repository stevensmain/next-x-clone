'use client';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';
import { IconArrowLeft } from '@tabler/icons-react';

export default function GoBackButton() {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Button
      color='default'
      isIconOnly
      variant='light'
      aria-label='Go back'
      radius='full'
      onClick={handleBack}
    >
      <IconArrowLeft />
    </Button>
  );
}
