import styles from './Header.module.css'
import logo from '../assets/logo-horizontal.png'

function Header(props) {
    return (
        <nav className={`${styles.header} ${styles[localStorage.getItem('theme')]}`}>
            <div className={styles.logo}>
                <img src={logo} alt="logo devindev"/>
            </div>
            <ul className={styles.list}>
                <li>Sobre mim</li>
                <li>Meus projetos</li>
                <li>Habilidades</li>
                <li>Contato</li>
                <li>
                    <input type="checkbox" onChange={() => props.mudarTema()} />
                </li>
            </ul>
        </nav>
    )
}

export default Header