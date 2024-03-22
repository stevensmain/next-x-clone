import Link from 'next/link'
import {
  IconBrandTwitter,
  IconHome,
  IconLogout,
  IconUser,
} from '@tabler/icons-react'

import useSession from '@/hooks/useSession'
import SidebarItem from './sidebar-item'

export default async function Sidebar() {
  const session = await useSession()

  const items = [
    {
      icon: IconHome,
      label: 'Home',
      href: '/home',
    },
    // TODO - Add notifications
    /*  {
      icon: IconBellFilled,
      label: "Notifications",
      href: "/notifications",
      auth: true,
    }, */
    {
      icon: IconUser,
      label: 'Profile',
      href: `/users/${session?.user.user_metadata?.user_name}`,
      auth: true,
    },
  ]

  return (
    <div className='sticky top-0 col-span-1 h-full pr-4 md:pr-6'>
      <div className='flex flex-col items-end'>
        <div className='space-y-2 lg:w-[230px]'>
          <Link href='/home'>
            <div className='rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer'>
              <IconBrandTwitter />
            </div>
          </Link>
          {items.map((item) => {
            const { href, icon, label } = item
            return (
              <Link key={href} href={href}>
                <SidebarItem icon={icon} label={label} />
              </Link>
            )
          })}

          {session !== null && (
            <Link href='/auth/logout' prefetch={false}>
              <SidebarItem icon={IconLogout} label='Logout' />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
