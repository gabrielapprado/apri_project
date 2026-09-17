import styles from './IconCard.module.css'
import type { LucideIcon } from 'lucide-react'

interface IconCardProps {
    icon: LucideIcon,
    titulo: string,
    descricao: string
}

function IconCard({ icon: Icon, titulo, descricao }: IconCardProps) {
    return (
        <div className={styles.iconCard}>
            <div className={styles.iconWrapper}>
                <Icon />
            </div>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </div>
    )
}

export default IconCard