import React from 'react';
import { Link } from 'react-router-dom';
import perfilImg from '../assets/images/perfil.jpg';

const PerfilDoEmpreendedor = () => {
  // Cores semânticas por setor
  const SETOR_COLORS = {
    alimentacao: { bg: 'bg-amber-500', text: 'text-amber-500', border: 'border-amber-500', gradient: 'from-amber-500/80 to-amber-900/80' },
    beleza: { bg: 'bg-pink-500', text: 'text-pink-500', border: 'border-pink-500', gradient: 'from-pink-500/80 to-pink-900/80' },
    tecnologia: { bg: 'bg-secondary', text: 'text-secondary', border: 'border-secondary', gradient: 'from-secondary/80 to-blue-900/80' },
    artesanato: { bg: 'bg-violet-500', text: 'text-violet-500', border: 'border-violet-500', gradient: 'from-violet-500/80 to-violet-900/80' },
    saude: { bg: 'bg-emerald-500', text: 'text-emerald-500', border: 'border-emerald-500', gradient: 'from-emerald-500/80 to-emerald-900/80' },
    outros: { bg: 'bg-tropical-mint', text: 'text-tropical-mint', border: 'border-tropical-mint', gradient: 'from-tropical-mint/80 to-green-900/80' },
  };

  // Setor atual da Ana
  const userSector = SETOR_COLORS.alimentacao;

  return (
    <>
      {/* Cover Banner */}
      <div className={`w-full h-32 md:h-48 bg-gradient-to-r ${userSector.gradient} rounded-2xl relative overflow-hidden mb-16 shadow-inner`}>
        {/* Subtle noise/texture over the gradient */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.1%22/%3E%3C/svg%3E')] opacity-30 mix-blend-overlay"></div>
      </div>

      {/* Profile Header (Overlapping Banner) */}
      <div className="flex flex-col md:flex-row items-center md:items-end gap-6 px-4 md:px-8 -mt-28 md:-mt-32 mb-12 relative z-10">
        <div className="relative group cursor-pointer">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-background bg-surface shadow-2xl transition-transform duration-300 group-hover:scale-105">
            <img 
              alt="Ana Silva" 
              className="w-full h-full object-cover" 
              src={perfilImg} 
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-surface rounded-full p-2 border border-surface-variant flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            <span className="material-symbols-outlined text-eggshell text-[16px]">edit</span>
          </div>
        </div>
        
        <div className="text-center md:text-left flex-1 pb-2">
          <h1 className="text-[32px] md:text-[40px] font-bold text-eggshell leading-none mb-3 tracking-tight">Ana Silva</h1>
          <div className="flex justify-center md:justify-start gap-3 mb-4">
            <span className="bg-surface-container text-eggshell px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest border border-surface-variant">
              MEI
            </span>
            <span className={`px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest border border-current ${userSector.text} bg-transparent`}>
              Alimentação / Doces
            </span>
            <span className="bg-tropical-mint text-black px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest">
              Nível Profissional
            </span>
          </div>
        </div>

        <div className="pb-2 w-full md:w-auto">
          <button className="w-full md:w-auto bg-surface border border-surface-variant text-eggshell text-[13px] font-bold uppercase tracking-widest px-8 py-3.5 rounded-xl hover:bg-surface-bright transition-all">
            Editar Perfil
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column - Bio & Dados */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          <div className="bg-transparent">
            <h3 className="text-[18px] font-bold text-eggshell mb-4 uppercase tracking-widest">Apresentação</h3>
            <p className="text-[16px] text-medium-slate leading-relaxed">
              Empreendedora no ramo da confeitaria há 2 anos. Comecei vendendo na faculdade e hoje atendo eventos e encomendas corporativas. Busco aprimorar minha gestão financeira para expandir a equipe nos próximos meses. Meu objetivo é transformar paixão em negócio sustentável, com foco em crescimento contínuo e gestão eficiente.
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-8 border border-surface-variant">
            <h3 className="text-[18px] font-bold text-eggshell mb-8 uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-medium-slate">storefront</span> Ficha Cadastral
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-medium-slate mb-1">Razão Social</p>
                <p className="text-[16px] font-medium text-eggshell">Ana Silva Confeitaria MEI</p>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-medium-slate mb-1">CNPJ</p>
                <p className="text-[16px] font-mono text-eggshell">12.345.678/0001-90</p>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-medium-slate mb-1">Início das Atividades</p>
                <p className="text-[16px] font-medium text-eggshell">15/04/2022</p>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-medium-slate mb-1">Status Receita</p>
                <div className="inline-flex mt-1 items-center gap-1.5 bg-emerald-500/20 text-emerald-500 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-widest border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Ativo
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column - Conquistas */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[18px] font-bold text-eggshell uppercase tracking-widest">Jornada</h3>
              <span className="text-[11px] font-bold uppercase tracking-widest text-tropical-mint">4 Conquistas</span>
            </div>

            <div className="flex flex-col gap-4">
              {/* Conquista 1 */}
              <div className="bg-gradient-to-r from-tropical-mint/10 to-transparent border-l-4 border-l-tropical-mint rounded-r-xl p-4 flex items-center gap-4">
                <span className="material-symbols-outlined text-tropical-mint text-[24px]">workspace_premium</span>
                <div>
                  <p className="text-[14px] font-bold text-eggshell leading-tight mb-1">Mestre da Precificação</p>
                  <p className="text-[11px] font-medium text-medium-slate uppercase tracking-widest">Trilha Concluída</p>
                </div>
              </div>

              {/* Conquista 2 */}
              <div className="bg-gradient-to-r from-secondary/10 to-transparent border-l-4 border-l-secondary rounded-r-xl p-4 flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary text-[24px]">handshake</span>
                <div>
                  <p className="text-[14px] font-bold text-eggshell leading-tight mb-1">Networker Pro</p>
                  <p className="text-[11px] font-medium text-medium-slate uppercase tracking-widest">3 Eventos Atendidos</p>
                </div>
              </div>

              {/* Conquista 3 */}
              <div className="bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-l-amber-500 rounded-r-xl p-4 flex items-center gap-4">
                <span className="material-symbols-outlined text-amber-500 text-[24px]">insights</span>
                <div>
                  <p className="text-[14px] font-bold text-eggshell leading-tight mb-1">Visão de Futuro</p>
                  <p className="text-[11px] font-medium text-medium-slate uppercase tracking-widest">Simulador Utilizado</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default PerfilDoEmpreendedor;
