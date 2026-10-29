import styles from './Projeto.module.css'
import Container from "../../ui/Container"
import Section from "../../ui/Section"
import SectionHeader from "../../ui/SectionHeader"
import LinkButton from '../../ui/LinkButton'
import CardGrid from '../../ui/CardGrid'
import { projetosRestauro } from '../../../data/projetosRestauro'
import { projetosEducacionais, type StatusProjeto } from '../../../data/projetosEducacionais'
import Card from '../../ui/Card'
import Selo, {type VarianteSelo} from '../../ui/Selo'
import Arrecadacao from '../../ui/Arrecadacao'
import Footer from '../../layout/Footer'



const varianteDoStatus: Record<StatusProjeto, VarianteSelo> = {
  'Em andamento': 'verde',
  'Captando recursos': 'laranja',
  'Planejamento': 'azul',
}

function Projetos(){
    return(
        <div>
            <Section tom="vermelho">
                <Container>
                    <SectionHeader titulo="Projetos" descricao="Conheça os projetos de restauro que acompanhamos e os projetos educacionais que você pode patrocinar" />
                </Container>
            </Section>
            <Section tom="terroso">
                <Container>
                    <SectionHeader titulo="Projetos de Restauro" />
                    <div className={styles.descricao}>
                    <p>
                        Os projetos de restauro são iniciativas voltadas à recuperação e
                        preservação de bens históricos e culturais. Nesses casos, a APRI atua como{' '}
                        <strong>intermediadora</strong>, conectando órgãos responsáveis,
                        especialistas e instituições envolvidas no processo.
                    </p>
                    <p>
                        Esses projetos <strong>não dependem de doações ou patronos</strong>, sendo
                        conduzidos a partir de diretrizes técnicas e institucionais, com foco na
                        conservação adequada do patrimônio.
                    </p>
                </div>

                <LinkButton cor="dourado" text="Confira o Estatuto" to="/estatuto.pdf" target="_blank" rel="noopener noreferrer" />

                <CardGrid>
                    {projetosRestauro.map((projeto)=>(
                        <Card
                            key={projeto.id}
                            imagem={projeto.img}
                            imagemAlt={projeto.name}
                            titulo={projeto.name}
                            descricao={projeto.desc}
                            botaoTexto="Leia a História"
                            botaoTo={`/projetos/${projeto.id}`}
                            selo={<Selo texto={`Desde ${projeto.year}`} variante='escuro' posicao='direita'/>}
                        />
                    ))}
                </CardGrid>
                </Container>
            </Section>
            <Section tom='claro'>
                <Container>
                    <SectionHeader titulo='Projetos de Educação Patrimonial'/>
                    <div className={styles.descricao}>
                        <p>Os projetos da APRI são iniciativas desenvolvidas pela própria associação, com foco na valorização 
                            e divulgação do patrimônio cultural por meio de ações educativas e informativas.</p>
                        <p>Para que esses projetos aconteçam, contamos com o apoio de <strong>patronos</strong>. 
                            Ao se tornar patrono, é possível escolher qual projeto deseja apoiar, contribuindo diretamente para a realização de ações específicas.</p>
                    </div>

                    <CardGrid>
                        {projetosEducacionais.map((projeto)=>(
                            <Card
                                key={projeto.id}
                                imagem={projeto.img}
                                imagemAlt={projeto.name}
                                titulo={projeto.name}
                                descricao={projeto.desc}
                                botaoTexto="Seja Patrono" 
                                botaoTo='/projetos/patrono'
                                selo={<Selo texto={projeto.status} variante={varianteDoStatus[projeto.status]} />}
                                rodape={<Arrecadacao arrecadado={projeto.raised} meta={projeto.goal} patronos={projeto.patronos}/>}
                            />
                        ))}
                    </CardGrid>
                </Container>
            </Section>
            <Section tom="terroso">
                <Container>
                    <SectionHeader titulo="Quer saber mais?" descricao="Entre em contato para conhecer melhor nossos projetos e formas de participação." />
                    <div className={styles.botoes}>
                        <LinkButton cor="dourado" to="/patrono" text="Seja Patrono" />
                        <LinkButton cor="rose" to="/contato" text="Fale Conosco" />
                    </div>
                </Container>
            </Section>
            <Footer />
        </div>
    )
}

export default Projetos