import { defineChain } from "viem";
import { getConfig } from "@cordystackx/cordy_minikit";

// Define Base Sepolia chain
export const baseSepolia = defineChain({
  id: 84531, // Base Sepolia chain ID
  name: "Base Sepolia",
  network: "base-sepolia",
  nativeCurrency: {
    name: "Base Sepolia Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_RPC_ENDPOINT || ""],
    },
    public: {
      http: [process.env.NEXT_PUBLIC_RPC_ENDPOINT || ""],
    },
  },
  blockExplorers: {
    default: { name: "Basescan", url: "https://sepolia.basescan.org" },
  },
  testnet: true,
});

// Example usage of getConfig with Base Sepolia
getConfig({ baseSepolia });
