import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTrilhaStore from '../store/useTrilhaStore';

const QuizPerfilERitmo = () => {
  const navigate = useNavigate();
  const { experience: expSelected, setExperience: setExpSelected, timeToDedicate: timeSelected, setTimeToDedicate: setTimeSelected } = useTrilhaStore();

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col font-body-sm antialiased selection:bg-tropical-mint selection:text-black overflow-x-hidden">
{/*  Minimal Header for Context (Navigation Suppressed for Onboarding)  */}
<header className="w-full px-margin-mobile md:px-margin-desktop py-6 flex items-center justify-between z-10 relative"><button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full flex items-center justify-center text-medium-slate hover:text-tropical-mint hover:bg-surface-container-high transition-all"><span className="material-symbols-outlined">arrow_back</span></button>
<div className="flex items-center gap-2">
<span className="font-headline-md text-headline-md font-bold text-tropical-mint tracking-tight">Tramply</span>
</div>
<button onClick={() => navigate('/login')} className="text-medium-slate hover:text-eggshell transition-colors font-label-md text-label-md flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">close</span>
<span className="hidden sm:inline">Sair do Quiz</span>
</button>
</header>
{/*  Main Content Canvas  */}
<main className="flex-grow flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop py-8 md:py-12 w-full max-w-[1024px] mx-auto relative z-10">
{/*  Progress Indicator  */}
<div className="w-full max-w-2xl mb-unit-lg flex flex-col items-center gap-3">
<div className="flex justify-between w-full px-1">
<span className="font-label-md text-label-md text-medium-slate uppercase tracking-wider">Etapas Finais</span>
<span className="font-label-md text-label-md text-tropical-mint">5 de 6</span>
</div>
{/*  Progress Bar Slim High-Contrast Execution  */}
<div className="w-full h-[4px] bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-tropical-mint rounded-full transition-all duration-700 ease-out" style={{ width: "83.33%" }}></div>
</div>
</div>
{/*  Quiz Container: Two Vertical Sections  */}
<div className="w-full bg-surface-container-lowest border border-outline-variant/10 rounded-[24px] p-6 md:p-10 shadow-2xl shadow-black/50">
<div className="flex flex-col md:flex-row gap-8 md:gap-0">
{/*  Section 1 (Step 5)  */}
<div className="flex-1 md:pr-10 flex flex-col">
<div className="mb-6">
<span className="inline-block px-3 py-1 bg-surface-container-high text-on-surface-variant font-label-md text-label-md rounded-full mb-4">Etapa 5</span>
<h2 className="font-headline-sm text-headline-sm text-eggshell">Como você descreveria sua experiência com empreendedorismo?</h2>
</div>
{/*  Chips Container  */}
<div className="flex flex-col gap-3 mt-auto" id="group-exp">
<button className={`quiz-chip w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${expSelected === 0 ? 'border-tropical-mint bg-tropical-mint/10' : 'border-outline-variant/30 bg-surface hover:bg-surface-container-high hover:border-medium-slate/50'}`} onClick={() => setExpSelected(0)} type="button">
<span className="font-body-lg text-body-lg text-on-surface">Estou começando do zero</span>
<span className={`material-symbols-outlined text-tropical-mint transition-opacity ${expSelected === 0 ? 'opacity-100' : 'opacity-0'}`}>check_circle</span>
</button>
<button className={`quiz-chip w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${expSelected === 1 ? 'border-tropical-mint bg-tropical-mint/10' : 'border-outline-variant/30 bg-surface hover:bg-surface-container-high hover:border-medium-slate/50'}`} onClick={() => setExpSelected(1)} type="button">
<span className="font-body-lg text-body-lg text-on-surface">Tenho alguma experiência, mas preciso de base</span>
<span className={`material-symbols-outlined text-tropical-mint transition-opacity ${expSelected === 1 ? 'opacity-100' : 'opacity-0'}`}>check_circle</span>
</button>
<button className={`quiz-chip w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${expSelected === 2 ? 'border-tropical-mint bg-tropical-mint/10' : 'border-outline-variant/30 bg-surface hover:bg-surface-container-high hover:border-medium-slate/50'}`} onClick={() => setExpSelected(2)} type="button">
<span className="font-body-lg text-body-lg text-on-surface">Já empreendo e quero crescer</span>
<span className={`material-symbols-outlined text-tropical-mint transition-opacity ${expSelected === 2 ? 'opacity-100' : 'opacity-0'}`}>check_circle</span>
</button>
</div>
</div>
{/*  Subtle Vertical Divider (Desktop) / Horizontal (Mobile)  */}
<div className="hidden md:block w-px bg-gradient-to-b from-transparent via-outline-variant/30 to-transparent"></div>
<div className="md:hidden h-px w-full bg-outline-variant/20 my-2"></div>
{/*  Section 2 (Step 6)  */}
<div className="flex-1 md:pl-10 flex flex-col">
<div className="mb-6">
<span className="inline-block px-3 py-1 bg-surface-container-high text-on-surface-variant font-label-md text-label-md rounded-full mb-4">Etapa 6</span>
<h2 className="font-headline-sm text-headline-sm text-eggshell">Quanto tempo você tem por dia para aprender?</h2>
</div>
{/*  Chips Container  */}
<div className="flex flex-col gap-3 mt-auto" id="group-time">
<button className={`quiz-chip w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${timeSelected === 0 ? 'border-tropical-mint bg-tropical-mint/10' : 'border-outline-variant/30 bg-surface hover:bg-surface-container-high hover:border-medium-slate/50'}`} onClick={() => setTimeSelected(0)} type="button">
<span className="font-body-lg text-body-lg text-on-surface">Menos de 1 hora</span>
<span className={`material-symbols-outlined text-tropical-mint transition-opacity ${timeSelected === 0 ? 'opacity-100' : 'opacity-0'}`}>check_circle</span>
</button>
<button className={`quiz-chip w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${timeSelected === 1 ? 'border-tropical-mint bg-tropical-mint/10' : 'border-outline-variant/30 bg-surface hover:bg-surface-container-high hover:border-medium-slate/50'}`} onClick={() => setTimeSelected(1)} type="button">
<span className="font-body-lg text-body-lg text-on-surface">Entre 1 e 2 horas</span>
<span className={`material-symbols-outlined text-tropical-mint transition-opacity ${timeSelected === 1 ? 'opacity-100' : 'opacity-0'}`}>check_circle</span>
</button>
<button className={`quiz-chip w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${timeSelected === 2 ? 'border-tropical-mint bg-tropical-mint/10' : 'border-outline-variant/30 bg-surface hover:bg-surface-container-high hover:border-medium-slate/50'}`} onClick={() => setTimeSelected(2)} type="button">
<span className="font-body-lg text-body-lg text-on-surface">Mais de 3 horas</span>
<span className={`material-symbols-outlined text-tropical-mint transition-opacity ${timeSelected === 2 ? 'opacity-100' : 'opacity-0'}`}>check_circle</span>
</button>
</div>
</div>
</div>
</div>
{/*  Footer Action Area  */}
<div className="w-full mt-12 flex justify-center pb-8">
<Link to="/quiz-resultado" className="bg-tropical-mint text-black font-label-md text-label-md uppercase tracking-wider px-10 py-5 rounded-full flex items-center gap-3 hover:bg-primary-fixed hover:drop-shadow-[0_0_12px_rgba(79,240,170,0.4)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
<span className="">Ver meu resultado</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>magic_button</span>
</Link>
</div>
</main>
{/*  Background Atmospheric Glow  */}
<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex justify-center items-center opacity-20">

</div>
{/*  Micro-interaction Script  */}
    </div>
  );
};

export default QuizPerfilERitmo;
