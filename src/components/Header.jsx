import styles from './Header.module.css'
import logo from '../assets/logo-horizontal.png'
import { useState } from 'react';

function Header(props) {
    const [isActive, setIsActive] = useState(false);
    const toggleClass = () => {
        setIsActive(!isActive);
    };
    
    return (
        <nav className={`${styles.header} ${styles[localStorage.getItem('theme')]}`}>
            <div className={styles.logo}>
                <img src={logo} alt="logo devindev"/>
            </div>
            <ul className={`${styles.navMenu} ${isActive ? styles.active : 'inactive'}`}>
                <li>Sobre mim</li>
                <li>Meus projetos</li>
                <li>Habilidades</li>
                <li>Contato</li>
                <li>
                    <input type="checkbox" onChange={() => props.mudarTema()} />
                </li>
            </ul>
            <div className={`${styles.hamb} ${isActive ? styles.active : 'inactive'}`} onClick={toggleClass}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Header