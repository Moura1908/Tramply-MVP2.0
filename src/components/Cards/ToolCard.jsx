import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({ 
  icon, 
  category, 
  title, 
  description, 
  badgeText, 
  url = '#' 
}) => {
  return (
    <div className="bg-deep-navy rounded-xl p-6 border border-outline-variant/20 hover:border-tropical-mint/50 transition-all group flex flex-col">
      <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-4 border border-outline-variant/20 group-hover:border-tropical-mint/30 transition-colors">
        <span className="material-symbols-outlined text-medium-slate group-hover:text-tropical-mint transition-colors" aria-hidden="true">
          {icon}
        </span>
      </div>
      <div className="mb-2">
        <span className="text-medium-slate font-label-md text-label-md">{category}</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-eggshell mb-2">{title}</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">{description}</p>
      <div className="mt-auto flex items-center justify-between">
        <span className="bg-surface-container text-medium-slate font-label-md text-label-md px-2 py-1 rounded">{badgeText}</span>
        <Link to={url} className="text-tropical-mint font-label-md text-label-md hover:underline flex items-center gap-1" aria-label={`Acessar a ferramenta ${title}`}>
          Acessar <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;
