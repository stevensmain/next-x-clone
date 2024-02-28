import { Providers } from "../providers";

import FollowBar from "@/components/layout/follow-bar";
import Modal from "@/components/modal";
import Sidebar from "@/components/layout/sidebar";

import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
  title: "X Clone",
  description: "The main web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <div className="container h-full mx-auto max-w-6xl">
            <div className="grid grid-cols-4 h-full">
              <Sidebar />

              <main className="w-full border-l border-r border-white/20 min-h-screen col-span-2">
                {children}
              </main>

              <FollowBar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
