import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MinhasTrilhas = () => {
  const navigate = useNavigate();
  return (
    <>

<h2 className="font-headline-lg-mobile md:font-headline-lg text-[28px] md:text-[32px] text-eggshell font-bold mb-8">Minhas Trilhas</h2>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/*  Left Column (Trilhas)  */}
<div className="lg:col-span-12 space-y-gutter">
{/*  Trilha Principal Card  */}
<div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20 relative overflow-hidden group">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 relative z-10">
<div>
<h3 className="font-headline-md text-headline-md text-eggshell mb-1">Trilha: Crescer</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Foco em expansão de vendas e gestão financeira avançada.</p>
</div>
<div className="mt-4 md:mt-0 text-right">
<span className="font-headline-sm text-headline-sm text-tropical-mint">35%</span>
<p className="font-label-md text-label-md text-medium-slate">Concluído</p>
</div>
</div>
{/*  Progress Bar  */}
<div className="h-1.5 w-full bg-deep-navy rounded-full mb-8 relative z-10 overflow-hidden">
<div className="h-full bg-tropical-mint rounded-full" style={{ width: "35%" }}></div>
</div>
{/*  Vertical Timeline  */}
<div className="relative pl-4 space-y-8 before:absolute before:inset-y-2 before:left-[21px] before:w-[2px] before:bg-surface-variant before:-z-10 z-10">
{/*  Completed Module  */}
<div className="relative flex items-start gap-4">
<div className="absolute -left-4 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center z-10">
<span className="material-symbols-outlined text-tropical-mint" style={{ fontVariationSettings: "'FILL' 1", fontSize: "20px" }}>check_circle</span>
</div>
<div className="ml-6">
<h4 className="font-label-md text-label-md text-on-surface-variant mb-1">Módulo 1</h4>
<p className="font-body-sm text-body-sm text-eggshell">Análise de Mercado Local</p>
</div>
</div>
{/*  Current Module  */}
<div className="relative flex items-start gap-4">
<div className="absolute -left-4 w-8 h-8 rounded-full bg-deep-navy border-2 border-tropical-mint flex items-center justify-center z-10 shadow-sm">
<div className="w-2.5 h-2.5 rounded-full bg-tropical-mint"></div>
</div>
<div className="ml-6 p-4 rounded-lg bg-surface-container-high border border-tropical-mint/30 w-full">
<div className="flex justify-between items-start mb-2">
<h4 className="font-label-md text-label-md text-tropical-mint">Módulo 2 (Atual)</h4>
<span className="font-label-md text-label-md text-medium-slate bg-deep-navy px-2 py-1 rounded-md">Em andamento</span>
</div>
<p className="font-headline-sm text-headline-sm text-eggshell mb-2">Precificação para MEI</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Aprenda a calcular custos fixos, variáveis e definir uma margem de lucro sustentável.</p>
<Link to="/modulo-de-trilha" className="bg-tropical-mint text-black font-label-md text-label-md px-6 py-2.5 rounded-full hover:bg-primary-container transition-all inline-block">Continuar Módulo</Link>
</div>
</div>
{/*  Future Module  */}
<div className="relative flex items-start gap-4 opacity-50">
<div className="absolute -left-4 w-8 h-8 rounded-full bg-surface-container border-2 border-surface-variant flex items-center justify-center z-10">
<span className="material-symbols-outlined text-surface-variant" style={{ fontSize: "16px" }}>lock</span>
</div>
<div className="ml-6">
<h4 className="font-label-md text-label-md text-on-surface-variant mb-1">Módulo 3</h4>
<p className="font-body-sm text-body-sm text-eggshell">Estratégias de Divulgação Digital</p>
</div>
</div>
</div>
</div>
{/*  Trilhas Secundárias  */}
<div className="mt-12">
<h3 className="font-headline-sm text-headline-sm text-eggshell mb-6">Trilhas secundárias disponíveis</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Card 1  */}
<div className="bg-surface-container-high rounded-xl p-5 border border-outline-variant/10 hover:border-medium-slate/50 transition-all flex flex-col justify-between group">
<div className="flex items-start gap-4 mb-4">
<div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center text-medium-slate group-hover:text-eggshell transition-colors">
<span className="material-symbols-outlined" style={{ fontSize: "28px" }}>account_balance_wallet</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-eggshell text-base mb-1">Organizar finanças</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant text-xs line-clamp-2">Separe as contas pessoais da empresa e construa um caixa saudável.</p>
</div>
</div>
<button onClick={() => navigate('/modulo-de-trilha')} className="w-full mt-2 border border-medium-slate text-medium-slate font-label-md text-label-md py-2 rounded-full hover:bg-medium-slate/10 hover:text-eggshell transition-all">Explorar Trilha</button>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-high rounded-xl p-5 border border-outline-variant/10 hover:border-medium-slate/50 transition-all flex flex-col justify-between group">
<div className="flex items-start gap-4 mb-4">
<div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center text-medium-slate group-hover:text-eggshell transition-colors">
<span className="material-symbols-outlined" style={{ fontSize: "28px" }}>handshake</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-eggshell text-base mb-1">Buscar conexões</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant text-xs line-clamp-2">Networking prático para encontrar parceiros e novos fornecedores.</p>
</div>
</div>
<button onClick={() => navigate('/modulo-de-trilha')} className="w-full mt-2 border border-medium-slate text-medium-slate font-label-md text-label-md py-2 rounded-full hover:bg-medium-slate/10 hover:text-eggshell transition-all">Explorar Trilha</button>
</div>
</div>
</div>
</div>
</div>
    </>
  );
};

export default MinhasTrilhas;
