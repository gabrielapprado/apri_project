import { Clock, Users, Calendar } from 'lucide-react'
import styles from './InfoCursos.module.css'

interface InfoCursoProps {
  duracao: string
  vagas: number
  proximaTurma: string
}

function InfoCurso({ duracao, vagas, proximaTurma }: InfoCursoProps) {
  return (
    <ul className={styles.lista}>
      <li className={styles.item}>
        <Clock size={20} className={styles.icone} />
        <span>Duração: {duracao}</span>
      </li>
      <li className={styles.item}>
        <Users size={20} className={styles.icone} />
        <span>{vagas} vagas disponíveis</span>
      </li>
      <li className={styles.item}>
        <Calendar size={20} className={styles.icone} />
        <span>Próxima turma: {proximaTurma}</span>
      </li>
    </ul>
  )
}

export default InfoCurso