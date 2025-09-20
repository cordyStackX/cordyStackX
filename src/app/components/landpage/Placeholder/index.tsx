import { Placeholder__css } from "@/app/config/css/landpage";
import Image from "next/image";
import image__src from "@/app/config/conf/images.json";

export default function Placeholder() {

    const image__width = 140, image__height = 70;

    return(
        <section className={Placeholder__css.placeholder__section}>
            <div className={Placeholder__css.placeholder__container}>
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