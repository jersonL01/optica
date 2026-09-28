import BookingCTA from "../components/home/BookingCTA";
import CareTimeline from "../components/services/CareTimeline";
import ServiceGrid from "../components/services/ServiceGrid";
import PageHero from "../components/ui/PageHero";
import { images } from "../data/clinic";

export default function Service() {
  return (
    <>
      <PageHero
        eyebrow="Servicios opticos"
        title="Servicios opticos para ver mejor y elegir con confianza."
        description="Desde recetas y armazones hasta lentes de seguridad, reunimos alternativas para uso diario, laboral y deportivo."
        image={images.exam}
        actions={
          <>
            <a
              href="/reserva"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#7bd9d5] px-6 text-sm font-semibold text-[#1e1724] transition-colors hover:bg-white"
            >
              Reservar atencion
            </a>
            <a
              href="/productos"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Ver productos
            </a>
          </>
        }
      />
      <ServiceGrid />
      <CareTimeline />
      <BookingCTA />
    </>
  );
}
