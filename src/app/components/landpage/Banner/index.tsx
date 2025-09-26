import React from "react";
import { Banner__css } from "@/app/config/css/landpage";
import setting from "@/app/config/conf/setting.json";
import { 
    FaLinkedin, FaGithub, 
    FaFacebook, FaTwitter, 
    FaTiktok
} from "react-icons/fa";
import {
    UseScroll__formula
} from "@/app/modules";
import Cube from "./fx_effects";


export default function Banner() {

    const scrollShrink = UseScroll__formula();

    return(
        <section className={Banner__css.banner__sections}>
            <div className={Banner__css.banner__container} 
            style={{'--scroll-shrink' : `${scrollShrink}`} as React.CSSProperties}
            >
                <div className={Banner__css.banner__left_side}>
                    <span className={Banner__css.banner__left_side_title}>
                        <h1>Full Stack Web/Web3 Developer CordyStackX</h1>
                        <h4>Portfolio</h4> 
                    </span>
                    <span className={Banner__css.banner__left_side_links}>
                        <h2>Featured Web3 Projects </h2>
                        <a href={setting.links__src.Social__links.linked_in} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30}/>
                        </a>
                        <a href={setting.links__src.Social__links.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30}/>
                        </a>
                        <a href={setting.links__src.Social__links.facebook} target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30}/>
                        </a>
                        <a href={setting.links__src.Social__links.twitter} target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30}/>
                        </a>
                        <a href={setting.links__src.Social__links.tiktok} target="_blank" rel="noopener noreferrer">
                            <FaTiktok size={30}/>
                        </a>
                    </span>
                    <p>Full Stack Web & Web3 Developer building scalable, 
                        user-friendly applications. Experienced in both Web2 
                        and decentralized technologies, with a passion for hackathons 
                        (e.g., DoraHacks) and delivering innovative solutions.
                    </p>
                    <div className={Banner__css.banner__left_side_buttons}>
                        <span></span>
                        <button>Build With Me</button>
                    </div>
                    
                </div>
                <Cube />
            </div>
            
        </section>
    );
}