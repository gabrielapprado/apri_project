import {formasParticipacao}  from "../../../data/formasParticipacao";
import CardParticipacao from "./CardParticipacao";
import Section from "../../ui/Section";
import Container from "../../ui/Container";
import Footer from "../../layout/Footer";
import SectionHeader from "../../ui/SectionHeader";


function ComoParticipar(){
   return (
    <div>
        <Section tom="vermelho">
            <Container>
                <SectionHeader titulo="Como Participar" descricao="Existem diversas formas de contribuir com a preservação do patrimônio cultural de Itu. Escolha a que melhor se adapta ao seu perfil e faça parte dessa história."/>
            </Container>
        </Section>
        <Section tom="claro">
        <Container>
            {formasParticipacao.map((forma) => (
                <CardParticipacao key={forma.title} {...forma} />
            ))}
        </Container>
        </Section>
        <Footer />
    </div>
  );
}

export default ComoParticipar