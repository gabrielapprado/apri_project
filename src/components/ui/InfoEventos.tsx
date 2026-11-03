import { Calendar, MapPin } from 'lucide-react'
import styles from './InfoEventos.module.css'

interface InfoEventosProps {
    data: string
    localizacao: string
    vagas: number
}

function InfoEventos({ data, localizacao, vagas }: InfoEventosProps) {
    return (
        <div className={styles.info}>
            <p className={styles.data}>
                <Calendar size={16} aria-hidden="true" />
                <span>{data}</span>
            </p>
            <p className={styles.localizacao}>
                <MapPin size={16} aria-hidden="true" />
                <span>{localizacao}</span>
            </p>
            <p className={styles.vagas}>
                {vagas} {vagas === 1 ? 'vaga disponível' : 'vagas disponíveis'}
            </p>
        </div>
    )
}

export default InfoEventos