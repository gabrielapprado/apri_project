import IgrejaMatriz from "../assets/Igreja_matriz_de_Itu.jpg"

export interface Cursos {
    id:number,
    img: string,
    titulo: string, 
    desc: string,
    duracao: string,
    categoria: CategoriaCursos
    vagas:number,
    proximaTurma: string
}

export type CategoriaCursos = 'Patrimônio'| 'História' | 'Preservação'| 'Arquitetura'

export const cursos:Cursos[]=[
    {
        id:1,
        img:"https://images.unsplash.com/photo-1555681102-b797fb73aa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
        titulo: "História e Patrimônio de Itu",
        desc:"Conheça a trajetória histórica da cidade desde sua fundação até os dias atuais, explorando os principais patrimônios arquitetônicos e culturais que marcaram cada época.",
        categoria:"História",
        duracao:"8",
        vagas:30,
        proximaTurma:"15 Jun 2026"
    },
    {
        id: 2,
        titulo: "Introdução à Conservação Patrimonial",
        desc: "Aprenda os conceitos fundamentais de conservação e preservação do patrimônio histórico, incluindo técnicas básicas e legislação aplicável.",
        duracao: "12 horas",
        vagas: 25,
        categoria: "Preservação",
        img: "https://images.unsplash.com/photo-1670423292485-6b51f3f3a3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
        proximaTurma: "22 Jun 2026"
        },
    {
        id: 3,
        titulo: "Arquitetura Colonial Paulista",
        desc: "Estudo aprofundado das características arquitetônicas do período colonial no interior de São Paulo, com foco em elementos construtivos e estilísticos.",
        duracao: "10 horas",
        vagas: 20,
        categoria: "Arquitetura",
        img: "https://images.unsplash.com/photo-1668163205979-d808f8ed0080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
        proximaTurma: "05 Jul 2026"
    },
    {
        id: 4,
        titulo: "Educação Patrimonial na Prática",
        desc: "Como desenvolver e aplicar projetos de educação patrimonial em escolas e espaços culturais, com metodologias ativas e exemplos práticos.",
        duracao: "16 horas",
        vagas: 30,
        categoria: "Patrimônio",
        img: "https://images.unsplash.com/photo-1758300468850-acaecff32c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
        proximaTurma: "12 Jul 2026"
    },
    {
        id: 5,
        titulo: "Técnicas de Restauro Histórico",
        desc: "Visão geral das principais técnicas utilizadas em projetos de restauro de edificações históricas, com estudos de caso reais.",
        duracao: "20 horas",
        vagas: 15,
        categoria: "Preservação",
        img: "https://images.unsplash.com/photo-1767167917587-09d3143851da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
        proximaTurma: "20 Jul 2026"
    },
    {
        id: 6,
        titulo: "Fotografia de Patrimônio",
        desc: "Aprenda a fotografar edificações históricas de forma profissional, valorizando detalhes arquitetônicos e produzindo registros de qualidade.",
        duracao: "6 horas",
        vagas: 20,
        categoria: "Patrimônio",
        img: IgrejaMatriz,
        proximaTurma: "28 Jul 2026"
    }
]