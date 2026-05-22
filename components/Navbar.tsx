'use client';

import Link from 'next/link';
import { Phone, Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { SITE } from '@/lib/seo';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur border-b border-white/5">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Shield className="w-6 h-6 text-teal" strokeWidth={1.5} aria-hidden />
          <div>
            <span className="text-white font-extrabold text-base tracking-wide uppercase leading-none">
              KIFF CLEANING
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.2em] text-teal uppercase leading-none mt-0.5">
              SOLUTIONS
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="nav-link">Accueil</Link>
          <Link href="/zones" className="nav-link">Zone d'Intervention</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="btn-primary pulse-ring"
            aria-label="Appel urgence 24h/24"
          >
            <Phone className="w-4 h-4" />
            Urgence 24h/24
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-800 border-t border-white/5 px-4 py-4 flex flex-col gap-4">
          <Link href="/" className="nav-link" onClick={() => setOpen(false)}>Accueil</Link>
          <Link href="/zones" className="nav-link" onClick={() => setOpen(false)}>Zone d'Intervention</Link>
          <Link href="/services" className="nav-link" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/blog" className="nav-link" onClick={() => setOpen(false)}>Blog</Link>
          <a href={`tel:${SITE.phoneRaw}`} className="btn-primary justify-center">
            <Phone className="w-4 h-4" />
            Urgence 24h/24
          </a>
        </div>
      )}
    </header>
  );
}
