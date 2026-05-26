import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ConclusaoDeModulo = () => {
  const navigate = useNavigate();

  return (
    <>

{/*  Ambient background glow  */}
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-tropical-mint/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-[800px] mx-auto px-margin-mobile md:px-margin-desktop py-unit-xl flex flex-col items-center justify-center min-h-full space-y-unit-xl relative z-10">
{/*  Celebration Header  */}
<div className="text-center space-y-unit-md animate-pop-in flex flex-col items-center">
<div className="w-32 h-32 rounded-full bg-surface-container border border-surface-container-high flex items-center justify-center mb-unit-md animate-pulse-glow">
<span className="material-symbols-outlined text-[64px] text-tropical-mint" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
</div>
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                    Módulo concluído!
                </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">
                    Parabéns! Você finalizou o módulo Precificação para MEI.
                </p>
</div>
{/*  Progress Card  */}
<div className="w-full bg-surface-container-low border border-surface-container-high rounded-xl p-unit-md md:p-gutter">
<div className="flex justify-between items-end mb-unit-sm">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Progresso Geral da Trilha</span>
<span className="font-label-md text-label-md text-tropical-mint">~50%</span>
</div>
<div className="h-[6px] w-full bg-deep-navy rounded-full overflow-hidden">
<div className="h-full bg-tropical-mint rounded-full" style={{ width: "50%" }}></div>
</div>
</div>
{/*  Next Steps Bento Grid  */}
<div className="w-full space-y-unit-md">
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-unit-md">Próximos passos</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-unit-md">
{/*  Item 1: Next Module  */}
<div className="col-span-1 md:col-span-2 bg-deep-navy border border-surface-container-high rounded-xl p-gutter flex flex-col md:flex-row md:items-center justify-between gap-unit-md hover:border-tropical-mint/30 transition-colors">
<div>
<span className="inline-block px-2 py-1 rounded bg-surface-container text-tropical-mint font-label-md text-[10px] uppercase mb-2">Próximo Módulo</span>
<h3 className="font-headline-sm text-[18px] text-on-surface mb-1">Estratégias de Divulgação</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Aprenda a comunicar seu novo preço e atrair os clientes certos.</p>
</div>
<Link to="/dashboard" className="whitespace-nowrap px-6 py-3 rounded-full bg-tropical-mint text-black font-label-md text-label-md hover:shadow-[0_0_15px_rgba(79,240,170,0.3)] transition-all flex items-center justify-center gap-2">
                            Ir para: Estratégias de Divulgação
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
</div>
{/*  Item 2: External Link  */}
<div className="bg-surface-container-low border border-surface-container-high rounded-xl p-gutter flex flex-col justify-between hover:bg-surface-container transition-colors group">
<div className="mb-unit-lg">
<span className="material-symbols-outlined text-medium-slate mb-unit-sm text-[28px]">menu_book</span>
<h3 className="font-label-md text-label-md text-on-surface mb-1">Material Complementar</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Aprofunde seus conhecimentos com guias oficiais.</p>
</div>
<Link className="inline-flex items-center gap-2 text-tropical-mint font-label-md text-label-md group-hover:underline" to="#">
                            Ver material no Sebrae Play
                            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
</Link>
</div>
{/*  Item 3: AI Suggestion  */}
<div className="bg-surface-container-low border border-tropical-mint/20 rounded-xl p-gutter relative overflow-hidden flex flex-col justify-between">
{/*  Soft AI glow background  */}
<div className="absolute -right-10 -top-10 w-32 h-32 bg-medium-slate/10 rounded-full blur-2xl"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-unit-md">
<span className="material-symbols-outlined text-medium-slate">auto_awesome</span>
<span className="font-label-md text-label-md text-medium-slate uppercase">Mentora IA sugere</span>
</div>
<p className="font-body-lg text-body-lg text-on-surface mb-unit-lg">
                                Que tal simular seus novos preços no nosso Simulador?
                            </p>
</div>
<button className="w-full py-2 rounded-lg border border-medium-slate text-medium-slate font-label-md text-label-md hover:bg-medium-slate/10 transition-colors relative z-10 flex items-center justify-center gap-2" onClick={(e) => { e.preventDefault(); navigate('/simulador'); }}>
                            Abrir Simulador
                            <span className="material-symbols-outlined text-[18px]">calculate</span>
</button>
</div>
</div>
</div>
{/*  Footer Action  */}
<div className="w-full pt-unit-xl pb-unit-md flex justify-center">
<button className="px-6 py-3 rounded-full border-2 border-surface-container-high text-medium-slate font-label-md text-label-md hover:border-medium-slate hover:text-eggshell transition-all bg-transparent" onClick={(e) => { e.preventDefault(); navigate('/minhas-trilhas'); }}>
                    Voltar para minhas trilhas
                </button>
</div>
</div>

    </>
  );
};

export default ConclusaoDeModulo;
