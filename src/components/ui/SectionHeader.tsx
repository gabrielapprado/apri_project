import styles from './SectionHeader.module.css'

interface SectionHeaderProps{
    titulo: string,
    descricao?: string
    linha?:boolean
}

function SectionHeader({titulo, descricao, linha}:SectionHeaderProps){
    return(
        <div className={styles.header}>
            <h2 className="section-title">{titulo}</h2>
            <hr className={styles.linha}/>
            {linha && <hr className={styles.linha} />}
            {descricao && <p className="section-description">{descricao}</p> }
        </div>
    )
}

export default SectionHeader