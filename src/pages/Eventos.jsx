import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/Cards/EventCard';
import evento1Img from '../assets/images/evento2.jpg';
import evento2Img from '../assets/images/evento2.jpg';
import evento3Img from '../assets/images/evento3.jpg';
import eventoDestaqueImg from '../assets/images/evento-destaque.jpg';

const Eventos = () => {

  const events = [
    {
      id: 1,
      imageSrc: evento1Img,
      altText: "Estudantes em frente a laptop",
      date: "20 Out",
      typeIcon: "videocam",
      title: "Como criar uma marca forte no Instagram",
      description: "Estratégias práticas para microempreendedores se destacarem na rede social e atraírem mais clientes usando conteúdo orgânico.",
      timeOrLocationIcon: "schedule",
      timeOrLocationText: "15:00 - 16:30"
    },
    {
      id: 2,
      imageSrc: evento2Img,
      altText: "Pessoas em evento de networking",
      date: "25 Out",
      typeIcon: "location_on",
      title: "Feira de Conexões: MEIs de Tecnologia",
      description: "Um evento presencial focado em networking para prestadores de serviço em TI, design e desenvolvimento web.",
      timeOrLocationIcon: "location_city",
      timeOrLocationText: "Rio de Janeiro, RJ"
    },
    {
      id: 3,
      imageSrc: evento3Img,
      altText: "Workshop com palestrante",
      date: "02 Nov",
      typeIcon: "videocam",
      title: "Oficina: Formalização e Benefícios do MEI",
      description: "Entenda todos os seus direitos, deveres e como aproveitar ao máximo os benefícios previdenciários e de crédito.",
      timeOrLocationIcon: "schedule",
      timeOrLocationText: "10:00 - 12:00"
    }
  ];

  return (
    <div className="pb-8 md:pb-0">

      {/* Header Section */}
      <section className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-8">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-eggshell mb-2">Eventos e Workshops</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Expanda seus conhecimentos, conecte-se com outros microempreendedores e descubra novas oportunidades de negócios em nossa rede de eventos.</p>
        </div>
        {/* Filters */}
        <div className="flex items-center gap-3 bg-surface-container p-1 rounded-xl border border-outline-variant/20 self-start md:self-auto">
          <button className="px-4 py-2 rounded-lg bg-surface-container-highest text-tropical-mint font-label-md text-label-md border border-tropical-mint/20 transition-all">Todos</button>
          <button className="px-4 py-2 rounded-lg text-medium-slate hover:text-eggshell hover:bg-surface-container-high font-label-md text-label-md transition-all">Online</button>
          <button className="px-4 py-2 rounded-lg text-medium-slate hover:text-eggshell hover:bg-surface-container-high font-label-md text-label-md transition-all">Presencial</button>
        </div>
      </section>

      {/* Featured Event Bento */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="md:col-span-2 relative rounded-[20px] overflow-hidden bg-deep-navy border border-outline-variant/20 group h-[400px]">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Palestrante em palco com platéia engajada" 
              loading="lazy"
              className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500" 
              src={eventoDestaqueImg} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent"></div>
          </div>
          <div className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-end">
            <div className="inline-flex items-center gap-2 bg-tropical-mint/10 text-tropical-mint px-3 py-1 rounded-full border border-tropical-mint/20 w-max mb-4">
              <span className="material-symbols-outlined text-sm" aria-hidden="true">stars</span>
              <span className="font-label-md text-label-md">Destaque da Semana</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-eggshell mb-2">Masterclass: Gestão Financeira para MEIs</h3>
            <p className="text-on-surface-variant font-body-lg text-body-lg mb-6 max-w-xl">Aprenda a organizar o fluxo de caixa, precificar seus serviços corretamente e preparar seu negócio para o crescimento sustentável com a mentora Ana Silva.</p>
            <div className="flex flex-wrap items-center gap-4 justify-between">
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-medium-slate">
                  <span className="material-symbols-outlined" aria-hidden="true">calendar_today</span>
                  <span className="font-label-md text-label-md">15 Out, 2023</span>
                </div>
                <div className="flex items-center gap-2 text-medium-slate">
                  <span className="material-symbols-outlined" aria-hidden="true">schedule</span>
                  <span className="font-label-md text-label-md">19:00 - 21:00</span>
                </div>
                <div className="flex items-center gap-2 text-tropical-mint">
                  <span className="material-symbols-outlined" aria-hidden="true">videocam</span>
                  <span className="font-label-md text-label-md">Online (Ao Vivo)</span>
                </div>
              </div>
              <button className="bg-tropical-mint text-black font-label-md text-label-md font-bold px-6 py-3 rounded-full hover:shadow-md transition-all">Inscrever-se</button>
            </div>
          </div>
        </div>

        {/* Next Up Mini Card */}
        <div className="bg-surface-container rounded-[20px] p-6 border border-outline-variant/20 flex flex-col hover:border-medium-slate/50 transition-colors h-[400px]">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-headline-sm text-headline-sm text-eggshell">Próximos Dias</h4>
            <span className="material-symbols-outlined text-medium-slate" aria-hidden="true">trending_up</span>
          </div>
          <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-2">
            {/* Mini Item 1 */}
            <div className="bg-surface-container-high p-3 rounded-xl border border-outline-variant/10 group cursor-pointer hover:border-tropical-mint/30 transition-all">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-tropical-mint font-bold uppercase tracking-wider">Amanhã</span>
                <span className="material-symbols-outlined text-sm text-medium-slate" aria-hidden="true">location_on</span>
              </div>
              <h5 className="font-body-sm text-body-sm font-bold text-eggshell mb-1 group-hover:text-tropical-mint transition-colors">Meetup: Empreendedores Locais</h5>
              <p className="text-xs text-on-surface-variant">São Paulo, SP • 18:30</p>
            </div>
            {/* Mini Item 2 */}
            <div className="bg-surface-container-high p-3 rounded-xl border border-outline-variant/10 group cursor-pointer hover:border-tropical-mint/30 transition-all">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-medium-slate font-bold uppercase tracking-wider">12 Out</span>
                <span className="material-symbols-outlined text-sm text-medium-slate" aria-hidden="true">videocam</span>
              </div>
              <h5 className="font-body-sm text-body-sm font-bold text-eggshell mb-1 group-hover:text-tropical-mint transition-colors">Webinar: Marketing Digital Básico</h5>
              <p className="text-xs text-on-surface-variant">Online • 14:00</p>
            </div>
            {/* Mini Item 3 */}
            <div className="bg-surface-container-high p-3 rounded-xl border border-outline-variant/10 group cursor-pointer hover:border-tropical-mint/30 transition-all">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-medium-slate font-bold uppercase tracking-wider">14 Out</span>
                <span className="material-symbols-outlined text-sm text-medium-slate" aria-hidden="true">videocam</span>
              </div>
              <h5 className="font-body-sm text-body-sm font-bold text-eggshell mb-1 group-hover:text-tropical-mint transition-colors">Q&A: Dúvidas sobre Impostos</h5>
              <p className="text-xs text-on-surface-variant">Online • 10:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-headline-md text-headline-md text-eggshell">Todos os Eventos</h3>
          <div className="flex items-center gap-2 text-medium-slate text-sm cursor-pointer hover:text-eggshell transition-colors">
            <span className="">Ordenar por: Data</span>
            <span className="material-symbols-outlined text-sm" aria-hidden="true">keyboard_arrow_down</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Eventos;
