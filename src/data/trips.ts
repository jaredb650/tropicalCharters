import { L, type Localized } from '../i18n';
import { withBase } from '../lib/paths';
import { boatBySlug, boatPrice } from './boats';

// A package is a destination (or an experience like sunset) with one or more lengths.
// PLACEHOLDER prices: each option's `price` is the base whole-boat price in USD;
// each boat applies its own rate on top (see boats.ts). Final prices are TBD by the client.
export interface Option {
  hours: number;
  price: number;
  /** What fits in this length, shown on the card and the trip page. */
  fits: Localized<string[]>;
}

export interface Trip {
  slug: string;
  kind: 'destination' | 'experience';
  name: Localized;
  summary: Localized;
  image: string;
  gallery: string[];
  boats: string[];
  departs: string;
  /** Distance from Villa Marina in nautical miles, and how long the run takes. */
  nm?: number;
  travel?: Localized;
  options: Option[];
  /** Important practical warning shown in red on the card and trip page, e.g. passport and customs. */
  notice?: { title: Localized; body: Localized };
  included: Localized<string[]>;
  bring: Localized<string[]>;
}

const included = L(
  ['Captain and fuel', 'Snorkel gear and life jackets', 'Cooler with ice and water', 'Bluetooth speaker'],
  ['Capitán y combustible', 'Equipo de snorkel y chalecos', 'Nevera con hielo y agua', 'Bocina Bluetooth'],
);
const bring = L(
  ['Reef-safe sunscreen', 'Towel and a change of clothes', 'Your own food and drinks, or add catering', 'Photo ID'],
  ['Bloqueador amigable con el arrecife', 'Toalla y ropa para cambiarte', 'Tu comida y bebida, o añade catering', 'Identificación con foto'],
);

