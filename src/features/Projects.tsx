import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Monitor } from 'lucide-react';
import { useInView } from '@/hooks';
import { PROJECTS, WHATSAPP_URL } from '@/utils/constants';

/* Browser mockup frame around each project card header */
function BrowserMockup({ gradient, children }: { gradient: string; children: React.ReactNode }) {
  return (
    <div className={`relative bg-gradient-to-br ${gradient} overflow-hidden`}>
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-black/20">
        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="ml-3 flex-1 h-5 rounded-md bg-white/10 max-w-[180px]" />
      </div>
      {children}
    </div>
  );
}

export function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 inset-x-0 section-divider" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[180px]" />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-600/3 rounded-full blur-[140px]" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs font-semibold text-violet-400 tracking-[0.15em] uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse-soft" />
            Proyectos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-white mb-5"
          >
            Sistemas en{' '}
            <span className="gradient-text">producci�n</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Cada proyecto es un sistema completo con dashboard, gesti�n de datos, analytics y
            dise�o profesional. Todos desplegados y funcionales.
          </motion.p>
        </div>

        {/* Project cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="card-premium group overflow-hidden"
            >
              {/* Browser mockup header */}
              <BrowserMockup gradient={p.gradient}>
                <div className="relative h-44 p-5 overflow-hidden">
                  {/* Abstract UI mockup with better elements */}
                  <div className="absolute inset-0 opacity-[0.08]">
                    {/* Sidebar */}
                    <div className="absolute top-0 left-0 w-16 h-full bg-white/20" />
                    {/* Top bar */}
                    <div className="absolute top-3 left-20 right-4 h-6 bg-white/15 rounded" />
                    {/* Cards row */}
                    <div className="absolute top-14 left-20 right-4 flex gap-2">
                      <div className="flex-1 h-16 bg-white/12 rounded" />
                      <div className="flex-1 h-16 bg-white/10 rounded" />
                      <div className="flex-1 h-16 bg-white/8 rounded" />
                    </div>
                    {/* Chart area */}
                    <div className="absolute bottom-3 left-20 right-4 h-14 bg-white/8 rounded" />
                  </div>

                  {/* Hover glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating icon with glow */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg"
                    >
                      <p.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Live badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-semibold text-white/80">Live</span>
                  </div>

                  {/* Stats overlay */}
                  <div className="absolute bottom-3 right-4 flex gap-2">
                    {p.stats.map(s => (
                      <div key={s.label} className="px-3 py-2 rounded-lg bg-black/25 backdrop-blur-md border border-white/[0.08]">
                        <p className="text-white font-bold text-sm leading-none">{s.value}</p>
                        <p className="text-white/50 text-[9px] mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </BrowserMockup>

              {/* Content */}
              <div className="p-7">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">{p.name}</h3>
                    <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                  <p className="text-sm text-slate-500 font-medium">{p.tagline}</p>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{p.description}</p>

                {/* Tags with better styling */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {p.tags.map(t => (
                    <span key={t} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] font-semibold text-slate-400 hover:text-white hover:border-white/[0.12] transition-all duration-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions with premium styling */}
                <div className="flex gap-3">
                  <motion.a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-sm font-semibold text-white hover:bg-white/[0.12] hover:border-white/[0.2] transition-all duration-300"
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
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600/80 to-violet-600/80 hover:from-blue-600 hover:to-violet-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 transition-all duration-300"
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
          className="text-center mt-16"
        >
          <p className="text-sm text-slate-500 mb-4">�Necesitas algo diferente?</p>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="btn-primary text-sm"
          >
            Solicita tu sistema personalizado
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
