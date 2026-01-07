
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TelarVisualizer from './components/TelarVisualizer';
import DreamAssistant from './components/DreamAssistant';
import Levels from './components/Levels';
import RoleCard from './components/RoleCard';
import WhatIsDetailed from './components/WhatIsDetailed';
import FreeEntry from './components/FreeEntry';
import { ROLE_DETAILS } from './constants';
import { Role } from './types';

const App: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'free'>('home');

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToFree = () => {
    setCurrentPage('free');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        onOpenDetails={() => setShowDetails(true)} 
        onNavigateHome={navigateToHome}
        onNavigateFree={navigateToFree}
        currentPage={currentPage}
      />
      
      {showDetails && <WhatIsDetailed onClose={() => setShowDetails(false)} />}

      {currentPage === 'home' ? (
        <main>
          {/* Section 1: Hero */}
          <Hero />

          {/* Section 2: What is it? */}
          <section id="que-es" className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="text-center space-y-6 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight serif">
                  ¿Qué es el Telar de los Sueños?
                </h2>
                <div className="space-y-6 text-stone-600 text-xl leading-relaxed">
                  <p>
                    Es una comunidad de personas que se apoyan económicamente de forma organizada y solidaria para alcanzar metas personales.
                  </p>
                  <p>
                    No es una empresa, no vende productos y no promete ganancias externas. Es un sistema de colaboración donde cada integrante participa con responsabilidad, claridad y confianza.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => setShowDetails(true)}
                      className="text-amber-700 font-bold border-b-2 border-amber-200 hover:border-amber-700 transition-all"
                    >
                      Ver detalles completos de la comunidad →
                    </button>
                    <button 
                      onClick={navigateToFree}
                      className="bg-amber-100 text-amber-900 px-6 py-2 rounded-full font-bold hover:bg-amber-200 transition-all"
                    >
                      ¿No tienes los $5? Haz clic aquí
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                <RoleCard 
                  title="Confianza"
                  icon={ROLE_DETAILS[Role.TIERRA].icon}
                  description="La base de nuestra red. Actuamos con transparencia y compromiso para guiar al grupo con orden."
                  color={ROLE_DETAILS[Role.TIERRA].color}
                />
                <RoleCard 
                  title="Cooperación"
                  icon={ROLE_DETAILS[Role.VIENTO].icon}
                  description="Conectamos sueños. Al invitar a otros, expandimos el tejido de apoyo mutuo y crecimiento."
                  color={ROLE_DETAILS[Role.VIENTO].color}
                />
                <RoleCard 
                  title="Crecimiento"
                  icon={ROLE_DETAILS[Role.AGUA].icon}
                  description="El fluir de la abundancia. Al recibir el apoyo, los sueños se materializan y el ciclo se renueva."
                  color={ROLE_DETAILS[Role.AGUA].color}
                />
                <RoleCard 
                  title="Solidaridad"
                  icon={ROLE_DETAILS[Role.FUEGO].icon}
                  description="La chispa inicial. Tu aportación consciente activa el movimiento que beneficia a toda la comunidad."
                  color={ROLE_DETAILS[Role.FUEGO].color}
                />
              </div>
            </div>
          </section>

          {/* Section 3: How it Works */}
          <section id="como-funciona" className="py-24 px-6 md:px-12 bg-stone-50">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-stone-900 italic serif">Mecanismo de Funcionamiento</h2>
                <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                  Una estructura fractal donde los roles rotan para que todos alcancen la abundancia.
                </p>
              </div>
              
              <TelarVisualizer />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-8">
                <div className="bg-stone-900 text-white p-8 rounded-3xl space-y-6 shadow-xl">
                  <h3 className="text-2xl font-bold">Rotación de Roles</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-orange-500 p-2 rounded-lg">🔥</div>
                      <span className="text-stone-300">→</span>
                      <div className="bg-gray-400 p-2 rounded-lg">💨</div>
                      <span className="flex-1">Los Fuegos se vuelven Vientos (Conectores)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-400 p-2 rounded-lg">💨</div>
                      <span className="text-stone-300">→</span>
                      <div className="bg-green-600 p-2 rounded-lg">🌱</div>
                      <span className="flex-1">Los Vientos se vuelven Tierras (Guías)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-green-600 p-2 rounded-lg">🌱</div>
                      <span className="text-stone-300">→</span>
                      <div className="bg-blue-500 p-2 rounded-lg">💧</div>
                      <span className="flex-1">Las Tierras se vuelven Agua (Receptores)</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-stone-800">
                    <p className="text-amber-400 font-bold italic">
                      Cada Viento debe conectar a dos nuevos integrantes para completar los 8 Fuegos del ciclo.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-stone-900">¿Tienes dudas? Pregúntale al Asistente</h3>
                  <DreamAssistant />
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Levels */}
          <Levels />

          {/* Section 5: Essence */}
          <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <h2 className="text-4xl font-bold text-stone-900 serif">Nuestra Esencia</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100 text-left">
                  <h4 className="text-xl font-bold text-amber-900 mb-4">Soñamos con:</h4>
                  <ul className="space-y-3 text-amber-800">
                    <li className="flex items-center gap-2">✨ Comprar terrenos</li>
                    <li className="flex items-center gap-2">✨ Adquirir un automóvil</li>
                    <li className="flex items-center gap-2">✨ Mejorar o construir un hogar</li>
                    <li className="flex items-center gap-2">✨ Viajar</li>
                    <li className="flex items-center gap-2">✨ Estilo de vida pleno</li>
                  </ul>
                </div>
                <div className="p-8 bg-stone-50 rounded-3xl border border-stone-200 text-left">
                  <h4 className="text-xl font-bold text-stone-900 mb-4">Economía Solidaria:</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Porque no hay jefes ni empleados, no se venden productos, y se basa 100% en la cooperación comunitaria. Es un sistema diseñado por personas para personas.
                  </p>
                </div>
              </div>
              
              <div id="unete" className="bg-stone-900 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                <div className="relative z-10 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold italic">¿Listo para tejer tus sueños?</h3>
                  <p className="text-stone-400 max-w-xl mx-auto text-lg">
                    Únete a una comunidad que cree en ti y en la fuerza del compromiso colectivo.
                  </p>
                  <button className="bg-amber-600 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-amber-700 transition-all shadow-xl group-hover:scale-105 active:scale-95">
                    Quiero Participar Ahora
                  </button>
                </div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-600/20 rounded-full blur-3xl group-hover:bg-amber-600/30 transition-all"></div>
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <FreeEntry />
      )}

      <footer className="bg-stone-50 border-t border-stone-200 py-16 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col items-center gap-4">
             <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg cursor-pointer" onClick={navigateToHome}>T</div>
             <h4 className="text-2xl font-bold text-stone-900 serif">El Telar de los Sueños | Respiración Relámpago</h4>
          </div>
          <p className="text-stone-500 max-w-md mx-auto leading-relaxed">
            Un sistema organizado de colaboración económica donde las personas se apoyan de manera estructurada para alcanzar metas financieras individuales.
          </p>
          <div className="flex justify-center gap-6 text-stone-400 font-medium">
            <a href="#" className="hover:text-amber-700 transition-colors">Instagram</a>
            <a href="#" className="hover:text-amber-700 transition-colors">Telegram</a>
            <a href="#" className="hover:text-amber-700 transition-colors">Contacto</a>
          </div>
          <div className="pt-8 text-stone-400 text-sm">
            © {new Date().getFullYear()} El Telar de los Sueños. Comunidad de Economía Solidaria.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
