import CardGrid from "../../ui/CardGrid"
import Card from "../../ui/Card"
import Container from "../../ui/Container"
import Section from "../../ui/Section"
import SectionHeader from "../../ui/SectionHeader"
import { bensTombados, type tiposEsfera } from "../../../data/bensTombados"
import type { VarianteSelo } from "../../ui/Selo"
import Selo from "../../ui/Selo"
import { LuExternalLink, LuTriangleAlert } from 'react-icons/lu'
import styles from './CBensTombadosTab.module.css'


const varianteOrgao : Record<tiposEsfera, VarianteSelo> ={
    "Estadual" :"marrom",
    "Federal":"azul",
    "Municipal":"laranja"
}


function CBensTombadosTab(){
    return(
        <div>
            <Section tom="claro">
                <Container>
                    <SectionHeader titulo="Bens Tombados de Itu" descricao="Reunimos aqui, de forma acessível, os bens protegidos por lei nos âmbitos municipal, estadual e federal. As informações têm caráter informativo e cultural — 
                    para dados oficiais e atualizados, consulte sempre o órgão responsável." 
                    linha={false}/>
                    <CardGrid>
                    {bensTombados.map((bem)=>(
                        <Card 
                            key={bem.id}
                            imagem={bem.img}
                            imagemAlt={bem.titulo}
                            titulo={bem.titulo}
                            descricao={bem.resumo}
                            botaoTexto="Saiba mais"
                            botaoTo={`/centroconteudos/benstombados/${bem.id}`}
                            localizacao={bem.endereco}
                            selo={<Selo texto={`${bem.esfera}•${bem.orgao}`} posicao="esquerda" variante={varianteOrgao[bem.esfera]} />}
                        />
                    ))}
                </CardGrid>
                <div className={styles.avisoCard}>
                    <h2>Não encontrou o bem que procura?</h2>
                    <p>
                        Nossa lista está em constante atualização. Caso o imóvel que você busca não esteja
                        aqui, você pode consultar diretamente o mapa oficial do Governo do Estado,
                        indicando o endereço exato.
                    </p>
                    <a
                        className={styles.btnDourado}
                        href="https://www.idesp.sp.gov.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Acessar Portal IDE-SP
                        <LuExternalLink size={18} aria-hidden="true" />
                    </a>
                </div>
                </Container>
            </Section>
            
            

            
            <section className={styles.dano}>
            <div className={styles.wrap}>
                <header className={styles.danoCabecalho}>
                <LuTriangleAlert size={48} className={styles.danoIcone} aria-hidden="true" />
                <h2>Percebeu dano a um bem tombado?</h2>
                <p>
                    A APRI atua na intermediação de projetos de restauro e na orientação da comunidade,
                    mas não possui poder de fiscalização. Se você identificou uma alteração irregular em
                    um imóvel protegido, o caminho correto é acionar diretamente o órgão responsável
                    pela esfera de tombamento daquele bem.
                </p>
                </header>

                
                <ol className={styles.passos}>
                <li className={styles.passo}>
                    <span className={styles.passoNumero}>1</span>
                    <p>Identifique a esfera de proteção (Municipal, Estadual e Federal) do imóvel na lista de Bens Tombados acima</p>
                </li>
                <li className={styles.passo}>
                    <span className={styles.passoNumero}>2</span>
                    <p>
                    Acione o canal oficial correspondente (veja <a href="#">abaixo</a>)
                    </p>
                </li>
                <li className={styles.passo}>
                    <span className={styles.passoNumero}>3</span>
                    <p>Em caso de dúvida sobre qual canal procurar, fale com a APRI</p>
                </li>
                </ol>

                
                <div id="canais" className={styles.canais}>
                <article className={styles.canal}>
                    <span className={styles.canalPilula}>Use se o tombamento for Municipal</span>
                    <h3>Prefeitura de Itu</h3>
                    <p>
                    Responsável por bens com tombamento municipal e questões de licenciamento de obras no centro histórico.
                    </p>
                    <a className={styles.btnDourado} href="https://itu.sp.gov.br/" target="_blank" rel="noopener noreferrer">
                        Entrar em contato
                    <LuExternalLink size={18} aria-hidden="true" />
                    </a>
                </article>

                <article className={styles.canal}>
                    <span className={styles.canalPilula}>Use se o tombamento for Estadual</span>
                    <h3>CONDEPHAAT</h3>
                    <p>
                        Responsável por bens com tombamento estadual. Recebe denúncias e questionamentos através do sistema SEI do Governo de São Paulo.
                    </p>
                    <a className={styles.btnDourado} href="https://www.cultura.sp.gov.br/sec_cultura" target="_blank" rel="noopener noreferrer">
                        Acessar Canal Oficial
                    <LuExternalLink size={18} aria-hidden="true" />
                    </a>
                </article>

                <article className={styles.canal}>
                    <span className={styles.canalPilula}>Use se o tombamento for Federal</span>
                    <h3>IPHAN</h3>
                    <p>
                    Responsável por bens com tombamento federal, de relevância histórica e cultural nacional.
                    </p>
                    <a className={styles.btnDourado} href="https://bcr.iphan.gov.br/" target="_blank" rel="noopener noreferrer">
                        Acessar Canal Oficial
                    <LuExternalLink size={18} aria-hidden="true" />
                    </a>
                </article>
                </div>
            </div>
            </section>
        </div>
    )
}

export default CBensTombadosTab