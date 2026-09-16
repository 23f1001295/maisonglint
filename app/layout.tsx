import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Maison Glint — Modernist Chromeware',
  description: 'A study in light, form and the everyday table. Discover the first stainless steel plate from Maison Glint. Collection preview.',
  robots: { index: false, follow: true },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
