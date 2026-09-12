import styles from "./Hero.module.css"
import { Link } from "react-router-dom"
function Hero(){
    return(
        <section className={styles.hero}>
            <div>
                <p className={styles.hero_subtitulo}>ASSOCIAÇÃO PRÓ-RESTAURO · ITU, SP</p>
                <h1 className={styles.hero_titulo}>
                        Preservar o passado é <em className={styles.hero_destaque}>construir o futuro</em> da cidade.
                </h1>
                <p className={styles.hero_desc}>
                        Juntos, vamos valorizar a história de Itu e deixar um legado para as próximas gerações.
                </p>
                <Link to='/comoparticipar' className={styles.hero_link}>→ Faça parte desta iniciativa.</Link>
            </div>
        </section>
    )
}

export default Hero