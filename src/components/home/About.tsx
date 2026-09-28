import { ArrowRight, Check } from "lucide-react";

import { images, visitSteps } from "../../data/clinic";

export default function About() {
  return (
    <section
      className="overflow-hidden bg-white py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <img
              src={images.exam}
              alt="Atencion optica profesional"
              className="h-[520px] w-full object-cover"
            />
          </div>

          <div className="absolute bottom-5 left-5 rounded-lg bg-white px-5 py-4 text-[#30263a] shadow-xl sm:left-8">
            <p className="text-sm text-slate-500">
              Modelo de atencion
            </p>

            <p className="mt-1 text-lg font-semibold">Venta guiada y postventa</p>
          </div>
        </div>

        <div className="lg:pl-8">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#008f8c]">
            Experiencia
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#30263a] sm:text-4xl">
            Una web que vende confianza antes de la primera visita.
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600">
            Te acompanamos para entender tu necesidad, comparar alternativas y
            elegir una solucion comoda para tu rutina.
          </p>

          <div className="mt-8 space-y-5">
            {visitSteps.map((step) => (
              <div
                key={step.title}
                className="flex items-start gap-3"
              >
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#008f8c]/10">
                  <Check
                    size={14}
                    className="text-[#008f8c]"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-[#30263a]">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/reserva"
            className="mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#30263a] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#443250]"
          >
            Agendar atencion
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
