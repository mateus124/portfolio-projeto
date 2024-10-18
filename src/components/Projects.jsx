import Project from './Project'
import styles from './Projects.module.css'

function Projects() {
    return (
        <section className={styles.sectionProjects}>
            <p className={styles.paragaph}>Projetos</p>
            <h2 className={styles.title}>Conheça meus projetos principais</h2>
            <ul className={styles.list}>
                <li>
                    <Project 
                        title="Primeiro projeto"
                        tech1="HTML"
                        tech2="CSS"
                        tech3="REACT"
                        desc="Sou um desenvolvedor iniciante engajado com tecnologias front-end, tenho noções de design e ferramenta FIGMA, Atuo na área a mais de 2 anos."
                        link="#"
                        image="https://raw.githubusercontent.com/mateus124/gameconnect/main/assets/images/image2.png"
                    ></Project>
                </li>
            </ul>
        </section>
    )
}

export default Projects