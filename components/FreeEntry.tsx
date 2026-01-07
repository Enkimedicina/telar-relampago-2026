
import React from 'react';

const FreeEntry: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 pt-10 pb-24 px-6 md:px-12 animate-in fade-in duration-700">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* Header Section */}
        <header className="text-center space-y-6">
          <div className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-black uppercase tracking-widest">
            Comunidad de Oportunidades
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-stone-900 serif leading-tight">
            Una comunidad que crea <br/>
            <span className="text-amber-600 italic">oportunidades reales</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            El Telar de los Sueños no es solo un sistema de apoyo económico, es un ecosistema de aprendizaje digital donde nadie se queda atrás por falta de recursos iniciales.
          </p>
        </header>

        {/* The Concept Section */}
        <section className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-stone-100 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-stone-900 serif">¿Sin los $5 de aportación?</h2>
            <div className="space-y-4 text-stone-600 text-lg">
              <p>
                Entendemos que hoy existen muchas formas reales y accesibles de generar ingresos por internet, incluso comenzando con cantidades pequeñas como 5 dólares.
              </p>
              <p className="font-medium text-stone-800">
                Si hoy tienes dudas sobre cómo conseguir esa aportación inicial, aquí no te quedas solo.
              </p>
              <p>
                Dentro de la comunidad compartimos métodos prácticos y comprobados para generar esos primeros ingresos de forma inmediata y colaborativa, mientras sigues participando activamente en el Telar.
              </p>
            </div>
          </div>
          <div className="w-full md:w-72 aspect-square bg-amber-600 rounded-[2rem] flex flex-col items-center justify-center p-8 text-white text-center shadow-2xl rotate-3">
             <span className="text-6xl mb-4">💡</span>
             <h4 className="text-2xl font-black mb-2">La Organización lo es todo</h4>
             <p className="text-xs text-amber-100 uppercase tracking-widest font-bold">Multiplicamos el esfuerzo individual</p>
          </div>
        </section>

        {/* Community Power Visualization */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-stone-900 serif">Generar ingresos en comunidad</h2>
            <p className="text-stone-500 mt-2">¿Cómo 10,000 personas trabajando juntas cambian el juego?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">📱</div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Impulso en Redes Sociales</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Interacción masiva en TikTok, FB, IG y YouTube. Likes, comentarios y visualizaciones coordinadas que las plataformas premian.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🚀</div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Crecimiento Orgánico</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Posicionamiento de contenido y aceleración de seguidores. Abrimos la puerta a la monetización directa de tus propios perfiles.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🌐</div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Tráfico Estratégico</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                El tráfico no se compra: se crea. Aprendemos juntos sobre acortadores, micro-servicios y generación de visitas de alto valor.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Methods */}
        <section className="bg-stone-900 text-white rounded-[4rem] p-8 md:p-16 overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold serif text-amber-200">Aprender, compartir y crecer juntos</h2>
              <div className="space-y-6 text-stone-400">
                <p>
                  No importa si hoy no sabes cómo generar ingresos por internet. Dentro del Telar existe el compromiso de enseñar y acompañar.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-amber-500 font-bold">✔</span>
                    <p><strong className="text-white">Abundancia:</strong> Oportunidades hay de sobra, falta organización.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-amber-500 font-bold">✔</span>
                    <p><strong className="text-white">Multiplicación:</strong> El conocimiento compartido rinde el doble.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-amber-500 font-bold">✔</span>
                    <p><strong className="text-white">Poder Colectivo:</strong> La herramienta más poderosa es el equipo.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold text-amber-500">Otras alternativas reales:</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-2xl">🔗</span>
                  <span className="font-medium">Uso estratégico de acortadores de enlaces</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-2xl">🖥️</span>
                  <span className="font-medium">Creación de landing pages simples</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-2xl">📈</span>
                  <span className="font-medium">Generación de tráfico orgánico comunitario</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 blur-[100px] rounded-full"></div>
        </section>

        {/* Conclusion / Value Proposition */}
        <section className="text-center space-y-10 py-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-stone-900 serif italic">Nuestro verdadero valor</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Más allá de los números, somos una comunidad que apuesta por la colaboración, la confianza y el apoyo mutuo. En un mundo digital lleno de herramientas, lo más valioso siguen siendo las personas trabajando juntas.
            </p>
          </div>
          
          <div className="bg-amber-600 text-white p-10 rounded-[3rem] shadow-2xl shadow-amber-200/50">
            <p className="text-2xl md:text-3xl font-black serif italic leading-relaxed">
              "Cuando una comunidad se organiza, la abundancia deja de ser una promesa y se convierte en una realidad compartida."
            </p>
            <div className="mt-6 flex justify-center items-center gap-4">
               <span className="w-12 h-px bg-white/30"></span>
               <span className="text-xs uppercase tracking-[0.4em] font-black">Respiración Relámpago</span>
               <span className="w-12 h-px bg-white/30"></span>
            </div>
          </div>

          <button className="bg-stone-900 text-white px-12 py-6 rounded-[2rem] text-xl font-black hover:bg-black transition-all shadow-xl hover:-translate-y-1 active:scale-95">
            Quiero Aprender y Participar
          </button>
        </section>

      </div>
    </div>
  );
};

export default FreeEntry;
