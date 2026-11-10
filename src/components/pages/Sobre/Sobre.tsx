import Footer from "../../layout/Footer";
import CardApresentacao from "../../ui/CardApresentacao";
import Container from "../../ui/Container"
import Section from "../../ui/Section"
import SectionHeader from "../../ui/SectionHeader"
import styles from './Sobre.module.css'
import { LuLandmark, LuHandshake, LuFileText, LuGraduationCap, LuUsers, LuDownload, LuShield, LuEye} from "react-icons/lu";

function Sobre(){

    const atuacao =[
              {
                id:1,
                icon: <LuLandmark />,
                title: "Restauro e Conservação",
                desc: "Articulamos e intermediamos projetos de restauro de edificações históricas em parceria com órgãos de preservação e proprietários de imóveis tombados.",
              },
              {
                id:2,
                icon: <LuHandshake />,
                title: "Articulação Institucional",
                desc: "Atuamos como ponte entre a sociedade civil, poder público (CONDEPHAAT, IPHAN, Prefeitura) e proprietários de patrimônio para viabilizar ações de preservação.",
              },
              {
                id:3,
                icon: <LuFileText />,
                title: "Pesquisa",
                desc: "Desenvolvemos pesquisas históricas, levantamentos fotográficos e documentais sobre o patrimônio de Itu, produzindo conhecimento técnico de interesse público.",
              },
              {
                id:4,
                icon: <LuGraduationCap />,
                title: "Educação Patrimonial",
                desc: "Realizamos cursos, palestras, publicações e materiais educativos para sensibilizar a comunidade sobre a importância da preservação do patrimônio cultural.",
              },
            ]
        const diretoria = [
            { cargo: "Presidente", nome: "Geraldo Gonçalves Jr", email: "presidencia@apri.org.br" },
            { cargo: "Vice-Presidente", nome: "Neusa Maria Trettel Scavacini", email: "vice-presidencia@apri.org.br" },
            { cargo: "Secretária", nome: "Rosangela Aparecida de Mazi Carnevalli Pereira", email: "secretaria@apri.org.br" },
            { cargo: "Tesoureiro", nome: "Marcos Aparecido Passoni", email: "tesouraria@apri.org.br" },
            { cargo: "Diretor Técnico", nome: "Emerson Ribeiro Castilho", email: "dir.tecnica@apri.org.br" }
        ];
        const conselhoAdministrativo = {
            membros: ["Cândida Terezinha Rosa Brites", "Larissa Vieira Caldas", "Rafaello Carlo Ianni Lorenzon"],
            email: "conselho.administrativo@apri.org.br",
        };
        const conselhoFiscal = {
            membros: ["Adelino Cesar Rodrigues de Castro", "Atílio Antônio Scalet", "Josmar Fernando Leocci Camargo"],
            email: "conselho.fiscal@apri.org.br",
        };
        const docs = [
            { id:1, title: "Estatuto Social", desc: "Documento que estabelece as diretrizes, finalidades e estrutura da APRI.", to:"/estatuto.pdf" },
            { id:2, title: "Ata de Fundação", desc: "Registro oficial da fundação da associação em 2025.", to:"#" },
            { id:3, title: "Regimento Interno", desc: "Normas que regulam o funcionamento interno da organização.", to:"#" },
        ]


    return(
        <div>
            <Section tom="vermelho">
                <Container>
                    <SectionHeader titulo="Sobre a APRI" descricao="A APRI (Associação Pró-Restauro de Itu) é uma organização da sociedade civil sem fins lucrativos, fundada em 2025, que atua na preservação do patrimônio histórico, arquitetônico e cultural da cidade de Itu. Nossa missão é identificar, documentar, pesquisar e promover ações de conservação e restauro dos bens culturais de interesse público, articulando parcerias com órgãos públicos, iniciativa privada e a comunidade local." />
                </Container>
            </Section>
            <Section tom="claro">
                <Container>
                    <SectionHeader titulo="O que fazemos?" />
                    <div className={styles.gridSobre}>
                        {atuacao.map((a) =>(
                            <CardApresentacao 
                                key={a.id}
                                titulo={a.title}
                                desc={a.desc}
                                icon={a.icon}
                            />
                        ))}
                    </div>
                </Container>
            </Section>
            <Section tom="terroso">
                <Container>
                    <SectionHeader titulo="Como atuamos"/>
                    <div className={styles.atuacao}>
                        <p>A APRI <strong>não executa obras de restauro diretamente. </strong>
                            Nossa atuação é de <strong>articulação institucional</strong>, 
                            intermediando a relação entre proprietários de 
                            imóveis tombados, órgãos de preservação (CONDEPHAAT, IPHAN, Prefeitura Municipal de Itu) e 
                            profissionais especializados em restauro. Identificamos demandas, auxiliamos na elaboração de 
                            projetos técnicos, buscamos fontes de financiamento (leis de incentivo, editais públicos, patrocínio privado) e 
                            acompanhamos a execução das obras por empresas especializadas e devidamente habilitadas. 
                            Dessa forma, garantimos que os projetos de restauro sejam realizados com rigor técnico, 
                            respeito às normas de preservação e transparência na aplicação de recursos.</p>
                    </div>
                </Container>
            </Section>
            <Section tom="claro">
                <Container>
                    <SectionHeader titulo="Estrutura" />

                    <div className={styles.estruturaGrid}>
                        <div className={styles.estruturaCard}>
                            <h3 className={styles.estruturaTitulo}>Diretoria</h3>

                            <div className={styles.estruturaLista}>
                                {diretoria.map((d) => (
                                    <div key={d.cargo} className={styles.diretorItem}>
                                        <LuUsers size={22} className={styles.diretorIcone} />
                                        <div>
                                            <p className={styles.diretorCargo}>{d.cargo}</p>
                                            <p className={styles.diretorNome}>{d.nome}</p>
                                            <a href={`mailto:${d.email}`} className={styles.email}>
                                                {d.email}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.estruturaColuna}>
                            <div className={styles.estruturaCard}>
                                <h3 className={styles.estruturaTitulo}>Conselho Administrativo</h3>
                                <div className={styles.estruturaLista}>
                                    {conselhoAdministrativo.membros.map((m) => (
                                        <div key={m} className={styles.membroItem}>{m}</div>
                                    ))}
                                </div>
                                <a href={`mailto:${conselhoAdministrativo.email}`} className={styles.email}>
                                    {conselhoAdministrativo.email}
                                </a>
                            </div>

                            <div className={styles.estruturaCard}>
                                <h3 className={styles.estruturaTitulo}>Conselho Fiscal</h3>
                                <div className={styles.estruturaLista}>
                                    {conselhoFiscal.membros.map((m) => (
                                        <div key={m} className={styles.membroItem}>{m}</div>
                                    ))}
                                </div>
                                <a href={`mailto:${conselhoFiscal.email}`} className={styles.email}>
                                    {conselhoFiscal.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section tom="terroso">
                <Container>
                    <SectionHeader titulo="Documentos"/>
                    <div className={styles.destaques}>
                        {docs.map((d)=>(
                            <div key={d.id} className={styles.destaque}>
                                <div className={styles.destaqueIcone}><LuFileText size={22}/></div>
                                <h3>{d.title}</h3>
                                <p>{d.desc}</p>
                                 <a
                                    href={d.to}
                                    className={styles.btnDownload}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LuDownload size={18} />
                                    Baixar PDF
                                </a>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
            <Section tom="claro">
                <Container>
                    <SectionHeader titulo="Governança"/>
                    <div className={styles.atuacao}>
                        <div className={styles.atuacaoHeader}>
                            <div className={styles.atuacaoIcone}>
                                <LuShield size={36} />
                            </div>
                            <h3>Responsabilidade</h3>
                        </div>
                        <p>
                            A APRI opera com base em princípios de <strong>governança responsável</strong>, assegurando que todas as decisões sejam tomadas de 
                            forma colegiada pela Diretoria e Conselhos, com prestação de contas regular aos associados. 
                            Todos os projetos de restauro intermediados pela associação seguem rigorosos padrões técnicos 
                            estabelecidos pelos órgãos de preservação (CONDEPHAAT, IPHAN) e 
                            são acompanhados por profissionais habilitados. 
                            A gestão financeira é submetida anualmente ao 
                            Conselho Fiscal e apresentada em Assembleia Geral Ordinária, 
                            garantindo transparência e uso adequado dos recursos.
                        </p>
                    </div>
                </Container>
            </Section>
            <Section tom="terroso">
                <Container>
                    <SectionHeader titulo="Transparência"/>
                    <div className={styles.atuacao}>
                        <div className={styles.atuacaoHeader}>
                            <div className={styles.atuacaoIcone}>
                                <LuEye size={36} />
                            </div>
                            <h3>Compromisso com a Informação Pública</h3>
                        </div>
                        <p>
                            A APRI está comprometida com a <strong>transparência gradual</strong> de suas ações e resultados. 
                            Informações institucionais, documentos oficiais (estatuto, atas, relatórios) e 
                            dados sobre projetos de restauro e educação patrimonial são progressivamente 
                            disponibilizados ao público através deste site, em especial na Área do Associado e no Centro de Conteúdos. 
                            Trabalhamos continuamente para ampliar o acesso à informação, consolidar nossa base documental e prestar contas à sociedade 
                            sobre o uso de recursos e os impactos gerados pela associação na preservação do patrimônio de Itu.
                        </p>
                    </div>
                </Container>
            </Section>
            <Footer />
        </div>
    )
}

export default Sobre