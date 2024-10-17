import image4 from '../assets/image4.png'
import icon1 from '../assets/logos-tech/instagramLogo.png'
import icon2 from '../assets/logos-tech/LinkedinLogo.png'
import icon3 from '../assets/logos-tech/ThreadsLogo.png'
import icon4 from '../assets/logos-tech/WhatsappLogo.png'
import icon5 from '../assets/logos-tech/XLogo.png'
import styles from './About.module.css'

function About() {
    return (
        <section className={styles.sectionAbout}>
            <div>
                <img src={image4} alt="boneco dois"/>
            </div>
            <div className={styles.right}>
                <h2>Sobre mim</h2>
                <p>Sou um desenvolvedor iniciante engajado com tecnologias front-end, tenho noções de design e ferramenta FIGMA, Atuo na área a mais de 2 anos.</p>
                <p>Sou um desenvolvedor iniciante engajado com tecnologias front-end, tenho noções de design e ferramenta FIGMA, Atuo na área a mais de 2 anos.</p>
                <ul className={styles.list}>
                    <li><img src={icon1} alt="instagram" /></li>
                    <li><img src={icon2} alt="linkedin" /></li>
                    <li><img src={icon3} alt="threads" /></li>
                    <li><img src={icon4} alt="whatsapp" /></li>
                    <li><img src={icon5} alt="x" /></li>
                </ul>
            </div>
        </section>
    )
}

export default About