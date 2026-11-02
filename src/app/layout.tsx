import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
});

export const metadata = {
  title: {
    default: "Itmami Aliyah Dewi | portofolio",
    template: "%s | Itmami Aliyah Dewi",
  },
  description: "portofolio Itmami Aliyah Dewi, siswa SMK calon Junior Web Developer di kelas Industri UBIG",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-latar text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}