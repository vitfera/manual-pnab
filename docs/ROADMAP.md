# Roadmap de Reestruturação — Manual Rede das Artes

> **Criado em:** 16 de março de 2026 · **Atualizado em:** 22 de março de 2026  
> **Base:** `LEVANTAMENTO.md`  
> **Objetivo:** Reestruturar o manual para dois atores específicos: **Proponente** e **Gestor do Ente Federativo**  
> **Nome do produto:** ~~Rede das Artes~~ → **Cult Editais** (renomeado em 19/03/2026)

---

## 1. O que é o Cult Editais

> ⚠️ **O produto foi renomeado de "Rede das Artes" para "Cult Editais"** (commits `da480b9`, `90b77da`, `c5db20e` — 19/03/2026). Todas as referências ao nome antigo no conteúdo e no código devem ser atualizadas.

O **Cult Editais** é uma plataforma digital do Ministério da Cultura (MinC) que permite que **estados e municípios publiquem e gerenciem seus próprios editais da Política Nacional Aldir Blanc** em um ambiente unificado. O sistema foi desenhado para otimizar todo o ciclo de vida de um edital:

1. **Divulgação** do edital
2. **Inscrição** dos proponentes
3. **Seleção** dos projetos
4. **Monitoramento** da execução
5. **Prestação de contas**

A ferramenta é integrada ao **CultBR**, facilitando o envio de dados ao **SNIIC** (Sistema Nacional de Informações e Indicadores Culturais), fortalecendo a capacidade do governo de gerar dados qualificados sobre o impacto das políticas culturais.

> *"Ao disponibilizar esta ferramenta digital, buscamos proporcionar uma significativa economia de tempo e de recursos para os entes federativos. A expectativa é que essa otimização permita que um volume maior de recursos da Política Nacional Aldir Blanc seja direcionado aos agentes culturais."*  
> — Teresa Labrunie, coordenadora-Geral de Análise e Articulação de Políticas Culturais do MinC

---

## 2. Mudança de foco do manual

O manual anterior cobria a plataforma (Mapas Culturais / Rede das Artes) de forma genérica.  
O novo manual é **operacional e contextualizado** para dois atores específicos do Cult Editais:

| Ator | Quem é | O que precisa no manual |
|---|---|---|
| **Proponente** | Agente cultural (pessoa física ou coletivo) que se cadastra na plataforma e se inscreve nos editais da Política Nacional Aldir Blanc | Como criar conta, montar perfil, encontrar e se inscrever em editais, acompanhar resultados e prestação de contas |
| **Gestor do Ente Federativo** | Servidor de secretaria de cultura estadual ou municipal que **lança editais, realiza as avaliações e conduz todo o fluxo** na plataforma | Como criar e publicar editais, configurar fases, avaliar inscrições, gerar relatórios e acompanhar a execução |

> **Nota:** referências ao perfil "Gestor Funarte/MinC" ou à "Rede das Artes" devem ser removidas ou generalizadas para qualquer ente federativo da Política Nacional Aldir Blanc.

---

## 3. Nova estrutura de conteúdo

### 3.1 Seção Proponente

**Pasta atual:** `content/docs/usuarios/`  
**Ação:** renomear para `content/docs/proponente/`

| # | Arquivo | Situação | Ação | Observação |
|---|---|---|---|---|
| 1 | `intro.mdx` | ✅ existe | **Adaptar** | Focar no contexto do proponente; remover histórico técnico longo (versões 7.5/7.6/7.7); manter "quem pode usar" |
| 2 | `conta.mdx` | ❌ não existe | **Criar** (desmembrar de `home.mdx`) | Extrair de `home.mdx`: criar conta, editar perfil, painel de controle, preferências |
| 3 | `agentes.mdx` | ✅ existe (`agents.mdx`) | **Adaptar + renomear** | Renomear para `agentes.mdx`; focar em "como gerenciar MEU perfil de agente" (individual/coletivo) |
| 4 | `oportunidades.mdx` | ✅ existe (`opportunities.mdx`) | **Adaptar + renomear** | Renomear para `oportunidades.mdx`; detalhar melhor fase recursal e acompanhamento de resultados |
| 5 | `iniciativas.mdx` | ✅ existe (`projects.mdx`) | **Adaptar + renomear** | Renomear para `iniciativas.mdx`; padronizar terminologia ("iniciativa" em vez de "projeto") |
| 6 | `espacos.mdx` | ✅ existe (`spaces.mdx`) | **Adaptar + renomear** | Renomear para `espacos.mdx` |
| 7 | `eventos.mdx` | ✅ existe (`events.mdx`) | **Adaptar + renomear** | Renomear para `eventos.mdx` |
| — | `---` | — | separador | — |
| 8 | `duvidas-frequentes.mdx` | ✅ existe | **Revisar** | Atualizar com dúvidas reais do proponente |
| 9 | `referencias.mdx` | ✅ existe | **Manter/revisar** | — |

