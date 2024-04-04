import type { Metadata } from "next";
import { Roboto_Slab, Quicksand } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nook",
  description: "Nook Social Media Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
          {children}
        </body>
    </html>
  );
}
