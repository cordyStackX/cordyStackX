import React from "react";
import { Footer__css } from "@/app/config/css/landpage";
import { useInView } from "@/app/utilities";
import setting from "@/app/config/conf/setting.json";
import { 
    FaLinkedin, FaGithub, 
    FaFacebook, FaTwitter, 
    FaTiktok, FaTelegram,
    FaWhatsapp
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    const { ref: footer, isInView: footerIsInView } = useInView<HTMLDivElement>(false);

    return(
        <footer id="contacts" className={Footer__css.contacts__footer} ref={footer} 
        style={{'--height': footerIsInView ? '50vh' : '0', '--footer-shadows': footerIsInView ? '0 -10vh 30vh 90vh var(--background)' : '0 0 2rem 1rem var(--background)'} as React.CSSProperties}>
            <div className={Footer__css.contacts__container}>
                <div className={Footer__css.contacts__info}>
                    <h3>Social Media</h3>
                    <a href={setting.links__src.Social__links.linked_in} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30}/><p>Marc Giestin Louis Cordova</p>
                    </a>
                    <a href={setting.links__src.Social__links.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30}/><p>CordyStackX</p>
                    </a>
                    <a href={setting.links__src.Social__links.facebook} target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30}/><p>Marc Giestin Louis Cordova | CordyStackX</p>
                    </a>
                    <a href={setting.links__src.Social__links.twitter} target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30}/><p>CordyStackX</p>
                    </a>
                    <a href={setting.links__src.Social__links.tiktok} target="_blank" rel="noopener noreferrer">
                        <FaTiktok size={30}/><p>CordyStackX</p>
                    </a>
                </div>
                <div className={Footer__css.contacts__src}>
                    <h3>Contacts</h3>
                    <a href="mailto: cordovamarcgiestinlouis@gmail.com">
                        <MdEmail size={30}/><p>cordovamarcgiestinlouis@gmail.com</p>
                    </a>
                    <a href="https://t.me/cordystackx" target="_blank" rel="noopener noreferrer">
                        <FaTelegram size={30}/><p>@CordyStackX</p>
                    </a>
                    <a href="https://wa.me/639763441649" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={30}/><p>+63 976 344 1649</p>
                    </a>
                </div>
            </div>
        </footer>
    );
}