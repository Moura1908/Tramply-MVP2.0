import React, { useState } from 'react';

const MentoraDrawer = ({ isOpen, close }) => {
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Olá, Ana! Vi que você completou o módulo de Vendas ontem. Pronta para focar em Precificação hoje? 🚀' }
  ]);
  const [input, setInput] = useState('');

  const aiResponses = [
    "Claro! Baseando-se no seu perfil MEI no setor de estética, recomendo focar em precificação por hora de serviço.",
    "Ótima pergunta! Para MEIs, o pró-labore ideal é entre 30-40% do faturamento bruto.",
    "Entendido! Vou resumir os pontos principais do último módulo para você revisar rapidamente.",
    "Perfeito! Isso é essencial para o seu crescimento. Posso aprofundar em qualquer ponto.",
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { from: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      const reply = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages(prev => [...prev, { from: 'ai', text: reply }]);
    }, 800);
  };

  const handleChip = (text) => {
    setMessages(prev => [...prev, { from: 'user', text }]);
    setTimeout(() => {
      const reply = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages(prev => [...prev, { from: 'ai', text: reply }]);
    }, 800);
  };

  return (
    <aside className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 fixed right-0 inset-y-0 w-[300px] rounded-l-xl bg-surface-container-high dark:bg-surface-container-high border-l border-outline-variant/20 shadow-2xl flex flex-col p-unit-md z-50 ease-out`}>
      {/* Drawer Header */}
      <div className="flex items-center gap-3 mb-6 p-2">
        <div className="w-12 h-12 rounded-full bg-deep-navy border border-tropical-mint/30 flex items-center justify-center relative shadow-[0_0_10px_rgba(79,240,170,0.2)]">
          <span className="material-symbols-outlined text-tropical-mint text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-tropical-mint rounded-full border-2 border-surface-container-high"></div>
        </div>
        <div className="flex-1">
          <h2 className="font-headline-sm text-headline-sm text-tropical-mint font-bold">Mentora IA</h2>
          <p className="font-label-md text-label-md text-medium-slate">Sua assistente de negócios</p>
        </div>
        <button onClick={close} className="text-medium-slate hover:text-eggshell">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* AI Tabs */}
      <div className="flex bg-deep-navy rounded-lg p-1 mb-6">
        <button className="flex-1 py-1.5 flex flex-col items-center justify-center text-tropical-mint font-bold bg-surface-container-highest rounded-md shadow-sm">
          <span className="material-symbols-outlined text-[18px] mb-0.5">chat</span>
          <span className="font-label-md text-[10px]">Conversa</span>
        </button>
        <button className="flex-1 py-1.5 flex flex-col items-center justify-center text-medium-slate hover:text-eggshell hover:bg-surface-container-highest transition-all rounded-md">
          <span className="material-symbols-outlined text-[18px] mb-0.5">history</span>
          <span className="font-label-md text-[10px]">Histórico</span>
        </button>
        <button className="flex-1 py-1.5 flex flex-col items-center justify-center text-medium-slate hover:text-eggshell hover:bg-surface-container-highest transition-all rounded-md">
          <span className="material-symbols-outlined text-[18px] mb-0.5">lightbulb</span>
          <span className="font-label-md text-[10px]">Insights</span>
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4 mb-4 flex flex-col">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-4 rounded-2xl border border-outline-variant/10 max-w-[90%] ${
              msg.from === 'ai'
                ? 'bg-deep-navy rounded-tl-sm self-start'
                : 'bg-surface-container-highest rounded-tr-sm self-end'
            }`}
          >
            <p className="font-body-sm text-body-sm text-eggshell">{msg.text}</p>
          </div>
        ))}

        {/* Suggestion Chips */}
        <div className="flex flex-wrap gap-2 mt-auto">
          <span
            onClick={() => handleChip('Resumir último módulo')}
            className="font-label-md text-[10px] text-tropical-mint border border-tropical-mint/40 rounded-full px-3 py-1 cursor-pointer hover:bg-tropical-mint/10 transition-colors"
          >
            Resumir último módulo
          </span>
          <span
            onClick={() => handleChip('Dicas de precificação')}
            className="font-label-md text-[10px] text-tropical-mint border border-tropical-mint/40 rounded-full px-3 py-1 cursor-pointer hover:bg-tropical-mint/10 transition-colors"
          >
            Dicas de precificação
          </span>
        </div>
      </div>

      {/* Chat Input */}
      <div className="relative mt-auto">
        <input
          className="w-full bg-deep-navy border border-outline-variant/20 rounded-xl py-3 pl-4 pr-12 text-body-sm font-body-sm text-on-background focus:ring-1 focus:ring-tropical-mint focus:border-tropical-mint outline-none placeholder:text-medium-slate/50"
          placeholder="Pergunte à mentora..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-tropical-mint hover:bg-surface-container-highest rounded-full transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
        </button>
      </div>
    </aside>
  );
};

export default MentoraDrawer;
