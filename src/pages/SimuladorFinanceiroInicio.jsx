import React from 'react';
import { Link } from 'react-router-dom';

const SimuladorFinanceiroInicio = () => {
  return (
    <>

<div className="max-w-[1000px] mx-auto flex flex-col gap-unit-lg">
{/*  Page Header  */}
<div className="flex flex-col gap-2 mt-unit-xl">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Simulador Financeiro</h1>
<p className="font-body-lg text-body-lg text-medium-slate">Visualize seu mês antes que ele aconteça.</p>
</div>
{/*  Bento Grid Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-unit-md md:gap-unit-lg">
{/*  Card 1: Simular Renda  */}
<Link to="/simulador-renda-entrada" className="group text-left relative overflow-hidden bg-deep-navy/80 hover:bg-deep-navy border border-surface-container-high hover:border-tropical-mint/50 rounded-[12px] p-unit-lg transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(0,11,48,0.5)] flex flex-col gap-4">
<div className="absolute inset-0 bg-gradient-to-br from-tropical-mint/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-surface-bright group-hover:border-tropical-mint/30 transition-colors">
<span className="material-symbols-outlined text-tropical-mint" style={{ fontVariationSettings: "&quot" }}>trending_up</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-eggshell group-hover:text-tropical-mint transition-colors">Simular Renda</h2>
<p className="font-body-sm text-body-sm text-medium-slate/90">Projete seus ganhos com base em frequência e segurança da renda</p>
<div className="mt-auto pt-4 flex items-center text-tropical-mint font-label-md text-label-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            Iniciar simulação <span className="material-symbols-outlined ml-1 text-[16px]">arrow_forward</span>
</div>
</Link>
{/*  Card 2: Simular Despesas  */}
<Link to="/simulador-despesas-entrada" className="group text-left relative overflow-hidden bg-deep-navy/80 hover:bg-deep-navy border border-surface-container-high hover:border-tropical-mint/50 rounded-[12px] p-unit-lg transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(0,11,48,0.5)] flex flex-col gap-4">
<div className="absolute inset-0 bg-gradient-to-br from-tropical-mint/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-surface-bright group-hover:border-tropical-mint/30 transition-colors">
<span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint transition-colors" style={{ fontVariationSettings: "&quot" }}>receipt_long</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-eggshell group-hover:text-tropical-mint transition-colors">Simular Despesas</h2>
<p className="font-body-sm text-body-sm text-medium-slate/90">Mapeie seus custos fixos e variáveis para ver seu saldo real</p>
<div className="mt-auto pt-4 flex items-center text-tropical-mint font-label-md text-label-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            Mapear custos <span className="material-symbols-outlined ml-1 text-[16px]">arrow_forward</span>
</div>
</Link>
</div>
{/*  Transparency Warning  */}
<div className="mt-unit-md bg-surface-container-low border border-surface-variant rounded-lg p-unit-md flex items-start gap-4">
<span className="material-symbols-outlined text-medium-slate mt-0.5">info</span>
<p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                        Este simulador usa apenas os dados que você inserir. Não substitui um contador ou consultor financeiro profissional.
                    </p>
</div>
</div>

    </>
  );
};

export default SimuladorFinanceiroInicio;
