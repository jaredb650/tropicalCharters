import { L, type Localized } from '../i18n';
import { withBase } from '../lib/paths';

// PLACEHOLDER fleet: names, specs, captains and photos stand in until partner details arrive.
// In production, each boat maps to one Google Calendar and one cal.com event type per trip.
export interface Boat {
  slug: string;
  name: string;
  kind: Localized;
  lengthFt: number;
  guests: number;
  /** Price multiplier on a trip's base ("from") price. PLACEHOLDER. */
  rate: number;
  captain: string;
  image: string;
  bestFor: Localized;
  about: Localized;
}

export const boats: Boat[] = [
  {
    slug: 'brisa',
    name: 'Brisa',
    kind: L('42′ flybridge motor yacht', 'Yate de motor de 42′ con flybridge'),
    lengthFt: 42,
    guests: 12,
    rate: 1.4,
    captain: 'Luis Rivera',
    image: withBase('/images/boat-yacht.webp'),
    bestFor: L('Culebra and Vieques in comfort', 'Culebra y Vieques con comodidad'),
    about: L(
      'Air-conditioned cabin, a full bathroom and shade on the flybridge. The smoothest ride across the passage.',
      'Cabina con aire acondicionado, baño completo y sombra en el flybridge. El viaje más suave por el pasaje.',
    ),
  },
  {
    slug: 'marea',
    name: 'Marea',
    kind: L('40′ sailing catamaran', 'Catamarán de vela de 40′'),
    lengthFt: 40,
    guests: 18,
    rate: 1.15,
    captain: 'Ana Colón',
    image: withBase('/images/boat-cat.webp'),
    bestFor: L('Groups, sunsets and celebrations', 'Grupos, atardeceres y celebraciones'),
    about: L(
      'Two trampolines, a wide deck and room to spread out. Under sail when the wind cooperates.',
      'Dos trampolines, una cubierta amplia y espacio para todos. A vela cuando el viento ayuda.',
    ),
  },
  {
    slug: 'coqui',
    name: 'Coquí',
    kind: L('34′ center console', 'Center console de 34′'),
    lengthFt: 34,
    guests: 8,
    rate: 1,
    captain: 'Javier Ortiz',
    image: withBase('/images/boat-console.webp'),
    bestFor: L('Small groups who want to see more', 'Grupos pequeños que quieren ver más'),
    about: L(
      'Twin outboards and a shallow draft. Fastest to Culebra and able to tuck into coves the bigger boats skip.',
      'Dos motores fuera de borda y poco calado. El más rápido a Culebra y capaz de entrar a calas que los botes grandes no alcanzan.',
    ),
  },
];

export const boatBySlug = (slug: string) => boats.find((b) => b.slug === slug)!;

/** Whole-boat price for a trip on this boat, rounded to $10. */
export const boatPrice = (base: number, boat: Boat) => Math.round((base * boat.rate) / 10) * 10;
