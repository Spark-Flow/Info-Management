import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import TopNavbarComponent from "@/components/top-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "4SDA Info Management System",
  description: "Manage teachers, students, and classes with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Hides the sign up option
    <ClerkProvider appearance={{
      elements: {
        footer: "hidden",
      },
    }}>
      <html lang="en">
        <body className={inter.className}>
          <TopNavbarComponent />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
