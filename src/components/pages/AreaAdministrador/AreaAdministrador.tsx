import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    FileText, BookOpen, Briefcase, Users,
    LogOut, Plus, Edit, Trash2, Save, X, ChevronDown, ChevronUp,
} from "lucide-react"
import styles from "./AreaAdministrador.module.css"
import Section from "../../ui/Section"
import Container from "../../ui/Container"
import Footer from "../../layout/Footer"


/* ───────────── Tipos ───────────── */

type Aba = "conteudos" | "cursos" | "projetos" | "associados"
type TipoModal = "conteudo" | "curso" | "projeto"
type StatusAssociado = "Ativo" | "Inativo" | "Pendente"

type Associado = {
    id: number
    nome: string
    email: string
    telefone: string
    status: StatusAssociado
    dataAssociacao: string
    participacao: string
    idade: string
    estadoCivil: string
    nacionalidade: string
    naturalidade: string
    dataNascimento: string
    profissao: string
    cpf: string
    documentoIdentidade: string
    orgaoExpedidor: string
    endereco: string
    numero: string
    bairro: string
    cep: string
    cidade: string
    estado: string
}

type InfoGeral = {
    totalAssociados: string
    projetosAtivos: string
    arrecadacaoTotal: string
    proximaAssembleia: string
}

type MembroDiretoria = { cargo: string; nome: string }
type Conteudo = { id: number; titulo: string; tipo: string; status: string; data: string }
type Curso = { id: number; titulo: string; duracao: string; responsavel: string; status: string }
type ProjetoRestauro = { id: number; nome: string; status: string }
type ProjetoEducacional = { id: number; nome: string; arrecadado: string; meta: string }

type Campo = {
    chave: string
    label: string
    placeholder?: string
    opcoes?: string[]
    mostrarSe?: (valores: Record<string, string>) => boolean
    larguraTotal?: boolean
}


/* ───────────── Configuração dos formulários ───────────── */

const ESTADOS = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA",
    "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",
]

const CAMPOS_DADOS: Campo[] = [
    { chave: "nome", label: "Nome completo" },
    { chave: "idade", label: "Idade" },
    { chave: "estadoCivil", label: "Estado civil", opcoes: ["Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viúvo(a)"] },
    { chave: "nacionalidade", label: "Nacionalidade" },
    { chave: "naturalidade", label: "Naturalidade" },
    { chave: "dataNascimento", label: "Data de nascimento", placeholder: "DD/MM/AAAA" },
    { chave: "profissao", label: "Profissão" },
    { chave: "cpf", label: "CPF", placeholder: "000.000.000-00" },
    { chave: "documentoIdentidade", label: "Documento de identidade" },
    { chave: "orgaoExpedidor", label: "Órgão expedidor", placeholder: "SSP/SP" },
    { chave: "telefone", label: "Telefone" },
    { chave: "email", label: "E-mail" },
]

const CAMPOS_ENDERECO: Campo[] = [
    { chave: "endereco", label: "Endereço" },
    { chave: "numero", label: "Número" },
    { chave: "bairro", label: "Bairro" },
    { chave: "cep", label: "CEP", placeholder: "00000-000" },
    { chave: "cidade", label: "Cidade" },
    { chave: "estado", label: "Estado", opcoes: ESTADOS },
]

const CAMPOS_ASSOCIACAO: Campo[] = [
    { chave: "status", label: "Status", opcoes: ["Ativo", "Inativo", "Pendente"] },
    { chave: "dataAssociacao", label: "Data de associação" },
    { chave: "participacao", label: "Participação / Cargo", larguraTotal: true },
]

