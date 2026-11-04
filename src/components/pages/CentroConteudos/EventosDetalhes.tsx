import {Link, useParams} from 'react-router-dom'
import { useState } from 'react'
import { LuCircleCheckBig, LuArrowRight } from 'react-icons/lu'
import { eventos } from '../../../data/eventosPosts'
import DetalheConteudo from '../../ui/DetalheConteudo'
import styles from '../Cursos/CursosDetalhes.module.css'
import Footer from '../../layout/Footer'

function EventosDetalhes(){
    const { id } = useParams()
    const evento = eventos.find((e) => e.id === Number(id))

    const [enviado, setEnviado] = useState(false)

    const aoEnviar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // api futura
        setEnviado(true)
    }
    

    if (!evento) {
        return (
        <section>
            <h1>Evento não encontrado</h1>
            <Link to="/centroconteudos/dinamicos">Voltar ao Centro de Conteúdos</Link>
        </section>
        )
    }

    return(
        <div> 
            <DetalheConteudo 
                voltarTo='/centroconteudos/dinamicos'
                voltarTexto='Voltar para Conteúdos Dinâmicos'
                categoria='Evento'
                titulo={evento.titulo}
                imagem={evento.img}
                imagemAlt={evento.titulo}
                secaoTitulo={`Descrição do Evento de ${evento.titulo}`}
            texto={
                    `Data: ${evento.data}\n\nQuantidade de vagas: ${evento.vagas}\n\nLocal: ${evento.local}`
                }
            />
            <section className={styles.interesse}>
                    {enviado ? (
                      <div className={styles.formCard}>
                        <LuCircleCheckBig size={64} className={styles.check} aria-hidden="true" />
                        <h2>Obrigado pelo seu interesse!</h2>
                        <p>
                          Em breve nossa equipe entrará em contato com todas as informações do evento.
                        </p>
                      </div>
                    ) : (
                      <form className={`${styles.formCard} ${styles.form}`} onSubmit={aoEnviar}>
                        <span className={styles.eyebrow}>Demonstração de interesse</span>
            
                        <label>
                          Evento selecionado
                          <input type="text" name="evento" value={evento.titulo} readOnly />
                        </label>
            
                        <label>
                          Nome completo *
                          <input type="text" name="nome" placeholder="Seu nome" required />
                        </label>
            
                        <label>
                          E-mail *
                          <input type="email" name="email" placeholder="email@exemplo.com" required />
                        </label>
            
                        <label>
                          Telefone/WhatsApp *
                          <input type="tel" name="telefone" pattern="^\(\d{2}\)\s\d{5}-\d{4}$"  placeholder="(11) 99999-9999" required />
                        </label>
            
                        <button type="submit">
                          Enviar demonstração de interesse <LuArrowRight aria-hidden="true" />
                        </button>
            
                        <small>
                          Seus dados são tratados com total sigilo. Não compartilhamos
                          informações pessoais.
                        </small>
                      </form>
                    )}
                  </section>
                  <Footer />
            
        </div>
    )

}
export default EventosDetalhes