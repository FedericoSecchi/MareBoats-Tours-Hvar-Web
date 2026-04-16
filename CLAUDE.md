# CLAUDE.md — MareBoats Hvar (mareboatshvar.com)

## Proyecto
Sitio web de Mare Boats Hvar — tours privados en lancha, alquiler de barcos, scooter rental y transfers desde Hvar, Croacia.
Cliente: Nikola (dueño). Desarrollo: Fede (Somos Kosmos). Diseño: Coti.

## Stack
- Next.js 14 (App Router) con SSR/SSG
- Tailwind CSS
- TypeScript
- Vercel (deploy)
- Idioma principal: inglés

## Estructura de carpetas
```
/mareboatshvar/
├── app/
│   ├── layout.tsx         ← fonts, metadata global, WhatsApp button
│   ├── page.tsx           ← homepage
│   ├── tours/page.tsx     ← listado de tours
│   ├── blue-cave/page.tsx ← Blue Cave tour (keyword principal)
│   ├── boat-rental/page.tsx
│   ├── transfers/page.tsx
│   ├── sunset/page.tsx
│   ├── contact/page.tsx
│   ├── about/page.tsx
│   ├── faq/page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
├── components/
│   ├── ui/               ← WhatsAppButton, CTAButton, NavBar
│   └── sections/         ← Hero, Tours, FAQ, Footer
├── lib/
│   ├── seo.ts            ← helper de metadata
│   └── schema.ts         ← JSON-LD helpers
├── public/
│   └── images/
└── CLAUDE.md
```

## Reglas de respuesta
- Respuestas cortas y accionables. No narrar el plan antes de ejecutar.
- No duplicar código ya presente. Solo implementar lo mínimo que resuelve el problema.
- Un archivo por vez salvo que sean dependientes.
- Siempre verificar que el código compila antes de dar por terminado.

## SEO — Reglas obligatorias

### Metadata en cada página
```tsx
import { Metadata } from 'next';

// SIEMPRE incluir:
export const metadata: Metadata = {
  title: 'Keyword Principal | Mare Boats Hvar',  // <60 chars
  description: 'Descripción con keyword + CTA. Max 155 chars.',
  keywords: ['keyword1', 'keyword2'],
  alternates: { canonical: 'https://mareboatshvar.com/slug' },
  openGraph: {
    title: '...',
    description: '...',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};
```

### Keywords objetivo por página
| Página | Keyword principal | Keywords secundarias |
|--------|-------------------|----------------------|
| Homepage | private boat tours hvar | boat tour hvar, mare boats |
| /blue-cave | blue cave tour from hvar | blue cave hvar, blue cave boat trip |
| /boat-rental | boat rental hvar | rent a boat hvar, hvar boat hire |
| /transfers | boat transfer hvar split | water taxi hvar, hvar split boat |
| /sunset | sunset boat tour hvar | sunset cruise hvar, evening boat hvar |
| /tours | hvar boat excursion | best boat tours hvar, pakleni islands tour |
| /faq | boat tour hvar faq | do I need license hvar, how much boat tour hvar |

### H1: uno por página, con keyword principal
```tsx
// BIEN
<h1>Private Boat Tours in Hvar</h1>

// MAL
<h1>Welcome to Mare Boats</h1>  // sin keyword
```

### Schema JSON-LD — obligatorio en layout
```tsx
// lib/schema.ts
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "additionalType": "BoatTour",
  "name": "Mare Boats Hvar",
  "description": "Private boat tours, Blue Cave excursions, boat rental and transfers from Hvar, Croatia.",
  "url": "https://mareboatshvar.com",
  "telephone": "+385...",  // completar
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hvar",
    "addressRegion": "Split-Dalmatia",
    "addressCountry": "HR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.1725,
    "longitude": 16.4411
  },
  "image": "https://mareboatshvar.com/images/hero.jpg",
  "sameAs": [
    "https://www.instagram.com/mareboatshvar",
    "https://www.facebook.com/mareboatshvar"
  ]
};

// Componente reutilizable
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

### Sitemap y Robots
```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://mareboatshvar.com';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/tours`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blue-cave`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/boat-rental`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/transfers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/sunset`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];
}

// app/robots.ts
import { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/'] },
    sitemap: 'https://mareboatshvar.com/sitemap.xml',
  };
}
```

### Imágenes
- Siempre usar `next/image` con `alt` descriptivo que incluya keyword.
- Formato WebP/AVIF preferido.
- Hero image con `priority={true}`.

### Internal linking
- Cada página debe linkar a al menos 2 páginas internas.
- Anchor text descriptivo (no "click aquí").
- Footer con links a todas las páginas.

## Diseño — Reglas

### Mobile-first siempre
```tsx
// BIEN
<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// MAL
<div className="grid-cols-3 md:grid-cols-1">
```

### WhatsApp button fijo
```tsx
// Debe estar visible en TODA la web, mobile-first
<a
  href="https://wa.me/385..."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
  aria-label="Contact us on WhatsApp"
>
  {/* WhatsApp icon */}
</a>
```

### Paleta de colores (definir con Coti)
```css
--mare-primary: #0077B6;    /* azul Adriático */
--mare-dark: #023E8A;       /* azul profundo */
--mare-light: #CAF0F8;      /* celeste claro */
--mare-accent: #FF6B35;     /* naranja sunset — CTA */
--mare-white: #FAFAFA;
--mare-text: #1A1A2E;
```
Nota: estos son placeholder. Ajustar cuando Coti defina la paleta en Figma.

### Estructura de cada página de servicio
```
ABOVE THE FOLD
├── H1 con keyword + subtítulo
├── Imagen hero (drone shot)
├── CTA: "Book on WhatsApp" + "View Details"
├── Info rápida: duración, personas, qué incluye

BELOW THE FOLD
├── Descripción detallada del tour
├── Galería de fotos
├── Qué está incluido / no incluido
├── FAQ específica del tour (con schema FAQPage)
├── Reviews / testimonios
├── CTA final: WhatsApp
```

## Core Web Vitals — Checklist
- [ ] LCP < 2.5s: hero image con priority + sizes
- [ ] INP < 200ms: minimizar JS, code splitting
- [ ] CLS < 0.1: dimensiones explícitas en img/video, font-display: swap
- [ ] Preload fuentes críticas
- [ ] No render-blocking CSS/JS

## Diferenciador clave
MareBoats incluye **video aéreo con drone y video subacuático** en sus tours.
Esto debe estar presente en:
- Hero de la homepage
- Meta descriptions
- Copy de cada tour
- Schema markup
- OG images

## No hacer
- No inventar precios ni datos de contacto. Preguntar a Fede.
- No crear páginas sin metadata SEO completa.
- No usar client-side rendering para contenido principal (Google no lo lee).
- No hardcodear textos en español — todo en inglés.
