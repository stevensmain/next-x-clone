import type { Metadata } from "next";
import { Providers } from "./providers";

import "./globals.css";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
