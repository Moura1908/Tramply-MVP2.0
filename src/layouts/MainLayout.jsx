import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MentoraDrawer from '../components/MentoraDrawer';

const MainLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <div className="bg-background text-on-background font-body-lg antialiased min-h-screen flex flex-col w-full">
      <Header
        toggleNav={() => setIsNavOpen(!isNavOpen)}
        toggleAside={() => setIsAsideOpen(!isAsideOpen)}
        isSidebarCollapsed={isSidebarCollapsed}
      />
      <Sidebar 
        isOpen={isNavOpen} 
        close={() => setIsNavOpen(false)} 
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <MentoraDrawer isOpen={isAsideOpen} close={() => setIsAsideOpen(false)} />

      {/* Overlay to close menus on mobile */}
      {(isNavOpen || isAsideOpen) && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => { setIsNavOpen(false); setIsAsideOpen(false); }}
        />
      )}

      {/* Main Content Canvas */}
      <main className={`transition-all duration-300 mt-16 p-margin-mobile md:p-margin-desktop min-h-[calc(100vh-64px)] ${isSidebarCollapsed ? 'md:ml-[80px]' : 'md:ml-[260px]'}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
