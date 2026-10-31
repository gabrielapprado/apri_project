import { useParams, Link } from 'react-router-dom'
import { bensTombados } from '../../../data/bensTombados'

function BemTombadoDetalhe() {
  const { id } = useParams()
  const bem = bensTombados.find((b) => b.id === Number(id))

  if (!bem) {
    return (
      <section>
        <h1>Bem não encontrado</h1>
        <Link to="/centroconteudos/benstombados">Voltar ao Centro de Conteúdos</Link>
      </section>
    )
  }

  return (
    <article>
      <Link to="/centroconteudos/benstombados">← Voltar</Link>
      <h1>{bem.titulo}</h1>
      <p>{bem.endereco}</p>
      <h2>Histórico</h2>
      <p>{bem.historico}</p>
      <h2>Situação de proteção</h2>
      <p>{bem.situacaoTexto}</p>
      <a href={bem.linkOficial} target="_blank" rel="noopener noreferrer">
        Site oficial ({bem.orgao})
      </a>
    </article>
  )
}

export default BemTombadoDetalhe