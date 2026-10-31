import CardGrid from "../../ui/CardGrid"
import Card from "../../ui/Card"
import Container from "../../ui/Container"
import Section from "../../ui/Section"
import SectionHeader from "../../ui/SectionHeader"
import { bensTombados, type tiposEsfera } from "../../../data/bensTombados"
import type { VarianteSelo } from "../../ui/Selo"
import Selo from "../../ui/Selo"

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
                </Container>
            </Section>
        </div>
    )
}

export default CBensTombadosTab