import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@nkeji-web/lib/utils";
import "./globals.css";
import { ReduxProvider } from "@nkeji-web/redux/provider";
import AuthDialog from "@nkeji-web/components/ui/auth-dialog";

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
      <ReduxProvider>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
          suppressHydrationWarning={true}
        >
          <AuthDialog />
          {children}

        </body>
      </ReduxProvider>
    </html>
  );
}
