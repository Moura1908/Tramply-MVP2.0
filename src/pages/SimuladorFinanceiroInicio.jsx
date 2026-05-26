import React from 'react';
import { Link } from 'react-router-dom';

const SimuladorFinanceiroInicio = () => {
  return (
    <>
      <div className="max-w-[1000px] mx-auto flex flex-col gap-unit-lg py-8 md:py-12">
        {/* Page Header */}
        <div className="flex flex-col gap-3 mb-8">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight leading-none">
            Simulador Financeiro
          </h1>
          <p className="font-body-lg text-[15px] text-medium-slate leading-relaxed max-w-2xl">
            Projete o futuro do seu caixa. Lance suas estimativas de entradas e saídas para visualizar o saldo do mês de forma clara e direta.
          </p>
        </div>

        {/* Ledger Layout */}
        <div className="flex flex-col md:flex-row bg-surface rounded-2xl border border-surface-variant overflow-hidden shadow-2xl">
          
          {/* Entradas Column */}
          <Link 
            to="/simulador-renda-entrada" 
            className="group flex-1 p-6 md:p-8 border-l-4 border-l-tropical-mint hover:bg-surface-bright transition-colors duration-300 relative"
          >
            <div className="flex flex-col h-full">
              <span className="text-[11px] font-bold uppercase tracking-widest text-tropical-mint mb-2">Entradas</span>
              <h2 className="text-[28px] font-bold text-eggshell mb-4 group-hover:text-tropical-mint transition-colors">Receitas e Vendas</h2>
              <p className="text-[14px] text-medium-slate mb-8 max-w-[280px]">
                Registre tudo que entra: vendas de produtos, prestação de serviços e contratos fixos.
              </p>
              
              <div className="mt-auto flex items-end justify-between">
                <div className="font-mono text-3xl font-bold text-surface-variant group-hover:text-tropical-mint/20 transition-colors">
                  R$ <span className="animate-pulse">---</span>
                </div>
                <div className="flex items-center text-tropical-mint text-[13px] font-bold uppercase tracking-wider opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Lançar <span className="material-symbols-outlined ml-1 text-[18px]">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Central Divider (Ledger line) */}
          <div className="hidden md:block w-px bg-surface-variant opacity-50 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface border border-surface-variant flex items-center justify-center text-medium-slate">
              <span className="material-symbols-outlined text-[14px]">compare_arrows</span>
            </div>
          </div>
          <div className="md:hidden h-px w-full bg-surface-variant opacity-50 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface border border-surface-variant flex items-center justify-center text-medium-slate">
              <span className="material-symbols-outlined text-[14px]">swap_vert</span>
            </div>
          </div>

          {/* Saídas Column */}
          <Link 
            to="/simulador-despesas-entrada" 
            className="group flex-1 p-6 md:p-8 border-l-4 md:border-l-0 md:border-r-4 border-amber-500 hover:bg-surface-bright transition-colors duration-300 relative"
          >
            <div className="flex flex-col h-full md:text-right">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-500 mb-2 md:text-right">Saídas</span>
              <h2 className="text-[28px] font-bold text-eggshell mb-4 group-hover:text-amber-500 transition-colors">Custos e Despesas</h2>
              <p className="text-[14px] text-medium-slate mb-8 max-w-[280px] md:ml-auto">
                Mapeie os custos da operação: DAS, aluguel, internet, mercadorias e seu pró-labore.
              </p>
              
              <div className="mt-auto flex items-end justify-between md:flex-row-reverse">
                <div className="font-mono text-3xl font-bold text-surface-variant group-hover:text-amber-500/20 transition-colors">
                  R$ <span className="animate-pulse" style={{animationDelay: '0.5s'}}>---</span>
                </div>
                <div className="flex items-center text-amber-500 text-[13px] font-bold uppercase tracking-wider opacity-0 md:translate-x-2 md:-translate-x-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <span className="material-symbols-outlined mr-1 text-[18px] hidden md:block">arrow_back</span>
                  Lançar 
                  <span className="material-symbols-outlined ml-1 text-[18px] md:hidden">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>

        </div>

        {/* Transparency Warning */}
        <div className="mt-8 flex gap-3 text-medium-slate items-start border-l-2 border-surface-variant pl-4">
          <span className="material-symbols-outlined text-[18px] mt-0.5">info</span>
          <p className="text-xs font-medium uppercase tracking-widest leading-relaxed">
            Ferramenta educacional baseada em estimativas. <br/>Não substitui contabilidade profissional.
          </p>
        </div>
      </div>
    </>
  );
};

export default SimuladorFinanceiroInicio;
