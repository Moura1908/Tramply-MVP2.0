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
    <nav className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-all duration-300 ${isCollapsed ? 'w-[80px]' : 'w-[260px]'} fixed inset-y-0 left-0 bg-surface flex flex-col border-r border-outline-variant z-50 overflow-y-auto overflow-x-hidden`}>
      {/* Brand Header */}
      <div className={`p-unit-lg flex items-center mb-4 transition-all duration-300 ${isCollapsed ? 'justify-center px-0 gap-0' : 'gap-unit-sm'}`}>
        <div className="w-10 h-10 min-w-[40px] bg-tropical-mint rounded-lg flex items-center justify-center text-black font-bold text-xl cursor-pointer" onClick={() => navigate('/dashboard')}>
          T
        </div>
        {!isCollapsed && (
          <div className="overflow-hidden whitespace-nowrap">
            <h1 className="text-[22px] font-bold text-tropical-mint" style={{ letterSpacing: '-0.5px' }}>Tramply</h1>
            <span className="inline-block text-[11px] font-semibold text-tropical-mint bg-tropical-mint/10 px-2 py-0.5 rounded mt-0.5">MEI Hub</span>
          </div>
        )}
      </div>

      {/* Collapse Toggle Button (Desktop Only) */}
      <button 
        onClick={toggleCollapse} 
        className="hidden md:flex absolute -right-3 top-6 w-6 h-6 bg-surface-container-high border border-outline-variant rounded-full items-center justify-center text-medium-slate hover:text-eggshell hover:bg-surface-container-highest z-10 transition-colors shadow-md"
      >
        <span className="material-symbols-outlined text-[16px]">{isCollapsed ? 'chevron_right' : 'chevron_left'}</span>
      </button>

      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-1 px-3 min-h-0 py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={close}
            title={isCollapsed ? item.label : ''}
            className={({ isActive }) =>
              `flex items-center gap-unit-md py-3 rounded-lg duration-200 transition-all overflow-hidden ${isCollapsed ? 'justify-center px-0' : 'px-4'} ${
                isActive
                  ? 'text-tropical-mint font-bold border-l-[3px] border-tropical-mint bg-tropical-mint/[0.08]'
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
                  <span className="text-[13px] font-medium whitespace-nowrap">{item.label}</span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* CTA Bottom */}
      <div className="p-unit-md mt-auto shrink-0 border-t border-outline-variant/30">
        <button
          onClick={() => { close?.(); navigate('/minhas-trilhas'); }}
          title={isCollapsed ? "Nova Trilha" : ""}
          className={`bg-tropical-mint text-black font-bold text-[13px] py-3 rounded-xl hover:bg-primary-container transition-all flex items-center justify-center gap-2 uppercase tracking-wide ${isCollapsed ? 'w-10 h-10 px-0 mx-auto rounded-xl' : 'w-full'}`}
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          {!isCollapsed && "Nova Trilha"}
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
