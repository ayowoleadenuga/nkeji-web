import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@nkeji-web/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nkeji",
  description: "Your favorite fly now and pay later service",
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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
