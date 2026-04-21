# MareBoats Tours Hvar — Contexto del Proyecto

## Qué es esto
Sitio web de tours en lancha desde Hvar, Croacia.
Cliente: Nikola (dueño). Fede = skipper + marketing.
URL live: https://mareboatshvar.com
Entrega: 2026-04-30

## Stack
Next.js 14 + Tailwind CSS + TypeScript
App Router en /app — componentes activos en /components/ui/ y /components/sections/
NUNCA tocar /src/components/ — es código legacy

## Design System
Leer KOSMOS_SKILL.md antes de tocar cualquier archivo de UI.
Tokens ya instalados en tailwind.config.ts y globals.css (Fase 1 completa).

---

## Estado actual (21 abril 2026)

- Fase 1  ✅ commit c47932d — tokens, fuentes, Tailwind config
- Fase 2  ✅ commit 4b8df40 — SEO metadata, schema JSON-LD, sitemap, robots
- Fase 3  ✅ commit dd0748d — Rediseño visual completo
- Fase 4  ✅ commit fdb830c — Framer Motion + scroll progress bar
- Fase 5  ✅ commit 04c780b — next/image audit, lazy loading, favicon
- Fase 6  ✅ commit 301457a — Páginas /tours/[slug] x4 con SEO long-tail
- Fase 7  ✅ commit 06da4c9 — Fix LCP + trailing slash sitemap + copy "boat rental"
- Fase 8  ✅ commit 116ab39 — Logo SVG, favicon, OG image, WhatsApp confirmado
- Fase 9  ✅ commit 78e989b — UX/Conversión: WhatsApp CTAs, cards simétricas, TourHero, transfer slug, Instagram footer
- Fase 10 ✅ commit be472fd — Guest Guide /guide pública + FAQPage schema + sitemap
- Fase 11 ✅ commit e7ec143 — Copy humano: Hero, CTAs, Features, FAQ sin adjetivos vacíos
- Fase 12 ✅ commit 7865a48 — Fix colores/tokens páginas internas + refactor globals.css
- Fase 13 ✅ commit eeeadf1 — /guide expandida: 10 secciones, 8 FAQs JSON-LD, mapas, rental rules
- Fase 14 ✅ commit 950dde6 — /tours/yacht-sailboat-taxi con SEO long-tail
- Fase 15 ✅ commit dc334dc — /guide reorganizada: 5 secciones + lib/maps-data.ts
- Fase 15.1 ✅ commit cae1265 — Fix overflow-x mobile
- Fase 16 ✅ commit 5ea136d — 5 landing pages smart routing
- Fase 17 ✅ — Precios reales en lib/tours-data.ts
- Fase 18 ✅ — /tours/red-rocks-pakleni-islands
- Fase 19 ✅ — Scooter rental en /landing/rental
- Fase 20 ✅ commit 3f2c161 — WhatsApp templates /public/docs/
- Fase 21 ✅ commit fc385f5 — QR code guide /public/docs/
- Fase 22 ✅ commit b07d154 — Google My Maps setup + placeholders
- Fase 23 ✅ commit 8898692 — /on-tour info page
- Fase 24 ✅ — Navbar nuevo: 5 ítems planos + Book Now (sin dropdowns)
- Fase 25 ✅ — /tours index page con 6 tours + schema ItemList + How It Works
- Fase 26 ✅ — /rentals index (scooter, water scooter, boat rental) + rental rules accordion
- Fase 27 ✅ — /transfers index (Split, Airport, Brač, Korčula, Biševo) + schema ItemList
- Fase 28 ✅ — /about page con team, historia, boat, licencias + schema Person
- Fase 29 ✅ — /qr hub animado cinematográfico (noindex) con Framer Motion
- Fase 30 ✅ — Sitemap actualizado + breadcrumbs /tours/[slug] + related tours + footer nuevo
- Cleanup ✅ — Rutas legacy convertidas a thin 301 redirects (/blue-cave, /boat-rental, /sunset, /contact, /faq, /services/scooter-rental)

---

## Build actual
30 páginas estáticas. Rutas activas:
```
/ (home)
/tours/blue-cave-pakleni-islands
/tours/red-rocks-pakleni-islands
/tours/pakleni-islands
/tours/sunset-cruise
/tours/split-airport-transfer
/tours/private-boat-charter
/tours/yacht-sailboat-taxi
/guide
/on-tour (noindex)
/landing/explore
/landing/pre-tour (noindex)
/landing/review (noindex)
/landing/guide-hvar
/landing/rental
/review (redirect → Google Business)
```

