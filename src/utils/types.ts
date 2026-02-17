import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  demoUrl: string;
  gradient: string;
  iconBg: string;
  icon: LucideIcon;
  tags: string[];
  stats: { label: string; value: string }[];
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}
