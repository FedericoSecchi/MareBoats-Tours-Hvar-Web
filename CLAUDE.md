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

## Estado actual (20 abril 2026)

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
- Fase 12 ✅ commit 7865a48 — Fix colores/tokens en todas las páginas internas + refactor btn-primary/btn-secondary/section-heading en globals.css
- Fase 13 ✅ commit eeeadf1 — /guide expandida: 10 secciones, 8 FAQs JSON-LD, mapas embed, alianzas, rental rules, yacht taxi
- Fase 14 ✅ commit 950dde6 — Nuevo servicio: /tours/yacht-sailboat-taxi con SEO long-tail + WhatsApp pre-cargado
- Fase 15 ✅ commit dc334dc — /guide reorganizada: 5 secciones claras + lib/maps-data.ts creado
- Fase 15.1 ✅ commit cae1265 — Fix overflow-x en todas las páginas (globals.css + word-break en h1-h4)
- Fase 16 ✅ commit 5ea136d — 5 landing pages con smart routing (/explore, /pre-tour, /review, /guide-hvar, /rental)
- Fase 17 ✅ — precios reales de Nikola + drone/underwater movido a add-ons on request en todos los tours
- Fase 18 ✅ — nuevo tour /tours/red-rocks-pakleni-islands + featured en home + sitemap + Footer
- Fase 19 ✅ — scooter rental: sección en /landing/rental + página indexable /services/scooter-rental + sitemap
- Fase 20 ✅ — WhatsApp templates para Nikola en /public/docs/NIKOLA_WHATSAPP_TEMPLATES.md
- Fase 21 ✅ — QR code guide en /public/docs/QR_CODES_GUIDE.md
- Fase 22 ✅ — MAPS.partnerRestaurants → recommendedRestaurants + /public/docs/GOOGLE_MAPS_SETUP.md
- Fase 23 ✅ — /on-tour info page (noindex) con 9 destinos y fun facts, pensada para usar a bordo

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
/services/scooter-rental
/guide
/on-tour  (noindex, onboard reference)
/landing/explore
/landing/pre-tour
/landing/review
/landing/guide-hvar
/landing/rental
/review  (redirect → Google Business)
```

## Datos reales de performance (Lighthouse 18/04/2026 — post Fase 7)
- Desktop: Performance 98 ✅ — LCP 0.8s ✅ — CLS 0.072 — TBT 40ms
- Mobile: Performance 83 🟡 — LCP 4.5s ⚠️ — CLS 0 ✅ — TBT 0ms
- LCP mobile bajará con fotos profesionales reales

---

## Datos confirmados del negocio

### Contacto
- WhatsApp: +385 95 196 6734 (único canal de conversión — SIN formulario ni email)
- Instagram: https://www.instagram.com/mareboats.hvar/
- Google Maps business: https://maps.app.goo.gl/U6kgAaRG81KZmqUEA
- Punto de encuentro exacto: "barrel" / booking spot en muelle → https://maps.app.goo.gl/3UamDy3Mh9dt4UpM7

### Operación
- Primer tour: 9:00 AM
- Disponibilidad Nikola por WhatsApp: 07:00 – 00:00 (no responde 00:00–07:00)
- Grupo máximo: 8–10 personas por lancha (según el tour)
- Seguro: sí — boat + passenger insurance confirmado
- Licencia de barco: confirmada
- Idiomas del skipper (Fede): inglés, croata, italiano, español — otros skippers solo croata/inglés

### Servicios activos (confirmados por Nikola)
- Tours privados en lancha
- Blue Cave & 5 Islands (shared + private)
- Red Rocks & Pakleni Islands (NUEVO — private only)
- Sunset Cruise
- Snorkeling
- Transfer Split Airport ↔ Hvar
- Yacht & Sailboat Taxi
- Scooter Rental (NUEVO — 6 scooters disponibles)

### Precios confirmados por Nikola
- Sunset Cruise: €250
- Private Charter (barco + skipper, sin fuel): €500 (fuel excluded)
- Split–Hvar transfer (barco): €500
- Airport–Hvar transfer: €600
- Yacht/Sailboat Taxi: a pedido (on request)
- Scooter Rental: €50/día, €30–40/medio día
- **Opción 1 — 5 Islands, 4 Beaches, 3 Caves:**
  - Group tour: €130/persona
  - Private tour: €700 (hasta 10 personas)
  - Duración: 7 horas (10:00–17:00)
  - Incluye: speedboat, skipper, fuel, icebox, agua, máscaras de snorkel
  - Extra: Green Cave €12/persona, Blue Cave €24/persona, almuerzo aparte
- **Opción 2 — Red Rocks & Pakleni Islands (NUEVO):**
  - Private only: €400
  - Duración: 4 horas (9:00–13:00 o 14:00–18:00)
  - Hasta 8 personas
  - Incluye: speedboat, skipper, fuel, icebox, agua, máscaras de snorkel
  - Sin costos extra de entrada

### Reglas a bordo (confirmadas)
- ✅ Botellas de vidrio: permitidas en cubierta
- ✅ Heladera/conservadora a bordo incluida — guests pueden traer la suya también
- ✅ Alcohol: permitido con moderación
- ❌ Fumar: NO permitido a bordo (solo en proa, si aplica)
- ⚠️ Baño: no hay a bordo — guests usan los de los restaurantes en paradas
- ⚠️ Zonas de baja velocidad: multas reales de policía marítima — obligatorio respetar
- ℹ️ Fotos drone + underwater: NO incluidas en todos los tours — se venden aparte, a pedido, solo cuando Fede es el skipper

### Restaurantes reales (Nikola confirma — sin acuerdo formal)
Mayormente frecuentados, no socios oficiales:
- Moli Onte (Milna)
- Gego Restaurant (Zarace)
- Zdrilca (Tri Grede)
- Palmizana (Bacchus)

### Hoteles con muelle (útil para Yacht Taxi)
- Hotel Podstine (único con muelle propio)
- Amfora Hotel (muelle frente al hotel)
- Riva Hotel (centro, city center)
- Adriana Hotel Spa (centro, city center)

### Destinos del tour "5 Islands, 4 Beaches, 3 Caves"
- Green Cave (Biševo) — entrada €12/persona
- Stiniva Bay — cala oculta, una de las mejores de Europa
- Blue Cave (Biševo) — entrada €24/persona
- Medvidina Cave — cueva más larga de Biševo, antigua guarida del monje mediterráneo
- Budikovac (Blue Lagoon) — aguas cristalinas para nadar
- Pakleni Islands (Palmižana o Ždrilca) — almuerzo y playa

### Destinos del tour "Red Rocks & Pakleni Islands" (NUEVO)
- Borče Bay — cala tranquila en la costa sur de Hvar
- Red Rocks — acantilados rojos verticales, cliff jumping, fotos
- Dubovica Beach — playa icónica de Hvar
- Secret Cave near Dubovica — accesible solo en bote o nadando
- Pakleni Islands: Ždrilca + Taršće — barras de playa y calas tranquilas

---

## Decisiones de negocio confirmadas

- ✅ Sin formulario de contacto ni email — conversión 100% por WhatsApp
- ✅ OTAs: listings independientes, no linkeados desde el sitio por ahora
- ✅ Reviews de OTAs → reemplazar placeholders en Testimonials.tsx cuando Nikola confirme
- ✅ Google Maps + website trabajan en red para SEO local
- ✅ TikTok: no existe todavía — NO linkear
- ✅ /guide es página pública indexable — captura SEO long-tail pre-booking + se envía a guests por WhatsApp
- ✅ Idiomas a bordo (EN/HR/IT/ES) solo aplican cuando Fede es el skipper — no prometer en copy genérico
- ✅ Fotos drone y underwater: se venden APARTE, a pedido, NO incluidas por default — no mencionar como incluidas en ningún tour
- ✅ Blue Cave y Green Cave: disponibles como shared (grupo) o private — aclarar en la página del tour
- ✅ Grupos grandes: pueden usar múltiples speedboats — mencionarlo como opción en /tours/blue-cave-pakleni-islands
- ✅ No hay restaurantes socios oficiales — mencionar los recomendados sin prometer descuentos o beneficios

---

## FASE 17 — Actualizar Precios y Tours en lib/tours-data.ts

### Objetivo
Reemplazar todos los precios placeholder (€XX) con los precios reales confirmados por Nikola. Actualizar descripciones donde corresponda.

### Cambios en lib/tours-data.ts

**blue-cave-pakleni-islands** (ahora "5 Islands, 4 Beaches, 3 Caves"):
```ts
price: 'From €130/person (group) · €700 private (up to 10)',
duration: '7 hours · 10:00 AM – 5:00 PM',
includes: ['Speedboat & Skipper', 'Fuel', 'Icebox', 'Bottled Water', 'Snorkeling Masks'],
notIncludes: ['Green Cave entrance €12/person', 'Blue Cave entrance €24/person', 'Lunch (optional)'],
groupSizes: 'Shared or private — up to 10 people',
destinations: ['Green Cave', 'Stiniva Bay', 'Blue Cave', 'Medvidina Cave', 'Budikovac Blue Lagoon', 'Pakleni Islands'],
note: 'Available as shared group tour or fully private. Large groups can book multiple speedboats.',
```

**pakleni-islands** (Red Rocks & Pakleni — NUEVO slug o actualización):
```ts
price: '€400 private (up to 8 people)',
duration: '4 hours · 9:00–13:00 or 14:00–18:00',
includes: ['Speedboat & Skipper', 'Fuel', 'Icebox', 'Bottled Water', 'Snorkeling Masks'],
notIncludes: ['Lunch (you choose the restaurant)'],
groupSizes: 'Private only — up to 8 people',
destinations: ['Borče Bay', 'Red Rocks', 'Dubovica Beach', 'Secret Cave near Dubovica', 'Pakleni Islands (Ždrilca & Taršće)'],
```

**sunset-cruise**:
```ts
price: '€250',
```

**private-boat-charter**:
```ts
price: '€500 (boat + skipper · fuel not included)',
note: 'Price covers the boat and skipper only. Fuel is paid separately at the marina.',
```

**split-airport-transfer**:
```ts
price: 'Split–Hvar €500 · Airport–Hvar €600',
```

**yacht-sailboat-taxi**:
```ts
price: 'On request — message us on WhatsApp',
```

### Archivos a tocar
- lib/tours-data.ts — actualizar price, duration, includes, notIncludes, destinations
- app/tours/[slug]/page.tsx — verificar que los campos nuevos se rendericen correctamente
- components/sections/Tours.tsx — verificar que los precios se muestren en las cards del home

### Commit
```bash
git commit -m "feat: fase 17 — precios reales + info tours actualizada (Nikola confirmed)"
```

---

## FASE 18 — Nuevo Tour: /tours/red-rocks-pakleni-islands

### Objetivo
Crear la página individual del nuevo tour "Red Rocks & Pakleni Islands" con SEO long-tail propio.
Este tour captura keywords como "pakleni islands half day", "red rocks hvar boat", "afternoon boat tour hvar".

### Agregar a lib/tours-data.ts
```ts
{
  slug: 'red-rocks-pakleni-islands',
  name: 'Red Rocks & Pakleni Islands Tour',
  tagline: 'Cliffs, caves, and crystal water — 4 hours, private.',
  duration: '4 hours · 9:00–13:00 or 14:00–18:00',
  price: '€400 private (up to 8 people)',
  includes: ['Speedboat & Skipper', 'Fuel', 'Icebox', 'Bottled Water', 'Snorkeling Masks'],
  notIncludes: ['Lunch (restaurants available at stops)'],
  meetingPoint: 'MareBoats barrel, Hvar Harbour',
  groupSize: 'Private only — up to 8 people',
  destinations: [
    { name: 'Borče Bay', description: 'Quiet cove on the southern coast of Hvar, perfect for swimming and snorkeling.' },
    { name: 'Red Rocks', description: 'Dramatic vertical red cliffs dropping into turquoise water. Great for cliff jumping and photos.' },
    { name: 'Dubovica Beach', description: 'One of the most iconic beaches on Hvar — calm water, great for a swim.' },
    { name: 'Secret Cave near Dubovica', description: 'A hidden sea cave only accessible by boat or a short swim. Worth every second.' },
    { name: 'Pakleni Islands (Ždrilca & Taršće)', description: 'Beach bars at Ždrilca, untouched nature at Taršće.' },
  ],
  keywords: ['red rocks hvar', 'pakleni islands half day tour', 'afternoon boat tour hvar', 'private boat tour hvar 4 hours', 'dubovica beach boat hvar'],
}
```

### Página app/tours/red-rocks-pakleni-islands/page.tsx
- Metadata única con title "Red Rocks & Pakleni Islands Tour | Private Boat from Hvar"
- H1: "RED ROCKS & PAKLENI ISLANDS"
- Descripción larga con keywords naturales (300+ palabras)
- Sección "What you'll visit" con los 5 destinos + descripción de cada uno
- Precio €400, duración 4 horas, hasta 8 personas
- Nota: disponible en franja mañana (9–13) o tarde (14–18)
- CTA: "Book on WhatsApp" → `https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20book%20the%20Red%20Rocks%20%26%20Pakleni%20Islands%20Tour`
- Schema TouristTrip específico
- Breadcrumb: Home → Tours → Red Rocks & Pakleni Islands

### Actualizar components/sections/Tours.tsx (home)
- Agregar card del nuevo tour al grid
- Si hay 5+ tours, evaluar mostrar solo los featured (4 en home, resto en /tours)

### Actualizar sitemap.ts
- Agregar /tours/red-rocks-pakleni-islands con priority 0.8

### Commit
```bash
git commit -m "feat: fase 18 — nuevo tour /tours/red-rocks-pakleni-islands con SEO long-tail"
```

---

## FASE 19 — Scooter Rental

### Contexto (Nikola confirma)
- 6 scooters disponibles para temporada 2026
- Precio: €50/día · €30–40/medio día
- Servicio real, ya en operación

### Decisión de implementación
Agregar como servicio en la home y crear una sección o página dedicada.
No crear una página de tour individual `/tours/scooter-rental` — es un producto diferente.
Crear en cambio `/services/scooter-rental` o agregar a `/landing/rental` (ya existente).

**Opción recomendada:** Agregar sección "EXPLORE HVAR YOUR WAY" en `/landing/rental` (ya existe y trata el tema de alquileres). Si el cliente quiere más visibilidad SEO, crear `/services/scooter-rental` como página independiente.

### Contenido confirmado
```
Scooter Rental Hvar
€50 / full day · €30–40 / half day
6 scooters available
Perfect for exploring Hvar Town, Stari Grad, Jelsa, and the lavender fields.
Pick up at Hvar Harbour — same spot as your boat tour.
Valid driver's license required.
```

### Copy humano (sin adjetivos vacíos)
```
You've seen the coast from the water. Now explore the island.
6 scooters available — pick up at the harbour, same spot as your boat.
Half day €30–40. Full day €50. License required.
```

### Archivos a tocar
- /landing/rental/page.tsx — agregar sección de scooter rental con precio y CTA WhatsApp
- O crear app/services/scooter-rental/page.tsx si se quiere página SEO independiente
- components/sections/Tours.tsx (home) — considerar agregar card de scooter rental o no (decisión estética)

### SEO (si se crea página propia)
```ts
title: 'Scooter Rental Hvar | €50/day from Hvar Harbour'
description: 'Rent a scooter in Hvar from €30. Pick up at Hvar Harbour. Explore the island at your own pace. 6 scooters available.'
keywords: ['scooter rental hvar', 'hvar scooter hire', 'rent scooter hvar croatia', 'hvar moped rental']
```

### Commit
```bash
git commit -m "feat: fase 19 — scooter rental service (precios reales, CTA WhatsApp, integrado en /landing/rental)"
```

---

## FASE 20 — WhatsApp Templates para Nikola

### Objetivo
Crear archivo de referencia `/public/docs/NIKOLA_WHATSAPP_TEMPLATES.md` con todos los templates listos para copiar y pegar.

### Templates confirmados

**Post-booking (inmediato):**
```
Your tour is confirmed ✅
Everything you need to know: mareboatshvar.com/landing/pre-tour
See you soon! 🌊
```

**Recordatorio (día anterior o 2 horas antes):**
```
Good morning! Your tour is today at 09:00 AM.
Meeting point: MareBoats barrel, Hvar Harbour main dock.
Last check: mareboatshvar.com/landing/pre-tour
See you there! ⛵
```

**Post-tour (review request):**
```
Thanks for sailing with us! 🎉
If you enjoyed the tour, a quick review means the world:
mareboatshvar.com/review
Tag us in your photos: @mareboats.hvar 📸
```

**Respuesta inicial (nuevo lead):**
```
Hi! Thanks for reaching out 🌊
Which tour are you interested in, and what date are you thinking?
We're available May–September, first tour at 9:00 AM.
```

**Info scooter rental:**
```
Scooter rental: €50/day · €40/half day (PM) · €30/half day (AM)
Pick up: same spot as the boat tours, Hvar Harbour.
Valid license required. 6 scooters available.
```

### Archivos a crear
- `/public/docs/NIKOLA_WHATSAPP_TEMPLATES.md`

### Commit
```bash
git commit -m "docs: fase 20 — WhatsApp templates para Nikola en /public/docs/"
```

---

## FASE 21 — QR Code Strategy (archivos para Nikola)

### 3 QR Codes físicos

| QR | Ubicación | URL | Objetivo |
|----|-----------|-----|----------|
| #1 Muelle (cartel) | Hvar Harbour, booking barrel | /landing/explore | Turistas indecisos → booking |
| #2 Barco (sticker) | Popa o cabina | /landing/review | Reviews post-tour → ranking Google |
| #3 Guide impreso | Folleto o tarjeta | /landing/guide-hvar | Engagement + SEO long-tail |

### Archivo a crear: /public/docs/QR_CODES_GUIDE.md
```markdown
# QR Codes — MareBoats Hvar

