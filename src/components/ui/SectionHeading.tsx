interface SectionHeadingProps {
  align?: "left" | "center";
  description?: string;
  eyebrow: string;
  title: string;
}

export default function SectionHeading({
  align = "left",
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#008f8c]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#30263a] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