const FORMULARIOS: Record<TipoModal, { titulo: string; campos: Campo[] }> = {
    conteudo: {
        titulo: "Adicionar Conteúdo",
        campos: [
            { chave: "titulo", label: "Título", larguraTotal: true },
            { chave: "tipo", label: "Tipo", opcoes: ["Artigo", "Livro", "Relatório"] },
            { chave: "status", label: "Status", opcoes: ["Publicado", "Rascunho"] },
        ],
    },
    curso: {
        titulo: "Adicionar Curso",
        campos: [
            { chave: "titulo", label: "Título", larguraTotal: true },
            { chave: "duracao", label: "Duração", placeholder: "Ex.: 8h" },
            { chave: "responsavel", label: "Responsável" },
            { chave: "status", label: "Status", opcoes: ["Publicado", "Rascunho"] },
        ],
    },
    projeto: {
        titulo: "Adicionar Projeto",
        campos: [
            { chave: "tipoProjeto", label: "Tipo de projeto", opcoes: ["Restauro", "Educacional"] },
            { chave: "nome", label: "Nome do projeto", larguraTotal: true },
            {
                chave: "statusProjeto", label: "Status", opcoes: ["Planejamento", "Em andamento", "Concluído"],
                mostrarSe: v => v.tipoProjeto === "Restauro",
            },
            {
                chave: "arrecadado", label: "Valor arrecadado", placeholder: "R$ 0",
                mostrarSe: v => v.tipoProjeto === "Educacional",
            },
            {
                chave: "meta", label: "Meta", placeholder: "R$ 0",
                mostrarSe: v => v.tipoProjeto === "Educacional",
            },
        ],
    },
}


/* ───────────── Dados iniciais ───────────── */

const associadoVazio = (): Associado => ({
    id: Date.now(),
    nome: "", email: "", telefone: "",
    status: "Pendente",
    dataAssociacao: new Date().toLocaleDateString("pt-BR", { month: "short", year: "numeric" }),
    participacao: "Associado",
    idade: "", estadoCivil: "Solteiro(a)", nacionalidade: "Brasileira", naturalidade: "",
    dataNascimento: "", profissao: "", cpf: "", documentoIdentidade: "", orgaoExpedidor: "",
    endereco: "", numero: "", bairro: "", cep: "", cidade: "", estado: "SP",
})

const ASSOCIADOS_INICIAIS: Associado[] = [
    { id: 1, nome: "Maria Silva Santos", email: "maria.silva@email.com", telefone: "(11) 99876-5432", status: "Ativo", dataAssociacao: "Mar 2025", participacao: "Associada", idade: "52", estadoCivil: "Casado(a)", nacionalidade: "Brasileira", naturalidade: "Itu/SP", dataNascimento: "15/03/1974", profissao: "Arquiteta", cpf: "123.456.789-00", documentoIdentidade: "12.345.678-9", orgaoExpedidor: "SSP/SP", endereco: "Rua das Flores", numero: "123", bairro: "Centro", cep: "13300-000", cidade: "Itu", estado: "SP" },
    { id: 2, nome: "João Carlos Oliveira", email: "joao.oliveira@email.com", telefone: "(11) 98765-4321", status: "Ativo", dataAssociacao: "Mar 2025", participacao: "Associado", idade: "48", estadoCivil: "Casado(a)", nacionalidade: "Brasileiro", naturalidade: "São Paulo/SP", dataNascimento: "22/07/1978", profissao: "Engenheiro Civil", cpf: "234.567.890-11", documentoIdentidade: "23.456.789-0", orgaoExpedidor: "SSP/SP", endereco: "Av. Brasil", numero: "456", bairro: "Vila Santa Terezinha", cep: "13301-000", cidade: "Itu", estado: "SP" },
    { id: 3, nome: "Ana Paula Costa", email: "ana.costa@email.com", telefone: "(11) 97654-3210", status: "Ativo", dataAssociacao: "Abr 2025", participacao: "Associada", idade: "44", estadoCivil: "Solteiro(a)", nacionalidade: "Brasileira", naturalidade: "Campinas/SP", dataNascimento: "10/11/1982", profissao: "Contadora", cpf: "345.678.901-22", documentoIdentidade: "34.567.890-1", orgaoExpedidor: "SSP/SP", endereco: "Rua São Paulo", numero: "789", bairro: "Jardim Padre Bento", cep: "13302-000", cidade: "Itu", estado: "SP" },
    { id: 4, nome: "Pedro Henrique Souza", email: "pedro.souza@email.com", telefone: "(11) 96543-2109", status: "Ativo", dataAssociacao: "Abr 2025", participacao: "Associado", idade: "39", estadoCivil: "Casado(a)", nacionalidade: "Brasileiro", naturalidade: "Sorocaba/SP", dataNascimento: "05/02/1987", profissao: "Advogado", cpf: "456.789.012-33", documentoIdentidade: "45.678.901-2", orgaoExpedidor: "SSP/SP", endereco: "Praça da República", numero: "321", bairro: "Centro", cep: "13300-100", cidade: "Itu", estado: "SP" },
    { id: 5, nome: "Carla Ferreira Lima", email: "carla.lima@email.com", telefone: "(11) 95432-1098", status: "Ativo", dataAssociacao: "Mai 2025", participacao: "Associada", idade: "35", estadoCivil: "Divorciado(a)", nacionalidade: "Brasileira", naturalidade: "Itu/SP", dataNascimento: "18/09/1991", profissao: "Professora de História", cpf: "567.890.123-44", documentoIdentidade: "56.789.012-3", orgaoExpedidor: "SSP/SP", endereco: "Rua Dom Pedro I", numero: "654", bairro: "Vila Gatti", cep: "13303-000", cidade: "Itu", estado: "SP" },
    { id: 6, nome: "Roberto Alves Neto", email: "roberto.neto@email.com", telefone: "(11) 94321-0987", status: "Pendente", dataAssociacao: "Abr 2026", participacao: "Associado", idade: "28", estadoCivil: "Solteiro(a)", nacionalidade: "Brasileiro", naturalidade: "Jundiaí/SP", dataNascimento: "30/06/1998", profissao: "Designer Gráfico", cpf: "678.901.234-55", documentoIdentidade: "67.890.123-4", orgaoExpedidor: "SSP/SP", endereco: "Rua Barão do Itaim", numero: "987", bairro: "Pirapitingui", cep: "13304-000", cidade: "Itu", estado: "SP" },
]

