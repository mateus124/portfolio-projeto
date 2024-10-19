import icon1 from '../assets/logos-tech/InstagramLogo.png'
import icon2 from '../assets/logos-tech/LinkedinLogo.png'
import icon3 from '../assets/logos-tech/ThreadsLogo.png'
import icon4 from '../assets/logos-tech/WhatsappLogo.png'
import icon5 from '../assets/logos-tech/XLogo.png'
import logo from '../assets/logo-horizontal.png'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Mateus Alves</p>
            <ul>
                <li><img src={icon1} alt="instagram" /></li>
                <li><img src={icon2} alt="linkedin" /></li>
                <li><img src={icon3} alt="threads" /></li>
                <li><img src={icon4} alt="whatsapp" /></li>
                <li><img src={icon5} alt="x" /></li>
            </ul>
            <div>
                <img src={logo} alt="logo" />
            </div>
        </footer>
    )
}

export default Footer