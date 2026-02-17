import { motion } from 'framer-motion';
import { ArrowUp, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { useInView } from '@/hooks';
import { WHATSAPP_URL, SOCIAL_LINKS } from '@/utils/constants';
import { Logo } from '@/components/ui';

export function Contact() {
  const { ref, inView } = useInView();

  return (
    <>
      <section id="contact" className="relative py-32 overflow-hidden">
        {/* Section divider */}
        <div className="absolute top-0 inset-x-0 section-divider" />

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-600/5 via-violet-600/3 to-transparent rounded-full blur-[150px]" />
        </div>

        <div ref={ref} className="relative max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs font-semibold text-emerald-400 tracking-[0.15em] uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
              Contacto
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title text-white mb-5"
            >
              ¿Listo para{' '}
              <span className="gradient-text">digitalizar tu negocio</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="section-subtitle mx-auto"
            >
              Cuéntame sobre tu proyecto y te preparo una propuesta personalizada.
              Sin compromisos, sin costo inicial.
            </motion.p>
          </div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="card-premium p-10 md:p-14 text-center relative"
          >
            {/* Top accent */}
            <div className="absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

            {/* WhatsApp CTA */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="btn-whatsapp text-lg px-12 py-5 rounded-2xl group relative overflow-hidden inline-flex"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current relative z-10" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="relative z-10">Escríbeme por WhatsApp</span>
            </motion.a>

            {/* Contact details grid */}
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {[
                { icon: Phone, label: '+52 55 8617 8667', sub: 'WhatsApp disponible' },
                { icon: Mail, label: 'larios4212@outlook.com', sub: 'Respuesta en 24h' },
                { icon: MapPin, label: 'Ciudad de México', sub: 'Remoto / Presencial' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                >
                  <item.icon className="w-5 h-5 text-slate-500" />
                  <p className="text-sm text-white font-medium">{item.label}</p>
                  <p className="text-[11px] text-slate-600">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            {SOCIAL_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
                className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.05]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Logo />

          <p className="text-xs text-slate-600 flex items-center gap-1.5">
             {new Date().getFullYear()} Larios Digital Systems. Hecho con{' '}
            <Heart className="w-3 h-3 text-red-500 fill-red-500" /> en México.
          </p>

          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </footer>
    </>
  );
}
