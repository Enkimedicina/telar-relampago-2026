
import React from 'react';
import { Role } from '../types';
import { ROLE_DETAILS, TELAR_LEVELS } from '../constants';

interface WhatIsDetailedProps {
  onClose: () => void;
}

const WhatIsDetailed: React.FC<WhatIsDetailedProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-stone-50 overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <nav className="sticky top-0 z-50 glass border-b border-stone-200 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">T</div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-stone-800 serif">Detalles del Telar</span>
            <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Respiración Relámpago</span>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-stone-500 hover:text-stone-900 flex items-center gap-2 font-bold transition-colors"
        >
          <span className="text-2xl">✕</span>
          <span className="hidden md:inline">Volver al Inicio</span>
        </button>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        {/* Intro */}
        <section className="text-center space-y-8">
          <div className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-xs font-black uppercase tracking-widest">
            Comunidad Consciente
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-stone-900 serif leading-tight">
            ¿Qué es el Telar de los Sueños?
            <span className="block text-2xl md:text-3xl text-amber-600 font-bold mt-2 tracking-widest uppercase">Respiración Relámpago</span>
          </h1>
          <div className="space-y-6 text-xl text-stone-600 leading-relaxed">
            <p>
              El Telar de los Sueños es una <strong>comunidad consciente</strong> creada para apoyarnos mutuamente en la realización de nuestros sueños. Es un espacio donde las personas se unen con una misma intención: crecer juntas, compartir, y construir oportunidades reales para mejorar su vida y la de los demás.
            </p>
            <p>
              Aquí creemos que los sueños no se logran solos, sino que se fortalecen cuando muchas voluntades se entrelazan con un propósito común. Así como en un telar cada hilo es importante, en esta comunidad cada persona cuenta.
            </p>
          </div>
        </section>

        {/* Esencia */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-stone-900 serif border-b-2 border-amber-200 pb-2 inline-block">Nuestra esencia</h2>
            <p className="text-lg text-stone-600">
              Nace de la creencia firme de que el trabajo en conjunto, cuando es consciente y honesto, tiene un poder expansivo mucho mayor del que imaginamos.
            </p>
            <div className="bg-amber-50 p-8 rounded-[2rem] border border-amber-100">
              <h4 className="font-bold text-amber-900 mb-4 text-xl">Soñamos con:</h4>
              <ul className="grid grid-cols-1 gap-3">
                {['Comprar terrenos', 'Adquirir un automóvil', 'Mejorar o construir un hogar', 'Realizar viajes', 'Estilo de vida libre y equilibrado'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-amber-800">
                    <span className="text-amber-500">✦</span> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-stone-500 italic text-sm">
                Pero más allá de lo material, soñamos con tranquilidad, estabilidad y bienestar compartido.
              </p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-stone-100 space-y-6">
            <h3 className="text-2xl font-bold serif text-stone-800">Una comunidad que cree y apoya</h3>
            <p className="text-stone-600">
              En el Telar de los Sueños no solo se trata de recibir apoyo, sino también de creer en los sueños de los demás.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-amber-600 font-bold">01.</div>
                <p className="text-stone-700"><strong>La unión crea fuerza:</strong> Multiplicamos el impacto individual.</p>
              </div>
              <div className="flex gap-4">
                <div className="text-amber-600 font-bold">02.</div>
                <p className="text-stone-700"><strong>La confianza genera expansión:</strong> Abrimos puertas antes cerradas.</p>
              </div>
              <div className="flex gap-4">
                <div className="text-amber-600 font-bold">03.</div>
                <p className="text-stone-700"><strong>La conciencia transforma:</strong> Resultados con propósito ético.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Roles Detallados */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-stone-900 serif">Roles dentro del Telar</h2>
            <p className="text-stone-500 mt-2">Funciones claras bajo nombres simbólicos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(ROLE_DETAILS).map(([key, details]) => (
              <div key={key} className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{details.icon}</span>
                  <h4 className="text-xl font-bold text-stone-800">{details.title}</h4>
                </div>
                <ul className="space-y-3 text-stone-600 text-sm">
                  {key === Role.AGUA && (
                    <>
                      <li>• Recibe las aportaciones económicas del grupo.</li>
                      <li>• Utiliza el dinero libremente según sus necesidades.</li>
                      <li>• Al finalizar, puede ascender a un telar de mayor valor.</li>
                    </>
                  )}
                  {key === Role.TIERRA && (
                    <>
                      <li>• Apoya la organización y comunicación del grupo.</li>
                      <li>• Asegura que el proceso sea ordenado y claro.</li>
                      <li>• Evita la desorganización de los participantes.</li>
                    </>
                  )}
                  {key === Role.VIENTO && (
                    <>
                      <li>• Invita a dos nuevas personas a participar.</li>
                      <li>• Explica el funcionamiento y facilita la integración.</li>
                      <li>• Es el motor de expansión de la comunidad.</li>
                    </>
                  )}
                  {key === Role.FUEGO && (
                    <>
                      <li>• Realiza la aportación económica inicial de 5 dólares.</li>
                      <li>• Activa el movimiento inicial del sistema.</li>
                      <li>• Evoluciona su rol conforme avanza el ciclo.</li>
                    </>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Estructura y Niveles */}
        <section className="bg-stone-900 text-white rounded-[4rem] p-12 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold serif text-amber-200">Estructura del Telar</h3>
              <p className="text-stone-400">Un Telar se compone de 15 personas en perfecta armonía:</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <div className="text-2xl mb-1">💧</div>
                  <div className="font-bold">1 Agua</div>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <div className="text-2xl mb-1">🌱</div>
                  <div className="font-bold">2 Tierras</div>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <div className="text-2xl mb-1">💨</div>
                  <div className="font-bold">4 Vientos</div>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <div className="text-2xl mb-1">🔥</div>
                  <div className="font-bold">8 Fuegos</div>
                </div>
              </div>
              <p className="text-amber-100/70 italic text-sm">
                Cuando los 8 Fuegos aportan, los roles rotan: Fuegos → Vientos → Tierras → Agua.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold serif text-amber-200">Crecimiento por niveles</h3>
              <p className="text-stone-400">La abundancia crece contigo. Mantén el mismo proceso, aumenta el beneficio:</p>
              <div className="space-y-3">
                {TELAR_LEVELS.map(level => (
                  <div key={level.id} className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-stone-300">Telar de ${level.contribution}</span>
                    <span className="font-bold text-amber-500">Recibes ${level.received}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Por qué Economía Solidaria */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-stone-900 serif">¿Por qué es economía solidaria?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'No hay jefes ni empleados.',
              'No es una empresa tradicional.',
              'No se venden productos ni servicios.',
              'Basado en apoyo mutuo y redes comunitarias.',
              'Participación para ayudar y ser ayudada.',
              'Se adapta a tu tiempo desde casa.'
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-stone-100 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">✓</div>
                <p className="text-stone-700 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <footer className="text-center space-y-8 pb-20">
          <div className="h-px bg-stone-200 w-full mb-16"></div>
          <p className="text-2xl text-stone-800 serif italic max-w-2xl mx-auto leading-relaxed">
            "El Telar de los Sueños es una invitación a recordar que sí es posible. Al tejer sueños colectivamente, creamos realidades más grandes."
          </p>
          <div className="text-amber-600 font-bold text-lg">
            ✨ Porque cuando los sueños se tejen juntos, ninguno se rompe. ✨
          </div>
          <button 
            onClick={onClose}
            className="bg-stone-900 text-white px-12 py-5 rounded-[2rem] text-xl font-bold hover:bg-black transition-all shadow-xl active:scale-95"
          >
            Entendido, quiero participar
          </button>
        </footer>
      </div>
    </div>
  );
};

export default WhatIsDetailed;
