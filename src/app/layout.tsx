import React from "react";
import { MetadataUtils, Json_LD, Cursor, Gtag } from "./utilities";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next";

import {
    Providers
} from "@/app/services/minikit";
import '@cordystackx/cordy_minikit/dist/css/UI_Comp/styles.module.css';
import '@cordystackx/cordy_minikit/dist/css/Buttons/styles.module.css';

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
          <Providers>
            {children}  
          </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
