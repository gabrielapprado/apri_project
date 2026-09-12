## Componentes Reutilizáveis

### `<Section />`
Controla o **fundo colorido** de uma faixa inteira da página.

```tsx
<Section tom="vermelho">...</Section>
```

**Props:**
- `tom: 'vermelho' | 'terroso' | 'claro' | 'cinza'` — obrigatório, define a cor de fundo
- `className?: string` — extra opcional

---

### `<Container />`
Centraliza e limita a largura do conteúdo. Usado sempre dentro de uma `Section`.

```tsx
<Section tom="claro">
  <Container>...</Container>
</Section>
```

---

### `<SectionHeader />`
Título + linha dourada opcional + descrição opcional. **Não recebe `tom`** — a cor do texto (`section-title`/`section-description`) é resolvida via CSS global, olhando pra classe `tom` do `Section` mais próximo (por isso essas classes usam `:global()` no `Section.module.css`, não são isoladas por CSS Modules como as outras).

```tsx
<SectionHeader titulo="Projetos APRI" descricao="Conheça nossos projetos..." />
<SectionHeader titulo="Cursos" linha={false} />
```

**Props:**
- `titulo: string` — obrigatório
- `descricao?: string` — opcional
- `linha?: boolean` — opcional, `true` por padrão

⚠️ Sempre usar **dentro** de uma `<Section tom="...">` — sem isso, o texto fica sem cor definida (herda o padrão do body).

⚠️ Não usar quando a seção tiver um layout muito específico (ex: CTA com subtítulo + palavra destacada) — nesses casos, montar direto no `.module.css` da própria página.

---

### `<LinkButton />`
Botão de navegação interna (`<Link>` do react-router-dom, sem reload de página).

```tsx
<LinkButton to="/comoparticipar" text="Quero Apoiar →" cor="dourado" />
<LinkButton to="/entrar" text="Entrar" cor="vermelho" />
```

**Props:**
- `to: string` — obrigatório
- `text: string` — obrigatório
- `cor: 'dourado' | 'vermelho'` — obrigatório

---

### `<Header />` e `<Footer />`
Fixos em `App.tsx`, aparecem em toda página. Não recebem props — links são fixos dentro do próprio componente. `Header` usa `<NavLink>`, que marca automaticamente o link da rota atual.

---




- Cuidado com CSS Modules: cada `.module.css` é isolado por padrão (nomes de classe são "hasheados"). As classes `section-title`/`section-description` são exceção proposital, marcadas com `:global()` no `Section.module.css` — não renomeie ou mova essas classes sem entender esse mecanismo, ou a cor do `SectionHeader` para de funcionar silenciosamente.