## Herramienta
https://www.qr-code-generator.com (free)
Color: #3BC9DB (turquesa) o blanco/negro para máximo contraste en impresión
Formato: PNG alta resolución (300dpi mínimo para impresión)
Testear en 3 teléfonos antes de imprimir.

## QR #1 — Cartel en el muelle
URL: https://mareboatshvar.com/landing/explore
Texto del cartel:
  BOAT TOURS FROM HVAR HARBOUR
  [QR]
  Scan for tours & prices
  mareboatshvar.com/landing/explore

## QR #2 — Sticker en el barco
URL: https://mareboatshvar.com/landing/review
Texto del sticker:
  ⭐ Enjoyed the tour?
  Leave a review — 30 seconds
  [QR]

## QR #3 — Guide impreso / tarjeta
URL: https://mareboatshvar.com/landing/guide-hvar
Texto: Scan for Hvar tips & hidden spots
```

### Commit
```bash
git commit -m "docs: fase 21 — QR code guide para Nikola en /public/docs/"
```

---

## FASE 22 — Google My Maps Embeds

### 3 Mapas a crear (Nikola o Fede en Google My Maps)

| Mapa | Dónde se usa | Pins sugeridos |
|------|-------------|----------------|
| Tour Destinations | /guide → Where We Go | Blue Cave, Pakleni Islands N/S, Hvar Harbour/barrel, Stiniva, Red Rocks, Dubovica, Borče Bay |
| Recommended Restaurants | /landing/guide-hvar → Where to Eat | Moli Onte (Milna), Gego (Zarace), Tri Grede (Zdrilca), Bacchus (Palmizana) |
| Hvar Local Tips | /landing/guide-hvar → Maps | Old Town, beaches, beach clubs, ATM, hospital, farmacia |

### lib/maps-data.ts (ya creado en Fase 15 — completar con URLs reales)
```ts
export const MAPS = {
  tourDestinations: null,       // TODO: Nikola/Fede — agregar embed URL
  recommendedRestaurants: null, // TODO: Nikola/Fede — Moli Onte, Gego, Tri Grede, Bacchus
  hvarLocalTips: null,          // TODO: Nikola/Fede — spots locales
}
```

### Cómo crear (para Nikola/Fede)
1. Ir a https://www.google.com/mymaps
2. Crear mapa nuevo, agregar pins con nombres y descripciones
3. Publicar → "Anyone with the link can view"
4. Botón "Share" → "Embed on my site" → copiar la URL del atributo `src`
5. Pegar en lib/maps-data.ts reemplazando `null`

### Nota importante: restaurantes
Los restaurantes (Moli Onte, Gego, Tri Grede, Bacchus) NO son socios oficiales.
Copy sugerido para el sitio: "Restaurants we often stop at — no official deal, just places we like."

### Archivo a crear: /public/docs/GOOGLE_MAPS_SETUP.md
Instrucciones paso a paso para que Nikola cree los 3 mapas.

### Commit
```bash
git commit -m "feat: fase 22 — Google My Maps embeds integrados con placeholders + /public/docs/GOOGLE_MAPS_SETUP.md"
```

---

## FASE 23 — On-Tour Info Page (/on-tour)

### Contexto (pedido por Fede)
Una página o landing para usar a bordo durante el viaje. Da información local de cada parada — historia, datos, qué hacer — que enriquece la experiencia y diferencia MareBoats de otros tours.

### Objetivo
- Que Fede (o Nikola) pueda mostrar esta página en el teléfono a bordo mientras navegan hacia cada destino
- Que los turistas puedan abrirla desde su propio teléfono con un QR en el barco
- Simple, rápida de leer, sin distracciones

### URL: /on-tour (noindex — no SEO, es para uso interno)

### Estructura
```
/on-tour
├── Hero: "You're on a MareBoats tour 🌊" + tour name (si se puede pasar por query param)
├── Sección por destino (accordion o tabs):
│   ├── Hvar Town & Harbour — punto de partida, datos históricos
│   ├── Red Rocks — cómo se formaron, cliff jumping tips
│   ├── Dubovica Beach — historia, qué hacer
│   ├── Borče Bay — datos de la cala
│   ├── Green Cave — cómo funciona la luz, historia geológica
│   ├── Blue Cave (Modra Špilja) — por qué el agua es azul, horarios de luz ideal
│   ├── Stiniva Bay — cómo se formó, qué buscar
│   ├── Pakleni Islands (Palmižana / Ždrilca / Taršće) — historia, restaurantes
│   └── Budikovac Lagoon — fauna marina, snorkeling tips
├── Fun Facts section — curiosidades del Adriático, flora, fauna
└── CTA: "Leave a review after the tour" → /landing/review
```

### Notas de implementación
- `noindex: true` — no indexar
- Puede recibir query param `?tour=blue-cave` para preseleccionar secciones relevantes
- Mobile-first — se usa en teléfono, tipografía grande, alto contraste
- Sin Navbar completo — solo logo y "Back to MareBoats" link
- Offline-friendly si es posible (considerar service worker o contenido estático puro)

### Contenido de historia/datos (resumen para Cursor)
Estos son los highlights por destino. Cursor puede expandirlos:
- **Blue Cave (Modra Špilja):** La luz entra desde abajo a través de una abertura submarina. El efecto azul es más intenso entre las 11:00 y las 12:00. Descubierta en el siglo XIX.
- **Green Cave (Špilja Medvidina):** La más larga de Biševo. Antiguamente habitada por el monje mediterráneo (casi extinto). El agua brilla verde por reflexión de la luz solar.
- **Stiniva Bay:** Formada por el colapso de una cueva marina. En 2016 fue votada como la mejor playa de Europa por European Best Destinations.
- **Red Rocks:** El color rojo proviene de óxido de hierro en la roca calcárea. Cliff jumping popular desde 5–10 metros.
- **Pakleni Islands:** El nombre viene de "paklina" — alquitrán — que los pescadores usaban para calafatear los barcos. 21 islas e islotes.
- **Budikovac Lagoon:** Aguas poco profundas (1–3m), visibilidad perfecta. Tortugas marinas avistadas regularmente.
- **Dubovica Beach:** Playa de guijarros protegida por una bahía natural. La casa de piedra en la playa es del siglo XVI.
- **Hvar Town:** Una de las ciudades más soleadas de Europa (2726 horas de sol/año). La fortaleza Španjola data del siglo XVI.

### Commit
```bash
git commit -m "feat: fase 23 — /on-tour info page para usar a bordo durante el viaje"
```

---

## Arquitectura de URLs (completa post Fase 23)

```
mareboatshvar.com/
├── / (HOME)
├── /tours/blue-cave-pakleni-islands    ← 5 Islands, 4 Beaches, 3 Caves
├── /tours/red-rocks-pakleni-islands    ← NUEVO (Fase 18)
├── /tours/pakleni-islands
├── /tours/sunset-cruise
├── /tours/split-airport-transfer
├── /tours/private-boat-charter
├── /tours/yacht-sailboat-taxi
├── /guide                              ← pública, indexable
├── /on-tour                            ← noindex, para usar a bordo (Fase 23)
├── /landing/explore                    ← QR #1 muelle
├── /landing/pre-tour                   ← noindex, Nikola manda por WA
├── /landing/review                     ← noindex, QR #2 barco
├── /landing/guide-hvar                 ← QR #3 guide
├── /landing/rental                     ← incluye scooter rental (Fase 19)
└── /review                             ← redirect 301 → Google Business
```

---

## PENDIENTE DE TERCEROS — actualizado 20/04/2026

| Item | Responsable | Urgencia | Dónde se usa |
|------|-------------|----------|--------------|
| URL directa Google Business review | Nikola | 🔴 Alta | /review redirect |
| Reviews reales de clientes | Nikola | 🔴 Alta | Testimonials.tsx |
| Fotos profesionales bote + destinos (<500KB) | Fede (viaja a Hvar) | 🔴 Alta | Todo el sitio |
| Foto de Fede (skipper) — cara visible, luz natural | Fede | 🟡 Media | Features.tsx, /landing/pre-tour |
| Fotos de otros skippers (si hay en temporada) | Nikola | 🟡 Media | Features.tsx |
| Mapa Google My Maps — Tour Destinations (embed URL) | Nikola/Fede | 🟡 Media | /guide |
| Mapa Google My Maps — Restaurants (embed URL) | Nikola/Fede | 🟡 Media | /landing/guide-hvar |
| Mapa Google My Maps — Hvar Local Tips (embed URL) | Nikola/Fede | 🟡 Media | /landing/guide-hvar |
| Spotify playlist "Hvar vibes" | Fede | 🟢 Baja | /landing/pre-tour, /landing/review |
| Cambios estéticos | Coti | — | — |

---

## Reglas siempre activas

- Mobile-first: grid-cols-1 primero, luego md: lg:
- overflow-x: hidden en html y body (ya aplicado en Fase 15.1) — verificar en 375px antes de cada commit
- Solo next/image — cero `<img>` tags
- Solo animar transform y opacity — nunca transition-all
- Todo clickeable necesita hover + focus-visible + active
- npm run build debe pasar sin errores al terminar cada fase
- Commit al terminar cada fase con el mensaje indicado
- NUNCA tocar /src/components/ — legacy
- NUNCA cambiar copy ni imágenes existentes sin instrucción explícita
- Los idiomas a bordo (EN/HR/IT/ES) solo aplican cuando Fede es el skipper — no prometer en copy genérico
- Fotos drone + underwater: se venden aparte, a pedido — NO mencionar como incluidas en los tours
- /landing/pre-tour y /landing/review son noindex: true
- /on-tour es noindex: true
- /review redirige a Google Business Profile — no es una página indexable
- Restaurantes recomendados: NO son socios oficiales — no prometer beneficios o descuentos
- WhatsApp pre-cargado en todos los CTAs de booking: `https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20book%20a%20tour`
