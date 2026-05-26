import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleNav, toggleAside, isSidebarCollapsed }) => {
  const navigate = useNavigate();

  return (
    <header className={`bg-background/90 dark:bg-background/90 backdrop-blur-md fixed top-0 right-0 w-full transition-all duration-300 h-16 flex justify-between items-center px-margin-desktop z-40 border-b border-surface-variant/20 ${isSidebarCollapsed ? 'md:w-[calc(100%-80px)]' : 'md:w-[calc(100%-260px)]'}`}>
      <button
        onClick={toggleNav}
        className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-medium-slate hover:text-tropical-mint hover:bg-surface-container-high transition-all"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      <div className="flex-1 max-w-md mx-unit-lg hidden md:block">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-medium-slate group-focus-within:text-tropical-mint transition-colors">search</span>
          <input
            className="w-full bg-deep-navy border-none rounded-full py-2 pl-10 pr-4 text-body-sm font-body-sm text-on-background focus:ring-1 focus:ring-tropical-mint focus:outline-none transition-all placeholder:text-medium-slate/70"
            placeholder="Buscar..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-unit-md ml-auto">
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-medium-slate hover:text-tropical-mint hover:bg-surface-container-high transition-all active:scale-95">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button
          onClick={() => navigate('/configuracoes')}
          className="w-10 h-10 rounded-full flex items-center justify-center text-medium-slate hover:text-tropical-mint hover:bg-surface-container-high transition-all active:scale-95"
        >
          <span className="material-symbols-outlined">settings</span>
        </button>
        <button
          onClick={toggleAside}
          className="w-10 h-10 rounded-full flex items-center justify-center text-tropical-mint bg-tropical-mint/10 border border-tropical-mint/30 hover:bg-tropical-mint/20 hover:shadow-[0_0_8px_rgba(79,240,170,0.3)] transition-all active:scale-95 relative ml-2 group"
          title="Mentora IA"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-error rounded-full border-2 border-background"></div>
        </button>
        <div
          onClick={() => navigate('/perfil')}
          className="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant/30 overflow-hidden ml-2 cursor-pointer relative group"
        >
          <img
            alt="MEI Avatar"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnV_N5HI0nE6ZeQgT2z0y-fCAxxVwzpMknqEPJ5hItBcF8Ywk_ZQkTxaEYl6mYZPGRGr6kn1taOfHvmd6Otrq-ddZM_cGmfe1PVIK4v63XUcFAKxq_dAviNZJa8k78TKWzzKto3EFLbbSOkFDg3G-Rmpvm8D3gL-rA-ekvzcd0vWhy_vaY6lxArqwWdIWplTZ9t49PtayamB2Rw4VS1LUTxWXU2i3nvROtd_3x1LnCQDSLT1WiwOs9Zmo_Fbox-YCv-hBd1vZr4Ec"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
