import {
  Activity,
  CheckCircle2,
  FileText,
  Glasses,
  ShieldCheck,
  Sun,
  Wrench,
} from "lucide-react";

import { services } from "../../data/clinic";
import SectionHeading from "../ui/SectionHeading";

const serviceIcons = [FileText, Glasses, Sun, ShieldCheck, Activity, Wrench];

export default function ServiceGrid() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Servicios completos"
          title="Servicios explicados para elegir con mayor seguridad."
          description="Conoce que incluye cada linea de atencion y que alternativas pueden adaptarse a tu receta, rutina o actividad."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <article
                key={service.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#008f8c]/40 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#008f8c]/10 text-[#008f8c]">
                  <Icon size={24} />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-[#30263a]">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.detail}</p>

                <div className="mt-5 space-y-3">
                  {service.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#008f8c]" />
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
