import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, close, isCollapsed, toggleCollapse }) => {
  const navigate = useNavigate();

  const navItems = [
    { to: '/dashboard',    icon: 'dashboard',    label: 'Dashboard',     fill: true },
    { to: '/minhas-trilhas', icon: 'auto_stories', label: 'Trilhas',       fill: false },
    { to: '/simulador',    icon: 'calculate',    label: 'Simulador',     fill: false },
    { to: '/oportunidades', icon: 'work',         label: 'Oportunidades', fill: false },
    { to: '/perfil',       icon: 'person',       label: 'Perfil',        fill: false },
  ];

  return (
    <nav className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-all duration-300 ${isCollapsed ? 'w-[80px]' : 'w-[260px]'} h-screen fixed left-0 top-0 bg-surface-container-lowest dark:bg-surface-container-lowest flex flex-col border-r border-outline-variant/10 z-50`}>
      {/* Brand Header */}
      <div className={`p-unit-lg flex items-center mb-4 transition-all duration-300 ${isCollapsed ? 'justify-center px-0 gap-0' : 'gap-unit-sm'}`}>
        <div className="w-10 h-10 min-w-[40px] bg-tropical-mint rounded-lg flex items-center justify-center text-black font-bold text-xl shadow-[0_0_15px_rgba(79,240,170,0.3)] cursor-pointer" onClick={() => navigate('/dashboard')}>
          T
        </div>
        {!isCollapsed && (
          <div className="overflow-hidden whitespace-nowrap">
            <h1 className="font-headline-md text-headline-md font-bold text-tropical-mint tracking-tight">Tramply</h1>
            <p className="font-label-md text-label-md text-medium-slate">MEI Hub</p>
          </div>
        )}
      </div>

      {/* Collapse Toggle Button (Desktop Only) */}
      <button 
        onClick={toggleCollapse} 
        className="hidden md:flex absolute -right-3 top-6 w-6 h-6 bg-surface-container-high border border-outline-variant/30 rounded-full items-center justify-center text-medium-slate hover:text-eggshell hover:bg-surface-container-highest z-10 transition-colors shadow-md"
      >
        <span className="material-symbols-outlined text-[16px]">{isCollapsed ? 'chevron_right' : 'chevron_left'}</span>
      </button>

      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-1 px-3">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={close}
            title={isCollapsed ? item.label : ''}
            className={({ isActive }) =>
              `flex items-center gap-unit-md py-3 rounded-lg duration-200 transition-all overflow-hidden ${isCollapsed ? 'justify-center px-0' : 'px-4'} ${
                isActive
                  ? 'text-eggshell font-bold border-r-2 border-tropical-mint bg-surface-container-low rounded-l-lg'
                  : 'text-medium-slate hover:text-eggshell transition-colors hover:bg-surface-container-high'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className="material-symbols-outlined shrink-0"
                  style={isActive || item.fill ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className="font-label-md text-label-md whitespace-nowrap">{item.label}</span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* CTA Bottom */}
      <div className="p-unit-md mt-auto">
        <button
          onClick={() => { close?.(); navigate('/minhas-trilhas'); }}
          title={isCollapsed ? "Nova Trilha" : ""}
          className={`bg-tropical-mint text-black font-label-md text-label-md py-3 rounded-full hover:shadow-[0_0_12px_rgba(79,240,170,0.4)] transition-all flex items-center justify-center gap-2 ${isCollapsed ? 'w-10 h-10 px-0 mx-auto' : 'w-full'}`}
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          {!isCollapsed && "Nova Trilha"}
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
