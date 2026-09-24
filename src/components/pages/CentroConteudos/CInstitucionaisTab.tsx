import Section from "../../ui/Section"
import Container from "../../ui/Container"
import SectionHeader from "../../ui/SectionHeader"

function CInstitucionaisTab(){
    return(
        <div>
        <Section tom="claro">
            <Container>
                <SectionHeader titulo="Publicações e Documentos Oficiais" descricao="Artigos técnicos, livros, relatórios e materiais produzidos pela APRI"
                linha={false} />
            </Container>
        </Section>

        <Section tom="terroso">
            <Container>
                <SectionHeader titulo="Links Institucionais" descricao="Órgãos e programas de apoio ao patrimônio cultural" linha={false}/>
            </Container>
        </Section>
        </div>
    )
}
export default CInstitucionaisTab