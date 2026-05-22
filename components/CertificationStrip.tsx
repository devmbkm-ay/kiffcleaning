import { ShieldCheck, Award, BadgeCheck, Star, FileCheck } from 'lucide-react';

const CERTS = [
  { icon: ShieldCheck, label: 'Certifié NF Environnement' },
  { icon: Award, label: 'Qualipropre' },
  { icon: BadgeCheck, label: 'Protocoles INRS' },
  { icon: Star, label: 'Agréé Préfecture Île-de-France' },
  { icon: FileCheck, label: 'Véhicules Banalisés & Assurés' },
];

export default function CertificationStrip() {
  return (
    <div className="bg-[#0a1520] border-y border-white/5 py-5 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {CERTS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-slate-400 text-sm font-medium">
            <Icon className="w-4 h-4 text-teal shrink-0" strokeWidth={1.5} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
