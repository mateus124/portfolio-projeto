import styles from './Project.module.css'

function Project({ title, tech1, tech2, tech3, desc, link, image }) {
    return (
        <div className={styles.container}>
            <div>
                <h3>{title}</h3>
                <ul className={styles.list}>
                    <li>{tech1}</li>
                    <li>{tech2}</li>
                    <li>{tech3}</li>
                </ul>
                <p>{desc}</p>
                <a href={link}>Acessar projeto</a>
            </div>
            <div className={styles.right}>
                <img src={image} alt="imagem projeto" />
            </div>
        </div>
    )
}

export default Project