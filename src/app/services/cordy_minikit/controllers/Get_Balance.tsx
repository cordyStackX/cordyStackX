import { ethers } from "ethers";
import ERC20_ABI from "../config/ERC20_ABI.json";

export default async function getTokenBalance(address: string, tokenAddress: string): Promise<string> {
  
  if (!address) return "0";

  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
    const balance = await contract.balanceOf(address);
    return ethers.formatUnits(balance, 18); 
    
  } catch (err) {
    console.error("Error fetching token balance:", err);
    return "0";
  }
}
