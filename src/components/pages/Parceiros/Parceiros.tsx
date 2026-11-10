import Section from "../../ui/Section"
import Container from "../../ui/Container"
import SectionHeader from "../../ui/SectionHeader"
import { parceiros } from "../../../data/parceiros"
import CardGrid from "../../ui/CardGrid"
import { LuHandshake, LuUsers, LuHeart, LuTrendingUp, LuMail } from "react-icons/lu";
import styles from "./Parceiros.module.css"
import CardParceiros from "./CardParceiros"
import LinkButton from "../../ui/LinkButton"
import Footer from "../../layout/Footer"
import CardApresentacao from "../../ui/CardApresentacao"

function Parceiros(){

    const tiposParceiros = [
    {
        id:1,
        icon: <LuHandshake size={36}/>,
        title: "Apoiadores Institucionais",
        desc: "Instituições que contribuem com suporte técnico, institucional ou estrutural para o desenvolvimento das ações da APRI.",
    },
    {
        id:2,
        icon: <LuUsers size={36}/>,
        title: "Coautores de Projetos",
        desc: "Parceiros que participam diretamente da construção e execução de projetos em conjunto com a associação.",
    },
    {
        id:3,
        icon: <LuHeart size={36}/>,
        title: "Patronos",
        desc: "Responsáveis pelo apoio a projetos específicos da APRI, contribuindo para sua viabilização.",
    },
    {   
        id:4,
        icon: <LuTrendingUp size={36}/>,
        title: "Investidores",
        desc: "Apoiam iniciativas da associação por meio de recursos destinados a projetos e ações institucionais.",
    },
    ];

    const nossosParceiros = [
    { id:1,nome: "FATEC Votorantim", site: "#" },
    { id:2, nome: "Revista Campo & Cidade", site: "#" },
    { id:3, nome: "Associação dos Engenheiros e Arquitetos de Itu", site: "#" },
    { id:4, nome: "JPN Assessoria Contábil", site: "#" },
    { id:5, nome: "Instituto Traço", site: "#" },
    ];

    return (
        <div>
            <Section tom="vermelho">
                <Container>
                    <SectionHeader titulo="Parceiros" descricao="A APRI desenvolve suas atividades por meio da colaboração com diferentes instituições, profissionais e apoiadores. As parcerias são fundamentais para viabilizar projetos, fortalecer iniciativas e ampliar o alcance das ações voltadas à preservação do patrimônio cultural." />
                </Container>
            </Section>
            <Section tom="claro">
                <Container>
                    <SectionHeader titulo="Tipos de Parceiros"  />
                     <div className={styles.destaques}>
                        {tiposParceiros.map((p) => (
                        <CardApresentacao
                            key={p.id}
                            titulo={p.title}
                            desc={p.desc}
                            icon={p.icon}
                        />
                        ))}
                    </div>
                </Container>
            </Section>
            <Section tom="terroso">
                <Container>
                    <SectionHeader titulo="Nossos Parceiros"  />
                     <div className={styles.parceirosGrid}>
                        {nossosParceiros.map((p) => (
                            <div key={p.id} className={styles.parceiroCard}>
                            <div className={styles.destaqueIcone}>
                                <LuHandshake size={28} />
                            </div>
                            <h3>{p.nome}</h3>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
            <Section tom="claro">
                <Container>
                    <SectionHeader titulo="Destaque de Parceirias"  descricao="Algumas parcerias se destacam pelo impacto gerado nos projetos desenvolvidos, contribuindo diretamente para a preservação e valorização do patrimônio cultural." />
                    <CardGrid>
                        {parceiros.map((p)=>(
                            <CardParceiros
                                key={p.id}
                                titulo={p.title}
                                descricao={p.desc}
                                imagem={p.img}
                                imagemAlt={p.title}
                            />
                        ))}
                    </CardGrid>
                </Container>
            </Section>
            <Section tom="vermelho">
                <Container>
                    <div className={styles.iconDestaqueDourado}>
                        <LuMail size={36} />
                    </div>
                    <SectionHeader titulo="Seja um Parceiro" descricao="A APRI está aberta a novas parcerias que compartilhem do compromisso com a preservação do patrimônio cultural. Se sua instituição deseja colaborar com nossas iniciativas, entre em contato conosco." linha={false}/>
                    <LinkButton cor="dourado" text="Entrar em contato →" to='/contato' />
                </Container>
            </Section>
            <Footer />
        </div>
    )
}

export default Parceiros