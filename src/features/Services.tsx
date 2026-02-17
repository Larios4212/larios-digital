import { motion } from 'framer-motion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useInView } from '@/hooks';
import { SERVICES } from '@/utils/constants';

export function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 inset-x-0 section-divider" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/3 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs font-semibold text-blue-400 tracking-[0.15em] uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-soft" />
            Servicios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-white mb-5"
          >
            Soluciones que{' '}
            <span className="gradient-text">impulsan</span> tu negocio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Desarrollo software a medida con arquitectura profesional, diseño premium y
            enfoque en resultados tangibles para tu operación.
          </motion.p>
        </div>

        {/* Grid  first row 3, second row 2 centered */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`card-premium p-7 group hover:bg-white/[0.05] transition-all duration-500 ${
                i >= 3 ? 'lg:col-span-1 lg:last:col-start-2' : ''
              }`}
            >
              {/* Beam effect on hover */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Number + icon row */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 flex items-center justify-center group-hover:from-blue-500/25 group-hover:to-violet-500/25 group-hover:scale-110 transition-all duration-500">
                  <s.icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <span className="text-[10px] font-bold text-white/[0.08] group-hover:text-white/[0.15] transition-colors duration-300 font-display text-3xl">
                  0{i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-2.5 flex items-center gap-2">
                  {s.title}
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </h3>
                <p className="text-sm text-slate-400 mb-5 leading-relaxed">{s.description}</p>

                {/* Features */}
                <ul className="space-y-2.5">
                  {s.features.map((f, fi) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 + fi * 0.05, duration: 0.4 }}
                      className="flex items-center gap-2.5 text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/70 flex-shrink-0" />
                      {f}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