const INFO_INICIAL: InfoGeral = {
    totalAssociados: "47",
    projetosAtivos: "12",
    arrecadacaoTotal: "R$ 28.450",
    proximaAssembleia: "20 Jun",
}

const ROTULOS_INFO: { chave: keyof InfoGeral; label: string }[] = [
    { chave: "totalAssociados", label: "Total de Associados" },
    { chave: "projetosAtivos", label: "Projetos Ativos" },
    { chave: "arrecadacaoTotal", label: "Arrecadação Total 2026" },
    { chave: "proximaAssembleia", label: "Próxima Assembleia" },
]

const DIRETORIA_INICIAL: MembroDiretoria[] = [
    { cargo: "Presidente", nome: "Geraldo Gonçalves Jr" },
    { cargo: "Vice-Presidente", nome: "Neusa Maria Trettel Scavacini" },
    { cargo: "Secretária", nome: "Rosangela Aparecida de Mazi Carnevalli Pereira" },
    { cargo: "Tesoureiro", nome: "Marcos Aparecido Passoni" },
]

const ABAS: { chave: Aba; label: string; icone: typeof FileText }[] = [
    { chave: "conteudos", label: "Conteúdos", icone: FileText },
    { chave: "cursos", label: "Cursos", icone: BookOpen },
    { chave: "projetos", label: "Projetos", icone: Briefcase },
    { chave: "associados", label: "Gestão de Associados", icone: Users },
]


/* ───────────── Funções auxiliares ───────────── */

function normalizar(texto: string) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}

function mesAtual() {
    return new Date().toLocaleDateString("pt-BR", { month: "short", year: "numeric" })
}

function classeStatus(status: string) {
    switch (status) {
        case "Ativo":
        case "Publicado":
            return styles.status_verde
        case "Pendente":
        case "Rascunho":
            return styles.status_amarelo
        case "Inativo":
            return styles.status_vermelho
        default:
            return styles.status_neutro
    }
}


/* ───────────── Componentes pequenos ───────────── */

type CampoInputProps = {
    campo: Campo
    valor: string
    onChange: (valor: string) => void
}

function CampoInput({ campo, valor, onChange }: CampoInputProps) {
    const id = `campo-${campo.chave}`
    return (
        <div className={campo.larguraTotal ? styles.campo_total : styles.campo}>
            <label htmlFor={id} className={styles.campo_label}>{campo.label}</label>
            {campo.opcoes ? (
                <select id={id} className={styles.campo_input} value={valor} onChange={e => onChange(e.target.value)}>
                    {campo.opcoes.map(o => <option key={o}>{o}</option>)}
                </select>
            ) : (
                <input
                    id={id}
                    type="text"
                    className={styles.campo_input}
                    value={valor}
                    placeholder={campo.placeholder}
                    onChange={e => onChange(e.target.value)}
                />
            )}
        </div>
    )
}

type CabecalhoProps = { titulo: string; textoBotao?: string; onAdicionar?: () => void }

