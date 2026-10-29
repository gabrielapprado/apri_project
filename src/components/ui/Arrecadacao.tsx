import styles from './Arrecadacao.module.css'

interface ArrecadacaoProps {
  arrecadado: number
  meta: number
  patronos: number
}

const moeda = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

function Arrecadacao({ arrecadado, meta, patronos }: ArrecadacaoProps) {
  const porcentagem = Math.round((arrecadado / meta) * 100)

  return (
    <div className={styles.arrecadacao}>
      <div className={styles.linha}>
        <span>Arrecadado: {moeda(arrecadado)}</span>
        <strong className={styles.porcentagem}>{porcentagem}%</strong>
      </div>

      <div className={styles.barra}>
        <div className={styles.preenchimento} style={{ width: `${Math.min(porcentagem, 100)}%` }} />
      </div>

      <div className={`${styles.linha} ${styles.secundaria}`}>
        <span>Meta: {moeda(meta)}</span>
        <span>{patronos} patronos</span>
      </div>
    </div>
  )
}

export default Arrecadacao