import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SimuladorDespesasAnalise = () => {
  const navigate = useNavigate();

  return (
    <>

<div className="max-w-container-max mx-auto space-y-unit-lg">
{/*  Header & Breadcrumbs  */}
<div>
<nav aria-label="Breadcrumb" className="flex text-medium-slate font-label-md text-label-md mb-4">
<ol className="inline-flex items-center space-x-1 md:space-x-3">
<li className="inline-flex items-center">
<Link className="hover:text-eggshell transition-colors" to="/simulador">Simulador</Link>
</li>
<li className="">
<div className="flex items-center">
<span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
<Link className="hover:text-eggshell transition-colors" to="#">Despesas</Link>
</div>
</li>
<li aria-current="page" className="">
<div className="flex items-center">
<span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
<span className="text-on-surface">Resultado</span>
</div>
</li>
</ol>
</nav>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Análise do Mês</h2>
</div>
{/*  Hero Bento Area: Balance  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-unit-md">
{/*  Main Balance Card  */}
<div className="col-span-1 md:col-span-12 bg-surface-container rounded-xl p-8 border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<p className="font-label-md text-label-md text-medium-slate uppercase tracking-wider mb-2">Saldo Projetado</p>
<div className="flex items-end gap-4">
<h3 className="font-headline-lg text-[48px] leading-[48px] font-bold text-error">-R$ 450,00</h3>
<span className="inline-flex items-center px-3 py-1 rounded-full bg-error-container text-on-error-container font-label-md text-label-md">
<span className="material-symbols-outlined text-[14px] mr-1">warning</span>
                                No vermelho
                            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-3 max-w-md">
                            Suas despesas projetadas ultrapassam sua receita esperada. É necessário ajustar o orçamento para evitar acúmulo de dívidas.
                        </p>
</div>
<div className="w-full md:w-auto flex flex-col gap-3">
<button className="w-full md:w-auto px-6 py-3 rounded-full bg-tropical-mint text-black font-label-md text-label-md font-bold hover:shadow-[0_0_15px_rgba(79,240,170,0.3)] transition-all flex items-center justify-center gap-2" onClick={(e) => { e.preventDefault(); navigate('/simulador-despesas-entrada'); }}>
<span className="material-symbols-outlined">restart_alt</span>
                            Simular novamente
                        </button>
<button className="w-full md:w-auto px-6 py-3 rounded-full border-[1.5px] border-medium-slate text-medium-slate font-label-md text-label-md hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-2" onClick={(e) => { e.preventDefault(); navigate('/simulador'); }}>
                            Voltar ao início do simulador
                        </button>
</div>
</div>
</div>
{/*  Analysis Section: Chart & Alerts  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-unit-md">
{/*  Chart Card (Left)  */}
<div className="col-span-1 md:col-span-7 bg-surface-container rounded-xl p-6 border border-outline-variant/30">
<div className="flex justify-between items-center mb-6">
<h4 className="font-headline-sm text-headline-sm text-on-surface">Distribuição de Despesas</h4>
<span className="font-body-sm text-body-sm text-medium-slate">vs. Renda Total</span>
</div>
<div className="space-y-6">
{/*  Chart Item 1  */}
<div>
<div className="flex justify-between font-label-md text-label-md mb-2">
<span className="text-on-surface">Lazer &amp; Alimentação</span>
<span className="text-error">45%</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-[6px]">
<div className="bg-error h-[6px] rounded-full" style={{ width: "45%" }}></div>
</div>
</div>
{/*  Chart Item 2  */}
<div>
<div className="flex justify-between font-label-md text-label-md mb-2">
<span className="text-on-surface">Moradia &amp; Fixos</span>
<span className="text-medium-slate">35%</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-[6px]">
<div className="bg-medium-slate h-[6px] rounded-full" style={{ width: "35%" }}></div>
</div>
</div>
{/*  Chart Item 3  */}
<div>
<div className="flex justify-between font-label-md text-label-md mb-2">
<span className="text-on-surface">Insumos (Negócio)</span>
<span className="text-tropical-mint">15%</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-[6px]">
<div className="bg-tropical-mint h-[6px] rounded-full" style={{ width: "15%" }}></div>
</div>
</div>
{/*  Chart Item 4  */}
<div>
<div className="flex justify-between font-label-md text-label-md mb-2">
<span className="text-on-surface">Transporte</span>
<span className="text-secondary">5%</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-[6px]">
<div className="bg-secondary h-[6px] rounded-full" style={{ width: "5%" }}></div>
</div>
</div>
</div>
</div>
{/*  Alerts Column (Right)  */}
<div className="col-span-1 md:col-span-5 space-y-4">
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Alertas e Oportunidades</h4>
{/*  Alert Card 1 (Primary Issue)  */}
<div className="bg-surface-container rounded-xl p-5 border border-error/50 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-error/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-error-container p-2 rounded-lg text-error">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>trending_down</span>
</div>
<div>
<h5 className="font-label-md text-label-md text-on-surface mb-1">Atenção: Categoria Crítica</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                                    Sua categoria de maior impacto é <strong className="text-eggshell">Lazer</strong>. Reduzir R$150 já equilibraria seu orçamento para a zona neutra.
                                </p>
</div>
</div>
</div>
{/*  Alert Card 2  */}
<div className="bg-surface-container rounded-xl p-5 border border-outline-variant/30 flex items-start gap-4 hover:border-medium-slate/50 transition-colors">
<div className="mt-1 bg-surface-container-highest p-2 rounded-lg text-medium-slate">
<span className="material-symbols-outlined">insights</span>
</div>
<div>
<h5 className="font-label-md text-label-md text-on-surface mb-1">Sugestão de Economia</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                                Gastos com aplicativos de transporte estão 12% acima da média de empreendedores similares.
                            </p>
</div>
</div>
</div>
</div>
</div>

    </>
  );
};

export default SimuladorDespesasAnalise;
