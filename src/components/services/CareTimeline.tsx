import { ClipboardCheck, Glasses, Handshake } from "lucide-react";

import { visitSteps } from "../../data/clinic";
import SectionHeading from "../ui/SectionHeading";

const stepIcons = [ClipboardCheck, Glasses, Handshake];

export default function CareTimeline() {
  return (
    <section className="bg-[#f3f6f4] py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeading
          eyebrow="Flujo de atencion"
          title="Un recorrido simple desde la consulta hasta la entrega."
          description="Trabajamos con un proceso claro para que sepas como avanzara tu atencion."
        />

        <div className="space-y-4">
          {visitSteps.map((step, index) => {
            const Icon = stepIcons[index];

            return (
              <article
                key={step.title}
                className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[52px_1fr]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#30263a] text-[#7bd9d5]">
                  <Icon size={23} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#008f8c]">
                    Paso {index + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[#30263a]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
