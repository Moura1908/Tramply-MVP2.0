import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DashboardAtivo = () => {
  const navigate = useNavigate();

  return (
    <>

{/*  Header Zone  */}
<div className="mb-10">
<h2 className="font-headline-lg text-headline-lg text-eggshell font-bold tracking-tight">Oi, Ana! Bom te ver por aqui.</h2>
<p className="font-body-lg text-body-lg text-medium-slate mt-1">Pronta para dar o próximo passo no seu negócio?</p>
</div>
{/*  Grid Layout Main Zone  */}
<div className="grid grid-cols-1 xl:grid-cols-3 gap-gutter mb-gutter">
{/*  Active Track (Trilha Ativa) - Takes up 2 columns on large screens  */}
<div className="xl:col-span-2 bg-deep-navy rounded-xl p-8 border border-outline-variant/10 relative overflow-hidden group hover:border-tropical-mint/30 transition-colors duration-300">
{/*  Decorative background glow  */}
<div className="absolute -right-20 -top-20 w-64 h-64 bg-tropical-mint/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="flex justify-between items-start mb-6 relative z-10">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-tropical-mint text-[20px]">local_fire_department</span>
<span className="font-label-md text-label-md text-tropical-mint tracking-wider uppercase">Trilha Ativa</span>
</div>
<h3 className="font-headline-md text-headline-md text-eggshell font-bold">Crescer</h3>
</div>
<div className="bg-surface-container-high px-4 py-2 rounded-lg border border-outline-variant/20">
<span className="font-headline-sm text-headline-sm text-tropical-mint font-bold">35%</span>
</div>
</div>
{/*  Progress Bar  */}
<div className="mb-8 relative z-10">
<div className="h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden">
<div className="h-full bg-tropical-mint w-[35%] shadow-[0_0_10px_rgba(79,240,170,0.5)] rounded-full relative">
<div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 rounded-full blur-[2px]"></div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
<div className="bg-surface-container p-4 rounded-lg border-l-2 border-medium-slate flex-1">
<p className="font-label-md text-label-md text-medium-slate mb-1">Próximo módulo</p>
<p className="font-body-lg text-body-lg text-eggshell font-semibold">Precificação para MEI</p>
</div>
<button className="bg-tropical-mint text-black font-label-md text-label-md px-8 py-3 rounded-full hover:shadow-[0_0_15px_rgba(79,240,170,0.4)] transition-all whitespace-nowrap flex items-center gap-2 font-bold" onClick={(e) => { e.preventDefault(); navigate('/modulo-de-trilha'); }}>
                        Continuar
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
{/*  Shortcuts Column  */}
<div className="flex flex-col gap-gutter">
{/*  Shortcut 1  */}
<Link className="flex-1 bg-surface-container-highest rounded-xl p-6 border border-outline-variant/10 hover:border-tropical-mint/50 transition-all group flex flex-col justify-between relative overflow-hidden" to="/simulador">
<div className="w-12 h-12 bg-deep-navy rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-outline-variant/20">
<span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint transition-colors">calculate</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-eggshell mb-1">Simulador Financeiro</h4>
<p className="font-body-sm text-body-sm text-medium-slate">Projete seus lucros e custos.</p>
</div>
<span className="material-symbols-outlined absolute top-6 right-6 text-outline-variant group-hover:text-tropical-mint transition-colors">arrow_outward</span>
</Link>
{/*  Shortcut 2  */}
<Link className="flex-1 bg-surface-container-highest rounded-xl p-6 border border-outline-variant/10 hover:border-tropical-mint/50 transition-all group flex flex-col justify-between relative overflow-hidden" to="/comunidade">
<div className="w-12 h-12 bg-deep-navy rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-outline-variant/20">
<span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint transition-colors">handshake</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-eggshell mb-1">Ponte de Conexões</h4>
<p className="font-body-sm text-body-sm text-medium-slate">Networking para o seu negócio.</p>
</div>
<span className="material-symbols-outlined absolute top-6 right-6 text-outline-variant group-hover:text-tropical-mint transition-colors">arrow_outward</span>
</Link>
</div>
</div>
{/*  Opportunities Section  */}
<section className="mt-12">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md text-eggshell font-bold">Oportunidades para você</h3>
<button className="font-label-md text-label-md text-tropical-mint hover:text-primary-fixed transition-colors flex items-center gap-1">
                    Ver todas <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Card 1  */}
<div className="bg-deep-navy rounded-xl overflow-hidden border border-outline-variant/10 hover:border-medium-slate/40 transition-colors group">
<div className="h-32 bg-surface-container-high relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-surface-container-high to-deep-navy opacity-80 z-10"></div>
<img alt="Workshop Vendas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A modern, well-lit workshop environment showing a presenter pointing at a digital screen, with engaged attendees in the foreground. The lighting is slightly dramatic with deep shadows, matching a premium functional dark mode aesthetic. Soft blue and mint green accent lights hint at the Tramply brand colors in the background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaPegWJ80cd6cMKgCq33k3LtzVP6e8s959re4KlXNkOHscZx0ntxxTboCRkCIigj-elr9vrPq3BqJ0i4lmuCCR26fYJILKl1dmFEOT-17gdMMPDTkPFvk6KLDadunjp4uem-PdtB3i8Z4pVvaIyUsYDS02TxR0NBW6c0xz0S-yffPgPDj3-mxw7wlbEJRCakfDt1-hq8QsKr8oOEBTZ7UGrfjC-Th0nvjG-hcpLlm9p7BWdFRRW2bhEbxi7fPOsOf2vXD5bSRuP8o" />
<div className="absolute top-3 left-3 z-20 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-label-md text-tropical-mint border border-tropical-mint/20">WORKSHOP</div>
</div>
<div className="p-5">
<h4 className="font-headline-sm text-headline-sm text-eggshell mb-2 leading-tight">Masterclass: Vendas B2B para Pequenos Negócios</h4>
<p className="font-body-sm text-body-sm text-medium-slate mb-4 line-clamp-2">Aprenda as técnicas para fechar contratos com empresas maiores e expandir sua operação.</p>
<div className="flex items-center justify-between mt-auto">
<span className="font-label-md text-[10px] text-outline flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">event</span> 12 Nov, 19h</span>
<button className="text-tropical-mint hover:bg-tropical-mint/10 p-1.5 rounded-full transition-colors">
<span className="material-symbols-outlined text-[20px]">bookmark_border</span>
</button>
</div>
</div>
</div>
{/*  Card 2  */}
<div className="bg-deep-navy rounded-xl overflow-hidden border border-outline-variant/10 hover:border-medium-slate/40 transition-colors group">
<div className="h-32 bg-surface-container-high relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-surface-container-high to-deep-navy opacity-80 z-10"></div>
<img alt="Finanças" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A close-up shot of a person's hands reviewing financial charts on a sleek tablet in a dark, moody environment. The screen emits a soft glow. Subtle neon mint and slate blue tones reflect off the surfaces, perfectly aligning with a modern, tech-focused micro-entrepreneur dashboard aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAznJxJf2OHnH_ue622CzWJmUN12yjaZ-RxdWDq4A9bEG0Kkb42vilaZruSL-icRhgcbNjo7vpU_ERMBeEPflp-78_rnxMZzjSCLwLDHt8V_hhO2OKx5OPHtN4ggx2HuUSM0dTmytIi98QUtGs-Adp-8rQ3N6vG64Um97ZKys8W730mqyDgDUWN5rr_22Y03A2Ij1CV9_y_bRWJBoiu6PYXKSyliUsW-kUQfgpkmxLv7431hwYUtq0Qhnk24epIvD3MdDgm18tBQxs" />
<div className="absolute top-3 left-3 z-20 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-label-md text-medium-slate border border-medium-slate/20">ARTIGO</div>
</div>
<div className="p-5">
<h4 className="font-headline-sm text-headline-sm text-eggshell mb-2 leading-tight">Guia Definitivo de Controle de Fluxo de Caixa</h4>
<p className="font-body-sm text-body-sm text-medium-slate mb-4 line-clamp-2">Evite surpresas no fim do mês aplicando estas 3 regras simples na sua planilha.</p>
<div className="flex items-center justify-between mt-auto">
<span className="font-label-md text-[10px] text-outline flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> 5 min de leitura</span>
<button className="text-tropical-mint hover:bg-tropical-mint/10 p-1.5 rounded-full transition-colors">
<span className="material-symbols-outlined text-[20px]">bookmark_border</span>
</button>
</div>
</div>
</div>
{/*  Card 3  */}
<div className="bg-deep-navy rounded-xl overflow-hidden border border-outline-variant/10 hover:border-medium-slate/40 transition-colors group">
<div className="h-32 bg-surface-container-high relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-[#001242] to-[#25325e] opacity-90 z-10"></div>
<span className="material-symbols-outlined text-medium-slate/30 text-[64px] absolute z-0 group-hover:scale-110 transition-transform duration-500">campaign</span>
<div className="absolute top-3 left-3 z-20 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-label-md text-eggshell border border-outline/30">PARCERIA</div>
</div>
<div className="p-5">
<h4 className="font-headline-sm text-headline-sm text-eggshell mb-2 leading-tight">Desconto Exclusivo: Ferramenta de Emissão de NFe</h4>
<p className="font-body-sm text-body-sm text-medium-slate mb-4 line-clamp-2">Membros Tramply têm 30% off nos primeiros 6 meses da plataforma emissora líder.</p>
<div className="flex items-center justify-between mt-auto">
<span className="font-label-md text-[10px] text-tropical-mint font-bold flex items-center gap-1">Resgatar agora</span>
<span className="material-symbols-outlined text-[16px] text-tropical-mint">arrow_forward</span>
</div>
</div>
</div>
</div>
</section>

    </>
  );
};

export default DashboardAtivo;
