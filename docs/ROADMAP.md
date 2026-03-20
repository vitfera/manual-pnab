# Roadmap de Reestruturação — Manual Rede das Artes

> **Criado em:** 16 de março de 2026  
> **Base:** `LEVANTAMENTO.md`  
> **Objetivo:** Reestruturar o manual para dois atores específicos: **Proponente** e **Gestor do Ente Federativo**

---

## 1. Mudança de foco

O manual atual cobre a plataforma de forma genérica (actor "Usuário" + "Gestor Funarte").  
O novo manual terá foco **operacional e contextualizado** para:

| Ator | Quem é | O que precisa no manual |
|---|---|---|
| **Proponente** | Pessoa física ou coletivo (agente cultural, artista, produtor) que usa a plataforma para se cadastrar, submeter inscrições, registrar espaços e eventos | Como participar, inscrever-se, gerenciar seu perfil e suas produções |
| **Gestor do Ente Federativo** | Servidor ou responsável em secretaria de cultura estadual/municipal que **opera a plataforma** em seu território | Como criar e gerir oportunidades, avaliar inscrições, gerar relatórios, configurar a plataforma |

> **Nota:** o perfil "Gestor Funarte/MinC" (atual) será **generalizado** para qualquer ente federativo. Referências institucionais específicas da Funarte devem ser removidas ou tornadas genéricas.

---

## 2. Nova estrutura de conteúdo

### 2.1 Seção Proponente

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

### 2.2 Seção Gestor do Ente Federativo

**Pasta atual:** `content/docs/gestores/`  
**Ação:** manter pasta, atualizar `meta.json`

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

## 3. Partes que saem do manual

| Conteúdo | Motivo |
|---|---|
| Histórico completo do Mapas (2004, Mapsys, Hacklab, versões) | Não é conteúdo operacional; pode virar nota de rodapé ou link externo |
| `welcome.mdx` (seção usuários) | Redundante com `intro.mdx`; conteúdo de onboarding absorvido |
| Navegação geral da home (`home.mdx` > parte de abas/agenda) | Contexto da plataforma; simplificar para o proponente ir direto ao ponto |
| Referências a Funarte como ente específico em `gestores/intro.mdx` | Generalizar para secretarias estaduais/municipais |
| Partes da seção gestores focadas exclusivamente no workflow Funarte/PNAB | Generalizar para workflows de qualquer edital público |

---

## 4. Partes que entram no manual

| Conteúdo | Seção | Observação |
|---|---|---|
| Como criar uma conta (desmembrado de `home.mdx`) | Proponente | Passo a passo de acesso e configuração inicial do perfil |
| Gerenciar agentes do território | Gestor | Novo arquivo; imagens precisam ser capturadas |
| Gerenciar espaços do território | Gestor | Novo arquivo; imagens precisam ser capturadas |
| Gerenciar eventos do território | Gestor | Novo arquivo; imagens precisam ser capturadas |
| Gerenciar iniciativas do território | Gestor | Novo arquivo; imagens precisam ser capturadas |
| Relatórios e métricas | Gestor | Novo arquivo; imagens precisam ser capturadas |
| Configurações da plataforma | Gestor | Novo arquivo; imagens precisam ser capturadas |

---

## 5. Partes que precisam ser desmembradas

| Arquivo atual | Desmembrar em | Critério |
|---|---|---|
| `usuarios/home.mdx` | `proponente/conta.mdx` (criar conta, editar perfil, painel) + manter min. em `intro.mdx` (navegação básica) | Arquivo atual mistura: visão geral da home, criação de conta, edição de perfil e painel de controle — são assuntos distintos |
| `gestores/gerenciar-oportunidades.mdx` | Avaliar se deve virar `configurar-oportunidade.mdx` + `avaliar-inscricoes.mdx` | O arquivo já cobre 3 fases (config, avaliação, resultados) com ~87 imagens; pode ficar pesado para um único MDX |

---

## 6. Padrão de nomenclatura de imagens

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

## 7. Mapeamento de renomeação de pastas (imagens existentes)

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

## 8. Nova estrutura de navegação (`meta.json`)

### `content/docs/proponente/meta.json`

