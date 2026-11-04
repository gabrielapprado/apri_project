import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { LuCircleCheckBig, LuArrowRight } from 'react-icons/lu'
import { projetosEducacionais } from '../../../data/projetosEducacionais'
import styles from './ProjetoEduDetalhes.module.css'
import Footer from '../../layout/Footer'

const moeda = (valor: number) =>
  valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  })

function paragrafos(texto: string) {
  return texto.split('\n').filter((p) => p.trim() !== '')
}

function ProjetoEduDetalhes() {
  const { id } = useParams()
  const projeto = projetosEducacionais.find((p) => p.id === Number(id))

  const cardRef = useRef<HTMLDivElement>(null)
  const [animar, setAnimar] = useState(false)
  const [enviado, setEnviado] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimar(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [projeto])

  const aoEnviar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // api futura
    setEnviado(true)
  }

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
                Projeto Educacional
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
          <span className={styles.eyebrow}>Por que este projeto importa?</span>
          <h2>A importância de {projeto.name}</h2>
          {paragrafos(projeto.importancia).map((par, i) => (
            <p key={i}>{par}</p>
          ))}
        </div>
      </section>

      <section className={styles.ficha}>
        <div>
          <span className={styles.fichaLabel}>Categoria</span>
          <p className={styles.fichaValue}>Projeto Educacional</p>
        </div>

        <div>
          <span className={styles.fichaLabel}>Status</span>
          <p className={styles.fichaValue}>{projeto.status}</p>
        </div>
      </section>

      <section className={styles.finance}>
        <div>
          <span className={styles.eyebrow}>Transparência financeira</span>
          <h2>Cada recurso, um destino claro</h2>
        </div>

        <div className={styles.card} ref={cardRef}>
          <p>Valor arrecadado</p>

          <div className={styles.valor}>
            <strong>{moeda(projeto.raised)}</strong>
            <span>{projeto.progress}%</span>
          </div>

          <div className={styles.bar}>
            <div
              className={styles.fill}
              style={{ width: animar ? `${Math.min(projeto.progress, 100)}%` : '0%' }}
            />
          </div>

          <footer>
            <span>Meta: <strong>{moeda(projeto.goal)}</strong></span>
            <span><strong>{projeto.patronos}</strong> patronos</span>
          </footer>
        </div>

        <div className={styles.stats}>
          <div>
            <span>Meta financeira</span>
            <p>{moeda(projeto.goal)}</p>
          </div>
          <div>
            <span>Valor restante</span>
            <p>{moeda(Math.max(projeto.goal - projeto.raised, 0))}</p>
          </div>
          <div>
            <span>Patronos participantes</span>
            <p>{projeto.patronos}</p>
          </div>
        </div>
      </section>

      <section className={styles.interesse}>
        {enviado ? (
          <div className={styles.formCard}>
            <LuCircleCheckBig size={64} className={styles.check} aria-hidden="true" />
            <h2>Obrigado pelo seu interesse!</h2>
            <p>
              Em breve nossa equipe entrará em contato com todas as informações para
              oficializar sua participação na APRI.
            </p>
          </div>
        ) : (
          <form className={`${styles.formCard} ${styles.form}`} onSubmit={aoEnviar}>
            <span className={styles.eyebrow}>Demonstração de interesse</span>

            <label>
              Projeto selecionado
              <input type="text" name="projeto" value={projeto.name} readOnly />
            </label>

            <label>
              Nome completo *
              <input type="text" name="nome" placeholder="Seu nome" required />
            </label>

            <label>
              E-mail *
              <input type="email" name="email" placeholder="email@exemplo.com" required />
            </label>

            <label>
              Telefone/WhatsApp *
              <input type="tel" name="telefone" pattern="^\(\d{2}\)\s\d{5}-\d{4}$"  placeholder="(11) 99999-9999" required />
            </label>

            <button type="submit">
              Enviar demonstração de interesse <LuArrowRight aria-hidden="true" />
            </button>

            <small>
              Seus dados são tratados com total sigilo. Não compartilhamos
              informações pessoais.
            </small>
          </form>
        )}
      </section>

      <Footer />
    </article>
  )
}

export default ProjetoEduDetalhes