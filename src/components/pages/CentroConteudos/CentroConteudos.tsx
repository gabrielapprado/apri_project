import Footer from "../../layout/Footer"
import Container from "../../ui/Container"
import Section from "../../ui/Section"
import SectionHeader from "../../ui/SectionHeader"
import { useState } from "react"
import { Tabs } from "../../ui/Tabs"
import CInstitucionaisTab from "./CInstitucionaisTab"
import CDinamicosTab from "./CDinamicosTab"
import CBensTombadosTab from "./CBensTombadosTab"


function CentroConteudos(){
   
    const [activeTab, setActiveTab] = useState("institucionais");
   
    return(
    <div>
        <Section tom="vermelho">
            <Container >
                <SectionHeader titulo="Centro de Conteúdos" descricao="Acesse materiais institucionais, artigos, notícias e eventos da APRI"/>
            </Container>
        </Section>

        <Section tom="terroso">
            <Container>
                <Tabs 
                    tabs={[
                        {id:"institucionais", label:"Conteúdos Institucionais"},
                        {id:"dinamicos", label:"Conteúdos Dinâmicos"},
                        {id:"tombados",label:"Bens Tombados"}
                    ]}
                activeTab={activeTab}
                onChange={setActiveTab}
                />
            </Container>
        </Section>
       
        {activeTab === "institucionais" && <CInstitucionaisTab />}
        {activeTab === "dinamicos" && <CDinamicosTab />}
        {activeTab === "tombados" && <CBensTombadosTab />}

        <Footer />
    </div>
   )
}

export default CentroConteudos