import { L, type Localized } from '../i18n';
import { withBase } from '../lib/paths';

// Stops on the chart in <Voyage />, closest to farthest from Villa Marina.
// `nm` is the distance from the dock; `bg`/`ink` set the water color behind the chart,
// shallow turquoise near shore deepening to open-ocean blue toward St. Thomas.
export interface Stop {
  place: string;
  nm: number;
  travel: Localized;
  title: Localized;
  body: Localized;
  image: string;
  /** Trip page this stop links to, if any. */
  trip?: string;
  bg: string;
  ink: string;
}

export const stops: Stop[] = [
  {
    place: 'Villa Marina, Fajardo',
    nm: 0,
    travel: L('Departure', 'Salida'),
    title: L('Meet your captain at the dock', 'Conoce a tu capitán en el muelle'),
    body: L(
      'Coffee, a quick safety talk and you’re off. Every trip starts here or at Puerto del Rey, a few minutes south.',
      'Café, una charla de seguridad y a navegar. Todos los viajes salen de aquí o de Puerto del Rey, a pocos minutos al sur.',
    ),
    image: withBase('/images/anchored.webp'),
    bg: '#F2F5F3',
    ink: '#0B2C3D',
  },
  {
    place: 'Cayo Icacos',
    nm: 4,
    travel: L('about 15 minutes', 'unos 15 minutos'),
    title: L('Wade out on the sandbar', 'Camina la barra de arena'),
    body: L(
      'Knee-deep water the color of glass for a quarter mile, with a reef to snorkel just off the edge.',
      'Agua cristalina hasta las rodillas por un cuarto de milla, con un arrecife para snorkel justo al lado.',
    ),
    image: withBase('/images/icacos.webp'),
    trip: 'icacos',
    bg: '#CDEBE4',
    ink: '#0B2C3D',
  },
  {
    place: 'Palomino',
    nm: 4,
    travel: L('about 15 minutes', 'unos 15 minutos'),
    title: L('Swim off the stern', 'Nada desde la popa'),
    body: L(
      'Calm water around Palomino and tiny Palominito, with reefs close enough to swim to from the boat.',
      'Agua tranquila alrededor de Palomino y Palominito, con arrecifes a nado desde el bote.',
    ),
    image: withBase('/images/palomino.webp'),
    trip: 'palomino',
    bg: '#A7DDD4',
    ink: '#0B2C3D',
  },
  {
    place: 'Vieques',
    nm: 13,
    travel: L('about 40 minutes', 'unos 40 minutos'),
    title: L('Beaches the ferry never reaches', 'Playas a las que el ferry no llega'),
    body: L(
      'Across the Vieques Passage to quiet coves on the north coast, or all the way around to Esperanza.',
      'Cruzando el Pasaje de Vieques hasta calas tranquilas en la costa norte, o hasta Esperanza.',
    ),
    image: withBase('/images/vieques.webp'),
    trip: 'vieques',
    bg: '#5FAFAD',
    ink: '#0B2C3D',
  },
  {
    place: 'Culebra',
    nm: 18,
    travel: L('about an hour', 'alrededor de una hora'),
    title: L('Turtles at Tamarindo, then Flamenco', 'Tortugas en Tamarindo y luego Flamenco'),
    body: L(
      'Snorkel with sea turtles in the seagrass, then spend the afternoon on one of the Caribbean’s best beaches.',
      'Snorkel con tortugas entre la yerba marina y luego la tarde en una de las mejores playas del Caribe.',
    ),
    image: withBase('/images/turtle.webp'),
    trip: 'culebra',
    bg: '#13506A',
    ink: '#F2F5F3',
  },
  {
    place: 'St. Thomas, USVI',
    nm: 40,
    travel: L('1.5 to 2 hours', '1.5 a 2 horas'),
    title: L('All the way to the Virgin Islands', 'Hasta las Islas Vírgenes'),
    body: L(
      'Open water past Culebra to Magens Bay and Charlotte Amalie. A full-day trip; bring your passport for customs.',
      'Mar abierto pasando Culebra hasta Magens Bay y Charlotte Amalie. Viaje de día completo; trae tu pasaporte para la aduana.',
    ),
    image: withBase('/images/st-thomas.webp'),
    trip: 'st-thomas',
    bg: '#0B2C3D',
    ink: '#F2F5F3',
  },
];
