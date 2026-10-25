import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Itmami Aliyah Dewi | Portofolio",
  description:
    "Website portofolio pribadi Itmami Aliyah Dewi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}