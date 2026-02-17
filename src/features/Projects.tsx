import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks';
import { PROJECTS, WHATSAPP_URL } from '@/utils/constants';

export function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Bg effect */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-violet-400 tracking-[0.2em] uppercase mb-3 block">
            Proyectos
          </span>
          <h2 className="section-title text-white mb-4">
            Sistemas en{' '}
            <span className="gradient-text">producción</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Cada proyecto es un sistema completo con dashboard, gestión de datos, analytics y
            diseño profesional. Todos desplegados y funcionales.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.6 }}
              className="glass-hover rounded-3xl overflow-hidden group"
            >
              {/* Gradient header mockup */}
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient} p-6 overflow-hidden`}>
                {/* Abstract mockup */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-6 right-6 h-8 bg-white/20 rounded-lg" />
                  <div className="absolute top-16 left-6 w-1/3 h-20 bg-white/15 rounded-lg" />
                  <div className="absolute top-16 left-[40%] w-1/4 h-20 bg-white/10 rounded-lg" />
                  <div className="absolute top-16 right-6 w-1/4 h-20 bg-white/10 rounded-lg" />
                  <div className="absolute bottom-4 left-6 right-6 h-12 bg-white/10 rounded-lg" />
                </div>

                {/* Floating icon */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <p.icon className="w-7 h-7 text-white" />
                </div>

                {/* Stats overlay */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {p.stats.map(s => (
                    <div key={s.label} className="px-3 py-1.5 rounded-lg bg-black/20 backdrop-blur-sm">
                      <p className="text-white/90 text-xs font-bold">{s.value}</p>
                      <p className="text-white/50 text-[9px]">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{p.name}</h3>
                  <p className="text-sm text-slate-500 font-medium">{p.tagline}</p>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{p.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] font-medium text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-white/[0.08] to-white/[0.04] border border-white/[0.1] text-sm font-semibold text-white hover:bg-white/[0.12] hover:border-white/[0.18] transition-all duration-300"
                  >
                    Ver Demo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`${WHATSAPP_URL}%20—%20Me%20interesa%20un%20sistema%20como%20${p.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600/80 to-violet-600/80 hover:from-blue-600 hover:to-violet-600 text-sm font-semibold text-white transition-all duration-300"
                  >
                    Solicitar <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
