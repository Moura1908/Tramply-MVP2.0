import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const QuizObjetivos = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const options = [
    'Formalizar meu negócio (abrir MEI, CNPJ)',
    'Organizar melhor minhas finanças',
    'Conseguir mais clientes',
    'Conseguir crédito ou investimento',
    'Entender meus direitos como trabalhador',
  ];

  const toggle = (i) => setSelected(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);

  return (
    <div className="bg-background text-on-background font-body-sm min-h-screen flex flex-col selection:bg-tropical-mint selection:text-black overflow-x-hidden">
{/*  Header Transactional (Minimal)  */}
<header className="w-full px-margin-mobile md:px-margin-desktop h-16 flex items-center justify-between z-40 bg-background/80 backdrop-blur-md">
<button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full flex items-center justify-center text-medium-slate hover:text-tropical-mint hover:bg-surface-container-high transition-all">
  <span className="material-symbols-outlined">arrow_back</span>
</button>
<div className="font-headline-md text-headline-md font-bold text-tropical-mint tracking-tight">Tramply</div>
<button onClick={() => navigate('/login')} className="font-label-md text-label-md text-medium-slate hover:text-eggshell transition-colors duration-200">
            Sair
        </button>
</header>
{/*  Main Content Canvas  */}
<main className="flex-grow flex flex-col items-center px-margin-mobile md:px-margin-desktop py-unit-lg w-full max-w-[640px] mx-auto pb-[120px]">
{/*  Progress Bar Stepper  */}
<div className="w-full mb-unit-xl">
<div className="flex justify-between items-center mb-unit-sm">
<span className="font-label-md text-label-md text-medium-slate uppercase tracking-wider">Etapa 4 de 6</span>
<span className="font-label-md text-label-md text-tropical-mint">66%</span>
</div>
<div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-tropical-mint rounded-full transition-all duration-500 ease-out" style={{ width: "66.66%" }}></div>
</div>
</div>
{/*  Title  */}
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-eggshell text-center mb-unit-xl w-full">
            O que você quer conquistar agora?
        </h1>
{/*  Options Container  */}
<div className="w-full flex flex-col gap-unit-md mb-unit-lg" id="quiz-options">
{options.map((opt, i) => (
  <button
    key={i}
    onClick={() => toggle(i)}
    className={`group w-full text-left p-5 flex items-center justify-between rounded-xl border transition-all duration-200 ${
      selected.includes(i)
        ? 'bg-tropical-mint/10 border-tropical-mint'
        : 'bg-surface-container-high border-outline-variant/30 hover:border-medium-slate/50 hover:bg-surface-container-highest'
    }`}
  >
    <span className="font-body-lg text-body-lg text-eggshell">{opt}</span>
    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
      selected.includes(i)
        ? 'border-tropical-mint bg-tropical-mint'
        : 'border-medium-slate/50'
    }`}>
      <span className={`material-symbols-outlined text-[16px] text-background transition-opacity ${selected.includes(i) ? 'opacity-100' : 'opacity-0'}`}>check</span>
    </div>
  </button>
))}
</div>
{/*  AI Alternative Option  */}
<button className="w-full p-4 flex items-center justify-center gap-3 bg-surface-container-lowest border border-medium-slate/40 rounded-xl hover:bg-surface-container/50 hover:border-tropical-mint/60 transition-all duration-300 group mt-4">
<span className="material-symbols-outlined text-tropical-mint group-hover:animate-pulse">auto_awesome</span>
<span className="font-label-md text-label-md text-medium-slate group-hover:text-tropical-mint transition-colors">
                Quero explicar com minhas palavras
            </span>
</button>
</main>
{/*  Fixed Footer  */}
<footer className="fixed bottom-0 left-0 w-full bg-background/90 backdrop-blur-xl border-t border-surface-container-high p-margin-mobile md:px-margin-desktop md:py-6 flex justify-center z-50">
<button className="w-full max-w-[640px] py-4 rounded-full bg-tropical-mint text-black font-label-md text-label-md uppercase tracking-wider hover:shadow-[0_0_16px_rgba(79,240,170,0.4)] transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2" id="next-btn" onClick={() => navigate('/quiz-setor-de-atuacao')}>
            Próximo
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</footer>
    </div>
  );
};

export default QuizObjetivos;
