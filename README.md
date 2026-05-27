# Tramply — MVP Universitário

> Uma plataforma de capacitação, gestão financeira e oportunidades para Microempreendedores Individuais (MEIs).

---

## Sobre o Projeto

A **Tramply** nasceu com o objetivo de apoiar o MEI em sua jornada, oferecendo um ecossistema que combina educação prática, organização financeira (simuladores de cenários) e conexão com o mercado (hub de oportunidades e networking).

Este repositório contém o **Protótipo de Alta Fidelidade (MVP)** desenvolvido para apresentação acadêmica e validação de conceito. O foco do projeto foi construir uma experiência do usuário (UX) intuitiva, humanizada e livre de fricções, ajudando pequenos empreendedores a formalizar, gerir e expandir seus negócios.

Link: https://tramply-mvp-2-0.vercel.app/

---

## Tecnologias Utilizadas

A arquitetura do MVP foi construída com foco em performance e modularidade no ecossistema moderno de desenvolvimento Front-End:

- **React 19** — Biblioteca principal de UI.
- **Vite** — Build tool ágil e otimizada.
- **Tailwind CSS v4** — Estilização utilitária escalável.
- **Zustand** — Gerenciamento de estado global (simuladores e configuração).
- **React Router Dom v7** — Roteamento das jornadas do usuário.

---

## Jornada do Usuário (Fluxos Principais)

O projeto engloba um fluxo completo com **27 telas**, organizado nas seguintes trilhas:

1. **Onboarding & Diagnóstico:** Login → Quiz de Situação Atual → Objetivos → Resposta da IA → Perfil do Empreendedor.
2. **Dashboard & Aprendizado:** Dashboard Dinâmico (com/sem trilha ativa) → Módulos de Estudo gamificados.
3. **Simuladores Financeiros:** Projeções realistas (Conservador, Provável, Otimista) de renda e despesas.
4. **Hub de Oportunidades:** Casos de Estudo (Ex: Análise de MEIs reais) → Comunidade de Networking → Eventos → Ferramentas recomendadas.

---

## Como Rodar Localmente

Siga as instruções abaixo para rodar o projeto em sua máquina:

### 1. Pré-requisitos
- Ter o [Node.js](https://nodejs.org/) instalado (versão 18+ recomendada).

### 2. Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone <url-do-repositorio>
cd tramply-prototipo
```

Instale as dependências:

```bash
npm install
```

### 3. Executando o Servidor de Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) em seu navegador para explorar o protótipo.

---

## Design System: "Tramply Vision"

A identidade visual foi desenhada para transmitir seriedade sem perder a empatia e a inovação.

- **Cores Principais:** 
  - `Deep Navy` (`#000f3b`): Fundo principal, transmite solidez e confiança.
  - `Tropical Mint` (`#4ff0aa`): Cor de destaque (calls-to-action), evoca crescimento e modernidade.
- **Tipografia:** `Plus Jakarta Sans` (garante excelente legibilidade em telas pequenas e grandes).
- **Acessibilidade:** Contrastes testados e elementos de navegação amigáveis para uso prolongado.

---
