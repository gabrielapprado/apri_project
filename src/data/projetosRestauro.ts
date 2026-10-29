export interface ProjetoRestauro {
  id: number;
  name: string;
  year: string;
  desc: string;
  img: string;
}

export const projetosRestauro: ProjetoRestauro[] = [
  {
    id: 1,
    name: "Casarão do Centro",
    year: "1890",
    desc: "Construído em 1890, o Casarão do Centro foi sede da primeira prefeitura de Itu. Suas paredes de taipa guardam décadas de história política e cultural da cidade.",
    img: "https://images.unsplash.com/photo-1770349694179-0f0706ae2e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: 2,
    name: "Antiga Escola de Itu",
    year: "1912",
    desc: "A Escola Estadual Visconde de Taunay, fundada em 1912, foi a primeira instituição de ensino público de Itu. Formou gerações de itueanos.",
    img: "https://images.unsplash.com/photo-1668163205979-d808f8ed0080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: 3,
    name: "Teatro Municipal",
    year: "1905",
    desc: "O Teatro Municipal de Itu, inaugurado em 1905, foi palco das maiores apresentações artísticas da cidade no século XX.",
    img: "https://images.unsplash.com/photo-1732392246715-d7989a77ebc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: 4,
    name: "Estação Ferroviária",
    year: "1897",
    desc: "A antiga Estação da Estrada de Ferro Sorocabana foi o ponto de chegada de milhares de imigrantes que ajudaram a construir Itu.",
    img: "https://images.unsplash.com/photo-1623197259647-0ff8e5da9a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: 5,
    name: "Sobrado Colonial — Rua XV",
    year: "1850",
    desc: "Um dos mais antigos sobrados coloniais de Itu, datado de 1850. A edificação preserva elementos arquitetônicos raros.",
    img: "https://images.unsplash.com/photo-1670423292485-6b51f3f3a3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: 6,
    name: "Palacete da Família Alvim",
    year: "1920",
    desc: "O Palacete Alvim é um exemplar raro da arquitetura eclética do início do século XX em Itu.",
    img: "https://images.unsplash.com/photo-1770497142786-0dfb6d5cc557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
];