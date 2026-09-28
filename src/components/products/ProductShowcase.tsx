import { ArrowRight, CheckCircle2 } from "lucide-react";

import { products } from "../../data/clinic";
import SectionHeading from "../ui/SectionHeading";

export default function ProductShowcase() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Vitrina"
          title="Categorias principales para renovar tus lentes."
          description="Revisa opciones opticas, solares y cristales con atributos faciles de comparar."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#008f8c]">
                  {product.category}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-[#30263a]">{product.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-md bg-[#f3f6f4] px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      <CheckCircle2 size={14} className="text-[#008f8c]" />
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="/contacto"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#30263a] transition-colors hover:text-[#008f8c]"
                >
                  Solicitar cotizacion
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
