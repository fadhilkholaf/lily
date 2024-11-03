import type { Metadata } from "next";
import { Inter } from "next/font/google";

import CursorGallery from "@/components/CursorGallery";

import "./globals.css";

export const metadata: Metadata = {
  title: "Lily",
  description: "Hillary Abigail",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="select-none bg-landing-page bg-cover bg-center">
      <body className={`${inter.className} antialiased`}>
        <CursorGallery />
        {children}
      </body>
    </html>
  );
}
