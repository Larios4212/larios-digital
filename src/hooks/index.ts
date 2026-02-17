import { useEffect, useRef, useState, useCallback } from 'react';

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function useAnimatedCounter(target: number, duration = 1400): number {
  const [current, setCurrent] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    startRef.current = null;
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const p = Math.min((ts - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCurrent(Math.round(eased * target));
      if (p < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return current;
}

/** Returns normalized mouse position -1..1 from center of viewport, throttled by rAF */
export function useMouseParallax(intensity = 1) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const raf = useRef(0);

  const handler = useCallback((e: MouseEvent) => {
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const x = ((e.clientX / window.innerWidth) - 0.5) * 2 * intensity;
      const y = ((e.clientY / window.innerHeight) - 0.5) * 2 * intensity;
      setPos({ x, y });
    });
  }, [intensity]);

  useEffect(() => {
    window.addEventListener('mousemove', handler, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handler);
      cancelAnimationFrame(raf.current);
    };
  }, [handler]);

  return pos;
}
