// components/ServiceFAQ.tsx — FAQ structurée pour IA + schema.org

'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
    question: string;
    answer: string;
}

interface ServiceFAQProps {
    faqs: FAQItem[];
    serviceSlug: string;
}

export function ServiceFAQ({ faqs, serviceSlug }: ServiceFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // Générer le schema FAQPage pour Google
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            {/* Schema JSON-LD pour Google */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                suppressHydrationWarning
            />

            <section className="py-12 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Questions Fréquemment Posées</h2>

                    <div className="space-y-3">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="rounded-lg border border-slate-200 bg-white overflow-hidden transition-all hover:border-green-kiff/50"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-5 hover:bg-slate-50 text-left"
                                >
                                    <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                                    <ChevronDown
                                        className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {openIndex === idx && (
                                    <div className="px-5 pb-5 pt-0 border-t border-slate-100 bg-slate-50/50">
                                        <p className="text-slate-700 leading-relaxed text-sm">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
