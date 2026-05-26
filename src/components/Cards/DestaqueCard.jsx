import React from 'react';

const DestaqueCard = ({ 
  imageSrc, 
  tag, 
  tagColorClass = 'bg-amber-500 text-black', 
  title, 
  description, 
  footerText 
}) => {
  return (
    <div className="bg-surface rounded-2xl overflow-hidden border border-surface-variant hover:border-tropical-mint/30 transition-colors group flex flex-col">
      <div className="h-48 relative overflow-hidden bg-surface-container-highest">
        <img 
          alt={title} 
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 text-transparent" 
          src={imageSrc} 
        />
        <div className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${tagColorClass}`}>
          {tag}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h4 className="text-[18px] text-eggshell font-bold mb-3 leading-snug">{title}</h4>
        <p className="text-[14px] text-medium-slate mb-6 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-variant">
          <span className="text-[11px] font-bold text-outline uppercase tracking-widest">{footerText}</span>
          <span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint transition-colors" aria-label="Salvar">
            bookmark_border
          </span>
        </div>
      </div>
    </div>
  );
};

export default DestaqueCard;
