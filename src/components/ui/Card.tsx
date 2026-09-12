import styles from './Card.module.css'
import LinkButton from './LinkButton'

interface CardProps{
    imagem: string,
    imagemAlt : string,
    titulo: string,
    descricao : string,
    botaoTexto: string,
    botaoTo: string
}

function Card({imagem, imagemAlt, titulo, descricao, botaoTexto, botaoTo}:CardProps){
    return(
        <div className={styles.card}>
            <img className={styles.imagem} src={imagem} alt={imagemAlt} />
            <div className={styles.conteudo}>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
                <LinkButton cor="dourado" text={botaoTexto} to={botaoTo} />
            </div>
        </div>
    )
}

export default Card