import { Banner__css } from "@/app/config/css/landpage";
import Image from "next/image";
import image_src from "@/app/config/conf/images.json";

export default function Cube() {
  return (
    <div className={Banner__css.scene}>
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
