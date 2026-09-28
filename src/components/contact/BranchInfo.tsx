import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { contactInfo } from "../../data/clinic";
import SectionHeading from "../ui/SectionHeading";

const channels = [
  {
    icon: Phone,
    label: "Telefono",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Escribir ahora",
    href: contactInfo.whatsapp,
  },
  {
    icon: Mail,
    label: "Correo",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
];

export default function BranchInfo() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Sucursal"
            title="Visitanos o escribenos por tu canal preferido."
            description="Estamos disponibles para resolver dudas, cotizar productos y coordinar una atencion."
          />

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3 text-slate-600">
              <MapPin size={20} className="mt-0.5 shrink-0 text-[#008f8c]" />
              <span>{contactInfo.address}</span>
            </div>
            <div className="flex items-start gap-3 text-slate-600">
              <Clock3 size={20} className="mt-0.5 shrink-0 text-[#008f8c]" />
              <span>{contactInfo.hours}</span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {channels.map((channel) => {
            const Icon = channel.icon;

            return (
              <a
                key={channel.label}
                href={channel.href}
                className="rounded-lg border border-slate-200 bg-[#fbfaf7] p-5 transition-all hover:-translate-y-1 hover:border-[#008f8c]/40 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#008f8c]/10 text-[#008f8c]">
                  <Icon size={22} />
                </div>
                <h2 className="mt-5 font-semibold text-[#30263a]">{channel.label}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{channel.value}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
