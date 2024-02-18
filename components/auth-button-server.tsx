import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import AuthButtonClient from './AuthButton'

export default async function AuthButtonServer () {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  return <AuthButtonClient session={data.session} />
}
