export interface Eventos{
    id:number,
    titulo:string,
    data: string,
    local: string,
    vagas: number,
    img: string
}

export const eventos : Eventos [] = [
  {
    id: 1,
    titulo: "Palestra: Patrimônio e Desenvolvimento Urbano",
    data: "15 Jun 2026",
    local: "Auditório APRI",
    vagas: 50,
    img: "https://images.unsplash.com/photo-1763224810010-4e5d23f261af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 2,
    titulo: "Visita Guiada: Casarões do Centro Histórico",
    data: "22 Jun 2026",
    local: "Saída da Praça da Matriz",
    vagas: 25,
    img: "https://images.unsplash.com/photo-1668163205979-d808f8ed0080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    id: 3,
    titulo: "Workshop: Fotografia de Patrimônio",
    data: "30 Jun 2026",
    local: "Sede APRI",
    vagas: 15,
    img: "https://images.unsplash.com/photo-1735551031738-037221642171?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
];