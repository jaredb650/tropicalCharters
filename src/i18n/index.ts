import { stripBase, withBase } from '../lib/paths';

export const langs = ['en', 'es'] as const;
export type Lang = (typeof langs)[number];

/** A value written once per language. */
export type Localized<T = string> = Record<Lang, T>;

export const L = <T>(en: T, es: T): Localized<T> => ({ en, es });

/** Prefix a site path for the given language. English lives at the root. */
export function href(lang: Lang, path: string) {
  if (lang === 'en') return withBase(path);
  return withBase(path === '/' ? '/es/' : `/es${path}`);
}

/** The same page in the other language. */
export function alternate(lang: Lang, path: string) {
  const bare = stripBase(path).replace(/^\/es(?=\/|$)/, '') || '/';
  return href(lang === 'en' ? 'es' : 'en', bare);
}

export const ui = {
  en: {
    langName: 'English',
    otherLang: 'Español',
    nav: { trips: 'Trips', voyage: 'Destinations', fleet: 'Fleet', journal: 'Guides', book: 'Book a trip' },
    loader: 'Loading your day on the water',
    hero: {
      lines: ['Leave Fajardo at nine.', 'Swim at Icacos by ten.'],
      sub: 'Private boat charters to the cays, Culebra and Vieques, with captains we know by name.',
      primary: 'Choose a trip',
      secondary: 'Message us on WhatsApp',
      clock: 'Local time in Fajardo',
      scroll: 'Scroll to set sail',
    },
    statement:
      'We’re a small charter house on the east coast of Puerto Rico. We work with a handful of captains we’d trust with our own families, and we book their boats for you: to the cays, to Culebra, to Vieques, or nowhere in particular.',
    voyage: {
      title: 'A full day, start to finish',
      intro: 'One of our most-booked days: the cays in the morning, Culebra after lunch, home with the sun behind you.',
      scale: '5 nautical miles',
      legend: 'Route of a sample full-day charter',
    },
    trips: {
      title: 'Choose your trip',
      intro: 'Every charter is private. You get the whole boat and the captain sets the pace around your group.',
      hours: (h: string) => `${h} hours`,
      guests: (n: number) => `Up to ${n} guests`,
      from: (p: string) => `From ${p}`,
      perBoat: 'per boat',
      view: 'See the trip',
    },
    fleet: {
      title: 'The fleet',
      intro: 'Three boats, three captains. Each one chosen for how it handles the run to Culebra and how it feels at anchor.',
      length: 'Length',
      guests: 'Guests',
      captain: 'Captain',
      best: 'Best for',
    },
    how: {
      title: 'How booking works',
      steps: [
        ['Pick a trip and a boat', 'See real availability for each boat, with the price for the whole group.'],
        ['Choose a date and pay', 'Pay securely online. You’ll get a confirmation with everything you need.'],
        ['Meet your captain at the dock', 'We send marina directions and your captain’s number the day before.'],
      ],
    },
    reviews: { title: 'From the guest book', prev: 'Previous review', next: 'Next review' },
    journal: { title: 'Guides for planning your trip', read: 'Read the guide' },
    footer: {
      cta: 'Your day on the water starts at the dock.',
      book: 'Book a trip',
      whatsapp: 'WhatsApp',
      email: 'Email',
      language: 'Language',
      depart: 'Departures',
      rights: 'Tropical Charters, Fajardo, Puerto Rico',
      hint: 'Move your cursor through the water',
    },
    trip: {
      back: 'All trips',
      duration: 'Duration',
      guests: 'Group size',
      departs: 'Departs',
      price: 'Price',
      itinerary: 'How the day goes',
      included: 'Included',
      bring: 'What to bring',
      boats: 'Boats that run this trip',
      policy: 'Weather and cancellations',
      policyText:
        'If your captain calls off a trip for weather, you choose a new date or a full refund. Cancel more than 7 days ahead for a full refund; within 7 days, we’ll move your trip to another date.',
      other: 'Other trips',
    },
    booking: {
      title: 'Reserve this trip',
      boat: 'Boat',
      date: 'Date',
      guests: 'Guests',
      total: 'Total for the boat',
      cta: 'Continue to payment',
      pickDate: 'Pick a date to continue',
      demo: 'Preview only. Secure checkout connects here at launch.',
      unavailable: 'Booked',
      less: 'Fewer guests',
      more: 'More guests',
      prevMonth: 'Previous month',
      nextMonth: 'Next month',
    },
  },
  es: {
    langName: 'Español',
    otherLang: 'English',
    nav: { trips: 'Viajes', voyage: 'Destinos', fleet: 'Flota', journal: 'Guías', book: 'Reservar' },
    loader: 'Preparando tu día en el mar',
    hero: {
      lines: ['Sal de Fajardo a las nueve.', 'Nada en Icacos a las diez.'],
      sub: 'Charters privados a los cayos, Culebra y Vieques, con capitanes que conocemos por su nombre.',
      primary: 'Escoge un viaje',
      secondary: 'Escríbenos por WhatsApp',
      clock: 'Hora local en Fajardo',
      scroll: 'Desliza para zarpar',
    },
    statement:
      'Somos una pequeña casa de charters en la costa este de Puerto Rico. Trabajamos con unos pocos capitanes a quienes les confiaríamos nuestra propia familia, y reservamos sus botes para ti: a los cayos, a Culebra, a Vieques o a ningún lugar en particular.',
    voyage: {
      title: 'Un día completo, de principio a fin',
      intro: 'Uno de nuestros días más reservados: los cayos en la mañana, Culebra después del almuerzo y de vuelta con el sol a tu espalda.',
      scale: '5 millas náuticas',
      legend: 'Ruta de un charter de día completo',
    },
    trips: {
      title: 'Escoge tu viaje',
      intro: 'Todos los charters son privados. El bote completo es para ti y el capitán ajusta el ritmo a tu grupo.',
      hours: (h: string) => `${h} horas`,
      guests: (n: number) => `Hasta ${n} personas`,
      from: (p: string) => `Desde ${p}`,
      perBoat: 'por bote',
      view: 'Ver el viaje',
    },
    fleet: {
      title: 'La flota',
      intro: 'Tres botes, tres capitanes. Cada uno escogido por cómo navega hasta Culebra y cómo se siente anclado.',
      length: 'Eslora',
      guests: 'Personas',
      captain: 'Capitán',
      best: 'Ideal para',
    },
    how: {
      title: 'Cómo reservar',
      steps: [
        ['Escoge un viaje y un bote', 'Ve la disponibilidad real de cada bote, con el precio para todo el grupo.'],
        ['Escoge la fecha y paga', 'Paga de forma segura en línea. Recibirás una confirmación con todo lo que necesitas.'],
        ['Encuentra a tu capitán en el muelle', 'El día antes te enviamos cómo llegar a la marina y el número de tu capitán.'],
      ],
    },
    reviews: { title: 'Del libro de visitas', prev: 'Reseña anterior', next: 'Próxima reseña' },
    journal: { title: 'Guías para planificar tu viaje', read: 'Leer la guía' },
    footer: {
      cta: 'Tu día en el mar empieza en el muelle.',
      book: 'Reservar',
      whatsapp: 'WhatsApp',
      email: 'Correo',
      language: 'Idioma',
      depart: 'Salidas',
      rights: 'Tropical Charters, Fajardo, Puerto Rico',
      hint: 'Mueve el cursor por el agua',
    },
    trip: {
      back: 'Todos los viajes',
      duration: 'Duración',
      guests: 'Grupo',
      departs: 'Sale de',
      price: 'Precio',
      itinerary: 'Cómo es el día',
      included: 'Incluye',
      bring: 'Qué traer',
      boats: 'Botes que hacen este viaje',
      policy: 'Clima y cancelaciones',
      policyText:
        'Si tu capitán cancela por el clima, escoges otra fecha o un reembolso completo. Cancela con más de 7 días de anticipación para un reembolso completo; con menos de 7 días, movemos tu viaje a otra fecha.',
      other: 'Otros viajes',
    },
    booking: {
      title: 'Reserva este viaje',
      boat: 'Bote',
      date: 'Fecha',
      guests: 'Personas',
      total: 'Total por el bote',
      cta: 'Continuar al pago',
      pickDate: 'Escoge una fecha para continuar',
      demo: 'Vista previa. El pago seguro se conecta aquí al lanzar.',
      unavailable: 'Reservado',
      less: 'Menos personas',
      more: 'Más personas',
      prevMonth: 'Mes anterior',
      nextMonth: 'Mes siguiente',
    },
  },
} as const;

export const t = (lang: Lang) => ui[lang];

/** Format a 24-hour "13:30" as "1:30 pm" (en) or "1:30 p. m." (es). Non-times pass through. */
export function clock(time: string, lang: Lang) {
  const m = /^(\d{1,2}):(\d{2})$/.exec(time);
  if (!m) return time;
  const h = Number(m[1]);
  const suffix = h < 12 ? (lang === 'en' ? 'am' : 'a. m.') : lang === 'en' ? 'pm' : 'p. m.';
  return `${h % 12 || 12}:${m[2]} ${suffix}`;
}
