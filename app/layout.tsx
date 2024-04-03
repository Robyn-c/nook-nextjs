import type { Metadata } from "next";
import { Roboto, Quicksand } from "next/font/google";
import "./globals.css";
import Sidebar from "./(home)/_components/sidebar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto"
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand"
})

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
      <body className={`${quicksand.className} ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
