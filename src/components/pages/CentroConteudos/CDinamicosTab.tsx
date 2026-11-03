import Container from "../../ui/Container"
import Section from "../../ui/Section"
import SectionHeader from "../../ui/SectionHeader"
import Card from "../../ui/Card"
import CardGrid from "../../ui/CardGrid"
import type { categoriaPosts } from "../../../data/blogPosts"
import type { VarianteSelo } from "../../ui/Selo"
import { blogPosts } from "../../../data/blogPosts"
import Selo from "../../ui/Selo"
import { eventos } from "../../../data/eventosPosts"
import InfoEventos from "../../ui/InfoEventos"

const VarianteCategoriaPost: Record<categoriaPosts, VarianteSelo> ={
    'Arquitetura':'azul',
    'História':'marrom',
    'Notícias':'laranja',
    'Preservação':'verde'
}


function CDinamicosTab(){
    return(
        <div>
            <Section tom="claro">
                <Container>
                    <SectionHeader titulo="Blog e Notícias" descricao="Blogs, novidades e atualizações sobre patrimônio e cultura" linha={false}/>
                    <CardGrid>
                        {blogPosts.map((p)=>(
                            <Card
                                key={p.id}
                                imagem={p.img}
                                imagemAlt={p.titulo}
                                titulo={p.titulo}
                                descricao={p.desc}
                                botaoTexto="Leia mais →"
                                botaoTo={`/centroconteudos/dinamicos/${p.id}`}
                                selo={<Selo texto={p.categoria} variante={VarianteCategoriaPost[p.categoria]} posicao="direita" />}    
                            />
                        ))}
                    </CardGrid>
                </Container>
            </Section>

            <Section tom="terroso">
                <Container>
                    <SectionHeader titulo="Próximos Eventos" descricao="Participe de palestras, visitas e workshops promovidos pela APRI"/>
                    <CardGrid>
                        {eventos.map((e)=>(
                            <Card 
                                key={e.id}
                                imagem={e.img}
                                imagemAlt={e.titulo}
                                titulo={e.titulo}
                                botaoTexto="Inscreva-se →"
                                botaoTo={`/centroconteudos/dinamicos/eventos/${e.id}`}
                                descricao=""
                                rodape={<InfoEventos localizacao={e.local} vagas={e.vagas} data={e.data} />}
                                
                            />
                        ))}
                    </CardGrid>
                </Container>
            </Section>
        </div>
    )
}
export default CDinamicosTab