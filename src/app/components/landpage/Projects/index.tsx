import { Projects__css } from "@/app/config/css/landpage";
import { useInView } from "@/app/utilities";

export default function Projects() {
    const treshold = 0.8;

    const { ref: grow1, isInView: growIsInView1 } = useInView<HTMLDivElement>(false, treshold);
    const { ref: grow2, isInView: growIsInView2 } = useInView<HTMLDivElement>(false, treshold);
    const { ref: grow3, isInView: growIsInView3 } = useInView<HTMLDivElement>(false, treshold);
    const { ref: grow4, isInView: growIsInView4 } = useInView<HTMLDivElement>(false, treshold);
    const { ref: grow5, isInView: growIsInView5 } = useInView<HTMLDivElement>(false, treshold);
    const { ref: grow6, isInView: growIsInView6 } = useInView<HTMLDivElement>(false, treshold);

    return(
        <section id="Projects" className={Projects__css.projects__sections}>
            <div className={Projects__css.projects__container}>
                <div className={Projects__css.projects__title}>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vel, error sequi similique mollitia</p>
                </div>
                <div className={Projects__css.projects__status}>
                    <div ref={grow1} className={`${Projects__css.projects__stat} ${growIsInView1 ? Projects__css.projects__stat_grow : ''}`}>
                        Card 1
                    </div>
                    <div ref={grow2} className={`${Projects__css.projects__stat} ${growIsInView2 ? Projects__css.projects__stat_grow : ''}`}>
                        Card 2
                    </div>
                    <div ref={grow3} className={`${Projects__css.projects__stat} ${growIsInView3 ? Projects__css.projects__stat_grow : ''}`}>
                        Card 3
                    </div>
                    <div ref={grow4} className={`${Projects__css.projects__stat} ${growIsInView4 ? Projects__css.projects__stat_grow : ''}`}>
                        Card 4
                    </div>
                    <div ref={grow5} className={`${Projects__css.projects__stat} ${growIsInView5 ? Projects__css.projects__stat_grow : ''}`}>
                        Card 5
                    </div>
                    <div ref={grow6} className={`${Projects__css.projects__stat} ${growIsInView6 ? Projects__css.projects__stat_grow : ''}`}>
                        Card 6
                    </div>
                </div>
            </div>
        </section>
    );

}