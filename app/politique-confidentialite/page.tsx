import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité — Kiff Cleaning Solutions',
  description: 'Politique de confidentialité et conformité RGPD de Kiff Cleaning Solutions.',
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">

            <div className="mb-12 pb-6 border-b border-slate-200">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Politique de Confidentialité</h1>
              <p className="text-slate-600">Conformité RGPD — Gestion de vos données personnelles</p>
            </div>

            <div className="space-y-8">

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">1. Responsable du traitement</h2>
                <div className="text-slate-700 space-y-2 text-sm">
                  <p><strong>Entreprise :</strong> {SITE.name}</p>
                  <p><strong>Adresse :</strong> {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}, {SITE.address.country}</p>
                  <p>
                    <strong>Contact :</strong>{' '}
                    <a href={`mailto:${SITE.email}`} className="text-green-kiff hover:underline">{SITE.email}</a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">2. Données personnelles collectées</h2>
                <p className="text-slate-700 text-sm mb-3">Sur ce site, nous collectons les données personnelles suivantes :</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                  <li><strong>Via le formulaire de contact/devis :</strong> Nom, Prénom, Email, Téléphone, Adresse, Description de la situation</li>
                  <li><strong>Via les logs serveur :</strong> Adresse IP, Type de navigateur, Pages visitées (données anonymisées par défaut)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">3. Finalités du traitement</h2>
                <p className="text-slate-700 text-sm mb-3">Vos données sont traitées pour les finalités suivantes :</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                  <li>Répondre à votre demande de devis ou de renseignement</li>
                  <li>Organiser votre intervention ou prestation</li>
                  <li>Vous envoyer des confirmations et rapports d&apos;intervention</li>
                  <li>Améliorer la qualité de notre service (analytics non-nominatif)</li>
                  <li>Respecter nos obligations légales (factures, assurance)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">4. Base légale du traitement</h2>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Le traitement de vos données est justifié par : (a) votre consentement explicite au moment du formulaire,
                  (b) l&apos;exécution du contrat de prestation de service, ou (c) nos obligations légales.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">5. Durée de conservation</h2>
                <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                  <li><strong>Formulaires de devis :</strong> 3 ans (pour suivi client)</li>
                  <li><strong>Factures/Contrats :</strong> 10 ans (obligation légale)</li>
                  <li><strong>Données de contact :</strong> 2 ans après dernière interaction</li>
                  <li><strong>Logs analytiques :</strong> 13 mois maximum</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">6. Vos droits RGPD</h2>
                <p className="text-slate-700 text-sm mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                  <li><strong>Droit d&apos;accès :</strong> Demander l&apos;accès à vos données</li>
                  <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
                  <li><strong>Droit à l&apos;oubli :</strong> Demander la suppression de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format lisible</li>
                  <li><strong>Droit d&apos;opposition :</strong> Vous opposer au traitement marketing</li>
                  <li><strong>Droit de retirer le consentement :</strong> À tout moment</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">7. Comment exercer vos droits</h2>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Pour exercer l&apos;un de vos droits, envoyez une demande écrite à :
                </p>
                <p className="text-slate-700 text-sm mt-3">
                  <strong>Email :</strong>{' '}
                  <a href={`mailto:${SITE.email}`} className="text-green-kiff hover:underline">{SITE.email}</a>
                  <br />
                  <strong>Courrier :</strong> {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}
                </p>
                <p className="text-slate-700 text-sm mt-3">Nous vous répondrons sous 30 jours.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">8. Sécurité de vos données</h2>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Vos données sont stockées de manière sécurisée sur des serveurs protégés (hébergement cloud certifié).
                  Nous utilisons le chiffrement HTTPS pour tous les formulaires. En cas de violation de données,
                  nous vous informerons dans les délais légaux imposés par le RGPD.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">9. Réclamation auprès de la CNIL</h2>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Si vous estimez que le traitement de vos données viole le RGPD, vous pouvez déposer une réclamation
                  auprès de la Commission Nationale de l&apos;Informatique et des Libertés (CNIL) :
                </p>
                <p className="text-slate-700 text-sm mt-3">
                  <strong>CNIL</strong><br />
                  8 rue Vivienne, 75002 Paris<br />
                  Tél : 01 53 73 22 22<br />
                  Site :{' '}
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-green-kiff hover:underline">
                    www.cnil.fr
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">10. Modifications de cette politique</h2>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Cette politique peut être modifiée à tout moment. Les modifications majeures vous seront notifiées par email.
                  La date de dernière mise à jour est indiquée en bas de cette page.
                </p>
              </section>

              <div className="mt-12 pt-6 border-t border-slate-200">
                <p className="text-xs text-slate-500 text-center">
                  Dernière mise à jour : Janvier 2026 —{' '}
                  <a href={`mailto:${SITE.email}`} className="text-green-kiff hover:underline">{SITE.email}</a>
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
