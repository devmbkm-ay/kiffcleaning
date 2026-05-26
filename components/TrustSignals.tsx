// components/TrustSignals.tsx — Affiche SIRET, certifications, créée
'use client';

import { Shield, Verified, Award, Clock } from 'lucide-react';
import { SITE } from '@/lib/seo';

export function TrustSignals() {
    return (
        <section className="py-12 px-4 bg-white border-y border-slate-200">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                    Certifications & Sécurité Juridique
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* SIRET */}
                    <div className="flex flex-col gap-3 p-5 rounded-lg border border-green-kiff/20 bg-green-kiff/5">
                        <div className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-kiff" />
                            <span className="font-semibold text-sm text-slate-900">SIRET</span>
                        </div>
                        <p className="text-sm text-slate-700 font-mono">
                            Kiff Cleaning Solutions
                        </p>
                        <p className="text-xs text-slate-600">
                            Mareuil-lès-Meaux (77100)
                        </p>
                    </div>

                    {/* Certification Biocide */}
                    <div className="flex flex-col gap-3 p-5 rounded-lg border border-green-kiff/20 bg-green-kiff/5">
                        <div className="flex items-center gap-2">
                            <Verified className="w-5 h-5 text-green-kiff" />
                            <span className="font-semibold text-sm text-slate-900">Certibiocide</span>
                        </div>
                        <p className="text-sm text-slate-700">
                            Produits biocides certifiés
                        </p>
                        <p className="text-xs text-slate-600">
                            Grade médical virucide + bactéricide
                        </p>
                    </div>

                    {/* BSD Traçabilité */}
                    <div className="flex flex-col gap-3 p-5 rounded-lg border border-green-kiff/20 bg-green-kiff/5">
                        <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-green-kiff" />
                            <span className="font-semibold text-sm text-slate-900">BSD Déchets</span>
                        </div>
                        <p className="text-sm text-slate-700">
                            Traçabilité 100% légale
                        </p>
                        <p className="text-xs text-slate-600">
                            Conformité Code de l'environnement
                        </p>
                    </div>

                    {/* Disponibilité */}
                    <div className="flex flex-col gap-3 p-5 rounded-lg border border-green-kiff/20 bg-green-kiff/5">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-green-kiff" />
                            <span className="font-semibold text-sm text-slate-900">24h/24 • 7j/7</span>
                        </div>
                        <p className="text-sm text-slate-700">
                            Réactivité garantie
                        </p>
                        <p className="text-xs text-slate-600">
                            Urgence + demandes standards
                        </p>
                    </div>
                </div>

                <div className="mt-8 p-6 rounded-lg bg-slate-50 border border-slate-200">
                    <p className="text-xs text-slate-600 text-center">
                        Kiff Cleaning Solutions est une entreprise déclarée, assurée et conforme aux obligations
                        légales françaises (RGPD, Code de l'environnement, normes sanitaires).
                        Chaque intervention est accompagnée d'un Certificat de Désinfection officiel et d'un Bordereau de Suivi des Déchets.
                    </p>
                </div>
            </div>
        </section>
    );
}
