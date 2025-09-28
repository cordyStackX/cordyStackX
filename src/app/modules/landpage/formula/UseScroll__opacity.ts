import { UseScroll } from "@/app/modules";

export default function UseScroll__opacity() {
    const scrollY = Number(UseScroll());
    
    const maxScroll = 500;
    const minScale = 0;

    const opacity = Math.max(minScale, 1 - scrollY / maxScroll);

    return opacity;
}