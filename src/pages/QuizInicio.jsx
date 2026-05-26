import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const QuizInicio = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-on-surface min-h-screen flex flex-col antialiased overflow-x-hidden">
{/*  Top Navigation for Transactional/Isolated Flow  */}
<header className="w-full flex items-center justify-between px-margin-desktop py-unit-md bg-background/80 backdrop-blur-md fixed top-0 z-50"><button onClick={(e) => { e.preventDefault(); }} className="w-10 h-10 rounded-full flex items-center justify-center text-medium-slate hover:text-tropical-mint hover:bg-surface-container-high transition-all"><span className="material-symbols-outlined">menu</span></button>
<div className="font-headline-md text-headline-md font-bold text-tropical-mint">
            Tramply
        </div>
<button onClick={() => navigate(-1)} className="font-label-md text-label-md text-medium-slate hover:text-eggshell transition-colors flex items-center gap-2">
            Sair <span className="material-symbols-outlined text-[18px]">logout</span>
</button>
</header>
{/*  Main Canvas Content  */}
<main className="flex-grow flex flex-col items-center justify-center pt-[80px] px-margin-mobile md:px-margin-desktop relative">
{/*  Background Ambient Glow  */}
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-tropical-mint/5 rounded-full blur-[100px]"></div>
<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-medium-slate/5 rounded-full blur-[120px]"></div>
</div>
<div className="z-10 w-full max-w-2xl flex flex-col gap-unit-xl">
{/*  Progress Bar Container  */}
<div className="w-full flex flex-col gap-unit-sm">
<div className="flex justify-between items-center w-full">
<span className="font-label-md text-label-md text-medium-slate uppercase tracking-widest">Etapa 1 de 6</span>
</div>
{/*  Track  */}
<div className="h-[4px] w-full bg-deep-navy rounded-full overflow-hidden">
{/*  Fill  */}
<div className="h-full bg-tropical-mint w-1/6 rounded-full transition-all duration-500 ease-out shadow-[0_0_8px_rgba(79,240,170,0.4)]"></div>
</div>
</div>
{/*  Title & Subtitle Area  */}
<div className="text-center flex flex-col gap-unit-sm">
<h1 className="font-headline-lg text-headline-lg text-eggshell">Vamos começar pelo início.</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Isso nos ajuda a te mostrar o caminho certo.</p>
</div>
{/*  Selection Cards Area  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter w-full">
{/*  Option 1 Card  */}
<button className="group flex flex-col items-center justify-center text-center p-unit-xl bg-deep-navy/80 rounded-xl border border-outline-variant/30 hover:border-tropical-mint/50 hover:bg-surface-container-highest transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-tropical-mint focus:ring-offset-2 focus:ring-offset-black" onClick={(e) => { e.preventDefault(); navigate('/dashboard-sem-trilha'); }}>
{/*  Subtle hover glow effect inside the card  */}
<div className="absolute inset-0 bg-tropical-mint/0 group-hover:bg-tropical-mint/5 transition-colors duration-300 pointer-events-none"></div>
<span className="material-symbols-outlined text-[48px] text-tropical-mint mb-unit-lg group-hover:scale-110 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
<span className="font-headline-sm text-headline-sm text-eggshell group-hover:text-white transition-colors">Já sei o que preciso — me leva direto</span>
</button>
{/*  Option 2 Card  */}
<button className="group flex flex-col items-center justify-center text-center p-unit-xl bg-deep-navy/80 rounded-xl border border-outline-variant/30 hover:border-tropical-mint/50 hover:bg-surface-container-highest transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-tropical-mint focus:ring-offset-2 focus:ring-offset-black" onClick={(e) => { e.preventDefault(); navigate('/quiz-situacao-atual'); }}>
{/*  Subtle hover glow effect inside the card  */}
<div className="absolute inset-0 bg-tropical-mint/0 group-hover:bg-tropical-mint/5 transition-colors duration-300 pointer-events-none"></div>
<span className="material-symbols-outlined text-[48px] text-tropical-mint mb-unit-lg group-hover:scale-110 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>search</span>
<span className="font-headline-sm text-headline-sm text-eggshell group-hover:text-white transition-colors">Quero que a plataforma me ajude a descobrir</span>
</button>
</div>
{/*  Navigation Actions (Optional continuation hook, though clicking cards often advances directly in this pattern)  */}
<div className="flex justify-between items-center w-full mt-unit-md opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
{/*  Empty div to push 'Próximo' to the right if needed later, or a back button  */}
<div></div>
</div>
</div>
</main>

    </div>
  );
};

export default QuizInicio;