```json
{
  "title": "Proponente",
  "description": "Guia para proponentes da plataforma Rede das Artes",
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
  "description": "Guia para gestores de entes federativos na plataforma Rede das Artes",
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

## 9. Checklist de execução

### Fase 0 — Layout, identidade visual e configurações globais

> **Deve ser executada antes de qualquer outra fase.** Define a base visual do manual novo e evita retrabalho nos componentes.

#### 0.1 Identidade visual — logos e marcas

| Item | Situação atual | Ação |
|---|---|---|
| `public/svg/dark-logo-rede-das-artes.svg` | Logo "Rede das Artes" para tema claro | **Avaliar** se mantém ou substitui pela identidade PNAB |
| `public/svg/light-logo-rede-das-artes.svg` | Logo "Rede das Artes" para tema escuro | **Avaliar** idem |
| `public/img/dark-logo-rede-mapas-squared.png` | Logo quadrado (não usado atualmente na navbar) | — |
| `public/img/light-logo-rede-mapas-squared.png` | Logo quadrado (não usado atualmente na navbar) | — |
| `public/img/bg-home-hero.png` | Imagem de fundo do hero | **Substituir** ou redesenhar conforme nova identidade |
| `components/img/SNC+PNAB+MinC+Gov.png` | Logo institucional no rodapé | **Confirmar** se mantém ou atualiza (ano 2025 hardcoded no texto) |
| `components/img/home/agents.svg` | Ilustração card "Proponentes" | **Avaliar** substituição |
| `components/img/home/managers.svg` | Ilustração card "Gestores" | **Avaliar** substituição |
| `components/img/home/developers.svg` | Ilustração "Desenvolvedoras" (importada mas não usada) | **Remover** do projeto |

#### 0.2 Navbar e configuração global (`app/layout.config.tsx`)

- [ ] Definir e posicionar logo final na navbar (atualmente: logo SVG claro/escuro + texto `<h1>Manual Rede das Artes</h1>`)
- [ ] Confirmar título do site exibido na navbar — atualizar se o nome mudar
- [ ] Confirmar URL do GitHub (`githubUrl`) — atualmente aponta para `redemapas/manual`
- [ ] Avaliar ativar os links de navegação superiores (atualmente comentados): separar "Proponente" / "Gestor" como entradas de menu
- [ ] Avaliar adicionar `lang="pt-BR"` em `app/layout.tsx` (atualmente `lang="en"`)

#### 0.3 Página inicial — Hero (`components/HeroHome.tsx`)

- [ ] Atualizar título e subtítulo do hero conforme nova identidade/nome do manual
- [ ] Trocar link do botão "Introdução" (`/docs/usuarios/intro` → `/docs/proponente/intro`) — **depende da Fase 1**
- [ ] Trocar imagem de fundo `bg-home-hero.png` se houver nova arte
- [ ] Avaliar acrescentar botão secundário "Sou Gestor" direto no hero para atalho rápido

#### 0.4 Página inicial — Cards de papéis (`components/FeaturedHome.tsx`)

- [ ] Atualizar título "Proponentes" (confirmar nomenclatura oficial)
- [ ] Atualizar título "Gestores" → "Gestor do Ente Federativo" ou nomenclatura definida
- [ ] Atualizar descrições dos dois cards conforme novo foco do manual
- [ ] Atualizar links: `/docs/usuarios/intro` → `/docs/proponente/intro` e `/docs/gestores/intro` → `/docs/gestor/intro` — **depende da Fase 1**
- [ ] Substituir ilustrações `agents.svg` e `managers.svg` se houver novas artes
- [ ] Remover importação de `developers.svg` (arquivo importado mas nunca renderizado)

#### 0.5 Rodapé (`components/Footer.tsx`)

- [ ] Atualizar texto institucional (ano "2025" hardcoded — atualizar se necessário)
- [ ] Confirmar se logo `SNC+PNAB+MinC+Gov.png` é a versão atual e correta
- [ ] Avaliar acrescentar links úteis no rodapé (ex.: plataforma, repositório, suporte)

#### 0.6 Tema e tipografia (`app/global.css` / `app/layout.tsx`)

- [ ] Confirmar tema "Ocean" do Fumadocs UI — avaliar se mantém ou troca por outro tema ou customização própria
- [ ] Avaliar substituir fonte `Inter` por fonte da identidade visual institucional (se houver)
- [ ] Confirmar `lang="en"` → `lang="pt-BR"` em `app/layout.tsx`

#### 0.7 Hack de tradução (remover após Fase 0)

- [ ] Remover `useEffect` de tradução `Search → Buscar` em `app/(home)/layout.tsx` — substituir pela configuração nativa de i18n do Fumadocs quando disponível, ou manter documentado como débito técnico

---

### Fase 1 — Estrutura e renomeações

- [ ] Renomear pasta `content/docs/usuarios/` → `content/docs/proponente/`
- [ ] Renomear pasta `content/docs/gestores/` → `content/docs/gestor/`
- [ ] Atualizar `lib/source.ts` se necessário (baseUrl e coleções)
- [ ] Atualizar `source.config.ts` apontando para as novas pastas
- [ ] Atualizar links em `components/FeaturedHome.tsx` (`/docs/usuarios/intro` → `/docs/proponente/intro`, `/docs/gestores/intro` → `/docs/gestor/intro`)
- [ ] Atualizar link no `components/HeroHome.tsx`
- [ ] Atualizar `app/layout.config.tsx` se necessário

### Fase 2 — Desmembramento de conteúdo

- [ ] Criar `proponente/conta.mdx` a partir de `home.mdx` (criar conta + editar perfil + painel)
- [ ] Reescrever `proponente/intro.mdx` (remover histórico técnico; focar no proponente)
- [ ] Remover `welcome.mdx` (conteúdo absorvido)
- [ ] Remover ou simplificar `home.mdx` para apenas navegação básica (ou excluir completamente)
- [ ] Avaliar desmembramento de `gerenciar-oportunidades.mdx` (ver seção 5)

### Fase 3 — Renomeação de arquivos MDX

- [ ] `agents.mdx` → `agentes.mdx`
- [ ] `opportunities.mdx` → `oportunidades.mdx`
- [ ] `projects.mdx` → `iniciativas.mdx`
- [ ] `spaces.mdx` → `espacos.mdx`
- [ ] `events.mdx` → `eventos.mdx`
- [ ] Atualizar `meta.json` da seção proponente com novos slugs
- [ ] `gerenciar-projetos.mdx` → `gerenciar-iniciativas.mdx` (quando criado)

### Fase 4 — Migração de imagens

- [ ] Reorganizar pastas de imagens do proponente conforme mapeamento (seção 7)
- [ ] Reorganizar pastas de imagens do gestor conforme mapeamento (seção 7)
- [ ] Atualizar todos os `src` de imagens nos arquivos MDX após renomeação
- [ ] Aplicar padrão de nomenclatura `icon.svg` para ícones de seção

### Fase 5 — Criação de novo conteúdo

- [ ] `gestor/gerenciar-agentes.mdx` — capturar imagens + escrever
- [ ] `gestor/gerenciar-espacos.mdx` — capturar imagens + escrever
- [ ] `gestor/gerenciar-eventos.mdx` — capturar imagens + escrever
- [ ] `gestor/gerenciar-iniciativas.mdx` — capturar imagens + escrever
- [ ] `gestor/relatorios-metricas.mdx` — capturar imagens + escrever
- [ ] `gestor/configuracoes-plataforma.mdx` — capturar imagens + escrever
- [ ] Revisar `duvidas-frequentes.mdx` de ambas as seções
- [ ] Atualizar `README.md` com conteúdo real do projeto

### Fase 6 — Revisão e ajustes finais

- [ ] Remover referências específicas à Funarte em `gestor/intro.mdx`
- [ ] Padronizar terminologia: "iniciativa" (não "projeto"), "proponente" (não "usuário"), "gestor do ente" (não "gestor cultural" genericamente)
- [ ] Revisar metadados de cada página (`title`, `description` no frontmatter MDX)
- [ ] Testar build completo
- [ ] Verificar busca full-text nas novas rotas

---

## 10. Pendências para complementar neste roadmap

> *O usuário irá complementar os itens abaixo:*

- [ ] Definir se `gerenciar-oportunidades.mdx` (gestor) será desmembrado ou mantido
- [ ] Definir quais partes do histórico da plataforma ficam (se ficam) na `intro.mdx` do proponente
- [ ] Definir se haverá uma terceira seção compartilhada (ex: "Sobre a plataforma") ou se intro duplica info nos dois módulos
- [ ] Confirmar terminologia oficial: "Proponente" ou outro termo?
- [ ] Confirmar se `api-docs/` (REST API) permanece no manual ou migra para outro repositório
- [ ] Definir se o `welcome.mdx` vira landing page de escolha de perfil (proponente/gestor) ou é descartado
