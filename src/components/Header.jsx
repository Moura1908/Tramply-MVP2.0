import React from 'react';
import { useNavigate } from 'react-router-dom';
import avatarDefault from '../assets/images/avatar-default.png';

const Header = ({ toggleNav, toggleAside, isSidebarCollapsed }) => {
  const navigate = useNavigate();

  return (
    <header className={`bg-background/95 backdrop-blur-md fixed top-0 right-0 w-full transition-all duration-300 h-16 flex justify-between items-center px-margin-desktop z-40 border-b border-outline-variant ${isSidebarCollapsed ? 'md:w-[calc(100%-80px)]' : 'md:w-[calc(100%-260px)]'}`}>
      <button
        onClick={toggleNav}
        className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-medium-slate hover:text-eggshell hover:bg-surface-container-high transition-all"
        aria-label="Abrir menu de navegação"
      >
        <span className="material-symbols-outlined" aria-hidden="true">menu</span>
      </button>

      <div className="flex-1 max-w-md mx-unit-lg hidden md:block">
        <form className="relative group" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search-input" className="sr-only">Buscar</label>
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-medium-slate group-focus-within:text-tropical-mint transition-colors" aria-hidden="true">search</span>
          <input
            id="search-input"
            name="search"
            className="w-full bg-surface border border-outline-variant rounded-full py-2 pl-10 pr-4 text-body-sm font-body-sm text-on-background focus:ring-1 focus:ring-tropical-mint focus:border-tropical-mint focus:outline-none transition-all placeholder:text-medium-slate/50"
            placeholder="Buscar..."
            type="text"
          />
        </form>
      </div>

      <div className="flex items-center gap-unit-md ml-auto">
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-medium-slate hover:text-eggshell hover:bg-surface-container-high transition-all active:scale-95" aria-label="Notificações">
          <span className="material-symbols-outlined" aria-hidden="true">notifications</span>
        </button>
        <button
          onClick={() => navigate('/configuracoes')}
          className="w-10 h-10 rounded-full flex items-center justify-center text-medium-slate hover:text-eggshell hover:bg-surface-container-high transition-all active:scale-95"
          aria-label="Configurações"
        >
          <span className="material-symbols-outlined" aria-hidden="true">settings</span>
        </button>
        <button
          onClick={toggleAside}
          className="w-10 h-10 rounded-full flex items-center justify-center text-tropical-mint bg-tropical-mint/10 border border-tropical-mint/30 hover:bg-tropical-mint/20 transition-all active:scale-95 relative ml-2 group"
          aria-label="Abrir Mentora IA"
          title="Mentora IA"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">smart_toy</span>
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-error rounded-full border-2 border-background"></div>
        </button>
        <div
          onClick={() => navigate('/perfil')}
          className="w-10 h-10 rounded-full bg-surface-container-highest border-2 border-tropical-mint overflow-hidden ml-2 cursor-pointer relative group"
          role="button"
          tabIndex="0"
          aria-label="Meu Perfil"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') navigate('/perfil');
          }}
        >
          <img
            alt="Avatar do Usuário"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            src={avatarDefault}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
