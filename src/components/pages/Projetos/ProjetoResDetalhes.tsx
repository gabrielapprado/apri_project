import { useParams, Link } from 'react-router-dom'
import { projetosRestauro } from '../../../data/projetosRestauro'
import styles from './ProjetoResDetalhes.module.css'
import Footer from '../../layout/Footer'

function paragrafos(texto: string) {
  return texto.split('\n').filter((p) => p.trim() !== '')
}

function ProjetoResDetalhes() {
  const { id } = useParams()
  const projeto = projetosRestauro.find((p) => p.id === Number(id))

  if (!projeto) {
    return (
      <section className={styles.notFound}>
        <h1>Projeto não encontrado</h1>
        <Link to="/projetos">← Voltar a Projetos</Link>
      </section>
    )
  }

  return (
    <article className={styles.page}>
      
      <header
        className={styles.hero}
        style={{ backgroundImage: `url(${projeto.img})` }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <Link to="/projetos" className={styles.back}>
            ← Voltar aos projetos
          </Link>

          <div className={styles.heroBottom}>
            <div className={styles.tags}>
              <span className={`${styles.tag} ${styles.tagGold}`}>
                Patrimônio histórico
              </span>
            </div>

            <h1 className={styles.title}>{projeto.name}</h1>
            <hr className="linha" />
          </div>
        </div>
      </header>

     
      <section className={styles.history}>
        <figure className={styles.historyPhoto}>
          <img src={projeto.img} alt={projeto.name} />
        </figure>

        <div className={styles.historyText}>
          <span className={styles.eyebrow}>História</span>
          <h2>A história de {projeto.name}</h2>
          {paragrafos(projeto.history).map((par, i) => (
            <p key={i}>{par}</p>
          ))}
        </div>
      </section>

      
      <section className={styles.intervencao}>
        <div className={styles.intervencaoInner}>
          

          <div className={styles.intervencaoText}>
            <span className={styles.eyebrow}>Atuação da APRI</span>
            <h2>Como a APRI atua neste projeto</h2>
            {paragrafos(projeto.intervencao).map((par, i) => (
              <p key={i}>{par}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ficha}>
        <div className={styles.fichaItem}>
          <span className={styles.fichaLabel}>Ano de referência</span>
          <p className={styles.fichaValue}>{projeto.year}</p>
        </div>

        <div className={styles.fichaItem}>
          <span className={styles.fichaLabel}>Categoria</span>
          <p className={styles.fichaValue}>Patrimônio histórico</p>
        </div>

         <div className={styles.fichaItem}>
          <span className={styles.fichaLabel}>Status</span>
          <p className={styles.fichaValue}>{projeto.status}</p>
        </div>
      </section>

      <section className={styles.explore}>
        <div className={styles.exploreInner}>
          <div>
            <span className={styles.eyebrow}>Continue explorando</span>
            <h3>Conheça outros patrimônios de Itu</h3>
          </div>

          <Link to="/projetos" className={styles.exploreBtn}>
            ← Ver projetos de restauro
          </Link>
        </div>
      </section>

      <Footer />
    </article>
  )
}

export default ProjetoResDetalhes