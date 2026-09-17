import styles from './IconCardGrid.module.css'
import IconCard from './IconCard'
import { Shield, Target, Handshake } from 'lucide-react'

function IconCardGrid() {
    const itens = [
        {
            icon: Shield,
            titulo: 'Transparência',
            descricao: 'Prestação de contas clara e acessível a todos'
        },
        {
            icon: Target,
            titulo: 'Responsabilidade',
            descricao: 'Compromisso sério com a preservação cultural'
        },
        {
            icon: Handshake,
            titulo: 'Colaboração',
            descricao: 'Trabalho conjunto com comunidade e órgãos públicos'
        }
    ]

    return (
        <div className={styles.grid}>
            {itens.map((item, index) => (
                <IconCard
                    key={index}
                    icon={item.icon}
                    titulo={item.titulo}
                    descricao={item.descricao}
                />
            ))}
        </div>
    )
}

export default IconCardGrid