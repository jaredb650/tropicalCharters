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
    loaderBoat: 'Getting your boat ready',
    hero: {
      lines: ['Leave Fajardo at nine.', 'Swim at Icacos by ten.'],
      sub: 'Private boat charters to the cays, Vieques, Culebra and St. Thomas, with captains we know by name.',
      primary: 'Choose a trip',
      secondary: 'Message us on WhatsApp',
      clock: 'Local time in Fajardo',
      scroll: 'Scroll to set sail',
    },
    statement:
      'We’re a small charter house on the east coast of Puerto Rico. We work with a handful of captains we’d trust with our own families, and we book their boats for you: to the cays, to Vieques, to Culebra, to St. Thomas, or nowhere in particular.',
    voyage: {
      title: 'From the dock to St. Thomas',
      intro: 'Every place we sail to, closest first. Each one is its own trip, from four hours to a full day.',
      scale: '5 nautical miles',
      legend: 'Chart of the route from Fajardo to each destination',
      unit: 'nm',
      start: 'Departure',
    },
    trips: {
      title: 'Choose your trip',
      intro: 'Every charter is private. Pick where you want to go, then how long you want on the water.',
      hours: (h: number | string) => `${h} hours`,
      short: (h: number) => `${h}h`,
      guests: (n: number) => `Up to ${n} guests`,
      from: (p: string) => `From ${p}`,
      perBoat: 'for the boat',
      book: 'Book this trip',
      away: (nm: number, travel: string) => `${nm} nautical miles, ${travel} each way`,
      length: 'Time on the water',
      fullDay: 'Full day only',
      more: 'Also on the water',
    },
    fleet: {
      title: 'The fleet',
      intro: 'Three boats, three captains. Each one chosen for how it handles the run to Culebra and how it feels at anchor.',
      length: 'Length',
      guests: 'Guests',
      captain: 'Captain',
      best: 'Best for',
      details: 'See the boat',
      close: 'Close',
      onboard: 'On board',
      runs: 'Trips on this boat',
      book: (name: string) => `Book a trip on ${name}`,
      photo: (i: number, n: number) => `Photo ${i} of ${n}`,
      prev: 'Previous photo',
      next: 'Next photo',
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
      distance: 'Distance',
      guests: 'Group size',
      departs: 'Departs',
      price: 'Price',
      lengths: 'Choose your time',
      lengthsIntro: 'Same boat, same captain. More time means more stops and a slower pace.',
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
      length: 'Length',
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
    loaderBoat: 'Preparando tu bote',
    hero: {
      lines: ['Sal de Fajardo a las nueve.', 'Nada en Icacos a las diez.'],
      sub: 'Charters privados a los cayos, Vieques, Culebra y St. Thomas, con capitanes que conocemos por su nombre.',
      primary: 'Escoge un viaje',
      secondary: 'Escríbenos por WhatsApp',
      clock: 'Hora local en Fajardo',
      scroll: 'Desliza para zarpar',
    },
    statement:
      'Somos una pequeña casa de charters en la costa este de Puerto Rico. Trabajamos con unos pocos capitanes a quienes les confiaríamos nuestra propia familia, y reservamos sus botes para ti: a los cayos, a Vieques, a Culebra, a St. Thomas o a ningún lugar en particular.',
    voyage: {
      title: 'Del muelle a St. Thomas',
      intro: 'Todos los lugares a los que navegamos, del más cercano al más lejano. Cada uno es su propio viaje, de cuatro horas a un día completo.',
      scale: '5 millas náuticas',
      legend: 'Carta de la ruta desde Fajardo a cada destino',
      unit: 'mn',
      start: 'Salida',
    },
    trips: {
      title: 'Escoge tu viaje',
      intro: 'Todos los charters son privados. Escoge a dónde quieres ir y cuánto tiempo quieres en el mar.',
      hours: (h: number | string) => `${h} horas`,
      short: (h: number) => `${h} h`,
      guests: (n: number) => `Hasta ${n} personas`,
      from: (p: string) => `Desde ${p}`,
      perBoat: 'por el bote',
      book: 'Reservar este viaje',
      away: (nm: number, travel: string) => `${nm} millas náuticas, ${travel} cada trayecto`,
      length: 'Tiempo en el mar',
      fullDay: 'Solo día completo',
      more: 'También en el mar',
    },
    fleet: {
      title: 'La flota',
      intro: 'Tres botes, tres capitanes. Cada uno escogido por cómo navega hasta Culebra y cómo se siente anclado.',
      length: 'Eslora',
      guests: 'Personas',
      captain: 'Capitán',
      best: 'Ideal para',
      details: 'Ver el bote',
      close: 'Cerrar',
      onboard: 'A bordo',
      runs: 'Viajes en este bote',
      book: (name: string) => `Reservar un viaje en ${name}`,
      photo: (i: number, n: number) => `Foto ${i} de ${n}`,
      prev: 'Foto anterior',
      next: 'Foto siguiente',
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
      distance: 'Distancia',
      guests: 'Grupo',
      departs: 'Sale de',
      price: 'Precio',
      lengths: 'Escoge tu tiempo',
      lengthsIntro: 'El mismo bote, el mismo capitán. Más tiempo significa más paradas y un ritmo más lento.',
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
      length: 'Duración',
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
