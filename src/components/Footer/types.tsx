import { ReactNode } from 'react';

export interface FooterSocialLink {
  href: string;
  icon: ReactNode;
  label: string;
}

export interface FooterProps {
  contactLine: string;
  socialLinks: FooterSocialLink[];
}