---

## Arquitectura de URLs — DEFINITIVA (post Fases 24-30)

### Filosofía de diseño
- Navbar plano, 6 ítems, sin dropdowns, sin megamenú — máxima simplicidad
- El usuario normal navega por el navbar y llega a las index pages (/tours, /rentals, /transfers)
- Las páginas individuales /tours/[slug] son para SEO long-tail — no aparecen en el navbar
- El usuario llega a /tours/[slug] desde las cards de /tours o desde Google
- Las landing pages /landing/* se mantienen — accesibles desde /qr y links internos
- Sin splash screen de carga (daña LCP: actualmente 0.8s desktop, no arruinar)
- /qr es el único QR físico — una sola URL para todos los contextos

### Navbar (components/ui/NavBar.tsx)
```
Tours      →  /tours
Rentals    →  /rentals
Transfers  →  /transfers
Guide      →  /guide
About      →  /about
[Book Now] →  https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20book%20a%20tour
```
- Sin dropdowns, sin submenús, sin megamenú
- "Book Now" es pill sólido color acento — siempre visible a la derecha
- Desktop: logo izq · links centro · Book Now der
- Mobile: hamburger → lista vertical full-width
- Sticky top-0 z-50 · fondo transparente → bg blur al hacer scroll
- Scroll progress bar 2px en el fondo (ya existe — mantener)
- Active state: color acento + underline 2px en el link actual

### URLs completas post-refactor
```
mareboatshvar.com/
├── /                              HOME
├── /tours                         INDEX — lista todos los tours        [NUEVA — Fase 25]
│   ├── /tours/blue-cave-pakleni-islands     SEO long-tail ✅
│   ├── /tours/red-rocks-pakleni-islands     SEO long-tail ✅
│   ├── /tours/pakleni-islands               SEO long-tail ✅
│   ├── /tours/sunset-cruise                 SEO long-tail ✅
│   ├── /tours/private-boat-charter          SEO long-tail ✅
│   ├── /tours/yacht-sailboat-taxi           SEO long-tail ✅
│   └── /tours/split-airport-transfer        SEO long-tail ✅ (también en /transfers)
├── /rentals                       INDEX — lista todos los rentals      [NUEVA — Fase 26]
├── /transfers                     INDEX — lista todos los transfers    [NUEVA — Fase 27]
├── /guide                         Hvar Guide — tips, restaurants, local info
├── /about                         About MareBoats                     [NUEVA — Fase 28]
├── /qr                            QR Hub animado — noindex            [NUEVA — Fase 29]
├── /on-tour                       Info a bordo — noindex
├── /landing/explore               Indexable — turistas en el muelle
├── /landing/pre-tour              noindex — guests que bookearon
├── /landing/review                noindex — post-tour review
├── /landing/guide-hvar            Indexable — Hvar travel guide
├── /landing/rental                Rental rules
└── /review                        redirect 301 → Google Business Profile
```

---

## Datos confirmados del negocio

### Contacto
- WhatsApp: +385 95 196 6734 (único canal de conversión — sin formulario ni email)
- Instagram: https://www.instagram.com/mareboats.hvar/
- Google Maps: https://maps.app.goo.gl/U6kgAaRG81KZmqUEA
- Punto de encuentro exacto: "barrel" / booking spot → https://maps.app.goo.gl/3UamDy3Mh9dt4UpM7

### Operación
- Primer tour: 9:00 AM
- Disponibilidad WhatsApp Nikola: 07:00–00:00 (no responde 00:00–07:00)
- Seguro: boat + passenger insurance ✅ confirmado
- Licencia de barco: confirmada ✅
- Idiomas Fede: EN / HR / IT / ES — otros skippers: HR / EN únicamente

### Tours con precios confirmados
| Tour | Tipo | Precio | Duración | Personas máx |
|------|------|--------|----------|--------------|
| 5 Islands, 4 Beaches, 3 Caves | Shared o Private | €130/persona · €700 privado | 7h · 10:00–17:00 | 10 |
| Red Rocks & Pakleni Islands | Private only | €400 | 4h · 9–13 o 14–18 | 8 |
| Pakleni Islands | Private | consultar | 4h | 8 |
| Sunset Cruise | Private | €250 | ~2h | 8 |
| Private Charter | Private | €500 (fuel excl.) | custom | 8 |
| Yacht/Sailboat Taxi | On request | on request | — | — |

Incluido en todos los tours: Speedboat + Skipper, Fuel, Icebox, Bottled Water, Snorkeling Masks
Costos extra en 5 Islands: Green Cave €12/persona · Blue Cave €24/persona · Almuerzo aparte
Fotos drone + underwater: se venden APARTE, a pedido, solo cuando Fede es el skipper — NO incluidas
Blue Cave / Green Cave: disponibles como shared (grupo) o private
Grupos grandes: pueden usar múltiples speedboats

### Rentals
| Rental | Precio | Unidades |
|--------|--------|----------|
| Scooter | €50/día · €30–40/medio día | 6 unidades disponibles |
| Water Scooter | on request — confirmar precio con Nikola | confirmar |
| Boat Rental (sin skipper) | on request — confirmar precio con Nikola | confirmar |

### Transfers
| Ruta | Precio |
|------|--------|
| Split – Hvar (speedboat) | €500 |
| Airport – Hvar | €600 |
| Brač | on request |
| Korčula | on request |
| Biševo | on request |

### Restaurantes frecuentados (sin acuerdo formal — sin prometer beneficios)
Moli Onte (Milna) · Gego Restaurant (Zarace) · Tri Grede / Zdrilca · Bacchus (Palmizana)
Copy: "Restaurants we often stop at — no official deal, just good food."

### Hoteles con muelle (relevante para Yacht Taxi)
Hotel Podstine (muelle propio) · Amfora · Riva · Adriana Hotel Spa

### Reglas a bordo
- ✅ Botellas de vidrio permitidas en cubierta
- ✅ Heladera incluida — guests pueden traer la suya
- ✅ Alcohol con moderación
- ❌ Fumar: NO a bordo
- ⚠️ Baño: no hay — guests usan los de restaurantes en paradas
- ⚠️ Zonas de baja velocidad: multas reales policía marítima — siempre respetar
- ℹ️ Fotos drone + underwater: aparte, a pedido, solo con Fede de skipper
- ℹ️ Grupos grandes: múltiples speedboats disponibles

---

## FASE 24 — Navbar Nuevo

### Objetivo
Reemplazar el navbar actual por uno limpio con 6 ítems planos. Sin dropdowns. Sin megamenú.

### Spec — components/ui/NavBar.tsx
```tsx
const NAV_LINKS = [
  { label: 'Tours',     href: '/tours' },
  { label: 'Rentals',   href: '/rentals' },
  { label: 'Transfers', href: '/transfers' },
  { label: 'Guide',     href: '/guide' },
  { label: 'About',     href: '/about' },
]
const CTA = {
  label: 'Book Now',
  href: 'https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20book%20a%20tour',
}
```

Desktop:
- Logo izquierda · links centrados · CTA pill derecha
- Space Grotesk Medium · uppercase · letter-spacing: 0.05em
- Fondo transparente en top → bg-[var(--bg)]/90 backdrop-blur-md al hacer scroll
- Scroll progress bar 2px en el fondo (ya implementado — mantener)
- Sticky top-0 z-50
- Active state: color var(--accent) + border-bottom 2px accent

Mobile:
- Hamburger (3 líneas → X animado con Framer Motion)
- Panel full-width desde arriba: lista vertical con los 6 ítems + Book Now al fondo
- Book Now: botón full-width, pill acento

### Archivos a tocar
- `components/ui/NavBar.tsx` — refactor completo

### Commit
```bash
git commit -m "feat: fase 24 — navbar nuevo 6 ítems planos sin dropdowns"
```

---

## FASE 25 — /tours Index Page

### Objetivo
Lista todos los tours. Destino del link "Tours" del navbar.
El usuario ve todas las opciones con precio, elige, y va a la página individual o bookea directo.

### Metadata
```tsx
title: 'Boat Tours Hvar | All Tours from Hvar Harbour — MareBoats'
description: 'All MareBoats tours: Blue Cave, Red Rocks & Pakleni, Sunset Cruise, Private Charter. Private speedboat tours from Hvar Harbour. Book via WhatsApp.'
keywords: ['boat tours hvar', 'hvar tours', 'private boat tour hvar', 'blue cave tour hvar', 'pakleni islands tour', 'sunset cruise hvar']
canonical: 'https://mareboatshvar.com/tours'
```

### Estructura — app/tours/page.tsx (NUEVA — no confundir con app/tours/[slug]/page.tsx)
```
H1: "CHOOSE YOUR ADVENTURE"
Subtítulo: "Private tours from Hvar Harbour. You pick the stops — we know every corner of the coast."

Grid tours (1 col → 2 col → 3 col, cards simétricas):
  Cada card:
  - Foto del tour (next/image)
  - Badge duración (ej: "7 hours")
  - H3: nombre del tour (Syne)
  - 2 líneas de descripción (Space Grotesk)
  - Precio "From €130/person" o "€400 private"
  - 2 CTAs:
    - "See Details" → /tours/[slug]  (btn-secondary)
    - "Book on WhatsApp" → WA con mensaje pre-cargado por tour (btn-primary)

Tours en el grid (orden recomendado):
1. 5 Islands, 4 Beaches, 3 Caves — €130/persona · €700 privado · 7h
2. Red Rocks & Pakleni Islands — €400 · 4h
3. Sunset Cruise — €250 · ~2h
4. Private Charter — €500 · custom
5. Pakleni Islands — consultar · 4h
6. Yacht & Sailboat Taxi — on request

Sección "HOW IT WORKS" (3 pasos):
1. Choose your tour or tell us what you want
2. Message us on WhatsApp — we reply within 1 hour
3. Meet at Hvar Harbour barrel at your time

CTA banner final:
"Not sure which tour? Tell us your date and group size — we'll help you choose."
→ WhatsApp link
```

**WA messages pre-cargados por tour (usar en cada card):**
```
5 Islands: ?text=Hi!%20I%27d%20like%20to%20book%20the%205%20Islands%20tour
Red Rocks: ?text=Hi!%20I%27d%20like%20to%20book%20the%20Red%20Rocks%20%26%20Pakleni%20tour
Sunset: ?text=Hi!%20I%27d%20like%20to%20book%20the%20Sunset%20Cruise
Charter: ?text=Hi!%20I%27d%20like%20to%20book%20a%20Private%20Charter
Pakleni: ?text=Hi!%20I%27d%20like%20to%20book%20the%20Pakleni%20Islands%20tour
Yacht Taxi: ?text=Hi!%20I%27d%20like%20info%20about%20the%20Yacht%20Taxi
```

**Schema:** `ItemList` con todos los tours como `ListItem` → rich results en Google

### Archivos a crear/tocar
- `app/tours/page.tsx` — CREAR
- `app/sitemap.ts` — agregar /tours priority 0.9

### Commit
```bash
git commit -m "feat: fase 25 — /tours index page con todos los tours y schema ItemList"
```

---

## FASE 26 — /rentals Index Page

### Objetivo
Lista todos los rentals. Captura SEO para "boat rental hvar", "scooter rental hvar", "water scooter hvar".

### Metadata
```tsx
title: 'Rentals Hvar | Scooter, Water Scooter & Boat Rental — MareBoats'
description: 'Rent a scooter, water scooter or boat in Hvar. Pick up at Hvar Harbour. MareBoats rentals — May to September.'
keywords: ['boat rental hvar', 'scooter rental hvar', 'water scooter hvar', 'hvar scooter hire', 'rent boat hvar croatia']
canonical: 'https://mareboatshvar.com/rentals'
```

### Estructura — app/rentals/page.tsx (NUEVA)
```
H1: "EXPLORE HVAR YOUR WAY"
Subtítulo: "Pick up at Hvar Harbour. Same spot as the boat tours."

Grid de rentals (1 col → 3 col):

Card 1 — Scooter
  Precio: €50/day · €40/half day (PM) · €30/half day (AM)
  6 scooters available
  "Explore Hvar Town, Stari Grad, Jelsa and the lavender fields."
  Reglas clave: valid license · return full tank
  CTA: "Book on WhatsApp" → ?text=Hi!%20I%27d%20like%20to%20rent%20a%20scooter

Card 2 — Water Scooter
  Precio: on request
  "Ride the waves. Instructor briefing included."
  CTA: "Ask on WhatsApp" → ?text=Hi!%20I%27d%20like%20info%20about%20the%20water%20scooter

Card 3 — Boat Rental (without skipper)
  Precio: on request
  "For licensed skippers only. Fuel full-in, full-out."
  Reglas clave: valid boat license required
  CTA: "Ask on WhatsApp" → ?text=Hi!%20I%27d%20like%20info%20about%20boat%20rental

Sección "RENTAL RULES" (accordion, <details> nativo):
- Fuel policy: full tank in / full tank out · refuel at Hvar marina
- Speed zones: Maritime police actively enforce limits · real fines apply
- Alcohol & smoking: moderate alcohol OK · no smoking inside / cabin
- Glass bottles: permitted on deck
- Damage policy: report immediately · deposit may apply
- Return: check-in at harbour · photos taken pre/post rental

CTA final:
"Questions about a rental? Message us — we'll sort it out."
```

**Schema:** `ItemList` con los 3 rentals

### Archivos a crear
- `app/rentals/page.tsx` — CREAR
- `app/sitemap.ts` — agregar /rentals priority 0.8

### Commit
```bash
git commit -m "feat: fase 26 — /rentals index page scooter, water scooter, boat rental"
```

---

## FASE 27 — /transfers Index Page

### Objetivo
Lista todos los transfers. Captura SEO para "hvar split transfer", "speedboat brac hvar", etc.
Keywords con alta intención de compra y poca competencia.

### Metadata
```tsx
title: 'Speedboat Transfers from Hvar | Split, Airport, Brač, Korčula — MareBoats'
description: 'Private speedboat transfers from Hvar to Split, Split Airport, Brač, Korčula and Biševo. Fast, private, door-to-dock. Book via WhatsApp.'
keywords: ['hvar split transfer', 'speedboat transfer hvar', 'hvar airport transfer boat', 'hvar to brac speedboat', 'hvar korcula transfer', 'hvar bisevo transfer']
canonical: 'https://mareboatshvar.com/transfers'
```

### Estructura — app/transfers/page.tsx (NUEVA)
```
H1: "PRIVATE SPEEDBOAT TRANSFERS"
Subtítulo: "From Hvar Harbour to wherever you need to be. Private — no shared boats, no waiting."

Grid transfers (1 col → 2 col → 3 col):

Card 1 — Split – Hvar
  €500 · ~1 hour · Any time
  "Hvar Harbour → Split waterfront. Private boat, direct route."
  CTA: "Book on WhatsApp" → ?text=Hi!%20I%27d%20like%20to%20book%20the%20Split%20transfer

Card 2 — Airport – Hvar
  €600 · ~1.5 hours
  "Split Airport → Hvar Harbour. We track your flight."
  CTA: "Book on WhatsApp" → ?text=Hi!%20I%27d%20like%20to%20book%20the%20Airport%20transfer

Card 3 — Brač
  On request · private
  "Bol, Supetar, Milna — tell us where."
  CTA: "Ask on WhatsApp" → ?text=Hi!%20I%27d%20like%20a%20transfer%20to%20Bra%C4%8D

Card 4 — Korčula
  On request · private
  "Historic walled city. 2 hours from Hvar by speedboat."
  CTA: "Ask on WhatsApp" → ?text=Hi!%20I%27d%20like%20a%20transfer%20to%20Kor%C4%8Dula

Card 5 — Biševo
  On request · private
  "Gateway to the Blue Cave. No ferry, no crowds."
  CTA: "Ask on WhatsApp" → ?text=Hi!%20I%27d%20like%20a%20transfer%20to%20Bi%C5%A1evo

Sección "HOW IT WORKS":
1. Tell us your route, date and arrival time
2. We confirm the price on WhatsApp
3. Meet at Hvar Harbour barrel (or we pick you up at your hotel dock)
4. Private speedboat — your group only

Nota copy:
"All transfers are private. Your group, your boat, your schedule.
Hotels with docks: Podstine, Amfora, Riva, Adriana — we can pick you up directly."
```

**Schema:** `ItemList` con los transfers

**Nota técnica:** el slug `/tours/split-airport-transfer` ya existe y tiene SEO propio — NO eliminarlo.
La card de Split en /transfers tiene un link "See full details" → /tours/split-airport-transfer.

### Archivos a crear
- `app/transfers/page.tsx` — CREAR
- `app/sitemap.ts` — agregar /transfers priority 0.8

### Commit
```bash
git commit -m "feat: fase 27 — /transfers index page todos los transfers"
```

---

## FASE 28 — /about Page

### Objetivo
Dar cara humana al negocio. Construye E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) —
factor de ranking de Google. Un negocio con cara real rankea mejor que uno anónimo.

### Metadata
```tsx
title: 'About MareBoats Hvar | Meet the Team'
description: 'MareBoats is a family-run boat tour operation in Hvar, Croatia. Meet Nikola and the crew, learn about our boats, licenses, and what makes our tours different.'
keywords: ['mareboats hvar', 'hvar boat captain', 'licensed boat tour hvar', 'about mareboats']
canonical: 'https://mareboatshvar.com/about'
```

### Estructura — app/about/page.tsx (NUEVA)
```
H1: "BEHIND THE WHEEL"
Subtítulo: "The people, the boats, and the reason we do this."

Sección 1 — THE STORY
Placeholder para completar con Nikola:
"MareBoats started with one boat and one idea: that every group deserves their own
experience on the water, not a seat on a crowded tour. Today we run [X] boats from
Hvar Harbour, May through September, and every trip is still private."
(Fede llena con la historia real de Nikola — año de inicio, cómo empezó)

Sección 2 — THE TEAM (cards)
Card Nikola:
  Foto (placeholder — JPG pendiente de Nikola)
  Nombre: Nikola
  Rol: Owner & Captain
  Idiomas: Croatian, English
  1 línea: "Born in Hvar. Knows every bay, cave and hidden beach on this coast."

Card Fede:
  Foto (placeholder — JPG pendiente de Fede)
  Nombre: Federico
  Rol: Skipper & Marketing
  Idiomas: English, Croatian, Italian, Spanish
  1 línea: "Skipper and the guy who built this website."

Nota bajo las cards:
"During peak season (July–August) we operate with additional skippers.
Language availability varies — ask when booking."

Sección 3 — THE BOAT
Placeholder para datos técnicos que Nikola debe pasar:
"Our speedboat fits up to 10 people. Equipped with icebox, safety gear,
snorkeling equipment, and a full first aid kit."
(Nikola: modelo del barco, año, capacidad exacta)

Sección 4 — LICENSED & INSURED
"Every trip runs under a valid Croatian maritime licence.
Boat and passenger insurance included on all tours and transfers."
Badge visual: ✅ Licensed · ✅ Insured · ✅ Safety equipment on board

Sección 5 — TRUST SIGNALS
- Google ⭐⭐⭐⭐⭐ (número de reviews cuando estén disponibles — placeholder "5★ on Google")
- "Operating since [año]" (pendiente Nikola)
- "100+ happy guests"

CTA final:
"Want to meet us on the water?"
→ "Book on WhatsApp" (btn-primary)
```

**Schema:** `Person` para Nikola + Fede, anclados al `LocalBusiness` ya existente en JsonLd.tsx

### Placeholders a completar con Nikola
- Historia del negocio (año de inicio, número de barcos actual)
- Foto de Nikola (JPG, retrato, luz natural, <500KB)
- Datos técnicos del barco (modelo, año, capacidad exacta)

### Archivos a crear
- `app/about/page.tsx` — CREAR
- `components/ui/JsonLd.tsx` — agregar schema Person para Nikola + Fede
- `app/sitemap.ts` — agregar /about priority 0.6

### Commit
```bash
git commit -m "feat: fase 28 — /about page con team, historia, licencias y schema Person"
```

---

## FASE 29 — /qr Hub Animado

### Objetivo
Una sola URL para el único QR físico de MareBoats.
Pantalla cinematográfica animada con 6 botones contextuales, cada uno con explicación.
El usuario escanea → ve la intro → elige su contexto → va a la página correcta.

### URL: /qr — noindex: true · NO en sitemap · NO en navbar

### Animación Framer Motion (secuencia)
```
Timing total: ~3.5 segundos hasta que todos los botones están visibles

0.0s — Fondo oscuro var(--bg), pantalla vacía
0.3s — Logo MareBoats SVG: fadeIn + scale(0.9→1), duration 0.8s
1.1s — "Thanks for choosing us": fadeIn + translateY(10px→0), duration 0.6s
        Syne ExtraBold, var(--white), tamaño grande
1.7s — "What do you need?": fadeIn, duration 0.4s
        Space Grotesk, var(--gray), tamaño pequeño
2.1s — Botones: stagger 0.12s entre cada uno
        Cada botón: fadeIn + translateY(20px→0), duration 0.5s
        Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
```

### Los 6 botones (en orden, con explicación visible)
```tsx
const QR_BUTTONS = [
  {
    icon: '🔍',
    label: 'Explore Tours',
    description: 'Browse our tours and book your day on the water',
    href: '/landing/explore',
    variant: 'primary', // fondo var(--accent), texto negro — el único destacado
  },
  {
    icon: '📋',
    label: 'Pre-Tour Info',
    description: "Your tour is coming up. Here's everything you need.",
    href: '/landing/pre-tour',
    variant: 'secondary',
  },
  {
    icon: '🌊',
    label: 'On Tour',
    description: 'Info about every stop — download for offline use',
    href: '/on-tour',
    variant: 'secondary',
    badge: '⬇ Save offline', // badge pequeño en la esquina derecha del botón
  },
  {
    icon: '⭐',
    label: 'Leave a Review',
    description: 'Just finished? 30 seconds. Means the world.',
    href: '/landing/review',
    variant: 'secondary',
  },
  {
    icon: '🗺️',
    label: 'Hvar Guide',
    description: 'Restaurants, beaches and hidden spots on the island',
    href: '/landing/guide-hvar',
    variant: 'secondary',
  },
  {
    icon: '🛵',
    label: 'Rental Rules',
    description: 'What to know before your boat or scooter rental',
    href: '/landing/rental',
    variant: 'secondary',
  },
]
```

### Layout
- Mobile-first — 100% uso en teléfono, max-width 480px centrado
- Sin navbar, sin footer — solo logo pequeño top-left como link a /
- Cada botón: fondo var(--surface), border var(--border), padding generoso (py-4 px-5)
- Hover: border-color var(--accent), translateY(-2px), sombra tinted turquesa
- Ícono: 2rem, alineado izquierda
- Label: Syne Medium, var(--white), 1rem
- Description: Space Grotesk, var(--gray), 0.85rem
- Badge "⬇ Save offline": pill pequeño var(--accent)/20, texto acento, top-right del botón On Tour
- "Explore Tours" (primary): fondo var(--accent), texto var(--bg), sin border
- Espaciado entre botones: gap-3

### Offline para /on-tour — solución simple
En el botón "On Tour" dentro de /qr, agregar bajo la description:
```tsx
<button
  onClick={() => window.print()}
  className="text-xs text-[var(--accent)] underline mt-1"
>
  Save as PDF for offline use
</button>
```
`window.print()` abre el diálogo de impresión del browser → el usuario elige "Save as PDF".
No requiere service worker, no requiere backend. Simple y funciona en todos los dispositivos.

En `app/on-tour/page.tsx` agregar `@media print` CSS para que la versión impresa/PDF se vea bien:
```css
@media print {
  nav, footer, .no-print { display: none; }
  body { background: white; color: black; }
}
```

### Archivos a crear
- `app/qr/page.tsx` — CREAR (noindex: true)

### Commit
```bash
git commit -m "feat: fase 29 — /qr hub animado cinematográfico con 6 botones y save offline"
```

---

## FASE 30 — Sitemap, Links Internos, Breadcrumbs, Footer

### Objetivo
Conectar toda la arquitectura. Google distribuye autoridad a través de links internos.
Sin links internos, las páginas nuevas son huérfanas y rankean menos.

### 1. Actualizar app/sitemap.ts
```ts
// Páginas nuevas a agregar:
{ url: '/tours',     priority: 0.9, changeFrequency: 'weekly' },
{ url: '/rentals',   priority: 0.8, changeFrequency: 'monthly' },
{ url: '/transfers', priority: 0.8, changeFrequency: 'monthly' },
{ url: '/about',     priority: 0.6, changeFrequency: 'monthly' },
// /qr → noindex → NO en sitemap
// /on-tour → noindex → NO en sitemap
```

### 2. Actualizar /tours/[slug] — breadcrumb + back link + related tours
Agregar en CADA página individual de tour:
```tsx
// Debajo del hero, antes del contenido:
<Breadcrumb items={['Home', 'Tours', tour.name]} />
// Links: Home → / · Tours → /tours · [nombre] → actual

// Al inicio del contenido:
<a href="/tours">← All Tours</a>

// Al fondo, antes del CTA banner:
<RelatedTours currentSlug={slug} count={2} />
// Muestra 2 tours aleatorios (o los más relacionados) con link a /tours/[slug]
```

**Schema BreadcrumbList** en cada /tours/[slug] — ya mejora CTR en Google.

### 3. Actualizar Home — app/page.tsx
- Sección "Tours" en home: agregar "See all tours →" → /tours al fondo de la sección
- Sección "Transfers" si existe: agregar "All transfers →" → /transfers
- Verificar que los botones de las tour cards linkeen a /tours/[slug]

### 4. Actualizar /landing/explore
- Agregar link "See All Tours →" → /tours como CTA secundario en la parte de tours

### 5. Footer — components/sections/Footer.tsx
```
Columna 1: Logo · tagline · Instagram · WhatsApp
Columna 2: Explore
  Tours → /tours
  Rentals → /rentals
  Transfers → /transfers
  Guide → /guide
Columna 3: Info
  About → /about
  On Tour → /on-tour
  Weather Policy → /guide (anchor #weather)
  Book on WhatsApp → WA link
Columna 4: Find us
  "MareBoats barrel, Hvar Harbour"
  Google Maps link → https://maps.app.goo.gl/3UamDy3Mh9dt4UpM7
  Instagram → @mareboats.hvar
  © 2026 MareBoats Hvar
```

### Archivos a tocar
- `app/sitemap.ts`
- `app/tours/[slug]/page.tsx`
- `app/page.tsx` (home)
- `app/landing/explore/page.tsx`
- `components/sections/Footer.tsx`

### Commit
```bash
git commit -m "feat: fase 30 — sitemap, breadcrumbs /tours/[slug], links internos, footer actualizado"
git commit -m "docs: CLAUDE.md actualizado fases 24-30 completadas"
```

---

## PENDIENTE DE TERCEROS — actualizado 21/04/2026

| Item | Responsable | Urgencia | Bloquea |
|------|-------------|----------|---------|
| URL directa Google Business review | Nikola | 🔴 Alta | /review redirect |
| Reviews reales de clientes | Nikola | 🔴 Alta | Testimonials.tsx |
| Fotos profesionales bote + destinos (<500KB) | Fede | 🔴 Alta | LCP mobile + todo el sitio |
| Historia del negocio (año inicio, nº barcos) | Nikola | 🟡 Media | /about |
| Foto Nikola (skipper, luz natural, JPG <500KB) | Nikola | 🟡 Media | /about |
| Foto Fede (skipper, luz natural, JPG <500KB) | Fede | 🟡 Media | /about + /landing/pre-tour |
| Precio Water Scooter + unidades | Nikola | 🟡 Media | /rentals |
| Precio Boat Rental sin skipper | Nikola | 🟡 Media | /rentals |
| Datos técnicos barco (modelo, año, capacidad) | Nikola | 🟡 Media | /about |
| 3 mapas Google My Maps embed URLs | Nikola/Fede | 🟡 Media | /guide + /landing/guide-hvar |
| Spotify playlist "Hvar vibes" | Fede | 🟢 Baja | /landing/pre-tour, /landing/review |
| Cambios estéticos | Coti | — | — |

---

## Reglas siempre activas

- NO hay splash screen de carga — daña LCP (actualmente 0.8s desktop) y aumenta rebote
- NO hay megamenú ni dropdowns en el navbar — 6 ítems planos únicamente
- Navbar: Tours · Rentals · Transfers · Guide · About · [Book Now]
- Las páginas /tours/[slug] NO aparecen en el navbar — acceso desde /tours o Google
- Mobile-first siempre: grid-cols-1 primero, luego md: lg:
- overflow-x: hidden en html y body — verificar 375px antes de cada commit
- Solo next/image — cero `<img>` tags
- Solo animar transform y opacity — nunca transition-all
- Todo clickeable: hover + focus-visible + active
- npm run build sin errores antes de cada commit
- Commit al terminar cada fase con el mensaje indicado
- NUNCA tocar /src/components/ — legacy
- NUNCA cambiar copy ni imágenes existentes sin instrucción explícita
- Fotos drone + underwater: aparte, a pedido, solo con Fede — NO mencionar como incluidas
- Idiomas EN/HR/IT/ES: solo cuando Fede es el skipper — no prometer en copy genérico
- /qr · /on-tour · /landing/pre-tour · /landing/review → noindex: true
- /review → redirect 301 a Google Business Profile
- Restaurantes: sin acuerdo formal — "places we often stop at, not official partners"
- WhatsApp pre-cargado en todos los CTAs: https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20book%20a%20tour
- Cada /tours/[slug] tiene: breadcrumb + "← All Tours" link + related tours al fondo
- /transfers menciona que /tours/split-airport-transfer tiene página propia con detalles completos
