import styles from './Selo.module.css'
export type VarianteSelo = 'verde' | 'laranja' | 'azul' | 'escuro' |'marrom'
interface SeloProps {
  texto: string
  variante?: VarianteSelo
  posicao?: 'esquerda' | 'direita'
}

function Selo({ texto, variante = 'escuro', posicao = 'esquerda' }: SeloProps) {
  return (
    <span className={`${styles.selo} ${styles[variante]} ${styles[posicao]}`}>
      {texto}
    </span>
  )
}

export default Selo