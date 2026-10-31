import type { ReactNode } from 'react'
import { MapPin } from 'lucide-react'
import styles from './Card.module.css'
import LinkButton from './LinkButton'

interface CardProps {
    imagem: string,
    imagemAlt: string,
    titulo: string,
    descricao: string,
    botaoTexto: string,
    botaoTo: string,
    localizacao?: string,
    selo?: ReactNode,
    rodape?: ReactNode
}

function Card({ imagem, imagemAlt, titulo, descricao, botaoTexto, botaoTo, localizacao, selo, rodape }: CardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imagemWrapper}>
                <img className={styles.imagem} src={imagem} alt={imagemAlt} />
                {selo}
            </div>
            <div className={styles.conteudo}>
                <h3>{titulo}</h3>
                {localizacao && (
                    <p className={styles.localizacao}>
                        <MapPin size={16} aria-hidden="true" />
                        <span>{localizacao}</span>
                    </p>
                )}
                <p>{descricao}</p>
                {rodape}
                <LinkButton cor="dourado" text={botaoTexto} to={botaoTo} />
            </div>
        </div>
    )
}

export default Card