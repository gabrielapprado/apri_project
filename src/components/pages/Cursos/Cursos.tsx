import { BookOpen, Users, ArrowRight } from 'lucide-react'
import type { CategoriaCursos } from "../../../data/Cursos"
import CardGrid from "../../ui/CardGrid"
import Container from "../../ui/Container"
import Section from "../../ui/Section"
import SectionHeader from "../../ui/SectionHeader"
import type { VarianteSelo } from "../../ui/Selo"
import { cursos } from "../../../data/Cursos"
import Card from "../../ui/Card"
import Selo from "../../ui/Selo"
import InfoCurso from "../../ui/InfoCursos"
import styles from "./Cursos.module.css"
import Footer from '../../layout/Footer'


const VarianteCategoria: Record<CategoriaCursos, VarianteSelo> ={
    'Arquitetura':'azul',
    'História':'marrom',
    'Patrimônio':'laranja',
    'Preservação':'verde'
}

const destaques = [
  {
    icone: <BookOpen size={36} />,
    titulo: 'Conhecimento Aplicado',
    descricao: 'Conteúdo prático voltado à realidade local',
  },
  {
    icone: <Users size={36} />,
    titulo: 'Instrutores Qualificados',
    descricao: 'Profissionais experientes em patrimônio',
  },
  {
    icone: <ArrowRight size={36} />,
    titulo: 'Certificado APRI',
    descricao: 'Certificação reconhecida na área',
  },
]


function Cursos(){
    return (
        <div>
            <Section tom="vermelho">
                <Container>
                    <SectionHeader titulo="Cursos APRI" descricao="Cursos de educação patrimonial ministrados pela própria associação para aproximar a comunidade da história e cultura de Itu"/>
                </Container>
            </Section>
            <Section tom='claro'>
                <Container>
                    <CardGrid>
                        {cursos.map((curso)=>(
                            <Card
                                key={curso.id}
                                imagem={curso.img}
                                imagemAlt={curso.titulo}
                                titulo={curso.titulo}
                                descricao={curso.desc}
                                botaoTexto="Inscrever-se"
                                botaoTo='/contato'
                                selo={<Selo texto={curso.categoria} posicao="direita" variante={VarianteCategoria[curso.categoria]} />}
                                rodape={<InfoCurso duracao={curso.duracao} vagas={curso.vagas} proximaTurma={curso.proximaTurma} />}
                            />
                        ))}
                    </CardGrid>
                </Container>
            </Section>
            <Section tom="terroso">
                <Container>
                    <SectionHeader titulo="Por que fazer nossos cursos?"/>
                     <div className={styles.destaques}>
                        {destaques.map((d) => (
                        <div key={d.titulo} className={styles.destaque}>
                            <div className={styles.destaqueIcone}>{d.icone}</div>
                            <h3>{d.titulo}</h3>
                            <p>{d.descricao}</p>
                        </div>
                        ))}
                    </div>
                </Container>
            </Section>
            <Footer />
        </div>
    )
}

export default Cursos