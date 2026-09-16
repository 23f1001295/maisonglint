// Confirm these values against the selected supplier's physical sample before launch.
export const product: { name: string; material: string; finish: string; diameterMm: number | null; heightMm: number | null; weightGrams: number | null; priceUSD: number | null; priceGBP: number | null } = {
  name: 'The Glint Plate', material: 'Stainless steel', finish: 'Mirror polish',
  diameterMm: null, heightMm: null, weightGrams: null, priceUSD: null, priceGBP: null,
};
export const gallery = [
  { src: '/images/hero.webp', alt: 'Concept rendering of a mirror-polished stainless steel plate on dark stone', label: 'The silhouette' },
  { src: '/images/macro.webp', alt: 'Concept close-up of light reflected across a polished steel plate rim', label: 'The finish' },
  { src: '/images/dining.webp', alt: 'Concept table setting with cherries on a silver steel plate and white linen', label: 'At the table' },
];
