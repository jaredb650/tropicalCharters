import { L, type Localized } from '../i18n';
import { withBase } from '../lib/paths';
import { boatBySlug, boatPrice } from './boats';

// PLACEHOLDER prices and durations. `priceFrom` is the base whole-boat price in USD;
// each boat applies its own rate on top (see boats.ts).
export interface Trip {
  slug: string;
  name: Localized;
  summary: Localized;
  hours: string;
  priceFrom: number;
  image: string;
  gallery: string[];
  boats: string[];
  departs: string;
  itinerary: Localized<[string, string][]>;
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
    slug: 'icacos-half-day',
    name: L('Icacos and the cays', 'Icacos y los cayos'),
    summary: L(
      'A morning on the sandbar at Cayo Icacos, then snorkeling off Lobos or Palomino. The easiest yes for first-timers.',
      'Una mañana en la barra de arena de Cayo Icacos y snorkel en Lobos o Palomino. Perfecto para la primera vez.',
    ),
    hours: '4',
    priceFrom: 950,
    image: withBase('/images/icacos.webp'),
    gallery: [withBase('/images/sandbar.webp'), withBase('/images/snorkel.webp'), withBase('/images/palomino.webp')],
    boats: ['brisa', 'marea', 'coqui'],
    departs: 'Villa Marina',
    itinerary: L(
      [
        ['9:00', 'Board at Villa Marina and meet your captain'],
        ['9:30', 'Anchor off Icacos; wade the sandbar'],
        ['11:00', 'Snorkel the reef at Lobos or Palomino'],
        ['13:00', 'Back at the dock'],
      ],
      [
        ['9:00', 'Abordas en Villa Marina y conoces a tu capitán'],
        ['9:30', 'Anclamos en Icacos; caminas la barra de arena'],
        ['11:00', 'Snorkel en el arrecife de Lobos o Palomino'],
        ['13:00', 'De vuelta en el muelle'],
      ],
    ),
    included,
    bring,
  },
  {
    slug: 'cays-full-day',
    name: L('The cays, all day', 'Los cayos, todo el día'),
    summary: L(
      'Icacos, Palomino and Palominito at an unhurried pace, with a long lunch at anchor in between.',
      'Icacos, Palomino y Palominito sin prisa, con un almuerzo largo anclados entre uno y otro.',
    ),
    hours: '7',
    priceFrom: 1450,
    image: withBase('/images/palomino.webp'),
    gallery: [withBase('/images/icacos.webp'), withBase('/images/turtle.webp'), withBase('/images/anchored.webp')],
    boats: ['brisa', 'marea', 'coqui'],
    departs: 'Villa Marina',
    itinerary: L(
      [
        ['9:00', 'Board at Villa Marina'],
        ['9:30', 'Icacos sandbar and reef'],
        ['12:00', 'Lunch at anchor off Palomino'],
        ['14:00', 'Snorkel Palominito'],
        ['16:00', 'Back at the dock'],
      ],
      [
        ['9:00', 'Abordas en Villa Marina'],
        ['9:30', 'Barra de arena y arrecife de Icacos'],
        ['12:00', 'Almuerzo anclados frente a Palomino'],
        ['14:00', 'Snorkel en Palominito'],
        ['16:00', 'De vuelta en el muelle'],
      ],
    ),
    included,
    bring,
  },
  {
    slug: 'culebra',
    name: L('Culebra: Flamenco and Tamarindo', 'Culebra: Flamenco y Tamarindo'),
    summary: L(
      'Swim with sea turtles at Tamarindo and spend the afternoon on Flamenco, one of the most beautiful beaches in the Caribbean.',
      'Nada con tortugas en Tamarindo y pasa la tarde en Flamenco, una de las playas más bellas del Caribe.',
    ),
    hours: '8',
    priceFrom: 1900,
    image: withBase('/images/culebra.webp'),
    gallery: [withBase('/images/turtle.webp'), withBase('/images/cove.webp'), withBase('/images/wake.webp')],
    boats: ['brisa', 'coqui'],
    departs: 'Puerto del Rey',
    itinerary: L(
      [
        ['8:30', 'Board at Puerto del Rey'],
        ['9:45', 'Snorkel with turtles at Tamarindo'],
        ['12:00', 'Lunch and swim at Flamenco'],
        ['15:00', 'Culebrita if the sea allows'],
        ['16:30', 'Back at the dock'],
      ],
      [
        ['8:30', 'Abordas en Puerto del Rey'],
        ['9:45', 'Snorkel con tortugas en Tamarindo'],
        ['12:00', 'Almuerzo y playa en Flamenco'],
        ['15:00', 'Culebrita si el mar lo permite'],
        ['16:30', 'De vuelta en el muelle'],
      ],
    ),
    included,
    bring,
  },
  {
    slug: 'vieques',
    name: L('Vieques by sea', 'Vieques por mar'),
    summary: L(
      'The quiet south coast of Vieques: empty beaches, clear coves and a lunch stop in Esperanza.',
      'La costa sur tranquila de Vieques: playas vacías, calas cristalinas y una parada para almorzar en Esperanza.',
    ),
    hours: '8',
    priceFrom: 1900,
    image: withBase('/images/vieques.webp'),
    gallery: [withBase('/images/cove.webp'), withBase('/images/snorkel.webp'), withBase('/images/hero.webp')],
    boats: ['brisa', 'coqui'],
    departs: 'Puerto del Rey',
    itinerary: L(
      [
        ['8:30', 'Board at Puerto del Rey'],
        ['10:00', 'First swim on the south coast'],
        ['12:30', 'Lunch in Esperanza'],
        ['14:30', 'A last cove before heading home'],
        ['16:30', 'Back at the dock'],
      ],
      [
        ['8:30', 'Abordas en Puerto del Rey'],
        ['10:00', 'Primer baño en la costa sur'],
        ['12:30', 'Almuerzo en Esperanza'],
        ['14:30', 'Una última cala antes de regresar'],
        ['16:30', 'De vuelta en el muelle'],
      ],
    ),
    included,
    bring,
  },
  {
    slug: 'sunset',
    name: L('Sunset sail', 'Velero al atardecer'),
    summary: L(
      'Two and a half hours along the coast as the light goes gold. Bring a bottle; we’ll bring the glasses.',
      'Dos horas y media por la costa mientras la luz se vuelve dorada. Trae una botella; nosotros ponemos las copas.',
    ),
    hours: '2.5',
    priceFrom: 650,
    image: withBase('/images/sunset.webp'),
    gallery: [withBase('/images/sunset2.webp'), withBase('/images/boat-cat.webp'), withBase('/images/yacht-bow.webp')],
    boats: ['marea', 'brisa'],
    departs: 'Villa Marina',
    itinerary: L(
      [
        ['17:00', 'Board at Villa Marina'],
        ['17:30', 'Cruise the coast toward Las Croabas'],
        ['18:30', 'Sunset at anchor'],
        ['19:30', 'Back at the dock'],
      ],
      [
        ['17:00', 'Abordas en Villa Marina'],
        ['17:30', 'Recorrido por la costa hacia Las Croabas'],
        ['18:30', 'Atardecer anclados'],
        ['19:30', 'De vuelta en el muelle'],
      ],
    ),
    included,
    bring,
  },
  {
    slug: 'private-celebration',
    name: L('Private celebrations', 'Celebraciones privadas'),
    summary: L(
      'Birthdays, proposals, bachelorettes and company days. Tell us the occasion and we’ll plan the route, the boat and the extras.',
      'Cumpleaños, propuestas, despedidas de soltera y días de empresa. Cuéntanos la ocasión y planificamos la ruta, el bote y los detalles.',
    ),
    hours: '4–8',
    priceFrom: 1200,
    image: withBase('/images/yacht-bow.webp'),
    gallery: [withBase('/images/boat-cat.webp'), withBase('/images/sunset2.webp'), withBase('/images/sandbar.webp')],
    boats: ['marea', 'brisa', 'coqui'],
    departs: 'Villa Marina',
    itinerary: L(
      [
        ['—', 'Tell us the occasion and your group size'],
        ['—', 'We suggest a route, boat and add-ons'],
        ['—', 'Confirm and pay online'],
      ],
      [
        ['—', 'Cuéntanos la ocasión y el tamaño del grupo'],
        ['—', 'Te sugerimos ruta, bote y extras'],
        ['—', 'Confirma y paga en línea'],
      ],
    ),
    included,
    bring,
  },
];

export const tripBySlug = (slug: string) => trips.find((t) => t.slug === slug)!;

export const money = (n: number, lang: 'en' | 'es') =>
  new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'es-PR', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);

/** Cheapest whole-boat price for a trip across the boats that run it. */
export const fromPrice = (trip: Trip) => Math.min(...trip.boats.map((b) => boatPrice(trip.priceFrom, boatBySlug(b))));
