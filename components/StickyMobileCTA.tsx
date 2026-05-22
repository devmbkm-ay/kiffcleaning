import Link from 'next/link';
import { Phone, FileText } from 'lucide-react';
import { SITE } from '@/lib/seo';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy-900/95 backdrop-blur-md border-t border-white/10">
      <div className="flex gap-3 px-4 py-3">
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="flex-1 btn-primary justify-center py-3.5 rounded-xl text-sm"
        >
          <Phone className="w-4 h-4" />
          Urgence 24h/24
        </a>
        <Link
          href="/devis"
          className="flex-1 btn-outline justify-center py-3.5 rounded-xl text-sm"
        >
          <FileText className="w-4 h-4" />
          Devis gratuit
        </Link>
      </div>
    </div>
  );
}
