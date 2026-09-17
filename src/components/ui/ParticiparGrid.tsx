import styles from './ParticiparGrid.module.css'
import ParticiparCard from './ParticiparCard'
import { Users, Briefcase } from 'lucide-react'

function ParticiparGrid() {
    return (
        <div className={styles.grid}>
            <ParticiparCard
                icon={Users}
                titulo="Seja Associado"
                descricao="Como associado, você faz parte da comunidade APRI, participa de assembleias, tem acesso aos cursos e eventos, contribuindo com uma taxa anual simbólica. É ideal para quem deseja acompanhar de perto as ações da associação e colaborar de forma contínua."
                botaoTexto="Saiba Mais"
                botaoTo="/comoparticipar"
            />
            <ParticiparCard
                icon={Briefcase}
                titulo="Seja Patrono"
                descricao="Como patrono, você apoia financeiramente projetos específicos de educação patrimonial. Pode escolher qual iniciativa deseja patrocinar, contribuindo para a produção de conhecimento técnico voltado ao interesse público."
                botaoTexto="Quero Ser Patrono →"
                botaoTo="/comoparticipar"
                destaque
            />
        </div>
    )
}

export default ParticiparGrid