**Arquivos a remover da seção:**
- `welcome.mdx` — conteúdo absorvido pela `intro.mdx`
- `home.mdx` — desmembrado: navegação básica vai para `intro.mdx`, conta/perfil vai para `conta.mdx`

---

### 3.2 Seção Gestor do Ente Federativo

**Pasta atual:** `content/docs/gestores/`  
**Ação:** ~~manter pasta, atualizar `meta.json`~~ → ✅ renomeada para `content/docs/gestor/` (commit `7732901`)

| # | Arquivo | Situação | Ação | Observação |
|---|---|---|---|---|
| 1 | `intro.mdx` | ✅ existe | **Adaptar** | Generalizar de "Funarte" para "ente federativo"; descrever perfis de gestor (admin, moderador, etc.) |
| 2 | `painel-controle.mdx` | ✅ existe | **Adaptar** | Manter estrutura; generalizar referências institucionais |
| 3 | `gerenciar-oportunidades.mdx` | ✅ existe | **Expandir** | Já tem bastante conteúdo; verificar se precisa ser desmembrado |
| 4 | `gerenciar-agentes.mdx` | ❌ não existe | **Criar** | Visualizar, aprovar, vincular e gerir agentes do território |
| 5 | `gerenciar-espacos.mdx` | ❌ não existe | **Criar** | Visualizar, editar e publicar espaços culturais do território |
| 6 | `gerenciar-eventos.mdx` | ❌ não existe | **Criar** | Visualizar, editar e publicar eventos do território |
| 7 | `gerenciar-iniciativas.mdx` | ❌ não existe | **Criar** | Renomear de `gerenciar-projetos.mdx`; gerir iniciativas do território |
| 8 | `relatorios-metricas.mdx` | ❌ não existe | **Criar** | Exportar dados, visualizar métricas, relatórios de oportunidades |
| 9 | `configuracoes-plataforma.mdx` | ❌ não existe | **Criar** | Configurações gerais do painel gestor |
| — | `---` | — | separador | — |
| 10 | `duvidas-frequentes.mdx` | ✅ existe | **Revisar** | Atualizar com dúvidas reais do gestor |
| 11 | `referencias.mdx` | ✅ existe | **Manter/revisar** | — |

---

## 4. Partes que saem do manual

| Conteúdo | Motivo |
|---|---|
| Histórico completo do Mapas (2004, Mapsys, Hacklab, versões) | Não é conteúdo operacional do Cult Editais; pode virar nota de rodapé ou link externo |
| `welcome.mdx` (seção usuários) | Redundante com `intro.mdx`; conteúdo de onboarding absorvido |
| Navegação geral da home (`home.mdx` > parte de abas/agenda) | Contexto da plataforma anterior; o Cult Editais tem foco em editais/inscrições |
| Referências a "Rede das Artes", "Mapas Culturais" como produto principal | Substituir por "Cult Editais" |
| Referências a Funarte como ente específico em `gestores/intro.mdx` | Generalizar para secretarias estaduais/municipais da Política Nacional Aldir Blanc |
| Partes da seção gestores focadas exclusivamente no workflow Funarte/PNAB | Generalizar para workflows de qualquer edital da Política Nacional Aldir Blanc |

---

## 5. Partes que entram no manual

