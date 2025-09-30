// ConnectWalletBT.tsx
import { Buttons__css } from "../css";
import { useWalletModal } from "../wagmi__providers";
import { useAccount, useBalance } from "wagmi";

export default function ConnectWalletBT() {
  const { openModal } = useWalletModal();
  const { isConnected, address } = useAccount();

   const NEXT_PUBLIC_TOKENADDRESS = process.env.NEXT_PUBLIC_TOKENADDRESS as `0x${string}` | undefined;

  const { data: balance } = useBalance({
    address,
    token: NEXT_PUBLIC_TOKENADDRESS
  });

  return (
    <button
      className={Buttons__css.button__button}
      onClick={openModal}
    >
      {isConnected ? `${Number(balance?.formatted || 0).toFixed(2)} ${balance?.symbol}` : "Connect Wallet"}
    </button>
  );
}
