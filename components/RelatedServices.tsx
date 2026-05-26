// components/RelatedServices.tsx — Liens contextuels vers services connexes

'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Service, getRelatedServices } from '@/lib/services-data';

interface RelatedServicesProps {
    currentServiceSlug: string;
}

export function RelatedServices({ currentServiceSlug }: RelatedServicesProps) {
    const relatedServices = getRelatedServices(currentServiceSlug as any);

    if (relatedServices.length === 0) {
        return null;
    }

    return (
        <section className="py-12 px-4 bg-slate-50 border-y border-slate-200">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Services Complémentaires</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedServices.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 hover:shadow-lg transition-all"
                        >
                            {/* Background accent */}
                            <div className="absolute -top-1 -right-1 w-32 h-32 bg-green-kiff/5 rounded-full -z-10 group-hover:bg-green-kiff/10 transition-colors" />

                            <div className="mb-3 flex items-start justify-between">
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-kiff transition-colors">
                                    {service.shortTitle}
                                </h3>
                                <ArrowRight className="w-5 h-5 text-green-kiff opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                            </div>

                            <p className="text-sm text-slate-600 mb-3">{service.metaDescription}</p>

                            {/* Context why link */}
                            {service.relatedServices.length > 0 && service.relatedServices[0]?.context && (
                                <p className="text-xs text-slate-500 italic border-l-2 border-green-kiff/30 pl-3 py-2 bg-green-kiff/5 rounded">
                                    💡 {service.relatedServices[0].context}
                                </p>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
