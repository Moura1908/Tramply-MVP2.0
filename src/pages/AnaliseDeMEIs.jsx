import React from 'react';
import { Link } from 'react-router-dom';
import analiseImg from '../assets/images/analise.jpg';

const AnaliseDeMEIs = () => {
  return (
    <div className="py-8 md:py-12 max-w-container-max mx-auto">
      <div className="mb-10">
        <h2 className="font-headline-lg text-[32px] font-bold text-eggshell tracking-tight mb-3">Estudos de Caso</h2>
        <p className="text-[15px] text-medium-slate max-w-2xl leading-relaxed">
          Aprenda com o erro e o sucesso de quem está no corre diário, na mesma trincheira que você.
        </p>
      </div>

      {/* In-page Navigation Tabs */}
      <div className="flex gap-8 border-b border-surface-variant mb-10 overflow-x-auto no-scrollbar">
        <button className="pb-4 border-b-2 border-tropical-mint text-tropical-mint text-[13px] font-bold uppercase tracking-widest whitespace-nowrap">Casos Reais</button>
        <Link to="/comunidade" className="pb-4 border-b-2 border-transparent text-medium-slate hover:text-eggshell transition-colors text-[13px] font-bold uppercase tracking-widest whitespace-nowrap">Fórum</Link>
        <Link to="/ferramentas" className="pb-4 border-b-2 border-transparent text-medium-slate hover:text-eggshell transition-colors text-[13px] font-bold uppercase tracking-widest whitespace-nowrap">Ferramentas</Link>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-12">
        <div className="relative min-w-[200px]">
          <label htmlFor="filter-setor" className="sr-only">Filtrar por setor de atuação</label>
          <select id="filter-setor" className="w-full bg-surface border border-surface-variant rounded-lg py-3 px-4 text-[14px] text-eggshell focus:border-tropical-mint focus:ring-1 focus:ring-tropical-mint appearance-none font-medium">
            <option value="">Setor de Atuação</option>
            <option value="alimentacao">Alimentação</option>
            <option value="varejo">Varejo</option>
            <option value="servicos">Serviços</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-medium-slate pointer-events-none" aria-hidden="true">expand_more</span>
        </div>
        <div className="relative flex-1 min-w-[250px]">
          <label htmlFor="search-cases" className="sr-only">Buscar estudos de caso</label>
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-medium-slate" aria-hidden="true">search</span>
          <input id="search-cases" className="w-full bg-surface border border-surface-variant rounded-lg py-3 pl-10 pr-4 text-[14px] text-eggshell focus:border-tropical-mint focus:ring-1 focus:ring-tropical-mint placeholder-outline font-medium" placeholder="Buscar por tema ou desafio..." type="text" />
        </div>
      </div>

      {/* Editorial Layout */}
      <div className="flex flex-col gap-6 md:gap-8">
        
        {/* Hero Card - 100% width */}
        <article className="bg-surface rounded-2xl border border-surface-variant overflow-hidden group relative flex flex-col md:flex-row">
          <div className="w-full md:w-[60%] h-64 md:h-auto overflow-hidden relative border-b md:border-b-0 md:border-r border-surface-variant">
            <img 
              alt="Homem sorrindo com um avental em uma padaria" 
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
              src={analiseImg} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:hidden"></div>
          </div>
          <div className="w-full md:w-[40%] p-6 md:p-10 flex flex-col bg-surface">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-amber-500/20 text-amber-500 border border-amber-500/30">
                Alimentação
              </span>
              <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-tropical-mint text-black">
                A volta por cima
              </span>
            </div>
            <h3 className="text-[28px] font-bold text-eggshell leading-tight mb-4 group-hover:text-amber-500 transition-colors">
              Como o Carlos tirou a padaria do vermelho negociando prazos
            </h3>
            <p className="text-[15px] text-medium-slate leading-relaxed mb-8 flex-1">
              Aprenda a estratégia exata de fluxo de caixa que ele usou com os fornecedores de farinha para não ficar mais no sufoco no fim do mês.
            </p>
            <Link to="/caso-de-estudo-mei" className="text-[13px] font-bold uppercase tracking-widest text-amber-500 flex items-center gap-2 group-hover:gap-3 transition-all" aria-label="Ler caso de estudo do Carlos completo">
              Ler caso completo <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>
        </article>

        {/* 2-Column Grid for secondary cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Secondary Card 1 - Typographic Only */}
          <article className="bg-surface-container-low rounded-2xl border-l-4 border-l-pink-500 border-t border-b border-r border-surface-variant hover:bg-surface transition-colors duration-300 p-6 md:p-8 flex flex-col group">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border border-pink-500/50 text-pink-500">
                Beleza & Estética
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-error flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]" aria-hidden="true">warning</span> Erro comum
              </span>
            </div>
            <h3 className="text-[22px] font-bold text-eggshell leading-tight mb-4 group-hover:text-pink-500 transition-colors">
              O erro na hora de cobrar que quase quebrou o salão da Mariana
            </h3>
            <p className="text-[14px] text-medium-slate leading-relaxed mb-8 flex-1">
              Entenda por que cobrar apenas pelos produtos e esquecer o "tempo de cadeira" é a armadilha número um para quem trabalha com estética.
            </p>
            <Link to="/caso-de-estudo-mei" className="text-[13px] font-bold uppercase tracking-widest text-pink-500 flex items-center gap-2 group-hover:gap-3 transition-all" aria-label="Ler sobre o erro de precificação da Mariana">
              Aprenda a não errar <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
            </Link>
          </article>

          {/* Secondary Card 2 - Typographic Only */}
          <article className="bg-surface-container-low rounded-2xl border-l-4 border-l-secondary border-t border-b border-r border-surface-variant hover:bg-surface transition-colors duration-300 p-6 md:p-8 flex flex-col group">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border border-secondary/50 text-secondary">
                Tecnologia & Digital
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-tropical-mint flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]" aria-hidden="true">trending_up</span> Subindo de nível
              </span>
            </div>
            <h3 className="text-[22px] font-bold text-eggshell leading-tight mb-4 group-hover:text-secondary transition-colors">
              De freela a CNPJ: Como o Roberto dobrou sua carteira de clientes
            </h3>
            <p className="text-[14px] text-medium-slate leading-relaxed mb-8 flex-1">
              Veja a postura e o modelo de proposta que ajudaram o Roberto a sair da informalidade e fechar contratos com grandes agências.
            </p>
            <Link to="/caso-de-estudo-mei" className="text-[13px] font-bold uppercase tracking-widest text-secondary flex items-center gap-2 group-hover:gap-3 transition-all" aria-label="Ler sobre a transição para PJ do Roberto">
              Copiar a estratégia <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
            </Link>
          </article>

        </div>
      </div>
    </div>
  );
};

export default AnaliseDeMEIs;
