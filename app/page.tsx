import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import AuthButtonServer from '@/components/auth-button-server'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: posts } = await supabase.from('post').select()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello twitter 👋</h1>
      <AuthButtonServer />
      {
        JSON.stringify(posts, null, 2)
      }
    </main>
  )
}