function CabecalhoSecao({ titulo, textoBotao, onAdicionar }: CabecalhoProps) {
    return (
        <div className={styles.cabecalho}>
            <h2 className={styles.titulo}>{titulo}</h2>
            {onAdicionar && (
                <button type="button" className={styles.btn_primario} onClick={onAdicionar}>
                    <Plus size={18} aria-hidden="true" />
                    {textoBotao}
                </button>
            )}
        </div>
    )
}

type LinhaProps = {
    titulo: string
    meta: (string | undefined)[]
    status?: string
    onEditar?: () => void
    onExcluir?: () => void
}

function LinhaItem({ titulo, meta, status, onEditar, onExcluir }: LinhaProps) {
    return (
        <article className={styles.item}>
            <div className={styles.item_info}>
                <h3 className={styles.item_titulo}>{titulo}</h3>
                <p className={styles.item_meta}>
                    {meta.filter(Boolean).join(" · ")}
                    {status && <span className={`${styles.badge} ${classeStatus(status)}`}>{status}</span>}
                </p>
            </div>
            <div className={styles.acoes}>
                {onEditar && (
                    <button type="button" className={styles.btn_icone} onClick={onEditar} aria-label={`Editar ${titulo}`}>
                        <Edit size={16} aria-hidden="true" />
                    </button>
                )}
                {onExcluir && (
                    <button type="button" className={`${styles.btn_icone} ${styles.btn_perigo}`} onClick={onExcluir} aria-label={`Excluir ${titulo}`}>
                        <Trash2 size={16} aria-hidden="true" />
                    </button>
                )}
            </div>
        </article>
    )
}

type BotoesEdicaoProps = { editando: boolean; onEditar: () => void; onSalvar: () => void; onCancelar: () => void }

function BotoesEdicao({ editando, onEditar, onSalvar, onCancelar }: BotoesEdicaoProps) {
    if (!editando) {
        return (
            <button type="button" className={styles.btn_secundario} onClick={onEditar}>
                <Edit size={16} aria-hidden="true" /> Editar
            </button>
        )
    }
    return (
        <div className={styles.acoes}>
            <button type="button" className={styles.btn_primario} onClick={onSalvar}>
                <Save size={16} aria-hidden="true" /> Salvar
            </button>
            <button type="button" className={styles.btn_cancelar} onClick={onCancelar}>
                <X size={16} aria-hidden="true" /> Cancelar
            </button>
        </div>
    )
}


/* ───────────── Modal de cadastro ───────────── */

type ModalProps = {
    tipo: TipoModal
    onFechar: () => void
    onSalvar: (valores: Record<string, string>) => void
}

function ModalCadastro({ tipo, onFechar, onSalvar }: ModalProps) {
    const { titulo, campos } = FORMULARIOS[tipo]

    const [valores, setValores] = useState<Record<string, string>>(() => {
        const inicial: Record<string, string> = {}
        campos.forEach(c => { inicial[c.chave] = c.opcoes ? c.opcoes[0] : "" })
        return inicial
    })

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        onSalvar(valores)
        onFechar()
    }

    return (
        <div className={styles.modal_fundo} onClick={onFechar}>
            <form
                className={styles.modal}
                onClick={e => e.stopPropagation()}
                onSubmit={handleSubmit}
            >
                <div className={styles.cabecalho}>
                    <h3 className={styles.painel_titulo}>{titulo}</h3>
                    <button type="button" className={styles.btn_icone} onClick={onFechar} aria-label="Fechar">
                        <X size={18} aria-hidden="true" />
                    </button>
                </div>

                <div className={styles.grid_campos}>
                    {campos
                        .filter(c => !c.mostrarSe || c.mostrarSe(valores))
                        .map(c => (
                            <CampoInput
                                key={c.chave}
                                campo={c}
                                valor={valores[c.chave] ?? ""}
                                onChange={v => setValores({ ...valores, [c.chave]: v })}
                            />
                        ))}
                </div>

                <div className={styles.acoes_rodape}>
                    <button type="submit" className={styles.btn_primario}>
                        <Save size={16} aria-hidden="true" /> Salvar
                    </button>
                    <button type="button" className={styles.btn_cancelar} onClick={onFechar}>
                        <X size={16} aria-hidden="true" /> Cancelar
                    </button>
                </div>
            </form>
        </div>
    )
}


/* ───────────── Painel de edição de associado ───────────── */

