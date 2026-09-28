import BranchInfo from "../components/contact/BranchInfo";
import ContactForm from "../components/contact/ContactForm";
import PageHero from "../components/ui/PageHero";
import { images } from "../data/clinic";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos listos para ayudarte con tu proxima solucion optica."
        description="Encuentra direccion, horarios, telefono, WhatsApp, correo y un formulario para consultas."
        image={images.boutique}
        actions={
          <>
            <a
              href="/reserva"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#7bd9d5] px-6 text-sm font-semibold text-[#1e1724] transition-colors hover:bg-white"
            >
              Reservar hora
            </a>
            <a
              href="mailto:hola@opticlinic.cl"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Enviar correo
            </a>
          </>
        }
      />
      <BranchInfo />
      <ContactForm />
    </>
  );
}