| Conteúdo | Seção | Observação |
|---|---|---|
| Como criar uma conta (desmembrado de `home.mdx`) | Proponente | Passo a passo de acesso e configuração inicial do perfil no Cult Editais |
| Fluxo de inscrição em edital da Política Nacional Aldir Blanc | Proponente | Fortalecer seção de oportunidades com esse contexto |
| Gerenciar agentes do território | Gestor | Novo arquivo; imagens precisam ser capturadas |
| Gerenciar espaços do território | Gestor | Novo arquivo; imagens precisam ser capturadas |
| Gerenciar eventos do território | Gestor | Novo arquivo; imagens precisam ser capturadas |
| Gerenciar iniciativas do território | Gestor | Novo arquivo; imagens precisam ser capturadas |
| Relatórios e métricas | Gestor | Novo arquivo; inclui envio ao SNIIC via CultBR |
| Configurações da plataforma | Gestor | Novo arquivo; imagens precisam ser capturadas |

---

## 6. Partes que precisam ser desmembradas

| Arquivo atual | Desmembrar em | Critério |
|---|---|---|
| `usuarios/home.mdx` | `proponente/conta.mdx` (criar conta, editar perfil, painel) + manter min. em `intro.mdx` (navegação básica) | Arquivo atual mistura: visão geral da home, criação de conta, edição de perfil e painel de controle — são assuntos distintos |
| `gestores/gerenciar-oportunidades.mdx` | Avaliar se deve virar `configurar-oportunidade.mdx` + `avaliar-inscricoes.mdx` | O arquivo já cobre 3 fases (config, avaliação, resultados) com ~87 imagens; pode ficar pesado para um único MDX |

---

## 7. Padrão de nomenclatura de imagens

### Padrão proposto

```
content/docs/{ator}/img/{nn}_{slug-pagina}/{nn}_{descricao-curta}.{ext}
```

| Segmento | Regra | Exemplo |
|---|---|---|
| `{ator}` | `proponente` ou `gestor` | `proponente` |
| `{nn}` | Número de 2 dígitos com zero à esquerda | `01`, `12` |
| `{slug-pagina}` | Slug kebab-case igual ao nome do arquivo MDX | `oportunidades`, `conta` |
| `{descricao-curta}` | Descrição em kebab-case, sem artigos, máximo 4 palavras | `criar-conta`, `filtrar-oportunidades` |
| `{ext}` | `.jpg` para screenshots, `.png` para elementos com transparência, `.svg` para ícones | — |

### Exemplos aplicados

```
content/docs/proponente/img/
├── 01_intro/
│   └── 01_plataforma-visao-geral.jpg
├── 02_conta/
│   ├── 01_criar-conta.jpg
│   ├── 02_preencher-formulario.jpg
│   ├── 03_confirmar-email.jpg
│   └── 04_editar-perfil.jpg
├── 03_agentes/
│   ├── 01_agente-individual.jpg
│   ├── 02_agente-coletivo.jpg
│   └── 03_editar-agente.jpg
├── 04_oportunidades/
│   ├── 01_lista-oportunidades.jpg
│   ├── 02_filtrar-oportunidades.jpg
│   ├── 03_abrir-oportunidade.jpg
│   ├── 04_formulario-inscricao.jpg
│   ├── 05_enviar-inscricao.jpg
│   └── 06_acompanhar-resultado.jpg
├── 05_iniciativas/
├── 06_espacos/
└── 07_eventos/

content/docs/gestor/img/
├── 01_intro/
├── 02_painel-controle/
├── 03_gerenciar-oportunidades/
│   ├── 01_criar-oportunidade.jpg
│   ├── 02_configurar-fases.jpg
│   └── ...
├── 04_gerenciar-agentes/
├── 05_gerenciar-espacos/
├── 06_gerenciar-eventos/
├── 07_gerenciar-iniciativas/
├── 08_relatorios-metricas/
└── 09_configuracoes-plataforma/
```

### Regras adicionais

- Ícones de seção: `{nn}_{slug-pagina}/icon.svg` (arquivo sempre chamado `icon.svg`)
- Sequência numérica dentro da pasta: ordem de aparição no MDX, nunca pular números
- Sem espaços, acentos ou maiúsculas em nomes de arquivo
- Subpastas dentro de uma pasta de página: **evitar** — se necessário, usar prefixo numérico no nome do arquivo em vez de subpasta

---

## 8. Mapeamento de renomeação de pastas (imagens existentes)

Para migrar as imagens atuais para o novo padrão:

