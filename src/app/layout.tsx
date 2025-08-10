import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Zoltán Molnár - Portfolio",
  description: "This is my portfolio website showcasing my skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const navBarHeight: number = 3.5;
  
  return (
    <html lang="en">
      <body
        style={{ "--navbar-height": `${navBarHeight}rem` } as React.CSSProperties}
        className={`${poppins.variable} text-gray-50 bg-neutral-950`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
