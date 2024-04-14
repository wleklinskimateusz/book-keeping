import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import "./globals.css";
import { customInitApp } from "@/firebase-admin";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

type RootLayoutProps = {
  children: ReactNode;
};

customInitApp();

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
