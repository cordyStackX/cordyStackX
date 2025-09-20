import Image from "next/image";
import { About__css } from "@/app/config/css/landpage";
import image__src from "@/app/config/conf/images.json";
import { useInView } from "@/app/utilities";

export default function About() {
  // each element gets its own hook
  const { ref: img1Ref, isInView: img1InView } = useInView<HTMLSpanElement>();
  const { ref: img2Ref, isInView: img2InView } = useInView<HTMLSpanElement>();
  const { ref: titleRef, isInView: titleInView } = useInView<HTMLHeadingElement>();
  const { ref: lineRef, isInView: lineInView } = useInView<HTMLDivElement>();
  const { ref: para1, isInView: para1InView } = useInView<HTMLDivElement>();
  const { ref: para2, isInView: para2InView } = useInView<HTMLDivElement>();

  return (
    <section id="About" className={About__css.about__sections}>
      <div className={About__css.about__container}>
        <div className={About__css.about__left_side}>
          <div>
            <span
              className={About__css.about__left_side_image_1}
              ref={img1Ref}
              style={{
                transform: `translateX(${img1InView ? "0" : "-50px"})`,
                opacity: img1InView ? "1" : "0",
                transition: "0.7s ease-in-out",
              }}
            >
              <Image
                src={image__src.about.image__1}
                alt="Marc Giestin Louis Cordova"
                title="Marc Giestin Louis Cordova"
                width={420}
                height={560}
                priority={false}
              />
            </span>

            <span
              className={About__css.about__left_side_image_2}
              ref={img2Ref}
              style={{
                transform: `translateX(${img2InView ? "0" : "50px"})`,
                opacity: img2InView ? "1" : "0",
                transition: "0.7s ease-in-out",
              }}
            >
              <Image
                src={image__src.about.image__2}
                alt="Cordy Signature Avatar"
                title="Cordy Signature Avatar"
                width={420}
                height={420}
                priority={false}
              />
            </span>
          </div>
        </div>

        <div className={About__css.about__right_side}>
          <div className={About__css.about__right_side_info}>
            <h2
              ref={titleRef}
              style={{
                transform: `translateX(${titleInView ? "0" : "20px"})`,
                opacity: titleInView ? "1" : "0",
                transition: "0.8s ease",
              }}
            >
              ABOUT ME
            </h2>

            <div
              ref={lineRef}
              style={{
                width: lineInView ? "100%" : "0",
                transition: "1s ease-out",
              }}
            />

            <p
            ref={para1}
              style={{
                transform: `translateX(${para1InView ? "0" : "-20px"})`,
                opacity: para1InView ? "1" : "0",
                transition: para1InView ? "0.8s ease-out" : "0s",
              }}
            >
              Founder of CordyStackX | Full Stack Web & Web3 Developer | Next.js Enthusiast | Building innovative blockchain &
              web applications with speed, scalability, and modern design.
            </p>
            <p 
            ref={para2}
              style={{
                transform: `translateX(${para2InView ? "0" : "-20px"})`,
                opacity: para2InView ? "1" : "0",
                transition: para2InView ? "0.8s ease-out 0.2s" : "0s",
              }}
            >
              CordyStackX is my personal developer portfolio showcasing cutting-edge Full Stack Web and Web3 projects. Powered by
              Next.js, each project is optimized for performance, responsiveness, and SEO. I build innovative web solutions,
              explore blockchain applications, and share developer experiments that push the boundaries of modern web development.
            </p>
            <button>Ask my Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
}
