import type { ReactNode } from "react";

interface PageHeroProps {
  actions?: ReactNode;
  description: string;
  eyebrow: string;
  image: string;
  title: string;
}

export default function PageHero({
  actions,
  description,
  eyebrow,
  image,
  title,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#30263a] pt-[76px] text-white">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[#1c1622]/70" />

      <div className="mx-auto flex min-h-[430px] max-w-7xl flex-col justify-end px-5 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7bd9d5]">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            {description}
          </p>
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
