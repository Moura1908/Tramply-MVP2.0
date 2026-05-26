import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CasoDeEstudoMEI = () => {
  const navigate = useNavigate();

  return (
    <>

{/*  Breadcrumb & Header  */}
<div className="max-w-container-max mx-auto mb-unit-lg">
<div className="flex items-center gap-2 text-medium-slate font-label-md text-label-md mb-4">
<Link className="hover:text-tropical-mint transition-colors" to="/oportunidades">Oportunidades</Link>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<Link className="hover:text-tropical-mint transition-colors" to="#">Análise de MEIs</Link>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-eggshell">Caso: Maria, Estética</span>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
<div>
<span className="inline-block px-3 py-1 bg-error-container/20 text-error border border-error/30 rounded-full font-label-md text-label-md mb-3">Caso de Insucesso - Lições Aprendidas</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-eggshell">Clínica de Estética da Maria</h2>
<p className="text-on-surface-variant mt-2 font-body-lg text-body-lg max-w-2xl">Uma análise profunda sobre os desafios financeiros e de gestão que levaram ao fechamento de um negócio promissor no setor de beleza.</p>
</div>
</div>
</div>
{/*  Main Layout Grid  */}
<div className="max-w-container-max mx-auto grid grid-cols-1 xl:grid-cols-12 gap-unit-lg items-start">
{/*  Left Column: Timeline Case Study  */}
<div className="xl:col-span-12 space-y-8 relative">
{/*  Vertical Timeline Line  */}
<div className="absolute left-[23px] top-[40px] bottom-[40px] w-0.5 bg-surface-variant hidden sm:block"></div>
{/*  Timeline Item: O empreendimento  */}
<div className="relative flex flex-col sm:flex-row gap-6">
<div className="flex-shrink-0 relative z-10 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-deep-navy border border-tropical-mint text-tropical-mint shadow-sm">
<span className="material-symbols-outlined icon-filled">store</span>
</div>
<div className="flex-1 bg-deep-navy border border-surface-variant rounded-xl p-6 sm:p-8 hover:border-tropical-mint/50 transition-colors group">
<div className="flex items-center gap-3 sm:hidden mb-4 text-tropical-mint">
<span className="material-symbols-outlined icon-filled">store</span>
<h3 className="font-headline-sm text-headline-sm text-eggshell">O empreendimento</h3>
</div>
<h3 className="font-headline-sm text-headline-sm text-eggshell hidden sm:block mb-4">O empreendimento</h3>
<p className="text-on-surface-variant font-body-lg text-body-lg leading-relaxed">Maria, profissional formada em estética, abriu uma clínica em um bairro de classe média alta. O foco era oferecer tratamentos faciais de alto padrão, depilação a laser e massagens modeladoras. O espaço físico era impecável, decorado com móveis sofisticados e equipamentos de última geração.</p>
</div>
</div>
{/*  Timeline Item: Como a ideia saiu do papel  */}
<div className="relative flex flex-col sm:flex-row gap-6">
<div className="flex-shrink-0 relative z-10 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-surface-container border border-surface-variant text-medium-slate">
<span className="material-symbols-outlined">lightbulb</span>
</div>
<div className="flex-1 bg-deep-navy border border-surface-variant rounded-xl p-6 sm:p-8 hover:border-tropical-mint/50 transition-colors">
<div className="flex items-center gap-3 sm:hidden mb-4 text-medium-slate">
<span className="material-symbols-outlined">lightbulb</span>
<h3 className="font-headline-sm text-headline-sm text-eggshell">Como a ideia saiu do papel</h3>
</div>
<h3 className="font-headline-sm text-headline-sm text-eggshell hidden sm:block mb-4">Como a ideia saiu do papel</h3>
<p className="text-on-surface-variant font-body-lg text-body-lg leading-relaxed mb-4">A motivação principal foi a demanda crescente por procedimentos estéticos no bairro. Maria usou suas economias (R$ 40.000) e um empréstimo pessoal (R$ 60.000) para reformar o ponto comercial e adquirir as máquinas iniciais. O plano de negócios foi feito informalmente, baseado na experiência prévia dela como funcionária em outra clínica.</p>
<div className="grid grid-cols-2 gap-4 mt-6">
<div className="bg-surface-container-low p-4 rounded-lg">
<span className="block text-label-md font-label-md text-medium-slate mb-1">Investimento Inicial</span>
<span className="block font-headline-sm text-headline-sm text-eggshell">R$ 100.000</span>
</div>
<div className="bg-surface-container-low p-4 rounded-lg">
<span className="block text-label-md font-label-md text-medium-slate mb-1">Origem do Capital</span>
<span className="block font-headline-sm text-headline-sm text-eggshell">40% Próprio / 60% Terceiros</span>
</div>
</div>
</div>
</div>
{/*  Special Section: Sinais de Falha  */}
<div className="relative flex flex-col sm:flex-row gap-6 mt-12">
<div className="flex-shrink-0 relative z-10 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-error-container/20 border border-error/50 text-error shadow-sm">
<span className="material-symbols-outlined">warning</span>
</div>
<div className="flex-1 bg-gradient-to-br from-surface-container-high to-error-container/5 border border-error/20 rounded-xl p-6 sm:p-8">
<div className="flex items-center gap-3 sm:hidden mb-4 text-error">
<span className="material-symbols-outlined">warning</span>
<h3 className="font-headline-sm text-headline-sm text-error">Quando houve sinais de falha</h3>
</div>
<h3 className="font-headline-sm text-headline-sm text-error hidden sm:block mb-4">Quando houve sinais de falha</h3>
<ul className="space-y-4 text-on-surface-variant font-body-lg text-body-lg">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-error mt-0.5 text-[20px]">close</span>
<span className=""><strong>Mistura de contas:</strong> O faturamento da clínica entrava na conta pessoal de Maria, dificultando a visão real do lucro.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-error mt-0.5 text-[20px]">close</span>
<span className=""><strong>Precificação errada:</strong> Os preços foram definidos olhando apenas a concorrência, sem calcular o custo fixo (aluguel caro, energia das máquinas) e a depreciação dos equipamentos.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-error mt-0.5 text-[20px]">close</span>
<span className=""><strong>Falta de capital de giro:</strong> Ao fim do terceiro mês, a receita não cobria os custos e as parcelas do empréstimo, obrigando-a a usar o limite do cheque especial.</span>
</li>
</ul>
</div>
</div>
{/*  Special Section: Como poderia ter sido evitado  */}
<div className="relative flex flex-col sm:flex-row gap-6">
<div className="flex-shrink-0 relative z-10 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-primary-container/20 border border-tropical-mint/50 text-tropical-mint">
<span className="material-symbols-outlined">health_and_safety</span>
</div>
<div className="flex-1 bg-surface-container-high border border-tropical-mint/20 rounded-xl p-6 sm:p-8">
<div className="flex items-center gap-3 sm:hidden mb-4 text-tropical-mint">
<span className="material-symbols-outlined">health_and_safety</span>
<h3 className="font-headline-sm text-headline-sm text-tropical-mint">Como poderia ter sido evitado</h3>
</div>
<h3 className="font-headline-sm text-headline-sm text-tropical-mint hidden sm:block mb-4">Como poderia ter sido evitado</h3>
<p className="text-on-surface-variant font-body-lg text-body-lg leading-relaxed mb-4">Se Maria tivesse estruturado o negócio antes de inaugurar, as chances de sucesso seriam consideravelmente maiores. As principais medidas corretivas seriam:</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-deep-navy p-4 rounded-lg border border-surface-variant">
<h4 className="text-eggshell font-label-md text-label-md mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-medium-slate">account_balance</span>
                                    Separação Financeira
                                </h4>
<p className="text-body-sm font-body-sm text-on-surface-variant">Abertura de conta PJ (Pessoa Jurídica) imediata e definição de um pró-labore fixo para Maria.</p>
</div>
<div className="bg-deep-navy p-4 rounded-lg border border-surface-variant">
<h4 className="text-eggshell font-label-md text-label-md mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-medium-slate">calculate</span>
                                    Cálculo de Margem
                                </h4>
<p className="text-body-sm font-body-sm text-on-surface-variant">Uso de ferramentas de precificação para garantir que cada procedimento cobrisse seus custos variáveis e uma fatia do custo fixo.</p>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-surface-variant flex justify-center">
<button className="px-8 py-4 border-2 border-medium-slate text-eggshell font-label-md text-label-md rounded-full hover:bg-medium-slate/10 transition-colors flex items-center gap-2">
<span className="material-symbols-outlined">share</span>
                        Compartilhar minha história
                    </button>
</div>
</div>
</div>
    </>
  );
};

export default CasoDeEstudoMEI;
