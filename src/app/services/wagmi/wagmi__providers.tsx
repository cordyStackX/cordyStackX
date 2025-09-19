import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from './config/walletConfig';

const queryClient = new QueryClient();

export default function WalletProviders({ children }: { children: ReactNode }) {
  return (
  <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        {children} 
      </QueryClientProvider> 
  </WagmiProvider>
  );
}
