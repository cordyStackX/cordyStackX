import { Banner__css } from "@/app/config/css/landpage";
import setting from "@/app/config/conf/setting.json";
import { 
    FaLinkedin, FaGithub, 
    FaFacebook, FaTwitter, 
    FaTiktok
} from "react-icons/fa";
import Image from "next/image";

export default function Banner() {

    return(
        <section>
            <div className={Banner__css.banner__container}>
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
                <div className={Banner__css.banner__right_side}>
                    <div className={Banner__css.banner__right_side__imageWrapper}>
                        <Image 
                        src={setting.links__src.Banner__Image}
                        alt="Banner Image"
                        title="Building Gstatics"
                        width={1000}
                        height={980}
                        priority={false}
                        unoptimized
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
