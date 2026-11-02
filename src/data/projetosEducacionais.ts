
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
  history: string;
  importancia: string;
}

export type StatusProjeto = 'Em andamento' | 'Captando recursos' | 'Planejamento';

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
    history: `O projeto Folhetos Educativos tem como proposta ampliar o acesso da população às informações sobre o patrimônio histórico e cultural de Itu. A iniciativa prevê a produção de materiais informativos que apresentem edificações, monumentos, espaços históricos e aspectos relevantes da trajetória do município.

    Os folhetos serão desenvolvidos com linguagem acessível, reunindo informações históricas, curiosidades e conteúdos sobre as características arquitetônicas dos bens culturais. A proposta é transformar conhecimentos sobre o patrimônio em materiais de fácil consulta, que possam ser utilizados tanto em atividades educativas quanto em visitas aos espaços históricos da cidade.

    A distribuição gratuita em escolas e espaços culturais busca alcançar diferentes públicos, especialmente estudantes e visitantes. Dessa forma, o projeto pretende aproximar a comunidade de sua própria história e incentivar o reconhecimento dos patrimônios como parte importante da identidade cultural de Itu.`,
    importancia: `Os folhetos educativos facilitam o acesso da população às informações sobre o patrimônio histórico de Itu, aproximando a comunidade de sua própria história. Por meio de materiais acessíveis e de fácil distribuição, o projeto contribui para despertar o interesse pela preservação dos bens culturais.

    Sua realização também fortalece a educação patrimonial nas escolas e nos espaços culturais, permitindo que estudantes e visitantes conheçam a importância das edificações, dos monumentos e das manifestações históricas presentes na cidade. Dessa forma, incentiva o reconhecimento e a valorização da identidade cultural local.`
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
    history: `O projeto Maquetes 3D Interativas propõe a utilização de recursos tecnológicos para representar edifícios históricos de Itu em modelos tridimensionais. A iniciativa busca desenvolver representações digitais que permitam visualizar a arquitetura das construções, suas proporções e características externas de maneira detalhada.

    O desenvolvimento das maquetes envolve a identificação dos edifícios que serão representados e o levantamento de referências visuais e arquitetônicas para orientar sua modelagem. A partir dessas informações, serão produzidos modelos digitais que possibilitem diferentes formas de observação e interação com as edificações históricas.

    As representações poderão ser utilizadas em exposições permanentes e atividades educativas em escolas, ampliando as possibilidades de apresentação do patrimônio cultural. A proposta também abre espaço para integrar tecnologia e educação patrimonial, aproximando o conhecimento histórico de ferramentas digitais utilizadas pelas novas gerações.`,
    importancia: `As maquetes tridimensionais oferecem uma maneira visual e interativa de compreender a arquitetura e a composição dos edifícios históricos. Essa abordagem permite que o público observe detalhes construtivos e características arquitetônicas que nem sempre são percebidos em visitas convencionais.

    Além de ampliar as possibilidades de aprendizagem, o uso de recursos digitais contribui para aproximar o patrimônio histórico das novas gerações. O projeto também permite explorar novas formas de documentação e divulgação dos bens culturais, tornando seu conhecimento mais acessível à comunidade.`
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
    history: `O projeto Palestras em Escolas consiste na realização de encontros educativos voltados a estudantes do ensino fundamental e médio da rede pública de Itu. A iniciativa pretende apresentar conteúdos relacionados à história do município, à formação de seu conjunto arquitetônico e à importância da preservação dos bens culturais.

    As atividades serão organizadas em formato de palestras, abordando temas como patrimônio material e imaterial, arquitetura histórica, memória coletiva e conservação. Os conteúdos poderão ser adaptados às diferentes faixas etárias, buscando relacionar os assuntos apresentados com os espaços e referências culturais presentes no cotidiano dos estudantes.

    Por meio do contato direto com profissionais e pessoas envolvidas na valorização do patrimônio, os participantes terão a oportunidade de ampliar seus conhecimentos e refletir sobre a importância da preservação histórica. O projeto também busca estimular o interesse dos jovens pela cultura local e incentivar sua participação na valorização da memória da cidade.`,
    importancia: `As palestras promovem o contato direto dos estudantes com temas relacionados à história, à cultura e à preservação patrimonial. Ao abordar a importância dos bens históricos presentes no município, o projeto estimula o reconhecimento da memória coletiva e sua relação com a identidade da população.

    A iniciativa também contribui para desenvolver uma consciência crítica sobre a conservação do patrimônio cultural, incentivando os jovens a compreenderem seu papel na proteção desses espaços. Dessa maneira, a educação patrimonial ultrapassa o ambiente escolar e pode refletir nas atitudes da comunidade.`
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
    history: `O projeto Material Didático Colonial tem como objetivo desenvolver conteúdos educativos sobre a arquitetura colonial, com foco nas características construtivas e históricas presentes nas edificações de Itu e de outras localidades paulistas. A proposta consiste na elaboração de apostilas e materiais de apoio que organizem conhecimentos sobre esse importante período da arquitetura brasileira.

    Os conteúdos poderão abordar técnicas tradicionais de construção, materiais utilizados, elementos decorativos, organização dos espaços e influências culturais que contribuíram para a formação da arquitetura colonial. Também serão considerados exemplos de edificações históricas, permitindo relacionar os conceitos apresentados com referências presentes no patrimônio local.

    Os materiais serão utilizados como apoio em cursos e oficinas promovidos pela APRI, oferecendo uma base de consulta para os participantes. A iniciativa busca estruturar conteúdos que possam ser aproveitados em diferentes atividades educativas, contribuindo para a difusão do conhecimento sobre a arquitetura histórica.`,
    importancia: `A produção de materiais didáticos específicos sobre arquitetura colonial permite organizar e transmitir conhecimentos sobre técnicas construtivas, características arquitetônicas e contextos históricos. Esses conteúdos são importantes para ampliar a compreensão sobre a formação das cidades e a influência desse estilo na identidade cultural paulista.

    O projeto também oferece suporte às atividades educativas desenvolvidas pela APRI, contribuindo para a formação de participantes mais conscientes sobre a importância da conservação arquitetônica. Com materiais estruturados, cursos e oficinas podem abordar o tema de maneira mais aprofundada e acessível.`
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
    history: `O projeto Exposições Fotográficas propõe a criação de mostras itinerantes que apresentem as transformações do patrimônio histórico de Itu por meio da comparação entre fotografias antigas e registros contemporâneos. A iniciativa busca reunir imagens que documentem diferentes períodos da cidade, evidenciando as mudanças ocorridas em suas edificações, ruas e espaços culturais.

    A organização das exposições envolve a seleção e a contextualização dos registros fotográficos, permitindo que os visitantes compreendam as diferenças entre os períodos representados. As imagens serão acompanhadas de informações históricas que ajudem a identificar os locais retratados e a interpretar as transformações observadas ao longo do tempo.

    Por seu caráter itinerante, o projeto pretende levar as exposições a diferentes espaços culturais e educativos, ampliando o contato da população com a memória visual do município. A proposta transforma fotografias em instrumentos de conhecimento e reflexão sobre a história e a preservação do patrimônio local.`,
    importancia: `As exposições fotográficas permitem observar as transformações ocorridas nos patrimônios históricos de Itu ao longo do tempo. Ao reunir registros antigos e imagens atuais, o projeto evidencia mudanças arquitetônicas, urbanas e sociais, tornando a história da cidade mais próxima da realidade dos visitantes.

    Além de preservar registros visuais importantes, a iniciativa estimula a reflexão sobre os impactos da urbanização e a necessidade de conservação dos bens culturais. Por seu caráter itinerante, também amplia o alcance das ações educativas, levando o conhecimento histórico a diferentes espaços e públicos.`
  },
];
