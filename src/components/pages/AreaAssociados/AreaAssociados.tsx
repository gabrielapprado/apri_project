import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Users, TrendingUp, DollarSign, Calendar, Download, LogOut } from "lucide-react"
import styles from "./AreaAssociados.module.css"
import Section from "../../ui/Section"
import Container from "../../ui/Container"
import Footer from "../../layout/Footer"



const contribuicoes = 16920
const patronos = 11530
const totalArrecadado = contribuicoes + patronos

const atas = [
    { id: 1, titulo: "Ata da Assembleia Geral Ordinária 2026", data: "15 Abr 2026" },
    { id: 2, titulo: "Ata da Reunião de Diretoria — Março 2026", data: "10 Mar 2026" },
    { id: 3, titulo: "Ata da Assembleia Extraordinária 2025", data: "20 Dez 2025" },
    { id: 4, titulo: "Ata da Reunião de Diretoria — Novembro 2025", data: "15 Nov 2025" },
]

const relatorios = [
    { id: 1, categoria: "Anual", titulo: "Relatório de Atividades 2025", publicado: "Jan 2026" },
    { id: 2, categoria: "Financeiro", titulo: "Prestação de Contas 2º Semestre 2025", publicado: "Jan 2026" },
    { id: 3, categoria: "Projetos", titulo: "Relatório de Projetos Educacionais 2025", publicado: "Dez 2025" },
    { id: 4, categoria: "Financeiro", titulo: "Prestação de Contas 1º Semestre 2025", publicado: "Jul 2025" },
]

const associados = [
    { id: 1, nome: "Geraldo Gonçalves Jr", email: "geraldo.goncalves@email.com" },
    { id: 2, nome: "Neusa Maria Trettel Scavacini", email: "neusa.scavacini@email.com" },
    { id: 3, nome: "Rosangela Aparecida de Mazi Carnevalli Pereira", email: "rosangela.pereira@email.com" },
    { id: 4, nome: "Marcos Aparecido Passoni", email: "marcos.passoni@email.com" },
    { id: 5, nome: "Maria Silva Santos", email: "maria.silva@email.com" },
    { id: 6, nome: "João Carlos Oliveira", email: "joao.oliveira@email.com" },
]

const diretoria = [
    { cargo: "Presidente", nome: "Geraldo Gonçalves Jr" },
    { cargo: "Vice-Presidente", nome: "Neusa Maria Trettel Scavacini" },
    { cargo: "Tesoureiro", nome: "Marcos Aparecido Passoni" },
    { cargo: "Secretária", nome: "Rosangela Aparecida de Mazi Carnevalli Pereira" },
]


function formatarMoeda(valor: number, casas = 2) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: casas,
        maximumFractionDigits: casas,
    })
}


function normalizar(texto: string) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}


function iniciais(nome: string) {
    const partes = nome.trim().split(/\s+/)
    return partes.slice(0, 2).map(p => p[0]).join("").toUpperCase()
}

