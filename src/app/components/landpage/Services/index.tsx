import { Services__css } from "@/app/config/css/landpage";
import { useInView } from "@/app/utilities";
import Image from "next/image";
import image__src from "@/app/config/conf/images.json";

import { UseRef } from "@/app/modules";

export default function Services() {
    const { ref: title, isInView: titleIsInView } = useInView<HTMLDivElement>();
    const { ref: para1, isInView: para1IsInView } = useInView<HTMLDivElement>();
    const refsArray = UseRef<(HTMLDivElement | null)[]>([]);

    const statArray = [
        { name: image__src.services.image__1.name, links: image__src.services.image__1.links, image: image__src.services.image__1.imageSource, params: image__src.services.image__1.descriptions},
        { name: image__src.services.image__2.name, links: image__src.services.image__2.links, image: image__src.services.image__2.imageSource, params: image__src.services.image__2.descriptions},
        { name: image__src.services.image__3.name, links: image__src.services.image__3.links, image: image__src.services.image__3.imageSource, params: image__src.services.image__3.descriptions},
        { name: image__src.services.image__4.name, links: image__src.services.image__4.links, image: image__src.services.image__4.imageSource, params: image__src.services.image__4.descriptions},
        { name: image__src.services.image__5.name, links: image__src.services.image__5.links, image: image__src.services.image__5.imageSource, params: image__src.services.image__5.descriptions},
        { name: image__src.services.image__6.name, links: image__src.services.image__6.links, image: image__src.services.image__6.imageSource, params: image__src.services.image__6.descriptions},
        { name: image__src.services.image__7.name, links: image__src.services.image__7.links, image: image__src.services.image__7.imageSource, params: image__src.services.image__7.descriptions},
        { name: image__src.services.image__8.name, links: image__src.services.image__8.links, image: image__src.services.image__8.imageSource, params: image__src.services.image__8.descriptions}
    ];

    return(
        <section id="Services" className={Services__css.static__section}>
            <div className={Services__css.static__container}>
                <div className={Services__css.static__title}>
                    <h2 ref={title}
                    style={{
                        opacity: titleIsInView ? "1" : "0",
                        transition: "1s 200ms ease"
                    }}
                    >Services</h2>
                    <p ref={para1}
                    style={{
                        opacity: para1IsInView ? "1" : "0",
                        transition: "1s 300ms ease"
                    }}
                    >Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                       <br/> Quidem error excepturi perspiciatis perferendis</p>
                </div>
                <div className={Services__css.static__status}>
                   {statArray.map((stat, index) => {
                        const { ref, isInView } = useInView<HTMLDivElement>();

                        return (
                            <div
                                className={Services__css.static__stat}
                                key={stat.name}
                                ref={(el) => {
                                    if (refsArray.current) {
                                        refsArray.current[index] = el; // store ref
                                    }
                                    ref.current = el; // attach to useInView
                                }}
                                style={{
                                    opacity: isInView ? 1 : 0,
                                    transform: isInView ? "translateY(0)" : "translateY(20px)",
                                    transition: `0.8s ease-out ${index * 0.2}s`,
                                }}
                            >
                                <div>
                                    <Image 
                                        src={stat.image}
                                        alt={`${stat.name} Logo`}
                                        title={`${stat.name}`}
                                        width={100}
                                        height={100}
                                        unoptimized
                                    />
                                </div>
                                <span>
                                    <h3
                                    style={{
                                        opacity: isInView ? 1 : 0,
                                        transform: isInView ? "translateX(0)" : "translateX(-20px)",
                                        transition: `0.8s ease-out ${index * 0.2}s`,
                                    }}
                                    >{stat.name}</h3>
                                    <p
                                    style={{
                                        opacity: isInView ? 1 : 0,
                                        transform: isInView ? "translateX(0)" : "translateX(-20px)",
                                        transition: `0.8s ease-out ${index * 0.2}s`,
                                    }}
                                    >{stat.params}</p>
                                </span>
                                <button>View Code {'>>'}</button>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}