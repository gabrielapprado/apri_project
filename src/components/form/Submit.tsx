import styles  from "./Submit.module.css"
type ButtonColor = "dourado" | "vermelho" |"rose"
interface SubmitProps{
    text :string;
    cor:ButtonColor
}

function Submit({text, cor}:SubmitProps){
    return(
        <button type="submit" className={`${styles.btn} ${styles[cor]}`}>
            {text}
        </button>
    )
}
export default Submit
