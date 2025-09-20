import Image from "next/image";
import { About__css } from "@/app/config/css/landpage";
import image__src from "@/app/config/conf/images.json";

export default function About() {
    return(
        <section id="About" className={About__css.about__sections}>
            <div className={About__css.about__container}>
                <div className={About__css.about__left_side}>
                    <div>
                        <span className={About__css.about__left_side_image_1}>
                            <Image 
                            src={image__src.about.image__1}
                            alt="Marc Giestin Louis Cordova"
                            title="Marc Giestin Louis Cordova"
                            width={420}
                            height={560}
                            priority={false}
                            />
                        </span>
                        <span className={About__css.about__left_side_image_2}>
                            <Image 
                            src={image__src.about.image__2}
                            alt="Cordy Signature Avatar"
                            title="Cordy Signature Avatar"
                            width={420}
                            height={420}
                            priority={false}
                            />
                        </span>
                    </div>    
                </div>
                <div className={About__css.about__right_side}>
                    <div className={About__css.about__right_side_info}>
                        <h2>ABOUT ME</h2>
                        <div/>
                        <p>Founder of CordyStackX | Full Stack Web & Web3 Developer 
                        | Next.js Enthusiast | Building innovative blockchain & 
                        web applications with speed, scalability, and modern design.
                        </p>
                        <p>
                        CordyStackX is my personal developer portfolio 
                        showcasing cutting-edge Full Stack Web and Web3 
                        projects. Powered by Next.js, each project is optimized 
                        for performance, responsiveness, and SEO. 
                        I build innovative web solutions, explore 
                        blockchain applications, and share developer 
                        experiments that push the boundaries of modern web development.</p>
                        <button>Ask my Resume</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

