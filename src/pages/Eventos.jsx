import React from 'react';
import { Link } from 'react-router-dom';

const Eventos = () => {
  return (
    <>

{/*  Header Section  */}
<section className="flex flex-col gap-unit-md md:flex-row md:items-end md:justify-between">
<div>
<h2 className="font-headline-lg text-headline-lg text-eggshell mb-2">Eventos e Workshops</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Expanda seus conhecimentos, conecte-se com outros microempreendedores e descubra novas oportunidades de negócios em nossa rede de eventos.</p>
</div>
{/*  Filters  */}
<div className="flex items-center gap-3 bg-surface-container p-1 rounded-xl border border-outline-variant/20 self-start md:self-auto">
<button className="px-4 py-2 rounded-lg bg-surface-container-highest text-tropical-mint font-label-md text-label-md border border-tropical-mint/20 shadow-[0_0_8px_rgba(79,240,170,0.1)] transition-all">Todos</button>
<button className="px-4 py-2 rounded-lg text-medium-slate hover:text-eggshell hover:bg-surface-container-high font-label-md text-label-md transition-all">Online</button>
<button className="px-4 py-2 rounded-lg text-medium-slate hover:text-eggshell hover:bg-surface-container-high font-label-md text-label-md transition-all">Presencial</button>
</div>
</section>
{/*  Featured Event Bento  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-unit-md">
<div className="md:col-span-2 relative rounded-[20px] overflow-hidden bg-deep-navy border border-outline-variant/20 group h-[400px]">
<div className="absolute inset-0 z-0">
<img alt="Featured Event" className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500" data-alt="A large, modern conference hall bathed in dramatic, warm lighting. A charismatic speaker is on stage presenting to a highly engaged audience of professionals. The atmosphere is energetic and professional, capturing a high-end business seminar tailored for modern entrepreneurs. Deep blue shadows contrast with bright stage lights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmUMzQGNNY22nHSkcvYO0aHsUgfCR3cQe7h-1RYRWZ-9C43XJWav8cSxOA12t3HKHqZPfKqQn3xHyPRrQogCALiAXYeM2xEFM4_22IzJ12QrT0v4GghLsY69Sz58OIFZE0P4-kMn7zzjp-fl7rO_9XV68JgtVaVns5L2QXJA610BOnMQgfZrUZwxbxAHE9Se85trGRaFfTFOwppN1Au0zRps_ZkfNN6TuIx3Kw5VgWnvGxFtvWX30adZfGqCt_Vi6kvnpkei0eT3k" />
<div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent"></div>
</div>
<div className="absolute inset-0 z-10 p-unit-lg flex flex-col justify-end">
<div className="inline-flex items-center gap-2 bg-tropical-mint/10 text-tropical-mint px-3 py-1 rounded-full border border-tropical-mint/20 w-max mb-4">
<span className="material-symbols-outlined text-sm">stars</span>
<span className="font-label-md text-label-md">Destaque da Semana</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-eggshell mb-2">Masterclass: Gestão Financeira para MEIs</h3>
<p className="text-on-surface-variant font-body-lg text-body-lg mb-6 max-w-xl">Aprenda a organizar o fluxo de caixa, precificar seus serviços corretamente e preparar seu negócio para o crescimento sustentável com a mentora Ana Silva.</p>
<div className="flex flex-wrap items-center gap-4 justify-between">
<div className="flex gap-4">
<div className="flex items-center gap-2 text-medium-slate">
<span className="material-symbols-outlined">calendar_today</span>
<span className="font-label-md text-label-md">15 Out, 2023</span>
</div>
<div className="flex items-center gap-2 text-medium-slate">
<span className="material-symbols-outlined">schedule</span>
<span className="font-label-md text-label-md">19:00 - 21:00</span>
</div>
<div className="flex items-center gap-2 text-tropical-mint">
<span className="material-symbols-outlined">videocam</span>
<span className="font-label-md text-label-md">Online (Ao Vivo)</span>
</div>
</div>
<button className="bg-tropical-mint text-black font-label-md text-label-md font-bold px-6 py-3 rounded-full hover:shadow-[0_0_12px_rgba(79,240,170,0.4)] transition-all">Inscrever-se</button>
</div>
</div>
</div>
{/*  Next Up Mini Card  */}
<div className="bg-surface-container rounded-[20px] p-unit-md border border-outline-variant/20 flex flex-col hover:border-medium-slate/50 transition-colors h-[400px]">
<div className="flex items-center justify-between mb-4">
<h4 className="font-headline-sm text-headline-sm text-eggshell">Próximos Dias</h4>
<span className="material-symbols-outlined text-medium-slate">trending_up</span>
</div>
<div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-2">
{/*  Mini Item 1  */}
<div className="bg-surface-container-high p-3 rounded-xl border border-outline-variant/10 group cursor-pointer hover:border-tropical-mint/30 transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-tropical-mint font-bold uppercase tracking-wider">Amanhã</span>
<span className="material-symbols-outlined text-sm text-medium-slate">location_on</span>
</div>
<h5 className="font-body-sm text-body-sm font-bold text-eggshell mb-1 group-hover:text-tropical-mint transition-colors">Meetup: Empreendedores Locais</h5>
<p className="text-xs text-on-surface-variant">São Paulo, SP • 18:30</p>
</div>
{/*  Mini Item 2  */}
<div className="bg-surface-container-high p-3 rounded-xl border border-outline-variant/10 group cursor-pointer hover:border-tropical-mint/30 transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-medium-slate font-bold uppercase tracking-wider">12 Out</span>
<span className="material-symbols-outlined text-sm text-medium-slate">videocam</span>
</div>
<h5 className="font-body-sm text-body-sm font-bold text-eggshell mb-1 group-hover:text-tropical-mint transition-colors">Webinar: Marketing Digital Básico</h5>
<p className="text-xs text-on-surface-variant">Online • 14:00</p>
</div>
{/*  Mini Item 3  */}
<div className="bg-surface-container-high p-3 rounded-xl border border-outline-variant/10 group cursor-pointer hover:border-tropical-mint/30 transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-medium-slate font-bold uppercase tracking-wider">14 Out</span>
<span className="material-symbols-outlined text-sm text-medium-slate">videocam</span>
</div>
<h5 className="font-body-sm text-body-sm font-bold text-eggshell mb-1 group-hover:text-tropical-mint transition-colors">Q&amp;A: Dúvidas sobre Impostos</h5>
<p className="text-xs text-on-surface-variant">Online • 10:00</p>
</div>
</div>
</div>
</section>
{/*  Event Grid  */}
<section>
<div className="flex items-center justify-between mb-unit-md">
<h3 className="font-headline-md text-headline-md text-eggshell">Todos os Eventos</h3>
<div className="flex items-center gap-2 text-medium-slate text-sm cursor-pointer hover:text-eggshell transition-colors">
<span className="">Ordenar por: Data</span>
<span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-unit-md">
{/*  Card 1  */}
<div className="bg-surface-container rounded-xl border border-outline-variant/20 overflow-hidden flex flex-col group hover:border-tropical-mint/50 transition-all duration-300">
<div className="h-40 bg-surface-container-high relative overflow-hidden">
<img alt="Event Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" data-alt="A close-up of a diverse group of young professionals sitting around a sleek wooden table, intensely focused on a glowing laptop screen. The environment is a modern, dark-themed coworking space with subtle neon blue accents. The mood is collaborative and innovative." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLWnMIy_m4LlvNAPhm71wYmwVwySPVKmDnQ1cTLU-ckTkC_MyaemGfJ52UYwhjm-z85WOzQguXC3cyJ_DW74mt4b6fEGJkp3eaCEIphRXMzzntLsCAxVoWSAalku233kinpARqqDpR0l8LJP9qtMfw4xSl6lVEaQDFMLu1MvBLGkQWngF80lmSbwsmvk0hOIj6qLIvY5kbXIUv1h3mSbEIBwgNgd7AoXFwy5k1XURLFyMfxz7gHqi4aH7sTOjpba0hp9VgOVrTihU" />
<div className="absolute top-3 left-3 bg-deep-navy/80 backdrop-blur-sm text-eggshell px-2 py-1 rounded text-xs font-bold border border-outline-variant/30">
                                20 Out
                            </div>
<div className="absolute top-3 right-3 bg-surface-container-highest/80 backdrop-blur-sm text-medium-slate p-1.5 rounded-full border border-outline-variant/30">
<span className="material-symbols-outlined text-sm block">videocam</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h4 className="font-headline-sm text-headline-sm text-eggshell mb-2 group-hover:text-tropical-mint transition-colors">Como criar uma marca forte no Instagram</h4>
<p className="text-on-surface-variant text-sm line-clamp-2 mb-4">Estratégias práticas para microempreendedores se destacarem na rede social e atraírem mais clientes usando conteúdo orgânico.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-outline-variant/10">
<div className="flex items-center gap-1.5 text-medium-slate">
<span className="material-symbols-outlined text-sm">schedule</span>
<span className="text-xs font-bold">15:00 - 16:30</span>
</div>
<button className="text-tropical-mint text-sm font-bold hover:underline">Registrar</button>
</div>
</div>
</div>
{/*  Card 2  */}
<div className="bg-surface-container rounded-xl border border-outline-variant/20 overflow-hidden flex flex-col group hover:border-tropical-mint/50 transition-all duration-300">
<div className="h-40 bg-surface-container-high relative overflow-hidden">
<img alt="Event Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" data-alt="A lively networking event in a spacious, industrial-chic loft. Warm pendant lights hang from high ceilings, illuminating groups of casually dressed professionals holding drinks and chatting animatedly. The background is slightly blurred to focus on the dynamic interaction in the foreground." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc_Y0u2nIcMv_fb8p51r_IRcSLVbDbgwnRmQOorK8P4bei8dGDPdXaHrikKPJyBLmRplldNQ30ShQJPxH5Wlx5mZyjuJLk7-TgBsvT09hc_BWaXZ5q-V1BxeE7JTeTuMYyZi1IZHR0NMHqYgr-ikbRmAduN_RPCp0osp-RLeWPm1rPvHaq0XbJQAfA5tW9QvW0IBpFWq3s1-mlzqnOfSC11quRAnWPjQMkJHcB9gVnXt0QK5oALVixVbyV_0n5T7BTXDpvMomKIIM" />
<div className="absolute top-3 left-3 bg-deep-navy/80 backdrop-blur-sm text-eggshell px-2 py-1 rounded text-xs font-bold border border-outline-variant/30">
                                25 Out
                            </div>
<div className="absolute top-3 right-3 bg-surface-container-highest/80 backdrop-blur-sm text-medium-slate p-1.5 rounded-full border border-outline-variant/30">
<span className="material-symbols-outlined text-sm block">location_on</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h4 className="font-headline-sm text-headline-sm text-eggshell mb-2 group-hover:text-tropical-mint transition-colors">Feira de Conexões: MEIs de Tecnologia</h4>
<p className="text-on-surface-variant text-sm line-clamp-2 mb-4">Um evento presencial focado em networking para prestadores de serviço em TI, design e desenvolvimento web.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-outline-variant/10">
<div className="flex items-center gap-1.5 text-medium-slate">
<span className="material-symbols-outlined text-sm">location_city</span>
<span className="text-xs font-bold">Rio de Janeiro, RJ</span>
</div>
<button className="text-tropical-mint text-sm font-bold hover:underline">Registrar</button>
</div>
</div>
</div>
{/*  Card 3  */}
<div className="bg-surface-container rounded-xl border border-outline-variant/20 overflow-hidden flex flex-col group hover:border-tropical-mint/50 transition-all duration-300">
<div className="h-40 bg-surface-container-high relative overflow-hidden">
<img alt="Event Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" data-alt="A focused workshop setting. A presenter stands beside a large digital whiteboard displaying colorful charts and graphs. The audience, seen from behind, sits in ergonomic chairs, taking notes on tablets and laptops. The lighting is bright and crisp, emphasizing a clean, modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIDpGSjbaEQh5OrBrkUAPKJ2xX74k8BHR1OwKduCZCiQcxOSrjtXbHja4e0c9-6ZIYgyhLv36Xyik9bALOSyYLqwl3PG8d9R2ZtiPtMta04jpSxXANcr_Oi12PO28P7J62Wve2dWByQM2plg8jKrong15OwqHq2NEEiSUYdU-y75LMcoBwadFBNdJtyyL74uuQH3yrmw0MyjnjZ3NijdwBXM9mE9O7Y1XIKDY0Jhst0mJaC8gLzpEW6u92_1G3j62SkFIIyc42YGk" />
<div className="absolute top-3 left-3 bg-deep-navy/80 backdrop-blur-sm text-eggshell px-2 py-1 rounded text-xs font-bold border border-outline-variant/30">
                                02 Nov
                            </div>
<div className="absolute top-3 right-3 bg-surface-container-highest/80 backdrop-blur-sm text-medium-slate p-1.5 rounded-full border border-outline-variant/30">
<span className="material-symbols-outlined text-sm block">videocam</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h4 className="font-headline-sm text-headline-sm text-eggshell mb-2 group-hover:text-tropical-mint transition-colors">Oficina: Formalização e Benefícios do MEI</h4>
<p className="text-on-surface-variant text-sm line-clamp-2 mb-4">Entenda todos os seus direitos, deveres e como aproveitar ao máximo os benefícios previdenciários e de crédito.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-outline-variant/10">
<div className="flex items-center gap-1.5 text-medium-slate">
<span className="material-symbols-outlined text-sm">schedule</span>
<span className="text-xs font-bold">10:00 - 12:00</span>
</div>
<button className="text-tropical-mint text-sm font-bold hover:underline">Registrar</button>
</div>
</div>
</div>
</div>
</section>

    </>
  );
};

export default Eventos;
