import React from "react";
import { Banner__css } from "@/app/config/css/landpage";
import { UseScroll__Deg } from "@/app/modules";
import Image from "next/image";
import image_src from "@/app/config/conf/images.json";

export default function Cube() {

    const Deg__Scroll = UseScroll__Deg();

    return (
        <div className={Banner__css.scene} style={{ '--scroll-degree': `${Deg__Scroll}deg` } as React.CSSProperties}>
            <div className={Banner__css.nav1_circle}></div>
            <div className={Banner__css.nav2_circle}></div>
            <div className={Banner__css.nav3_circle}></div>
            <div className={Banner__css.nav4_circle}></div>  
            <div className={Banner__css.cube}>
                <Image 
                src={image_src.logo.image__1}
                alt="FX Logo"
                title="FX Logo"
                fill
                />
                <div className={Banner__css.face + " " + Banner__css.front}></div>
                <div className={Banner__css.face + " " + Banner__css.back}></div>
                <div className={Banner__css.face + " " + Banner__css.right}></div>
                <div className={Banner__css.face + " " + Banner__css.left}></div>
                <div className={Banner__css.face + " " + Banner__css.top}></div>
                <div className={Banner__css.face + " " + Banner__css.bottom}></div>
            </div>
        </div>
    );
}
