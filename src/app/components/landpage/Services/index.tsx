import React from "react";
import { Services__css } from "@/app/config/css/landpage";
import { useInView } from "@/app/utilities";
import Image from "next/image";
import image__src from "@/app/config/conf/images.json";

export default function Services() {
    const { ref: title, isInView: titleIsInView } = useInView<HTMLDivElement>(true);
    const { ref: para1, isInView: para1IsInView } = useInView<HTMLDivElement>(true);

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
                    <span>
                        <h2 ref={title} className={`${Services__css.static__title_h2} ${titleIsInView ? Services__css.in_view_title : ''}`}>
                        Services
                        </h2>
                        <p ref={para1} className={`${Services__css.static__title_p} ${para1IsInView ? Services__css.in_view_title : ''}`}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                        Quidem error excepturi perspiciatis perferendis
                        </p>
                    </span>
                </div>
                <div className={Services__css.static__status}>
                   {statArray.map((stat, index) => {
                        const { ref, isInView } = useInView<HTMLDivElement>(true);

                        return (
                            <div
                            className={`${Services__css.static__stat} ${isInView ? Services__css.in_view : ''}`}
                            key={stat.name}
                            ref={ref}
                            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                            >
                            <div>
                                <Image 
                                src={stat.image}
                                alt={`${stat.name} Logo`}
                                title={stat.name}
                                width={100}
                                height={100}
                                unoptimized
                                />
                            </div>
                            <span>
                                <h3>{stat.name}</h3>
                                <p>{stat.params}</p>
                            </span>
                            <button>View More {'>>'}</button>
                            </div>
                        );
                        })}

                </div>
            </div>
        </section>
    );
}