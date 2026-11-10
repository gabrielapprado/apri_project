import styles from './CardApresentacao.module.css'
import {type ReactNode } from 'react'

interface CardAProps{
    titulo: string,
    desc: string, 
    icon: ReactNode
}

function CardApresentacao({titulo, desc, icon }: CardAProps){
    return(
        <div className={styles.apresentacao}>
            <div className={styles.apresentacaoIcone}>{icon}</div>
            <h3>{titulo}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default CardApresentacao