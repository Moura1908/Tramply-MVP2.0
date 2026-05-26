# Tramply — Protótipo MVP

> Protótipo universitário da plataforma **Tramply**, uma solução de capacitação e gestão financeira para microempreendedores individuais (MEIs).

---

## 📋 Sobre o Projeto

A Tramply é uma plataforma que combina trilhas de aprendizado personalizadas, simuladores financeiros e um hub de oportunidades para MEIs. Este repositório contém o **protótipo de alta fidelidade** desenvolvido como MVP para apresentação acadêmica.

As telas foram projetadas no **Google Stitch** e navegam por uma jornada completa do usuário, desde o onboarding até o consumo de conteúdo, simuladores financeiros e área de oportunidades.

---

## 🗺️ Jornada do Usuário (27 telas)

| # | Seção | Tela |
|---|-------|------|
| 1-2 | **Entrada** | Login → Cadastro |
| 3-9 | **Quiz de Onboarding** | Situação Atual → Objetivos → Setor → IA → Perfil → Início → Resultado |
| 10-12 | **Dashboard** | Dashboard Ativo → Dashboard Sem Trilha → Minhas Trilhas |
| 13-14 | **Conteúdo** | Módulo de Trilha → Conclusão de Módulo |
| 15-19 | **Simuladores** | Início → Renda (Entrada/Resultado) → Despesas (Entrada/Análise) |
| 20-25 | **Oportunidades** | MEIs → Caso de Estudo → Comunidade → Ferramentas → Eventos → Bancos |
| 26-27 | **Perfil** | Perfil do Empreendedor → Configurações |

---

## 🚀 Como Rodar Localmente

### Opção 1 — Visualizar o protótipo diretamente (sem build)

```bash
# Abra no browser diretamente:
open stitch_screens/index.html
# ou no Linux:
xdg-open stitch_screens/index.html
```

> O arquivo `stitch_screens/index.html` é o roteador da jornada completa.  
> Use **← →** no teclado ou os botões de seção para navegar entre as telas.

### Opção 2 — Dev server local (recomendado para desenvolvimento futuro)

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no browser.

---

## 📁 Estrutura do Repositório

```
tramply-prototipo/
├── stitch_screens/          # Telas exportadas do Google Stitch (HTML puro)
│   ├── index.html           # Roteador da jornada (ponto de entrada do protótipo)
│   └── Tramply_*.html       # 27 telas individuais
│
├── docs/                    # Documentação do projeto
│   ├── DESIGN.md            # Sistema de design (tokens, cores, tipografia)
│   └── escopo.md            # Escopo e requisitos do projeto
│
├── scripts/                 # Scripts de desenvolvimento e utilitários
│   ├── download_screens.py  # Script para re-baixar telas do Stitch
│   └── ...                  # Outros scripts auxiliares
│
├── package.json             # Configuração do projeto Node
├── vite.config.js           # Configuração do Vite
├── tailwind.config.js       # Configuração do Tailwind CSS
├── tsconfig.json            # Configuração do TypeScript
└── postcss.config.js        # Configuração do PostCSS
```

---

## 🎨 Design System

O projeto utiliza o design system **"Tramply Vision"**:

- **Cores**: Deep Navy (`#000f3b`) como fundo, Tropical Mint (`#4ff0aa`) como accent primário, Medium Slate (`#6d77fa`) como secundário
- **Tipografia**: **Sora** (headlines) + **Plus Jakarta Sans** (corpo e labels)
- **Estilo**: Premium Functional Minimalism com dark mode

Consulte [`docs/DESIGN.md`](./docs/DESIGN.md) para os tokens completos.

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|-----------|-----|
| Google Stitch | Design e geração das telas |
| HTML + Tailwind CSS | Estrutura das telas exportadas |
| Vite | Bundler (para desenvolvimento futuro) |
| TypeScript | Tipagem (para desenvolvimento futuro) |

---

## 📦 Re-baixar as Telas do Stitch

Caso precise atualizar as telas a partir do Stitch original:

```bash
python3 scripts/download_screens.py
```

---

## 👥 Equipe

Projeto universitário — MVP para apresentação acadêmica.
# MVP-Trampy
# MVP-Trampy.1
# Tramply-MVP2.0
