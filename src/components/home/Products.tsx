import { ArrowUpRight } from "lucide-react";

import { products } from "../../data/clinic";
import SectionHeading from "../ui/SectionHeading";

export default function Products() {
  return (
    <section
      className="bg-[#f3f6f4] py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Catalogo"
            title="Armazones, lentes solares y cristales para cada estilo."
            description="Explora categorias pensadas para comparar comodidad, proteccion, tecnologia y diseno."
          />

          <a
            href="/productos"
            className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-md bg-[#30263a] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#443250]"
          >
            Ver catalogo
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="group relative h-[430px] overflow-hidden rounded-lg bg-slate-900"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#7bd9d5]">
                  {product.category}
                </p>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {product.title}
                    </h3>

                    <p className="mt-2 max-w-xs text-sm leading-6 text-white/75">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-[#30263a] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight size={19} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
