import './globals.css';
import { Metadata } from 'next';
import { Montserrat, Cormorant, Dancing_Script } from 'next/font/google';
import { HydrationController } from '../components/ui/HydrationController';
import { BottomNav } from '../components/ui/BottomNav';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Luna Kids Boutique',
    default: 'Luna Kids | Moda Infantil y Alta Costura Flamenca',
  },
  description: 'Boutique premium de moda infantil y trajes de flamenca artesanales con sede en Sevilla, Andalucía.',
  metadataBase: new URL('https://lunakids.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-ES" className={`${montserrat.variable} ${cormorant.variable} ${dancingScript.variable} antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              "name": "Luna Kids Boutique",
              "url": "https://lunakids.vercel.app",
              "logo": "https://lunakids.vercel.app/icon.png",
              "image": "https://lunakids.vercel.app/og-image.jpg",
              "description": "Boutique de moda infantil y trajes de flamenca artesanales con sede en Sevilla, Andalucía.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Alcalá de Guadaíra",
                "addressRegion": "Andalucía",
                "addressCountry": "ES"
              },
              "priceRange": "$$$",
              "telephone": "+34-619-172-134"
            })
          }}
        />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="font-sans min-h-screen bg-linen text-ink selection:bg-accent selection:text-base relative" suppressHydrationWarning>
        <HydrationController />
        <div className="absolute inset-0 bg-magic opacity-40 pointer-events-none mix-blend-multiply fixed" />
        <main className="relative flex flex-col w-full overflow-x-hidden isolate pb-20 md:pb-0">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
