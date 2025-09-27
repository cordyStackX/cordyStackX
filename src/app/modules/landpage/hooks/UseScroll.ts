import { UseEffect, UseState } from "@/app/modules";

export default function UseScroll() {
    const [ y, setY ] = UseState("");

    UseEffect({ callback: () => {
        const handle = () => setY(window.scrollY.toString());
        window.addEventListener("scroll", handle);
        return () => window.removeEventListener("scroll", handle);
    }});

    return y;

}