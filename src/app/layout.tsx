import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { 
   ClerkProvider,
 } from "@clerk/nextjs";
import "./globals.css";
import LogInPage from "@/app/loginPage/page"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARTIMA Utility",
  description: "ARTIMA utility app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
         
          {/* <LogInPage /> */}
          {children}
        </body>
      </html>
  </ClerkProvider>
  );
}
