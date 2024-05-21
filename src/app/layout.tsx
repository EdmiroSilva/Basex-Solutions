import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Basex-Solutions",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="PT">
      <body className={inter.className}>
        {children}
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
      </body>
    </html>
  );
}