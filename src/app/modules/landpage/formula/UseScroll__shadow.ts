import { UseScroll } from "@/app/modules";

export default function UseScroll__shadow() {
    const scrollY = Number(UseScroll());

    // shadow grows until 5rem max
    const maxSpread = 10; 
    const factor = 100; // higher = slower growth
    const shadowSpread = Math.min(maxSpread, scrollY / factor);

    return shadowSpread;

}