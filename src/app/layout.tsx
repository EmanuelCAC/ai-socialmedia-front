"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import SideNavBar from "@/components/SideNavBar";
import { use, useEffect } from "react";
import { useAuthStore } from "@/stores/authStore";
import { redirect } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { isLogged } = useAuthStore()

  useEffect(() => {
    if (isLogged && !window.location.pathname.includes('/protected')) {
      redirect('/protected/copies')
    } else if (!isLogged && window.location.pathname.includes('/protected')) {
      redirect('/sign-in')
    }
  }, [isLogged])

  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <main className="min-h-[calc(100vh-240px)] flex flex-col items-center m-30">
          <div className="flex-1 w-full flex flex-col items-center">            
            {isLogged ? (
              <SideNavBar>
                {children}
              </SideNavBar>
            ) : (
            <div className="flex flex-col gap-20 min-w-[500px] max-h-[calc(100vh-240px)] justify-center items-center">
              {children}
            </div>)}
          </div>
        </main>
      </body>
    </html>
  );
}
