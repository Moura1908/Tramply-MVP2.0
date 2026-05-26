import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SimuladorRendaResultado = () => {
  const navigate = useNavigate();

  return (
    <>

{/*  Breadcrumbs  */}
<nav className="flex items-center gap-unit-xs mb-unit-lg text-medium-slate font-label-md text-label-md">
<Link className="hover:text-tropical-mint transition-colors" to="/simulador">Simulador</Link>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<Link className="hover:text-tropical-mint transition-colors" to="#">Renda</Link>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-eggshell">Resultado</span>
</nav>
{/*  Page Header  */}
<div className="mb-unit-xl">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-unit-xs">Projeção de Cenários</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Baseado nos dados informados, calculamos três cenários de faturamento para o próximo ciclo. Analise as perspectivas para um planejamento financeiro seguro.</p>
</div>
{/*  3 Scenario Cards (Bento Grid)  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-unit-lg mb-unit-xl">
{/*  Conservador (Red/Error tint)  */}
<div className="bg-surface-container-lowest border border-error-container/30 rounded-xl p-unit-lg flex flex-col relative overflow-hidden group hover:border-error-container transition-colors">
<div className="absolute top-0 right-0 w-32 h-32 bg-error-container/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>
<div className="flex items-center gap-2 mb-unit-md">
<span className="material-symbols-outlined text-error text-[20px]">trending_down</span>
<h3 className="font-headline-sm text-headline-sm text-error">Cenário Conservador</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg flex-1">Considera imprevistos operacionais e menor volume de demandas no período.</p>
<div>
<span className="font-label-md text-label-md text-medium-slate block mb-1">Faturamento Estimado</span>
<div className="font-headline-lg text-headline-lg text-on-surface">R$ 1.200,00</div>
</div>
</div>
{/*  Provável (Yellow/Warning tint - mapped to tertiary-container vibe)  */}
<div className="bg-surface-container relative border-2 border-outline-variant/30 rounded-xl p-unit-lg flex flex-col overflow-hidden group hover:border-tertiary-container/50 transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.2)] z-10 scale-[1.02]">
{/*  Subtle glow effect behind main card  */}
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tertiary-container/50 to-transparent"></div>
<div className="flex items-center justify-between mb-unit-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary-container text-[20px]">trending_flat</span>
<h3 className="font-headline-sm text-headline-sm text-tertiary-container">Cenário Provável</h3>
</div>
<span className="bg-tertiary-container/10 text-tertiary-container font-label-md text-label-md px-2 py-1 rounded-md">Recomendado</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg flex-1">Projeção realista baseada na sua média histórica e tendências de mercado atuais.</p>
<div>
<span className="font-label-md text-label-md text-medium-slate block mb-1">Faturamento Estimado</span>
<div className="font-headline-lg text-headline-lg text-eggshell">R$ 1.850,00</div>
</div>
</div>
{/*  Otimista (Green/Success tint)  */}
<div className="bg-surface-container-lowest border border-primary-container/20 rounded-xl p-unit-lg flex flex-col relative overflow-hidden group hover:border-primary-container/50 transition-colors">
<div className="absolute bottom-0 right-0 w-40 h-40 bg-primary-container/5 rounded-tl-full -mr-10 -mb-10 pointer-events-none"></div>
<div className="flex items-center gap-2 mb-unit-md">
<span className="material-symbols-outlined text-tropical-mint text-[20px]">trending_up</span>
<h3 className="font-headline-sm text-headline-sm text-tropical-mint">Cenário Otimista</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg flex-1">Cenário ideal assumindo capacidade máxima de produção e captação de novos clientes.</p>
<div>
<span className="font-label-md text-label-md text-medium-slate block mb-1">Faturamento Estimado</span>
<div className="font-headline-lg text-headline-lg text-on-surface">R$ 2.400,00</div>
</div>
</div>
</div>
{/*  4 Horizontal Indicators (Glassmorphism inspired container)  */}
<div className="bg-surface-container-high/40 backdrop-blur-sm border border-outline-variant/20 rounded-xl p-unit-lg mb-unit-xl">
<h4 className="font-label-md text-label-md text-medium-slate mb-unit-md uppercase tracking-wider">Métricas de Planejamento</h4>
<div className="grid grid-cols-1 md:grid-cols-4 gap-unit-lg divide-y md:divide-y-0 md:divide-x divide-outline-variant/20">
<div className="flex flex-col gap-1 md:pl-0 pt-4 md:pt-0">
<div className="flex items-center gap-2 text-on-surface-variant mb-1">
<span className="material-symbols-outlined text-[16px]">shield</span>
<span className="font-body-sm text-body-sm">Renda mínima garantida</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">R$ 1.200,00</span>
</div>
<div className="flex flex-col gap-1 md:pl-unit-lg pt-4 md:pt-0">
<div className="flex items-center gap-2 text-on-surface-variant mb-1">
<span className="material-symbols-outlined text-[16px]">flag</span>
<span className="font-body-sm text-body-sm">Renda segura para planejar</span>
</div>
<span className="font-headline-sm text-headline-sm text-eggshell">R$ 1.850,00</span>
</div>
<div className="flex flex-col gap-1 md:pl-unit-lg pt-4 md:pt-0">
<div className="flex items-center gap-2 text-on-surface-variant mb-1">
<span className="material-symbols-outlined text-[16px]">difference</span>
<span className="font-body-sm text-body-sm">Diferença entre cenários</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">R$ 1.200,00</span>
</div>
<div className="flex flex-col gap-1 md:pl-unit-lg pt-4 md:pt-0">
<div className="flex items-center gap-2 text-on-surface-variant mb-1">
<span className="material-symbols-outlined text-[16px]">calendar_month</span>
<span className="font-body-sm text-body-sm">Estimativa anual (Provável)</span>
</div>
<span className="font-headline-sm text-headline-sm text-tropical-mint">R$ 22.200,00</span>
</div>
</div>
</div>
{/*  Action Buttons  */}
<div className="mt-auto flex flex-wrap gap-unit-md pt-unit-md border-t border-outline-variant/10">
<button className="bg-tropical-mint text-black font-label-md text-label-md rounded-full px-8 py-3 hover:drop-shadow-[0_0_12px_rgba(79,240,170,0.4)] transition-all flex items-center justify-center gap-2" onClick={(e) => { e.preventDefault(); navigate('/simulador-despesas-entrada'); }}>
                Simular despesas agora
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
<button onClick={() => navigate('/simulador-renda-entrada')} className="border-[1.5px] border-medium-slate text-medium-slate font-label-md text-label-md rounded-full px-8 py-3 hover:bg-surface-container-high transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">refresh</span>
                Refazer simulação
            </button>
</div>

    </>
  );
};

export default SimuladorRendaResultado;
