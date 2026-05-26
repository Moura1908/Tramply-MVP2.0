import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const QuizResultado = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center p-margin-mobile md:p-margin-desktop selection:bg-tropical-mint selection:text-black overflow-x-hidden">
{/*  Suppressed Global Navigation as per rules for transactional/result screens  */}
<main className="w-full max-w-container-max mx-auto flex flex-col gap-unit-xl animate-fade-in-up">
{/*  Header & Progress  */}
<header className="flex flex-col items-center justify-center text-center gap-unit-md mt-12 md:mt-0"><button onClick={(e) => { e.preventDefault(); }} className="w-10 h-10 rounded-full flex items-center justify-center text-medium-slate hover:text-tropical-mint hover:bg-surface-container-high transition-all"><span className="material-symbols-outlined">menu</span></button>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-eggshell">
                Seu perfil está pronto!
            </h1>
<div className="w-full max-w-md flex items-center gap-4">
<span className="font-label-md text-label-md text-medium-slate">Passo 6/6</span>
<div className="flex-grow h-1.5 bg-deep-navy rounded-full overflow-hidden">
<div className="h-full bg-tropical-mint w-full rounded-full shadow-[0_0_8px_rgba(79,240,170,0.5)]"></div>
</div>
<span className="material-symbols-outlined text-tropical-mint text-sm">check_circle</span>
</div>
</header>
{/*  Bento Grid Layout (60/40 split approximation using 12 col grid)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter w-full">
{/*  Left Column: Primary Recommendation (60%)  */}
<div className="lg:col-span-7 flex">
<article className="w-full bg-surface-container rounded-2xl border border-outline-variant/20 p-8 md:p-10 flex flex-col gap-8 relative overflow-hidden group">
{/*  Decorative subtle background glow  */}
<div className="absolute -top-24 -right-24 w-64 h-64 bg-tropical-mint/10 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-center shadow-lg">
<span className="material-symbols-outlined text-4xl text-tropical-mint">trending_up</span>
</div>
<h2 className="font-headline-md text-headline-md text-eggshell">Trilha: Crescer</h2>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed flex-grow">
                        Você já é MEI no setor de estética e beleza e quer aumentar seu faturamento. Essa trilha vai te levar de onde você está até o próximo nível, focando em atração de clientes e precificação inteligente.
                    </p>
<button className="btn-primary mt-auto w-full md:w-auto self-start bg-tropical-mint text-black rounded-full px-8 py-4 font-label-md text-label-md tracking-wider uppercase flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-1" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
                        Começar minha trilha agora
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</article>
</div>
{/*  Right Column: Secondary Info & Summary (40%)  */}
<div className="lg:col-span-5 flex flex-col gap-gutter">
{/*  Secondary Tracks Card  */}
<div className="bg-surface-container-low rounded-2xl border border-outline-variant/20 p-6 flex flex-col gap-5">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-medium-slate">alt_route</span>
<h3 className="font-headline-sm text-headline-sm text-eggshell">Trilhas secundárias</h3>
</div>
<div className="flex flex-wrap gap-3">
<div className="flex items-center gap-2 bg-surface-container-highest px-4 py-2.5 rounded-lg border border-outline-variant/30 transition-colors hover:border-medium-slate/50">
<span className="material-symbols-outlined text-sm text-secondary">account_balance_wallet</span>
<span className="font-body-sm text-body-sm text-eggshell">Organizar finanças</span>
</div>
<div className="flex items-center gap-2 bg-surface-container-highest px-4 py-2.5 rounded-lg border border-outline-variant/30 transition-colors hover:border-medium-slate/50">
<span className="material-symbols-outlined text-sm text-secondary">handshake</span>
<span className="font-body-sm text-body-sm text-eggshell">Buscar conexões</span>
</div>
</div>
</div>
{/*  Summary Card  */}
<div className="bg-surface-container-low rounded-2xl border border-outline-variant/20 p-6 flex flex-col gap-5 flex-grow">
<h3 className="font-headline-sm text-headline-sm text-eggshell border-b border-outline-variant/20 pb-4">Seu Resumo</h3>
<ul className="flex flex-col gap-4">
<li className="flex items-center justify-between">
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-lg">spa</span>
<span className="font-body-sm text-body-sm">Setor</span>
</div>
<span className="font-label-md text-label-md text-eggshell uppercase bg-surface-container-high px-3 py-1 rounded-md">Estética</span>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-lg">school</span>
<span className="font-body-sm text-body-sm">Nível</span>
</div>
<span className="font-label-md text-label-md text-eggshell uppercase bg-surface-container-high px-3 py-1 rounded-md">Iniciante</span>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-lg">schedule</span>
<span className="font-body-sm text-body-sm">Ritmo</span>
</div>
<span className="font-label-md text-label-md text-eggshell uppercase bg-surface-container-high px-3 py-1 rounded-md">1-2h/dia</span>
</li>
</ul>
</div>
</div>
</div>
{/*  Footer Action  */}
<footer className="flex justify-center pt-8 pb-12">
<Link className="group flex items-center gap-2 text-medium-slate hover:text-tropical-mint transition-colors duration-300" to="/quiz-situacao-atual">
<span className="material-symbols-outlined text-sm group-hover:-rotate-180 transition-transform duration-500">refresh</span>
<span className="font-label-md text-label-md uppercase tracking-widest">Refazer o quiz</span>
</Link>
</footer>
</main>

    </div>
  );
};

export default QuizResultado;
