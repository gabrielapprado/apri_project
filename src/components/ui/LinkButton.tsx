import { Link, type LinkProps } from 'react-router-dom'
import styles from './LinkButton.module.css'

type ButtonColor = "dourado" | "vermelho" | "rose" | "ambar" | "vinho";

type LinkButtonProps = LinkProps & {
    text: string
    cor: ButtonColor
}

function LinkButton({ text, cor, className, ...rest }: LinkButtonProps) {
    return (
        <Link
            {...rest}
            className={`${styles.btn} ${styles[cor]} ${className ?? ''}`}
        >
            {text}
        </Link>
    )
}
export default LinkButton