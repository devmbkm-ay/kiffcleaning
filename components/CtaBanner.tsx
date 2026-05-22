import { Phone } from 'lucide-react';
import { SITE } from '@/lib/seo';

export default function CtaBanner() {
  return (
    <section
      className="py-20 px-4"
      style={{ background: 'linear-gradient(135deg, #0d3b2e 0%, #0a2a3d 100%)' }}
      aria-labelledby="cta-title"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          id="cta-title"
          className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-4 animate-fade-up"
        >
          BESOIN D'UNE INTERVENTION URGENTE ?
        </h2>
        <p className="text-slate-300 text-lg mb-8 animate-fade-up-delay-1">
          Contactez-nous maintenant pour un devis gratuit et une intervention rapide.
          Discrétion garantie.
        </p>
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="btn-primary text-lg px-10 py-4 rounded-xl pulse-ring animate-fade-up-delay-2"
          aria-label={`Appeler le ${SITE.phone} pour une urgence`}
        >
          <Phone className="w-5 h-5" />
          {SITE.phone}
        </a>
      </div>
    </section>
  );
}
