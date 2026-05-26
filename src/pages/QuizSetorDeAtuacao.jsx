import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const QuizSetorDeAtuacao = () => {
  const navigate = useNavigate();
  const [selectedSector, setSelectedSector] = useState(null);

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-sans antialiased selection:bg-tropical-mint/30 selection:text-tropical-mint overflow-x-hidden">
{/*  Minimal Header (Transactional Flow)  */}
<header className="w-full bg-background/90 backdrop-blur-md sticky top-0 z-50 pt-unit-md pb-unit-sm px-margin-mobile md:px-margin-desktop"><button onClick={(e) => { e.preventDefault(); }} className="w-10 h-10 rounded-full flex items-center justify-center text-medium-slate hover:text-tropical-mint hover:bg-surface-container-high transition-all"><span className="material-symbols-outlined">menu</span></button>
<div className="max-w-[600px] mx-auto flex items-center justify-between mb-unit-sm">
<button onClick={() => navigate(-1)} aria-label="Voltar" className="text-medium-slate hover:text-tropical-mint transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<span className="font-label-md text-label-md text-medium-slate tracking-widest uppercase">Etapa 3 de 6</span>
<button onClick={() => navigate('/login')} aria-label="Fechar" className="text-medium-slate hover:text-eggshell transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low">
<span className="material-symbols-outlined">close</span>
</button>
</div>
{/*  Progress Bar  */}
<div className="max-w-[600px] mx-auto w-full h-[6px] bg-surface-container-low rounded-full overflow-hidden">
<div className="h-full bg-tropical-mint w-3/6 rounded-full transition-all duration-700 ease-out relative">
<div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/30 rounded-full"></div>
</div>
</div>
</header>
{/*  Main Content Canvas  */}
<main className="flex-1 overflow-y-auto px-margin-mobile md:px-margin-desktop pt-unit-lg pb-[120px]">
<div className="max-w-[600px] mx-auto">
{/*  Question Title  */}
<h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-eggshell mb-unit-xl">
                Em qual área você atua ou quer atuar?
            </h1>
{/*  Interactive Grid Selection  */}
<div className="grid grid-cols-2 md:grid-cols-3 gap-unit-md mb-unit-lg" id="sector-grid">
<button className={`sector-chip flex flex-col items-start justify-between p-unit-md h-32 rounded-xl border-2 transition-all duration-200 text-left group outline-none ${selectedSector === 0 ? 'border-tropical-mint bg-tropical-mint/10' : 'border-transparent bg-surface-container-low hover:border-medium-slate/50'}`} onClick={() => setSelectedSector(0)}>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-medium-slate/20 transition-colors mb-2">
<span className="material-symbols-outlined text-medium-slate group-hover:text-eggshell transition-colors">restaurant</span>
</div>
<span className="font-body-sm text-body-sm text-eggshell mt-auto leading-snug">Alimentação e gastronomia</span>
</button>
<button className={`sector-chip flex flex-col items-start justify-between p-unit-md h-32 rounded-xl border-2 transition-all duration-200 text-left group outline-none ${selectedSector === 1 ? 'border-tropical-mint bg-tropical-mint/10' : 'border-transparent bg-surface-container-low hover:border-medium-slate/50'}`} onClick={() => setSelectedSector(1)}>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-medium-slate/20 transition-colors mb-2">
<span className="material-symbols-outlined text-medium-slate group-hover:text-eggshell transition-colors">face_retouching_natural</span>
</div>
<span className="font-body-sm text-body-sm text-eggshell mt-auto leading-snug">Estética e beleza</span>
</button>
<button className={`sector-chip flex flex-col items-start justify-between p-unit-md h-32 rounded-xl border-2 transition-all duration-200 text-left group outline-none ${selectedSector === 2 ? 'border-tropical-mint bg-tropical-mint/10' : 'border-transparent bg-surface-container-low hover:border-medium-slate/50'}`} onClick={() => setSelectedSector(2)}>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-medium-slate/20 transition-colors mb-2">
<span className="material-symbols-outlined text-medium-slate group-hover:text-eggshell transition-colors">handyman</span>
</div>
<span className="font-body-sm text-body-sm text-eggshell mt-auto leading-snug">Serviços gerais e reparos</span>
</button>
<button className={`sector-chip flex flex-col items-start justify-between p-unit-md h-32 rounded-xl border-2 transition-all duration-200 text-left group outline-none ${selectedSector === 3 ? 'border-tropical-mint bg-tropical-mint/10' : 'border-transparent bg-surface-container-low hover:border-medium-slate/50'}`} onClick={() => setSelectedSector(3)}>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-medium-slate/20 transition-colors mb-2">
<span className="material-symbols-outlined text-medium-slate group-hover:text-eggshell transition-colors">palette</span>
</div>
<span className="font-body-sm text-body-sm text-eggshell mt-auto leading-snug">Artesanato e criatividade</span>
</button>
<button className={`sector-chip flex flex-col items-start justify-between p-unit-md h-32 rounded-xl border-2 transition-all duration-200 text-left group outline-none ${selectedSector === 4 ? 'border-tropical-mint bg-tropical-mint/10' : 'border-transparent bg-surface-container-low hover:border-medium-slate/50'}`} onClick={() => setSelectedSector(4)}>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-medium-slate/20 transition-colors mb-2">
<span className="material-symbols-outlined text-medium-slate group-hover:text-eggshell transition-colors">computer</span>
</div>
<span className="font-body-sm text-body-sm text-eggshell mt-auto leading-snug">Tecnologia e digital</span>
</button>
<button className={`sector-chip flex flex-col items-start justify-between p-unit-md h-32 rounded-xl border-2 transition-all duration-200 text-left group outline-none ${selectedSector === 5 ? 'border-tropical-mint bg-tropical-mint/10' : 'border-transparent bg-surface-container-low hover:border-medium-slate/50'}`} onClick={() => setSelectedSector(5)}>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-medium-slate/20 transition-colors mb-2">
<span className="material-symbols-outlined text-medium-slate group-hover:text-eggshell transition-colors">health_and_safety</span>
</div>
<span className="font-body-sm text-body-sm text-eggshell mt-auto leading-snug">Saúde e bem-estar</span>
</button>
</div>
{/*  AI Custom Input Card  */}
<div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden transition-all duration-300" id="ai-card-container">
<button className="w-full flex items-center justify-between p-unit-md hover:bg-surface-container-low transition-colors outline-none focus-visible:bg-surface-container-low" id="ai-toggle">
<div className="flex items-center gap-unit-md">
<div className="w-8 h-8 rounded-full bg-tropical-mint/10 flex items-center justify-center">
<span className="material-symbols-outlined text-tropical-mint text-xl">magic_button</span>
</div>
<span className="font-body-sm text-body-sm text-eggshell font-medium">Quero descrever minha área com minhas palavras</span>
</div>
<span className="material-symbols-outlined text-medium-slate transition-transform duration-300" id="ai-chevron">expand_more</span>
</button>
<div className="hidden px-unit-md pb-unit-md" id="ai-content">
<div className="relative mt-2">
<textarea className="w-full bg-surface-container-low text-eggshell font-body-sm text-body-sm placeholder:text-outline border border-outline-variant/30 rounded-xl p-4 focus:ring-1 focus:ring-tropical-mint focus:border-tropical-mint resize-none h-28 transition-colors outline-none" id="custom-area-input" maxlength="200" placeholder="Ex: sou tatuadora especializada em fine line..."></textarea>
</div>
<div className="flex justify-between items-center mt-unit-sm">
<span className="font-label-md text-label-md text-medium-slate" id="char-count">0/200</span>
<button className="bg-surface-container-high text-tropical-mint border border-tropical-mint/30 px-6 py-2 rounded-full font-label-md text-label-md hover:bg-tropical-mint hover:text-black hover:border-transparent transition-all duration-200 flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                            Analisar
                        </button>
</div>
</div>
</div>
</div>
</main>
{/*  Fixed Footer  */}
<footer className="fixed bottom-0 left-0 w-full bg-background/90 backdrop-blur-md border-t border-outline-variant/10 p-margin-mobile md:px-margin-desktop md:py-unit-md z-40">
<div className="max-w-[600px] mx-auto">
<button className="w-full bg-tropical-mint text-black font-label-md text-label-md uppercase tracking-wider py-4 rounded-full hover:shadow-[0_0_16px_rgba(79,240,170,0.4)] transition-all duration-300 active:scale-[0.98]" onClick={(e) => { e.preventDefault(); navigate('/quiz-resposta-da-ia'); }}>
                Próximo
            </button>
</div>
</footer>
{/*  Vanilla JS for Interactions  */}
    </div>
  );
};

export default QuizSetorDeAtuacao;
