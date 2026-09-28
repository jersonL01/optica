import { type ChangeEvent, type FormEvent, useState } from "react";
import { CalendarCheck2, CheckCircle2, Clock3, Send } from "lucide-react";

import { appointmentReasons } from "../../data/clinic";

interface BookingFormState {
  date: string;
  email: string;
  message: string;
  name: string;
  phone: string;
  reason: string;
  time: string;
}

const initialState: BookingFormState = {
  date: "",
  email: "",
  message: "",
  name: "",
  phone: "",
  reason: appointmentReasons[0],
  time: "10:00",
};

export default function BookingForm() {
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#008f8c]/10 text-[#008f8c]">
          <CalendarCheck2 size={24} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#30263a]">Solicitar reserva</h2>
          <p className="text-sm text-slate-500">Completa los datos para coordinar atencion.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Nombre
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 text-slate-900 outline-none transition-colors focus:border-[#008f8c]"
            placeholder="Nombre completo"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Telefono
          <input
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 text-slate-900 outline-none transition-colors focus:border-[#008f8c]"
            placeholder="+56 9..."
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Correo
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 text-slate-900 outline-none transition-colors focus:border-[#008f8c]"
            placeholder="correo@dominio.cl"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Motivo
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-slate-900 outline-none transition-colors focus:border-[#008f8c]"
          >
            {appointmentReasons.map((reason) => (
              <option key={reason}>{reason}</option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-slate-700">
          Fecha
          <input
            required
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 text-slate-900 outline-none transition-colors focus:border-[#008f8c]"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Hora
          <input
            required
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 text-slate-900 outline-none transition-colors focus:border-[#008f8c]"
          />
        </label>
      </div>

      <label className="mt-4 block text-sm font-medium text-slate-700">
        Comentario
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="mt-2 w-full rounded-md border border-slate-200 px-3 py-3 text-slate-900 outline-none transition-colors focus:border-[#008f8c]"
          placeholder="Cuentanos que necesitas revisar o cotizar."
        />
      </label>

      {submitted ? (
        <div className="mt-5 flex items-start gap-3 rounded-lg border border-[#008f8c]/25 bg-[#008f8c]/10 p-4 text-sm text-[#245b58]">
          <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#008f8c]" />
          <p>
            Reserva recibida para {formData.reason.toLowerCase()} el {formData.date} a las{" "}
            {formData.time}. El equipo puede confirmar por telefono o correo.
          </p>
        </div>
      ) : null}

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#30263a] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#443250] sm:w-auto"
      >
        Enviar solicitud
        <Send size={17} />
      </button>

      <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
        <Clock3 size={17} className="text-[#008f8c]" />
        Confirmacion dentro del horario de atencion.
      </div>
    </form>
  );
}
