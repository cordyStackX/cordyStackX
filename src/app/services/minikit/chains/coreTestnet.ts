import { defineChain } from "viem";
import { getConfig } from "@cordystackx/cordy_minikit";

export const coreTestnet = defineChain({
  id: 1114,
  name: "Core Blockchain TestNet",
  network: "core-testnet",
  nativeCurrency: {
    name: "Core Test Token",
    symbol: "tCORE2",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: [process.env.NEXT_PUBLIC_RPC_ENDPOINT || ""] },
    public: { http: [process.env.NEXT_PUBLIC_RPC_ENDPOINT || ""] },
  },
  blockExplorers: {
    default: { name: "CoreScan", url: process.env.NEXT_PUBLIC_RPC_ENDPOINT || "" },
  },
  testnet: true,
});

// Example usage of getConfig with coreTestnet
getConfig({ coreTestnet });
