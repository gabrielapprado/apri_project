import Container from "../../ui/Container"
import Section from "../../ui/Section"
import SectionHeader from "../../ui/SectionHeader"
import Card from "../../ui/Card"
import CardGrid from "../../ui/CardGrid"
import IgrejaMatriz from "../../../assets/Igreja_matriz_de_Itu.jpg"

function CDinamicosTab(){
    return(
        <div>
            <Section tom="claro">
                <Container>
                    <SectionHeader titulo="Blog e Notícias" descricao="Artigos, novidades e atualizações sobre patrimônio e cultura" linha={false}/>
                    <CardGrid>
                        <Card 
                            imagem={IgrejaMatriz} 
                            imagemAlt="Fotografia Igreja Matriz"
                            titulo="História e Patrimônio de Itu"
                            descricao="Conheça a trajetória histórica e os principais patrimônios da cidade"
                            botaoTexto="Leia Mais →"
                            botaoTo="/cursos"
                        />
                        <Card 
                            imagem={IgrejaMatriz} 
                            imagemAlt="Fotografia Igreja Matriz"
                            titulo="Introdução a Conservação"
                            descricao="Aprenda conceitos básicos sobre preservação e conservação patrimonial"
                            botaoTexto="Leia Mais →"
                            botaoTo="/cursos"
                        />
                        <Card 
                            imagem={IgrejaMatriz} 
                            imagemAlt="Fotografia Igreja Matriz"
                            titulo="Arquitetura Colonial Paulista"
                            descricao="Entenda as características da arquitetura histórica do interior de São Paulo"
                            botaoTexto="Leia Mais →"
                            botaoTo="/cursos"
                        />
                    </CardGrid>
                </Container>
            </Section>

            <Section tom="terroso">
                <Container>
                    <SectionHeader titulo="Próximos Eventos" descricao="Participe de palestras, visitas e workshops promovidos pela APRI"/>
                    <CardGrid>
                        <Card 
                            imagem={IgrejaMatriz} 
                            imagemAlt="Fotografia Igreja Matriz"
                            titulo="História e Patrimônio de Itu"
                            descricao="Conheça a trajetória histórica e os principais patrimônios da cidade"
                            botaoTexto="Inscreva-se →"
                            botaoTo="/cursos"
                        />
                        <Card 
                            imagem={IgrejaMatriz} 
                            imagemAlt="Fotografia Igreja Matriz"
                            titulo="Introdução a Conservação"
                            descricao="Aprenda conceitos básicos sobre preservação e conservação patrimonial"
                            botaoTexto="Inscreva-se →"
                            botaoTo="/cursos"
                        />
                        <Card 
                            imagem={IgrejaMatriz} 
                            imagemAlt="Fotografia Igreja Matriz"
                            titulo="Arquitetura Colonial Paulista"
                            descricao="Entenda as características da arquitetura histórica do interior de São Paulo"
                            botaoTexto="Inscreva-se →"
                            botaoTo="/cursos"
                        />
                    </CardGrid>
                </Container>
            </Section>
        </div>
    )
}
export default CDinamicosTab