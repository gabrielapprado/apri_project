import { useParams, Link } from 'react-router-dom'
import { projetosRestauro } from '../../../data/projetosRestauro'

function ProjetoResDetalhes(){
    const {id} = useParams()
    const projeto = projetosRestauro.find((p) => p.id === Number(id))
    if (!projeto) {
    return (
      <section>
        <h1>Projeto não encontrado</h1>
        <Link to="/projetos">Voltar a Projetos</Link>
      </section>
    )
  }

  return (
    <article>
      <Link to="/projetos">← Voltar</Link>
      <div>
        <img alt={projeto.name} src={projeto.img} />
      </div>
      <h1>{projeto.name}</h1>
      <p>{projeto.year}</p>
      <h2>Histórico</h2>
      <p>{projeto.desc}</p>
      
    </article>
  )
}

export default ProjetoResDetalhes