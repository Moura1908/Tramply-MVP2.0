import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface h-screen w-full flex overflow-hidden antialiased selection:bg-tropical-mint selection:text-black overflow-x-hidden">
{/*  Left Panel (Brand/Info) - Hidden on mobile, visible on lg screens  */}
<div className="hidden lg:flex lg:w-[55%] bg-tropical-mint flex-col justify-between p-unit-xl relative z-10 overflow-hidden">
{/*  Decorative abstract shape in background  */}
<div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-white/10 blur-[100px] pointer-events-none"></div>
<div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-black/5 blur-[80px] pointer-events-none"></div>
{/*  Top: Logo  */}
<div className="flex items-center gap-3 relative z-20">
<div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-tropical-mint shadow-lg">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
</div>
<span className="font-headline-md text-black tracking-tight">Tramply</span>
</div>
{/*  Middle: Value Proposition  */}
<div className="relative z-20 max-w-lg">
<h1 className="font-headline-lg text-black mb-6">
                Sua jornada de sucesso como MEI começa aqui.
            </h1>
<p className="font-body-lg text-black/80 mb-12">
                Simplifique a gestão, encontre novas oportunidades e acompanhe o crescimento do seu negócio em uma única plataforma inteligente.
            </p>
{/*  Pillar Icons  */}
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-black">trending_up</span>
</div>
<div>
<h3 className="font-headline-sm text-black mb-1">Crescimento Contínuo</h3>
<p className="font-body-sm text-black/70">Acompanhe suas metas com dashboards precisos e intuitivos.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-black">bolt</span>
</div>
<div>
<h3 className="font-headline-sm text-black mb-1">Agilidade no Dia a Dia</h3>
<p className="font-body-sm text-black/70">Ferramentas focadas na produtividade do microempreendedor.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-black">shield_person</span>
</div>
<div>
<h3 className="font-headline-sm text-black mb-1">Segurança e Controle</h3>
<p className="font-body-sm text-black/70">Mantenha suas informações financeiras organizadas e seguras.</p>
</div>
</div>
</div>
</div>
{/*  Bottom: Footer info  */}
<div className="relative z-20 flex items-center gap-2 text-black/60 font-body-sm">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span className="">Ambiente seguro e criptografado</span>
</div>
</div>
{/*  Right Panel (Form)  */}
<div className="w-full lg:w-[45%] bg-background flex flex-col justify-center h-full relative z-20">
{/*  Mobile Logo (shows only when left panel is hidden)  */}
<div className="lg:hidden absolute top-0 left-0 w-full p-6 flex items-center justify-between border-b border-surface-variant/50 bg-background/80 backdrop-blur-md z-30">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-tropical-mint rounded flex items-center justify-center text-black">
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
</div>
<span className="font-headline-sm text-tropical-mint">Tramply</span>
</div>
</div>
{/*  Scrollable Form Container  */}
<div className="w-full h-full overflow-y-auto pt-24 pb-8 lg:pt-8 px-6 lg:px-16 xl:px-24 flex flex-col justify-center">
<div className="max-w-[420px] w-full mx-auto">
<div className="mb-10">
<h2 className="font-headline-lg lg:font-headline-lg text-eggshell mb-2">Crie sua conta</h2>
<p className="font-body-lg text-medium-slate">Preencha seus dados básicos para começar.</p>
</div>
<form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); navigate('/quiz-inicio'); }}>
{/*  Full Name  */}
<div className="flex flex-col gap-2">
<label className="font-label-md text-medium-slate ml-1" htmlFor="fullName">Nome completo</label>
<div className="relative input-glow rounded-xl transition-all duration-200">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline">person</span>
</div>
<input className="w-full bg-deep-navy border-none rounded-xl pl-12 pr-4 py-3.5 text-eggshell font-body-lg placeholder:text-outline-variant focus:ring-0" id="fullName" placeholder="Digite seu nome" type="text" />
</div>
</div>
{/*  E-mail  */}
<div className="flex flex-col gap-2">
<label className="font-label-md text-medium-slate ml-1" htmlFor="email">E-mail</label>
<div className="relative input-glow rounded-xl transition-all duration-200">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline">mail</span>
</div>
<input className="w-full bg-deep-navy border-none rounded-xl pl-12 pr-4 py-3.5 text-eggshell font-body-lg placeholder:text-outline-variant focus:ring-0" id="email" placeholder="seu@email.com" type="email" />
</div>
</div>
{/*  Password  */}
<div className="flex flex-col gap-2">
<label className="font-label-md text-medium-slate ml-1" htmlFor="password">Senha</label>
<div className="relative input-glow rounded-xl transition-all duration-200">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline">lock</span>
</div>
<input className="w-full bg-deep-navy border-none rounded-xl pl-12 pr-12 py-3.5 text-eggshell font-body-lg placeholder:text-outline-variant focus:ring-0" id="password" placeholder="••••••••" type="password" />
<button className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-tropical-mint transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">visibility_off</span>
</button>
</div>
</div>
{/*  Confirm Password  */}
<div className="flex flex-col gap-2">
<label className="font-label-md text-medium-slate ml-1" htmlFor="confirmPassword">Confirmar senha</label>
<div className="relative input-glow rounded-xl transition-all duration-200">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline">lock_reset</span>
</div>
<input className="w-full bg-deep-navy border-none rounded-xl pl-12 pr-12 py-3.5 text-eggshell font-body-lg placeholder:text-outline-variant focus:ring-0" id="confirmPassword" placeholder="••••••••" type="password" />
</div>
</div>
{/*  Terms Checkbox  */}
<div className="mt-2 mb-4">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5">
<input className="peer appearance-none w-5 h-5 border-[1.5px] border-outline rounded bg-deep-navy checked:bg-tropical-mint checked:border-tropical-mint focus:ring-2 focus:ring-tropical-mint/30 focus:ring-offset-0 transition-colors cursor-pointer" type="checkbox" />
<span className="material-symbols-outlined absolute text-black text-[16px] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity font-bold">check</span>
</div>
<span className="font-body-sm text-on-surface-variant group-hover:text-eggshell transition-colors">
                                Li e aceito a <Link className="text-tropical-mint underline underline-offset-2 hover:text-white transition-colors" to="#">Política de Privacidade</Link>
</span>
</label>
</div>
{/*  Submit Button  */}
<button className="w-full bg-tropical-mint text-black font-label-md py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#6affbf] hover:shadow-[0_0_15px_rgba(79,240,170,0.3)] active:scale-[0.98] transition-all duration-200" type="submit">
                        Criar minha conta
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</form>
{/*  Login Link  */}
<div className="mt-8 text-center">
<p className="font-body-sm text-medium-slate">
                        Já tenho conta — <Link className="text-tropical-mint font-semibold hover:underline hover:text-white transition-colors" to="/login">Entrar</Link>
</p>
</div>
</div>
</div>
</div>
    </div>
  );
};

export default Cadastro;
