import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../../../data/blogPosts'
import DetalheConteudo from '../../ui/DetalheConteudo'
import Footer from '../../layout/Footer'

function PostagensDetalhes(){
    const { id } = useParams()
    const post = blogPosts.find((p) => p.id === Number(id))

    if (!post) {
        return (
        <section>
            <h1>Postagem não encontrado</h1>
            <Link to="/centroconteudos/dinamicos">Voltar ao Centro de Conteúdos</Link>
        </section>
        )
    }

    return(
        <div>
            <DetalheConteudo
                voltarTo="/centroconteudos/dinamicos"
                voltarTexto="Voltar para Conteúdos Dinâmicos"
                categoria={post.categoria}
                data={post.data}
                titulo={post.titulo}
                imagem={post.img}
                imagemAlt={post.titulo}
                secaoTitulo="Leia mais"
                texto={post.historia}
            />
            <Footer />
        </div>
    )
  }

export default PostagensDetalhes