import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Mentions Légales — Kiff Cleaning Solutions',
    description: 'Mentions légales, SIRET et responsable de publication.',
    robots: { index: false, follow: false }, // Pas d'indexation pour les pages légales
};

export default function MentionsLegalesPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                <section className="py-12 px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-12 pb-6 border-b border-slate-200">
                            <h1 className="text-3xl font-bold text-slate-900 mb-2">Mentions Légales</h1>
                            <p className="text-slate-600">Informations légales et responsable de publication</p>
                        </div>

                        <div className="space-y-8">
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">1. Éditeur du site</h2>
                                <div className="text-slate-700 space-y-2 text-sm">
                                    <p><strong>Dénomination:</strong> {SITE.name}</p>
                                    <p><strong>Forme juridique:</strong> À remplir (EIRL, SARL, etc.)</p>
                                    <p><strong>SIRET:</strong> À remplir</p>
                                    <p>
                                        <strong>Adresse du siège social:</strong><br />
                                        {SITE.address.street}<br />
                                        {SITE.address.postalCode} {SITE.address.city}<br />
                                        {SITE.address.region}, {SITE.address.country}
                                    </p>
                                    <p>
                                        <strong>Téléphone:</strong> <a href={`tel:${SITE.phoneRaw}`} className="text-green-kiff hover:underline">{SITE.phone}</a>
                                    </p>
                                    <p>
                                        <strong>Email:</strong> <a href={`mailto:${SITE.email}`} className="text-green-kiff hover:underline">{SITE.email}</a>
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">2. Responsable de publication</h2>
                                <p className="text-slate-700 text-sm mb-3">
                                    <strong>Directeur de la publication:</strong> À remplir (Prénom NOM)
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">3. Hébergement du site</h2>
                                <div className="text-slate-700 space-y-2 text-sm">
                                    <p><strong>Hébergeur:</strong> Vercel Inc.</p>
                                    <p><strong>Adresse:</strong> 340 S Lemon Ave, Walnut, CA 91789, USA</p>
                                    <p>
                                        Site web: <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-green-kiff hover:underline">https://vercel.com</a>
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">4. Propriété intellectuelle</h2>
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    L'ensemble des contenus publiés sur ce site sont la propriété exclusive de {SITE.name} ou de ses partenaires.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">5. Responsabilité</h2>
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    {SITE.name} s'efforce de maintenir l'exactitude des informations publiées sur ce site.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">6. Contact</h2>
                                <p className="text-slate-700 text-sm">
                                    📧 <a href={`mailto:${SITE.email}`} className="text-green-kiff hover:underline">{SITE.email}</a>
                                </p>
                            </section>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}