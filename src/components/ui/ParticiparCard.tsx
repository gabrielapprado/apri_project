import styles from './ParticiparCard.module.css'
import LinkButton from './LinkButton'
import type { LucideIcon } from 'lucide-react'

interface ParticiparCardProps {
    icon: LucideIcon,
    titulo: string,
    descricao: string,
    botaoTexto: string,
    botaoTo: string,
    destaque?: boolean
}

function ParticiparCard({ icon: Icon, titulo, descricao, botaoTexto, botaoTo, destaque = false }: ParticiparCardProps) {
    return (
        <div className={`${styles.card} ${destaque ? styles.destaque : ''}`}>
            {destaque && <span className={styles.badge}>Destaque</span>}
            <div className={styles.iconWrapper}>
                <Icon />
            </div>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <LinkButton cor={destaque ? 'dourado' : 'rose'} text={botaoTexto} to={botaoTo} />
        </div>
    )
}

export default ParticiparCard