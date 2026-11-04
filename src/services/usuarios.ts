
export type Usuario = {
    usuario: string
    senha: string
    tipo: "admin" | "associado"
}

const CHAVE = "usuarios_app"

const usuariosPadrao: Usuario[] = [
    { usuario: "administrador@email.com", senha: "1234", tipo: "admin" },
    { usuario: "associado@email.com", senha: "1234", tipo: "associado" }
]

export function getUsuarios(): Usuario[] {
    try {
        const salvo = localStorage.getItem(CHAVE)
        if (salvo) return JSON.parse(salvo) as Usuario[]
    } catch {
    }
    return usuariosPadrao
}

export function emailExiste(email: string): boolean {
    const emailNormalizado = email.trim().toLowerCase()
    return getUsuarios().some(u => u.usuario.toLowerCase() === emailNormalizado)
}

export function redefinirSenha(email: string, novaSenha: string): boolean {
    const emailNormalizado = email.trim().toLowerCase()
    const usuarios = getUsuarios()
    let alterou = false

    const atualizados = usuarios.map(u => {
        if (u.usuario.toLowerCase() === emailNormalizado) {
            alterou = true
            return { ...u, senha: novaSenha }
        }
        return u
    })

    if (alterou) {
        try {
            localStorage.setItem(CHAVE, JSON.stringify(atualizados))
        } catch {
            return false
        }
    }

    return alterou
}
