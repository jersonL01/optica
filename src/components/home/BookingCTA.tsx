import { ArrowRight, CalendarDays } from "lucide-react";

export default function BookingCTA() {
  return (
    <section
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-lg bg-[#008f8c] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="px-6 py-14 sm:px-10 lg:px-12">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white/15 text-white">
              <CalendarDays size={24} />
            </div>

            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Agenda tu atencion y recibe una recomendacion a tu medida.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/80">
              Indicanos que necesitas revisar y coordinaremos una visita para
              ayudarte a elegir la mejor alternativa.
            </p>

            <a
              href="/reserva"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#30263a] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#443250]"
            >
              Reservar una hora
              <ArrowRight size={17} />
            </a>
          </div>
          <div className="hidden min-h-[320px] bg-[url('https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center lg:block" />
        </div>
      </div>
    </section>
  );
}
