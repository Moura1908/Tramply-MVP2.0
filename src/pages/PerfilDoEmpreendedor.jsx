import React from 'react';
import { Link } from 'react-router-dom';

const PerfilDoEmpreendedor = () => {
  return (
    <>

{/*  Profile Header  */}
<div className="flex flex-col md:flex-row items-center md:items-start gap-unit-lg mb-unit-lg">
<div className="relative group cursor-pointer">
<div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-deep-navy shadow-[0_0_0_2px_#4FF0AA] transition-all duration-300 hover:shadow-[0_0_15px_rgba(79,240,170,0.5)]">
<img alt="Ana Silva" className="w-full h-full object-cover" data-alt="A close-up, high-quality portrait of a female micro-entrepreneur named Ana. She looks confident and approachable, smiling slightly. The lighting is bright and modern, illuminating her face clearly against a subtle, dark minimalist background that fits a premium functional tech aesthetic. Deep blacks, crisp details, and professional warmth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlaEQBx2JYOWxp1kfYXP2rQPzwcPfwXWWzVqaiekFcD63KwWR_7dhHWANfnMuxvRyl9FbP22oUoKkiNLsQJRD2BDkRZhns-EouxEXWDglIQXz5ZHWzEj-uAQsWn0iBGWCQEOBF-cFfZro77s9aKkiYU7Tegj6OFpwM9_k7PPnsaYGVHKLBvsaG1p2oIIwVMebTsEdUNQfVRzLOEN0V_Wn1RCsnfzWN4mAUAhvobcqB8Jp6S-DCGKj8Bzl8eZ9HIZ49xUfCH1qQ9as" />
</div>
<div className="absolute bottom-0 right-0 bg-surface-container-high rounded-full p-2 border border-surface-variant flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-medium-slate text-sm">edit</span>
</div>
</div>
<div className="text-center md:text-left flex-1">
<div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Ana Silva</h1>
<div className="flex justify-center md:justify-start gap-2">
<span className="bg-surface-container-highest text-tropical-mint px-3 py-1 rounded-full font-label-md text-label-md border border-tropical-mint/20">MEI</span>
<span className="bg-secondary-container/50 text-secondary px-3 py-1 rounded-full font-label-md text-label-md border border-secondary/20">Nível: Profissional</span>
</div>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-6">
                        "Transformando paixão em negócio sustentável. Foco em crescimento contínuo e gestão eficiente."
                    </p>
<button className="bg-tropical-mint text-black font-label-md text-label-md px-6 py-2.5 rounded-full hover:shadow-[0_0_15px_rgba(79,240,170,0.3)] transition-all">
                        Editar Perfil
                    </button>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-unit-md md:gap-gutter">
{/*  Meus Dados (Business Info)  */}
<div className="md:col-span-8 glass-card rounded-xl p-unit-md md:p-unit-lg hover-glow transition-all duration-300">
<div className="flex items-center gap-3 mb-6 border-b border-surface-variant pb-4">
<span className="material-symbols-outlined text-medium-slate">business_center</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Meus Dados</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<p className="font-label-md text-label-md text-medium-slate mb-1">RAZÃO SOCIAL</p>
<p className="font-body-lg text-body-lg text-eggshell">Ana Silva Confeitaria MEI</p>
</div>
<div>
<p className="font-label-md text-label-md text-medium-slate mb-1">CNPJ</p>
<p className="font-body-lg text-body-lg text-eggshell">12.345.678/0001-90</p>
</div>
<div>
<p className="font-label-md text-label-md text-medium-slate mb-1">INÍCIO DAS ATIVIDADES</p>
<p className="font-body-lg text-body-lg text-eggshell">15/04/2022</p>
</div>
<div>
<p className="font-label-md text-label-md text-medium-slate mb-1">CATEGORIA</p>
<p className="font-body-lg text-body-lg text-eggshell">Alimentação / Doces</p>
</div>
</div>
</div>
{/*  Minha Bio  */}
<div className="md:col-span-4 glass-card rounded-xl p-unit-md hover-glow transition-all duration-300">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-medium-slate">id_card</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Minha Bio</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Empreendedora no ramo da confeitaria há 2 anos. Comecei vendendo na faculdade e hoje atendo eventos e encomendas corporativas. Busco aprimorar minha gestão financeira para expandir a equipe nos próximos meses.
                    </p>
</div>
{/*  Conquistas (Badges)  */}
<div className="md:col-span-12 glass-card rounded-xl p-unit-md md:p-unit-lg hover-glow transition-all duration-300">
<div className="flex items-center justify-between mb-6 border-b border-surface-variant pb-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-medium-slate">military_tech</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Conquistas</h3>
</div>
<span className="font-label-md text-label-md text-medium-slate">4 Desbloqueadas</span>
</div>
<div className="flex flex-wrap gap-4">
{/*  Badge 1  */}
<div className="bg-surface-container flex items-center gap-3 px-4 py-3 rounded-lg border border-surface-variant hover:border-tropical-mint/50 transition-colors">
<div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center text-tropical-mint">
<span className="material-symbols-outlined">payments</span>
</div>
<div>
<p className="font-label-md text-label-md text-eggshell">Mestre da Precificação</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[10px]">Trilha Concluída</p>
</div>
</div>
{/*  Badge 2  */}
<div className="bg-surface-container flex items-center gap-3 px-4 py-3 rounded-lg border border-surface-variant hover:border-tropical-mint/50 transition-colors">
<div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">hub</span>
</div>
<div>
<p className="font-label-md text-label-md text-eggshell">Networker</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[10px]">3 Eventos Atendidos</p>
</div>
</div>
{/*  Badge 3  */}
<div className="bg-surface-container flex items-center gap-3 px-4 py-3 rounded-lg border border-surface-variant hover:border-tropical-mint/50 transition-colors">
<div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center text-tertiary-fixed-dim">
<span className="material-symbols-outlined">trending_up</span>
</div>
<div>
<p className="font-label-md text-label-md text-eggshell">Crescimento Focado</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[10px]">Simulador Utilizado</p>
</div>
</div>
</div>
</div>
</div>

    </>
  );
};

export default PerfilDoEmpreendedor;
