import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Header__css } from "@/app/config/css/landpage";

export default function Header() {
    return(
        <header>
            <div className={Header__css.header__container}>

                <a href="/page" className={Header__css.logo__links}>
                    <Image src="/vercel.svg"  alt="logo" title="This is my logo" width={40} height={40} />
                    <h3>Cordy Dev</h3>
                </a>

                <nav className={Header__css.nav__bar}>
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
                <div className={Header__css.wallet__connect}>
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