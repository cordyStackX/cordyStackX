import type { Metadata } from "next";
import setting from "@/app/config/conf/setting.json"; 

export default function MetadataUtils() {
    const metadata: Metadata = {
        title: "CordyStackX | Full Stack Web/Web3 Developments",
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
            title: "CordyStackX | Full Stack Web/Web3 Developments",
            description: "Cordy portfolio featuring innovative Web2 & Web3 projects, developer experiments, and cutting-edge web solutions.",
            url: setting.domain__links,
            siteName: "CordyStackX",
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

    return metadata;

}