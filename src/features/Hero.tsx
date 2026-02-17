import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, Globe, Palette } from 'lucide-react';
import { useRef } from 'react';
import { useMouseParallax } from '@/hooks';
import { WHATSAPP_URL } from '@/utils/constants';

/*  Orbital ring component  */
function OrbitalRing({ radius, duration, dotCount, color, reverse = false }: {
  radius: number; duration: number; dotCount: number; color: string; reverse?: boolean;
}) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      {/* Ring outline */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]"
        style={{ width: radius * 2, height: radius * 2 }}
      />
      {/* Orbiting dots */}
      {Array.from({ length: dotCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2"
          style={{ width: 0, height: 0 }}
          animate={{ rotate: reverse ? -360 : 360 }}
          transition={{ duration, repeat: Infinity, ease: 'linear', delay: (duration / dotCount) * i }}
        >
          <div
            className="rounded-full"
            style={{
              width: 4 + Math.random() * 3,
              height: 4 + Math.random() * 3,
              backgroundColor: color,
              transform: `translateX(${radius}px)`,
              filter: `blur(${Math.random() > 0.5 ? 1 : 0}px)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/*  Floating tech badge  */
function FloatingBadge({ icon: Icon, label, className, delay }: {
  icon: React.FC<{ className?: string }>; label: string; className: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.7, type: 'spring', stiffness: 100 }}
      className={`absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md ${className}`}
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: delay * 0.5 }}
      >
        <div className="flex items-center gap-2">
          <Icon className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[11px] font-medium text-slate-400">{label}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

/*  Stagger text container  */
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

const charVariant = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span variants={staggerContainer} initial="hidden" animate="visible" className={className}>
      {text.split('').map((ch, i) => (
        <motion.span key={i} variants={charVariant} className="inline-block" style={{ whiteSpace: ch === ' ' ? 'pre' : undefined }}>
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </motion.span>
  );
}

/*  Main Hero  */
export function Hero() {
  const mouse = useMouseParallax(0.5);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/*  Background layers with parallax  */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        {/* Primary gradient mesh */}
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full opacity-100"
          style={{
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, rgba(99,102,241,0.04) 40%, transparent 70%)',
            x: mouse.x * -20,
            y: mouse.y * -15,
          }}
        />
        {/* Secondary glow */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full animate-glow"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 60%)',
            x: mouse.x * 15,
            y: mouse.y * 10,
          }}
        />
        {/* Accent warm glow */}
        <motion.div
          className="absolute bottom-1/4 left-1/5 w-[400px] h-[400px] rounded-full animate-glow"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 60%)',
            animationDelay: '3s',
            x: mouse.x * 25,
            y: mouse.y * 20,
          }}
        />

        {/* Precision grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Orbital rings */}
        <div className="opacity-40">
          <OrbitalRing radius={200} duration={25} dotCount={5} color="rgba(99,102,241,0.5)" />
          <OrbitalRing radius={320} duration={35} dotCount={7} color="rgba(59,130,246,0.3)" reverse />
          <OrbitalRing radius={440} duration={45} dotCount={4} color="rgba(139,92,246,0.25)" />
        </div>

        {/* Floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 2 + Math.random() * 3,
              height: 2 + Math.random() * 3,
              background: `rgba(${120 + Math.random() * 80}, ${100 + Math.random() * 80}, 246, ${0.2 + Math.random() * 0.3})`,
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              y: [0, -(20 + Math.random() * 30), 0],
              x: [0, (Math.random() - 0.5) * 20, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3, ease: 'easeInOut' }}
          />
        ))}

        {/* Light beams */}
        <div className="absolute top-0 left-1/4 w-px h-1/2 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-1/3 bg-gradient-to-b from-violet-500/8 via-transparent to-transparent" />
      </motion.div>

      {/*  Floating tech badges  */}
      <FloatingBadge icon={Zap} label="TypeScript" className="top-[22%] left-[8%]" delay={1.2} />
      <FloatingBadge icon={Shield} label="Seguridad" className="top-[18%] right-[10%]" delay={1.5} />
      <FloatingBadge icon={Globe} label="Deploy Global" className="bottom-[28%] left-[6%]" delay={1.8} />
      <FloatingBadge icon={Palette} label="UI Premium" className="bottom-[22%] right-[8%]" delay={2.0} />

      {/*  Main content with scroll fade  */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ opacity: contentOpacity, scale: contentScale }}
      >
        {/* Badge with shimmer */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-10 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
          <Sparkles className="w-4 h-4 text-blue-400 relative z-10" />
          <span className="text-xs font-semibold text-slate-300 tracking-widest uppercase relative z-10">Smart Business Software</span>
        </motion.div>

        {/* Headline with character-by-character reveal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.2rem] font-extrabold font-display leading-[1.05] mb-7">
          <AnimatedText text="Desarrollo sistemas" className="block" />
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7, type: 'spring', stiffness: 80 }}
            className="gradient-text inline-block"
          >
            inteligentes
          </motion.span>
          <br />
          <AnimatedText text="para negocios " className="block" />
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.7, type: 'spring', stiffness: 80 }}
            className="gradient-text-warm inline-block"
          >
            modernos
          </motion.span>
        </h1>

        {/* Subtitle with reveal */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Automatizaci�n, dashboards ejecutivos, sistemas administrativos y soluciones SaaS
          personalizadas. Tecnolog�a que transforma operaciones en resultados.
        </motion.p>

        {/* CTA buttons with entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* WhatsApp CTA */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base group relative overflow-hidden"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current relative z-10">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="relative z-10">Cotizar por WhatsApp</span>
          </motion.a>

          <motion.a
            href="#projects"
            className="btn-secondary text-base group"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Ver Proyectos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {[
            { icon: '', label: 'React + TypeScript' },
            { icon: '', label: 'Arquitectura Modular' },
            { icon: '', label: 'Deploy Autom�tico' },
            { icon: '', label: 'Dise�o Premium' },
          ].map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-white/[0.08] transition-all duration-300"
            >
              <span className="text-lg">{t.icon}</span>
              <span className="text-[11px] text-slate-500 font-medium text-center leading-tight">{t.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] text-slate-600 tracking-[0.3em] uppercase font-medium">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/[0.08] flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1.5 rounded-full bg-blue-400/60"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
