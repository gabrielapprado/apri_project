import styles from "./Home.module.css"
import Section from "../../ui/Section"
import SectionHeader from "../../ui/SectionHeader"
import Container from "../../ui/Container"
import Hero from "../../layout/Hero"
import LinkButton from "../../ui/LinkButton"
import Footer from "../../layout/Footer"
import CardGrid from "../../ui/CardGrid"
import Card from "../../ui/Card"
import IgrejaMatriz from "../../../assets/Igreja_matriz_de_Itu.jpg"

function Home(){
    return (
        <div>
            <Hero />
            <Section tom={"terroso"}>
                <Container>
                    <SectionHeader 
                    titulo="Sobre a APRI" 
                    descricao="Somos uma entidade 
                    sem fins lucrativos dedicada à preservação 
                    do patrimônio material e imaterial de Itu. 
                    Nossa atuação consiste na organização e 
                    encaminhamento de projetos de restauro aos órgãos competentes, 
                    além do desenvolvimento de iniciativas de educação patrimonial. 
                    É fundamental destacar que a APRI 
                    não executa as obras de restauro e intervenções físicas de forma direta; 
                    sua atuação é de caráter estritamente institucional e gerencial."
                    /> 
                    <LinkButton cor="dourado" text="Junte-se a nós →" to="/comoparticipar" />
                </Container>
            </Section>

            <Section tom={"claro"}>
                <Container>
                    <SectionHeader 
                    titulo="Cursos APRI" 
                    descricao="Cursos ministrados pela própria associação, 
                    desenvolvidos para fomentar a educação patrimonial e 
                    aproximar a comunidade da história de Itu."/>
                    <CardGrid>
                        <Card 
                            imagem={IgrejaMatriz} 
                            imagemAlt="Fotografia Igreja Matriz"
                            titulo="História e Patrimônio de Itu"
                            descricao="Conheça a trajetória histórica e os principais patrimônios da cidade"
                            botaoTexto="Acesse →"
                            botaoTo="/cursos"
                        />
                        <Card 
                            imagem={IgrejaMatriz} 
                            imagemAlt="Fotografia Igreja Matriz"
                            titulo="Introdução a Conservação"
                            descricao="Aprenda conceitos básicos sobre preservação e conservação patrimonial"
                            botaoTexto="Acesse →"
                            botaoTo="/cursos"
                        />
                        <Card 
                            imagem={IgrejaMatriz} 
                            imagemAlt="Fotografia Igreja Matriz"
                            titulo="Arquitetura Colonial Paulista"
                            descricao="Entenda as características da arquitetura histórica do interior de São Paulo"
                            botaoTexto="Acesse →"
                            botaoTo="/cursos"
                        />
                    </CardGrid>
                    <LinkButton cor="rose" text="Ver todos os cursos →" to="/cursos" />
                </Container>
            </Section>

            <Section tom={"cinza"}>
                <Container>
                    <SectionHeader 
                    titulo="Projetos de Educação Patrimonial" 
                    descricao="Os projetos de educação patrimonial da 
                    APRI são iniciativas voltadas à valorização e preservação 
                    do patrimônio cultural por meio de ações educativas e informativas, 
                    como a produção de folhetos, materiais explicativos, maquetes 3D e outros 
                    recursos que ajudam a aproximar a comunidade desse tema. Esses projetos são desenvolvidos 
                    pela própria associação e contam com o apoio de patronos para se tornarem realidade. Ao se 
                    tornar patrono, é possível escolher qual projeto deseja apoiar, contribuindo diretamente para a 
                    realização de ações específicas."/>
                    <CardGrid>
                        <Card 
                            imagem={IgrejaMatriz} 
                            imagemAlt="Fotografia Igreja Matriz"
                            titulo="Folhetos Educativos"
                            descricao="Produção de materiais informativos sobre os patrimônios históricos de Itu, 
                            distribuídos gratuitamente em escolas e espaços culturais."
                            botaoTexto="Saiba Mais →"
                            botaoTo="/projetos"
                        />
                        <Card 
                            imagem={IgrejaMatriz} 
                            imagemAlt="Fotografia Igreja Matriz"
                            titulo="Maquete 3D"
                            descricao="Desenvolvimento de maquetes tridimensionais de edifícios 
                            históricos para exposições e atividades educativas."
                            botaoTexto="Saiba Mais →"
                            botaoTo="/projetos"
                        />
                        <Card 
                            imagem={IgrejaMatriz} 
                            imagemAlt="Fotografia Igreja Matriz"
                            titulo="Palestras em Escolas"
                            descricao="Ciclo de palestras sobre educação patrimonial voltado para estudantes 
                            do ensino fundamental e médio."
                            botaoTexto="Saiba Mais →"
                            botaoTo="/projetos"
                        />
                    </CardGrid>
                </Container>
            </Section>

            <Section tom={"claro"}>
                <Container>
                    <SectionHeader titulo="Como Participar"/>
                </Container>
            </Section>

            <Section tom={"vermelho"}>
                <Container>
                    <div className={styles.cta}>
                        <p className={styles.cta_subtitulo}>FAÇA PARTE DESTA HISTÓRIA</p>
                        <h2 className={styles.cta_titulo}>
                            Preserve a memória de <span className={styles.cta_destaque}>Itu</span>
                        </h2>
                        <p className={styles.cta_descricao}>
                            Juntos, vamos valorizar a história e garantir que as próximas gerações
                            conheçam o patrimônio cultural de Itu.
                        </p>
                        <LinkButton to="/comoparticipar" text="Quero Apoiar →" cor="dourado" />
                    </div>
                </Container>
            </Section>

            <Footer />
        </div>

    )
}

export default Home