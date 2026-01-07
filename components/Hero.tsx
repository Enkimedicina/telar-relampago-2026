
import React from 'react';

const Hero: React.FC = () => {
  const benefits = [
    {
      icon: "🤝",
      title: "Apoyo Mutuo",
      desc: "Nadie camina solo. Crecemos en red, sosteniéndonos en cada paso con compromiso real.",
      color: "from-blue-50 to-blue-100/50",
      accent: "bg-blue-600",
      shadow: "hover:shadow-blue-200"
    },
    {
      icon: "🧶",
      title: "Colaboración Solidaria",
      desc: "Economía ética y consciente basada 100% en la confianza colectiva y la transparencia.",
      color: "from-amber-50 to-amber-100/50",
      accent: "bg-amber-600",
      shadow: "hover:shadow-amber-200"
    },
    {
      icon: "🚀",
      title: "Metas Reales",
      desc: "Hogar, viajes y estabilidad. Transformamos anhelos en realidades tangibles y prósperas.",
      color: "from-orange-50 to-orange-100/50",
      accent: "bg-orange-600",
      shadow: "hover:shadow-orange-200"
    }
  ];

  return (
    <section id="inicio" className="relative py-20 px-6 md:px-12 bg-weave overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-sm animate-pulse">
            <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
            Respiración Relámpago
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-stone-900 leading-[1.1] serif">
            El Telar de los Sueños <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 italic">Respiración Relámpago</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
            Una comunidad consciente donde los sueños se construyen en conjunto a través de la unión y el compromiso colectivo.
          </p>
        </div>

        {/* Highlighted Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-8">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className={`group relative p-10 rounded-[3rem] bg-gradient-to-br ${benefit.color} border-2 border-white shadow-xl transition-all duration-500 hover:-translate-y-3 ${benefit.shadow} overflow-hidden`}
            >
              {/* Floating accent blob */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 ${benefit.accent} opacity-[0.05] rounded-full blur-3xl transition-opacity group-hover:opacity-20`}></div>
              
              <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                <div className={`w-20 h-20 bg-white rounded-[1.5rem] shadow-xl shadow-stone-200 flex items-center justify-center text-5xl group-hover:scale-125 transition-transform duration-500 group-hover:rotate-6`}>
                  {benefit.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-stone-900 serif italic">{benefit.title}</h3>
                  <div className={`h-1.5 w-12 mx-auto rounded-full ${benefit.accent} opacity-20 group-hover:w-24 group-hover:opacity-100 transition-all duration-500`}></div>
                  <p className="text-stone-600 text-base leading-relaxed font-medium">{benefit.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-10">
          <button className="bg-stone-900 text-white px-12 py-5 rounded-[2rem] text-xl font-black hover:bg-black transition-all shadow-2xl hover:shadow-amber-900/40 hover:-translate-y-1 active:scale-95">
            Quiero Unirme al Telar
          </button>
          <a href="#como-funciona" className="bg-white text-stone-900 border-4 border-stone-100 px-12 py-5 rounded-[2rem] text-xl font-black hover:border-stone-900 transition-all shadow-xl hover:-translate-y-1 active:scale-95 flex items-center justify-center">
            Cómo Funciona
          </a>
        </div>

        <div className="pt-8 text-stone-800 font-black text-xl italic flex items-center gap-4">
          <span className="w-12 h-px bg-amber-300"></span>
          <span className="animate-pulse">✨ Porque cuando los sueños se tejen juntos, ninguno se rompe. ✨</span>
          <span className="w-12 h-px bg-amber-300"></span>
        </div>
      </div>
      
      {/* Abstract background elements */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-amber-200 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute bottom-10 -right-20 w-[30rem] h-[30rem] bg-orange-100 rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-amber-50/50 rounded-full blur-[150px] -z-10"></div>
    </section>
  );
};

export default Hero;
