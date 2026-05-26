import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ModuloDeTrilha = () => {
  const navigate = useNavigate();

  return (
    <>

{/*  TopAppBar  */}
<header className="flex items-center justify-between px-unit-lg w-full z-40 bg-background/80 backdrop-blur-md docked full-width top-0 h-16 sticky"><button onClick={(e) => { e.preventDefault(); }} className="w-10 h-10 rounded-full flex items-center justify-center text-medium-slate hover:text-tropical-mint hover:bg-surface-container-high transition-all"><span className="material-symbols-outlined">menu</span></button>
{/*  Mobile Menu Toggle  */}
<button className="md:hidden text-tropical-mint p-2 -ml-2">
<span className="material-symbols-outlined">menu</span>
</button>
<div className="flex items-center gap-unit-md w-full max-w-md">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-medium-slate">search</span>
<input className="w-full bg-surface-container-high border-none rounded-lg pl-10 pr-4 py-2 font-body-sm text-body-sm text-eggshell focus:ring-1 focus:ring-tropical-mint focus:outline-none placeholder-outline-variant transition-all" placeholder="Buscar trilhas, módulos..." type="text" />
</div>
</div>
<div className="flex items-center gap-unit-md ml-auto">
<button className="text-medium-slate hover:text-tropical-mint transition-colors p-2 rounded-full hover:bg-surface-container-high">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-medium-slate hover:text-tropical-mint transition-colors p-2 rounded-full hover:bg-surface-container-high">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="w-8 h-8 rounded-full bg-deep-navy border border-outline-variant overflow-hidden ml-2 md:hidden">
<img alt="MEI Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKFhcCk2LlsPPzr3rm8-O4hXfmG8pAYcEpZDgIUfclJEZuVJPKWFbUFbkadT7vxa4YUCQghhW5_FQuiroHpgNLZ135y7OSK-UPYI7lT6iJ-dBMmLX0vgqI1yq7SfEWK6T9i-Ijp5lzmRL_AZNoYmSo_uuQAitiUbmZArjFRKfYnZl6txhGb_lb5sQjgDHTFovcSpZitiFnWbQTV41g7qwmvM5cKfLquN-NGT5_aMIJ8b-e6D6KkXY5SkGAnG1jztSsMUpF80EaH_M" />
</div>
</div>
<button onClick={(e) => { e.preventDefault(); }} className="xl:hidden w-10 h-10 rounded-full flex items-center justify-center text-medium-slate hover:text-tropical-mint hover:bg-surface-container-high transition-all ml-2"><span className="material-symbols-outlined">menu_open</span></button></header>
{/*  Content Area  */}
<div className="p-margin-mobile md:p-margin-desktop flex flex-col gap-unit-lg max-w-[900px] w-full mx-auto xl:mr-[340px]">
{/*  Breadcrumb  */}
<nav className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
<Link className="hover:text-tropical-mint transition-colors" to="#">Trilha: Crescer</Link>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-eggshell">Módulo 3: Precificação para MEI</span>
</nav>
{/*  Hero Section  */}
<section className="flex flex-col gap-unit-md">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-tropical-mint">Precificação para MEI</h2>
<div className="bg-surface-container rounded-xl p-unit-md border border-outline-variant/20 flex flex-col gap-unit-sm">
<div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md mb-2">
<span className="">Progresso do Módulo</span>
<span className="">40%</span>
</div>
<div className="w-full h-1.5 bg-deep-navy rounded-full overflow-hidden">
<div className="h-full bg-tropical-mint rounded-full w-[40%] transition-all duration-500"></div>
</div>
</div>
</section>
{/*  Article Content  */}
<article className="flex flex-col gap-unit-lg font-body-lg text-body-lg text-eggshell leading-relaxed">
<div className="bg-surface-container-high/50 p-unit-lg rounded-2xl border border-surface-variant shadow-lg backdrop-blur-sm">
<p className="mb-unit-md">Entender a diferença entre margem de lucro e custos fixos é o primeiro passo para não pagar para trabalhar. Como MEI, suas despesas pessoais e profissionais muitas vezes se misturam, mas separá-las é crucial para o crescimento sustentável do seu negócio.</p>
<p className="mb-unit-md">Custos fixos são aqueles que não dependem do quanto você vende. A DAS (Documento de Arrecadação do Simples Nacional), internet, aluguel do espaço (se houver) e ferramentas de trabalho entram aqui. Eles precisam ser cobertos independente do seu faturamento no mês.</p>
<p className="">Já a margem de lucro é o que sobra após você pagar os custos fixos e os custos variáveis (matéria-prima, embalagem, taxa de cartão). É essa margem que permite investir em melhorias ou formar uma reserva de emergência.</p>
</div>
{/*  Highlight Block (Bento-style)  */}
<div className="bg-surface-bright rounded-2xl p-unit-lg border-l-4 border-tropical-mint flex gap-unit-md items-start shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
<div className="p-3 bg-surface-container rounded-xl text-tropical-mint flex-shrink-0">
<span className="material-symbols-outlined fill-icon text-[32px]" data-icon="lightbulb">lightbulb</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-tropical-mint mb-2">Dica Prática</h4>
<p className="font-body-sm text-body-sm text-eggshell">Não esqueça de incluir seu próprio pro-labore no cálculo do custo fixo. Se você trabalha no seu negócio, você precisa de um "salário" base para pagar suas contas pessoais, e isso deve sair do cálculo do preço do seu serviço/produto.</p>
</div>
</div>
{/*  Interactive Section  */}
<div className="bg-[#001242] p-unit-lg rounded-2xl border border-surface-variant flex flex-col gap-unit-md relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-tropical-mint/5 to-transparent pointer-events-none"></div>
<div className="flex items-center gap-3 mb-2 relative z-10">
<span className="material-symbols-outlined text-medium-slate" data-icon="edit_note">edit_note</span>
<h3 className="font-headline-sm text-headline-sm text-eggshell">Exercício Prático</h3>
</div>
<label className="font-label-md text-label-md text-medium-slate relative z-10" htmlFor="custos-fixos">Liste seus principais custos aqui para começarmos o cálculo:</label>
<textarea className="w-full bg-[#001242] border border-outline-variant/40 rounded-xl p-4 font-body-sm text-body-sm text-eggshell focus:border-tropical-mint focus:ring-1 focus:ring-tropical-mint focus:shadow-[inset_0_0_10px_rgba(79,240,170,0.1)] transition-all resize-none relative z-10" id="custos-fixos" placeholder="Ex: DAS R$ 75,00, Internet R$ 100,00..." rows="4"></textarea>
<div className="flex justify-end relative z-10 mt-2">
<button className="bg-surface-variant hover:bg-surface-container-highest text-eggshell font-label-md text-label-md py-2 px-4 rounded-lg transition-colors flex items-center gap-2">
                            Salvar Anotação
                            <span className="material-symbols-outlined text-[18px]">save</span>
</button>
</div>
</div>
</article>
{/*  Bottom Actions  */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-unit-md mt-unit-lg pt-unit-md border-t border-outline-variant/20">
<button className="w-full sm:w-auto px-6 py-3 rounded-full border-[1.5px] border-medium-slate text-medium-slate font-label-md text-label-md hover:bg-medium-slate/10 transition-colors flex items-center justify-center gap-2" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
<span className="material-symbols-outlined text-[18px]" data-icon="arrow_back">arrow_back</span>
                    Voltar
                </button>
<button className="w-full sm:w-auto px-8 py-3 rounded-full bg-tropical-mint text-black font-label-md text-label-md hover:shadow-[0_0_12px_rgba(79,240,170,0.4)] transition-all flex items-center justify-center gap-2 font-bold" onClick={(e) => { e.preventDefault(); navigate('/conclusao-de-modulo'); }}>
                    Módulo Concluído — Próximo
                    <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
{/*  External Links  */}
<div className="flex flex-wrap gap-4 mt-unit-md">
<span className="font-label-md text-label-md text-on-surface-variant w-full">Recursos Externos:</span>
<Link className="flex items-center gap-2 text-medium-slate hover:text-tropical-mint font-label-md text-label-md transition-colors group" to="#">
<span className="material-symbols-outlined text-[18px] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" data-icon="open_in_new">open_in_new</span>
                    SEBRAE - Formação de Preço
                </Link>
<Link className="flex items-center gap-2 text-medium-slate hover:text-tropical-mint font-label-md text-label-md transition-colors group" to="#">
<span className="material-symbols-outlined text-[18px] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" data-icon="open_in_new">open_in_new</span>
                    Portal do Empreendedor
                </Link>
</div>
{/*  Bottom spacing for mobile  */}
<div className="h-24 md:h-10"></div>
</div>

    </>
  );
};

export default ModuloDeTrilha;
