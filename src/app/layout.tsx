"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "app/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* export const metadata: Metadata = {
  title: "Future World",
  description: "Future World is a store for the future.",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{
  console.log("RootLayout SSR initial page");
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header></Header>
        {children}
      </body>
    </html>
  );
}
