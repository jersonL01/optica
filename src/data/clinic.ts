export const brand = {
  name: "OptiClinic",
  shortName: "Optica",
  tagline: "Optica profesional para vision, estilo y cuidado diario.",
};

export const routes = [
  { label: "Inicio", path: "/" },
  { label: "Servicios", path: "/servicios" },
  { label: "Productos", path: "/productos" },
  { label: "Reservar", path: "/reserva" },
  { label: "Contacto", path: "/contacto" },
] as const;

export const images = {
  hero:
    "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1800&q=85",
  exam:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=85",
  frames:
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1400&q=85",
  lenses:
    "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1400&q=85",
  boutique:
    "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1400&q=85",
};

export const metrics = [
  { value: "24h", label: "respuesta para reservas" },
  { value: "+120", label: "modelos de armazones" },
  { value: "6", label: "lineas de soluciones opticas" },
];

export const services = [
  {
    title: "Recetas opticas",
    summary: "Gestion de recetas, lectura de indicaciones y recomendacion de cristales.",
    detail:
      "Acompanamos al cliente desde la receta hasta la seleccion final, explicando materiales, tratamientos y uso recomendado.",
    includes: ["Revision de receta", "Cristales monofocales", "Cristales progresivos"],
  },
  {
    title: "Armazones opticos",
    summary: "Curaduria de estilos para rostro, uso diario y presupuesto.",
    detail:
      "Una seleccion comercial clara para que el cliente pueda comparar diseno, comodidad, peso y durabilidad.",
    includes: ["Asesoria de estilo", "Ajuste de calce", "Modelos adultos y jovenes"],
  },
  {
    title: "Lentes de sol",
    summary: "Proteccion UV con opciones urbanas, deportivas y graduadas.",
    detail:
      "Soluciones solares para quienes necesitan proteger la vista sin perder identidad visual.",
    includes: ["Filtro UV", "Cristales polarizados", "Alternativas con receta"],
  },
  {
    title: "Lentes de seguridad",
    summary: "Proteccion visual para equipos de trabajo y actividades especificas.",
    detail:
      "Propuesta pensada para empresas, talleres y usuarios que requieren resistencia y seguridad certificable.",
    includes: ["Uso laboral", "Proteccion lateral", "Modelos de alto impacto"],
  },
  {
    title: "Lentes deportivos",
    summary: "Disenos livianos, firmes y comodos para movimiento constante.",
    detail:
      "Opciones con mayor sujecion, cristales envolventes y materiales resistentes para actividades al aire libre.",
    includes: ["Ajuste estable", "Proteccion solar", "Materiales flexibles"],
  },
  {
    title: "Ajustes y reparaciones",
    summary: "Mantencion, alineacion y pequenas reparaciones para extender vida util.",
    detail:
      "Servicio de postventa para que los lentes sigan comodos, firmes y funcionales despues de la compra.",
    includes: ["Cambio de plaquetas", "Ajuste de varillas", "Limpieza profesional"],
  },
];

export const products = [
  {
    title: "Armazones de autor",
    category: "Opticos",
    description: "Lineas clasicas, minimalistas y expresivas para uso diario.",
    image: images.frames,
    tags: ["Acetato", "Metal", "Livianos"],
  },
  {
    title: "Lentes solares",
    category: "Proteccion",
    description: "Modelos con proteccion UV, polarizados y opciones con graduacion.",
    image: images.boutique,
    tags: ["UV400", "Polarizados", "Lifestyle"],
  },
  {
    title: "Cristales premium",
    category: "Vision",
    description: "Tratamientos antirreflejo, filtro azul y alternativas progresivas.",
    image: images.lenses,
    tags: ["Antirreflejo", "Filtro azul", "Progresivos"],
  },
];

export const lensTechnologies = [
  {
    title: "Antirreflejo",
    description: "Reduce brillos molestos y mejora la nitidez en pantallas, manejo y lectura.",
  },
  {
    title: "Filtro azul",
    description: "Pensado para jornadas frente a computador, estudio y trabajo de oficina.",
  },
  {
    title: "Fotocromatico",
    description: "Cristales que se adaptan a cambios de luz para mayor comodidad diaria.",
  },
  {
    title: "Progresivo",
    description: "Solucion integral para ver de cerca, media distancia y lejos con un solo lente.",
  },
];

export const visitSteps = [
  {
    title: "Diagnostico de necesidad",
    description: "Escuchamos rutina, receta, molestias y preferencias antes de recomendar.",
  },
  {
    title: "Seleccion guiada",
    description: "Comparamos opciones por uso, material, estetica, precio y durabilidad.",
  },
  {
    title: "Entrega y postventa",
    description: "Ajustamos el calce y dejamos abierto el soporte para cambios menores.",
  },
];

export const contactInfo = {
  phone: "+56 9 1234 5678",
  email: "hola@opticlinic.cl",
  address: "Av. Providencia 1234, Santiago",
  hours: "Lunes a viernes, 10:00 a 19:00",
  whatsapp: "https://wa.me/56912345678",
};

export const appointmentReasons = [
  "Renovar receta optica",
  "Elegir armazon",
  "Comprar lentes de sol",
  "Cotizar cristales",
  "Ajuste o reparacion",
];
