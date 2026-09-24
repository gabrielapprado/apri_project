import Container from "../../ui/Container"
import Section from "../../ui/Section"
import SectionHeader from "../../ui/SectionHeader"


function CBensTombadosTab(){
    return(
        <div>
            <Section tom="claro">
                <Container>
                    <SectionHeader titulo="Bens Tombados de Itu" descricao="Reunimos aqui, de forma acessível, os bens protegidos por lei nos âmbitos municipal, estadual e federal. As informações têm caráter informativo e cultural — 
                    para dados oficiais e atualizados, consulte sempre o órgão responsável." 
                    linha={false}/>
                </Container>
            </Section>
        </div>
    )
}

export default CBensTombadosTab