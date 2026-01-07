
import React from 'react';
import { Role, TelarLevel } from './types';

export const TELAR_LEVELS: TelarLevel[] = [
  { id: 1, name: '$5', contribution: 5, received: 40, color: 'bg-emerald-100 border-emerald-500' },
  { id: 2, name: '$40', contribution: 40, received: 320, color: 'bg-cyan-100 border-cyan-500' },
  { id: 3, name: '$100', contribution: 100, received: 800, color: 'bg-indigo-100 border-indigo-500' },
  { id: 4, name: '$180.50', contribution: 180.5, received: 1444, color: 'bg-purple-100 border-purple-500' },
  { id: 5, name: '$1,440', contribution: 1440, received: 11552, color: 'bg-rose-100 border-rose-500' },
];

export const ROLE_DETAILS = {
  [Role.AGUA]: {
    title: 'Agua — Receptor',
    icon: '💧',
    description: 'Recibe las aportaciones del grupo. Utiliza el dinero según sus necesidades personales. Al completar su ciclo, puede salir o ingresar a un Telar de mayor nivel.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  [Role.TIERRA]: {
    title: 'Tierra — Guía / Coordinación',
    icon: '🌱',
    description: 'Apoya la organización del grupo. Da seguimiento a la comunicación. Asegura que el proceso sea claro y ordenado.',
    color: 'text-green-700',
    bg: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  [Role.VIENTO]: {
    title: 'Viento — Conector',
    icon: '💨',
    description: 'Invita a dos nuevas personas. Explica el funcionamiento del Telar. Apoya el crecimiento del grupo.',
    color: 'text-gray-600',
    bg: 'bg-gray-50',
    borderColor: 'border-gray-200'
  },
  [Role.FUEGO]: {
    title: 'Fuego — Aportante',
    icon: '🔥',
    description: 'Realiza una aportación inicial de $5 USD. Activa el movimiento del sistema. Con el tiempo, su rol evoluciona.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    borderColor: 'border-orange-200'
  }
};
