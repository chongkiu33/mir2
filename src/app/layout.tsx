import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/layout";

import type { AppProps } from 'next/app';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MIR",
  description: "A Design Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
