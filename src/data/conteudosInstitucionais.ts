export  interface Institucionais{
    id:number,
    tipo: tiposConteudo,
    desc: string,
    titulo: string,
    data: string,
    link: string,
    restrito: boolean
}


type tiposConteudo = "Artigo" | "Livro" | "Revista" |"Relatório"



export const institucionais = [
  {
    id: 1,
    tipo: "Artigo",
    titulo: "Manual de Preservação do Patrimônio Histórico de Itu",
    desc: "Guia completo sobre técnicas e boas práticas de preservação aplicadas ao contexto de Itu.",
    data: "Mar 2026",
    link: "#",
    restrito: true,
  },
  {
    id: 2,
    tipo: "Livro",
    titulo: "História Arquitetônica de Itu: Séculos XVIII a XX",
    desc: "Publicação institucional que documenta a evolução arquitetônica da cidade ao longo de três séculos.",
    data: "Jan 2026",
    link: "#",
    restrito: true,
  },
  {
    id: 3,
    tipo: "Relatório",
    titulo: "Relatório Anual de Atividades 2025",
    desc: "Prestação de contas detalhada das ações, projetos e recursos da APRI em 2025.",
    data: "Dez 2025",
    link: "#",
    restrito: true,
  },
  {
    id: 4,
    tipo: "Artigo",
    titulo: "Educação Patrimonial: Metodologias e Aplicações",
    desc: "Documento técnico sobre estratégias de educação patrimonial desenvolvidas pela APRI.",
    data: "Nov 2025",
    link: "#",
    restrito: true,
  },
];