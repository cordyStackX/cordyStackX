import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Header__css } from "@/app/config/css/landpage";
import {
    Header__hooks
} from "@/app/modules";
import Hamburger from "hamburger-react";

export default function Header() {

    const { isOpen, setOpen } = Header__hooks();

    return(
        <header>
            <div className={Header__css.header__container}>


                <span className={Header__css.hambuger__toggle}>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </span>
                
                <div className={Header__css.hambuger__containers} style={{display: isOpen ? "flex" : "none"}}>

                </div>

                <a href="/page" className={Header__css.logo__links}>
                    <Image src="/vercel.svg"  alt="logo" title="This is my logo" width={30} height={30} />
                    <h3>CordyStackX</h3>
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
                        label="Wallet Connect"
                    />
                </div>
            </div>
        </header>
    );
}