import type {ReactNode} from 'react'
import styles from './Card.module.css'
import LinkButton from './LinkButton'

interface CardProps{
    imagem: string,
    imagemAlt : string,
    titulo: string,
    descricao : string,
    botaoTexto: string,
    botaoTo: string,
    selo?: ReactNode,
    rodape?: ReactNode
}

function Card({imagem, imagemAlt, titulo, descricao, botaoTexto, botaoTo, selo, rodape}:CardProps){
    return(
        <div className={styles.card}>
            <div className={styles.imagemWrapper}>
                <img className={styles.imagem} src={imagem} alt={imagemAlt} />
                {selo}
            </div>
            <div className={styles.conteudo}>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
                {rodape}
                <LinkButton cor="dourado" text={botaoTexto} to={botaoTo} />
            </div>
        </div>
    )
}

export default Card