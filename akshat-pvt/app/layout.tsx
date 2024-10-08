import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const mono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ["latin", "latin-ext"],
  style: "normal"
})

export const metadata: Metadata = {
  title: "2One",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={mono.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </>
  );
}
