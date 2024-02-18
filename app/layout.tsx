import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'X Clone',
  description: 'The main web app'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
