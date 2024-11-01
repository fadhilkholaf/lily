import type { Metadata } from "next";
import localFont from "next/font/local";

import CursorGallery from "@/components/CursorGallery";

import "./globals.css";

export const metadata: Metadata = {
  title: "Lily",
  description: "Hillary Abigail",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="select-none bg-landing-page bg-cover bg-center">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorGallery />
        {children}
      </body>
    </html>
  );
}
