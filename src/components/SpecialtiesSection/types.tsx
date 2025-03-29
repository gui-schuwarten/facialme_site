import { ReactNode } from 'react';

export interface SpecialtyCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  highlightWords?: string[];
}

export interface SpecialtiesSectionProps {
  specialties: SpecialtyCardProps[];
}