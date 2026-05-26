// components/HeroWithTrust.tsx — Hero section avec affichage E-E-A-T

'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';
import { SITE } from '@/lib/seo';

interface HeroWithTrustProps {
    title: string;
    subtitle: string;
    description: string;
    primaryCta: {
        label: string;
        href: string;
    };
    secondaryCta?: {
        label: string;
        href: string;
    };
}

export function HeroWithTrust({
    title,
    subtitle,
    description,
    primaryCta,
    secondaryCta,
}: HeroWithTrustProps) {
    return (
        <>
            {/* Main Hero */}
            <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
                <div className="max-w-5xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-green-kiff/10 border border-green-kiff/30">
                        <Clock className="w-4 h-4 text-green-kiff" />
                        <span className="text-sm font-semibold text-green-kiff">{subtitle}</span>
                    </div>

                    {/* Main Content */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{title}</h1>
                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">{description}</p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                {primaryCta && (
                                    <Link
                                        href={primaryCta.href}
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-kiff hover:bg-green-kiff/90 text-white font-semibold rounded-lg transition-colors"
                                    >
                                        {primaryCta.label} <ArrowRight className="w-4 h-4" />
                                    </Link>
                                )}
                                {secondaryCta && (
                                    <a
                                        href={secondaryCta.href}
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                                    >
                                        {secondaryCta.label}
                                    </a>
                                )}
                            </div>

                            {/* Trust signals inline */}
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-slate-300">
                                    <Shield className="w-4 h-4 text-green-kiff flex-shrink-0" />
                                    <span>Certifié Biocides - Protocole Médical Strict</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-300">
                                    <Award className="w-4 h-4 text-green-kiff flex-shrink-0" />
                                    <span>Certificat de Désinfection + Bordereau BSD</span>
                                </div>
                            </div>
                        </div>

                        {/* Trust Box */}
                        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
                            <h3 className="text-white font-bold text-lg mb-6">Garanties & Certifications</h3>

                            <div className="space-y-4">
                                {/* SIRET */}
                                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                    <p className="text-xs uppercase text-slate-400 tracking-wider mb-1">SIRET Entreprise</p>
                                    <p className="font-mono text-sm text-green-kiff font-semibold">À remplir</p>
                                    <p className="text-xs text-slate-400 mt-2">
                                        {SITE.address.city} ({SITE.address.postalCode})
                                    </p>
                                </div>

                                {/* Certifications Grid */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-green-kiff/10 rounded-lg p-3 border border-green-kiff/30">
                                        <p className="text-xs font-semibold text-green-kiff mb-1">Certibiocide</p>
                                        <p className="text-xs text-slate-300">Produits certifiés</p>
                                    </div>
                                    <div className="bg-green-kiff/10 rounded-lg p-3 border border-green-kiff/30">
                                        <p className="text-xs font-semibold text-green-kiff mb-1">Traçabilité</p>
                                        <p className="text-xs text-slate-300">BSD + Conformité</p>
                                    </div>
                                </div>

                                {/* Legal Links */}
                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-xs text-slate-400 mb-3">Informations légales</p>
                                    <div className="flex flex-wrap gap-3 text-xs">
                                        <a href="/mentions-legales" className="text-green-kiff hover:underline">
                                            Mentions légales
                                        </a>
                                        <a href="/politique-confidentialite" className="text-green-kiff hover:underline">
                                            RGPD
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats or Trust Indicators */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-green-kiff mb-1">24/24</p>
                            <p className="text-xs text-slate-400">7 jours sur 7</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-green-kiff mb-1">100%</p>
                            <p className="text-xs text-slate-400">Discrétion garantie</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-green-kiff mb-1">0</p>
                            <p className="text-xs text-slate-400">Jugement</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-green-kiff mb-1">Île-de-France</p>
                            <p className="text-xs text-slate-400">Couverture complète</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

/**
 * UTILISATION DANS UNE PAGE
 * 
 * import { HeroWithTrust } from '@/components/HeroWithTrust';
 * 
 * export default function ServicePage() {
 *   return (
 *     <HeroWithTrust
 *       title="Syndrome de Diogène: Débarras & Désinfection"
 *       subtitle="Intervention Immédiate 24h/24"
 *       description="Tri éthique, débarras complet, désinfection biocide. Certificat + BSD garantis."
 *       primaryCta={{ label: "Demander un devis", href: "/devis" }}
 *       secondaryCta={{ label: "Appeler maintenant", href: "tel:+33770108339" }}
 *     />
 *   );
 * }
 */
