export interface ProjetoEducacional {
  id: number;
  name: string;
  desc: string;
  img: string;
  status: StatusProjeto;
  raised: number;
  goal: number;
  progress: number;
  patronos: number;
}

export type StatusProjeto = 'Em andamento' | 'Captando recursos' | 'Planejamento'



export const projetosEducacionais: ProjetoEducacional[] = [
  {
    id: 1,
    name: "Folhetos Educativos",
    desc: "Produção de materiais informativos sobre os patrimônios históricos de Itu, distribuídos gratuitamente em escolas e espaços culturais da cidade.",
    img: "https://images.unsplash.com/photo-1758300468850-acaecff32c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    status: "Em andamento",
    raised: 8500,
    goal: 15000,
    progress: 57,
    patronos: 12,
  },
  {
    id: 2,
    name: "Maquetes 3D Interativas",
    desc: "Desenvolvimento de maquetes tridimensionais de edifícios históricos para exposições permanentes e atividades educativas em escolas.",
    img: "https://images.unsplash.com/photo-1767167917587-09d3143851da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    status: "Captando recursos",
    raised: 3200,
    goal: 12000,
    progress: 27,
    patronos: 5,
  },
  {
    id: 3,
    name: "Palestras em Escolas",
    desc: "Ciclo de palestras sobre educação patrimonial voltado para estudantes do ensino fundamental e médio da rede pública de Itu.",
    img: "https://images.unsplash.com/photo-1561495934-8c5cea8192b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    status: "Em andamento",
    raised: 5800,
    goal: 8000,
    progress: 73,
    patronos: 8,
  },
  {
    id: 4,
    name: "Material Didático Colonial",
    desc: "Criação de apostilas e materiais didáticos sobre arquitetura colonial para uso em cursos e oficinas da APRI.",
    img: "https://images.unsplash.com/photo-1555681102-b797fb73aa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    status: "Planejamento",
    raised: 1500,
    goal: 10000,
    progress: 15,
    patronos: 3,
  },
  {
    id: 5,
    name: "Exposições Fotográficas",
    desc: "Produção de exposições itinerantes comparando registros históricos e fotografias atuais dos patrimônios de Itu.",
    img: "https://images.unsplash.com/photo-1770497142786-0dfb6d5cc557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    status: "Captando recursos",
    raised: 4100,
    goal: 18000,
    progress: 23,
    patronos: 6,
  },
];