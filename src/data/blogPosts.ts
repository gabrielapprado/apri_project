
export interface Blog {
  id: number;
  titulo: string;
  categoria: categoriaPosts;
  data: string;
  img: string;
  desc: string;
  historia: string;
}

export type categoriaPosts = 'Preservação' | 'Arquitetura' | 'História' | 'Notícias';

export const blogPosts: Blog[] = [
  {
    id: 1,
    titulo: "A importância da preservação do Centro Histórico",
    categoria: "Preservação",
    data: "02 Mai 2026",
    img: "https://images.unsplash.com/photo-1758300468850-acaecff32c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    desc: "Entenda por que preservar construções históricas é fundamental para manter viva a identidade cultural e a memória de uma cidade.",
    historia: `Os centros históricos representam muito mais do que conjuntos de construções antigas. Eles preservam registros materiais da formação das cidades, reunindo características arquitetônicas, culturais e sociais que ajudam a compreender diferentes períodos da história.

Em Itu, as edificações históricas fazem parte da identidade do município e refletem transformações ocorridas ao longo de gerações. Fachadas, técnicas construtivas, monumentos e espaços públicos constituem referências importantes para a compreensão de sua trajetória.

A preservação desses espaços exige atenção contínua, planejamento e participação da sociedade. Além das intervenções técnicas necessárias à conservação das construções, é fundamental promover o reconhecimento de seu valor histórico e incentivar a comunidade a participar da proteção desse patrimônio.`
  },
  {
    id: 2,
    titulo: "Como identificar estilos arquitetônicos coloniais",
    categoria: "Arquitetura",
    data: "28 Abr 2026",
    img: "https://images.unsplash.com/photo-1670423292485-6b51f3f3a3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    desc: "Conheça características que ajudam a reconhecer a arquitetura colonial e compreender sua presença nas construções históricas brasileiras.",
    historia: `A arquitetura colonial brasileira reúne diferentes características construtivas desenvolvidas durante o período colonial, refletindo influências portuguesas e adaptações às condições locais. Suas construções apresentam soluções arquitetônicas que variam conforme a região, os materiais disponíveis e as necessidades de cada época.

Entre os elementos que podem ser observados estão as fachadas simétricas, os telhados com telhas cerâmicas, as portas e janelas de madeira, além de técnicas tradicionais como a taipa de pilão e a taipa de mão. Em muitos exemplares, também são encontrados detalhes ornamentais e elementos que demonstram a influência de diferentes períodos artísticos.

Reconhecer essas características permite compreender melhor a história das edificações e identificar os aspectos que precisam ser preservados. A observação arquitetônica é, portanto, uma importante ferramenta para valorizar o patrimônio e evitar intervenções que comprometam sua identidade original.`
  },
  {
    id: 3,
    titulo: "Restauro da Igreja Matriz: avanços e desafios",
    categoria: "Notícias",
    data: "20 Abr 2026",
    img: "https://images.unsplash.com/photo-1555681102-b797fb73aa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    desc: "Conheça os principais aspectos envolvidos na conservação de igrejas históricas e os desafios técnicos de um processo de restauro.",
    historia: `A conservação de igrejas históricas envolve uma série de cuidados que vão além da recuperação de suas estruturas físicas. Esses espaços frequentemente reúnem elementos arquitetônicos, artísticos e religiosos de grande relevância, exigindo intervenções planejadas e conduzidas por profissionais especializados.

Entre os principais desafios estão a identificação de danos estruturais, a conservação de pinturas, ornamentos e elementos decorativos, além da escolha de técnicas e materiais compatíveis com os métodos construtivos originais. Cada etapa precisa considerar as características específicas da edificação e sua trajetória histórica.

O processo de restauro também depende de documentação técnica, acompanhamento especializado e diálogo com os órgãos responsáveis pela proteção do patrimônio. Essas medidas ajudam a garantir que as intervenções respeitem a integridade histórica e artística do edifício, permitindo que ele continue sendo uma referência cultural para a comunidade.`
  },
  {
    id: 4,
    titulo: "A memória das antigas estações ferroviárias",
    categoria: "História",
    data: "15 Abr 2026",
    img: "https://images.unsplash.com/photo-1623197259647-0ff8e5da9a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    desc: "Descubra como as ferrovias contribuíram para o desenvolvimento das cidades e se tornaram parte importante da memória urbana.",
    historia: `A expansão ferroviária desempenhou um papel importante no desenvolvimento econômico e social de diversas cidades brasileiras durante os séculos XIX e XX. As estações se tornaram pontos de circulação de pessoas e mercadorias, contribuindo para a integração entre diferentes regiões.

Em Itu, a presença da Estrada de Ferro Sorocabana esteve relacionada às transformações da cidade e à intensificação das conexões com outros municípios. As estações representavam espaços de encontro, deslocamento e atividade comercial, participando diretamente da dinâmica urbana da época.

Atualmente, as antigas estruturas ferroviárias representam importantes referências da memória coletiva. Sua conservação permite compreender como os transportes influenciaram a formação das cidades e reforça a importância de preservar construções que testemunharam mudanças significativas na história regional.`
  },
  {
    id: 5,
    titulo: "Educação patrimonial: preservar também é conhecer",
    categoria: "Preservação",
    data: "08 Abr 2026",
    img: "https://images.unsplash.com/photo-1561495934-8c5cea8192b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    desc: "Entenda como a educação patrimonial aproxima a população de sua história e incentiva a valorização dos bens culturais.",
    historia: `A educação patrimonial é um processo de construção de conhecimento que busca aproximar as pessoas dos bens culturais presentes em seu cotidiano. Por meio de atividades educativas, pesquisas, visitas e ações de conscientização, é possível compreender os significados históricos e sociais associados aos patrimônios.

Nas escolas, esse trabalho permite que os estudantes reconheçam a importância dos espaços históricos de sua própria cidade, estabelecendo relações entre o conteúdo aprendido e a realidade em que vivem. A abordagem também estimula o respeito à diversidade cultural e o reconhecimento das diferentes memórias que compõem a identidade de uma comunidade.

Preservar depende também de conhecer e valorizar. Quando a população compreende a relevância de seus patrimônios, torna-se mais consciente da necessidade de protegê-los e transmitir esse conhecimento às próximas gerações.`
  },
  {
    id: 6,
    titulo: "Arquitetura e identidade: o patrimônio nas cidades",
    categoria: "Arquitetura",
    data: "01 Abr 2026",
    img: "https://images.unsplash.com/photo-1732392246715-d7989a77ebc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    desc: "Veja como as características arquitetônicas das construções históricas ajudam a contar a trajetória e a identidade de uma cidade.",
    historia: `A arquitetura é uma das expressões mais visíveis da história de uma cidade. As construções registram diferentes períodos de desenvolvimento urbano, apresentando estilos, técnicas e soluções que refletem os conhecimentos e as referências culturais de cada época.

Em cidades com conjuntos arquitetônicos históricos, como Itu, a diversidade das edificações permite observar as transformações ocorridas ao longo do tempo. Construções coloniais, ecléticas e outras expressões arquitetônicas convivem e demonstram a influência de diferentes contextos sociais e culturais na formação urbana.

Valorizar essa diversidade significa reconhecer que cada edificação pode contribuir para a compreensão da identidade local. A preservação arquitetônica, nesse sentido, não se limita à conservação de estruturas antigas, mas também representa o cuidado com as referências culturais que conectam o passado, o presente e o futuro das cidades.`
  },
];
