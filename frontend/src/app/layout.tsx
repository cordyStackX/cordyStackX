import React from "react";

import {
    ProvidersClientWrapper
} from "@/app/services/wagmi";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import setting from "@/app/config/conf/setting.json"; 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cordy Portfolio | Full Stack Developments",
  description: "Cordy portfolio featuring innovative Web2 & Web3 projects, developer experiments, and cutting-edge web solutions.",
  alternates: {
    canonical: setting.domain__links,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Cordy Portfolio | Full Stack Developments",
    description: "Cordy portfolio featuring innovative Web2 & Web3 projects, developer experiments, and cutting-edge web solutions.",
    url: setting.domain__links,
    siteName: "Cordy Developments",
    images: [
      {
        url: setting.openGraph,
        width: 800,
        height: 600,
      },
      {
        url: setting.openGraph,
        width: 1800,
        height: 1600,
        alt: "Cordy Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ProvidersClientWrapper>
        {children}
        </ProvidersClientWrapper>
      </body>
    </html>
  );
}
