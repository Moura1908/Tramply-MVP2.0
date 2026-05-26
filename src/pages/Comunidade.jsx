import React from 'react';
import { Link } from 'react-router-dom';

const Comunidade = () => {
  return (
    <>

<div className="max-w-container-max mx-auto">
{/*  Header Section  */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-unit-lg gap-4">
<div>
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-eggshell mb-2">Comunidade Tramply</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Conecte-se, tire dúvidas e compartilhe experiências com outros MEIs.</p>
</div>
<button className="bg-tropical-mint text-black font-label-md text-label-md py-3 px-6 rounded-full flex items-center gap-2 glow-hover transition-all whitespace-nowrap">
<span className="material-symbols-outlined" data-icon="edit_square">edit_square</span>
                    Novo Post
                </button>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/*  Left Sidebar: Topics & Mentora IA Promo  */}
<div className="lg:col-span-3 flex flex-col gap-gutter">
{/*  Topics Nav  */}
<div className="bg-deep-navy/80 rounded-xl p-unit-md border border-outline-variant/10">
<h2 className="font-headline-sm text-headline-sm text-eggshell mb-4">Tópicos</h2>
<ul className="flex flex-col gap-2">
<li className="">
<Link className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface-container-highest border-l-2 border-tropical-mint text-tropical-mint font-label-md text-label-md" to="#">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm">grid_view</span>
                                        Todos os Posts
                                    </div>
<span className="bg-background rounded-full px-2 py-0.5 text-[10px]">124</span>
</Link>
</li>
<li className="">
<Link className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-surface-container-high text-medium-slate hover:text-eggshell transition-colors font-label-md text-label-md" to="#">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm">account_balance_wallet</span>
                                        Finanças
                                    </div>
<span className="bg-surface-container-low rounded-full px-2 py-0.5 text-[10px]">42</span>
</Link>
</li>
<li className="">
<Link className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-surface-container-high text-medium-slate hover:text-eggshell transition-colors font-label-md text-label-md" to="#">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm">trending_up</span>
                                        Vendas
                                    </div>
<span className="bg-surface-container-low rounded-full px-2 py-0.5 text-[10px]">38</span>
</Link>
</li>
<li className="">
<Link className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-surface-container-high text-medium-slate hover:text-eggshell transition-colors font-label-md text-label-md" to="#">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm">campaign</span>
                                        Marketing
                                    </div>
<span className="bg-surface-container-low rounded-full px-2 py-0.5 text-[10px]">29</span>
</Link>
</li>
<li className="">
<Link className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-surface-container-high text-medium-slate hover:text-eggshell transition-colors font-label-md text-label-md" to="#">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm">gavel</span>
                                        Burocracia
                                    </div>
<span className="bg-surface-container-low rounded-full px-2 py-0.5 text-[10px]">15</span>
</Link>
</li>
</ul>
</div>
{/*  Mentora IA Trigger Card  */}
<div className="bg-gradient-to-br from-surface-container-highest to-deep-navy rounded-xl p-unit-md border border-tropical-mint/20 relative overflow-hidden group cursor-pointer" onClick={(e) => { e.preventDefault(); }}>
<div className="absolute -right-4 -top-4 w-24 h-24 bg-tropical-mint/10 rounded-full blur-2xl group-hover:bg-tropical-mint/20 transition-all"></div>
<div className="flex items-center gap-3 mb-3 relative z-10">
<div className="w-10 h-10 rounded-full bg-tropical-mint/20 flex items-center justify-center text-tropical-mint">
<span className="material-symbols-outlined">smart_toy</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-tropical-mint">Mentora IA</h3>
<p className="font-label-md text-label-md text-on-surface-variant text-[10px]">Assistente 24/7</p>
</div>
</div>
<p className="font-body-sm text-body-sm text-eggshell mb-4 relative z-10">Preso em uma dúvida? Peça ajuda à nossa IA especialista em negócios.</p>
<button className="w-full bg-transparent border-1.5 border-medium-slate text-eggshell font-label-md text-label-md py-2 rounded-full hover:bg-medium-slate/10 transition-colors relative z-10">
                            Abrir Chat
                        </button>
</div>
</div>
{/*  Center Main: Feed  */}
<div className="lg:col-span-6 flex flex-col gap-unit-md">
{/*  Post 1  */}
<article className="bg-deep-navy rounded-xl p-unit-md border border-outline-variant/10 hover:border-tropical-mint/30 transition-all group">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full" data-alt="A small circular avatar portrait of a male user in his 30s, looking professional. Dark background with subtle premium lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzxTnumRGe6VjVkad3XNbHGUfNlciDZBaSE62VAZUaE1OMDh3tX7oIaAXTEqHNYVZH06nurslyAO1_kmj_WAwzia7-3GHoH92_7P77znMHiN59T7AArR-fDD-x8z6ttScVgYBg5BXOVr0PBQakisJD2oquV1lT0qnznOoZIVUA9_BhZSfywc_SLq1SoAO9i3xAJyWh8EOtRmstjFDRIv3nUI8iqa3NDYjA_0-bxcpe0XeOsbVt-IPynu8XWe7wlsBQLM8YQN1-7mo" />
<div>
<h4 className="font-label-md text-label-md text-eggshell">Carlos Eduardo</h4>
<span className="font-body-sm text-body-sm text-medium-slate text-[11px]">Há 2 horas • Vendas</span>
</div>
</div>
<button className="text-medium-slate hover:text-tropical-mint transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<h3 className="font-headline-sm text-headline-sm text-eggshell mb-2">Qual a melhor maquininha para quem tá começando?</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-3">Pessoal, abri meu MEI de serviços de manutenção mês passado e estou em dúvida sobre qual máquina de cartão pegar. Taxas, aluguel... o que vocês recomendam para quem tem um volume inicial pequeno?</p>
<div className="flex items-center gap-4 pt-3 border-t border-outline-variant/10">
<button className="flex items-center gap-1.5 text-medium-slate hover:text-tropical-mint transition-colors text-sm">
<span className="material-symbols-outlined text-[18px]">thumb_up</span>
<span className="">12</span>
</button>
<button className="flex items-center gap-1.5 text-medium-slate hover:text-tropical-mint transition-colors text-sm">
<span className="material-symbols-outlined text-[18px]">chat_bubble</span>
<span className="">5 Comentários</span>
</button>
</div>
</article>
{/*  Post 2  */}
<article className="bg-deep-navy rounded-xl p-unit-md border border-outline-variant/10 hover:border-tropical-mint/30 transition-all group">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full" data-alt="A small circular avatar portrait of a female user, casual yet professional. Dark background with subtle premium lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7flU9q9a2L8Rm-IQx29I7jxaTLczLvfX_QfOUBDUjadXczi3rWpEKyIFsw0MPdQrT8-pZ9SvBTnYjcRaxvxTVJu_A9iiQQM5JWnNsoLoRe2A1aybYcc5Qrv9wrFN_-ZHCB-PKVxM87uWt2dqMK5Ely6l7TWiRtpjud0q4qauNT391N0yOPSZ4g6LrwywIoI1940aFXnX7Gp-CS9WkUUiKToy0-n3U5CzR_1sYBK4EIYnuxePzjBvHpTHPUzNp5ZL1e6sJZP4nLwE" />
<div>
<h4 className="font-label-md text-label-md text-eggshell">Mariana Silva</h4>
<span className="font-body-sm text-body-sm text-medium-slate text-[11px]">Há 5 horas • Marketing</span>
</div>
</div>
<button className="text-medium-slate hover:text-tropical-mint transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<h3 className="font-headline-sm text-headline-sm text-eggshell mb-2">Dica: Como usar o Instagram para atrair clientes locais</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Descobri uma estratégia muito boa usando hashtags da minha cidade e parcerias com pequenos comércios do bairro. Aumentou minhas vendas de doces em 30% esse mês! Vou deixar o passo a passo aqui embaixo...</p>
<div className="bg-surface-container-low rounded-lg p-3 mb-4 border border-outline-variant/5">
<div className="flex items-center gap-2 text-tropical-mint mb-2">
<span className="material-symbols-outlined text-[16px]">lightbulb</span>
<span className="font-label-md text-label-md text-[11px]">Insight Destacado</span>
</div>
<p className="font-body-sm text-body-sm text-eggshell text-sm">Foque em micro-influenciadores do seu próprio bairro em vez de grandes perfis da cidade.</p>
</div>
<div className="flex items-center gap-4 pt-3 border-t border-outline-variant/10">
<button className="flex items-center gap-1.5 text-tropical-mint hover:text-tropical-mint transition-colors text-sm">
<span className="material-symbols-outlined text-[18px]" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>thumb_up</span>
<span className="">34</span>
</button>
<button className="flex items-center gap-1.5 text-medium-slate hover:text-tropical-mint transition-colors text-sm">
<span className="material-symbols-outlined text-[18px]">chat_bubble</span>
<span className="">18 Comentários</span>
</button>
</div>
</article>
<button className="w-full py-3 rounded-xl border border-medium-slate/30 text-medium-slate font-label-md text-label-md hover:bg-surface-container-high transition-colors">
                        Carregar mais posts
                    </button>
</div>
{/*  Right Sidebar: Top Contributors  */}
<div className="lg:col-span-3">
<div className="bg-deep-navy/80 rounded-xl p-unit-md border border-outline-variant/10 sticky top-24">
<div className="flex items-center justify-between mb-4">
<h2 className="font-headline-sm text-headline-sm text-eggshell">Top Contribuidores</h2>
<span className="material-symbols-outlined text-tropical-mint">workspace_premium</span>
</div>
<div className="flex flex-col gap-4">
{/*  Contributor 1  */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Top User" className="w-9 h-9 rounded-full border border-tropical-mint" data-alt="A small circular avatar of a top contributor, an older gentleman with glasses. Dark background with subtle premium lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD01TlcrBjAfHTJq2hGrmVpApoHyKJQr8ROjZ9YRqyO7PhpslZ5AbHWkdkBw2qsEzDIQpjIJq-3ImPQPwFDwXBqZeX44A0RSHbkbsghvYxUEr-5Ckt-HjC2jCbyxrKig4PLW2ZUCQzVEQjlfB-2cwZf1AkuONGJWIHeK28kdf9LYsOpJ8Ms__4IwHbNdZRKFKIN6K4G9jgfcn4nKZ4RuluQWEKJH5dUfFwdxwtZs8HJDL4lwi8ny9rpYvprVsljm1MRaf1UbZp_0Bg" />
<div className="absolute -top-1 -right-1 bg-tropical-mint text-black w-4 h-4 rounded-full flex items-center justify-center font-bold text-[9px]">1</div>
</div>
<div>
<h4 className="font-label-md text-label-md text-eggshell text-[13px]">Roberto Costa</h4>
<p className="font-body-sm text-body-sm text-medium-slate text-[10px]">Nível: Mestre MEI</p>
</div>
</div>
<span className="font-label-md text-label-md text-tropical-mint text-[11px]">842 pts</span>
</div>
{/*  Contributor 2  */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Top User" className="w-9 h-9 rounded-full border border-outline-variant" data-alt="A small circular avatar of a top contributor, a young woman smiling. Dark background with subtle premium lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNBorOsV6gOHQgqVQhrUYHF45fkJCIdMKRA44zHuA3ZgGtS4RU75YR8yqNMbHYK6Kp2eb1zzUXpO5NMWiiBrrG3roXa2Z2o_9-Yy9864ErHgEQGc52d5iAhs4m8rPpFz2YOVQMJqieMCTfZyb87LYMZeUYGePBvxfJz9uZri-36B0fceXu9p_DQSwaX0RS7BZNNEf102E9n0q7XwqOuJDNLLQUlHDDguuprwxWisCznf-6phxGhysbnqodgtpPOtxaLqRysEi5qig" />
<div className="absolute -top-1 -right-1 bg-surface-container-highest text-eggshell w-4 h-4 rounded-full flex items-center justify-center font-bold text-[9px]">2</div>
</div>
<div>
<h4 className="font-label-md text-label-md text-eggshell text-[13px]">Ana Júlia</h4>
<p className="font-body-sm text-body-sm text-medium-slate text-[10px]">Nível: Especialista</p>
</div>
</div>
<span className="font-label-md text-label-md text-medium-slate text-[11px]">630 pts</span>
</div>
{/*  Contributor 3  */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Top User" className="w-9 h-9 rounded-full border border-outline-variant" data-alt="A small circular avatar of a top contributor, a man with a beard. Dark background with subtle premium lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMyQJrBx-E9NuyNoXBblU_WKi3FCCfDInTZarfm6tvys5PvQ7m2o3MH7kgYMioYDfwniCrRV2E2uIQ7pnHZ3spoWnOIsrQqM0uFm9Xi9per_5tCRsg35hevtmithNlQAULycG8i4OtwA7Km4KgLskSsTdO0yV4kzQpE3s1G7-vRb6MKdjsSb-P7DW4BIJgiswHZKWGQnQIK_7fgP1uIbmbgX5HdfxdgErvraX5cCLLXNy_GtL6hdaNbvMD01QQTVdYCiLwPDE_SyQ" />
<div className="absolute -top-1 -right-1 bg-surface-container-highest text-eggshell w-4 h-4 rounded-full flex items-center justify-center font-bold text-[9px]">3</div>
</div>
<div>
<h4 className="font-label-md text-label-md text-eggshell text-[13px]">Lucas Mendes</h4>
<p className="font-body-sm text-body-sm text-medium-slate text-[10px]">Nível: Especialista</p>
</div>
</div>
<span className="font-label-md text-label-md text-medium-slate text-[11px]">512 pts</span>
</div>
</div>
<button className="w-full mt-4 text-center text-[12px] text-medium-slate hover:text-tropical-mint transition-colors">
                            Ver ranking completo
                        </button>
</div>
</div>
</div>
</div>

    </>
  );
};

export default Comunidade;
