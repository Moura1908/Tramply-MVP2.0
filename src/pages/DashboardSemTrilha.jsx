import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DashboardSemTrilha = () => {
  const navigate = useNavigate();
  return (
    <>

{/*  Greeting Header  */}
<div className="flex flex-col gap-2 mb-8 mt-4">
  <h1 className="font-headline-lg text-[32px] font-bold text-eggshell leading-tight tracking-tight">Oi, Ana! Por onde quer começar?</h1>
  <p className="font-body-lg text-[15px] text-on-surface-variant max-w-2xl">Selecione seu objetivo principal para criarmos uma jornada sob medida para o momento do seu negócio.</p>
</div>

{/*  Bento Grid 2x2 Selection Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
{/*  Card 1  */}
<Link to="/quiz-inicio" className="group text-left bg-surface-container-low border border-outline-variant/20 rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:border-tropical-mint hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-md">
  <div className="w-12 h-12 rounded-xl bg-surface border border-outline-variant/30 flex items-center justify-center group-hover:bg-tropical-mint/10 group-hover:border-tropical-mint/30 transition-all">
    <span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint text-[24px]" aria-hidden="true">account_balance_wallet</span>
  </div>
  <div>
    <h3 className="text-[18px] font-bold text-eggshell group-hover:text-tropical-mint transition-colors leading-tight">Quero organizar minhas finanças</h3>
    <p className="text-[14px] text-on-surface-variant mt-2 leading-relaxed">Controle de caixa, precificação e separação de contas pessoais da empresa.</p>
  </div>
</Link>
{/*  Card 2  */}
<Link to="/quiz-inicio" className="group text-left bg-surface-container-low border border-outline-variant/20 rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:border-tropical-mint hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-md">
  <div className="w-12 h-12 rounded-xl bg-surface border border-outline-variant/30 flex items-center justify-center group-hover:bg-tropical-mint/10 group-hover:border-tropical-mint/30 transition-all">
    <span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint text-[24px]" aria-hidden="true">groups</span>
  </div>
  <div>
    <h3 className="text-[18px] font-bold text-eggshell group-hover:text-tropical-mint transition-colors leading-tight">Preciso conseguir mais clientes</h3>
    <p className="text-[14px] text-on-surface-variant mt-2 leading-relaxed">Estratégias de marketing digital, parcerias e vendas para o seu nicho.</p>
  </div>
</Link>
{/*  Card 3  */}
<Link to="/quiz-inicio" className="group text-left bg-surface-container-low border border-outline-variant/20 rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:border-tropical-mint hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-md">
  <div className="w-12 h-12 rounded-xl bg-surface border border-outline-variant/30 flex items-center justify-center group-hover:bg-tropical-mint/10 group-hover:border-tropical-mint/30 transition-all">
    <span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint text-[24px]" aria-hidden="true">storefront</span>
  </div>
  <div>
    <h3 className="text-[18px] font-bold text-eggshell group-hover:text-tropical-mint transition-colors leading-tight">Quero abrir ou regularizar meu MEI</h3>
    <p className="text-[14px] text-on-surface-variant mt-2 leading-relaxed">Passo a passo sem burocracia, direitos e deveres da formalização.</p>
  </div>
</Link>
{/*  Card 4  */}
<Link to="/quiz-inicio" className="group text-left bg-surface-container-low border border-outline-variant/20 rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:border-tropical-mint hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-md">
  <div className="w-12 h-12 rounded-xl bg-surface border border-outline-variant/30 flex items-center justify-center group-hover:bg-tropical-mint/10 group-hover:border-tropical-mint/30 transition-all">
    <span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint text-[24px]" aria-hidden="true">troubleshoot</span>
  </div>
  <div>
    <h3 className="text-[18px] font-bold text-eggshell group-hover:text-tropical-mint transition-colors leading-tight">Estou com dificuldades no meu negócio</h3>
    <p className="text-[14px] text-on-surface-variant mt-2 leading-relaxed">Diagnóstico rápido para identificar gargalos e montar um plano de ação.</p>
  </div>
</Link>
</div>
{/*  Quiz Banner  */}
<div className="bg-surface rounded-2xl p-6 md:p-8 border border-outline-variant/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden mt-4 group hover:border-tropical-mint/50 transition-colors">
  {/*  Subtle background accent  */}
  <div className="absolute right-0 top-0 w-64 h-64 bg-tropical-mint/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:bg-tropical-mint/10 transition-colors pointer-events-none"></div>

  <div className="flex-1 z-10">
    <h3 className="text-[22px] font-bold text-eggshell mb-2">Não tem certeza por onde começar?</h3>
    <p className="text-[15px] text-on-surface-variant leading-relaxed max-w-xl">Responda 6 perguntas rápidas e receba um plano de ação personalizado para o momento atual do seu negócio.</p>
  </div>
<div className="z-10">
<Link to="/quiz-inicio" className="bg-tropical-mint text-black font-label-md text-label-md rounded-full py-3 px-8 whitespace-nowrap btn-glow transition-all inline-block text-center">
                        Fazer o quiz agora
                    </Link>
</div>
</div>

    </>
  );
};

export default DashboardSemTrilha;
