import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  return (
    <html lang="en">
      <body
        className={poppins.variable}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
