import icon1 from '../assets/logos-tech/angular.png'
import icon2 from '../assets/logos-tech/css.png'
import icon3 from '../assets/logos-tech/html.png'
import icon4 from '../assets/logos-tech/js.png'
import icon5 from '../assets/logos-tech/react.png'
import styles from './Slide.module.css'

function Slide() {
    return (
        <section className={`${styles.sectionSlide} ${styles[localStorage.getItem('theme')]}`}>
            <ul className={styles.list}>
                <li>
                    <img src={icon1} alt="icone-tech" />
                </li>
                <li>
                    <img src={icon2} alt="icone-tech" />
                </li>
                <li>
                    <img src={icon3} alt="icone-tech" />
                </li>
                <li>
                    <img src={icon4} alt="icone-tech" />
                </li>
                <li>
                    <img src={icon5} alt="icone-tech" />
                </li>
                <li>
                    <img src={icon1} alt="icone-tech" />
                </li>
            </ul>
        </section>
    )
}

export default Slide