import { UseScroll } from "@/app/modules";

export default function UseScroll__formula() {
    const scrollY = Number(UseScroll());
    
    const maxScroll = 3000;
    const minScale = 0.7;

    const scale = Math.max(minScale, 1 - scrollY / maxScroll);

    return scale;
}