import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Monitor } from 'lucide-react';
import { useInView } from '@/hooks';
import { PROJECTS, WHATSAPP_URL } from '@/utils/constants';

/* Browser mockup frame around each project card header */
function BrowserMockup({ gradient, children }: { gradient: string; children: React.ReactNode }) {
  return (
    <div className={`relative bg-gradient-to-br ${gradient} overflow-hidden`}>
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-black/20">
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/20" />
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/15" />
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/10" />
        <div className="ml-2 sm:ml-3 flex-1 h-4 sm:h-5 rounded-md bg-white/10 max-w-[140px] sm:max-w-[180px]" />
      </div>
      {children}
    </div>
  );
}

export function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 inset-x-0 section-divider" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-violet-600/5 rounded-full blur-[180px]" />
        <div className="absolute top-1/4 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-600/3 rounded-full blur-[140px]" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs font-semibold text-violet-400 tracking-[0.15em] uppercase mb-4 sm:mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse-soft" />
            Proyectos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-white mb-4 sm:mb-5"
          >
            Sistemas en{' '}
            <span className="gradient-text">producción</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto px-2"
          >
            Cada proyecto es un sistema completo con dashboard, gestión de datos, analytics y
            diseño profesional. Todos desplegados y funcionales.
          </motion.p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`card-premium group overflow-hidden ${
                PROJECTS.length % 2 !== 0 && i === PROJECTS.length - 1 ? 'md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto' : ''
              }`}
            >
              {/* Browser mockup header */}
              <BrowserMockup gradient={p.gradient}>
                <div className="relative h-32 sm:h-44 p-4 sm:p-5 overflow-hidden">
                  {/* Abstract UI mockup with better elements */}
                  <div className="absolute inset-0 opacity-[0.08]">
                    {/* Sidebar */}
                    <div className="absolute top-0 left-0 w-12 sm:w-16 h-full bg-white/20" />
                    {/* Top bar */}
                    <div className="absolute top-3 left-16 sm:left-20 right-4 h-5 sm:h-6 bg-white/15 rounded" />
                    {/* Cards row */}
                    <div className="absolute top-12 sm:top-14 left-16 sm:left-20 right-4 flex gap-2">
                      <div className="flex-1 h-12 sm:h-16 bg-white/12 rounded" />
                      <div className="flex-1 h-12 sm:h-16 bg-white/10 rounded" />
                      <div className="flex-1 h-12 sm:h-16 bg-white/8 rounded hidden sm:block" />
                    </div>
                    {/* Chart area */}
                    <div className="absolute bottom-3 left-16 sm:left-20 right-4 h-10 sm:h-14 bg-white/8 rounded" />
                  </div>

                  {/* Hover glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating icon with glow */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg"
                    >
                      <p.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Live badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] font-semibold text-white/80">Live</span>
                  </div>

                  {/* Stats overlay */}
                  <div className="absolute bottom-2 sm:bottom-3 right-3 sm:right-4 flex gap-1.5 sm:gap-2">
                    {p.stats.map(s => (
                      <div key={s.label} className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-black/25 backdrop-blur-md border border-white/[0.08]">
                        <p className="text-white font-bold text-xs sm:text-sm leading-none">{s.value}</p>
                        <p className="text-white/50 text-[8px] sm:text-[9px] mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </BrowserMockup>

              {/* Content */}
              <div className="p-5 sm:p-7">
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">{p.name}</h3>
                    <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">{p.tagline}</p>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 sm:mb-5">{p.description}</p>

                {/* Tags with better styling */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-7">
                  {p.tags.map(t => (
                    <span key={t} className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[10px] sm:text-[11px] font-semibold text-slate-400 hover:text-white hover:border-white/[0.12] transition-all duration-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions with premium styling */}
                <div className="flex gap-2 sm:gap-3">
                  <motion.a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-xs sm:text-sm font-semibold text-white hover:bg-white/[0.12] hover:border-white/[0.2] transition-all duration-300 min-h-[44px]"
                  >
                    <Monitor className="w-4 h-4" />
                    Ver Demo
                  </motion.a>
                  <motion.a
                    href={`${WHATSAPP_URL}%20%20Me%20interesa%20un%20sistema%20como%20${p.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-blue-600/80 to-violet-600/80 hover:from-blue-600 hover:to-violet-600 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 transition-all duration-300 min-h-[44px]"
                  >
                    Solicitar
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">¿Necesitas algo diferente?</p>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="btn-primary text-xs sm:text-sm"
          >
            Solicita tu sistema personalizado
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
