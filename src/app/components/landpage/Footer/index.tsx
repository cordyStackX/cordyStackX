import React from "react";
import { Footer__css } from "@/app/config/css/landpage";
import { useInView } from "@/app/utilities";

export default function Footer() {
    const { ref: footer, isInView: footerIsInView } = useInView<HTMLDivElement>(false);

    return(
        <footer id="contacts" className={Footer__css.contacts__footer} ref={footer} 
        style={{'--height': footerIsInView ? '50vh' : '0', '--footer-shadows': footerIsInView ? '0 -10vh 50vh 90vh var(--background)' : '0 0 2rem 1rem var(--background)'} as React.CSSProperties}>
            <div className={Footer__css.contacts__container}>
                <div className={Footer__css.contacts__info}>
                    <h2>CordyStackX</h2>
                </div>
            </div>
        </footer>
    );
}