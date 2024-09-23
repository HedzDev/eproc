import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import BackgroundPattern from "@/components/BackgroundPattern";
import Header from "@/components/Header";

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

export const metadata: Metadata = {
  title: "Pro Commerce",
  description: "Buy at the best price",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased min-h-screen w-[80%] mx-auto bg-[#E5E8EC] text-sm text-zinc-900`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
