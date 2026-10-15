import { L, type Localized } from '../i18n';
import { withBase } from '../lib/paths';

// SAMPLE reviews for the design preview only. Replace with real Google reviews before launch.
export const reviews: { quote: Localized; who: string; trip: Localized }[] = [
  {
    quote: L(
      'Captain Luis found us a cove at Culebra with nobody else in it. Best day of the whole trip, easily.',
      'El capitán Luis nos encontró una cala en Culebra sin nadie más. El mejor día del viaje, sin duda.',
    ),
    who: 'Sample guest',
    trip: L('Culebra', 'Culebra'),
  },
  {
    quote: L(
      'We booked the catamaran for my sister’s bachelorette. They handled the decorations, the music and the timing. Flawless.',
      'Reservamos el catamarán para la despedida de mi hermana. Se encargaron de la decoración, la música y los tiempos. Perfecto.',
    ),
    who: 'Sample guest',
    trip: L('Private celebration', 'Celebración privada'),
  },
  {
    quote: L(
      'Booked online in two minutes, got directions the night before, and the water at Icacos was unreal.',
      'Reservé en línea en dos minutos, me enviaron cómo llegar la noche antes y el agua en Icacos era irreal.',
    ),
    who: 'Sample guest',
    trip: L('Icacos and the cays', 'Icacos y los cayos'),
  },
];

// Destination guides (blog). Titles are proposals for the first SEO articles.
export const guides: { title: Localized; image: string; minutes: number }[] = [
  {
    title: L('Icacos or Culebra: which day trip is right for you?', '¿Icacos o Culebra? Cuál viaje es para ti'),
    image: withBase('/images/sandbar.webp'),
    minutes: 6,
  },
  {
    title: L('Getting from San Juan to the marinas in Fajardo', 'Cómo llegar de San Juan a las marinas de Fajardo'),
    image: withBase('/images/pr-flag.webp'),
    minutes: 4,
  },
  {
    title: L('Where to snorkel with sea turtles in Puerto Rico', 'Dónde hacer snorkel con tortugas en Puerto Rico'),
    image: withBase('/images/turtle.webp'),
    minutes: 5,
  },
];
