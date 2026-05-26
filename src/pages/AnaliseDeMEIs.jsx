import React from 'react';
import { Link } from 'react-router-dom';

const AnaliseDeMEIs = () => {
  return (
    <>

<div className="px-margin-desktop pb-margin-desktop max-w-container-max mx-auto">
<div className="mb-unit-lg">
<h2 className="font-headline-lg text-headline-lg mb-2">Oportunidades</h2>
<p className="text-on-surface-variant font-body-lg">Explore casos, ferramentas e conecte-se com outros empreendedores.</p>
</div>
{/*  In-page Navigation Tabs  */}
<div className="flex gap-8 border-b border-outline-variant/30 mb-unit-lg">
<button className="pb-3 border-b-2 border-tropical-mint text-tropical-mint font-label-md text-label-md">Análise de MEIs</button>
<Link to="/comunidade" className="pb-3 border-b-2 border-transparent text-medium-slate hover:text-eggshell transition-colors font-label-md text-label-md">Comunidade</Link>
<Link to="/ferramentas" className="pb-3 border-b-2 border-transparent text-medium-slate hover:text-eggshell transition-colors font-label-md text-label-md">Ferramentas</Link>
<Link to="/eventos" className="pb-3 border-b-2 border-transparent text-medium-slate hover:text-eggshell transition-colors font-label-md text-label-md">Eventos</Link>
<Link to="/bancos" className="pb-3 border-b-2 border-transparent text-medium-slate hover:text-eggshell transition-colors font-label-md text-label-md">Bancos</Link>
</div>
{/*  Filters  */}
<div className="flex flex-wrap gap-4 mb-unit-lg">
<div className="relative min-w-[200px]">
<select className="w-full bg-deep-navy border border-outline-variant rounded-lg py-2.5 px-4 text-eggshell font-body-sm focus:border-tropical-mint focus:ring-1 focus:ring-tropical-mint appearance-none">
<option value="">Setor</option>
<option value="alimentacao">Alimentação</option>
<option value="varejo">Varejo</option>
<option value="servicos">Serviços</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-medium-slate pointer-events-none">expand_more</span>
</div>
<div className="relative min-w-[200px]">
<select className="w-full bg-deep-navy border border-outline-variant rounded-lg py-2.5 px-4 text-eggshell font-body-sm focus:border-tropical-mint focus:ring-1 focus:ring-tropical-mint appearance-none">
<option value="">Tipo de Caso</option>
<option value="sucesso">Sucesso</option>
<option value="aprendizado">Aprendizado</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-medium-slate pointer-events-none">expand_more</span>
</div>
<div className="relative flex-1 min-w-[250px]">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-medium-slate">search</span>
<input className="w-full bg-deep-navy border border-outline-variant rounded-lg py-2.5 pl-10 pr-4 text-eggshell font-body-sm focus:border-tropical-mint focus:ring-1 focus:ring-tropical-mint placeholder-medium-slate/70" placeholder="Buscar casos..." type="text" />
</div>
</div>
{/*  Grid of Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-unit-md">
{/*  Card 1  */}
<article className="bg-[#001242] rounded-xl border border-transparent hover:border-tropical-mint/50 transition-all duration-300 overflow-hidden flex flex-col group relative">
<div className="h-40 overflow-hidden relative">
<img alt="Empreendedor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A confident small business owner standing inside their modern, well-lit retail shop or cafe. The atmosphere is optimistic and professional. The image is color-graded to suit a dark-themed UI, with deep shadows but clear focus on the subject. The style reflects a high-end editorial portrait of an entrepreneur." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDu0opSi3kPL9fbKPVsKMavHibIcKUQ-YLEyWFpPdVODSmoAhns7RgVyS_V3_mDGujkgKE3eAuFN6mu0QdnG5SieWwwYcMBw9nlyBkrXIxculAajPVKhc9FAPiQk0D-uAeVJ-VCvExukXvcw5fL_2iu5pnZD7EzTwf3qG2u4lZ11yyETiR8w7dlS2K6HU5bnqJj17NhrKVzZs8-0s0D-eWpXBsZBW7CER7WBTxI6YugDPAQ7TZ9N0CctSiq30elhZABRdJ5-9I1XI" />
<div className="absolute top-3 left-3 bg-tropical-mint/20 border border-tropical-mint text-tropical-mint px-2 py-1 rounded font-label-md text-[10px] uppercase tracking-wider backdrop-blur-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">trending_up</span> Sucesso
                        </div>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-sm text-headline-sm text-eggshell">Carlos S.</h3>
<span className="text-medium-slate font-label-md text-label-md text-[10px]">Alimentação</span>
</div>
<p className="text-medium-slate font-body-sm text-[12px] flex items-center gap-1 mb-3">
<span className="material-symbols-outlined text-[14px]">location_on</span> São Paulo, SP
                        </p>
<p className="text-on-surface-variant font-body-sm line-clamp-2 mb-4 flex-1">
                            Como Carlos triplicou o faturamento de sua padaria artesanal otimizando o fluxo de caixa.
                        </p>
<Link to="/caso-de-estudo-mei" className="mt-auto w-full py-2.5 rounded-full border-[1.5px] border-medium-slate text-medium-slate hover:bg-medium-slate/10 transition-colors font-label-md text-label-md text-center block">Ler caso completo</Link>
</div>
</article>
{/*  Card 2  */}
<article className="bg-[#001242] rounded-xl border border-transparent hover:border-tropical-mint/50 transition-all duration-300 overflow-hidden flex flex-col group relative">
<div className="h-40 overflow-hidden relative">
<img alt="Empreendedora" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A focused female entrepreneur working late at a desk in a dimly lit, modern workshop or studio. The lighting is cinematic, with cool blue tones and warm task lighting, fitting perfectly into a dark-themed UI. She looks thoughtful, perhaps reviewing documents or a tablet, representing a moment of learning or challenge in business." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpfmiytNKO-LWEdAnWzT33ACox4Y7iQNcreaFS_m8vDGa2V6rdN2aSl78vOIPBSvSFRiwSLH0ivLimERRwf4zejXTD2LeHqmI5riBHvWKg9-Meg5t91B6rDEmHYk9jCLdeuwxnqic9gWtEcDVm2-qtwZPBKKdZmkjoGn3a08e3A4iIeeMBHaSdDA9RNd6ZBb_zMwtx-aRxKdr3JFm48tk_d3ccwlsVXYBr58tlkRdNsspB-RRAf3_d9qAJm2T0Eeq0eP2yC5llyX0" />
<div className="absolute top-3 left-3 bg-error/20 border border-error text-error px-2 py-1 rounded font-label-md text-[10px] uppercase tracking-wider backdrop-blur-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">lightbulb</span> Aprendizado
                        </div>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-sm text-headline-sm text-eggshell">Mariana T.</h3>
<span className="text-medium-slate font-label-md text-label-md text-[10px]">Serviços</span>
</div>
<p className="text-medium-slate font-body-sm text-[12px] flex items-center gap-1 mb-3">
<span className="material-symbols-outlined text-[14px]">location_on</span> Curitiba, PR
                        </p>
<p className="text-on-surface-variant font-body-sm line-clamp-2 mb-4 flex-1">
                            Os erros comuns na precificação de serviços de design e como Mariana ajustou sua tabela.
                        </p>
<Link to="/caso-de-estudo-mei" className="mt-auto w-full py-2.5 rounded-full border-[1.5px] border-medium-slate text-medium-slate hover:bg-medium-slate/10 transition-colors font-label-md text-label-md text-center block">Ler caso completo</Link>
</div>
</article>
{/*  Card 3  */}
<article className="bg-[#001242] rounded-xl border border-transparent hover:border-tropical-mint/50 transition-all duration-300 overflow-hidden flex flex-col group relative">
<div className="h-40 overflow-hidden relative">
<img alt="Equipe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A close-up of a small team reviewing inventory or digital plans in a modern retail space or warehouse. The image conveys teamwork and strategic planning. The visual style is premium and cinematic, with deep shadows and high contrast, tailored specifically to integrate seamlessly into a sophisticated dark-mode digital platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJZ4qjokqtq4HnAq0kPevnWHbn9ULUGBZ9gyZTKIDcWsmdSzeF31a3BtvhFv4i0V0OruQ_brg0LLWZAxiKl8LGkZkir1zpA2eeEJ3RyzgGtkzFM9uKp_IVkCid7ptpkPR-bafhfdUQmF4bswGm0keZYfIeORu424LsFCZ7YsSC6aHV9zwChOlDFZGbAaXjqBlqwyXJ9zWlleAzn4sgmKBgH47AEyuIfrtkfYo6kmcf45w35B8_Z5vfAcu3jfhxl6RfrtOKS4Ql9CU" />
<div className="absolute top-3 left-3 bg-tropical-mint/20 border border-tropical-mint text-tropical-mint px-2 py-1 rounded font-label-md text-[10px] uppercase tracking-wider backdrop-blur-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">trending_up</span> Sucesso
                        </div>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-sm text-headline-sm text-eggshell">Roberto L.</h3>
<span className="text-medium-slate font-label-md text-label-md text-[10px]">Varejo</span>
</div>
<p className="text-medium-slate font-body-sm text-[12px] flex items-center gap-1 mb-3">
<span className="material-symbols-outlined text-[14px]">location_on</span> Belo Horizonte, MG
                        </p>
<p className="text-on-surface-variant font-body-sm line-clamp-2 mb-4 flex-1">
                            A transição do físico para o digital: Como a loja do Roberto aumentou vendas online em 200%.
                        </p>
<Link to="/caso-de-estudo-mei" className="mt-auto w-full py-2.5 rounded-full border-[1.5px] border-medium-slate text-medium-slate hover:bg-medium-slate/10 transition-colors font-label-md text-label-md text-center block">Ler caso completo</Link>
</div>
</article>
</div>
</div>

    </>
  );
};

export default AnaliseDeMEIs;
