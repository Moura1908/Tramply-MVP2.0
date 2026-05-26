import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const QuizRespostaDaIA = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-lg antialiased selection:bg-tropical-mint selection:text-black overflow-x-hidden">
{/*  Header (Transactional Flow: Nav Suppressed)  */}
<header className="w-full px-margin-mobile md:px-margin-desktop py-6 flex justify-between items-center glass-panel sticky top-0 z-50">
<button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full flex items-center justify-center text-medium-slate hover:text-tropical-mint hover:bg-surface-container-high transition-all"><span className="material-symbols-outlined">arrow_back</span></button>
<div className="flex items-center gap-2">
<span className="font-headline-md text-headline-md text-tropical-mint font-bold tracking-tight">Tramply</span>
</div>
<button onClick={() => navigate('/login')} className="font-label-md text-label-md text-medium-slate hover:text-eggshell transition-colors duration-200">
            Sair
        </button>
</header>
{/*  Main Content Canvas  */}
<main className="flex-grow flex flex-col items-center justify-start px-margin-mobile md:px-margin-desktop pt-unit-xl pb-24 w-full">
{/*  Max-width constraint for focus  */}
<div className="w-full max-w-2xl flex flex-col w-full">
{/*  Progress Indicator  */}
<div className="w-full mb-unit-xl">
<div className="flex justify-between items-center mb-2">
<span className="font-label-md text-label-md text-medium-slate uppercase tracking-wider">Etapa 3 de 6</span>
</div>
{/*  Progress Bar Track  */}
<div className="w-full h-[6px] bg-deep-navy rounded-full overflow-hidden">
{/*  Progress Bar Fill  */}
<div className="h-full bg-tropical-mint w-1/2 rounded-full transition-all duration-500 ease-out shadow-[0_0_8px_rgba(79,240,170,0.4)]"></div>
</div>
</div>
{/*  Quiz Content  */}
<div className="flex flex-col gap-unit-lg w-full">
{/*  Question Title  */}
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary text-center md:text-left leading-tight">
                    Em qual área você atua ou quer atuar?
                </h1>
{/*  User Input Display (Read-only state)  */}
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-medium-slate pl-2">Sua resposta</label>
<div className="bg-deep-navy border border-outline-variant/30 rounded-xl px-4 py-4 text-on-surface font-body-lg flex items-center justify-between">
<span className="">sou tatuadora especializada em fine line</span>
<span className="material-symbols-outlined text-outline-variant text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>edit</span>
</div>
</div>
{/*  AI Response Card  */}
<div className="mt-4 bg-surface-container-high rounded-xl border-[2px] border-tropical-mint p-6 relative overflow-hidden flex flex-col gap-6 shadow-[0_0_20px_rgba(79,240,170,0.05)] animate-[slideUp_0.4s_ease-out_forwards]">
{/*  Decorative subtle glow top right  */}
<div className="absolute -top-12 -right-12 w-32 h-32 bg-tropical-mint/10 rounded-full blur-2xl"></div>
{/*  AI Header  */}
<div className="flex items-center gap-3 relative z-10">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center border border-tropical-mint/30 shadow-[0_0_10px_rgba(79,240,170,0.2)]">
<span className="material-symbols-outlined text-tropical-mint text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-tropical-mint uppercase tracking-wider">Mentora IA</h3>
</div>
</div>
{/*  AI Message  */}
<div className="relative z-10">
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                            Entendi que você atua em <strong className="text-primary font-semibold">Estética e beleza</strong>. Está correto?
                        </p>
</div>
{/*  Action Buttons  */}
<div className="flex flex-col sm:flex-row gap-4 mt-2 relative z-10">
{/*  Primary Button  */}
<button className="flex-1 bg-tropical-mint text-black font-label-md text-label-md rounded-full py-4 px-6 flex items-center justify-center gap-2 hover:drop-shadow-[0_0_12px_rgba(79,240,170,0.4)] transition-all duration-300 active:scale-95 group" onClick={(e) => { e.preventDefault(); navigate('/quiz-perfil-e-ritmo'); }}>
<span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                            Sim, está correto
                        </button>
{/*  Secondary Button  */}
<button className="flex-1 border-[1.5px] border-medium-slate text-medium-slate bg-transparent hover:bg-medium-slate/10 font-label-md text-label-md rounded-full py-4 px-6 flex items-center justify-center transition-all duration-300 active:scale-95">
                            Quero corrigir
                        </button>
</div>
</div>
</div>
</div>
</main>
{/*  Simple animation for the AI card  */}

    </div>
  );
};

export default QuizRespostaDaIA;
