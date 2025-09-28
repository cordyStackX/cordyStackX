import Image from "next/image";
import { Header__css } from "@/app/config/css/landpage";
import {
    UseState
} from "@/app/modules";
import Hamburger from "hamburger-react";

// import { useAccount } from "wagmi";
// import { WalletOptions, Account } from "@/app/services/cordy_connect";

import image__src from "@/app/config/conf/images.json";

export default function Header() {
    // const { isConnected } = useAccount();
    const [ isOpen, setOpen ] = UseState(false);

    return(
        <header className={Header__css.header__header}>
            <div className={Header__css.overlay_blurr}></div>
            <div className={Header__css.header__container}>

                <span className={Header__css.hambuger__toggle}>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </span>
                
                <div className={`${Header__css.hambuger__containers} ${isOpen ? Header__css.hambuger__containers_open : ""}`}>
                    <nav className={Header__css.hamburger__nav__bar}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#About">About</a>
                        </li>
                        <li>
                            <a href="#Services">Services</a>
                        </li>
                        <li>
                            <a href="#Projects">Project</a>
                        </li>
                        <li>
                            <a href="#contacts">Contacts</a>
                        </li>
                        <li style={{margin: "20px 0"}}>
                             <a href="#" className={Header__css.hamburger__logo__links}>
                                <Image src={image__src.logo.image__1}  alt="logo" title="This is my logo" width={40} height={40} style={{filter: "var(--image-invert)"}}/>
                                <h3>CordyStackX</h3>
                            </a>
                        </li>
                    </ul>
                </nav>
                </div>

                <a href="#" className={Header__css.logo__links}>
                    <Image src={image__src.logo.image__1}  alt="logo" title="This is my logo" width={30} height={30} style={{filter: "var(--image-invert)"}}/>
                    <h3>CordyStackX</h3>
                </a>

                <nav className={Header__css.nav__bar}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#About">About</a>
                        </li>
                        <li>
                            <a href="#Services">Services</a>
                        </li>
                        <li>
                            <a href="#Projects">Project</a>
                        </li>
                        <li>
                            <a href="#contacts">Contacts</a>
                        </li>
                    </ul>
                </nav>
                <div className={Header__css.wallet__connect}>
                    
                </div>
            </div>
        </header>
    );
}