import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Calendar } from 'lucide-react'
import styles from './DetalheConteudo.module.css'

interface Destaque {
    titulo: string
    texto: string
    acao?: ReactNode
}

interface DetalheConteudoProps {
    voltarTo: string
    voltarTexto?: string
    categoria: string
    data?: string
    titulo: string
    localizacao?: string
    imagem: string
    imagemAlt: string
    secaoTitulo: string
    texto: string
    destaque?: Destaque
}

function DetalheConteudo({
    voltarTo,
    voltarTexto = 'Voltar',
    categoria,
    data,
    titulo,
    localizacao,
    imagem,
    imagemAlt,
    secaoTitulo,
    texto,
    destaque,
}: DetalheConteudoProps) {
    // separa o texto em parágrafos a cada linha em branco
    const paragrafos = texto.split(/\n\s*\n/).filter(Boolean)

    return (
        <article className={styles.pagina}>
            <div className={styles.conteudo}>
                <Link to={voltarTo} className={styles.voltar}>
                    <ArrowLeft size={18} aria-hidden="true" />
                    {voltarTexto}
                </Link>

                <header className={styles.cabecalho}>
                    <div className={styles.meta}>
                        <span className={styles.categoria}>{categoria}</span>
                        {data && (
                            <span className={styles.data}>
                                <Calendar size={14} aria-hidden="true" />
                                {data}
                            </span>
                        )}
                    </div>

                    <h1 className={styles.titulo}>{titulo}</h1>

                    {localizacao && (
                        <p className={styles.localizacao}>
                            <MapPin size={18} aria-hidden="true" />
                            <span>{localizacao}</span>
                        </p>
                    )}
                </header>

                <img className={styles.imagem} src={imagem} alt={imagemAlt} />

                <section className={styles.secao}>
                    <h2 className={styles.secaoTitulo}>{secaoTitulo}</h2>
                    <div className={styles.texto}>
                        {paragrafos.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                </section>

                {destaque && (
                    <div className={styles.destaque}>
                        <h3>{destaque.titulo}</h3>
                        <p>{destaque.texto}</p>
                        {destaque.acao}
                    </div>
                )}
            </div>
        </article>
    )
}

export default DetalheConteudo