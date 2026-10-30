import { Check } from "lucide-react"
import LinkButton from "../../ui/LinkButton"
import type { FormaParticipacao } from "../../../data/formasParticipacao"
import styles from "./CardParticipacao.module.css"

function CardParticipacao({
  icon: Icon,
  title,
  subtitle,
  desc,
  beneficios,
  requisitos,
  link,
  buttonText,
  cor,
}: FormaParticipacao) {
  return (
    <article className={`${styles.card} ${styles[cor]}`}>
      <div className={styles.conteudo}>
        <header className={styles.cabecalho}>
          <span className={styles.icone}>
            <Icon size={28} />
          </span>
          <div>
            <h2 className={styles.titulo}>{title}</h2>
            <p className={styles.subtitulo}>{subtitle}</p>
          </div>
        </header>

        <p className={styles.desc}>{desc}</p>

        <h3 className={styles.beneficiosTitulo}>Benefícios:</h3>
        <ul className={styles.lista}>
          {beneficios.map((item) => (
            <li key={item}>
              <Check size={18} />
              {item}
            </li>
          ))}
        </ul>

        <p className={styles.requisitos}>
          <strong>Requisitos:</strong> {requisitos}
        </p>
      </div>

      <aside className={styles.cta}>
        <h3>Interessado?</h3>
        <LinkButton cor={cor} text={buttonText} to={link} />
      </aside>
    </article>
  )
}

export default CardParticipacao