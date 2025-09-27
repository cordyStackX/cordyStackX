import React from "react";
import { FX_Effects1_css } from "@/app/config/css/landpage";
import { UseScroll__Deg } from "@/app/modules";
import Image from "next/image";
import image_src from "@/app/config/conf/images.json";
import { useInView } from "@/app/utilities";

export default function Cube() {

    const Deg__Scroll = UseScroll__Deg();
    const { ref, isInView } = useInView<HTMLDivElement>(true);

    return (
        <div className={FX_Effects1_css.scene} ref={ref} style={{ '--scroll-degree': `${Deg__Scroll}deg`, '--load-appear': isInView ? 1 : 0 } as React.CSSProperties}>
            <div className={FX_Effects1_css.nav1_circle}></div>
            <div className={FX_Effects1_css.nav2_circle}></div>
            <div className={FX_Effects1_css.nav3_circle}></div>
            <div className={FX_Effects1_css.nav4_circle}></div> 
            <div className={FX_Effects1_css.border__circle}></div>
            <div className={FX_Effects1_css.border__circle2}></div>
            <div className={FX_Effects1_css.cube}>
                <span>
                    <Image 
                    src={image_src.logo.image__1}
                    alt="FX Logo"
                    title="FX Logo"
                    width={120}
                    height={120}
                    priority
                    />
                </span>
                <div className={FX_Effects1_css.face + " " + FX_Effects1_css.front}></div>
                <div className={FX_Effects1_css.face + " " + FX_Effects1_css.back}></div>
                <div className={FX_Effects1_css.face + " " + FX_Effects1_css.right}></div>
                <div className={FX_Effects1_css.face + " " + FX_Effects1_css.left}></div>
                <div className={FX_Effects1_css.face + " " + FX_Effects1_css.top}></div>
                <div className={FX_Effects1_css.face + " " + FX_Effects1_css.bottom}></div>
            </div>
        </div>
    );
}
