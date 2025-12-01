import React from 'react';

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  status: 'Concluído' | 'Em Curso';
  imageUrl: string;
}

export interface Skill {
  name: string;
  level: 'Iniciante' | 'Intermediário' | 'Aprofundado';
  category: 'Tech' | 'Cloud' | 'Soft Skills'| 'Idiomas';
  icon?: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}