### Seção Proponente (de `usuarios/img/` → `proponente/img/`)

| Pasta atual | Pasta nova |
|---|---|
| `01_intro/` | `01_intro/` |
| `02_home/02_02/` (criar conta) | `02_conta/` |
| `02_home/02_04/` (painel/perfil) | `02_conta/` (junto com criar conta) |
| `02_home/02_05/` (busca) | `02_conta/` ou remover |
| `02_home/02_01/` (navegação geral) | `01_intro/` (mover para intro) ou remover |
| `03_opportunities/` | `04_oportunidades/` |
| `04_agents/` | `03_agentes/` |
| `05_events/` | `07_eventos/` |
| `06_spaces/` | `06_espacos/` |
| `07_projects/` | `05_iniciativas/` |

### Seção Gestor (de `gestores/img/` → `gestor/img/`)

| Pasta atual | Pasta nova |
|---|---|
| `01_intro/` | `01_intro/` |
| `02_painel/` | `02_painel-controle/` |
| `03_oportunidades/03_01/` | `03_gerenciar-oportunidades/` (subpastas → arquivos numerados) |
| `03_oportunidades/03_02/` | `03_gerenciar-oportunidades/` (continua) |
| `03_oportunidades/03_03/` | `03_gerenciar-oportunidades/` (continua) |
| `03_oportunidades/03_04/` | `03_gerenciar-oportunidades/` (continua) |
| `03_oportunidades/03_05/` | `03_gerenciar-oportunidades/` (continua) |
| *(a criar)* | `04_gerenciar-agentes/` |
| *(a criar)* | `05_gerenciar-espacos/` |
| *(a criar)* | `06_gerenciar-eventos/` |
| *(a criar)* | `07_gerenciar-iniciativas/` |
| *(a criar)* | `08_relatorios-metricas/` |
| *(a criar)* | `09_configuracoes-plataforma/` |

---

## 9. Nova estrutura de navegação (`meta.json`)

### `content/docs/proponente/meta.json`

```json
{
  "title": "Proponente",
  "description": "Guia para proponentes do Cult Editais",
  "root": true,
  "pages": [
    "intro",
    "conta",
    "agentes",
    "oportunidades",
    "iniciativas",
    "espacos",
    "eventos",
    "---.---",
    "duvidas-frequentes",
    "referencias"
  ]
}
```

### `content/docs/gestor/meta.json`

```json
{
  "title": "Gestor",
  "description": "Guia para gestores de entes federativos no Cult Editais",
  "root": true,
  "pages": [
    "intro",
    "painel-controle",
    "gerenciar-oportunidades",
    "gerenciar-agentes",
    "gerenciar-espacos",
    "gerenciar-eventos",
    "gerenciar-iniciativas",
    "relatorios-metricas",
    "configuracoes-plataforma",
    "---.---",
    "duvidas-frequentes",
    "referencias"
  ]
}
```

---

## 10. Checklist de execução

### Fase 0 — Layout, identidade visual e configurações globais

> **Deve ser executada antes de qualquer outra fase.** Define a base visual do manual novo e evita retrabalho nos componentes.

#### 0.1 Identidade visual — logos e marcas

| Item | Situação | Ação |
|---|---|---|
| ~~`public/svg/dark-logo-rede-das-artes.svg`~~ | ✅ **Removido** (commit `c5db20e`) | Substituído por `public/img/cultbr-fundo-claro.png` |
| ~~`public/svg/light-logo-rede-das-artes.svg`~~ | ✅ **Removido** (commit `c5db20e`) | Substituído por `public/img/cultbr-fundo-escuro.png` |
| `public/img/cultbr-fundo-claro.png` | ✅ **Criado** — logo Cult Editais para tema claro | Em uso na navbar |
| `public/img/cultbr-fundo-escuro.png` | ✅ **Criado** — logo Cult Editais para tema escuro | Em uso na navbar |
| `public/img/dark-logo-rede-mapas-squared.png` | ⚠️ Ainda presente, não usado | Avaliar remoção |
| `public/img/light-logo-rede-mapas-squared.png` | ⚠️ Ainda presente, não usado | Avaliar remoção |
| `public/img/bg-home-hero.png` | ✅ **Substituído** (commit `90b77da`) | Nova imagem aplicada |
| `components/img/SNC+PNAB+MinC+Gov.png` | ✅ **Aplicado** — logo unificada no rodapé (commit `d2fffeb`) | Confirmar se é versão/ano correto |
| `components/img/home/agents.svg` | ⏳ Ainda em uso no card Proponentes | Avaliar substituição |
| `components/img/home/managers.svg` | ⏳ Ainda em uso no card Gestores | Avaliar substituição |
| ~~`components/img/home/developers.svg`~~ | ✅ **Removido** do projeto (commit `9466b94`) | — |

