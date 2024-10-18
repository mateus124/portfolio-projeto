import Skill from './Skill'
import styles from './Skills.module.css'

function Skills() {
    return (
        <section className={styles.sectionSkills}>
            <p className={styles.title}>skills</p>
            <h2>Conheça as minhas habilidades</h2>
            <ul>
                <li><Skill
                    icon="Binary"
                    title="Lógica de programação"
                    desc="Tenho um bom desenvolvimento em equipe, cultivo amizades e bons relacionamentos"
                ></Skill></li>
                <li><Skill
                    icon="Binary"
                    title="Lógica de programação"
                    desc="Tenho um bom desenvolvimento em equipe, cultivo amizades e bons relacionamentos"
                ></Skill></li>
                <li><Skill
                    icon="Binary"
                    title="Lógica de programação"
                    desc="Tenho um bom desenvolvimento em equipe, cultivo amizades e bons relacionamentos"
                ></Skill></li>
                <li><Skill
                    icon="Binary"
                    title="Lógica de programação"
                    desc="Tenho um bom desenvolvimento em equipe, cultivo amizades e bons relacionamentos"
                ></Skill></li>
                <li><Skill
                    icon="Binary"
                    title="Lógica de programação"
                    desc="Tenho um bom desenvolvimento em equipe, cultivo amizades e bons relacionamentos"
                ></Skill></li>
                <li><Skill
                    icon="Binary"
                    title="Lógica de programação"
                    desc="Tenho um bom desenvolvimento em equipe, cultivo amizades e bons relacionamentos"
                ></Skill></li>
            </ul>
        </section>
    )
}

export default Skills