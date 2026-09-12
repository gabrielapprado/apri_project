import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

type ButtonColor = "dourado" | "vermelho"

function LinkButton({to, text, cor}:{to:string, text:string, cor:ButtonColor}){

    return (
        <Link className={`${styles.btn} ${styles[cor]}`} to={to}>
            {text}
        </Link>
    )
}
export default LinkButton