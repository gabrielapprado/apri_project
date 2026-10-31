import Footer from "../../layout/Footer"
import Container from "../../ui/Container"
import Section from "../../ui/Section"
import SectionHeader from "../../ui/SectionHeader"
import { Tabs } from "../../ui/Tabs"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

const tabs = [
    { id: "institucionais", label: "Conteúdos Institucionais" },
    { id: "dinamicos", label: "Conteúdos Dinâmicos" },
    { id: "benstombados", label: "Bens Tombados" },
]

function CentroConteudos() {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const segmento = pathname.split("/")[2]
    const activeTab = tabs.some((t) => t.id === segmento) ? segmento : "institucionais"

    return (
        <div>
            <Section tom="vermelho">
                <Container>
                    <SectionHeader
                        titulo="Centro de Conteúdos"
                        descricao="Acesse materiais institucionais, artigos, notícias e eventos da APRI"
                    />
                </Container>
            </Section>

            <Section tom="terroso">
                <Container>
                    <Tabs
                        tabs={tabs}
                        activeTab={activeTab}
                        onChange={(id) => navigate(`/centroconteudos/${id}`)}
                    />
                </Container>
            </Section>

            <Outlet />

            <Footer />
        </div>
    )
}

export default CentroConteudos