type PainelEdicaoProps = {
    associado: Associado
    onChange: (a: Associado) => void
    onSalvar: () => void
    onCancelar: () => void
}

function PainelEdicao({ associado, onChange, onSalvar, onCancelar }: PainelEdicaoProps) {
    const grupos = [
        { titulo: "Dados do Associado", campos: CAMPOS_DADOS },
        { titulo: "Endereço de Referência", campos: CAMPOS_ENDERECO },
        { titulo: "Informações de Associação", campos: CAMPOS_ASSOCIACAO },
    ]

    return (
        <div className={styles.painel_edicao}>
            {grupos.map(grupo => (
                <div key={grupo.titulo}>
                    <h4 className={styles.grupo_titulo}>{grupo.titulo}</h4>
                    <div className={styles.grid_campos}>
                        {grupo.campos.map(campo => (
                            <CampoInput
                                key={campo.chave}
                                campo={campo}
                                valor={String(associado[campo.chave as keyof Associado] ?? "")}
                                onChange={v => onChange({ ...associado, [campo.chave]: v })}
                            />
                        ))}
                    </div>
                </div>
            ))}

            <div className={styles.acoes_rodape}>
                <button type="button" className={styles.btn_primario} onClick={onSalvar}>
                    <Save size={16} aria-hidden="true" /> Salvar alterações
                </button>
                <button type="button" className={styles.btn_cancelar} onClick={onCancelar}>
                    <X size={16} aria-hidden="true" /> Cancelar
                </button>
            </div>
        </div>
    )
}


/* ───────────── Página ───────────── */

