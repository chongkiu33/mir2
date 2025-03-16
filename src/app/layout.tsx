import type { Metadata } from "next";
import "./globals.css";
import type { AppProps } from 'next/app';
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/layout";
import { SanityLive } from "../sanity/lib/live";



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
      <body >
        <Navbar />
        {/* <Layout> */}
        <main>
          {children}
          <SanityLive />
        </main>
          {/* </Layout> */}
      </body>
    </html>
  );
}
