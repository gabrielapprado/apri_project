export interface LinksExternos {
    id:number
    titulo: string,
    url: string,
    desc: string
}

export const linksExternos : LinksExternos [] = [
  {
    id:1,
    titulo: "Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN)",
    url: "https://www.gov.br/iphan/pt-br",
    desc: "Portal oficial do IPHAN com informações sobre patrimônio cultural brasileiro",
  },
  {
    id:2,
    titulo: "CONDEPHAAT",
    url: "http://www.cultura.sp.gov.br/condephaat/",
    desc: "Conselho de Defesa do Patrimônio Histórico, Arqueológico, Artístico e Turístico do Estado de São Paulo",
  },
  {
    id:3,
    titulo: "VERSALIC",
    url: "https://aplicacoes.cultura.gov.br/comparar/salicnet/",
    desc: "Portal de visualização do sistema de apoio às Leis de Incentivo à Cultura",
  },
  {
    id:4,
    titulo: "Lei Rouanet — Projetos de Preservação",
    url: "https://www.gov.br/cultura/pt-br/assuntos/acoes-programas-e-politicas/lei-rouanet-1",
    desc: "Projetos de preservação do patrimônio cultural aprovados na Lei Rouanet",
  },
  {
    id:5,
    titulo: "ProAC ICMS",
    url: "http://www.proac.sp.gov.br/",
    desc: "Programa de Ação Cultural do Estado de São Paulo",
  },
];
