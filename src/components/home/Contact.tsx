import type { ReactNode } from "react";
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { contactInfo } from "../../data/clinic";
import SectionHeading from "../ui/SectionHeading";

export default function Contact() {
  return (
    <section
      className="bg-[#f3f6f4] py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Contacto"
          title="Estamos disponibles para orientarte."
          description="Comunicate por telefono, WhatsApp, correo o visitanos en la sucursal."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard
            icon={<MapPin size={22} />}
            title="Visitanos"
            text={contactInfo.address}
          />

          <ContactCard
            icon={<Phone size={22} />}
            title="Telefono"
            text={contactInfo.phone}
          />

          <ContactCard
            icon={<MessageCircle size={22} />}
            title="WhatsApp"
            text="Respuesta directa"
          />

          <ContactCard
            icon={<Mail size={22} />}
            title="Correo"
            text={contactInfo.email}
          />
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
          <Clock3 size={17} className="text-[#008f8c]" />
          {contactInfo.hours}
        </div>
      </div>
    </section>
  );
}

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  text: string;
}

function ContactCard({
  icon,
  title,
  text,
}: ContactCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#008f8c]/10 text-[#008f8c]">
        {icon}
      </div>

      <h3 className="mt-4 font-semibold text-[#30263a]">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {text}
      </p>
    </div>
  );
}
