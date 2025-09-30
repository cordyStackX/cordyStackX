"use client";
import Image__src from "../config/Image.json";
import { UI_Comp__css } from "../css";
import { WalletButton, Disconnect, getTokenBalance } from "../controllers";
import { useWalletModal } from "../wagmi__providers";
import { useAccount } from "wagmi";
import { FaUser } from 'react-icons/fa';
import { useState, useEffect } from "react";

export default function UI_Comp() {
  const { closeModal } = useWalletModal();
  const { isConnected, address } = useAccount();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>();
  const [balance, setBalance] = useState("");

  useEffect(() => {
    
    Get_Balance();

  }, [balance]);

  const Get_Balance = async () => {

    if (!address || !process.env.NEXT_PUBLIC_TOKENADDRESS) {
      throw new Error("Address or token address is undefined");
    }
    const balance = await getTokenBalance(address, process.env.NEXT_PUBLIC_TOKENADDRESS);

    setBalance(balance);
    return;
  };
  
  if (isConnected) {
  
  if (balance === "") {
    Get_Balance();
  }
  
  return(
    <div className={UI_Comp__css.container}>
      <div className={UI_Comp__css.connector}>
        <p className={UI_Comp__css.closed} onClick={closeModal}>✕</p>
        {isConnected && (
          <div className={UI_Comp__css.info}>
            {balance ? (
              <span>
                <FaUser size={70} />
                <p style={{color: "#0f0"}}>Connected</p>
                <p style={{color: "#0ff"}}>Balance: {Number(balance).toFixed(2)} {process.env.NEXT_PUBLIC_SYMBOL}</p>
                <p style={{color: "#ff0"}}>{address}</p>
              </span>
              
            ) : (
                <p style={{color: "#fff"}}>Loading balance...</p>
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
}

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
