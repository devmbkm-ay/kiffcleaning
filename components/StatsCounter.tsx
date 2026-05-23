'use client';
import { useEffect, useRef, useState } from 'react';

type Stat = {
  numeric: number | null;
  suffix?: string;
  display: string;
  label: string;
};

function CountUp({
  target,
  suffix = '',
  started,
}: {
  target: number;
  suffix?: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target]);

  const formatted = count >= 1000 ? count.toLocaleString('fr-FR') : String(count);

  return <>{formatted}{suffix}</>;
}

export default function StatsCounter({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-3 sm:gap-4">
      {stats.map((s, i) => (
        <div key={i} className="card-dark text-center py-5 sm:py-8 px-2">
          <div className="text-xl sm:text-3xl font-extrabold text-teal mb-1 leading-tight break-words">
            {s.numeric !== null ? (
              <CountUp target={s.numeric} suffix={s.suffix} started={started} />
            ) : (
              s.display
            )}
          </div>
          <div className="text-slate-400 text-xs sm:text-sm leading-snug">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
