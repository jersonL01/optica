import { CheckCircle2, FileText, Glasses, MessageSquareText } from "lucide-react";

const items = [
  {
    icon: FileText,
    title: "Trae tu receta",
    description: "Si ya tienes indicaciones medicas, la atencion parte con esa informacion.",
  },
  {
    icon: Glasses,
    title: "Define tu uso principal",
    description: "Pantalla, manejo, lectura, deporte o uso diario cambian la recomendacion.",
  },
  {
    icon: MessageSquareText,
    title: "Consulta alternativas",
    description: "La reserva abre espacio para comparar precio, material y beneficios.",
  },
];

export default function VisitChecklist() {
  return (
    <aside className="rounded-lg bg-[#30263a] p-6 text-white">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd9d5]">
        Antes de venir
      </p>
      <h2 className="mt-3 text-2xl font-semibold">Una visita mejor preparada.</h2>
      <p className="mt-3 text-sm leading-6 text-white/65">
        Estos puntos ayudan a que la atencion sea mas rapida, clara y orientada a compra.
      </p>

      <div className="mt-6 space-y-5">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#7bd9d5]">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-white/65">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-7 flex items-start gap-2 border-t border-white/15 pt-5 text-sm text-white/70">
        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#7bd9d5]" />
        Tambien puedes traer tus lentes actuales para revisar calce, cristales y estado general.
      </div>
    </aside>
  );
}
