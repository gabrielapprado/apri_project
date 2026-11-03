import Section from "../../ui/Section"
import Container from "../../ui/Container"
import SectionHeader from "../../ui/SectionHeader"
import styles from "./CInstitucionaisTab.module.css"
import { linksExternos } from "../../../data/linksExternos"
import { CiShare1 } from "react-icons/ci";
import { institucionais } from "../../../data/conteudosInstitucionais"
import { IoLockClosedOutline, IoClose } from "react-icons/io5";
import { useState } from "react"
import { Link } from "react-router-dom"
import LinkButton from "../../ui/LinkButton"


function CInstitucionaisTab(){
    
    const ehAssociado = false; 

    const [modalAberta, setModalAberta] = useState(false);
    
    return(
        <div>
        <Section tom="claro">
            <Container>
                <SectionHeader titulo="Publicações e Documentos Oficiais" descricao="Artigos técnicos, livros, relatórios e materiais produzidos pela APRI"
                linha={false} />
                    
                <div className={styles.gridInsticucional}>
                    {institucionais.map((c) => (
                        <div
                            key={c.id}
                            className={styles.card}
                            onClick={() => {
                                if (!ehAssociado) {
                                    setModalAberta(true);
                                }
                            }}
                        >
                            <div className={styles.top}>
                                <div className={styles.info}>

                                    {!ehAssociado && (
                                        <span className={styles.selo}>
                                            <IoLockClosedOutline className={styles.cadeado} />
                                            Associados
                                        </span>
                                    )}

                                    <p className={styles.data}>{c.data}</p>
                                </div>

                                <span className={styles.selo}>
                                    {c.tipo}
                                </span>
                            </div>

                            <h3 className={styles.titulo}>{c.titulo}</h3>
                            <p>{c.desc}</p>
                        </div>
                    ))}
                </div>

                
                {modalAberta && (
                    <div
                        className={styles.overlay}
                        onClick={() => setModalAberta(false)}
                    >
                        <div
                            className={styles.modal}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className={styles.fechar}
                                onClick={() => setModalAberta(false)}
                                aria-label="Fechar janela"
                            >
                                <IoClose />
                            </button>


                            <div className={styles.lockModal}>
                                <IoLockClosedOutline className={styles.iconeModal} />
                            </div>

                            <h2>Conteúdo exclusivo para associados</h2>

                            <p>
                                Este material faz parte do acervo restrito da APRI,
                                disponível para nossos associados.
                            </p>

                            <LinkButton text="Fazer login" to="/entrar" cor="dourado"/>

                            <Link
                                className={styles.linkAssociar}
                                to="/comoparticipar"
                            >
                                Ainda não é associado? Saiba como se associar
                            </Link>
                        </div>
                    </div>
                )}


               

            </Container>
        </Section>

        <Section tom="terroso">
            <Container>
                <SectionHeader titulo="Links Institucionais" descricao="Órgãos e programas de apoio ao patrimônio cultural" linha={false}/>
                <div className={styles.gridLink}>
                    {linksExternos.map((link)=>(
                        <a key={link.id} href={link.url} target="_blank" className={styles.cardLink}>
                            <div className={styles.top}>
                                <h3>{link.titulo}</h3>
                                <CiShare1 />
                            </div>
                            <p>{link.desc}</p>
                        </a>
                    ))}
                </div>
            </Container>
        </Section>
        </div>
    )
}
export default CInstitucionaisTab