function AreaAssociados() {
    const navigate = useNavigate()
    const [busca, setBusca] = useState("")

    const associadosFiltrados = associados.filter(a =>
        normalizar(a.nome).includes(normalizar(busca))
    )

    function handleSair() {
        navigate("/login")
    }

    function handleBaixar(titulo: string) {
        console.log("Baixar:", titulo)
    }

    return (
        <div>
            <Section tom={"vermelho"}>
                <Container>
                    <div className={styles.hero}>
                        <div>
                            <h1 className={styles.hero_titulo}>Área do Associado</h1>
                            <div className={styles.linhadourada}></div>
                            <p className={styles.hero_texto}>Bem-vindo à área restrita da APRI</p>
                        </div>
                        <button type="button" className={styles.btn_sair} onClick={handleSair}>
                            <LogOut size={20} aria-hidden="true" />
                            Sair
                        </button>
                    </div>
                </Container>
            </Section>

            <Section tom={"claro"}>
                <Container>
                    <h2 className={styles.titulo}>Dados Gerais da Associação</h2>
                    <div className={styles.grid_dados}>
                        <div className={styles.card_dado}>
                            <Users size={40} className={styles.icone_vermelho} aria-hidden="true" />
                            <span className={styles.dado_label}>Total de Associados</span>
                            <strong className={styles.dado_valor}>47</strong>
                        </div>
                        <div className={styles.card_dado}>
                            <TrendingUp size={40} className={styles.icone_laranja} aria-hidden="true" />
                            <span className={styles.dado_label}>Projetos Ativos</span>
                            <strong className={styles.dado_valor}>12</strong>
                        </div>
                        <div className={styles.card_dado}>
                            <DollarSign size={40} className={styles.icone_dourado} aria-hidden="true" />
                            <span className={styles.dado_label}>Arrecadação Total 2026</span>
                            <strong className={styles.dado_valor}>{formatarMoeda(totalArrecadado, 0)}</strong>
                        </div>
                        <div className={styles.card_dado}>
                            <Calendar size={40} className={styles.icone_vermelho} aria-hidden="true" />
                            <span className={styles.dado_label}>Próxima Assembleia</span>
                            <strong className={styles.dado_valor}>20 Jun</strong>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section tom={"terroso"}>
                <Container>
                    <h2 className={styles.titulo}>Atas de Reuniões</h2>
                    <div className={styles.grid_docs}>
                        {atas.map(ata => (
                            <article key={ata.id} className={styles.card_doc}>
                                <div>
                                    <h3 className={styles.doc_titulo}>{ata.titulo}</h3>
                                    <p className={styles.doc_info}>Data: {ata.data}</p>
                                </div>
                                <button type="button" className={styles.btn_baixar} onClick={() => handleBaixar(ata.titulo)}>
                                    <Download size={20} aria-hidden="true" />
                                    Baixar
                                </button>
                            </article>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section tom={"claro"}>
                <Container>
                    <h2 className={styles.titulo}>Relatórios Internos</h2>
                    <div className={styles.grid_docs}>
                        {relatorios.map(rel => (
                            <article key={rel.id} className={styles.card_doc}>
                                <div>
                                    <span className={styles.tag}>{rel.categoria}</span>
                                    <h3 className={styles.doc_titulo}>{rel.titulo}</h3>
                                    <p className={styles.doc_info}>Publicado em: {rel.publicado}</p>
                                </div>
                                <button type="button" className={styles.btn_baixar} onClick={() => handleBaixar(rel.titulo)}>
                                    <Download size={20} aria-hidden="true" />
                                    Baixar
                                </button>
                            </article>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section tom={"terroso"}>
                <Container>
                    <h2 className={styles.titulo}>Lista de Associados</h2>

                    <div className={styles.busca}>
                        <label htmlFor="busca-nome" className={styles.busca_label}>Pesquisar por nome</label>
                        <input
                            id="busca-nome"
                            type="text"
                            className={styles.busca_input}
                            placeholder="Digite o nome..."
                            value={busca}
                            onChange={e => setBusca(e.target.value)}
                        />
                    </div>

                    <div className={styles.grid_associados}>
                        {associadosFiltrados.map(a => (
                            <article key={a.id} className={styles.card_associado}>
                                <div className={styles.avatar}>{iniciais(a.nome)}</div>
                                <div>
                                    <h3 className={styles.associado_nome}>{a.nome}</h3>
                                    <p className={styles.associado_email}>{a.email}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {associadosFiltrados.length === 0 && (
                        <p className={styles.vazio}>Nenhum associado encontrado para "{busca}".</p>
                    )}
                </Container>
            </Section>

            <Section tom={"claro"}>
                <Container>
                    <h2 className={`${styles.titulo} ${styles.titulo_centro}`}>Informações Institucionais</h2>

                    <div className={styles.painel}>
                        <h3 className={styles.painel_titulo}>Composição da Diretoria Atual</h3>
                        <div className={styles.grid_diretoria}>
                            {diretoria.map(membro => (
                                <div key={membro.cargo} className={styles.membro}>
                                    <span className={styles.membro_cargo}>{membro.cargo}</span>
                                    <strong className={styles.membro_nome}>{membro.nome}</strong>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.painel}>
                        <h3 className={styles.painel_titulo}>Detalhamento Financeiro</h3>
                        <div className={styles.linha_fin}>
                            <span>Contribuições de Associados</span>
                            <strong>{formatarMoeda(contribuicoes)}</strong>
                        </div>
                        <div className={styles.linha_fin}>
                            <span>Patronos — Projetos Educacionais</span>
                            <strong>{formatarMoeda(patronos)}</strong>
                        </div>
                        <div className={`${styles.linha_fin} ${styles.linha_total}`}>
                            <span>Total Arrecadado em 2026</span>
                            <strong>{formatarMoeda(totalArrecadado)}</strong>
                        </div>
                    </div>
                </Container>
            </Section>

            <Footer />
        </div>
    )
}

export default AreaAssociados
