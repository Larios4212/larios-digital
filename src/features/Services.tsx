import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useInView } from '@/hooks';
import { SERVICES } from '@/utils/constants';

export function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-blue-400 tracking-[0.2em] uppercase mb-3 block">
            Servicios
          </span>
          <h2 className="section-title text-white mb-4">
            Soluciones que{' '}
            <span className="gradient-text">impulsan</span> tu negocio
          </h2>
          <p className="section-subtitle mx-auto">
            Desarrollo software a medida con arquitectura profesional, diseño premium y
            enfoque en resultados tangibles para tu operación.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="glass-hover rounded-2xl p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 flex items-center justify-center mb-5 group-hover:from-blue-500/25 group-hover:to-violet-500/25 transition-all duration-300">
                <s.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">{s.description}</p>
              <ul className="space-y-2">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/70 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
