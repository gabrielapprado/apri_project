import styles from './CardParceiros.module.css'

interface CardProps {
    imagem: string,
    imagemAlt: string,
    titulo: string,
    descricao: string,
}

function CardParceiros({ imagem, imagemAlt, titulo, descricao }: CardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imagemWrapper}>
                <img className={styles.imagem} src={imagem} alt={imagemAlt} />
            </div>
            <div className={styles.conteudo}>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </div>
        </div>
    )
}

export default CardParceiros