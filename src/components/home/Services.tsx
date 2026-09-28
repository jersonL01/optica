import {
  Activity,
  ArrowRight,
  FileText,
  Glasses,
  ShieldCheck,
  Sun,
  Wrench,
} from "lucide-react";

import { services } from "../../data/clinic";
import SectionHeading from "../ui/SectionHeading";

const serviceIcons = [FileText, Glasses, Sun, ShieldCheck, Activity, Wrench];

export default function Services() {
  return (
    <section
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Servicios"
            title="Soluciones opticas para diferentes necesidades visuales."
            description="Te orientamos para elegir lentes, cristales y ajustes segun tu receta, rutina y estilo personal."
          />
          <a
            href="/servicios"
            className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-md border border-slate-200 px-4 text-sm font-semibold text-[#30263a] transition-colors hover:border-[#008f8c] hover:text-[#008f8c]"
          >
            Ver todos
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <article
                key={service.title}
                className="group rounded-lg border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#008f8c]/40 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#008f8c]/10 text-[#008f8c] transition-colors group-hover:bg-[#008f8c] group-hover:text-white">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#30263a]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {service.summary}
                </p>

                <a
                  href="/servicios"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#30263a] transition-colors hover:text-[#008f8c]"
                >
                  Más información
                  <ArrowRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
