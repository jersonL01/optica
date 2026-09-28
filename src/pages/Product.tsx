import BookingCTA from "../components/home/BookingCTA";
import LensTechnology from "../components/products/LensTechnology";
import ProductShowcase from "../components/products/ProductShowcase";
import PageHero from "../components/ui/PageHero";
import { images } from "../data/clinic";

export default function Product() {
  return (
    <>
      <PageHero
        eyebrow="Productos"
        title="Productos opticos para estilo, proteccion y comodidad."
        description="Revisa categorias principales, tecnologias de cristales y alternativas para cotizar con asesoria personalizada."
        image={images.frames}
        actions={
          <>
            <a
              href="/contacto"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#7bd9d5] px-6 text-sm font-semibold text-[#1e1724] transition-colors hover:bg-white"
            >
              Cotizar productos
            </a>
            <a
              href="/reserva"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Agendar asesoria
            </a>
          </>
        }
      />
      <ProductShowcase />
      <LensTechnology />
      <BookingCTA />
    </>
  );
}
