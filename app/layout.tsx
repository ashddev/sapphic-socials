import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "../styles/background.css";
import { cn } from "@/lib/utils";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Sappic Space UK - Mailing List",
  description:
    "Stay up to day with our latest events and news by signing up to the The Sappic Space UK Mailing List.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `antialiased font-sans flex flex-col min-h-screen`,
          geistSans.variable
        )}
      >
        <main className="flex-grow flex items-center justify-center ">
          {children}
        </main>
      </body>
    </html>
  );
}
