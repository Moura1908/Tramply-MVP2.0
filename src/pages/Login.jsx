import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface h-screen overflow-hidden flex font-body-lg overflow-x-hidden">
{/*  Left Panel (55%)  */}
<div className="hidden md:flex flex-col w-[55%] bg-tropical-mint text-deep-navy relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary-container/30 pointer-events-none"></div>
<div className="flex-1 flex flex-col items-center justify-center p-unit-xl z-10">
<h1 className="font-headline-lg text-headline-lg mb-unit-sm text-center">Tramply</h1>
<p className="font-body-lg text-body-lg text-center max-w-md mb-unit-xl opacity-80">Sua bússola para empreender com mais segurança</p>
<div className="flex gap-unit-lg mt-unit-lg">
<div className="flex flex-col items-center gap-unit-xs text-center w-24">
<div className="w-12 h-12 rounded-full bg-deep-navy/10 flex items-center justify-center mb-unit-xs">
<span className="material-symbols-outlined text-deep-navy" data-icon="explore" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
</div>
<span className="font-label-md text-label-md">Direcionamento</span>
</div>
<div className="flex flex-col items-center gap-unit-xs text-center w-24">
<div className="w-12 h-12 rounded-full bg-deep-navy/10 flex items-center justify-center mb-unit-xs">
<span className="material-symbols-outlined text-deep-navy" data-icon="calculate" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>calculate</span>
</div>
<span className="font-label-md text-label-md">Simulador Financeiro</span>
</div>
<div className="flex flex-col items-center gap-unit-xs text-center w-24">
<div className="w-12 h-12 rounded-full bg-deep-navy/10 flex items-center justify-center mb-unit-xs">
<span className="material-symbols-outlined text-deep-navy" data-icon="work" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
</div>
<span className="font-label-md text-label-md">Oportunidades</span>
</div>
</div>
</div>
{/*  Abstract Decoration  */}
<div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-container rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="absolute -top-32 -right-32 w-96 h-96 bg-white/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
</div>
{/*  Right Panel (45% on Desktop, 100% on Mobile)  */}
<div className="w-full md:w-[45%] bg-deep-navy flex flex-col h-full relative z-20 shadow-2xl">
<div className="flex-1 flex flex-col justify-center px-margin-mobile md:px-unit-xl max-w-md mx-auto w-full">
{/*  Mobile Brand  */}
<div className="md:hidden text-center mb-unit-xl">
<h1 className="font-headline-lg-mobile text-headline-lg-mobile text-tropical-mint mb-unit-xs">Tramply</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sua bússola para empreender com mais segurança</p>
</div>
<div className="mb-unit-lg">
<h2 className="font-headline-md text-headline-md text-eggshell mb-unit-xs">Bem-vindo(a) de volta</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Acesse sua conta para continuar.</p>
</div>
<form className="space-y-unit-md flex flex-col" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
<div className="flex flex-col gap-unit-xs">
<label className="font-label-md text-label-md text-medium-slate" htmlFor="email">E-mail</label>
<input className="bg-surface-container-low border border-outline-variant/30 text-eggshell rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-tropical-mint focus:border-tropical-mint font-body-sm transition-all placeholder:text-on-surface-variant/50" id="email" placeholder="seu@email.com" required type="email" />
</div>
<div className="flex flex-col gap-unit-xs">
<div className="flex justify-between items-center">
<label className="font-label-md text-label-md text-medium-slate" htmlFor="password">Senha</label>
<Link className="font-label-md text-label-md text-tropical-mint hover:underline transition-all" to="#">Esqueci minha senha</Link>
</div>
<div className="relative">
<input className="bg-surface-container-low border border-outline-variant/30 text-eggshell rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-tropical-mint focus:border-tropical-mint font-body-sm transition-all placeholder:text-on-surface-variant/50" id="password" placeholder="••••••••" required type="password" />
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-medium-slate hover:text-eggshell transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span>
</button>
</div>
</div>
<button type="submit" className="w-full bg-tropical-mint text-black font-body-lg py-3 rounded-full hover:shadow-[0_0_8px_rgba(79,240,170,0.3)] transition-all mt-unit-sm flex items-center justify-center">
                    Entrar
                </button>
<div className="flex items-center gap-4 py-unit-sm">
<div className="flex-1 h-px bg-outline-variant/30"></div>
<span className="font-label-md text-label-md text-on-surface-variant">ou</span>
<div className="flex-1 h-px bg-outline-variant/30"></div>
</div>
<Link to="/cadastro" className="w-full border-2 border-medium-slate text-eggshell font-body-lg py-3 rounded-full hover:bg-medium-slate/10 transition-all flex items-center justify-center">
                    Criar conta grátis
                </Link>
</form>
</div>

</div>
    </div>
  );
};

export default Login;
