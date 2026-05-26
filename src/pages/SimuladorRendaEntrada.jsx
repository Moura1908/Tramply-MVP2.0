import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SimuladorRendaEntrada = () => {
  const navigate = useNavigate();

  return (
    <>

<div className="p-margin-mobile md:p-margin-desktop flex-1 max-w-container-max mx-auto w-full">
{/*  Breadcrumb & Header  */}
<div className="mb-unit-lg">
<div className="flex items-center gap-2 font-label-md text-label-md text-medium-slate mb-2">
<span className="hover:text-tropical-mint cursor-pointer transition-colors">Simulador</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-on-surface">Renda</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold">Simulador de Renda (Entrada)</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-2xl">Mapeie todas as suas fontes de receita para projetar seu cenário financeiro. Quanto mais detalhado, mais precisa será a simulação.</p>
</div>
{/*  Two Column Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter pb-32">
{/*  Left Column: Form Input  */}
<div className="md:col-span-7">
<div className="bg-deep-navy border border-outline-variant/30 rounded-xl p-unit-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<h3 className="font-headline-sm text-headline-sm text-tropical-mint mb-unit-md flex items-center gap-2">
<span className="material-symbols-outlined">add_circle</span>
                            Nova Fonte de Renda
                        </h3>
<div className="space-y-6">
{/*  Input: Nome  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-medium-slate ml-1">Nome da fonte de renda</label>
<input className="w-full bg-[#000b30] border border-outline-variant rounded-lg p-unit-md font-body-lg text-body-lg text-on-surface placeholder:text-outline focus:border-tropical-mint focus:ring-1 focus:ring-tropical-mint focus:outline-none transition-all shadow-inner" placeholder="Ex: Vendas de Brigadeiro, Consultoria..." type="text" />
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-unit-md">
{/*  Input: Valor  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-medium-slate ml-1">Valor estimado</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 font-body-lg text-body-lg text-medium-slate">R$</span>
<input className="w-full bg-[#000b30] border border-outline-variant rounded-lg p-unit-md pl-12 font-body-lg text-body-lg text-on-surface placeholder:text-outline focus:border-tropical-mint focus:ring-1 focus:ring-tropical-mint focus:outline-none transition-all shadow-inner" placeholder="0,00" type="number" />
</div>
</div>
{/*  Input: Frequência  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-medium-slate ml-1">Frequência</label>
<div className="relative">
<select className="w-full bg-[#000b30] border border-outline-variant rounded-lg p-unit-md pr-10 font-body-lg text-body-lg text-on-surface focus:border-tropical-mint focus:ring-1 focus:ring-tropical-mint focus:outline-none appearance-none transition-all shadow-inner cursor-pointer">
<option value="mensal">Mensal</option>
<option value="quinzenal">Quinzenal</option>
<option value="semanal">Semanal</option>
<option value="diaria">Diária</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-medium-slate pointer-events-none">expand_more</span>
</div>
</div>
</div>
{/*  Toggle: Garantida / Incerta  */}
<div className="flex items-center justify-between bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-unit-md">
<div>
<p className="font-body-lg text-body-lg text-on-surface">Renda Garantida</p>
<p className="font-body-sm text-body-sm text-medium-slate">Marque se este valor é fixo ou muito provável.</p>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 top-0 left-0 transition-all duration-300" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-outline-variant cursor-pointer transition-all duration-300" htmlFor="toggle"></label>
</div>
</div>
{/*  Button Add  */}
<button onClick={() => alert('Nova fonte adicionada!')} className="w-full mt-4 border-2 border-medium-slate text-medium-slate rounded-full py-3 px-unit-lg font-label-md text-label-md hover:bg-medium-slate/10 transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">add</span>
                                Adicionar outra fonte
                            </button>
</div>
</div>
</div>
{/*  Right Column: Preview Panel  */}
<div className="md:col-span-5 h-full">
<div className="bg-surface-container-high rounded-xl p-unit-lg h-full flex flex-col border border-transparent shadow-lg shadow-black/20">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-unit-md flex items-center justify-between">
                            Fontes Adicionadas
                            <span className="bg-surface-container-highest text-medium-slate font-label-md text-[10px] px-2 py-1 rounded-full">2 ITENS</span>
</h3>
{/*  List  */}
<div className="flex-1 space-y-3 overflow-y-auto pr-2">
{/*  Card Item 1  */}
<div className="bg-deep-navy border border-outline-variant/20 rounded-lg p-unit-md flex items-center justify-between hover:border-tropical-mint/50 transition-colors group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-tropical-mint">
<span className="material-symbols-outlined text-[20px]">storefront</span>
</div>
<div>
<p className="font-body-lg text-body-lg text-on-surface font-semibold">Vendas Loja Física</p>
<p className="font-body-sm text-body-sm text-medium-slate">Semanal • Garantida</p>
</div>
</div>
<div className="text-right">
<p className="font-body-lg text-body-lg text-on-surface font-bold">R$ 1.200,00</p>
<button className="text-error/80 hover:text-error opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>
{/*  Card Item 2  */}
<div className="bg-deep-navy border border-outline-variant/20 rounded-lg p-unit-md flex items-center justify-between hover:border-tropical-mint/50 transition-colors group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">language</span>
</div>
<div>
<p className="font-body-lg text-body-lg text-on-surface font-semibold">Vendas Online</p>
<p className="font-body-sm text-body-sm text-medium-slate">Mensal • Incerta</p>
</div>
</div>
<div className="text-right">
<p className="font-body-lg text-body-lg text-on-surface font-bold">R$ 3.500,00</p>
<button className="text-error/80 hover:text-error opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>
</div>
{/*  Subtotal  */}
<div className="mt-6 pt-6 border-t border-surface-variant">
<p className="font-label-md text-label-md text-medium-slate mb-1">Total Estimado (Mensalizado)</p>
<p className="font-headline-lg text-headline-lg text-tropical-mint tracking-tight">R$ 8.300,00</p>
</div>
</div>
</div>
</div>
</div>
{/*  Sticky Footer Actions  */}
<div className="fixed bottom-0 left-0 md:left-[260px] right-0 bg-background/90 backdrop-blur-lg border-t border-surface-variant p-margin-mobile md:px-margin-desktop md:py-unit-md z-30">
<div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-end gap-4">
<button className="w-full md:w-auto font-label-md text-label-md text-on-surface-variant hover:text-white px-unit-lg py-3 rounded-full transition-colors order-2 md:order-1">
                    Limpar tudo
                </button>
<button className="w-full md:w-auto bg-tropical-mint text-black font-label-md text-label-md px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(79,240,170,0.4)] transition-all order-1 md:order-2 flex items-center justify-center gap-2" onClick={(e) => { e.preventDefault(); navigate('/simulador-renda-resultado'); }}>
                    Calcular projeção
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>

    </>
  );
};

export default SimuladorRendaEntrada;
