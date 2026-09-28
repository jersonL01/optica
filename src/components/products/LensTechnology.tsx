import { Eye, Monitor, Sparkles, SunMedium } from "lucide-react";

import { lensTechnologies } from "../../data/clinic";
import SectionHeading from "../ui/SectionHeading";

const technologyIcons = [Sparkles, Monitor, SunMedium, Eye];

export default function LensTechnology() {
  return (
    <section className="bg-[#f3f6f4] py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <SectionHeading
          eyebrow="Cristales"
          title="Tecnologias de cristales para distintas rutinas."
          description="Te ayudamos a entender tratamientos y opciones para pantallas, sol, lectura o uso diario."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {lensTechnologies.map((technology, index) => {
            const Icon = technologyIcons[index];

            return (
              <article
                key={technology.title}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#008f8c]/10 text-[#008f8c]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-[#30263a]">{technology.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {technology.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
