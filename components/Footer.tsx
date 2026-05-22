import Link from 'next/link';
import { Shield, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SITE, SERVICES } from '@/lib/seo';

export default function Footer() {
  return (
    <footer className="bg-[#0a1520] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <Shield className="w-5 h-5 text-teal" strokeWidth={1.5} />
            <span className="text-white font-extrabold text-sm tracking-widest uppercase">
              KIFF CLEANING
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Spécialiste du nettoyage extrême, débarras et désinfection biocide en
            Île-de-France. Intervention 24h/24, 7j/7.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase text-white mb-4">
            NOS SERVICES
          </h3>
          <ul className="space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-slate-400 text-sm hover:text-teal transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase text-white mb-4">
            NAVIGATION
          </h3>
          <ul className="space-y-2.5">
            {[
              { href: '/', label: 'Accueil' },
              { href: '/zones', label: "Zone d'Intervention" },
              { href: '/devis', label: 'Devis Gratuit' },
              { href: '/contact', label: 'Contact' },
              { href: '/blog', label: 'Blog' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-slate-400 text-sm hover:text-teal transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact — NAP cohérent pour SEO local */}
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase text-white mb-4">
            CONTACT
          </h3>
          <address className="not-italic space-y-3">
            <div className="flex items-start gap-2.5 text-slate-400 text-sm">
              <MapPin className="w-4 h-4 text-teal mt-0.5 shrink-0" />
              <span>{SITE.address.city}, {SITE.address.postalCode}</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 text-sm">
              <Phone className="w-4 h-4 text-teal shrink-0" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-teal transition-colors">
                {SITE.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 text-sm">
              <Mail className="w-4 h-4 text-teal shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-teal transition-colors">
                {SITE.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 text-sm">
              <Clock className="w-4 h-4 text-teal shrink-0" />
              <span>{SITE.hours}</span>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>© 2025 Kiff Cleaning Solutions. Tous droits réservés.</span>
          <span>Véhicules banalisés • Discrétion totale • Devis gratuit</span>
        </div>
      </div>
    </footer>
  );
}
