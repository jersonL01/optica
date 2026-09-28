import { Glasses, Mail, MapPin, Phone } from "lucide-react";

import { brand, contactInfo, routes, services } from "../data/clinic";

export default function Footer() {
  return (
    <footer className="bg-[#2f2236]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a
              href="/"
              className="flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#7bd9d5]">
                <Glasses size={21} />
              </span>
              <span className="text-2xl font-semibold text-white">{brand.name}</span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
              {brand.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Navegación
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {routes.map((route) => (
                <a
                  key={route.path}
                  href={route.path}
                  className="text-sm text-white/55 hover:text-[#7bd9d5]"
                >
                  {route.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Servicios
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {services.slice(0, 4).map((service) => (
                <a
                  key={service.title}
                  href="/servicios"
                  className="text-sm text-white/55 hover:text-[#7bd9d5]"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Contacto
            </h3>

            <div className="mt-4 space-y-3 text-sm text-white/55">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:text-[#7bd9d5]">
                <Phone size={16} />
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-[#7bd9d5]">
                <Mail size={16} />
                {contactInfo.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {contactInfo.address}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. Todos los derechos
            reservados.
          </p>

          <p>
            Sitio web desarrollado por Khido
          </p>
        </div>
      </div>
    </footer>
  );
}
