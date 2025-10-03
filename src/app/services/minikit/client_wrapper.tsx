'use client';
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import WalletProviders with SSR disabled
const WalletProviders = dynamic(() => import('./providers'), {
    ssr: false,
});

export default function ClientWrapper({ children }: { children: ReactNode }) {
    return <WalletProviders>{children}</WalletProviders>;
}