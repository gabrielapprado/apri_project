import { Users, Briefcase, Heart, Handshake, type LucideIcon } from "lucide-react";

export type CorCard = "vermelho" | "dourado" | "ambar" | "vinho";

export type FormaParticipacao = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  desc: string;
  beneficios: string[];
  requisitos: string;
  link: string;
  buttonText: string;
  cor: CorCard;
};

export const formasParticipacao: FormaParticipacao[] = [
  {
    icon: Users,
    title: "Seja Associado",
    subtitle: "Faça parte da comunidade APRI",
    desc: "Como associado, você faz parte da comunidade APRI, participa de assembleias, tem acesso aos cursos e eventos, e contribui com uma taxa semestral simbólica de R$ 60,00 (paga em maio e novembro). É ideal para quem deseja acompanhar de perto as ações da associação e colaborar de forma contínua.",
    beneficios: [
      "Participação nas Assembleias Gerais",
      "Acesso prioritário a cursos e eventos",
      "Direito a voto nas decisões da APRI",
      "Acesso à Área do Associado com documentos institucionais",
      "Certificado de associado"
    ],
    requisitos: "Preencher ficha de inscrição e efetuar pagamento semestral de R$ 60,00",
    link: "/associese",
    buttonText: "Associe-se agora",
    cor: "vermelho"
  },
  {
    icon: Briefcase,
    subtitle:"Apoio projetos educacionais específicos",
    title: "Seja Patrono",
    desc:"Como patrono, você apoia financeiramente projetos específicos de educação patrimonial. Pode escolher qual iniciativa deseja patrocinar e contribui para a produção de conhecimento técnico voltado ao interesse público, como folhetos educativos, maquetes 3D, palestras em escolas e materiais didáticos.",
    beneficios:[
        "Escolha do projeto a ser apoiado",
        "Reconhecimento público como patrono",
        "Relatórios periódicos sobre o projeto",
        "Certificado de apoio cultural",
        "Possibilidade de uso para incentivo fiscal (quando aplicável)"
    ],
    requisitos:"Contribuição financeira destinada a projeto educacional específico",
    link: "/patrono",
    buttonText: "Seja um Patrono",
    cor: "dourado",
  },
  {
    icon: Heart,
    title: "Voluntariado",
    subtitle:"Doe seu tempo e conhecimento",
    desc:"Voluntários são essenciais para o funcionamento da APRI. Você pode contribuir com seu conhecimento técnico, ajudar na organização de eventos, atuar na comunicação, dar suporte administrativo ou participar de ações educativas. Profissionais de diversas áreas são bem-vindos.",
    beneficios:[
        "Experiência prática em preservação patrimonial",
        "Networking com profissionais da área",
        "Certificado de horas de voluntariado",
        "Participação em projetos relevantes",
        "Contribuição direta para a comunidade"
    ],
    requisitos:"Disponibilidade de tempo e comprometimento com a causa",
    link: "/contato",
    buttonText: "Quero ser voluntário",
    cor: "ambar",
  },
  {
    icon: Handshake,
    title: "Parceria Institucional",
    subtitle:"Colaboração entre instituições",
    desc:"Se você representa uma instituição (empresa, universidade, órgão público, associação profissional), a APRI está aberta a parcerias que compartilhem do compromisso com a preservação do patrimônio cultural. Podemos colaborar em projetos conjuntos, ações educativas, pesquisas e eventos.",
    beneficios:[
        "Desenvolvimento de projetos conjuntos",
        "Fortalecimento da marca institucional",
        "Acesso a rede de parceiros",
        "Visibilidade em eventos e publicações",
        "Contribuição para responsabilidade social"
    ],
    requisitos:"Alinhamento com os valores e missão da APRI",
    link: "/contato",
    buttonText: "Propor parceria",
    cor: "vinho",
  },
];