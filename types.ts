
export enum Role {
  AGUA = 'Agua',
  TIERRA = 'Tierra',
  VIENTO = 'Viento',
  FUEGO = 'Fuego'
}

export interface TelarLevel {
  id: number;
  name: string;
  contribution: number;
  received: number;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
