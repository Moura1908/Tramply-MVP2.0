import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SimuladorDespesasEntrada = () => {
  const navigate = useNavigate();

  return (
    <>

<div className="max-w-container-max mx-auto h-full flex flex-col">
{/*  Breadcrumb & Header  */}
<div className="mb-8">
<nav aria-label="Breadcrumb" className="flex text-on-surface-variant text-body-sm font-body-sm mb-2">
<ol className="inline-flex items-center space-x-1 md:space-x-3">
<li className="inline-flex items-center">
<Link className="inline-flex items-center hover:text-tropical-mint transition-colors" to="/simulador">
                                Simulador
                            </Link>
</li>
<li className="">
<div className="flex items-center">
<span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
<span className="text-eggshell">Despesas</span>
</div>
</li>
</ol>
</nav>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-eggshell">
                    Entrada de Dados
                </h2>
<p className="text-medium-slate mt-2">Adicione suas despesas fixas e variáveis para uma análise precisa.</p>
</div>
{/*  Content Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-unit-lg flex-1 items-start">
{/*  Left Column: Categories  */}
<div className="lg:col-span-2 space-y-4">
{/*  Moradia Category  */}
<div className="card-container p-6 active">
<div className="flex justify-between items-center cursor-pointer mb-4">
<div className="flex items-center gap-3 text-eggshell">
<span className="material-symbols-outlined text-tropical-mint">home</span>
<h3 className="font-headline-sm text-headline-sm">Moradia</h3>
</div>
<span className="material-symbols-outlined text-medium-slate">expand_less</span>
</div>
<div className="space-y-4 pt-4 border-t border-surface-variant">
{/*  Expense Item  */}
<div className="flex flex-col sm:flex-row gap-4 items-end">
<div className="w-full sm:w-1/2">
<label className="block font-label-md text-label-md text-medium-slate mb-1">Nome da despesa</label>
<input className="input-field w-full px-4 py-3 font-body-sm" placeholder="Ex: Aluguel" type="text" value="Aluguel" />
</div>
<div className="w-full sm:w-1/3">
<label className="block font-label-md text-label-md text-medium-slate mb-1">Valor (R$)</label>
<input className="input-field w-full px-4 py-3 font-body-sm" placeholder="0,00" type="text" value="1.200,00" />
</div>
<div className="w-full sm:w-auto pb-3 flex items-center gap-3">
<span className="font-label-md text-label-md text-medium-slate">Fixa</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-surface-variant cursor-pointer" htmlFor="toggle1"></label>
</div>
<button className="text-on-surface-variant hover:text-error transition-colors ml-2">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</div>
{/*  Expense Item  */}
<div className="flex flex-col sm:flex-row gap-4 items-end">
<div className="w-full sm:w-1/2">
<label className="block font-label-md text-label-md text-medium-slate mb-1">Nome da despesa</label>
<input className="input-field w-full px-4 py-3 font-body-sm" placeholder="Ex: Aluguel" type="text" value="Energia Elétrica" />
</div>
<div className="w-full sm:w-1/3">
<label className="block font-label-md text-label-md text-medium-slate mb-1">Valor (R$)</label>
<input className="input-field w-full px-4 py-3 font-body-sm" placeholder="0,00" type="text" value="150,00" />
</div>
<div className="w-full sm:w-auto pb-3 flex items-center gap-3">
<span className="font-label-md text-label-md text-medium-slate">Var</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer" id="toggle2" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-surface-variant cursor-pointer" htmlFor="toggle2"></label>
</div>
<button className="text-on-surface-variant hover:text-error transition-colors ml-2">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</div>
<button className="mt-2 text-tropical-mint hover:text-eggshell font-label-md text-label-md flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-sm">add</span> Adicionar despesa
                            </button>
</div>
</div>
{/*  Alimentação Category (Collapsed)  */}
<div className="card-container p-6">
<div className="flex justify-between items-center cursor-pointer">
<div className="flex items-center gap-3 text-eggshell">
<span className="material-symbols-outlined text-medium-slate">restaurant</span>
<h3 className="font-headline-sm text-headline-sm">Alimentação</h3>
</div>
<span className="material-symbols-outlined text-medium-slate">expand_more</span>
</div>
</div>
{/*  Transporte Category (Collapsed)  */}
<div className="card-container p-6">
<div className="flex justify-between items-center cursor-pointer">
<div className="flex items-center gap-3 text-eggshell">
<span className="material-symbols-outlined text-medium-slate">directions_car</span>
<h3 className="font-headline-sm text-headline-sm">Transporte</h3>
</div>
<span className="material-symbols-outlined text-medium-slate">expand_more</span>
</div>
</div>
{/*  Add Custom Category  */}
<button className="w-full py-4 border border-dashed border-medium-slate rounded-xl text-medium-slate hover:text-tropical-mint hover:border-tropical-mint transition-colors flex items-center justify-center gap-2 font-label-md text-label-md bg-surface-container-low/50">
<span className="material-symbols-outlined">add_circle</span>
                        Categoria personalizada
                    </button>
</div>
{/*  Right Column: Live Totals Panel  */}
<div className="lg:col-span-1 sticky top-24">
<div className="card-container p-6 bg-gradient-to-b from-surface-container-high to-surface-container-low border-t border-surface-variant">
<h3 className="font-headline-sm text-headline-sm text-eggshell mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-tropical-mint">monitoring</span>
                            Resumo em Tempo Real
                        </h3>
<div className="space-y-6">
<div>
<div className="flex justify-between text-body-sm font-body-sm mb-1 text-on-surface-variant">
<span className="">Total Fixo</span>
<span className="">R$ 1.200,00</span>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
<div className="bg-tropical-mint h-full" style={{ width: "75%" }}></div>
</div>
</div>
<div>
<div className="flex justify-between text-body-sm font-body-sm mb-1 text-on-surface-variant">
<span className="">Total Variável</span>
<span className="">R$ 150,00</span>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
<div className="bg-medium-slate h-full" style={{ width: "25%" }}></div>
</div>
</div>
<div className="pt-6 border-t border-surface-variant">
<div className="flex justify-between items-end">
<span className="font-label-md text-label-md text-medium-slate uppercase">Total Geral</span>
<span className="font-headline-md text-headline-md text-tropical-mint font-bold">R$ 1.350,00</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Sticky Footer Action  */}
<div className="fixed bottom-0 left-0 md:left-sidebar-width right-0 bg-surface/90 backdrop-blur-md border-t border-surface-variant p-margin-mobile md:px-margin-desktop md:py-unit-md z-30">
<div className="max-w-container-max mx-auto flex justify-end">
<button className="bg-tropical-mint text-black px-8 py-3 rounded-full font-label-md text-label-md flex items-center gap-2 shadow-lg hover:drop-shadow-[0_0_12px_rgba(79,240,170,0.4)] transition-all" onClick={(e) => { e.preventDefault(); navigate('/simulador-despesas-analise'); }}>
                Ver análise do orçamento
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
    </>
  );
};

export default SimuladorDespesasEntrada;
