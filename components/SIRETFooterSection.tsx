// components/SIRETFooterSection.tsx — Affichage SIRET élégant en pied de page

'use client';

import Link from 'next/link';
import { Shield, FileText, Lock } from 'lucide-react';
import { SITE } from '@/lib/seo';

/**
 * Cette section peut être ajoutée au Footer pour afficher
 * les éléments légaux et de confiance de manière élégante.
 * 
 * ✅ Affiche SIRET de l'entreprise
 * ✅ Liens vers mentions légales
 * ✅ Liens vers RGPD/Politique Confidentialité
 * ✅ Responsive et accessible
 */

export function SIRETFooterSection() {
    return (
        <section className="border-t border-slate-200 bg-slate-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Row 1: Company Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Company Details */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-kiff" />
                            Entreprise
                        </h3>
                        <p className="text-sm text-slate-600 mb-2">
                            <strong>{SITE.name}</strong>
                        </p>
                        <p className="text-xs text-slate-500 mb-3">
                            📍 {SITE.address.street}<br />
                            {SITE.address.postalCode} {SITE.address.city}<br />
                            {SITE.address.region}, {SITE.address.country}
                        </p>
                        <p className="text-xs text-slate-500 font-mono bg-white border border-slate-200 rounded px-2 py-1 inline-block">
                            SIRET: À remplir
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-3">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href={`tel:${SITE.phoneRaw}`} className="text-green-kiff hover:underline">
                                    {SITE.phone}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${SITE.email}`} className="text-green-kiff hover:underline">
                                    {SITE.email}
                                </a>
                            </li>
                            <li className="text-slate-600">24h/24 - 7j/7</li>
                        </ul>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-green-kiff" />
                            Certifications
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex gap-2">
                                <span className="text-green-kiff">✓</span>
                                <span>Biocides Certibiocide</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-green-kiff">✓</span>
                                <span>Traçabilité BSD</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-green-kiff">✓</span>
                                <span>Conforme RGPD</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-200 mb-8" />

                {/* Row 2: Legal + Privacy */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs">
                        <Link
                            href="/mentions-legales"
                            className="text-slate-600 hover:text-green-kiff transition-colors flex items-center gap-1"
                        >
                            <FileText className="w-3 h-3" />
                            Mentions légales
                        </Link>

                        <div className="h-3 w-px bg-slate-300" />

                        <Link
                            href="/politique-confidentialite"
                            className="text-slate-600 hover:text-green-kiff transition-colors flex items-center gap-1"
                        >
                            <Lock className="w-3 h-3" />
                            Politique de confidentialité
                        </Link>

                        <div className="h-3 w-px bg-slate-300" />

                        <a
                            href={`mailto:${SITE.email}`}
                            className="text-slate-600 hover:text-green-kiff transition-colors"
                        >
                            Nous contacter
                        </a>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 text-center text-xs text-slate-500">
                    <p>
                        N° SIRET : <strong>À remplir</strong> | Basée à {SITE.address.city} ({SITE.address.postalCode})
                    </p>
                </div>
            </div>
        </section>
    );
}

/**
 * 💡 UTILISATION
 * 
 * Importer dans Footer.tsx:
 * 
 * import { SIRETFooterSection } from '@/components/SIRETFooterSection';
 * 
 * export function Footer() {
 *   return (
 *     <footer>
 *       <SIRETFooterSection />
 *     </footer>
 *   );
 * }
 */
