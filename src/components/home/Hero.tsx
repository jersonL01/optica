import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

import { images, metrics } from "../../data/clinic";

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#30263a] pt-[76px] text-white"
    >
      <img
        src={images.hero}
        alt="Armazones opticos sobre una mesa de atencion"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[#211829]/72" />

      <div className="mx-auto flex min-h-[86svh] max-w-7xl flex-col justify-center px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7bd9d5]">
            Optica profesional en Santiago
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Vision clara, estilo propio y una experiencia facil de elegir.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Encuentra armazones, cristales y soluciones opticas con asesoria
            cercana para elegir con seguridad desde el primer contacto.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/reserva"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#7bd9d5] px-6 text-sm font-semibold text-[#1e1724] transition-colors hover:bg-white"
            >
              <CalendarDays size={18} />
              Reservar hora
            </a>

            <a
              href="/servicios"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Ver servicios
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {[
              "Atencion personalizada",
              "Productos comparables",
              "Reserva integrada",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-white/75"
              >
                <CheckCircle2
                  size={17}
                  className="text-[#7bd9d5]"
                />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid max-w-3xl gap-4 border-t border-white/20 pt-6 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-3xl font-semibold text-[#7bd9d5]">{metric.value}</p>
              <p className="mt-1 text-sm leading-5 text-white/70">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
