import { ReactNode } from 'react';

export interface NavbarProps {
  logoSrc: string;
  menuItems: {
    label: string;
    href: string;
    isActive?: boolean;
  }[];
  socialLinks: {
    href: string;
    icon: ReactNode;
    label: string;
  }[];
}