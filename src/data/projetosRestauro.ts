
export interface ProjetoRestauro {
  id: number;
  name: string;
  year: string;
  desc: string;
  img: string;
  history: string;
  intervencao: string;
  status: string;
}

export const projetosRestauro: ProjetoRestauro[] = [
  {
    id: 1,
    name: "Casarão do Centro",
    year: "1890",
    desc: "Construído em 1890, o Casarão do Centro foi sede da primeira prefeitura de Itu. Suas paredes de taipa guardam décadas de história política e cultural da cidade.",
    img: "https://images.unsplash.com/photo-1770349694179-0f0706ae2e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    history: `Construído no final do século XIX, o Casarão do Centro representa um importante período da formação urbana e administrativa de Itu. Sua utilização como sede da primeira prefeitura evidencia a relevância que a edificação teve na organização política e institucional do município.

Sua arquitetura preserva características construtivas tradicionais, especialmente a utilização da taipa, técnica bastante presente nas construções históricas paulistas. Esses elementos representam não apenas um estilo arquitetônico, mas também conhecimentos construtivos transmitidos entre gerações.

Ao longo do tempo, o casarão passou a integrar a memória cultural da cidade, tornando-se um testemunho de suas transformações sociais e políticas. Sua preservação é fundamental para manter viva a relação entre o patrimônio arquitetônico e a identidade histórica de Itu.`,
    intervencao: `A atuação da APRI neste projeto contempla o levantamento das características arquitetônicas da edificação e a identificação dos elementos construtivos que necessitam de conservação. A associação busca articular profissionais especializados para orientar os procedimentos de preservação, respeitando as técnicas tradicionais presentes na construção.

Também envolve a organização de registros históricos e documentação técnica, contribuindo para a avaliação das condições estruturais e patrimoniais do imóvel. A iniciativa busca estabelecer diretrizes de intervenção compatíveis com a importância histórica do casarão.

Além disso, a APRI trabalha na articulação institucional para apresentar as necessidades de conservação aos órgãos competentes e promover o reconhecimento da edificação como parte fundamental da memória urbana de Itu.`,
    status: "Em andamento",
  },
  {
    id: 2,
    name: "Antiga Escola de Itu",
    year: "1912",
    desc: "A Escola Estadual Visconde de Taunay, fundada em 1912, foi a primeira instituição de ensino público de Itu. Formou gerações de itueanos.",
    img: "https://images.unsplash.com/photo-1668163205979-d808f8ed0080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    history: `Fundada em 1912, a Escola Estadual Visconde de Taunay representa um marco na história da educação pública de Itu. Sua criação acompanhou um período de expansão das instituições de ensino e de fortalecimento das políticas educacionais no interior paulista.

Ao longo de sua trajetória, a instituição recebeu diferentes gerações de estudantes, participando diretamente da formação educacional e cultural da população ituana. O ambiente escolar também se tornou um espaço de convivência e construção de memórias compartilhadas por antigos alunos, professores e funcionários.

A preservação da antiga escola representa o reconhecimento da educação como parte integrante do patrimônio histórico da cidade. Sua arquitetura e sua trajetória institucional constituem registros importantes das transformações sociais e educacionais ocorridas ao longo do século XX.`,
    intervencao: `A APRI atua na valorização histórica da antiga instituição de ensino, buscando reunir informações sobre sua trajetória e identificar características arquitetônicas que merecem atenção especial nos processos de conservação.

Entre as ações previstas estão a organização de registros documentais, o levantamento de elementos construtivos e a articulação com profissionais da área de preservação patrimonial. Esse trabalho permite compreender as necessidades específicas da edificação e orientar possíveis medidas de conservação.

A associação também busca fortalecer o reconhecimento da escola como patrimônio cultural, promovendo o diálogo com instituições públicas e órgãos responsáveis pela proteção histórica, de modo que futuras intervenções respeitem sua identidade arquitetônica e educacional.`,
    status: "Em planejamento",
  },
  {
    id: 3,
    name: "Teatro Municipal",
    year: "1905",
    desc: "O Teatro Municipal de Itu, inaugurado em 1905, foi palco das maiores apresentações artísticas da cidade no século XX.",
    img: "https://images.unsplash.com/photo-1732392246715-d7989a77ebc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    history: `Inaugurado em 1905, o Teatro Municipal representa um importante capítulo da história cultural de Itu. Sua construção está relacionada ao fortalecimento das atividades artísticas e à valorização dos espaços destinados à convivência e à expressão cultural no início do século XX.

Durante sua trajetória, o teatro recebeu apresentações musicais, espetáculos e diferentes manifestações artísticas, tornando-se um dos principais espaços de encontro da sociedade ituana. Sua existência contribuiu para a circulação de produções culturais e para o desenvolvimento da vida artística do município.

Além de sua função cultural, a edificação apresenta valor arquitetônico e histórico, reunindo características de uma época em que os teatros ocupavam posição central na vida social das cidades. Sua conservação representa a continuidade de uma importante referência cultural para as próximas gerações.`,
    intervencao: `A atuação da APRI neste projeto concentra-se na identificação e valorização dos elementos arquitetônicos e artísticos que caracterizam o Teatro Municipal. A associação busca promover o diálogo com especialistas em conservação, especialmente para avaliar componentes decorativos e características construtivas que exigem cuidados específicos.

O trabalho também envolve a sistematização de informações históricas e o acompanhamento das condições de preservação do imóvel, contribuindo para a elaboração de orientações técnicas adequadas à natureza de seu patrimônio.

Paralelamente, a APRI busca fortalecer a articulação com instituições culturais e órgãos de preservação, incentivando o reconhecimento do teatro como espaço de relevância histórica e promovendo iniciativas que contribuam para a continuidade de sua função cultural.`,
    status: "Em andamento",
  },
  {
    id: 4,
    name: "Estação Ferroviária",
    year: "1897",
    desc: "A antiga Estação da Estrada de Ferro Sorocabana foi o ponto de chegada de milhares de imigrantes que ajudaram a construir Itu.",
    img: "https://images.unsplash.com/photo-1623197259647-0ff8e5da9a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    history: `A antiga Estação Ferroviária de Itu, associada à Estrada de Ferro Sorocabana, representa um período de importantes transformações econômicas e urbanas no interior paulista. A expansão ferroviária no final do século XIX modificou a circulação de pessoas e mercadorias, contribuindo para o desenvolvimento de diversas cidades da região.

A estação desempenhou um papel importante nesse processo, funcionando como ponto de conexão entre Itu e outras localidades. Sua movimentação esteve relacionada ao transporte de trabalhadores, imigrantes e produtos, acompanhando as mudanças sociais e econômicas que marcaram a época.

Com o passar dos anos, a edificação passou a representar uma referência da memória ferroviária local. Sua preservação permite compreender a influência das ferrovias na formação urbana e na história das comunidades que se desenvolveram ao redor desses espaços.`,
    intervencao: `A APRI busca contribuir para o reconhecimento da antiga estação como patrimônio representativo da memória ferroviária de Itu. A iniciativa envolve a identificação de características arquitetônicas originais e o levantamento de informações sobre sua utilização histórica e suas transformações ao longo do tempo.

A associação também trabalha na articulação com profissionais especializados para avaliar as condições de conservação da estrutura, considerando elementos como fachadas, esquadrias, coberturas e demais componentes característicos da arquitetura ferroviária.

Como parte dessa atuação, são consideradas a organização de documentação histórica, a apresentação de demandas aos órgãos competentes e a discussão de diretrizes para futuras intervenções, buscando preservar a identidade da edificação e sua relação com a história do desenvolvimento regional.`,
    status: "Em planejamento",
  },
  {
    id: 5,
    name: "Sobrado Colonial — Rua XV",
    year: "1850",
    desc: "Um dos mais antigos sobrados coloniais de Itu, datado de 1850. A edificação preserva elementos arquitetônicos raros.",
    img: "https://images.unsplash.com/photo-1670423292485-6b51f3f3a3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    history: `Datado de aproximadamente 1850, o Sobrado Colonial da Rua XV representa um importante exemplar da arquitetura residencial presente em Itu durante o século XIX. Sua construção está associada a um período em que os sobrados ocupavam posição de destaque na organização urbana e na composição arquitetônica das áreas centrais.

A edificação preserva características tradicionais da arquitetura colonial, que podem ser observadas em sua configuração espacial, proporções e elementos construtivos. Esses aspectos permitem compreender os métodos de construção e os padrões de ocupação utilizados em residências históricas da região.

Sua importância está relacionada tanto à antiguidade quanto à preservação de características arquitetônicas que ajudam a contar a história da cidade. A conservação do sobrado contribui para manter a diversidade do conjunto arquitetônico histórico de Itu e proteger referências materiais de seu passado.`,
    intervencao: `Neste projeto, a APRI direciona sua atuação à identificação dos elementos arquitetônicos originais do sobrado e à documentação de suas características construtivas. O objetivo é contribuir para que as particularidades da edificação sejam consideradas em qualquer processo de conservação ou restauro.

A associação busca estabelecer contato com profissionais especializados em técnicas tradicionais de construção, especialmente aquelas relacionadas à arquitetura colonial. A análise de materiais, revestimentos e componentes estruturais é considerada importante para orientar procedimentos compatíveis com a construção original.

A atuação também compreende a organização de informações históricas e o encaminhamento de questões relacionadas à preservação aos órgãos responsáveis, incentivando medidas que evitem a descaracterização do imóvel e mantenham sua integridade patrimonial.`,
    status: "Concluído",
  },
  {
    id: 6,
    name: "Palacete da Família Alvim",
    year: "1920",
    desc: "O Palacete Alvim é um exemplar raro da arquitetura eclética do início do século XX em Itu.",
    img: "https://images.unsplash.com/photo-1770497142786-0dfb6d5cc557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    history: `Construído por volta de 1920, o Palacete da Família Alvim representa a presença da arquitetura eclética em Itu durante o início do século XX. Esse estilo arquitetônico caracteriza-se pela combinação de diferentes referências estéticas e pela utilização de elementos ornamentais que conferem identidade às edificações.

O imóvel está relacionado à história residencial da cidade e às transformações arquitetônicas ocorridas em um período de modernização urbana. Sua composição apresenta características que permitem observar a influência de diferentes estilos e tendências construtivas presentes na arquitetura brasileira da época.

Atualmente, o palacete constitui uma referência importante para a compreensão da diversidade arquitetônica de Itu. Sua preservação é relevante para manter registros materiais de um período histórico e valorizar as diferentes expressões arquitetônicas que compõem o patrimônio cultural do município.`,
    intervencao: `A APRI atua na valorização do Palacete da Família Alvim por meio da identificação de seus elementos arquitetônicos e ornamentais, buscando reconhecer as características que tornam a edificação representativa do estilo eclético em Itu.

A iniciativa contempla a organização de registros fotográficos e históricos, além da articulação com profissionais especializados em conservação de edificações históricas. A análise de fachadas, ornamentos, esquadrias e demais componentes arquitetônicos permite identificar aspectos que devem receber atenção em eventuais ações de preservação.

A associação também busca promover o diálogo com os órgãos de proteção patrimonial, contribuindo para a definição de diretrizes de conservação que respeitem a composição original do palacete e sua importância para o conjunto arquitetônico histórico da cidade.`,
    status: "Em planejamento",
  },
];
