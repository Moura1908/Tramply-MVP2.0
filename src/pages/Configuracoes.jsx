import React from 'react';
import { Link } from 'react-router-dom';

const Configuracoes = () => {
  return (
    <>

<div className="mb-10">
<h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">27 - Tramply — Configurações</h1>
<p className="font-body-lg text-body-lg text-medium-slate">Gerencie suas preferências, segurança e assinatura.</p>
</div>
{/*  Custom Tab Navigation  */}
<div className="flex gap-2 mb-8 border-b border-surface-container-highest pb-2 overflow-x-auto">
<button className="px-6 py-2 rounded-full bg-surface-container-highest text-tropical-mint font-label-md text-label-md border border-tropical-mint/30 shadow-[0_0_8px_rgba(79,240,170,0.1)]">Conta</button>
<button className="px-6 py-2 rounded-full text-medium-slate font-label-md text-label-md hover:bg-surface-container-highest transition-colors">Notificações</button>
<button className="px-6 py-2 rounded-full text-medium-slate font-label-md text-label-md hover:bg-surface-container-highest transition-colors">Segurança</button>
<button className="px-6 py-2 rounded-full text-medium-slate font-label-md text-label-md hover:bg-surface-container-highest transition-colors">Assinatura</button>
</div>
{/*  Bento Grid Layout for Settings  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/*  Conta Section  */}
<section className="bg-surface-container-high rounded-xl p-unit-lg border border-surface-container-highest flex flex-col gap-6">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-tropical-mint" data-icon="manage_accounts">manage_accounts</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Preferências da Conta</h2>
</div>
<div className="flex items-center justify-between">
<div>
<h3 className="font-body-lg text-body-lg text-on-surface">Modo Escuro</h3>
<p className="font-body-sm text-body-sm text-medium-slate">Ajuste a aparência do sistema</p>
</div>
<div className="relative inline-block w-11 h-6 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 opacity-0" id="dark-mode-toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="dark-mode-toggle"></label>
</div>
</div>
<hr className="border-surface-container-highest" />
<div>
<label className="block font-label-md text-label-md text-medium-slate mb-2">Idioma da Interface</label>
<div className="relative">
<select className="w-full bg-surface-container-highest border border-surface-container-highest rounded-xl px-4 py-3 font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-tropical-mint focus:ring-1 focus:ring-tropical-mint appearance-none">
<option value="pt-BR">Português (Brasil)</option>
<option value="en-US">English (US)</option>
<option value="es-ES">Español</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-medium-slate pointer-events-none" data-icon="expand_more">expand_more</span>
</div>
</div>
</section>
{/*  Assinatura Section  */}
<section className="bg-surface-container-high rounded-xl p-unit-lg border border-surface-container-highest flex flex-col gap-6 relative overflow-hidden">
{/*  Abstract bg pattern  */}
<div className="absolute -right-10 -top-10 w-40 h-40 bg-tropical-mint/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex items-center gap-3 mb-2 z-10">
<span className="material-symbols-outlined text-tropical-mint" data-icon="workspace_premium">workspace_premium</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Plano Atual</h2>
</div>
<div className="bg-surface-container-highest rounded-xl p-6 border border-tropical-mint/20 z-10">
<p className="font-label-md text-label-md text-medium-slate uppercase tracking-wider mb-1">Seu Plano</p>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Plano MEI Grátis</h3>
<ul className="flex flex-col gap-3 mb-6">
<li className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-tropical-mint text-sm" data-icon="check_circle">check_circle</span> Emissão básica de notas
                        </li>
<li className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-tropical-mint text-sm" data-icon="check_circle">check_circle</span> Dashboard financeiro simples
                        </li>
</ul>
</div>
<button className="mt-auto w-full bg-tropical-mint text-black font-label-md text-label-md py-3 rounded-full hover:shadow-[0_0_12px_rgba(79,240,170,0.4)] transition-all z-10">
                    Upgrade to Pro
                </button>
</section>
{/*  Notificações Section (Spans full width below)  */}
<section className="bg-surface-container-high rounded-xl p-unit-lg border border-surface-container-highest md:col-span-2">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-tropical-mint" data-icon="notifications_active">notifications_active</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Canais de Notificação</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Email Toggle  */}
<div className="bg-surface-container-highest rounded-xl p-4 flex items-center justify-between border border-transparent hover:border-surface-container-lowest transition-colors">
<div className="flex items-center gap-3">
<div className="p-2 bg-surface rounded-lg text-medium-slate"><span className="material-symbols-outlined" data-icon="mail">mail</span></div>
<span className="font-body-lg text-body-lg text-on-surface">Email</span>
</div>
<div className="relative inline-block w-11 h-6 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 opacity-0" id="email-toggle" name="toggle-email" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="email-toggle"></label>
</div>
</div>
{/*  SMS Toggle  */}
<div className="bg-surface-container-highest rounded-xl p-4 flex items-center justify-between border border-transparent hover:border-surface-container-lowest transition-colors">
<div className="flex items-center gap-3">
<div className="p-2 bg-surface rounded-lg text-medium-slate"><span className="material-symbols-outlined" data-icon="sms">sms</span></div>
<span className="font-body-lg text-body-lg text-on-surface">SMS Alerts</span>
</div>
<div className="relative inline-block w-11 h-6 align-middle select-none">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 opacity-0" id="sms-toggle" name="toggle-sms" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="sms-toggle"></label>
</div>
</div>
{/*  Push Toggle  */}
<div className="bg-surface-container-highest rounded-xl p-4 flex items-center justify-between border border-transparent hover:border-surface-container-lowest transition-colors">
<div className="flex items-center gap-3">
<div className="p-2 bg-surface rounded-lg text-medium-slate"><span className="material-symbols-outlined" data-icon="ad_units">ad_units</span></div>
<span className="font-body-lg text-body-lg text-on-surface">Push Mobile</span>
</div>
<div className="relative inline-block w-11 h-6 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 opacity-0" id="push-toggle" name="toggle-push" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="push-toggle"></label>
</div>
</div>
</div>
</section>
</div>

    </>
  );
};

export default Configuracoes;
