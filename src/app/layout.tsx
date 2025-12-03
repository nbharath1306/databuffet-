import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data Buffet | Data Engineering Jobs in Europe",
  description: "Launch your Data Career in Europe. Expert-led training & placement support for Indian Engineers.",
  keywords: ["Data Engineering Jobs", "Europe", "Visa Sponsorship", "Sweden", "AI Jobs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
