
import React, { useState } from 'react';
import { TELAR_LEVELS } from '../constants';

const Levels: React.FC = () => {
  const [showTechnical, setShowTechnical] = useState(false);

  return (
    <section id="niveles" className="relative py-24 px-6 md:px-12 bg-stone-900 overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-1.5 border border-amber-500/30 rounded-full text-amber-500 text-xs font-black uppercase tracking-widest">Protocolo de Crecimiento</div>
          <h2 className="text-4xl md:text-6xl font-black text-white serif italic">Estructura de <span className="text-amber-500">Abundancia</span></h2>
          <p className="text-stone-400 max-w-2xl mx-auto">Un modelo matemático basado en la relación de capitalización social 8:1.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-4 px-6 py-2 text-[10px] font-black uppercase tracking-widest text-stone-500 border-b border-stone-800">
              <span>Nivel</span>
              <span className="text-center">Aportación</span>
              <span className="text-center">Factor</span>
              <span className="text-right">Recurso Final</span>
            </div>
            {TELAR_LEVELS.map((level) => (
              <div key={level.id} className="grid grid-cols-4 items-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all group">
                <div className="font-bold text-stone-200">Telar {level.name}</div>
                <div className="text-center font-mono text-stone-400">${level.contribution}</div>
                <div className="text-center"><span className="px-2 py-1 bg-stone-800 rounded text-[10px] font-black text-amber-500 italic">x8</span></div>
                <div className="text-right font-black text-2xl text-amber-500">${level.received}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-b from-stone-800 to-stone-900 p-10 rounded-[3rem] border border-stone-700 shadow-2xl space-y-8">
            <h3 className="text-2xl font-bold serif text-amber-100">Potencial Total</h3>
            <div className="p-6 bg-amber-500 rounded-2xl text-stone-900">
               <p className="text-[10px] uppercase font-black tracking-widest opacity-70">Beneficio Acumulado</p>
               <p className="text-4xl font-black italic">$14,106.50</p>
            </div>
            <ul className="space-y-4 text-stone-400 text-sm italic">
              <li>✦ 0% Retenciones administrativas.</li>
              <li>✦ 100% Capitalización directa entre miembros.</li>
              <li>✦ Escalabilidad modular por cumplimiento.</li>
            </ul>
            <button className="w-full py-4 bg-white text-stone-900 rounded-2xl font-black hover:bg-amber-500 transition-all active:scale-95 shadow-xl">Comenzar en Nivel $5</button>
          </div>
        </div>

        <button onClick={() => setShowTechnical(!showTechnical)} className="flex items-center gap-3 mx-auto px-6 py-2 rounded-full border border-stone-700 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-all">
          {showTechnical ? 'Ocultar Análisis Técnico' : 'Ver Análisis del Mecanismo de Fisión'}
        </button>

        {showTechnical && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
              <h4 className="font-bold text-amber-500 mb-2">Relación 8:1</h4>
              <p className="text-stone-400 text-sm leading-relaxed">Cada ciclo requiere de 8 aportaciones de 'Fuego' para completar el sueño de 1 'Agua'. Este flujo asegura que el capital necesario se concentre en un punto cada vez.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
              <h4 className="font-bold text-amber-500 mb-2">Multiplicación por Fisión</h4>
              <p className="text-stone-400 text-sm leading-relaxed">Al dividirse el telar en dos, se crean 16 espacios nuevos de participación, permitiendo que las Tierras asciendan y el sistema sea escalable y dinámico.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Levels;
