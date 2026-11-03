import { useParams, Link } from 'react-router-dom'
import { bensTombados } from '../../../data/bensTombados'
import DetalheConteudo from '../../ui/DetalheConteudo'
import Footer from '../../layout/Footer'

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
    <div>
      <DetalheConteudo
        voltarTo="/centroconteudos/benstombados"
        voltarTexto="Voltar para Bens Tombados"
        categoria={`${bem.esfera} • ${bem.orgao}`}
        titulo={bem.titulo}
        localizacao={bem.endereco}
        imagem={bem.img}
        imagemAlt={bem.titulo}
        secaoTitulo="Histórico"
        texto={bem.historico}
        destaque={{
            titulo: 'Situação de Tombamento',
            texto: bem.situacaoTexto,
            acao: (
                <a href={bem.linkOficial} target="_blank" rel="noopener noreferrer">
                    Consultar informação oficial
                </a>
            ),
        }}
      />
      <Footer />
    </div>
  )
}

export default BemTombadoDetalhe