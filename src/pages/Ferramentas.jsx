import React from 'react';
import { Link } from 'react-router-dom';
import ToolCard from '../components/Cards/ToolCard';
import ferramentasImg from '../assets/images/ferramentas.jpg';

const Ferramentas = () => {
  const tools = [
    {
      id: 1,
      icon: "storefront",
      category: "Vendas Online",
      title: "LojaFácil",
      description: "Crie seu catálogo virtual em 5 minutos e receba pedidos diretamente no seu WhatsApp. Sem taxas por venda.",
      badgeText: "100% Grátis",
      url: "#"
    },
    {
      id: 2,
      icon: "quick_reference_all",
      category: "CRM & Clientes",
      title: "ContatoZ",
      description: "Organize sua carteira de clientes, acompanhe orçamentos e crie lembretes de cobrança automáticos.",
      badgeText: "Freemium",
      url: "#"
    },
    {
      id: 3,
      icon: "brush",
      category: "Design",
      title: "ArteMEI",
      description: "Templates prontos para panfletos, cartões de visita e posts de redes sociais com a sua marca.",
      badgeText: "Grátis",
      url: "#"
    }
  ];

  return (
    <div className="pb-8 md:pb-0">
      {/* Page Header Section */}
      <section className="flex flex-col gap-4 md:flex-row md:items-end justify-between mb-8">
        <div className="max-w-2xl">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-eggshell mb-2">Potencialize seu Negócio</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Uma curadoria de ferramentas essenciais para simplificar a gestão, vendas e marketing do seu MEI. Escolha as melhores soluções para crescer.</p>
        </div>
        {/* Filters/Search */}
        <div className="flex gap-3">
          <form className="relative bg-deep-navy rounded-lg border border-outline-variant/30 focus-within:border-tropical-mint transition-colors flex items-center px-3 py-2 w-full md:w-64" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search-tools" className="sr-only">Buscar ferramentas</label>
            <span className="material-symbols-outlined text-medium-slate mr-2 text-[20px]" aria-hidden="true">search</span>
            <input 
              id="search-tools"
              name="search"
              className="bg-transparent border-none outline-none text-eggshell font-body-sm text-body-sm w-full placeholder:text-medium-slate focus:ring-0" 
              placeholder="Buscar ferramentas..." 
              type="text" 
            />
          </form>
        </div>
      </section>
      
      {/* Tools Grid - Bento Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured/Popular Tool Card */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-deep-navy rounded-xl p-6 border border-outline-variant/20 hover:border-tropical-mint/50 transition-all group relative overflow-hidden flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md">
          <div className="flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-tropical-mint/10 text-tropical-mint font-label-md text-label-md px-3 py-1 rounded-full border border-tropical-mint/20">Mais Popular</span>
              <span className="bg-surface-variant text-eggshell font-label-md text-label-md px-3 py-1 rounded-full">Gestão Financeira</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-eggshell mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-tropical-mint text-3xl" aria-hidden="true">account_balance</span>
              FinançasPro
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 max-w-md">Controle total de fluxo de caixa, emissão de notas fiscais (NFS-e) e relatórios automatizados, tudo em um painel intuitivo projetado especificamente para o Microempreendedor Individual.</p>
            <div className="mt-auto flex items-center gap-4 flex-wrap">
              <button className="bg-tropical-mint text-black font-label-md text-label-md px-6 py-2.5 rounded-full hover:bg-primary-container transition-all">Acessar Ferramenta</button>
              <span className="font-label-md text-label-md text-medium-slate">Plano Gratuito Disponível</span>
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-video md:aspect-auto rounded-lg overflow-hidden border border-outline-variant/20 relative">
            <img 
              alt="Preview do Dashboard FinançasPro" 
              loading="lazy"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity text-transparent" 
              src={ferramentasImg} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Partner Perk Card */}
        <div className="bg-deep-navy rounded-xl p-6 border border-outline-variant/20 hover:border-tropical-mint/50 transition-all group flex flex-col relative overflow-hidden shadow-sm hover:shadow-md">
          <div className="absolute top-0 right-0 p-4">
            <span className="material-symbols-outlined text-tropical-mint opacity-20 text-6xl rotate-12" aria-hidden="true">handshake</span>
          </div>
          <div className="mb-4 inline-flex">
            <span className="bg-surface-variant text-tropical-mint font-label-md text-label-md px-3 py-1 rounded-full border border-tropical-mint/30 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">star</span> Parceria Tramply
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
          <button className="w-full border border-medium-slate text-eggshell font-label-md text-label-md px-4 py-2 rounded-full hover:bg-medium-slate/10 transition-colors">Resgatar Benefício</button>
        </div>

        {/* Standard Tool Cards mapped */}
        {tools.map(tool => (
          <ToolCard key={tool.id} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default Ferramentas;
