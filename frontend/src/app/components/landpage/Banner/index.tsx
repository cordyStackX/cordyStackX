import { Banner__css } from "@/app/config/css/landpage";
import setting from "@/app/config/conf/setting.json";
import Image from "next/image";

export default function Banner() {

    return(
        <section>
            <div className={Banner__css.banner__container}>
                <div className={Banner__css.banner__left_side}>
                    <h1>CordyStackX</h1>
                    <h4>Portfolio</h4>
                </div>
                <div className={Banner__css.banner__right_side}>
                    <div className={Banner__css.banner__right_side__imageWrapper}>
                        <Image 
                        src={setting.links__src.Banner__Image}
                        alt="Banner Image"
                        title="Building Gstatics"
                        width={1000}
                        height={900}
                        unoptimized
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
