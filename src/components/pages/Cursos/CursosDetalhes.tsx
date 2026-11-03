import {Link, useParams} from 'react-router-dom'
import { useState } from 'react'
import { LuCircleCheckBig, LuArrowRight } from 'react-icons/lu'
import { cursos } from '../../../data/Cursos'
import DetalheConteudo from '../../ui/DetalheConteudo'
import styles from './CursosDetalhes.module.css'
import Footer from '../../layout/Footer'

function CursoDetalhes(){
    const { id } = useParams()
    const curso = cursos.find((c) => c.id === Number(id))

    const [enviado, setEnviado] = useState(false)

    const aoEnviar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // api futura
        setEnviado(true)
    }
    

    if (!curso) {
        return (
        <section>
            <h1>Curso não encontrado</h1>
            <Link to="/cursos">Voltar para Cursos</Link>
        </section>
        )
    }

    return(
        <div> 
            <DetalheConteudo 
                voltarTo='/cursos'
                voltarTexto='Voltar para cursos'
                categoria={curso.categoria}
                titulo={curso.titulo}
                imagem={curso.img}
                imagemAlt={curso.titulo}
                secaoTitulo={`Descrição Curso de ${curso.titulo}`}
            texto={
                    `${curso.desc}\n\nQuantidade de vagas: ${curso.vagas}\n\nPróxima turma: ${curso.proximaTurma}\n\nDuração: ${curso.duracao}`
                }
            />
            <section className={styles.interesse}>
                    {enviado ? (
                      <div className={styles.formCard}>
                        <LuCircleCheckBig size={64} className={styles.check} aria-hidden="true" />
                        <h2>Obrigado pelo seu interesse!</h2>
                        <p>
                          Em breve nossa equipe entrará em contato com todas as informações para
                          oficializar sua participação no Curso.
                        </p>
                      </div>
                    ) : (
                      <form className={`${styles.formCard} ${styles.form}`} onSubmit={aoEnviar}>
                        <span className={styles.eyebrow}>Demonstração de interesse</span>
            
                        <label>
                          Curso selecionado
                          <input type="text" name="curso" value={curso.titulo} readOnly />
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
                          <input type="tel" name="telefone" placeholder="(11) 99999-9999" required />
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
export default CursoDetalhes