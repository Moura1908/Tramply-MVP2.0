import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DashboardSemTrilha = () => {
  const navigate = useNavigate();
  return (
    <>

{/*  Greeting Header  */}
<div className="flex flex-col gap-2">
<h1 className="font-headline-lg text-headline-lg text-eggshell">Oi, Ana! Por onde quer começar?</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Selecione seu objetivo principal para criarmos uma jornada sob medida.</p>
</div>
{/*  Bento Grid 2x2 Selection Cards  */}
<div className="grid grid-cols-2 gap-gutter">
{/*  Card 1  */}
<button onClick={() => navigate('/quiz-inicio')} className="group text-left bg-surface-container-low border border-outline-variant/20 rounded-xl p-unit-lg flex flex-col gap-unit-md hover:border-tropical-mint hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center group-hover:bg-tropical-mint/10 transition-colors">
<span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint text-2xl" data-icon="account_balance_wallet">account_balance_wallet</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-eggshell group-hover:text-tropical-mint transition-colors">Quero organizar minhas finanças</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Controle de caixa, precificação e separação de contas.</p>
</div>
</button>
{/*  Card 2  */}
<button onClick={() => navigate('/quiz-inicio')} className="group text-left bg-surface-container-low border border-outline-variant/20 rounded-xl p-unit-lg flex flex-col gap-unit-md hover:border-tropical-mint hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center group-hover:bg-tropical-mint/10 transition-colors">
<span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint text-2xl" data-icon="groups">groups</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-eggshell group-hover:text-tropical-mint transition-colors">Preciso conseguir mais clientes</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Estratégias de marketing digital e vendas para o seu nicho.</p>
</div>
</button>
{/*  Card 3  */}
<button onClick={() => navigate('/quiz-inicio')} className="group text-left bg-surface-container-low border border-outline-variant/20 rounded-xl p-unit-lg flex flex-col gap-unit-md hover:border-tropical-mint hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center group-hover:bg-tropical-mint/10 transition-colors">
<span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint text-2xl" data-icon="storefront">storefront</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-eggshell group-hover:text-tropical-mint transition-colors">Quero abrir meu MEI</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Passo a passo burocrático e benefícios da formalização.</p>
</div>
</button>
{/*  Card 4  */}
<button onClick={() => navigate('/quiz-inicio')} className="group text-left bg-surface-container-low border border-outline-variant/20 rounded-xl p-unit-lg flex flex-col gap-unit-md hover:border-tropical-mint hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center group-hover:bg-tropical-mint/10 transition-colors">
<span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint text-2xl" data-icon="troubleshoot">troubleshoot</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-eggshell group-hover:text-tropical-mint transition-colors">Estou com dificuldades no meu negócio</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Diagnóstico rápido para identificar gargalos e soluções.</p>
</div>
</button>
</div>
{/*  Quiz Banner  */}
<div className="bg-surface-variant rounded-xl p-unit-lg border border-outline-variant/30 flex items-center justify-between gap-unit-lg relative overflow-hidden mt-4">
{/*  Subtle background accent  */}
<div className="absolute top-0 right-0 w-64 h-64 bg-medium-slate/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
<div className="flex-1 z-10">
<h3 className="font-headline-sm text-headline-sm text-eggshell mb-2">Não tem certeza?</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant">Responda 6 perguntas rápidas e receba um plano personalizado para o seu negócio em segundos.</p>
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
