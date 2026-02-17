import { motion } from 'framer-motion';
import { Code2, Cpu, LayoutDashboard, Rocket, Users, Award, Terminal, GitBranch } from 'lucide-react';
import { useInView, useAnimatedCounter } from '@/hooks';

const HIGHLIGHTS = [
  { icon: Code2, label: 'React + TypeScript', detail: 'Stack principal' },
  { icon: LayoutDashboard, label: 'Dashboards', detail: 'Analytics en tiempo real' },
  { icon: Cpu, label: 'Automatización', detail: 'Procesos inteligentes' },
  { icon: Rocket, label: 'Deploy Continuo', detail: 'CI/CD automatizado' },
  { icon: Users, label: 'Multi-usuario', detail: 'Roles y permisos' },
  { icon: Award, label: 'Diseño Premium', detail: 'UI/UX profesional' },
];

/* Animated stat counter */
function StatCounter({ value, label, inView }: { value: number; label: string; inView: boolean }) {
  const count = useAnimatedCounter(inView ? value : 0, 1800);
  return (
    <div className="text-center">
      <p className="text-2xl sm:text-3xl font-bold gradient-text tabular-nums">{count}{value === 100 ? '%' : '+'}</p>
      <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1 font-medium">{label}</p>
    </div>
  );
}

/* Decorative code snippet */
function CodeDecoration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="absolute -right-4 top-8 hidden xl:block"
    >
      <div className="glass rounded-xl p-4 text-[10px] font-mono text-slate-500 leading-relaxed">
        <div className="flex items-center gap-1.5 mb-2">
          <Terminal className="w-3 h-3 text-blue-400" />
          <span className="text-blue-400 text-[9px]">larios-digital</span>
        </div>
        <div><span className="text-violet-400">const</span> <span className="text-blue-300">config</span> = {'{'}</div>
        <div className="pl-4"><span className="text-emerald-400">stack</span>: <span className="text-amber-300">&apos;React + TS&apos;</span>,</div>
        <div className="pl-4"><span className="text-emerald-400">quality</span>: <span className="text-amber-300">&apos;premium&apos;</span>,</div>
        <div className="pl-4"><span className="text-emerald-400">deploy</span>: <span className="text-amber-300">&apos;automatic&apos;</span>,</div>
        <div>{'}'}</div>
      </div>
    </motion.div>
  );
}

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 inset-x-0 section-divider" />

      {/* Bg effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-blue-600/4 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet-600/3 rounded-full blur-[160px]" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* Left visual card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="card-premium p-5 sm:p-8 relative">
              {/* Top gradient accent */}
              <div className="absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

              {/* Avatar area */}
              <div className="flex items-center gap-4 sm:gap-5 mb-7 sm:mb-9">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-xl shadow-blue-600/25">
                    AL
                  </div>
                  {/* Status dot */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#06080f] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </motion.div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Armando Larios</h3>
                  <p className="text-xs sm:text-sm text-blue-400 font-medium">Ingeniero en Computación</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <GitBranch className="w-3 h-3 text-slate-600" />
                    <p className="text-[10px] sm:text-[11px] text-slate-500">Full Stack Developer</p>
                  </div>
                </div>
              </div>

              {/* Skill grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {HIGHLIGHTS.map((h, i) => (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.06] hover:border-white/[0.1] group/skill transition-all duration-300 cursor-default"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600/15 to-violet-600/15 flex items-center justify-center flex-shrink-0 group-hover/skill:from-blue-600/25 group-hover/skill:to-violet-600/25 transition-all duration-300">
                      <h.icon className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-blue-400 group-hover/skill:text-blue-300 transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs font-semibold text-white leading-tight truncate">{h.label}</p>
                      <p className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5 truncate">{h.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom stats with animated counters */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-7 border-t border-white/[0.06] grid grid-cols-3 gap-4 sm:gap-6">
                <StatCounter value={6} label="Sistemas" inView={inView} />
                <StatCounter value={30} label="Módulos" inView={inView} />
                <StatCounter value={100} label="Entregados" inView={inView} />
              </div>
            </div>

            {/* Code decoration */}
            <CodeDecoration />
          </motion.div>

          {/* Right text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs font-semibold text-blue-400 tracking-[0.15em] uppercase mb-4 sm:mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-soft" />
              Sobre mí
            </motion.span>
            <h2 className="section-title text-white mb-5 sm:mb-7">
              Ingeniería de software{' '}
              <span className="gradient-text">aplicada a negocios</span>
            </h2>

            <div className="space-y-4 sm:space-y-5 text-sm sm:text-[15px] text-slate-400 leading-[1.7] sm:leading-[1.8]">
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

            {/* Philosophy cards with premium styling */}
            <div className="mt-8 sm:mt-10 space-y-2.5 sm:space-y-3">
              {[
                { title: 'Código limpio', desc: 'TypeScript estricto, componentes modulares, zero warnings.', accent: 'from-blue-500' },
                { title: 'Diseño funcional', desc: 'Interfaces que combinan estética y usabilidad real.', accent: 'from-violet-500' },
                { title: 'Entrega profesional', desc: 'Deploy automatizado, documentación y soporte incluido.', accent: 'from-emerald-500' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300 group/philo"
                >
                  <div className={`w-1 h-7 sm:h-8 rounded-full bg-gradient-to-b ${item.accent} to-transparent flex-shrink-0 mt-0.5 group-hover/philo:h-9 sm:group-hover/philo:h-10 transition-all duration-300`} />
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-white mb-0.5">{item.title}</p>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">{item.desc}</p>
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
