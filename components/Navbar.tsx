
import React from 'react';

interface NavbarProps {
  onOpenDetails: () => void;
  onNavigateHome: () => void;
  onNavigateFree: () => void;
  currentPage: 'home' | 'free';
}

const Navbar: React.FC<NavbarProps> = ({ onOpenDetails, onNavigateHome, onNavigateFree, currentPage }) => {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-stone-200 py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={onNavigateHome}>
        <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">T</div>
        <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
          <span className="text-xl font-bold tracking-tight text-stone-800">El Telar</span>
          <span className="text-xs font-black text-amber-600 uppercase tracking-widest md:text-sm">Respiración Relámpago</span>
        </div>
      </div>
      
      <div className="hidden lg:flex space-x-8 text-stone-600 font-medium">
        <button onClick={onNavigateHome} className={`hover:text-amber-700 transition-colors ${currentPage === 'home' ? 'text-amber-700 font-bold' : ''}`}>Inicio</button>
        <button onClick={onOpenDetails} className="hover:text-amber-700 transition-colors focus:outline-none">¿Qué es?</button>
        <button onClick={onNavigateFree} className={`px-4 py-1 rounded-full border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white transition-all font-bold text-sm ${currentPage === 'free' ? 'bg-amber-500 text-white' : ''}`}>
          5 Dólares Gratis?
        </button>
        <a href="#como-funciona" className="hover:text-amber-700 transition-colors">Funcionamiento</a>
        <a href="#niveles" className="hover:text-amber-700 transition-colors">Niveles</a>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={onNavigateFree} className="lg:hidden text-xs font-bold text-amber-600 underline">5$ Gratis?</button>
        <a 
          href="#unete" 
          className="bg-stone-900 text-white px-5 py-2 rounded-full font-semibold hover:bg-black transition-all shadow-md active:scale-95"
        >
          Unirse
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
