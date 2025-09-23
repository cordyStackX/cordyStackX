import React from "react";
import { MetadataUtils, Json_LD, Cursor, Gtag } from "./utilities";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next";

import {
    ProvidersClientWrapper
} from "@/app/services/wagmi";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = MetadataUtils();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(Json_LD()) }}
        />
        <Gtag />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Cursor />
        <ProvidersClientWrapper>
        {children}
        </ProvidersClientWrapper>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
