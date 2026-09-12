import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import styles from './Footer.module.css'
import Logo from '../../assets/Logo-APRI.png'

const navegacao = [
  { label: 'Início', to: '/' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Cursos', to: '/cursos' },
  { label: 'Centro de Conteúdos', to: '/centroconteudos' },
]

const mais = [
  { label: 'Seja um Associado', to: '/associados' },
  { label: 'Seja um Patrono', to: '/patrono' },
  { label: 'Parceiros', to: '/parceiros' },
  { label: 'Sobre a Associação', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
]

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.colunas}>
        <div className={styles.sobre}>
          <img src={Logo} alt="APRI" className={styles.logo} />
          <p className={styles.descricao}>
            Associação Pró-Restauro de Itu. Preservando a história para as futuras gerações.
          </p>
          <div className={styles.redes}>
            <a href="#" aria-label="Instagram" className={styles.redeIcone}>
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className={styles.redeIcone}>
              <FaFacebookF />
            </a>
            <a href="#" aria-label="YouTube" className={styles.redeIcone}>
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className={styles.coluna}>
          <h2 className={styles.titulo}>Navegação</h2>
          <ul className={styles.lista}>
            {navegacao.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={styles.link}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.coluna}>
          <h2 className={styles.titulo}>Mais</h2>
          <ul className={styles.lista}>
            {mais.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={styles.link}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.coluna}>
          <h2 className={styles.titulo}>Contato</h2>
          <ul className={styles.lista}>
            <li className={styles.itemContato}>Rua Dr. José Elias, 9 - Centro, Itu, SP 13300-250</li>
            <li className={styles.itemContato}>(11) 2715-5878</li>
            <li className={styles.itemContato}>contato@apri.org.br</li>
          </ul>
        </div>
      </div>

      <div className={styles.direitos}>
        © 2026 APRI — Associação Pró-Restauro de Itu — CNPJ 64.547.893/0001-72
      </div>
    </footer>
  )
}

export default Footer