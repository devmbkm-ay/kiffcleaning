import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
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
                    <div>
                      <div className="text-slate-500 text-xs uppercase tracking-wider">{label}</div>
                      {href ? (
                        <a href={href} className="text-white font-semibold text-sm hover:text-teal transition-colors">
                          {value}
                        </a>
                      ) : (
                        <div className="text-white font-semibold text-sm">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="card-dark">
              <h2 className="text-white font-bold text-xl mb-6">Votre demande</h2>
              <form className="space-y-5" action="#" method="POST">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prenom" className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5">
                      Prénom *
                    </label>
                    <input
                      id="prenom" name="prenom" type="text" required
                      className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-teal transition-colors"
                      placeholder="Jean"
                    />
                  </div>
                  <div>
                    <label htmlFor="nom" className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5">
                      Nom *
                    </label>
                    <input
                      id="nom" name="nom" type="text" required
                      className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-teal transition-colors"
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5">
                    Téléphone *
                  </label>
                  <input
                    id="telephone" name="telephone" type="tel" required
                    className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-teal transition-colors"
                    placeholder="06 00 00 00 00"
                  />
                </div>

                <div>
                  <label htmlFor="ville" className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5">
                    Ville d'intervention *
                  </label>
                  <input
                    id="ville" name="ville" type="text" required
                    className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-teal transition-colors"
                    placeholder="Paris, Meaux, Chelles…"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5">
                    Type de prestation
                  </label>
                  <select
                    id="service" name="service"
                    className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-teal transition-colors"
                  >
                    <option value="">Sélectionner…</option>
                    <option>Nettoyage Extrême</option>
                    <option>Débarras Complet</option>
                    <option>Désinfection Biocide</option>
                    <option>Nettoyage Post-Mortem</option>
                    <option>Syndrome de Diogène</option>
                    <option>Autre / Urgence</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5">
                    Description de la situation
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-teal transition-colors resize-none"
                    placeholder="Décrivez brièvement la situation (optionnel — tout reste confidentiel)."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary justify-center text-base py-4 rounded-xl"
                >
                  <Phone className="w-4 h-4" />
                  Envoyer ma demande
                </button>

                <p className="text-slate-600 text-xs text-center">
                  Vos données sont confidentielles et ne seront jamais transmises à des tiers.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