export const trips: Trip[] = [
  {
    slug: 'icacos',
    kind: 'destination',
    name: L('Cayo Icacos', 'Cayo Icacos'),
    summary: L(
      'A white sandbar in knee-deep water and a reef just off its edge. The easiest yes for first-timers.',
      'Una barra de arena blanca con agua hasta las rodillas y un arrecife justo al lado. Perfecto para la primera vez.',
    ),
    image: withBase('/images/icacos.webp'),
    gallery: [withBase('/images/sandbar.webp'), withBase('/images/snorkel.webp'), withBase('/images/palomino.webp')],
    boats: ['brisa', 'marea', 'coqui'],
    departs: 'Villa Marina',
    nm: 4,
    travel: L('about 15 minutes', 'unos 15 minutos'),
    options: [
      { hours: 4, price: 950, fits: L(['Wade the Icacos sandbar', 'Snorkel the reef off Lobos'], ['Camina la barra de Icacos', 'Snorkel en el arrecife de Lobos']) },
      { hours: 6, price: 1250, fits: L(['Icacos sandbar and reef', 'Lunch at anchor off Palomino', 'Snorkel Palominito'], ['Barra y arrecife de Icacos', 'Almuerzo anclados frente a Palomino', 'Snorkel en Palominito']) },
      { hours: 8, price: 1550, fits: L(['Icacos, Lobos and Palomino', 'A long lunch at anchor', 'A slow afternoon at Palominito'], ['Icacos, Lobos y Palomino', 'Un almuerzo largo anclados', 'Una tarde tranquila en Palominito']) },
    ],
    included,
    bring,
  },
  {
    slug: 'palomino',
    kind: 'destination',
    name: L('Palomino', 'Palomino'),
    summary: L(
      'Calm, clear water around Palomino and tiny Palominito, with reefs close enough to swim to from the boat.',
      'Agua tranquila y cristalina alrededor de Palomino y Palominito, con arrecifes a nado desde el bote.',
    ),
    image: withBase('/images/palomino.webp'),
    gallery: [withBase('/images/anchored.webp'), withBase('/images/turtle.webp'), withBase('/images/sandbar.webp')],
    boats: ['brisa', 'marea', 'coqui'],
    departs: 'Villa Marina',
    nm: 4,
    travel: L('about 15 minutes', 'unos 15 minutos'),
    options: [
      { hours: 4, price: 950, fits: L(['Swim and snorkel off Palomino', 'The Palominito sandbar'], ['Nado y snorkel en Palomino', 'La barra de Palominito']) },
      { hours: 6, price: 1250, fits: L(['Palomino and Palominito', 'Lunch at anchor', 'Snorkel the reef at Lobos'], ['Palomino y Palominito', 'Almuerzo anclados', 'Snorkel en el arrecife de Lobos']) },
      { hours: 8, price: 1550, fits: L(['Palomino, Palominito and Icacos', 'A long lunch at anchor', 'Time to do nothing at all'], ['Palomino, Palominito e Icacos', 'Un almuerzo largo anclados', 'Tiempo para no hacer nada']) },
    ],
    included,
    bring,
  },
  {
    slug: 'vieques',
    kind: 'destination',
    name: L('Vieques', 'Vieques'),
    summary: L(
      'Quiet beaches, clear coves and, on a full day, the south coast and lunch in Esperanza.',
      'Playas tranquilas, calas cristalinas y, en un día completo, la costa sur y almuerzo en Esperanza.',
    ),
    image: withBase('/images/vieques.webp'),
    gallery: [withBase('/images/cove.webp'), withBase('/images/snorkel.webp'), withBase('/images/hero.webp')],
    boats: ['brisa', 'coqui'],
    departs: 'Puerto del Rey',
    nm: 13,
    travel: L('about 40 minutes', 'unos 40 minutos'),
    options: [
      { hours: 4, price: 1350, fits: L(['A north-coast beach on Vieques', 'One swim stop on the way back'], ['Una playa de la costa norte', 'Una parada para nadar al regreso']) },
      { hours: 6, price: 1650, fits: L(['The Vieques north coast', 'Lunch at anchor', 'Snorkel a quiet cove'], ['La costa norte de Vieques', 'Almuerzo anclados', 'Snorkel en una cala tranquila']) },
      { hours: 8, price: 1950, fits: L(['Around to the south coast', 'Lunch in Esperanza', 'Beaches the ferry never reaches'], ['Hasta la costa sur', 'Almuerzo en Esperanza', 'Playas a las que el ferry no llega']) },
    ],
    included,
    bring,
  },
  {
    slug: 'culebra',
    kind: 'destination',
    name: L('Culebra', 'Culebra'),
    summary: L(
      'Sea turtles at Tamarindo and the white sand of Flamenco, one of the most beautiful beaches in the Caribbean.',
      'Tortugas en Tamarindo y la arena blanca de Flamenco, una de las playas más bellas del Caribe.',
    ),
    image: withBase('/images/culebra.webp'),
    gallery: [withBase('/images/turtle.webp'), withBase('/images/cove.webp'), withBase('/images/wake.webp')],
    boats: ['brisa', 'coqui'],
    departs: 'Puerto del Rey',
    nm: 18,
    travel: L('about an hour', 'alrededor de una hora'),
    options: [
      { hours: 4, price: 1450, fits: L(['Snorkel with turtles at Tamarindo'], ['Snorkel con tortugas en Tamarindo']) },
      { hours: 6, price: 1750, fits: L(['Turtles at Tamarindo', 'Lunch and a swim at Flamenco'], ['Tortugas en Tamarindo', 'Almuerzo y playa en Flamenco']) },
      { hours: 8, price: 1950, fits: L(['Tamarindo turtles and Flamenco', 'Culebrita if the sea allows'], ['Tortugas en Tamarindo y Flamenco', 'Culebrita si el mar lo permite']) },
    ],
    included,
    bring,
  },
  {
    slug: 'st-thomas',
    kind: 'destination',
    name: L('St. Thomas', 'St. Thomas'),
    summary: L(
      'Cross to the U.S. Virgin Islands for Magens Bay, Charlotte Amalie and lunch ashore. A full day only.',
      'Cruza a las Islas Vírgenes de EE. UU. para Magens Bay, Charlotte Amalie y almuerzo en tierra. Solo día completo.',
    ),
    image: withBase('/images/st-thomas.webp'),
    gallery: [withBase('/images/st-thomas-harbor.webp'), withBase('/images/crossing.webp'), withBase('/images/wake.webp')],
    boats: ['brisa', 'coqui'],
    departs: 'Puerto del Rey',
    nm: 40,
    travel: L('1.5 to 2 hours', '1.5 a 2 horas'),
    options: [
      {
        hours: 8,
        price: 2800,
        fits: L(
          ['The open-water crossing past Culebra', 'Magens Bay or Charlotte Amalie', 'Lunch ashore on your own time'],
          ['La travesía en mar abierto pasando Culebra', 'Magens Bay o Charlotte Amalie', 'Almuerzo en tierra a tu ritmo'],
        ),
      },
    ],
    notice: {
      title: L('Passport required', 'Pasaporte requerido'),
      body: L(
        'St. Thomas is outside U.S. customs territory, so every guest clears customs on arrival. Bring your passport; it’s usually quick.',
        'St. Thomas está fuera del territorio aduanero de EE. UU., así que cada pasajero pasa por aduana al llegar. Trae tu pasaporte; normalmente es rápido.',
      ),
    },
    included,
    bring,
  },
  {
    slug: 'sunset',
    kind: 'experience',
    name: L('Sunset sail', 'Velero al atardecer'),
    summary: L(
      'Two and a half hours along the coast as the light goes gold. Bring a bottle; we’ll bring the glasses.',
      'Dos horas y media por la costa mientras la luz se vuelve dorada. Trae una botella; nosotros ponemos las copas.',
    ),
    image: withBase('/images/sunset.webp'),
    gallery: [withBase('/images/sunset2.webp'), withBase('/images/boat-cat.webp'), withBase('/images/yacht-bow.webp')],
    boats: ['marea', 'brisa'],
    departs: 'Villa Marina',
    options: [
      { hours: 2.5, price: 650, fits: L(['Cruise the coast toward Las Croabas', 'Sunset at anchor'], ['Recorrido por la costa hacia Las Croabas', 'Atardecer anclados']) },
    ],
    included,
    bring,
  },
  {
    slug: 'private-celebration',
    kind: 'experience',
    name: L('Private celebrations', 'Celebraciones privadas'),
    summary: L(
      'Birthdays, proposals, bachelorettes and company days. Tell us the occasion and we’ll plan the route, the boat and the extras.',
      'Cumpleaños, propuestas, despedidas de soltera y días de empresa. Cuéntanos la ocasión y planificamos la ruta, el bote y los detalles.',
    ),
    image: withBase('/images/yacht-bow.webp'),
    gallery: [withBase('/images/boat-cat.webp'), withBase('/images/sunset2.webp'), withBase('/images/sandbar.webp')],
    boats: ['marea', 'brisa', 'coqui'],
    departs: 'Villa Marina',
    options: [
      { hours: 4, price: 1200, fits: L(['Any of the cays', 'Decorations and music on request'], ['Cualquiera de los cayos', 'Decoración y música a petición']) },
      { hours: 6, price: 1600, fits: L(['The cays or Vieques', 'Catering on request'], ['Los cayos o Vieques', 'Catering a petición']) },
      { hours: 8, price: 2000, fits: L(['Culebra or Vieques', 'A full day planned around your group'], ['Culebra o Vieques', 'Un día completo planificado para tu grupo']) },
    ],
    included,
    bring,
  },
];

export const tripBySlug = (slug: string) => trips.find((t) => t.slug === slug)!;

/** Whole-boat price for one option on one boat. */
export const optionPrice = (option: Option, boatSlug: string) => boatPrice(option.price, boatBySlug(boatSlug));

/** Cheapest whole-boat price for an option across the boats that run the trip. */
export const optionFrom = (trip: Trip, option: Option) => Math.min(...trip.boats.map((b) => optionPrice(option, b)));

/** Cheapest whole-boat price for a trip, across all lengths and boats. */
export const fromPrice = (trip: Trip) => Math.min(...trip.options.map((o) => optionFrom(trip, o)));

/** "4, 6 or 8" / "4, 6 u 8" */
export const hoursList = (trip: Trip, lang: 'en' | 'es') =>
  new Intl.ListFormat(lang === 'en' ? 'en-US' : 'es', { type: 'disjunction' }).format(
    trip.options.map((o) => String(o.hours)),
  );

export const money = (n: number, lang: 'en' | 'es') =>
  new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'es-PR', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
