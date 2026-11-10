import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuClock,
  LuCircleCheck,
} from "react-icons/lu";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import SectionHeader from "../../ui/SectionHeader";
import styles from "./Contato.module.css";
import Footer from "../../layout/Footer";

const ENDERECO_RUA = "Rua Dr. José Elias, 9 - Centro";
const ENDERECO_CIDADE = "Itu, São Paulo";
const ENDERECO_CEP = "13300-250";

const linkMapa = `https://maps.google.com/?q=${encodeURIComponent(
  `${ENDERECO_RUA}, ${ENDERECO_CIDADE}, ${ENDERECO_CEP}`
)}`;

const infoContato = [
  {
    icon: LuMapPin,
    title: "Endereço",
    lines: [ENDERECO_RUA, `${ENDERECO_CIDADE}, Brazil`, `CEP ${ENDERECO_CEP}`],
  },
  { icon: LuPhone, title: "Telefone / WhatsApp", lines: ["(11) 2715-5878"] },
  { icon: LuMail, title: "E-mail", lines: ["contato@apri.org.br"] },
  { icon: LuClock, title: "Horário de Atendimento", lines: ["Segunda a Sexta: 9h – 17h"] },
];

const assuntos = [
  "Interesse no curso",
  "Quero ser patrono",
  "Dúvidas sobre projetos",
  "Parceria institucional",
  "Voluntariado",
  "Imprensa",
  "Outro",
];

const formInicial = { name: "", email: "", phone: "", subject: "", msg: "" };

function Contato() {
  const [form, setForm] = useState(formInicial);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleNovaMensagem = () => {
    setForm(formInicial);
    setSent(false);
  };

  return (
    <>
      <Section tom="vermelho">
        <Container>
          <SectionHeader titulo="Contato" descricao="Tem alguma dúvida sobre como apoiar ou quer conhecer melhor nosso trabalho? Entre em contato!" />
        </Container>
      </Section>

      <section className={styles.section}>
        <div className={styles.grid}>
          
          <div className={styles.contatoStyle}>
            <div>
              <h2 className={styles.subHeading}>Fale Conosco</h2>
              <div className={styles.divider2} />
            </div>

            {infoContato.map(({ icon: Icon, title, lines }) => (
              <div key={title} className={styles.card}>
                <div className={styles.contatoStyle2}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className={styles.text2}>{title}</p>
                  {lines.map((l) => (
                    <p key={l} className={styles.text3}>{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.contatoStyle3}>
            {sent ? (
              <div className={styles.card2}>
                <LuCircleCheck size={64} className={styles.icon} />
                <h3 className={styles.heading}>Mensagem enviada!</h3>
                <p className={styles.text4}>
                 Recebemos sua mensagem. Em breve, nossa equipe entrará em contato com você.
                 Obrigado pelo seu interesse em preservar o patrimônio de Itu!
                </p>
                <button onClick={handleNovaMensagem} className={styles.button}>
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formHeading}>Envie sua mensagem</h3>

                <div className={styles.grid2}>
                  <div>
                    <label htmlFor="name" className={styles.label}>Nome completo *</label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={styles.label}>E-mail *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="email@exemplo.com"
                    />
                  </div>
                </div>

                <div className={styles.grid2}>
                  <div>
                    <label htmlFor="phone" className={styles.label}>Telefone</label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      pattern="^\(\d{2}\) \d{5}-\d{4}$"
                      value={form.phone}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className={styles.label}>Assunto *</label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className={`${styles.input} ${styles.select}`}
                    >
                      <option value="" disabled>Selecione...</option>
                      {assuntos.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="msg" className={styles.label}>Mensagem *</label>
                  <textarea
                    id="msg"
                    name="msg"
                    required
                    rows={5}
                    value={form.msg}
                    onChange={handleChange}
                    className={styles.textarea}
                    placeholder="Escreva sua mensagem aqui..."
                  />
                </div>

                <button type="submit" className={styles.button2}>
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      
      <section className={styles.section2}>
        <div className={styles.container}>
          <div className={styles.column}>
            <LuMapPin size={48} className={styles.icon2} />
            <p className={styles.heading2}>{ENDERECO_CIDADE}</p>
            <p className={styles.text5}>{ENDERECO_RUA}</p>
            <a
              href={linkMapa}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button3}
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contato;