import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { useInView } from '@/hooks';
import { WHATSAPP_URL, SOCIAL_LINKS } from '@/utils/constants';
import { Logo } from '@/components/ui';

export function Contact() {
  const { ref, inView } = useInView();

  return (
    <>
      <section id="contact" className="relative py-28 overflow-hidden">
        {/* Bg effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-600/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div ref={ref} className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold text-emerald-400 tracking-[0.2em] uppercase mb-3 block">
              Contacto
            </span>
            <h2 className="section-title text-white mb-4">
              ¿Listo para{' '}
              <span className="gradient-text">digitalizar tu negocio</span>?
            </h2>
            <p className="section-subtitle mx-auto mb-10">
              Cuéntame sobre tu proyecto y te preparo una propuesta personalizada.
              Sin compromisos, sin costo inicial.
            </p>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-3 text-lg px-10 py-5 rounded-2xl"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escríbeme por WhatsApp
            </a>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500"
          >
            <span>📱 +52 55 8617 8667</span>
            <span className="hidden sm:block">·</span>
            <span>📧 larios4212@outlook.com</span>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo />

          <p className="text-xs text-slate-600 flex items-center gap-1.5">
            © {new Date().getFullYear()} Larios Digital Systems. Hecho con{' '}
            <Heart className="w-3 h-3 text-red-500 fill-red-500" /> en México.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/[0.1] transition-all duration-300"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </>
  );
}
