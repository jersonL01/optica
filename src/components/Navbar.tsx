import { useEffect, useState } from "react";
import { CalendarDays, Glasses, Menu, X } from "lucide-react";

import { brand, routes } from "../data/clinic";

interface NavbarProps {
  currentPath: string;
}

export default function Navbar({ currentPath }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl"
          : "bg-white/90 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
          aria-label="Ir al inicio"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#30263a] text-[#7bd9d5]">
            <Glasses size={21} />
          </span>
          <span className="text-[22px] font-semibold text-[#30263a] transition-colors duration-200 group-hover:text-[#008f8c]">
            {brand.name}
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {routes.map((link) => {
            const isActive = currentPath === link.path;

            return (
              <a
                key={link.path}
                href={link.path}
                aria-current={isActive ? "page" : undefined}
                className={`group relative text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-[#008f8c]" : "text-slate-600 hover:text-[#30263a]"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#008f8c] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
          <a
            href="/reserva"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#30263a] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#443250]"
          >
            <CalendarDays size={17} />
            Agendar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-[#30263a] transition-colors hover:bg-slate-50 lg:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
          <div className="flex flex-col">
            {routes.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={closeMenu}
                aria-current={currentPath === link.path ? "page" : undefined}
                className={`border-b border-slate-100 py-4 text-[15px] font-medium transition-colors last:border-none ${
                  currentPath === link.path
                    ? "text-[#008f8c]"
                    : "text-slate-700 hover:text-[#008f8c]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