#### 0.2 Navbar e configuração global (`app/layout.config.tsx`)

- [x] ~~Definir e posicionar logo final na navbar~~ — ✅ Logo Cult Editais aplicada (commit `da480b9`): `cultbr-fundo-claro.png` / `cultbr-fundo-escuro.png`, título `<h1>Manual Cult Editais</h1>`
- [x] ~~Confirmar título do site exibido na navbar~~ — ✅ Atualizado para **"Manual Cult Editais"** (commit `da480b9`)
- [ ] Confirmar URL do GitHub (`githubUrl`) — atualmente ainda aponta para `redemapas/manual`, verificar se muda
- [ ] Avaliar ativar os links de navegação superiores (atualmente comentados): separar "Proponente" / "Gestor" como entradas de menu
- [ ] Corrigir `lang="en"` → `lang="pt-BR"` em `app/layout.tsx`

#### 0.3 Página inicial — Hero (`components/HeroHome.tsx`)

- [x] ~~Atualizar título e subtítulo do hero~~ — ✅ Título atualizado para **"Cult Editais"**, cores ajustadas para fundo claro (`!text-gray-900` / `!text-gray-700`), botão invertido (commit `90b77da`)
- [x] ~~Trocar imagem de fundo `bg-home-hero.png`~~ — ✅ Nova imagem aplicada (commit `90b77da`)
- [x] ~~Atualizar subtítulo do hero~~ — ✅ Novo texto refletindo Cult Editais e Política Nacional Aldir Blanc (commit `c832c4e`)
- [x] Trocar link do botão "Introdução" → `/docs/proponente/intro` ✅ `5bc9279`
- [ ] Avaliar acrescentar botão secundário "Sou Gestor" direto no hero para atalho rápido

#### 0.4 Página inicial — Cards de papéis (`components/FeaturedHome.tsx`)

- [x] ~~Remover card e importação de `developers.svg`~~ — ✅ Módulo desenvolvedores removido por completo (commit `9466b94`)
- [x] ~~Atualizar título "Agentes Artísticos"~~ → ✅ Renomeado para **"Proponentes"** (commit `97e5a37`)
- [x] Atualizar título "Gestores" → "Gestores do Ente Federativo" ✅ `5ed3704`
- [x] Atualizar descrição do card Proponentes → foco em inscrição em editais PNAB ✅ `5ed3704`
- [x] Atualizar descrição do card Gestores → servidores de secretarias estaduais/municipais ✅ `5ed3704`
- [x] Atualizar links: `/docs/proponente/intro` e `/docs/gestor/intro` em `FeaturedHome.tsx` ✅ `5bc9279` / `7732901`
- [ ] Avaliar substituição das ilustrações `agents.svg` e `managers.svg`

#### 0.5 Rodapé (`components/Footer.tsx`)

- [x] ~~Simplificar rodapé com logo unificada~~ — ✅ 14 logos antigas removidas, `SNC+PNAB+MinC+Gov.png` centralizada (commit `d2fffeb`)
- [x] ~~Atualizar texto institucional (ainda mencionava "Rede das Artes" e ano "2025")~~ — ✅ Novo texto refletindo Cult Editais e Política Nacional Aldir Blanc (commit `c832c4e`)
- [ ] Confirmar se `SNC+PNAB+MinC+Gov.png` é a versão/ano correto para Cult Editais
- [ ] Avaliar acrescentar links úteis no rodapé (ex.: plataforma, repositório, suporte)

#### 0.6 Tema e tipografia (`app/global.css` / `app/layout.tsx`)

