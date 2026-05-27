// components/TeamSection.tsx — Section équipe avec placeholders pour photos

'use client';

import { Users } from 'lucide-react';
import Image from 'next/image';

interface TeamMember {
    name: string;
    role: string;
    image: string;
    description: string;
}

interface TeamSectionProps {
    title?: string;
    description?: string;
    team?: TeamMember[];
}

// Placeholders par défaut - À remplacer par vraies photos
const DEFAULT_TEAM: TeamMember[] = [
    {
        name: 'Équipe Intervention Nettoyage Extrême',
        role: 'Techniciens Qualifiés - Niveau 1',
        image: '/images/team/optimized/isabelle.webp',
        description:
            'Formés aux protocoles biocides. Équipements EPI catégorie 3. Maîtrise des risques biologiques et chimiques.',
    },
    {
        name: 'Équipe Débarras & Manutention',
        role: 'Compagnons Qualifiés - Portage Lourd',
        image: '/images/team/optimized/yassine.webp',
        description:
            'Experts en manutention lourde. Sécurité garantie sur escaliers et accès difficiles. Discrétion totale.',
    },
    {
        name: 'Chef de Projet & Coordination',
        role: 'Pilotage Chantier & Qualité',
        image: '/images/team/optimized/alan.webp',
        description:
            'Gestion de tous les chantiers. Respect du cahier des charges. Contrôle qualité final impeccable.',
    },
];

export function TeamSection({
    title = 'Notre Équipe de Spécialistes',
    description = 'Tous nos techniciens sont formés et certifiés pour intervenir en toute sécurité sur les situations complexes.',
    team = DEFAULT_TEAM,
}: TeamSectionProps) {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-2 mb-4 text-green-kiff">
                        <Users className="w-6 h-6" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Notre Équipe</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">{description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, idx) => (
                        <div key={idx} className="rounded-xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                            {/* Image placeholder - à remplacer par vraies photos */}
                            <div className="relative w-full aspect-square bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="font-bold text-lg text-slate-900 mb-1">{member.name}</h3>
                                <p className="text-sm font-semibold text-green-kiff mb-3">{member.role}</p>
                                <p className="text-sm text-slate-600 leading-relaxed">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
