'use client'
import { useRouter } from 'next/navigation'
import {
  type Session,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs'
import { Button } from '@nextui-org/button'
import { IconBrandGithub } from '@tabler/icons-react'

export default function AuthButtonClient() {
  const supabase = createClientComponentClient()
  const route = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: '/auth/callback',
      },
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    route.refresh()
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
