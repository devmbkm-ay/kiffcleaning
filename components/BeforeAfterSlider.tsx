'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt = 'Avant intervention',
  afterAlt = 'Après intervention',
}: {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
}) {
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition(Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl select-none aspect-video cursor-ew-resize"
      onMouseDown={() => { dragging.current = true; }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onMouseMove={(e) => { if (dragging.current) move(e.clientX); }}
      onTouchStart={() => { dragging.current = true; }}
      onTouchEnd={() => { dragging.current = false; }}
      onTouchMove={(e) => move(e.touches[0].clientX)}
    >
      {/* After (base layer) */}
      <Image
        src={after}
        alt={afterAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 896px"
      />

      {/* Before (clipped layer) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 896px"
        />
      </div>

      {/* Divider handle */}
      <div
        className="absolute inset-y-0 -translate-x-1/2 w-px bg-white/90 shadow-[0_0_12px_2px_rgba(255,255,255,0.4)] pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 10H2M2 10L5 7M2 10L5 13" stroke="#0d1b2a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 10H18M18 10L15 7M18 10L15 13" stroke="#0d1b2a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full pointer-events-none tracking-wide">
        AVANT
      </span>
      <span className="absolute top-4 right-4 bg-teal/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full pointer-events-none tracking-wide">
        APRÈS
      </span>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs pointer-events-none whitespace-nowrap bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
        ← Glissez pour comparer →
      </p>
    </div>
  );
}
