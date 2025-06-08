import type { Metadata } from "next";
import "./globals.css";
import type { AppProps } from 'next/app';
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/layout";
import { SanityLive } from "../sanity/lib/live";
import { DisableDraftMode } from "./components/DisableDraftMode";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { Suspense } from "react";
import Loading from "./loading";



export const metadata: Metadata = {
  title: "MIR",
  description: "A Design Company",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <Suspense fallback={<Loading />}>
        <main>
          {children}
          <SanityLive />
            {(await draftMode()).isEnabled && (
              <>
                <DisableDraftMode />
                <VisualEditing />
              </>
      )}
        </main>
        </Suspense>
      </body>
    </html>
  );
}
