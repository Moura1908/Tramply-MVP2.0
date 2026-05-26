import React from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/Cards/PostCard';
import avatar1 from '../assets/images/avatar1.png';
import avatar2 from '../assets/images/avatar2.png';
import avatar3 from '../assets/images/avatar3.png';
import avatar4 from '../assets/images/avatar4.png';
import avatar5 from '../assets/images/avatar5.png';

const Comunidade = () => {

  const posts = [
    {
      id: 1,
      userAvatar: avatar1,
      userName: "Carlos Eduardo",
      time: "Há 2 horas",
      category: "Vendas",
      title: "Qual a melhor maquininha para quem tá começando?",
      description: "Pessoal, abri meu MEI de serviços de manutenção mês passado e estou em dúvida sobre qual máquina de cartão pegar. Taxas, aluguel... o que vocês recomendam para quem tem um volume inicial pequeno?",
      likes: 12,
      comments: 5,
      liked: false
    },
    {
      id: 2,
      userAvatar: avatar2,
      userName: "Mariana Silva",
      time: "Há 5 horas",
      category: "Marketing",
      title: "Dica: Como usar o Instagram para atrair clientes locais",
      description: "Descobri uma estratégia muito boa usando hashtags da minha cidade e parcerias com pequenos comércios do bairro. Aumentou minhas vendas de doces em 30% esse mês! Vou deixar o passo a passo aqui embaixo...",
      highlightText: "Foque em micro-influenciadores do seu próprio bairro em vez de grandes perfis da cidade.",
      likes: 34,
      comments: 18,
      liked: true
    }
  ];

  const topContributors = [
    {
      id: 1,
      name: "Roberto Costa",
      level: "Mestre MEI",
      points: 842,
      avatar: avatar3,
      rankClass: "bg-tropical-mint text-black",
      borderClass: "border-tropical-mint"
    },
    {
      id: 2,
      name: "Ana Júlia",
      level: "Especialista",
      points: 630,
      avatar: avatar4,
      rankClass: "bg-surface-container-highest text-eggshell",
      borderClass: "border-outline-variant"
    },
    {
      id: 3,
      name: "Lucas Mendes",
      level: "Especialista",
      points: 512,
      avatar: avatar5,
      rankClass: "bg-surface-container-highest text-eggshell",
      borderClass: "border-outline-variant"
    }
  ];

  return (
    <div className="max-w-container-max mx-auto pb-8 md:pb-0">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-eggshell mb-2">Comunidade Tramply</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Conecte-se, tire dúvidas e compartilhe experiências com outros MEIs.</p>
        </div>
        <button className="bg-tropical-mint text-black font-label-md text-label-md py-3 px-6 rounded-full flex items-center gap-2 transition-all whitespace-nowrap hover:-translate-y-0.5">
          <span className="material-symbols-outlined" aria-hidden="true">edit_square</span>
          Novo Post
        </button>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar: Topics & Mentora IA Promo */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          {/* Topics Nav */}
          <div className="bg-deep-navy/80 rounded-xl p-6 border border-outline-variant/10">
            <h2 className="font-headline-sm text-headline-sm text-eggshell mb-4">Tópicos</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Link className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface-container-highest border-l-2 border-tropical-mint text-tropical-mint font-label-md text-label-md" to="#">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">grid_view</span>
                    Todos os Posts
                  </div>
                  <span className="bg-background rounded-full px-2 py-0.5 text-[10px]">124</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-surface-container-high text-medium-slate hover:text-eggshell transition-colors font-label-md text-label-md" to="#">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">account_balance_wallet</span>
                    Finanças
                  </div>
                  <span className="bg-surface-container-low rounded-full px-2 py-0.5 text-[10px]">42</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-surface-container-high text-medium-slate hover:text-eggshell transition-colors font-label-md text-label-md" to="#">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">trending_up</span>
                    Vendas
                  </div>
                  <span className="bg-surface-container-low rounded-full px-2 py-0.5 text-[10px]">38</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-surface-container-high text-medium-slate hover:text-eggshell transition-colors font-label-md text-label-md" to="#">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">campaign</span>
                    Marketing
                  </div>
                  <span className="bg-surface-container-low rounded-full px-2 py-0.5 text-[10px]">29</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-surface-container-high text-medium-slate hover:text-eggshell transition-colors font-label-md text-label-md" to="#">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">gavel</span>
                    Burocracia
                  </div>
                  <span className="bg-surface-container-low rounded-full px-2 py-0.5 text-[10px]">15</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mentora IA Trigger Card */}
          <div className="bg-gradient-to-br from-surface-container-highest to-deep-navy rounded-xl p-6 border border-tropical-mint/20 relative overflow-hidden group cursor-pointer" tabIndex="0" role="button" aria-label="Abrir Chat com Mentora IA">
            <div className="flex items-center gap-3 mb-3 relative z-10">
              <div className="w-10 h-10 rounded-full bg-tropical-mint/20 flex items-center justify-center text-tropical-mint">
                <span className="material-symbols-outlined" aria-hidden="true">smart_toy</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-tropical-mint">Mentora IA</h3>
                <p className="font-label-md text-label-md text-on-surface-variant text-[10px]">Assistente 24/7</p>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-eggshell mb-4 relative z-10">Preso em uma dúvida? Peça ajuda à nossa IA especialista em negócios.</p>
            <button className="w-full bg-transparent border border-medium-slate text-eggshell font-label-md text-label-md py-2 rounded-full hover:bg-medium-slate/10 transition-colors relative z-10">
              Abrir Chat
            </button>
          </div>
        </div>

        {/* Center Main: Feed */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {posts.map(post => (
            <PostCard key={post.id} {...post} />
          ))}
          
          <button className="w-full py-3 rounded-xl border border-medium-slate/30 text-medium-slate font-label-md text-label-md hover:bg-surface-container-high transition-colors">
            Carregar mais posts
          </button>
        </div>

        {/* Right Sidebar: Top Contributors */}
        <div className="lg:col-span-3">
          <div className="bg-deep-navy/80 rounded-xl p-6 border border-outline-variant/10 sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-headline-sm text-headline-sm text-eggshell">Top Contribuidores</h2>
              <span className="material-symbols-outlined text-tropical-mint" aria-hidden="true">workspace_premium</span>
            </div>
            <div className="flex flex-col gap-4">
              {topContributors.map((contributor) => (
                <div key={contributor.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img 
                        alt={`Avatar de ${contributor.name}`} 
                        loading="lazy"
                        className={`w-9 h-9 rounded-full border ${contributor.borderClass}`} 
                        src={contributor.avatar} 
                      />
                      <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center font-bold text-[9px] ${contributor.rankClass}`}>
                        {contributor.id}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-eggshell text-[13px]">{contributor.name}</h4>
                      <p className="font-body-sm text-body-sm text-medium-slate text-[10px]">Nível: {contributor.level}</p>
                    </div>
                  </div>
                  <span className={`font-label-md text-label-md text-[11px] ${contributor.id === 1 ? 'text-tropical-mint' : 'text-medium-slate'}`}>
                    {contributor.points} pts
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-center text-[12px] text-medium-slate hover:text-tropical-mint transition-colors">
              Ver ranking completo
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Comunidade;
