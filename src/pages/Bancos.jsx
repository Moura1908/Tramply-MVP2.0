import React from 'react';
import { Link } from 'react-router-dom';

const Bancos = () => {
  return (
    <>

{/*  TopAppBar (Shared Component)  */}
<header className="flex items-center justify-between px-unit-lg w-full z-40 bg-background/80 backdrop-blur-md docked full-width top-0 h-16 sticky top-0"><button onClick={(e) => { e.preventDefault(); }} className="w-10 h-10 rounded-full flex items-center justify-center text-medium-slate hover:text-tropical-mint hover:bg-surface-container-high transition-all"><span className="material-symbols-outlined">menu</span></button>
<div className="flex items-center gap-4">
<h2 className="font-headline-sm text-headline-sm text-on-surface md:hidden">Oportunidades</h2>
{/*  Search visually hidden for layout but present as requested conceptually  */}
<div className="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/20">
<span className="material-symbols-outlined text-medium-slate text-sm">search</span>
<input className="bg-transparent border-none text-body-sm text-on-surface focus:ring-0 w-48 placeholder-medium-slate/50" placeholder="Buscar serviços..." type="text" />
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-medium-slate hover:text-tropical-mint transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-tropical-mint rounded-full"></span>
</button>
<button className="text-medium-slate hover:text-tropical-mint transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant/20 overflow-hidden ml-2">
<img alt="MEI Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a confident young entrepreneur. The lighting is soft and flattering, creating a premium corporate aesthetic. The overall tone is warm and approachable, fitting a high-quality humanized tech platform. Deep navy background accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs4lBWipJrtlT64fzavEtuig4_R152XGCYZd1vUXUXr2vPeNym05NlzqvuNYZX0fNsuANxLc2X61mgqGHFygm77inb5ptfjB-l_1G0inxI3uf2sQ3_b3QDIl4LA5R23fITjHocG_GEQ6v9CPaJKErtltaj64o6rWgAJTc-iIlyriHysuZN2BBld6UDO0gX7-87EhrphKFDOq6ZA8QujRDciJyGg9wQKkmRlylT-qIC6-ejWWK0A55cTM2_MCBYYdV4PO10SkKh2RY" />
</div>
</div>
</header>
{/*  Page Canvas  */}
<div className="flex-1 p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full">
{/*  Hero Section  */}
<section className="mb-unit-xl relative">
<div className="absolute inset-0 bg-gradient-to-r from-surface-container to-background rounded-2xl opacity-50 blur-xl"></div>
<div className="relative bg-surface-container-low border border-outline-variant/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between overflow-hidden">
<div className="z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full border border-tropical-mint/30 mb-6">
<span className="material-symbols-outlined text-tropical-mint text-sm">verified</span>
<span className="font-label-md text-label-md text-tropical-mint">Seleção Exclusiva MEI</span>
</div>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Impulsione seu negócio com as melhores taxas do mercado.</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
                            Comparamos contas Pessoas Jurídicas, maquininhas sem aluguel e microcrédito facilitado para você investir no seu crescimento com segurança.
                        </p>
<div className="flex flex-wrap gap-4">
<button className="bg-tropical-mint text-black font-label-md text-label-md py-3 px-6 rounded-full hover:shadow-[0_0_12px_rgba(79,240,170,0.4)] transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>headset_mic</span>
                                Falar com Especialista
                            </button>
<button className="border-2 border-medium-slate text-medium-slate font-label-md text-label-md py-3 px-6 rounded-full hover:bg-medium-slate/10 transition-all">
                                Simular Crédito
                            </button>
</div>
</div>
{/*  Hero Graphic Concept  */}
<div className="hidden lg:block relative w-64 h-64 mt-8 md:mt-0">
<div className="absolute inset-0 bg-tropical-mint/10 rounded-full blur-2xl"></div>
<div className="relative w-full h-full border border-outline-variant/30 rounded-2xl bg-surface-container backdrop-blur-sm p-6 transform rotate-3 flex flex-col gap-4 shadow-lg">
<div className="flex items-center justify-between mb-2">
<div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center">
<span className="material-symbols-outlined text-tropical-mint">account_balance</span>
</div>
<span className="font-label-md text-label-md text-tropical-mint">Taxa Zero</span>
</div>
<div className="space-y-2 flex-1">
<div className="h-2 bg-surface-bright rounded-full w-3/4"></div>
<div className="h-2 bg-surface-bright rounded-full w-1/2"></div>
</div>
<div className="mt-auto border-t border-outline-variant/20 pt-4 flex justify-between items-center">
<span className="font-body-sm text-body-sm text-on-surface-variant">Aprovação</span>
<span className="font-headline-sm text-headline-sm text-on-surface">24h</span>
</div>
</div>
</div>
</div>
</section>
{/*  Product Bento Grid  */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-unit-xl">
{/*  Category 1: Contas PJ (Span 8)  */}
<div className="col-span-1 md:col-span-8 bg-deep-navy rounded-[12px] p-6 border border-outline-variant/20 hover:border-tropical-mint/50 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-medium-slate/5 rounded-bl-full -z-0"></div>
<div className="flex items-center justify-between mb-6 relative z-10">
<div className="flex items-center gap-3">
<div className="p-2 bg-surface-container-high rounded-lg text-medium-slate">
<span className="material-symbols-outlined">storefront</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Conta Digital MEI</h3>
</div>
<span className="font-label-md text-label-md text-on-surface-variant bg-surface-container px-3 py-1 rounded-full border border-outline-variant/30">Top Parceiros</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
{/*  Partner Card 1  */}
<div className="bg-surface-container rounded-lg p-5 border border-outline-variant/10 hover:border-tropical-mint/30 transition-all">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="font-body-lg text-body-lg font-bold text-on-surface">Banco Nexa</h4>
<p className="font-body-sm text-body-sm text-tropical-mint mt-1">Isenção de Tarifas</p>
</div>
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
<span className="font-headline-sm text-headline-sm text-secondary">N</span>
</div>
</div>
<ul className="space-y-2 mb-4">
<li className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-medium-slate">check_circle</span> Pix Gratuito Ilimitado
                                </li>
<li className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-medium-slate">check_circle</span> Emissão de Boletos Zero
                                </li>
</ul>
<button className="w-full py-2 border border-outline-variant/30 rounded-lg text-on-surface font-label-md text-label-md hover:bg-surface-variant transition-colors">Ver Detalhes</button>
</div>
{/*  Partner Card 2  */}
<div className="bg-surface-container rounded-lg p-5 border border-outline-variant/10 hover:border-tropical-mint/30 transition-all">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="font-body-lg text-body-lg font-bold text-on-surface">Cora Empreendedor</h4>
<p className="font-body-sm text-body-sm text-tropical-mint mt-1">Gestão Integrada</p>
</div>
<div className="w-8 h-8 rounded-full bg-surface-bright flex items-center justify-center">
<span className="font-headline-sm text-headline-sm text-inverse-surface">C</span>
</div>
</div>
<ul className="space-y-2 mb-4">
<li className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-medium-slate">check_circle</span> Cartão de Crédito PJ
                                </li>
<li className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-medium-slate">check_circle</span> Integração Contábil
                                </li>
</ul>
<button className="w-full py-2 border border-outline-variant/30 rounded-lg text-on-surface font-label-md text-label-md hover:bg-surface-variant transition-colors">Ver Detalhes</button>
</div>
</div>
</div>
{/*  Category 2: Maquininhas (Span 4)  */}
<div className="col-span-1 md:col-span-4 bg-deep-navy rounded-[12px] p-6 border border-outline-variant/20 hover:border-tropical-mint/50 transition-colors flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-surface-container-high rounded-lg text-medium-slate">
<span className="material-symbols-outlined">point_of_sale</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Maquininhas</h3>
</div>
<div className="flex-1 bg-surface-container rounded-lg p-5 border border-outline-variant/10 flex flex-col justify-between relative overflow-hidden">
<div className="absolute -right-4 -bottom-4 opacity-10">
<span className="material-symbols-outlined text-[120px]">credit_card</span>
</div>
<div className="relative z-10">
<div className="inline-block bg-tropical-mint/20 text-tropical-mint font-label-md text-label-md px-2 py-1 rounded mb-4">
                                Destaque do Mês
                            </div>
<h4 className="font-body-lg text-body-lg font-bold text-on-surface mb-2">SmartPay PRO</h4>
<div className="flex items-baseline gap-1 mb-4">
<span className="font-headline-md text-headline-md text-on-surface">0.99%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">no débito</span>
</div>
<ul className="space-y-3 mb-6">
<li className="flex items-start gap-2 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-tropical-mint mt-0.5">bolt</span> Receba na hora
                                </li>
<li className="flex items-start gap-2 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-tropical-mint mt-0.5">money_off</span> Sem aluguel
                                </li>
</ul>
</div>
<button className="w-full bg-surface-variant text-on-surface font-label-md text-label-md py-3 rounded-lg hover:bg-medium-slate hover:text-white transition-colors relative z-10">
                            Comparar Taxas
                        </button>
</div>
</div>
{/*  Category 3: Microcrédito (Span 12, Glassmorphism Feature)  */}
<div className="col-span-1 md:col-span-12 relative rounded-[12px] overflow-hidden border border-outline-variant/20 group">
<div className="absolute inset-0 bg-surface-container-high/80 backdrop-blur-md z-0"></div>
{/*  Decorative subtle gradient  */}
<div className="absolute top-0 right-1/4 w-64 h-64 bg-medium-slate/10 rounded-full blur-3xl z-0"></div>
<div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="md:w-1/2">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-surface-container rounded-lg text-tropical-mint">
<span className="material-symbols-outlined">trending_up</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Microcrédito MEI</h3>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                                Capital de giro rápido e descomplicado para expandir seu estoque ou investir em equipamentos. Taxas subsidiadas para formalizados.
                            </p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="border-l-2 border-tropical-mint pl-4">
<p className="font-body-sm text-body-sm text-on-surface-variant">Taxas a partir de</p>
<p className="font-headline-sm text-headline-sm text-on-surface">1.49% a.m.</p>
</div>
<div className="border-l-2 border-medium-slate pl-4">
<p className="font-body-sm text-body-sm text-on-surface-variant">Prazo de até</p>
<p className="font-headline-sm text-headline-sm text-on-surface">36 meses</p>
</div>
</div>
</div>
{/*  Stepper / Range Concept UI  */}
<div className="md:w-5/12 w-full bg-deep-navy rounded-xl p-6 border border-outline-variant/30">
<h4 className="font-body-lg text-body-lg font-bold text-on-surface mb-4">Simulação Rápida</h4>
<div className="mb-6">
<div className="flex justify-between font-body-sm text-body-sm mb-2 text-on-surface-variant">
<span className="">Valor desejado</span>
<span className="text-tropical-mint font-bold">R$ 5.000</span>
</div>
{/*  Progress Bar / Range slider visual  */}
<div className="h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden">
<div className="h-full bg-tropical-mint w-1/2 rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md"></div>
</div>
</div>
<div className="flex justify-between font-label-md text-label-md mt-1 text-on-surface-variant/50">
<span className="">R$ 1k</span>
<span className="">R$ 21k</span>
</div>
</div>
<button className="w-full bg-medium-slate text-white font-label-md text-label-md py-3 rounded-lg hover:bg-medium-slate/90 transition-colors">
                                Iniciar Simulação Completa
                            </button>
</div>
</div>
</div>
</section>
</div>

    </>
  );
};

export default Bancos;
