import image3 from '../assets/image3.png'
import styles from './Present.module.css'

function Present() {
    return (
        <section className={styles.sectionMain}>
            <div>
                <div className={styles.hello}>
                    <h2>&lt; Hello World!</h2>
                    <p>Eu sou o Mateus</p>
                    <h2>Software Developer / &gt;</h2>
                </div>
                <a href="#" className={styles.link}>Precisa de um projeto?</a>
            </div>
            <div className={styles.image}>
                <img src={image3} alt="imagem boneco"/>
            </div>
        </section>
    )
}

export default Present