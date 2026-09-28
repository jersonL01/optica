
import {
  BadgeCheck,
  HeartHandshake,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

const benefits = [
  {
    icon: UserRoundCheck,
    title: "Atencion personalizada",
    description:
      "Escuchamos tu rutina y tus necesidades antes de recomendar.",
  },
  {
    icon: Sparkles,
    title: "Vitrina visual",
    description:
      "Modelos y estilos faciles de comparar antes de visitar la optica.",
  },
  {
    icon: BadgeCheck,
    title: "Confianza comercial",
    description:
      "Explicamos materiales, tratamientos y beneficios con claridad.",
  },
  {
    icon: HeartHandshake,
    title: "Accion inmediata",
    description:
      "Puedes reservar, escribir o llamar desde cualquier seccion.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#30263a] py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div key={benefit.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-[#7bd9d5]">
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
