import {
  Umbrella, Waves, ShoppingBag, Building2, GraduationCap,
  LayoutDashboard, BarChart3, Cog, PieChart, Layers,
  Github, Instagram, MessageCircle,
} from 'lucide-react';
import type { Project, Service, SocialLink } from './types';

/* TikTok icon placeholder — lucide doesn't have it, we use MessageCircle */

export const WHATSAPP_URL =
  'https://wa.me/525586178667?text=Hola%20Armando,%20quiero%20información%20sobre%20tus%20sistemas';

export const PROJECTS: Project[] = [
  {
    id: 'beach-flow',
    name: 'BeachFlow',
    tagline: 'Beach Club Manager',
    description:
      'Sistema integral de administración para clubes de playa. Reservas, servicios, staff, inventario y analytics en tiempo real.',
    demoUrl: 'https://larios4212.github.io/beach-flow/',
    gradient: 'from-cyan-500 to-blue-600',
    iconBg: 'bg-cyan-500/15',
    icon: Umbrella,
    tags: ['Reservas', 'Staff', 'Analytics', 'Inventario'],
    stats: [
      { label: 'Módulos', value: '6' },
      { label: 'Vistas', value: '7' },
      { label: 'Charts', value: '4' },
    ],
  },
  {
    id: 'sayu-manager',
    name: 'SayuManager',
    tagline: 'Turismo & Reservas',
    description:
      'Plataforma de gestión turística con reservaciones, tours, huéspedes, finanzas y dashboard operativo completo.',
    demoUrl: 'https://larios4212.github.io/sayu-manager/',
    gradient: 'from-teal-500 to-emerald-600',
    iconBg: 'bg-teal-500/15',
    icon: Waves,
    tags: ['Turismo', 'Reservas', 'Finanzas', 'CRM'],
    stats: [
      { label: 'Módulos', value: '5' },
      { label: 'Vistas', value: '6' },
      { label: 'Charts', value: '3' },
    ],
  },
  {
    id: 'tiendita-pro',
    name: 'TienditaPro',
    tagline: 'Smart Inventory & Sales',
    description:
      'Control de inventario y punto de venta para tienditas. 32 productos reales, POS completo, alertas de stock y dashboard de ventas.',
    demoUrl: 'https://larios4212.github.io/tiendita-pro/',
    gradient: 'from-emerald-500 to-green-600',
    iconBg: 'bg-emerald-500/15',
    icon: ShoppingBag,
    tags: ['POS', 'Inventario', 'Ventas', 'Alertas'],
    stats: [
      { label: 'Productos', value: '32' },
      { label: 'Módulos', value: '5' },
      { label: 'Categorías', value: '10' },
    ],
  },
  {
    id: 'depa-control',
    name: 'DepaControl',
    tagline: 'Property & Services Manager',
    description:
      'Gestión de departamentos con servicios incluidos. Propiedades, inquilinos, servicios, mantenimiento y resumen financiero.',
    demoUrl: 'https://larios4212.github.io/depa-control/',
    gradient: 'from-blue-500 to-violet-600',
    iconBg: 'bg-blue-500/15',
    icon: Building2,
    tags: ['Propiedades', 'Servicios', 'Finanzas', 'Inquilinos'],
    stats: [
      { label: 'Deptos', value: '8' },
      { label: 'Módulos', value: '7' },
      { label: 'Charts', value: '6' },
    ],
  },
  {
    id: 'sitio-web-papime',
    name: 'PAPIME Geología 3D',
    tagline: 'Plataforma Educativa UNAM',
    description:
      'Plataforma educativa para la UNAM con modelos 3D interactivos, prácticas virtuales 360°, catálogos de minerales y aulas virtuales para Ciencias de la Tierra.',
    demoUrl: 'https://larios4212.github.io/sitio-web-papime/',
    gradient: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-500/15',
    icon: GraduationCap,
    tags: ['Educación', '3D', 'UNAM', 'Geología'],
    stats: [
      { label: 'Modelos 3D', value: '9' },
      { label: 'Estaciones', value: '8' },
      { label: 'Secciones', value: '6' },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    icon: LayoutDashboard,
    title: 'Sistemas Administrativos',
    description: 'Desarrollo de plataformas completas para la gestión integral de negocios con módulos personalizados.',
    features: ['CRUD completo', 'Roles y permisos', 'Reportes automáticos', 'Base de datos escalable'],
  },
  {
    icon: BarChart3,
    title: 'Dashboards Inteligentes',
    description: 'Paneles de control con visualización de datos en tiempo real, KPIs y métricas de negocio.',
    features: ['Gráficas interactivas', 'KPIs en vivo', 'Filtros dinámicos', 'Exportación de datos'],
  },
  {
    icon: Cog,
    title: 'Automatización de Procesos',
    description: 'Eliminación de tareas repetitivas con flujos automatizados que ahorran tiempo y reducen errores.',
    features: ['Flujos de trabajo', 'Alertas automáticas', 'Integraciones API', 'Notificaciones'],
  },
  {
    icon: PieChart,
    title: 'Dashboards Financieros',
    description: 'Control financiero con ingresos, egresos, márgenes, proyecciones y análisis de rentabilidad.',
    features: ['Ingresos vs Gastos', 'Márgenes de ganancia', 'Proyecciones', 'Multi-periodo'],
  },
  {
    icon: Layers,
    title: 'Sistemas SaaS',
    description: 'Aplicaciones multi-tenant diseñadas para escalar, con arquitectura moderna y deploy continuo.',
    features: ['Multi-tenant', 'Deploy automático', 'Escalabilidad', 'CI/CD integrado'],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub',    url: 'https://github.com/Larios4212',               icon: Github },
  { name: 'Instagram', url: 'https://www.instagram.com/lariosav_',          icon: Instagram },
  { name: 'TikTok',    url: 'https://www.tiktok.com/@lariosav',             icon: MessageCircle },
];
