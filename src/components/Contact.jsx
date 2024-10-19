import styles from './Contact.module.css'
import image4 from '../assets/image4.png'

function Contact() {
    return (
        <section className={styles.sectionContact}>
            <div><img src={image4} alt="boneco" /></div>
            <div className={styles.right}>
                <p className={styles.title}>Entre em contato</p>
                <h2>Quer desenvolver uma ideia?</h2>
                <p className={styles.desc}>Sou um desenvolvedor iniciante engajado com tecnologias front-end, tenho noções de design e ferramenta FIGMA, Atuo na área a mais de 2 anos.</p>
                <a href="#">Fale comigo</a>
            </div>
        </section>
    )
}

export default Contact