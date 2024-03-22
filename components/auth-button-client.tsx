'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from '@nextui-org/button'
import { IconBrandGithub } from '@tabler/icons-react'

export default function AuthButtonClient() {
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: process.env.NEXT_PUBLIC_CALLBACK_URL,
      },
    })
  }

  return (
    <Button
      onClick={handleSignIn}
      fullWidth
      variant='solid'
      className='bg-white text-black'
      radius='full'
    >
      <IconBrandGithub className='w-4 h-4' />
      Sign in with Github
    </Button>
  )
}
