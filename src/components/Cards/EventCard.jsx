import React from 'react';

const EventCard = ({ 
  imageSrc, 
  altText, 
  date, 
  typeIcon, 
  title, 
  description, 
  timeOrLocationIcon, 
  timeOrLocationText 
}) => {
  return (
    <div className="bg-surface-container rounded-xl border border-outline-variant/20 overflow-hidden flex flex-col group hover:border-tropical-mint/50 transition-all duration-300">
      <div className="h-40 bg-surface-container-high relative overflow-hidden">
        <img 
          alt={altText} 
          loading="lazy"
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" 
          src={imageSrc} 
        />
        <div className="absolute top-3 left-3 bg-deep-navy/80 backdrop-blur-sm text-eggshell px-2 py-1 rounded text-xs font-bold border border-outline-variant/30">
          {date}
        </div>
        <div className="absolute top-3 right-3 bg-surface-container-highest/80 backdrop-blur-sm text-medium-slate p-1.5 rounded-full border border-outline-variant/30">
          <span className="material-symbols-outlined text-sm block" aria-hidden="true">{typeIcon}</span>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h4 className="font-headline-sm text-headline-sm text-eggshell mb-2 group-hover:text-tropical-mint transition-colors">{title}</h4>
        <p className="text-on-surface-variant text-sm line-clamp-2 mb-4">{description}</p>
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-outline-variant/10">
          <div className="flex items-center gap-1.5 text-medium-slate">
            <span className="material-symbols-outlined text-sm" aria-hidden="true">{timeOrLocationIcon}</span>
            <span className="text-xs font-bold">{timeOrLocationText}</span>
          </div>
          <button className="text-tropical-mint text-sm font-bold hover:underline">Registrar</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
