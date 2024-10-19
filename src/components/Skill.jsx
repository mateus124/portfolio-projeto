import styles from './Skill.module.css'

function Skill({icon, title, desc}) {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={`https://raw.githubusercontent.com/mateus124/portfolio-projeto/refs/heads/main/src/assets/logos-tech/${icon}.png`} alt="icone" />
            </div>
            <span>{title}</span>
            <p>{desc}</p>
        </div>
    )
}

export default Skill