- [ ] Confirmar tema "Ocean" do Fumadocs UI — avaliar se mantém ou troca por customização visual do Cult Editais
- [ ] Avaliar substituir fonte `Inter` por fonte da identidade visual do Cult Editais (se houver)
- [ ] Corrigir `lang="en"` → `lang="pt-BR"` em `app/layout.tsx`

#### 0.7 Hack de tradução (débito técnico)

- [ ] Remover `useEffect` de tradução `Search → Buscar` em `app/(home)/layout.tsx` — substituir pela configuração nativa de i18n do Fumadocs quando disponível, ou manter documentado como débito técnico

---

> **Status da Fase 0:** 🟡 Em andamento — identidade visual e textos principais concluídos; pendente: logo rodapé, links de navegação superiores, lang, tema e débito técnico de tradução

---

### Fase 1 — Estrutura e renomeações ✅

- [x] Renomear pasta `content/docs/usuarios/` → `content/docs/proponente/` ✅ `5bc9279`
- [x] Renomear pasta `content/docs/gestores/` → `content/docs/gestor/` ✅ `7732901`
- [x] Atualizar links em `components/FeaturedHome.tsx` (`/docs/proponente/intro`, `/docs/gestor/intro`) ✅ `5bc9279` / `7732901`
- [x] Atualizar link no `components/HeroHome.tsx` → `/docs/proponente/intro` ✅ `5bc9279`

### Fase 2 — Desmembramento de conteúdo ✅ `b1b7c78`

- [x] `proponente/conta.mdx` criado a partir de `home.mdx` (criar conta, edição de perfil, painel de controle) ✅ `b1b7c78`
- [x] `proponente/intro.mdx` reescrito — foco no proponente / Cult Editais ✅ `b1b7c78`
- [x] `welcome.mdx` removido ✅ `b1b7c78`
- [x] `home.mdx` removido (conteúdo absorvido por `conta.mdx`) ✅ `b1b7c78`
- [x] `projects.mdx`, `spaces.mdx`, `events.mdx` removidos (fora do escopo do proponente) ✅ `b1b7c78`
- [x] `duvidas-frequentes.mdx`, `referencias.mdx` removidos por ora ✅ `b1b7c78`
- [x] Imagens das seções removidas deletadas (`02_home/`, `05_events/`, `06_spaces/`, `07_projects/`) ✅ `b1b7c78`
- [x] `meta.json` atualizado — estrutura final: intro, conta, agentes, oportunidades ✅ `b1b7c78`

### Fase 3 — Renomeação de arquivos MDX ✅ `b1b7c78`

- [x] `agents.mdx` → `agentes.mdx` ✅ `b1b7c78`
- [x] `opportunities.mdx` → `oportunidades.mdx` ✅ `b1b7c78`
- [x] `projects.mdx`, `spaces.mdx`, `events.mdx` — removidos, não renomeados ✅ `b1b7c78`
- [x] `meta.json` atualizado com novos slugs ✅ `b1b7c78`

### Fase 4 — Conteúdo: Proponente

> **Escopo:** todos os arquivos MDX de `content/docs/proponente/` e suas imagens.

#### 4.1 Estrutura e imagens

- [x] Reorganizar pastas de imagens do proponente — `01_intro/`, `02_conta/`, `03_agentes/`, `04_oportunidades/` ✅ `5164d20`
- [x] Atualizar `src` de imagens em `agentes.mdx` e `oportunidades.mdx` após renomeação ✅ `5164d20`

#### 4.2 `intro.mdx`

- [x] Reescrever — foco no proponente e Cult Editais ✅ `b1b7c78`
- [x] Adicionar links de navegação para conta, agentes e oportunidades ✅ `a294a70`
- [ ] Revisar imagens em `01_intro/` — verificar se são adequadas para o novo texto

#### 4.3 `conta.mdx`

- [x] Criar arquivo e estrutura inicial ✅ `b1b7c78`
- [x] Documentar fluxo de login via gov.br (5 passos com imagens) ✅ `6d92f51`
- [x] Documentar painel de controle com imagem ✅ `6d92f51`
- [ ] Documentar edição de informações do perfil (imagens pendentes)
- [ ] Documentar seção "Conta e Privacidade"

#### 4.4 `agentes.mdx` ✅ `c40ec68`

