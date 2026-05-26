import React from 'react';
import { Link } from 'react-router-dom';

const Ferramentas = () => {
  return (
    <>

{/*  Page Header Section  */}
<section className="flex flex-col gap-4 md:flex-row md:items-end justify-between">
<div className="max-w-2xl">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-eggshell mb-2">Potencialize seu Negócio</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Uma curadoria de ferramentas essenciais para simplificar a gestão, vendas e marketing do seu MEI. Escolha as melhores soluções para crescer.</p>
</div>
{/*  Filters/Search  */}
<div className="flex gap-3">
<div className="relative bg-deep-navy rounded-lg border border-outline-variant/30 focus-within:border-tropical-mint transition-colors flex items-center px-3 py-2 w-full md:w-64">
<span className="material-symbols-outlined text-medium-slate mr-2 text-[20px]">search</span>
<input className="bg-transparent border-none outline-none text-eggshell font-body-sm text-body-sm w-full placeholder:text-medium-slate focus:ring-0" placeholder="Buscar ferramentas..." type="text" />
</div>
</div>
</section>
{/*  Tools Grid - Bento Style  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/*  Featured/Popular Tool Card  */}
<div className="col-span-1 md:col-span-2 lg:col-span-2 bg-deep-navy rounded-xl p-6 border border-outline-variant/20 hover:border-tropical-mint/50 transition-all group glow-hover relative overflow-hidden flex flex-col md:flex-row gap-6">
{/*  Decorative Background element  */}
<div className="absolute -right-20 -top-20 w-64 h-64 bg-tropical-mint/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex-1 flex flex-col">
<div className="flex items-center gap-2 mb-4">
<span className="bg-tropical-mint/10 text-tropical-mint font-label-md text-label-md px-3 py-1 rounded-full border border-tropical-mint/20">Mais Popular</span>
<span className="bg-surface-variant text-eggshell font-label-md text-label-md px-3 py-1 rounded-full">Gestão Financeira</span>
</div>
<h3 className="font-headline-md text-headline-md text-eggshell mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-tropical-mint text-3xl">account_balance</span>
                            FinançasPro
                        </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6 max-w-md">Controle total de fluxo de caixa, emissão de notas fiscais (NFS-e) e relatórios automatizados, tudo em um painel intuitivo projetado especificamente para o Microempreendedor Individual.</p>
<div className="mt-auto flex items-center gap-4">
<button className="bg-tropical-mint text-black font-label-md text-label-md px-6 py-2.5 rounded-full hover:shadow-[0_0_8px_rgba(79,240,170,0.3)] transition-all">Acessar Ferramenta</button>
<span className="font-label-md text-label-md text-medium-slate">Plano Gratuito Disponível</span>
</div>
</div>
<div className="w-full md:w-1/3 aspect-video md:aspect-auto rounded-lg overflow-hidden border border-outline-variant/20 relative">
<img alt="Dashboard Preview" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" data-alt="A sleek, dark-themed dashboard interface displayed on a high-resolution screen. The UI features neon green charts and minimal typography against a deep navy background. Soft, modern lighting highlights the technological and professional nature of the software." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTuOnnM_qce6BpeoO6iYxPd1IDOKfZJYCNk06-TPxmuJirem885LsMRQDIR-Vxy0za8CYq41j9zhswb-SgDstZ-KskqIstF0iiUPeRcBRvEawlfe4KVlssEgxt4Q5tP1zqvdaBVCIGlnOxyKhRaiE7sMdW9y-wOvm8BL1-fzEQ4gOWico9odLIhB8ViQ4ZIT5iM-uRazLEall3rqgx2-mPbtuQeslKxgPcfT2H-Zgl77oMdfwcG2u1DYsLuLm2VAxMKqKK6Z_aAvw" />
<div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent"></div>
</div>
</div>
{/*  Partner Perk Card  */}
<div className="bg-deep-navy rounded-xl p-6 border border-outline-variant/20 hover:border-tropical-mint/50 transition-all group glow-hover flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<span className="material-symbols-outlined text-tropical-mint opacity-20 text-6xl rotate-12">handshake</span>
</div>
<div className="mb-4 inline-flex">
<span className="bg-surface-variant text-tropical-mint font-label-md text-label-md px-3 py-1 rounded-full border border-tropical-mint/30 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">star</span> Parceria Tramply
                        </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-eggshell mb-2">SocialPost AI</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">Gere ideias, escreva legendas e agende suas postagens no Instagram e WhatsApp usando inteligência artificial.</p>
<div className="bg-surface-container-high rounded-lg p-3 mb-6 border border-outline-variant/10">
<p className="font-label-md text-label-md text-eggshell flex justify-between">
<span className="">Desconto MEI Hub:</span>
<span className="text-tropical-mint">30% OFF</span>
</p>
</div>
<button className="w-full border-1.5 border-medium-slate text-eggshell font-label-md text-label-md px-4 py-2 rounded-full hover:bg-medium-slate/10 transition-colors">Resgatar Benefício</button>
</div>
{/*  Standard Tool Cards  */}
<div className="bg-deep-navy rounded-xl p-6 border border-outline-variant/20 hover:border-tropical-mint/50 transition-all group glow-hover flex flex-col">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-4 border border-outline-variant/20 group-hover:border-tropical-mint/30 transition-colors">
<span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint transition-colors">storefront</span>
</div>
<div className="mb-2">
<span className="text-medium-slate font-label-md text-label-md">Vendas Online</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-eggshell mb-2">LojaFácil</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">Crie seu catálogo virtual em 5 minutos e receba pedidos diretamente no seu WhatsApp. Sem taxas por venda.</p>
<div className="mt-auto flex items-center justify-between">
<span className="bg-surface-container text-medium-slate font-label-md text-label-md px-2 py-1 rounded">100% Grátis</span>
<button className="text-tropical-mint font-label-md text-label-md hover:underline flex items-center gap-1">
                            Acessar <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
<div className="bg-deep-navy rounded-xl p-6 border border-outline-variant/20 hover:border-tropical-mint/50 transition-all group glow-hover flex flex-col">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-4 border border-outline-variant/20 group-hover:border-tropical-mint/30 transition-colors">
<span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint transition-colors">quick_reference_all</span>
</div>
<div className="mb-2">
<span className="text-medium-slate font-label-md text-label-md">CRM &amp; Clientes</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-eggshell mb-2">ContatoZ</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">Organize sua carteira de clientes, acompanhe orçamentos e crie lembretes de cobrança automáticos.</p>
<div className="mt-auto flex items-center justify-between">
<span className="bg-surface-container text-medium-slate font-label-md text-label-md px-2 py-1 rounded">Freemium</span>
<button className="text-tropical-mint font-label-md text-label-md hover:underline flex items-center gap-1">
                            Acessar <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
<div className="bg-deep-navy rounded-xl p-6 border border-outline-variant/20 hover:border-tropical-mint/50 transition-all group glow-hover flex flex-col">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-4 border border-outline-variant/20 group-hover:border-tropical-mint/30 transition-colors">
<span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint transition-colors">brush</span>
</div>
<div className="mb-2">
<span className="text-medium-slate font-label-md text-label-md">Design</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-eggshell mb-2">ArteMEI</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">Templates prontos para panfletos, cartões de visita e posts de redes sociais com a sua marca.</p>
<div className="mt-auto flex items-center justify-between">
<span className="bg-surface-container text-medium-slate font-label-md text-label-md px-2 py-1 rounded">Grátis</span>
<button className="text-tropical-mint font-label-md text-label-md hover:underline flex items-center gap-1">
                            Acessar <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
{/*  Bottom spacing for mobile  */}
<div className="h-8 md:h-0"></div>

    </>
  );
};

export default Ferramentas;
