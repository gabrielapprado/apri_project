import styles from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/Logo-APRI.png"
import LinkButton from '../ui/LinkButton'

function Header() {
    return (
        <nav className={styles.navbar}>

            <Link to='/'>
                <img src={logo} alt='Logo APRI' />
            </Link>

            <ul className={styles.list}>

                <li className={styles.item}>
                    <NavLink
                        to='/'
                        end
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                    >
                        Início
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink
                        to='/projetos'
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                    >
                        Projetos
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink
                        to='/cursos'
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                    >
                        Cursos
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink
                        to='/centroconteudos'
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                    >
                        Centro de Conteúdos
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink
                        to='/comoparticipar'
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                    >
                        Como Participar
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink
                        to='/parceiros'
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                    >
                        Parceiros
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink
                        to='/sobre'
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                    >
                        Sobre
                    </NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink
                        to='/contato'
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                    >
                        Contato
                    </NavLink>
                </li>

            </ul>

            <LinkButton to='/entrar' text='Entrar' cor={"vermelho"} />

        </nav>
    )
}

export default Header