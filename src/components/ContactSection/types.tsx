import { ReactNode } from 'react';

export interface ContactInfo {
  email: string;
  phone: string;
  addressLines: string[];
}

export interface SocialLink {
  href: string;
  icon: ReactNode;
  label: string;
}

export interface ContactSectionProps {
  title?: string;
  contact: ContactInfo;
  socialLinks: SocialLink[];
}
