import { useState, useEffect } from "react"
import InputForm from "../../form/InputForm"
import Submit from "../../form/Submit"
import styles from "./FormLogin.module.css"
import { Link, useNavigate } from "react-router-dom"
import { getUsuarios } from "../../../services/usuarios"

function FormLogin(){

    const [form, setForm] = useState({
        usuario: "",
        senha: ""
    })

    const [erro, setErro] = useState("")

    const navigate = useNavigate()

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    useEffect(() => {
        console.log(form);
    }, [form]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const usuarios = getUsuarios()

        const usuarioEncontrado = usuarios.find(usuario =>
            form.usuario.trim().toLowerCase() === usuario.usuario.toLowerCase() &&
            form.senha === usuario.senha
        )

        if (!usuarioEncontrado) {
            setErro("Email ou senha incorretos")
            return;
        }

        setErro("")
        console.log("Login realizado!");
        console.log(usuarioEncontrado);

        if(usuarioEncontrado.tipo === "admin"){
            navigate("/administrador")
        }else{
            navigate("/associados")
        }
        
    }

    return (
        <section className={styles.page}>
            <div className={styles.card}>
                <div className={styles.title}>
                    <h1>Entrar</h1>
                    <div className={styles.linhadourada}></div>
                </div>

                <form onSubmit={handleSubmit}>
                    <InputForm
                        label="Usuário"
                        name="usuario"
                        type="email"
                        placeholder="Digite seu email:"
                        value={form.usuario}
                        onChange={handleChange}
                        required={true}
                    />

                    <InputForm
                        label="Senha"
                        name="senha"
                        type="password"
                        placeholder="Digite sua senha"
                        value={form.senha}
                        onChange={handleChange}
                        required={true}
                    />

                    <div className={styles.esqueciSenha}>
                        <Link to="/esqueci-senha" className={styles.linkCadastro}>
                            Esqueceu a senha?
                        </Link>
                    </div>

                    {erro && <p className={styles.erro}>{erro}</p>}

                    <div className={styles.submitPosition}>
                        <Submit text="Entrar" cor="dourado" />
                    </div>
                </form>

                <p className={styles.cadastroLogin}>
                    Ainda não faz parte?{" "}
                    <Link to="/comoparticipar" className={styles.linkCadastro}>
                        Venha participar
                    </Link>
                </p>
            </div>
        </section>
    )
}

export default FormLogin