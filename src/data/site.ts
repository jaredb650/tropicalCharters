// Business details. Everything marked PLACEHOLDER needs the client's real value before launch.
export const site = {
  name: 'Tropical Charters',
  whatsapp: '17875550123', // PLACEHOLDER: digits only, used for wa.me links
  phoneDisplay: '+1 (787) 555-0123', // PLACEHOLDER
  email: 'hola@tropicalcharters.example', // PLACEHOLDER
  marinas: [
    { name: 'Villa Marina', town: 'Fajardo, PR 00738' },
    { name: 'Puerto del Rey', town: 'Fajardo, PR 00738' },
  ],
  timezone: 'America/Puerto_Rico',
  coords: { lat: '18°20′ N', lon: '65°38′ W' },
  instagram: 'https://instagram.com/', // PLACEHOLDER
};

export const waLink = (text = '') =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
