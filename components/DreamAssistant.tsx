
import React, { useState, useRef, useEffect } from 'react';
import { askTelarAssistant } from '../services/geminiService';
import { ChatMessage } from '../types';

const DreamAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: '¡Hola! Soy tu guía en El Telar de los Sueños. ¿Qué te gustaría saber sobre nuestra comunidad y cómo tejer juntos?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await askTelarAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-[500px] border border-stone-100">
      <div className="bg-stone-900 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-xl">✨</div>
          <div>
            <h3 className="font-bold">Guía de los Sueños</h3>
            <p className="text-xs text-stone-400">Inteligencia Comunitaria</p>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl ${
              m.role === 'user' 
                ? 'bg-amber-600 text-white rounded-tr-none' 
                : 'bg-white text-stone-800 shadow-sm border border-stone-200 rounded-tl-none'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-200 animate-pulse">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
                <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
                <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-stone-100 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Pregunta sobre los roles, niveles..."
          className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-4 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading}
          className="bg-amber-600 text-white p-2 rounded-xl hover:bg-amber-700 transition-colors disabled:opacity-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DreamAssistant;
