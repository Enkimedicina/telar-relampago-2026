
import { GoogleGenAI } from "@google/genai";

export const askTelarAssistant = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    Eres un asistente amable y sabio para la comunidad "El Telar de los Sueños". 
    Tu objetivo es explicar este sistema de economía solidaria.
    Datos clave:
    - Es 100% basado en confianza y apoyo mutuo.
    - Estructura: 1 Agua, 2 Tierras, 4 Vientos, 8 Fuegos.
    - Factor 8:1 (8 aportantes para 1 receptor).
    - Mecanismo de fisión: El telar se divide en dos para el ascenso.
    Responde en español, tono cálido y profesional.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Lo siento, tuve un problema tejiendo esa respuesta. ¿Podrías preguntar de nuevo?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error al conectar con la sabiduría del Telar.";
  }
};