function AreaAdministrador() {
    const navigate = useNavigate()

    const [aba, setAba] = useState<Aba>("conteudos")
    const [modal, setModal] = useState<TipoModal | null>(null)

    const [conteudos, setConteudos] = useState<Conteudo[]>([
        { id: 1, titulo: "Manual de Preservação do Patrimônio", tipo: "Artigo", status: "Publicado", data: "Mar 2026" },
        { id: 2, titulo: "História Arquitetônica de Itu", tipo: "Livro", status: "Publicado", data: "Jan 2026" },
        { id: 3, titulo: "Relatório Anual 2025", tipo: "Relatório", status: "Rascunho", data: "Dez 2025" },
    ])

    const [cursos, setCursos] = useState<Curso[]>([
        { id: 1, titulo: "História e Patrimônio de Itu", duracao: "8h", responsavel: "Prof. João Silva", status: "Publicado" },
        { id: 2, titulo: "Introdução à Conservação", duracao: "12h", responsavel: "Profa. Ana Costa", status: "Publicado" },
        { id: 3, titulo: "Arquitetura Colonial Paulista", duracao: "10h", responsavel: "Prof. Carlos Mendes", status: "Rascunho" },
    ])

    const [projetosRestauro, setProjetosRestauro] = useState<ProjetoRestauro[]>([
        { id: 1, nome: "Casarão do Centro", status: "Em andamento" },
        { id: 2, nome: "Teatro Municipal", status: "Planejamento" },
    ])

    const [projetosEducacionais, setProjetosEducacionais] = useState<ProjetoEducacional[]>([
        { id: 1, nome: "Folhetos Educativos", arrecadado: "R$ 8.500", meta: "R$ 15.000" },
        { id: 2, nome: "Maquetes 3D", arrecadado: "R$ 3.200", meta: "R$ 12.000" },
    ])

    /* Associados */
    const [associados, setAssociados] = useState<Associado[]>(ASSOCIADOS_INICIAIS)
    const [editando, setEditando] = useState<Associado | null>(null)
    const [ehNovo, setEhNovo] = useState(false)
    const [busca, setBusca] = useState("")
    const [filtroStatus, setFiltroStatus] = useState<"Todos" | StatusAssociado>("Todos")
    const [ordem, setOrdem] = useState<"A-Z" | "Z-A">("A-Z")

    /* Dados gerais e diretoria */
    const [info, setInfo] = useState<InfoGeral>(INFO_INICIAL)
    const [infoTemp, setInfoTemp] = useState<InfoGeral>(INFO_INICIAL)
    const [editandoInfo, setEditandoInfo] = useState(false)

    const [diretoria, setDiretoria] = useState<MembroDiretoria[]>(DIRETORIA_INICIAL)
    const [diretoriaTemp, setDiretoriaTemp] = useState<MembroDiretoria[]>(DIRETORIA_INICIAL)
    const [editandoDiretoria, setEditandoDiretoria] = useState(false)


    /* ── Ações gerais ── */

    function handleSair() {
        navigate("/entrar")
    }

    function confirmarExclusao(mensagem: string, acao: () => void) {
        if (window.confirm(mensagem)) acao()
    }

    function handleSalvarModal(v: Record<string, string>) {
        const id = Date.now()

        if (modal === "conteudo") {
            setConteudos([...conteudos, { id, titulo: v.titulo, tipo: v.tipo, status: v.status, data: mesAtual() }])
        } else if (modal === "curso") {
            setCursos([...cursos, { id, titulo: v.titulo, duracao: v.duracao, responsavel: v.responsavel, status: v.status }])
        } else if (modal === "projeto") {
            if (v.tipoProjeto === "Educacional") {
                setProjetosEducacionais([
                    ...projetosEducacionais,
                    { id, nome: v.nome, arrecadado: v.arrecadado || "R$ 0", meta: v.meta || "R$ 0" },
                ])
            } else {
                setProjetosRestauro([...projetosRestauro, { id, nome: v.nome, status: v.statusProjeto }])
            }
        }
    }


    /* ── Associados ── */

    const associadosFiltrados = associados
        .filter(a => normalizar(a.nome).includes(normalizar(busca)))
        .filter(a => filtroStatus === "Todos" || a.status === filtroStatus)
        .sort((a, b) => ordem === "A-Z" ? a.nome.localeCompare(b.nome) : b.nome.localeCompare(a.nome))

    function novoAssociado() {
        setEditando(associadoVazio())
        setEhNovo(true)
    }

    function alternarEdicao(a: Associado) {
        setEhNovo(false)
        setEditando(editando?.id === a.id ? null : { ...a })
    }

    function salvarAssociado() {
        if (!editando) return
        if (ehNovo) {
            setAssociados([editando, ...associados])
        } else {
            setAssociados(associados.map(a => a.id === editando.id ? editando : a))
        }
        setEditando(null)
        setEhNovo(false)
    }

    function cancelarEdicao() {
        setEditando(null)
        setEhNovo(false)
    }

    function excluirAssociado(id: number) {
        confirmarExclusao("Deseja realmente excluir este associado?", () => {
            setAssociados(associados.filter(a => a.id !== id))
            if (editando?.id === id) cancelarEdicao()
        })
    }


    /* ── Render ── */

    return (
        <div>
            {modal && (
                <ModalCadastro
                    tipo={modal}
                    onFechar={() => setModal(null)}
                    onSalvar={handleSalvarModal}
                />
            )}

            <Section tom={"vermelho"}>
                <Container>
                    <div className={styles.hero}>
                        <div>
                            <h1 className={styles.hero_titulo}>Painel Administrativo</h1>
                            <div className={styles.linhadourada}></div>
                            <p className={styles.hero_texto}>Gerenciamento de conteúdos do site</p>
                        </div>
                        <button type="button" className={styles.btn_sair} onClick={handleSair}>
                            <LogOut size={20} aria-hidden="true" />
                            Sair
                        </button>
                    </div>
                </Container>
            </Section>

            <nav className={styles.abas_barra} aria-label="Seções do painel">
                <Container>
                    <div className={styles.abas}>
                        {ABAS.map(({ chave, label, icone: Icone }) => (
                            <button
                                key={chave}
                                type="button"
                                className={`${styles.aba} ${aba === chave ? styles.aba_ativa : ""}`}
                                onClick={() => setAba(chave)}
                            >
                                <Icone size={18} aria-hidden="true" />
                                {label}
                            </button>
                        ))}
                    </div>
                </Container>
            </nav>

            {/* CONTEÚDOS */}
            {aba === "conteudos" && (
                <Section tom={"claro"}>
                    <Container>
                        <CabecalhoSecao titulo="Gerenciar Conteúdos" textoBotao="Adicionar Conteúdo" onAdicionar={() => setModal("conteudo")} />
                        <div className={styles.lista}>
                            {conteudos.map(c => (
                                <LinhaItem
                                    key={c.id}
                                    titulo={c.titulo}
                                    meta={[c.tipo, c.data]}
                                    status={c.status}
                                    onEditar={() => {}}
                                    onExcluir={() => confirmarExclusao("Deseja realmente excluir este conteúdo?", () => setConteudos(conteudos.filter(x => x.id !== c.id)))}
                                />
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* CURSOS */}
            {aba === "cursos" && (
                <Section tom={"claro"}>
                    <Container>
                        <CabecalhoSecao titulo="Gerenciar Cursos" textoBotao="Adicionar Curso" onAdicionar={() => setModal("curso")} />
                        <div className={styles.lista}>
                            {cursos.map(c => (
                                <LinhaItem
                                    key={c.id}
                                    titulo={c.titulo}
                                    meta={[c.duracao, c.responsavel]}
                                    status={c.status}
                                    onEditar={() => {}}
                                    onExcluir={() => confirmarExclusao("Deseja realmente excluir este curso?", () => setCursos(cursos.filter(x => x.id !== c.id)))}
                                />
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* PROJETOS */}
            {aba === "projetos" && (
                <Section tom={"claro"}>
                    <Container>
                        <CabecalhoSecao titulo="Gerenciar Projetos" textoBotao="Adicionar Projeto" onAdicionar={() => setModal("projeto")} />
                        <div className={styles.grid_2}>
                            <div>
                                <h3 className={styles.subtitulo}>Projetos de Restauro</h3>
                                <div className={styles.lista}>
                                    {projetosRestauro.map(p => (
                                        <LinhaItem
                                            key={p.id}
                                            titulo={p.nome}
                                            meta={[]}
                                            status={p.status}
                                            onEditar={() => {}}
                                            onExcluir={() => confirmarExclusao("Deseja realmente excluir este projeto?", () => setProjetosRestauro(projetosRestauro.filter(x => x.id !== p.id)))}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className={styles.subtitulo}>Projetos Educacionais (APRI)</h3>
                                <div className={styles.lista}>
                                    {projetosEducacionais.map(p => (
                                        <LinhaItem
                                            key={p.id}
                                            titulo={p.nome}
                                            meta={[`Arrecadado: ${p.arrecadado}`, `Meta: ${p.meta}`]}
                                            onEditar={() => {}}
                                            onExcluir={() => confirmarExclusao("Deseja realmente excluir este projeto?", () => setProjetosEducacionais(projetosEducacionais.filter(x => x.id !== p.id)))}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>
            )}

            {/* GESTÃO DE ASSOCIADOS */}
            {aba === "associados" && (
                <>
                    <Section tom={"claro"}>
                        <Container>
                            <div className={styles.cabecalho}>
                                <h2 className={styles.titulo}>Dados Gerais</h2>
                                <BotoesEdicao
                                    editando={editandoInfo}
                                    onEditar={() => { setInfoTemp({ ...info }); setEditandoInfo(true) }}
                                    onSalvar={() => { setInfo({ ...infoTemp }); setEditandoInfo(false) }}
                                    onCancelar={() => setEditandoInfo(false)}
                                />
                            </div>
                            <p className={styles.ajuda}>Estes valores aparecem na Área do Associado.</p>

                            <div className={styles.grid_dados}>
                                {ROTULOS_INFO.map(({ chave, label }) => (
                                    <div key={chave} className={styles.card_dado}>
                                        <span className={styles.dado_label}>{label}</span>
                                        {editandoInfo ? (
                                            <input
                                                className={styles.campo_input}
                                                value={infoTemp[chave]}
                                                aria-label={label}
                                                onChange={e => setInfoTemp({ ...infoTemp, [chave]: e.target.value })}
                                            />
                                        ) : (
                                            <strong className={styles.dado_valor}>{info[chave]}</strong>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Container>
                    </Section>

                    <Section tom={"terroso"}>
                        <Container>
                            <div className={styles.cabecalho}>
                                <h2 className={styles.titulo}>Composição da Diretoria</h2>
                                <BotoesEdicao
                                    editando={editandoDiretoria}
                                    onEditar={() => { setDiretoriaTemp(diretoria.map(d => ({ ...d }))); setEditandoDiretoria(true) }}
                                    onSalvar={() => { setDiretoria([...diretoriaTemp]); setEditandoDiretoria(false) }}
                                    onCancelar={() => setEditandoDiretoria(false)}
                                />
                            </div>

                            <div className={styles.grid_diretoria}>
                                {(editandoDiretoria ? diretoriaTemp : diretoria).map((m, i) => (
                                    <div key={m.cargo} className={styles.membro}>
                                        <span className={styles.membro_cargo}>{m.cargo}</span>
                                        {editandoDiretoria ? (
                                            <input
                                                className={styles.campo_input}
                                                value={m.nome}
                                                aria-label={`Nome - ${m.cargo}`}
                                                onChange={e => {
                                                    const novo = [...diretoriaTemp]
                                                    novo[i] = { ...novo[i], nome: e.target.value }
                                                    setDiretoriaTemp(novo)
                                                }}
                                            />
                                        ) : (
                                            <strong className={styles.membro_nome}>{m.nome}</strong>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Container>
                    </Section>

                    <Section tom={"claro"}>
                        <Container>
                            <CabecalhoSecao titulo="Cadastro de Associados" textoBotao="Adicionar Associado" onAdicionar={novoAssociado} />

                            <div className={styles.filtros}>
                                <div className={styles.campo}>
                                    <label htmlFor="busca-nome" className={styles.campo_label}>Pesquisar por nome</label>
                                    <input
                                        id="busca-nome"
                                        type="text"
                                        className={styles.campo_input}
                                        placeholder="Digite o nome..."
                                        value={busca}
                                        onChange={e => setBusca(e.target.value)}
                                    />
                                </div>
                                <div className={styles.campo}>
                                    <label htmlFor="filtro-status" className={styles.campo_label}>Filtrar por status</label>
                                    <select
                                        id="filtro-status"
                                        className={styles.campo_input}
                                        value={filtroStatus}
                                        onChange={e => setFiltroStatus(e.target.value as typeof filtroStatus)}
                                    >
                                        <option>Todos</option>
                                        <option>Ativo</option>
                                        <option>Inativo</option>
                                        <option>Pendente</option>
                                    </select>
                                </div>
                                <div className={styles.campo}>
                                    <label htmlFor="ordem" className={styles.campo_label}>Ordenar</label>
                                    <select
                                        id="ordem"
                                        className={styles.campo_input}
                                        value={ordem}
                                        onChange={e => setOrdem(e.target.value as typeof ordem)}
                                    >
                                        <option>A-Z</option>
                                        <option>Z-A</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.lista}>
                                {ehNovo && editando && (
                                    <div className={styles.bloco_associado}>
                                        <h3 className={styles.item_titulo}>Novo associado</h3>
                                        <PainelEdicao
                                            associado={editando}
                                            onChange={setEditando}
                                            onSalvar={salvarAssociado}
                                            onCancelar={cancelarEdicao}
                                        />
                                    </div>
                                )}

                                {associadosFiltrados.map(a => {
                                    const aberto = !ehNovo && editando?.id === a.id
                                    return (
                                        <div key={a.id} className={styles.bloco_associado}>
                                            <div
                                                className={styles.associado_linha}
                                                role="button"
                                                tabIndex={0}
                                                aria-expanded={aberto}
                                                onClick={() => alternarEdicao(a)}
                                                onKeyDown={e => { if (e.key === "Enter" || e.key === " ") alternarEdicao(a) }}
                                            >
                                                <div className={styles.item_info}>
                                                    <h3 className={styles.item_titulo}>
                                                        {a.nome}
                                                        <span className={`${styles.badge} ${classeStatus(a.status)}`}>{a.status}</span>
                                                    </h3>
                                                    <p className={styles.item_meta}>{a.email} · {a.telefone}</p>
                                                </div>
                                                <div className={styles.acoes}>
                                                    {aberto ? <ChevronUp size={18} aria-hidden="true" /> : <ChevronDown size={18} aria-hidden="true" />}
                                                    <button
                                                        type="button"
                                                        className={`${styles.btn_icone} ${styles.btn_perigo}`}
                                                        aria-label={`Excluir ${a.nome}`}
                                                        onClick={e => { e.stopPropagation(); excluirAssociado(a.id) }}
                                                    >
                                                        <Trash2 size={16} aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>

                                            {aberto && editando && (
                                                <PainelEdicao
                                                    associado={editando}
                                                    onChange={setEditando}
                                                    onSalvar={salvarAssociado}
                                                    onCancelar={cancelarEdicao}
                                                />
                                            )}
                                        </div>
                                    )
                                })}
                            </div>

                            {associadosFiltrados.length === 0 && !ehNovo && (
                                <p className={styles.vazio}>Nenhum associado encontrado.</p>
                            )}
                        </Container>
                    </Section>
                </>
            )}

            <Footer />
        </div>
    )
}

export default AreaAdministrador