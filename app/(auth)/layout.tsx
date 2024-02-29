import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';

import { Providers } from '../providers';
import LoginModal from '@/components/modals/login-modal';

import 'react-toastify/dist/ReactToastify.css';
import '../globals.css';
import RegisterModal from '@/components/modals/register-modal';

export const metadata: Metadata = {
  title: "X Clone - What's happening now?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body>
        <Providers>
          <div className='container h-full mx-auto max-w-6xl'>{children}</div>

          <LoginModal />
          <RegisterModal />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
