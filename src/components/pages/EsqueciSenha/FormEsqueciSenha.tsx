import { useState } from "react"
import InputForm from "../../form/InputForm"
import Submit from "../../form/Submit"
import styles from "./FormEsqueciSenha.module.css"
import { Link, useNavigate } from "react-router-dom"
import { emailExiste, redefinirSenha } from "../../../services/usuarios"

type Etapa = "email" | "codigo" | "novaSenha" | "sucesso"

const VALIDADE_CODIGO_MS = 10 * 60 * 1000

function FormEsqueciSenha() {

    const navigate = useNavigate()

    const [etapa, setEtapa] = useState<Etapa>("email")
    const [email, setEmail] = useState("")
    const [codigoDigitado, setCodigoDigitado] = useState("")
    const [codigoGerado, setCodigoGerado] = useState<{ valor: string; expiraEm: number } | null>(null)
    const [novaSenha, setNovaSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [erro, setErro] = useState("")

    function gerarCodigo() {
        return String(Math.floor(100000 + Math.random() * 900000))
    }

    function handleEnviarEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setErro("")

        if (emailExiste(email)) {
            const codigo = gerarCodigo()
            setCodigoGerado({ valor: codigo, expiraEm: Date.now() + VALIDADE_CODIGO_MS })

            console.log(`[SIMULAÇÃO] Código de recuperação para ${email}: ${codigo}`)
        }

        setMensagem("Se o email estiver cadastrado, enviamos um código de 6 dígitos para ele.")
        setEtapa("codigo")
    }

    function handleVerificarCodigo(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setErro("")

        if (!codigoGerado) {
            setErro("Código inválido ou expirado. Solicite um novo.")
            return
        }

        if (Date.now() > codigoGerado.expiraEm) {
            setErro("O código expirou. Solicite um novo.")
            setCodigoGerado(null)
            return
        }

        if (codigoDigitado.trim() !== codigoGerado.valor) {
            setErro("Código incorreto.")
            return
        }

        setMensagem("")
        setEtapa("novaSenha")
    }

    // ETAPA 3: usuário define a nova senha
    function handleRedefinir(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setErro("")

        if (novaSenha.length < 6) {
            setErro("A senha deve ter pelo menos 6 caracteres.")
            return
        }

        if (novaSenha !== confirmarSenha) {
            setErro("As senhas não coincidem.")
            return
        }

        const ok = redefinirSenha(email, novaSenha)

        if (!ok) {
            setErro("Não foi possível redefinir a senha. Tente novamente.")
            return
        }

        setCodigoGerado(null)
        setEtapa("sucesso")
    }

    function reenviarCodigo() {
        setErro("")
        setCodigoDigitado("")
        setEtapa("email")
    }

    return (
        <section className={styles.page}>
            <div className={styles.card}>
                <div className={styles.title}>
                    <h1>Redefinir senha</h1>
                    <div className={styles.linhadourada}></div>
                </div>

                {etapa === "email" && (
                    <form onSubmit={handleEnviarEmail}>
                        <p className={styles.texto}>
                            Informe o email da sua conta e enviaremos um código para redefinir sua senha.
                        </p>

                        <InputForm
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Digite seu email:"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            required={true}
                        />

                        <div className={styles.submitPosition}>
                            <Submit text="Enviar código" cor="dourado" />
                        </div>
                    </form>
                )}

                {etapa === "codigo" && (
                    <form onSubmit={handleVerificarCodigo}>
                        {mensagem && <p className={styles.sucessoMsg}>{mensagem}</p>}

                        <InputForm
                            label="Código de verificação"
                            name="codigo"
                            type="text"
                            placeholder="Digite o código de 6 dígitos"
                            value={codigoDigitado}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setCodigoDigitado(e.target.value.replace(/\D/g, "").slice(0, 6))
                            }
                            required={true}
                        />

                        {erro && <p className={styles.erro}>{erro}</p>}

                        <div className={styles.submitPosition}>
                            <Submit text="Verificar código" cor="dourado" />
                        </div>

                        <p className={styles.rodape}>
                            Não recebeu?{" "}
                            <button type="button" className={styles.linkBotao} onClick={reenviarCodigo}>
                                Enviar novamente
                            </button>
                        </p>
                    </form>
                )}

                {etapa === "novaSenha" && (
                    <form onSubmit={handleRedefinir}>
                        <InputForm
                            label="Nova senha"
                            name="novaSenha"
                            type="password"
                            placeholder="Mínimo 6 caracteres"
                            value={novaSenha}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNovaSenha(e.target.value)}
                            required={true}
                        />

                        <InputForm
                            label="Confirmar nova senha"
                            name="confirmarSenha"
                            type="password"
                            placeholder="Repita a nova senha"
                            value={confirmarSenha}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmarSenha(e.target.value)}
                            required={true}
                        />

                        {erro && <p className={styles.erro}>{erro}</p>}

                        <div className={styles.submitPosition}>
                            <Submit text="Redefinir senha" cor="dourado" />
                        </div>
                    </form>
                )}

                {etapa === "sucesso" && (
                    <div>
                        <p className={styles.sucessoMsg}>Senha redefinida com sucesso!</p>
                        <div className={styles.submitPosition}>
                            <button
                                type="button"
                                className={styles.botaoDourado}
                                onClick={() => navigate("/login")}
                            >
                                Ir para o login
                            </button>
                        </div>
                    </div>
                )}

                {etapa !== "sucesso" && (
                    <p className={styles.rodape}>
                        <Link to="/login" className={styles.linkCadastro}>
                            Voltar para o login
                        </Link>
                    </p>
                )}
            </div>
        </section>
    )
}

export default FormEsqueciSenha
