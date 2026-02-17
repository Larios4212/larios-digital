import { motion } from 'framer-motion';
import { Code2, Cpu, LayoutDashboard, Rocket, Users, Award } from 'lucide-react';
import { useInView } from '@/hooks';

const HIGHLIGHTS = [
  { icon: Code2, label: 'React + TypeScript', detail: 'Stack principal' },
  { icon: LayoutDashboard, label: 'Dashboards', detail: 'Analytics en tiempo real' },
  { icon: Cpu, label: 'Automatización', detail: 'Procesos inteligentes' },
  { icon: Rocket, label: 'Deploy Continuo', detail: 'CI/CD automatizado' },
  { icon: Users, label: 'Multi-usuario', detail: 'Roles y permisos' },
  { icon: Award, label: 'Diseño Premium', detail: 'UI/UX profesional' },
];

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Bg effects */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative gradient border */}
              <div className="absolute -top-px -left-px -right-px h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

              {/* Avatar area */}
              <div className="flex items-center gap-5 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-600/20">
                  AL
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Armando Larios</h3>
                  <p className="text-sm text-blue-400 font-medium">Ingeniero en Computación</p>
                  <p className="text-xs text-slate-500 mt-0.5">Desarrollador de Software</p>
                </div>
              </div>

              {/* Skill grid */}
              <div className="grid grid-cols-2 gap-3">
                {HIGHLIGHTS.map((h, i) => (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600/20 to-violet-600/20 flex items-center justify-center flex-shrink-0">
                      <h.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white leading-tight">{h.label}</p>
                      <p className="text-[10px] text-slate-500">{h.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom stats */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-4 text-center">
                {[
                  { v: '5+', l: 'Sistemas' },
                  { v: '30+', l: 'Módulos' },
                  { v: '100%', l: 'Entregados' },
                ].map(s => (
                  <div key={s.l}>
                    <p className="text-2xl font-bold gradient-text">{s.v}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="text-xs font-semibold text-blue-400 tracking-[0.2em] uppercase mb-3 block">
              Sobre mí
            </span>
            <h2 className="section-title text-white mb-6">
              Ingeniería de software{' '}
              <span className="gradient-text">aplicada a negocios</span>
            </h2>

            <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
              <p>
                Soy Ingeniero en Computación especializado en el desarrollo de{' '}
                <span className="text-white font-medium">sistemas administrativos inteligentes</span>{' '}
                para negocios. Mi enfoque combina arquitectura de software sólida con
                interfaces modernas que realmente resuelven problemas operativos.
              </p>
              <p>
                Cada sistema que construyo está diseñado para ser{' '}
                <span className="text-white font-medium">escalable, intuitivo y profesional</span>.
                Desde dashboards financieros hasta sistemas de gestión completos,
                trabajo con las tecnologías más actuales para entregar soluciones
                de alto nivel.
              </p>
              <p>
                Mi stack principal incluye{' '}
                <span className="text-blue-400 font-medium">React, TypeScript, TailwindCSS</span>{' '}
                y herramientas modernas de desarrollo. Cada proyecto incluye deploy
                automático, diseño responsivo y arquitectura modular lista para crecer.
              </p>
            </div>

            {/* Philosophy cards */}
            <div className="mt-8 space-y-3">
              {[
                { title: 'Código limpio', desc: 'TypeScript estricto, componentes modulares, zero warnings.' },
                { title: 'Diseño funcional', desc: 'Interfaces que combinan estética y usabilidad real.' },
                { title: 'Entrega profesional', desc: 'Deploy automatizado, documentación y soporte incluido.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
