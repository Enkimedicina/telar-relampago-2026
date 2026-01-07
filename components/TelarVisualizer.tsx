
import React, { useState, useEffect, useCallback } from 'react';
import { Role } from '../types';
import { ROLE_DETAILS } from '../constants';

type AnimationPhase = 
  | 'idle' 
  | 'agua-leaving' 
  | 'fission-split' 
  | 'viento-to-tierra' 
  | 'fuego-to-viento' 
  | 'success';

const TelarVisualizer: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [phase, setPhase] = useState<AnimationPhase>('idle');
  
  const width = 600;
  const height = 400;
  const originalCenter = { x: 300, y: 200 };
  const leftCenter = { x: 150, y: 200 };
  const rightCenter = { x: 450, y: 200 };

  const rAgua = 0;
  const rTierra = 50;
  const rViento = 90;
  const rFuego = 130;

  const steps = [
    { 
      id: 'agua-leaving', 
      title: "1. Ciclo Completado", 
      desc: "El Agua sale del telar tras recibir el apoyo de los 8 Fuegos, dando paso a la nueva generación.",
      icon: "💧"
    },
    { 
      id: 'fission-split', 
      title: "2. Fisión: Doble Ascenso", 
      desc: "El grupo se divide. Cada Tierra asciende a Agua en su PROPIO nuevo telar independiente.",
      icon: "✂️"
    },
    { 
      id: 'viento-to-tierra', 
      title: "3. Evolución a Guías", 
      desc: "Los Vientos ocupan los lugares de Tierra en los dos nuevos telares para coordinar el avance.",
      icon: "💨"
    },
    { 
      id: 'fuego-to-viento', 
      title: "4. Apertura a Nuevos Sueños", 
      desc: "Los Fuegos pasan a Viento. Su misión es invitar a 2 personas para iniciar un nuevo ciclo.",
      icon: "🔥"
    }
  ];

  const getCoords = (role: Role, index: number, total: number) => {
    const isLeftCluster = index < (total / 2);
    const targetCenter = (phase === 'idle' || phase === 'agua-leaving') ? originalCenter : (isLeftCluster ? leftCenter : rightCenter);
    const localIndex = (phase === 'idle' || phase === 'agua-leaving') ? index : (isLeftCluster ? index : index - (total / 2));
    const localTotal = (phase === 'idle' || phase === 'agua-leaving') ? total : (total / 2);

    let radius = 0;
    let opacity = 1;
    let scale = 1;

    if (role === Role.AGUA) radius = rAgua;
    else if (role === Role.TIERRA) radius = rTierra;
    else if (role === Role.VIENTO) radius = rViento;
    else if (role === Role.FUEGO) radius = rFuego;

    switch (phase) {
      case 'agua-leaving':
        if (role === Role.AGUA) { radius = 300; opacity = 0; scale = 3; }
        break;
      case 'fission-split':
        if (role === Role.AGUA) { opacity = 0; }
        if (role === Role.TIERRA) { radius = rAgua; scale = 1.3; }
        break;
      case 'viento-to-tierra':
        if (role === Role.AGUA) { opacity = 0; }
        if (role === Role.TIERRA) { radius = rAgua; }
        if (role === Role.VIENTO) { radius = rTierra; scale = 1.2; }
        break;
      case 'fuego-to-viento':
        if (role === Role.AGUA) { opacity = 0; }
        if (role === Role.TIERRA) { radius = rAgua; }
        if (role === Role.VIENTO) { radius = rTierra; }
        if (role === Role.FUEGO) { radius = rViento; scale = 1.1; }
        break;
      case 'success':
        if (role === Role.AGUA) { opacity = 0; }
        if (role === Role.TIERRA) radius = rAgua;
        if (role === Role.VIENTO) radius = rTierra;
        if (role === Role.FUEGO) radius = rViento;
        break;
    }

    const angle = (localIndex * (2 * Math.PI) / localTotal) - (Math.PI / 2);
    return {
      x: targetCenter.x + radius * Math.cos(angle),
      y: targetCenter.y + radius * Math.sin(angle),
      opacity,
      scale
    };
  };

  const runCycle = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPhase('agua-leaving');
    
    setTimeout(() => setPhase('fission-split'), 5000);
    setTimeout(() => setPhase('viento-to-tierra'), 10000);
    setTimeout(() => setPhase('fuego-to-viento'), 15000);
    setTimeout(() => setPhase('success'), 20000);
    setTimeout(() => {
      setPhase('idle');
      setIsAnimating(false);
    }, 25000);
  }, [isAnimating]);

  useEffect(() => {
    if (isLooping && !isAnimating) runCycle();
  }, [isLooping, isAnimating, runCycle]);

  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-[3rem] shadow-2xl border border-stone-100 overflow-hidden min-h-[600px]">
      {/* DIAGRAMA IZQUIERDO: DINÁMICA DE DOBLE TELAR */}
      <div className="flex-[1.5] bg-stone-50 p-6 relative flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-stone-100">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full drop-shadow-2xl overflow-visible">
          {/* Guías circulares dinámicas */}
          <g className="opacity-10 transition-opacity duration-1000">
            {(phase === 'idle' || phase === 'agua-leaving') ? (
              <circle cx={originalCenter.x} cy={originalCenter.y} r={rFuego} fill="none" stroke="black" strokeWidth="1" strokeDasharray="4 4" />
            ) : (
              <>
                <circle cx={leftCenter.x} cy={leftCenter.y} r={rViento} fill="none" stroke="black" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx={rightCenter.x} cy={rightCenter.y} r={rViento} fill="none" stroke="black" strokeWidth="1" strokeDasharray="4 4" />
              </>
            )}
          </g>

          {[Role.AGUA, Role.TIERRA, Role.VIENTO, Role.FUEGO].map(role => {
            const count = role === Role.AGUA ? 1 : role === Role.TIERRA ? 2 : role === Role.VIENTO ? 4 : 8;
            return Array.from({ length: count }).map((_, i) => {
              const coords = getCoords(role, i, count);
              const size = role === Role.AGUA ? 28 : role === Role.TIERRA ? 24 : role === Role.VIENTO ? 20 : 16;
              return (
                <g key={`${role}-${i}`} className="transition-all duration-[4000ms] ease-in-out" style={{ transform: `translate(${coords.x}px, ${coords.y}px) scale(${coords.scale})`, opacity: coords.opacity }}>
                  <circle r={size} className={`${role === Role.AGUA ? 'fill-blue-500' : role === Role.TIERRA ? 'fill-green-600' : role === Role.VIENTO ? 'fill-stone-400' : 'fill-orange-500'} shadow-lg transition-colors`} />
                  <text y={size/4} textAnchor="middle" className="fill-white text-[12px] font-black pointer-events-none select-none">{ROLE_DETAILS[role].icon}</text>
                </g>
              );
            });
          })}
          
          {/* Etiquetas de Fisión */}
          {phase !== 'idle' && phase !== 'agua-leaving' && (
            <g className="animate-in fade-in duration-1000">
              <text x={leftCenter.x} y={height - 20} textAnchor="middle" className="fill-amber-600 text-[10px] font-black uppercase tracking-widest">Nuevo Telar A</text>
              <text x={rightCenter.x} y={height - 20} textAnchor="middle" className="fill-amber-600 text-[10px] font-black uppercase tracking-widest">Nuevo Telar B</text>
            </g>
          )}
        </svg>
        <div className="absolute top-6 left-8 flex items-center gap-2">
           <div className={`w-2 h-2 rounded-full ${isAnimating ? 'bg-amber-500 animate-ping' : 'bg-green-500'}`}></div>
           <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Visualizador de Fisión Comunitaria</span>
        </div>
      </div>

      {/* TEXTOS DERECHOS: PASO A PASO */}
      <div className="w-full lg:w-[400px] p-8 md:p-10 flex flex-col justify-between bg-white">
        <div className="space-y-6">
          <header className="space-y-2">
            <h3 className="text-2xl font-black text-stone-900 serif italic">Dinámica de Fisión</h3>
            <p className="text-stone-500 text-xs">Observa la multiplicación de la abundancia.</p>
          </header>

          <div className="space-y-3 relative">
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-stone-100"></div>
            {steps.map((step) => (
              <div key={step.id} className={`relative z-10 flex items-start gap-4 p-4 rounded-2xl border-2 transition-all duration-700 ${phase === step.id ? 'bg-amber-50 border-amber-200 shadow-lg' : 'opacity-40 border-transparent'}`}>
                <div className={`w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center text-xl transition-colors ${phase === step.id ? 'bg-amber-500 text-white' : 'bg-stone-50'}`}>{step.icon}</div>
                <div className="space-y-1">
                  <h4 className="font-black text-xs uppercase tracking-wider text-stone-900">{step.title}</h4>
                  <p className="text-[13px] leading-relaxed text-stone-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 pt-6">
          <button onClick={runCycle} disabled={isAnimating} className="w-full py-4 bg-stone-900 text-white rounded-2xl font-black hover:bg-black transition-all shadow-xl disabled:opacity-50">
            {isAnimating ? 'Simulando Fisión...' : '✨ Iniciar Animación'}
          </button>
          <label className="flex justify-center items-center gap-2 text-[10px] font-black text-stone-400 uppercase tracking-widest cursor-pointer hover:text-stone-600">
            <input type="checkbox" checked={isLooping} onChange={(e) => setIsLooping(e.target.checked)} className="rounded text-amber-600 focus:ring-amber-500" />
            Bucle Automático
          </label>
        </div>
      </div>
    </div>
  );
};

export default TelarVisualizer;
