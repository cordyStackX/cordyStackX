// ConnectWalletBT.tsx
import { Buttons__css } from "../css";
import { useWalletModal } from "../wagmi__providers";
import { useAccount, useBalance } from "wagmi";

export default function ConnectWalletBT() {
  const { openModal } = useWalletModal();
  const { isConnected, address } = useAccount();

  const { data: balance } = useBalance({
    address
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
