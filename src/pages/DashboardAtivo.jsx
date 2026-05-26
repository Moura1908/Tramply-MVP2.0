import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DestaqueCard from '../components/Cards/DestaqueCard';
import dashboard1Img from '../assets/images/dashboard1.jpg';
import dashboard2Img from '../assets/images/dashboard2.jpg';

const DashboardAtivo = () => {
  const navigate = useNavigate();

  const destaques = [
    {
      id: 1,
      imageSrc: dashboard1Img,
      tag: "Workshop",
      tagColorClass: "bg-amber-500 text-black",
      title: "Masterclass: Vendas B2B",
      description: "Aprenda as técnicas para fechar contratos com empresas maiores e expandir sua operação.",
      footerText: "12 Nov, 19h"
    },
    {
      id: 2,
      imageSrc: dashboard2Img,
      tag: "Artigo",
      tagColorClass: "bg-secondary text-white",
      title: "Guia de Fluxo de Caixa",
      description: "Evite surpresas no fim do mês aplicando estas 3 regras simples na sua planilha.",
      footerText: "5 min de leitura"
    }
  ];

  return (
    <>
      {/* Header Zone */}
      <div className="mb-12 py-8">
        <h2 className="font-headline-lg text-[32px] text-eggshell font-bold tracking-tight leading-none">Oi, Empreendedor(a)! Bom te ver por aqui.</h2>
        <p className="font-body-lg text-[15px] text-medium-slate mt-3 max-w-2xl leading-relaxed">Sua jornada de formalização e gestão está em andamento. Foque nas tarefas importantes do seu negócio hoje.</p>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
        
        {/* Trilha Ativa - Stepping Stones */}
        <div className="xl:col-span-2 bg-surface rounded-2xl p-6 md:p-8 border border-surface-variant relative overflow-hidden group">
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 mb-3 bg-tropical-mint/20 border border-tropical-mint/30 px-3 py-1 rounded-md">
                <span className="w-2 h-2 rounded-full bg-tropical-mint animate-pulse"></span>
                <span className="font-label-md text-[11px] text-tropical-mint font-bold uppercase tracking-widest">Trilha Ativa</span>
              </div>
              <h3 className="text-[28px] text-eggshell font-bold leading-tight">Crescer</h3>
            </div>
            <div className="text-right">
              <span className="text-[32px] text-tropical-mint font-bold tracking-tighter">35%</span>
            </div>
          </div>

          {/* Stepping Stones Progress */}
          <div className="mb-16 mt-6 relative z-10">
            <div className="flex items-center justify-between relative px-2">
              {/* Track Line Container */}
              <div className="absolute top-1/2 -translate-y-1/2 left-6 right-6 z-0">
                <div className="w-full h-1.5 bg-surface-variant/60 rounded-full"></div>
                {/* Active portion */}
                <div className="absolute left-0 top-0 h-full bg-tropical-mint rounded-full w-1/2 sm:w-1/3 shadow-[0_0_12px_rgba(0,245,160,0.5)]"></div>
              </div>

              {/* Node 1: Completed */}
              <div className="relative z-10">
                <div className="w-10 h-10 shrink-0 rounded-full bg-tropical-mint flex items-center justify-center shadow-lg ring-4 ring-surface">
                  <span className="material-symbols-outlined text-black text-[20px] font-bold" aria-hidden="true">check</span>
                </div>
                <span className="absolute top-full mt-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-tropical-mint uppercase tracking-widest whitespace-nowrap">Módulo 1</span>
              </div>

              {/* Node 2: Current */}
              <div className="relative z-10">
                <div className="w-10 h-10 shrink-0 rounded-full bg-surface border-2 border-tropical-mint flex items-center justify-center shadow-[0_0_20px_rgba(0,245,160,0.15)] ring-4 ring-surface">
                  <div className="w-3 h-3 rounded-full bg-tropical-mint animate-pulse"></div>
                </div>
                <span className="absolute top-full mt-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-eggshell uppercase tracking-widest whitespace-nowrap">
                  Módulo 2 <span className="text-tropical-mint">(Atual)</span>
                </span>
              </div>

              {/* Node 3: Locked */}
              <div className="relative z-10">
                <div className="w-10 h-10 shrink-0 rounded-full bg-surface-variant flex items-center justify-center ring-4 ring-surface">
                  <span className="material-symbols-outlined text-medium-slate/70 text-[18px]" aria-hidden="true">lock</span>
                </div>
                <span className="absolute top-full mt-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-outline uppercase tracking-widest whitespace-nowrap">Módulo 3</span>
              </div>

              {/* Node 4: Locked */}
              <div className="relative z-10 hidden sm:block">
                <div className="w-10 h-10 shrink-0 rounded-full bg-surface-variant flex items-center justify-center ring-4 ring-surface">
                  <span className="material-symbols-outlined text-medium-slate/70 text-[18px]" aria-hidden="true">lock</span>
                </div>
                <span className="absolute top-full mt-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-outline uppercase tracking-widest whitespace-nowrap">Módulo 4</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
            <div className="flex-1">
              <p className="text-[11px] font-bold text-medium-slate uppercase tracking-widest mb-1">Próximo passo</p>
              <p className="text-[16px] text-eggshell font-semibold">Precificação para MEI</p>
            </div>
            <button 
              className="bg-tropical-mint text-black text-[13px] uppercase tracking-wider font-bold px-8 py-3.5 rounded-xl hover:bg-primary-container transition-all whitespace-nowrap flex items-center justify-center gap-2" 
              onClick={(e) => { e.preventDefault(); navigate('/modulo-de-trilha'); }}
              aria-label="Continuar o Módulo Atual"
            >
              Continuar Módulo
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Shortcuts - Typographic Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-col gap-4">
          <Link 
            className="flex-1 bg-surface rounded-2xl p-6 border-l-4 border-secondary hover:bg-surface-bright transition-colors duration-300 flex flex-col justify-center" 
            to="/simulador"
          >
            <span className="text-[11px] font-bold text-secondary uppercase tracking-widest mb-2">Projeção do Mês</span>
            <h4 className="text-[20px] font-bold text-eggshell flex items-center gap-2 group-hover:gap-3 transition-all">
              Simulador Financeiro <span className="material-symbols-outlined text-secondary text-[24px]" aria-hidden="true">arrow_right_alt</span>
            </h4>
          </Link>

          <Link 
            className="flex-1 bg-surface rounded-2xl p-6 border-l-4 border-amber-500 hover:bg-surface-bright transition-colors duration-300 flex flex-col justify-center" 
            to="/comunidade"
          >
            <span className="text-[11px] font-bold text-amber-500 uppercase tracking-widest mb-2">Networking</span>
            <h4 className="text-[20px] font-bold text-eggshell flex items-center gap-2 group-hover:gap-3 transition-all">
              Ponte de Conexões <span className="material-symbols-outlined text-amber-500 text-[24px]" aria-hidden="true">arrow_right_alt</span>
            </h4>
          </Link>
        </div>
      </div>

      {/* Opportunities Section */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-[24px] text-eggshell font-bold">Destaques para você</h3>
          <button className="text-[12px] font-bold uppercase tracking-widest text-tropical-mint hover:text-eggshell transition-colors flex items-center gap-1" aria-label="Ver todas as oportunidades">
            Ver todas <span className="material-symbols-outlined text-[16px]" aria-hidden="true">chevron_right</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destaques.map(destaque => (
            <DestaqueCard key={destaque.id} {...destaque} />
          ))}

          {/* Card 3 - Pure Typographic/No Image */}
          <div className="bg-tropical-mint/5 rounded-2xl border border-tropical-mint/20 hover:bg-tropical-mint/10 transition-colors group flex flex-col justify-between p-6">
            <div>
              <div className="inline-block bg-tropical-mint/20 text-tropical-mint px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest mb-6">Parceria</div>
              <h4 className="text-[24px] text-tropical-mint font-bold mb-4 leading-tight">30% OFF em Sistema NFe</h4>
              <p className="text-[14px] text-eggshell/80 mb-6 line-clamp-3">Membros Tramply têm desconto exclusivo nos primeiros 6 meses da plataforma emissora líder do mercado.</p>
            </div>
            <Link to="/ferramentas" className="flex items-center text-tropical-mint text-[12px] font-bold uppercase tracking-widest mt-auto group-hover:translate-x-2 transition-transform" aria-label="Resgatar benefício do Sistema NFe">
              Resgatar benefício <span className="material-symbols-outlined ml-2 text-[18px]" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default DashboardAtivo;
