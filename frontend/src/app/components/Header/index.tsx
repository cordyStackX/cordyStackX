import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
    return(
        <header>
            <div className="header__container">

                <a href="/page" className="logo__links">
                    <Image src="/vercel.svg"  alt="logo" title="This is my logo" width={40} height={40} />
                    <h3>Cordy Dev</h3>
                </a>

                <nav className="nav__bar">
                    <ul>
                        
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Playground</a>
                        </li>
                        <li>
                            <a href="#">Hackathons</a>
                        </li>
                        <li>
                            <a href="#">Contacts</a>
                        </li>
                    </ul>
                </nav>
                <div className="wallet__connect">
                    <ConnectButton
                        showBalance={false}
                        chainStatus="icon"
                        accountStatus="avatar"
                        label="Connect Testnet"
                    />
                </div>
            </div>
        </header>
    );
}