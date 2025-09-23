import { Projects__css } from "@/app/config/css/landpage";
import image__src from "@/app/config/conf/images.json";
import project__src from "@/app/config/conf/project__links.json";
import Image from "next/image";
import { useInView } from "@/app/utilities";
import Link from "next/link";
import { UseRef } from "@/app/modules";

export default function Projects() {
    const treshold = 0.8;

    const { ref: grow1, isInView: growIsInView1 } = useInView<HTMLDivElement>(false, treshold);
    const { ref: grow2, isInView: growIsInView2 } = useInView<HTMLDivElement>(false, treshold);
    const { ref: grow3, isInView: growIsInView3 } = useInView<HTMLDivElement>(false, treshold);
    // const { ref: grow4, isInView: growIsInView4 } = useInView<HTMLDivElement>(false, treshold);
    // const { ref: grow5, isInView: growIsInView5 } = useInView<HTMLDivElement>(false, treshold);
    // const { ref: grow6, isInView: growIsInView6 } = useInView<HTMLDivElement>(false, treshold);

    const scrollRef = UseRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
        scrollRef.current.scrollBy({
            left: -300,
            behavior: "smooth",
        });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
        scrollRef.current.scrollBy({
            left: 300, 
            behavior: "smooth",
        });
        }
    };

    return(
        <section id="Projects" className={Projects__css.projects__sections}>
            <div className={Projects__css.projects__container}>
                <div className={Projects__css.projects__title}>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vel, error sequi similique mollitia</p>
                </div>
                <div className={Projects__css.projects__status} ref={scrollRef}>
                    <div ref={grow1} className={`${Projects__css.projects__stat} ${growIsInView1 ? Projects__css.projects__stat_grow : ''}`}>
                        <div className={Projects__css.projects__stat_imageContain}>
                            <div className={Projects__css.projects__stat_image}>
                                <Image
                                src={image__src.logo.image__1}
                                alt="Sample"
                                title="Samples"
                                width={170}
                                height={170}
                                unoptimized
                                />
                            </div>
                            <div className={Projects__css.projects__stat_image__cover}>
                               <Image
                                src={image__src.cover__photo.image__1}
                                alt="Cover"
                                title="Cover"
                                fill
                                unoptimized
                                />
                            </div>

                        </div>
                        <div className={Projects__css.projects__stat_title_buttons}>
                            <h2>Cordy Connects</h2>
                            <span>
                                <button> <Link href={project__src.cordy__connect.visit}>Visit</Link> </button>
                                <button> <Link href={project__src.cordy__connect.repo}>Open {'>>'}</Link> </button>
                            </span>
                            
                        </div>
                        <div className={Projects__css.projects__stat__info}>
                            <p>lightweight and customizable wallet connector built for Web3 applications. 
                                Inspired by RainbowKit, it streamlines wallet integration while keeping 
                                the developer experience simple and flexible. With a focus on speed, ease of use, 
                                and seamless UI customization, Cordy Connect empowers dApps to onboard users effortlessly.</p>
                        </div>
                        <div className={Projects__css.projects__stat_navigators}>
                            <button onClick={scrollLeft}> {'<<'} Prev</button> 
                            <button onClick={scrollRight}>Next {'>>'} </button>
                        </div>
                    </div>
                    <div ref={grow2} className={`${Projects__css.projects__stat} ${growIsInView2 ? Projects__css.projects__stat_grow : ''}`}>
                        Card 2
                    </div>
                    <div ref={grow3} className={`${Projects__css.projects__stat} ${growIsInView3 ? Projects__css.projects__stat_grow : ''}`}>
                        Card 3
                    </div>
                    {/* <div ref={grow4} className={`${Projects__css.projects__stat} ${growIsInView4 ? Projects__css.projects__stat_grow : ''}`}>
                        Card 4
                    </div>
                    <div ref={grow5} className={`${Projects__css.projects__stat} ${growIsInView5 ? Projects__css.projects__stat_grow : ''}`}>
                        Card 5
                    </div>
                    <div ref={grow6} className={`${Projects__css.projects__stat} ${growIsInView6 ? Projects__css.projects__stat_grow : ''}`}>
                        Card 6
                    </div> */}
                </div>
            </div>
        </section>
    );

}