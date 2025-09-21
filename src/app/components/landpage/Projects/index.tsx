import { Projects__css } from "@/app/config/css/landpage";

export default function Projects() {

    return(
        <section id="Projects" className={Projects__css.projects__sections}>
            <div className={Projects__css.projects__container}>
                <div className={Projects__css.projects__title}>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vel, error sequi similique mollitia</p>
                </div>
                <div className={Projects__css.projects__status}>
                    <div className={Projects__css.projects__stat}>
                        
                    </div>
                </div>
            </div>
        </section>
    );

}