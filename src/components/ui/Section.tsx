import type { ReactNode } from 'react';
import styles from './Section.module.css'


type SectionTons = "vermelho" |"terroso"| "claro" | "cinza"

interface SectionProps{
    tom: SectionTons,
    children: ReactNode,
    className?: string
}

function Section({tom, children, className=''} : SectionProps){
    return(
       <section className={`${styles.section} ${styles[tom]} ${className} `}>
            {children}
       </section>
    )
}

export default Section