- [x] Renomear de `agents.mdx` ✅ `b1b7c78`
- [x] Atualizar referências de imagens para `03_agentes/` ✅ `5164d20`
- [x] Reescrever título e heading: "Meus Agentes" ✅ `1f4ee86`
- [x] Renomear prefixos de imagem `04_` → `03_` ✅ `1f4ee86`
- [x] Reescrever conteúdo — foco em criação e edição de agentes individual e coletivo ✅ `c40ec68`
- [x] Documentar tipos de agente (individual por CPF / coletivo criado manualmente) ✅ `c40ec68`
- [x] Documentar fluxo de criação de agente coletivo com imagens ✅ `c40ec68`
- [x] Documentar campos de edição do agente individual e coletivo com tabelas ✅ `c40ec68`
- [x] Remover imagens não utilizadas (`03_02/`, `03_03/`) ✅ `c40ec68`

#### 4.5 `oportunidades.mdx`

> ⏸️ **Adiado** — depende da seção Gestor (criação de oportunidades) ser documentada primeiro.

- [x] Renomear de `opportunities.mdx` ✅ `b1b7c78`
- [x] Atualizar referências de imagens para `04_oportunidades/` ✅ `5164d20`
- [ ] Revisar conteúdo — adequar terminologia e fluxo para Cult Editais

---

### Fase 5 — Conteúdo: Gestor do Ente Federativo

> **Escopo:** todos os arquivos MDX de `content/docs/gestor/` e suas imagens.

#### 5.1 Estrutura e imagens

- [ ] Reorganizar pastas de imagens do gestor (renomear para padrão `01_intro/`, `02_painel-controle/`, `03_oportunidades/` etc.)
- [ ] Atualizar todos os `src` de imagens nos arquivos MDX do gestor após renomeação
- [ ] Atualizar `meta.json` com a estrutura final de páginas do gestor

#### 5.2 `intro.mdx`

- [ ] Remover referências específicas à Funarte
- [ ] Reescrever — foco no gestor do ente federativo e Cult Editais
- [ ] Adicionar links de navegação para as demais seções do gestor

#### 5.3 `painel-controle.mdx`

- [ ] Revisar conteúdo — adequar terminologia e fluxo para Cult Editais
- [ ] Atualizar imagens se necessário

#### 5.4 `gerenciar-oportunidades.mdx`

- [ ] Definir se mantém como está, desmembra em subpáginas ou reestrutura
- [ ] Revisar conteúdo — adequar terminologia e fluxo para Cult Editais

#### 5.5 Novos arquivos (a criar)

- [ ] `gestor/gerenciar-agentes.mdx` — capturar imagens + escrever
- [ ] `gestor/gerenciar-espacos.mdx` — capturar imagens + escrever
- [ ] `gestor/gerenciar-eventos.mdx` — capturar imagens + escrever
- [ ] `gestor/gerenciar-iniciativas.mdx` — capturar imagens + escrever
- [ ] `gestor/relatorios-metricas.mdx` — capturar imagens + escrever
- [ ] `gestor/configuracoes-plataforma.mdx` — capturar imagens + escrever

---

### Fase 6 — Revisão e ajustes finais

- [ ] Padronizar terminologia global: "iniciativa" (não "projeto"), "proponente" (não "usuário"), "gestor do ente" (não "gestor cultural" genericamente)
- [ ] Revisar metadados de cada página (`title`, `description` no frontmatter MDX) — proponente e gestor
- [ ] Atualizar `README.md` com conteúdo real do projeto
- [ ] Testar build completo
- [ ] Verificar busca full-text nas novas rotas

---

## 11. Pendências para complementar neste roadmap

> *O usuário irá complementar os itens abaixo:*

- [ ] Definir se `gerenciar-oportunidades.mdx` (gestor) será desmembrado ou mantido
- [ ] Definir quais partes do histórico da plataforma ficam (se ficam) na `intro.mdx` do proponente
- [ ] Definir se haverá uma terceira seção compartilhada (ex: "Sobre a plataforma") ou se intro duplica info nos dois módulos
- [ ] Confirmar terminologia oficial: "Proponente" ou outro termo?
- [ ] Confirmar se `api-docs/` (REST API) permanece no manual ou migra para outro repositório
- [ ] Definir se o `welcome.mdx` vira landing page de escolha de perfil (proponente/gestor) ou é descartado
