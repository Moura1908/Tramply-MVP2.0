import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const QuizSituacaoAtual = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-deep-navy text-on-surface font-body-lg min-h-screen flex flex-col selection:bg-tropical-mint selection:text-black overflow-x-hidden">
{/*  Transactional TopAppBar (Navigation Suppressed)  */}
<header className="w-full h-16 flex items-center justify-center px-margin-mobile md:px-margin-desktop bg-deep-navy/90 backdrop-blur-md sticky top-0 z-40"><button onClick={(e) => { e.preventDefault(); }} className="w-10 h-10 rounded-full flex items-center justify-center text-medium-slate hover:text-tropical-mint hover:bg-surface-container-high transition-all"><span className="material-symbols-outlined">menu</span></button>
<div className="text-tropical-mint font-headline-md text-headline-md font-bold tracking-tight">
            Tramply
        </div>
</header>
{/*  Main Content Canvas  */}
<main className="flex-grow flex flex-col w-full max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-unit-lg md:py-unit-xl">
{/*  Progress & Navigation Row  */}
<div className="flex flex-col gap-unit-md mb-unit-xl">
{/*  Back Button  */}
<button onClick={() => navigate(-1)} className="self-start flex items-center gap-unit-sm text-medium-slate hover:text-eggshell transition-colors duration-200 group">
<span className="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform duration-200">arrow_back</span>
<span className="font-label-md text-label-md">Voltar</span>
</button>
{/*  Progress Bar  */}
<div className="w-full">
<div className="flex justify-between items-center mb-unit-xs">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Etapa 2 de 6</span>
</div>
<div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-tropical-mint rounded-full transition-all duration-500 ease-out" style={{ width: "33.33%" }}></div>
</div>
</div>
</div>
{/*  Quiz Content  */}
<div className="flex flex-col gap-unit-lg w-full animate-[fadeIn_0.5s_ease-out]">
<h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-eggshell">
                Qual é a sua situação hoje?
            </h1>
{/*  Interactive Options  */}
<div className="flex flex-col gap-unit-md" id="quiz-options">
{/*  Option 1  */}
<button onClick={(e) => { e.preventDefault(); navigate('/quiz-objetivos'); }} className="quiz-card w-full flex items-center gap-unit-md p-unit-md md:p-unit-lg bg-surface-container-low rounded-xl border-2 border-transparent hover:border-tropical-mint hover:bg-surface-container-high transition-all duration-200 group text-left focus:outline-none focus:ring-2 focus:ring-tropical-mint focus:ring-offset-2 focus:ring-offset-deep-navy">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-tropical-mint/10 transition-colors duration-200">
<span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint text-[24px]">lightbulb</span>
</div>
<span className="font-body-lg text-body-lg text-eggshell flex-grow">
                        Ainda não tenho negócio — tenho apenas uma ideia
                    </span>
</button>
{/*  Option 2  */}
<button onClick={(e) => { e.preventDefault(); navigate('/quiz-objetivos'); }} className="quiz-card w-full flex items-center gap-unit-md p-unit-md md:p-unit-lg bg-surface-container-low rounded-xl border-2 border-transparent hover:border-tropical-mint hover:bg-surface-container-high transition-all duration-200 group text-left focus:outline-none focus:ring-2 focus:ring-tropical-mint focus:ring-offset-2 focus:ring-offset-deep-navy">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-tropical-mint/10 transition-colors duration-200">
<span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint text-[24px]">construction</span>
</div>
<span className="font-body-lg text-body-lg text-eggshell flex-grow">
                        Trabalho por conta própria, mas sem registro (informal)
                    </span>
</button>
{/*  Option 3  */}
<button onClick={(e) => { e.preventDefault(); navigate('/quiz-objetivos'); }} className="quiz-card w-full flex items-center gap-unit-md p-unit-md md:p-unit-lg bg-surface-container-low rounded-xl border-2 border-transparent hover:border-tropical-mint hover:bg-surface-container-high transition-all duration-200 group text-left focus:outline-none focus:ring-2 focus:ring-tropical-mint focus:ring-offset-2 focus:ring-offset-deep-navy">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-tropical-mint/10 transition-colors duration-200">
<span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint text-[24px]">verified</span>
</div>
<span className="font-body-lg text-body-lg text-eggshell flex-grow">
                        Já sou MEI registrado
                    </span>
</button>
{/*  Option 4  */}
<button onClick={(e) => { e.preventDefault(); navigate('/quiz-objetivos'); }} className="quiz-card w-full flex items-center gap-unit-md p-unit-md md:p-unit-lg bg-surface-container-low rounded-xl border-2 border-transparent hover:border-tropical-mint hover:bg-surface-container-high transition-all duration-200 group text-left focus:outline-none focus:ring-2 focus:ring-tropical-mint focus:ring-offset-2 focus:ring-offset-deep-navy">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-tropical-mint/10 transition-colors duration-200">
<span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint text-[24px]">storefront</span>
</div>
<span className="font-body-lg text-body-lg text-eggshell flex-grow">
                        Tenho negócio registrado além do MEI (ME ou EPP)
                    </span>
</button>
</div>
</div>
</main>
    </div>
  );
};

export default QuizSituacaoAtual;
