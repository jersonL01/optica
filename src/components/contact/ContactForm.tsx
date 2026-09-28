import { type ChangeEvent, type FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

interface ContactFormState {
  email: string;
  message: string;
  name: string;
  subject: string;
}

const initialState: ContactFormState = {
  email: "",
  message: "",
  name: "",
  subject: "Cotizacion",
};

export default function ContactForm() {
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
    <section className="bg-[#f3f6f4] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#008f8c]">
            Mensaje directo
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#30263a]">
            Escribenos y te ayudamos a resolver tu consulta.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Puedes consultar por disponibilidad, cotizaciones, convenios o postventa.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
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
          </div>

          <label className="mt-4 block text-sm font-medium text-slate-700">
            Asunto
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-slate-900 outline-none transition-colors focus:border-[#008f8c]"
            >
              <option>Cotizacion</option>
              <option>Disponibilidad</option>
              <option>Convenio empresa</option>
              <option>Postventa</option>
            </select>
          </label>

          <label className="mt-4 block text-sm font-medium text-slate-700">
            Mensaje
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="mt-2 w-full rounded-md border border-slate-200 px-3 py-3 text-slate-900 outline-none transition-colors focus:border-[#008f8c]"
              placeholder="Escribe tu consulta."
            />
          </label>

          {submitted ? (
            <div className="mt-5 flex items-start gap-3 rounded-lg border border-[#008f8c]/25 bg-[#008f8c]/10 p-4 text-sm text-[#245b58]">
              <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#008f8c]" />
              <p>
                Mensaje preparado para {formData.subject.toLowerCase()}. El equipo puede responder a{" "}
                {formData.email}.
              </p>
            </div>
          ) : null}

          <button
            type="submit"
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#30263a] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#443250]"
          >
            Enviar mensaje
            <Send size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}
