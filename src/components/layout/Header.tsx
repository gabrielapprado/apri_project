import { useState } from 'react'
import styles from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/Logo-APRI.png"
import LinkButton from '../ui/LinkButton'

const links = [
    { to: '/', label: 'Início', end: true },
    { to: '/projetos', label: 'Projetos' },
    { to: '/cursos', label: 'Cursos' },
    { to: '/centroconteudos', label: 'Centro de Conteúdos' },
    { to: '/comoparticipar', label: 'Como Participar' },
    { to: '/parceiros', label: 'Parceiros' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/contato', label: 'Contato' },
]

function Header() {
    const [open, setOpen] = useState(false)

    const closeMenu = () => setOpen(false)

    return (
        <nav className={styles.navbar}>

            <Link to='/' onClick={closeMenu} className={styles.logo}>
                <img src={logo} alt='Logo APRI' />
            </Link>

            <button
                type='button'
                className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`}
                onClick={() => setOpen(!open)}
                aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={open}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`${styles.menu} ${open ? styles.open : ''}`}>

                <ul className={styles.list}>
                    {links.map(({ to, label, end }) => (
                        <li key={to} className={styles.item}>
                            <NavLink
                                to={to}
                                end={end}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    isActive ? styles.active : ''
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <LinkButton to='/entrar' text='Entrar' cor={"vermelho"} />

            </div>

        </nav>
    )
}

export default Header