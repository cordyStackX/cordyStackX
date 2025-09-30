import { http, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';
import { BaseSepolia } from "../chains";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

export const config = createConfig({
  chains: [mainnet, BaseSepolia()],
  connectors: [
    walletConnect({ projectId })
  ],
  transports: {
    [mainnet.id]: http(),
    [BaseSepolia().id]: http()
  },
});