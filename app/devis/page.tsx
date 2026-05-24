import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Devis Gratuit — Nettoyage Extrême Île-de-France',
  description: `Obtenez un devis gratuit et sans engagement pour votre nettoyage extrême, débarras ou désinfection biocide. Réponse rapide. ${SITE.phone}`,
  alternates: { canonical: `${SITE.url}/devis` },
};

export default function DevisPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section
          className="py-14 md:py-24 px-4"
          style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #112236 100%)' }}
        >
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left */}
            <div>
              <h1 className="section-title mb-4">DEVIS GRATUIT</h1>
              <p className="text-slate-400 leading-relaxed mb-10">
                Décrivez votre situation et nous vous recontactons rapidement pour
                un devis gratuit, transparent et sans engagement.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Phone, label: 'Téléphone', value: SITE.phone, href: `tel:${SITE.phoneRaw}` },
                  { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                  { icon: MapPin, label: 'Zone', value: `${SITE.address.city}, ${SITE.address.postalCode}`, href: null },
                  { icon: Clock, label: 'Disponibilité', value: SITE.hours, href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 card-dark">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-teal" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-slate-500 text-xs uppercase tracking-wider">{label}</div>
                      {href ? (
                        <a href={href} className="text-white font-semibold text-sm hover:text-teal transition-colors break-words">
                          {value}
                        </a>
                      ) : (
                        <div className="text-white font-semibold text-sm break-words">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="card-dark">
              <h2 className="text-white font-bold text-xl mb-6">Votre demande</h2>
              <LeadForm variant="quote" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
