import BookingForm from "../components/reserva/BookingForm";
import VisitChecklist from "../components/reserva/VisitChecklist";
import PageHero from "../components/ui/PageHero";
import { images } from "../data/clinic";

export default function Reserva() {
  return (
    <>
      <PageHero
        eyebrow="Reserva online"
        title="Agenda tu atencion y prepara mejor tu visita."
        description="Cuéntanos el motivo de tu consulta para orientarte con armazones, cristales, reparaciones o cotizaciones."
        image={images.lenses}
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <BookingForm />
          <VisitChecklist />
        </div>
      </section>
    </>
  );
}
