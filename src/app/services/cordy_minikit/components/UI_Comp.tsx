"use client";
import Image__src from "../config/Image.json";
import { UI_Comp__css } from "../css";
import { WalletButton, Disconnect } from "../controllers";
import { useWalletModal } from "../wagmi__providers";
import { useAccount, useBalance } from "wagmi";
import { useState } from "react";

export default function UI_Comp() {
  const { closeModal } = useWalletModal();
  const { isConnected, address } = useAccount();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>();

  const NEXT_PUBLIC_TOKENADDRESS = process.env.NEXT_PUBLIC_TOKENADDRESS as `0x${string}`;

  const { data: balance, isLoading } = useBalance({
    address,
    token: NEXT_PUBLIC_TOKENADDRESS
  });

  if (isConnected) return(
    <div className={UI_Comp__css.container}>
      <div className={UI_Comp__css.connector}>
        <p className={UI_Comp__css.closed} onClick={closeModal}>✕</p>
        <img src={Image__src.logo} width={50} height={50} />
        <h2>CordyStack Mini Kit</h2>
        {isConnected && (
          <div className={UI_Comp__css.info}>
            {isLoading ? (
              <p>Loading balance...</p>
            ) : (
              <span>
                <p style={{color: "#0f0"}}>Connected</p>
                <p style={{color: "#0ff"}}>Balance: {Number(balance?.formatted || 0).toFixed(2)} {balance?.symbol}</p>
                <p style={{color: "#ff0"}}>{address}</p>
              </span>
            )}
            
          </div>
        )}
        
        <Disconnect />
        <a href="https://cordy-stack-x.vercel.app/">
          Powered By CordyStackX
        </a>

      </div>
    </div>
  );

  return (
    <div className={UI_Comp__css.container}>
      <div className={UI_Comp__css.connector}>
        <p className={UI_Comp__css.closed} onClick={closeModal}>✕</p>
        <img src={Image__src.logo} width={50} height={50} />
        <h2>CordyStack Mini Kit</h2>

        <div>
            <h3>{loading ? "Loading..." : ""}</h3>
            <WalletButton
                onStatusChange={({ isPending, error }) => {
                setLoading(isPending);
                setErrorMsg(error);
                }}
            />
            
            <p>{errorMsg}</p>
        </div>
        
        
        

        <a href="https://cordy-stack-x.vercel.app/">
          Powered By CordyStackX
        </a>
      </div>
    </div>
  );
}
