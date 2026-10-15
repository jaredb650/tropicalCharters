import { L, type Localized } from '../i18n';
import { withBase } from '../lib/paths';

// Stops on the sample full-day route drawn on the chart in <Voyage />.
// `bg`/`ink` set the water color behind the chart at that point in the day.
export interface Stop {
  time: string;
  place: string;
  title: Localized;
  body: Localized;
  image: string;
  bg: string;
  ink: string;
}

export const stops: Stop[] = [
  {
    time: '9:00',
    place: 'Villa Marina, Fajardo',
    title: L('Meet your captain at the dock', 'Conoce a tu capitán en el muelle'),
    body: L(
      'Coffee, a quick safety talk and you’re off. The cays are about four nautical miles out.',
      'Café, una charla de seguridad y a navegar. Los cayos están a unas cuatro millas náuticas.',
    ),
    image: withBase('/images/anchored.webp'),
    bg: '#F2F5F3',
    ink: '#0B2C3D',
  },
  {
    time: '9:30',
    place: 'Cayo Icacos',
    title: L('Wade out on the sandbar', 'Camina la barra de arena'),
    body: L(
      'Knee-deep water the color of glass for a quarter mile, with a reef to snorkel just off the edge.',
      'Agua cristalina hasta las rodillas por un cuarto de milla, con un arrecife para snorkel justo al lado.',
    ),
    image: withBase('/images/icacos.webp'),
    bg: '#CDEBE4',
    ink: '#0B2C3D',
  },
  {
    time: '11:30',
    place: 'Palomino',
    title: L('Lunch at anchor', 'Almuerzo anclados'),
    body: L(
      'Swim off the stern while lunch comes out. Nobody is in a hurry.',
      'Nada desde la popa mientras sale el almuerzo. Aquí nadie tiene prisa.',
    ),
    image: withBase('/images/palomino.webp'),
    bg: '#8FCFC6',
    ink: '#0B2C3D',
  },
  {
    time: '13:30',
    place: 'Culebra',
    title: L('Turtles at Tamarindo, then Flamenco', 'Tortugas en Tamarindo y luego Flamenco'),
    body: L(
      'An hour across open water to Culebra. Snorkel with sea turtles in the seagrass, then spend the afternoon on the sand.',
      'Una hora de mar abierto hasta Culebra. Snorkel con tortugas entre la yerba marina y luego la tarde en la arena.',
    ),
    image: withBase('/images/turtle.webp'),
    bg: '#13506A',
    ink: '#F2F5F3',
  },
  {
    time: '17:30',
    place: 'Fajardo',
    title: L('Home with the sun behind you', 'De vuelta con el sol a tu espalda'),
    body: L(
      'Golden light on the run home and back at the dock before dark.',
      'Luz dorada en el regreso y en el muelle antes de que oscurezca.',
    ),
    image: withBase('/images/sunset.webp'),
    bg: '#E6B08A',
    ink: '#0B2C3D',
  },
];
