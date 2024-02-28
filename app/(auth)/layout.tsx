import { Providers } from "../providers";

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
          <div className="container h-full mx-auto max-w-6xl">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
