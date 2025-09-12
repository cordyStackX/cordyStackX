import React from "react";

import { MetadataUtils, Json_LD } from "./utilities";

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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ProvidersClientWrapper>
        {children}
        </ProvidersClientWrapper>
      </body>
    </html>
  );
}
