import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginBg from '../assets/images/login-bg.jpg';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface min-h-screen flex font-body-lg overflow-x-hidden">
      {/* Left Panel - Hero Image (Hidden on Mobile) */}
      <div className="hidden md:flex relative w-1/2 lg:w-[55%]">
        {/* Unsplash Image - Real MEI working */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${loginBg})` }}
        ></div>
        
        {/* Dark Gradient Overlay for text readability and mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        <div className="absolute inset-0 bg-background/30 mix-blend-multiply"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end p-12 lg:p-16 h-full w-full">
          <h1 className="font-headline-lg text-[40px] text-eggshell font-bold tracking-tight mb-4 leading-tight">
            Tramply
          </h1>
          <p className="font-body-lg text-[22px] text-eggshell/90 max-w-md font-medium leading-relaxed">
            Seu negócio merece crescer com método.
          </p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full md:w-1/2 lg:w-[45%] bg-background flex flex-col min-h-screen relative z-20">
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 max-w-md mx-auto w-full py-12">
          
          {/* Mobile Brand (Only visible on small screens) */}
          <div className="md:hidden mb-12">
            <h1 className="font-headline-lg text-[32px] text-eggshell font-bold tracking-tight mb-2">Tramply</h1>
            <p className="text-[16px] text-medium-slate">Seu negócio merece crescer com método.</p>
          </div>

          <div className="mb-10">
            <h2 className="text-[28px] font-bold text-eggshell tracking-tight mb-2">Acesse sua conta</h2>
            <p className="text-[15px] text-medium-slate">Entre para gerenciar seu crescimento.</p>
          </div>

          <form className="space-y-6 flex flex-col" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
            
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold uppercase tracking-widest text-medium-slate" htmlFor="email">E-mail</label>
              <input 
                className="bg-surface border border-outline-variant text-eggshell rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-tropical-mint focus:border-tropical-mint transition-all placeholder:text-outline" 
                id="email" 
                placeholder="seu@email.com" 
                required 
                type="email" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-[12px] font-bold uppercase tracking-widest text-medium-slate" htmlFor="password">Senha</label>
                <Link className="text-[13px] font-medium text-tropical-mint hover:text-eggshell transition-all" to="#">Esqueceu a senha?</Link>
              </div>
              <div className="relative">
                <input 
                  className="bg-surface border border-outline-variant text-eggshell rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-tropical-mint focus:border-tropical-mint transition-all placeholder:text-outline" 
                  id="password" 
                  placeholder="••••••••" 
                  required 
                  type="password" 
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-medium-slate hover:text-eggshell transition-colors" type="button">
                  <span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span>
                </button>
              </div>
            </div>

            <button type="submit" className="w-full bg-tropical-mint text-black font-bold text-[15px] py-4 rounded-xl hover:bg-primary-container active:scale-[0.98] transition-all mt-4 flex items-center justify-center shadow-lg shadow-tropical-mint/10">
              Entrar no Hub
            </button>
            
            <div className="flex items-center gap-4 py-4">
              <div className="flex-1 h-px bg-surface-variant"></div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-medium-slate">ou</span>
              <div className="flex-1 h-px bg-surface-variant"></div>
            </div>
            
            <Link to="/cadastro" className="w-full border-2 border-surface-variant text-eggshell font-bold text-[15px] py-4 rounded-xl hover:bg-surface-bright transition-all flex items-center justify-center">
              Criar conta gratuita
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
