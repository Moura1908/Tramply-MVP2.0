import React from 'react';

const PostCard = ({ 
  userAvatar, 
  userName, 
  time, 
  category, 
  title, 
  description, 
  highlightText, 
  likes, 
  comments,
  liked = false
}) => {
  return (
    <article className="bg-deep-navy rounded-xl p-unit-md border border-outline-variant/10 hover:border-tropical-mint/30 transition-all group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img 
            alt={`Avatar de ${userName}`} 
            loading="lazy"
            className="w-10 h-10 rounded-full object-cover" 
            src={userAvatar} 
          />
          <div>
            <h4 className="font-label-md text-label-md text-eggshell">{userName}</h4>
            <span className="font-body-sm text-body-sm text-medium-slate text-[11px]">{time} • {category}</span>
          </div>
        </div>
        <button className="text-medium-slate hover:text-tropical-mint transition-colors" aria-label="Opções do post">
          <span className="material-symbols-outlined" aria-hidden="true">more_vert</span>
        </button>
      </div>
      
      <h3 className="font-headline-sm text-headline-sm text-eggshell mb-2">{title}</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 whitespace-pre-line">
        {description}
      </p>

      {highlightText && (
        <div className="bg-surface-container-low rounded-lg p-3 mb-4 border border-outline-variant/5">
          <div className="flex items-center gap-2 text-tropical-mint mb-2">
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">lightbulb</span>
            <span className="font-label-md text-label-md text-[11px]">Insight Destacado</span>
          </div>
          <p className="font-body-sm text-body-sm text-eggshell text-sm">{highlightText}</p>
        </div>
      )}

      <div className="flex items-center gap-4 pt-3 border-t border-outline-variant/10">
        <button className={`flex items-center gap-1.5 transition-colors text-sm ${liked ? 'text-tropical-mint' : 'text-medium-slate hover:text-tropical-mint'}`}>
          <span className="material-symbols-outlined text-[18px]" style={liked ? { fontVariationSettings: "'FILL' 1" } : {}} aria-hidden="true">thumb_up</span>
          <span className="">{likes}</span>
        </button>
        <button className="flex items-center gap-1.5 text-medium-slate hover:text-tropical-mint transition-colors text-sm">
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">chat_bubble</span>
          <span className="">{comments} Comentários</span>
        </button>
      </div>
    </article>
  );
};

export default PostCard;
