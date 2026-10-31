export interface BemTombado {
  id: number;
  titulo: string;
  endereco: string;
  esfera: tiposEsfera;
  orgao: string;
  bairro: string;
  resumo: string;
  img: string;
  imgs: string[];
  historico: string;
  situacaoTexto: string;
  linkOficial: string;
}

export type tiposEsfera = "Municipal" | "Estadual" | "Federal"

export const bensTombados: BemTombado[] = [
  {
    id: 1,
    titulo: "Igreja Matriz de Nossa Senhora da Candelária",
    endereco: "Praça Padre Miguel, Centro Histórico",
    esfera: "Estadual",
    orgao: "CONDEPHAAT",
    bairro: "Centro Histórico",
    resumo: "Um dos marcos mais reconhecidos do centro histórico de Itu, erguida ainda no período colonial. Reformada diversas vezes ao longo dos séculos, guarda até hoje elementos originais de sua arquitetura religiosa.",
    img: "https://images.unsplash.com/photo-1555681102-b797fb73aa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    imgs: [
      "https://images.unsplash.com/photo-1555681102-b797fb73aa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1517822882498-77a99a9e5bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    ],
    historico: "A Igreja Matriz de Nossa Senhora da Candelária é um dos edifícios religiosos mais antigos de Itu, com suas fundações remontando ao século XVIII. Construída em estilo colonial luso-brasileiro, a edificação passou por diversas reformas ao longo dos séculos XIX e XX, sem perder, contudo, seus elementos estruturais e ornamentais originais. A torre sineira, os altares laterais em talha dourada e o piso em pedra portuguesa são testemunhos vivos da devoção e do refinamento artístico da época colonial. O tombamento estadual pelo CONDEPHAAT reconheceu a excepcional importância deste bem para a identidade cultural de Itu e do Estado de São Paulo.",
    situacaoTexto: "Este bem é protegido pelo CONDEPHAAT (Conselho de Defesa do Patrimônio Histórico, Arqueológico, Artístico e Turístico do Estado de São Paulo), o que significa que qualquer intervenção — reforma, pintura, ampliação — depende de autorização prévia do órgão.",
    linkOficial: "http://www.cultura.sp.gov.br/condephaat/",
  },
  {
    id: 2,
    titulo: "Museu Republicano Convenção de Itu",
    endereco: "Rua Barão do Itaim, 67 — Centro",
    esfera: "Federal",
    orgao: "IPHAN",
    bairro: "Centro Histórico",
    resumo: "Sede histórica da Convenção Republicana de 1873, onde se lançaram as bases do movimento republicano brasileiro. O edifício neoclássico abriga hoje um museu com acervo de grande relevância para a história política do país.",
    img: "https://images.unsplash.com/photo-1668163205979-d808f8ed0080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    imgs: [
      "https://images.unsplash.com/photo-1668163205979-d808f8ed0080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    ],
    historico: "Em 18 de abril de 1873, a cidade de Itu sediou a Convenção Republicana que reuniu líderes de todo o interior paulista para elaborar o manifesto republicano e fundar o Partido Republicano Paulista. O sobrado onde ocorreu o evento, construído no início do século XIX, tornou-se um símbolo da luta pela República no Brasil. Tombado pelo IPHAN como patrimônio histórico nacional, o edifício foi restaurado e transformado em museu pela Universidade de São Paulo, preservando documentos, mobiliário e artefatos da época.",
    situacaoTexto: "Este bem é protegido pelo IPHAN (Instituto do Patrimônio Histórico e Artístico Nacional), que classifica o imóvel como de relevância histórica e cultural nacional. Qualquer intervenção exige autorização prévia do instituto.",
    linkOficial: "http://portal.iphan.gov.br/",
  },
  {
    id: 3,
    titulo: "Antiga Estação Ferroviária de Itu",
    endereco: "Av. Tiradentes, s/n — Bairro Estação",
    esfera: "Municipal",
    orgao: "Prefeitura de Itu",
    bairro: "Bairro Estação",
    resumo: "Construída no final do século XIX para atender à Estrada de Ferro Sorocabana, a estação é um exemplar raro da arquitetura ferroviária paulista. Desativada como terminal de passageiros, mantém sua estrutura original preservada.",
    img: "https://images.unsplash.com/photo-1670423292485-6b51f3f3a3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    imgs: [
      "https://images.unsplash.com/photo-1670423292485-6b51f3f3a3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    ],
    historico: "A Estação Ferroviária de Itu foi inaugurada em 1887, como parte do traçado da Estrada de Ferro Sorocabana que ligava o interior ao Porto de Santos. Sua arquitetura em tijolos aparentes, com marquise metálica e colunas de ferro fundido importadas da Europa, reflete o período de prosperidade cafeeira da região. O movimento ferroviário foi fundamental para o desenvolvimento econômico e social de Itu nas primeiras décadas do século XX. Tombada pelo município, a edificação é objeto de um projeto de revitalização que prevê seu uso cultural e turístico.",
    situacaoTexto: "Este bem é protegido pelo poder público municipal de Itu, por decreto de tombamento que impede demolições, reformas ou alterações sem autorização prévia da Secretaria Municipal de Cultura e Turismo.",
    linkOficial: "https://www.itu.sp.gov.br/",
  },
  {
    id: 4,
    titulo: "Convento Nossa Senhora do Carmo",
    endereco: "Largo do Carmo, 1 — Centro Histórico",
    esfera: "Estadual",
    orgao: "CONDEPHAAT",
    bairro: "Centro Histórico",
    resumo: "Conjunto arquitetônico do século XVIII formado pela igreja e convento carmelita, com notável acervo de arte sacra. O claustro e as pinturas do forro da nave são considerados obras excepcionais da arte colonial paulista.",
    img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    imgs: [
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1548013146-72479768bada?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    ],
    historico: "Fundado pelos frades carmelitas em meados do século XVIII, o Convento Nossa Senhora do Carmo é um dos conjuntos religiosos mais completos e bem preservados do interior paulista. Além da Igreja, o complexo inclui o convento propriamente dito, com celas, refeitório e biblioteca, e o claustro central — um espaço de meditação em estilo colonial com jardim e fonte originais. As pinturas do forro da nave, atribuídas a artistas locais do século XVIII, representam cenas da vida de Nossa Senhora e dos santos carmelitas, compondo um ciclo pictórico de rara qualidade.",
    situacaoTexto: "Este bem é protegido pelo CONDEPHAAT (Conselho de Defesa do Patrimônio Histórico, Arqueológico, Artístico e Turístico do Estado de São Paulo), o que significa que qualquer intervenção — reforma, pintura, ampliação — depende de autorização prévia do órgão.",
    linkOficial: "http://www.cultura.sp.gov.br/condephaat/",
  },
  {
    id: 5,
    titulo: "Solar dos Andrades",
    endereco: "Rua Visconde do Rio Claro, 145 — Centro",
    esfera: "Municipal",
    orgao: "Prefeitura de Itu",
    bairro: "Centro",
    resumo: "Casarão oitocentista pertencente a uma das famílias mais influentes da oligarquia cafeeira de Itu. A fachada neoclássica e as pinturas decorativas internas são exemplares raros da arquitetura doméstica de elite do século XIX.",
    img: "https://images.unsplash.com/photo-1767167917587-09d3143851da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    imgs: [
      "https://images.unsplash.com/photo-1767167917587-09d3143851da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1758300468850-acaecff32c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    ],
    historico: "Construído entre 1855 e 1862, o Solar dos Andrades é um dos poucos exemplares sobreviventes das residências aristocráticas que pontuavam o centro de Itu no auge do ciclo do café. A fachada em cantaria com pilastras toscanas e frontão triangular revela a influência do neoclassicismo europeu que chegava ao Brasil naquele período. O interior mantém forros em madeira pintada, assoalhos de peroba-rosa e azulejos portugueses que decoram os ambientes de serviço. O tombamento municipal foi declarado em 2001, após ameaça de demolição para construção de edifício comercial.",
    situacaoTexto: "Este bem é protegido pelo poder público municipal de Itu, por decreto de tombamento que impede demolições, reformas ou alterações sem autorização prévia da Secretaria Municipal de Cultura e Turismo.",
    linkOficial: "https://www.itu.sp.gov.br/",
  },
  {
    id: 6,
    titulo: "Palacete Marechal Floriano",
    endereco: "Rua XV de Novembro, 210 — Centro",
    esfera: "Municipal",
    orgao: "Prefeitura de Itu",
    bairro: "Centro",
    resumo: "Sobrado de arquitetura eclética construído no início do século XX, com fachada ornamentada em estuque e platibanda decorada. Pertenceu a uma família de comerciantes ligada ao desenvolvimento urbano de Itu durante a República Velha.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    imgs: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    ],
    historico: "Erguido entre 1902 e 1906, o Palacete Marechal Floriano é um dos poucos exemplares do ecletismo arquitetônico ainda preservados no centro de Itu. Sua fachada, com pilastras coríntias, janelas em arco pleno e ornamentos em estuque importados da Europa, reflete a prosperidade da burguesia local no início do século XX. O imóvel funcionou sucessivamente como residência particular, sede de clube social e, nas últimas décadas, como escritório comercial. O tombamento municipal, declarado em 2009, foi motivado pelo risco de demolição para implantação de um estacionamento. Desde então, o edifício aguarda recursos para restauro integral da fachada e cobertura.",
    situacaoTexto: "Este bem é protegido pelo poder público municipal de Itu, por decreto de tombamento que impede demolições, reformas ou alterações sem autorização prévia da Secretaria Municipal de Cultura e Turismo.",
    linkOficial: "https://www.itu.sp.gov.br/",
  },
];