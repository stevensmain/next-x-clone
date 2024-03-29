import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import { Database, Post } from '@/types'

import PostList from '@/components/posts/post-list'
import UserBio from '@/components/users/user-bio'
import Header from '@/components/header'

export default async function ProfilePage({
  params: { username },
}: {
  params: { username: string }
}) {
  const supabase = createServerComponentClient<Database>({ cookies })

  const { data: user, error } = await supabase
    .from('users')
    .select()
    .eq('user_name', username)
    .single()

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(*)')
    .order('created_at', { ascending: false })
    .match({ user_id: user?.id })
    .returns<Post[]>()

  if (error) {
    return (
      <div className='p-3'>
        <p className='text-center text-lg'>Ha ocurrido un error 😞</p>
      </div>
    )
  }

  return (
    <>
      <Header label={user?.name} showBackArrow />
      <UserBio user={user} />
      {posts === null || posts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        <PostList posts={posts} />
      )}
    </>
  )
}
