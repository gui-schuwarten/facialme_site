import { ReactNode } from 'react';

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
}

export interface AboutSectionProps {
  title: string;
  description: string;
  highlightWords?: string[];
  features: FeatureCardProps[];
}