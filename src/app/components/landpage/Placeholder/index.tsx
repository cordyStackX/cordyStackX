import React from "react";
import { Placeholder__css } from "@/app/config/css/landpage";
import Image from "next/image";
import image__src from "@/app/config/conf/images.json";
import { UseScroll__shadow } from "@/app/modules";
import { useInView } from "@/app/utilities";

export default function Placeholder() {
    const { ref: PHolder, isInView: PHolderIsInView } = useInView<HTMLDivElement>();

    const image__width = 140, image__height = 70;

    return(
        <section className={Placeholder__css.placeholder__section} style={{'--scroll-shadow' : `${UseScroll__shadow()}rem`} as React.CSSProperties}>
            <div className={`${Placeholder__css.placeholder__container} ${PHolderIsInView ? Placeholder__css.in_view : ''}`} ref={PHolder}>
                <div className={Placeholder__css.placeholder__logos}>
                    <Image 
                    src={image__src.placeholder.image__1}
                    alt="lorem image 1"
                    title="lorem ipsum"
                    width={image__width}
                    height={image__height}
                    priority={false}
                    className={Placeholder__css.placeholder__image}
                    />
                    <Image 
                    src={image__src.placeholder.image__2}
                    alt="lorem image 2"
                    title="lorem ipsum"
                    width={image__width}
                    height={image__height}
                    priority={false}
                    className={Placeholder__css.placeholder__image}
                    />
                    <Image 
                    src={image__src.placeholder.image__3}
                    alt="lorem image 3"
                    title="lorem ipsum"
                    width={image__width}
                    height={image__height}
                    priority={false}
                    className={Placeholder__css.placeholder__image}
                    />
                    <Image 
                    src={image__src.placeholder.image__4}
                    alt="lorem image 4"
                    title="lorem ipsum"
                    width={image__width}
                    height={image__height}
                    priority={false}
                    className={Placeholder__css.placeholder__image}
                    />
                    <Image 
                    src={image__src.placeholder.image__5}
                    alt="lorem image 5"
                    title="lorem ipsum"
                    width={image__width}
                    height={image__height}
                    priority={false}
                    className={Placeholder__css.placeholder__image}
                    />
                </div>
            </div>
        </section>
    );

}