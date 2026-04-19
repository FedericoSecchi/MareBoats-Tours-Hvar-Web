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

## Estado actual (18 abril 2026)
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
- Fase 12 ⬜ PRÓXIMA — Fix colores páginas internas
- Fase 13 ⬜ PENDIENTE — /guide expandida: contenido SEO + mapas + alianzas
- Fase 14 ⬜ PENDIENTE — Nuevo servicio: Yacht & Sailboat Taxi

## Datos reales de performance (Lighthouse 18/04/2026 — post Fase 7)
- Desktop: Performance 98 ✅ — LCP 0.8s ✅ — CLS 0.072 — TBT 40ms
- Mobile: Performance 83 🟡 — LCP 4.5s ⚠️ — CLS 0 ✅ — TBT 0ms
- LCP mobile bajará con fotos profesionales reales

## Datos confirmados del negocio
- WhatsApp: +385 95 196 6734 (único canal de conversión — SIN formulario ni email)
- Instagram: https://www.instagram.com/mareboats.hvar/
- Google Maps business: https://maps.app.goo.gl/U6kgAaRG81KZmqUEA
- Idiomas del skipper (Fede): inglés, croata, italiano, español — otros skippers solo croata/inglés
- Servicios: tours privados, Blue Cave, Pakleni Islands, Sunset Cruise, Snorkeling, transfer Split Airport ↔ Hvar, Yacht & Sailboat Taxi
- TikTok: no existe todavía — NO linkear

## Decisiones de negocio confirmadas
- ✅ Sin formulario de contacto ni email — conversión 100% por WhatsApp
- ✅ OTAs: listings independientes, no linkeados desde el sitio por ahora
- ✅ Reviews de OTAs → reemplazar placeholders en Testimonials.tsx cuando Nikola confirme
- ✅ Google Maps + website trabajan en red para SEO local
- ✅ TikTok: no existe — no linkear
- ✅ /guide es página pública indexable (no PDF) — captura SEO long-tail pre-booking
- ✅ Idiomas a bordo solo aplican cuando Fede es el skipper — no prometer en copy genérico del sitio
- ✅ No hay baño a bordo — los guests usan los de los restaurantes en las paradas
- ✅ Botellas de vidrio: PERMITIDAS — la gente puede traer sus bebidas
- ✅ Heladera/conservadora a bordo incluida — guests también pueden traer la suya
- ✅ Fumar: NO permitido a bordo
- ✅ Zonas de baja velocidad: multas reales de la policía marítima — hay que respetarlas siempre

## Pendiente de terceros
- Precios reales 4 tours + transfer (Nikola)
- OTAs activos + reviews reales (Nikola)
- Fotos profesionales (Fede viaja a Hvar — comprimir <500KB antes de agregar)
- Cambios estéticos de Coti
- Nombres de restaurantes socios + beneficio para guests ("mention MareBoats for X") (Nikola)
- Nombre del hotel socio con muelle (Nikola)
- URL del mapa de Google Maps personalizado con todos los pins (Nikola o Fede crean en Google My Maps)
- Confirmación con Nikola: barco licensiado y asegurado bajo regulaciones marítimas croatas → verificar antes de publicar

---

## FASE 12 — Fix colores páginas internas

**Objetivo:** Todas las páginas internas deben usar exactamente los mismos tokens CSS que el Home. El Home tiene los colores correctos — replicar a todas las internas.

**Páginas a auditar y corregir:**
- `app/tours/[slug]/page.tsx` y `components/sections/TourHero.tsx`
- `app/guide/page.tsx`
- `app/about/page.tsx` (si existe)
- Cualquier otra ruta bajo `/app/` que no sea `page.tsx` principal

**Qué revisar en cada una:**
- Fondo: debe ser `bg-[var(--bg)]` (#0d1b2a) — no `bg-white`, `bg-gray-900`, ni colores hardcodeados
- Cards/superficies: `bg-[var(--surface)]` (#122236)
- Texto principal: `text-[var(--white)]` (#F5F0E8)
- Texto secundario: `text-[var(--gray)]` (#8a9ab0)
- Bordes: `border-[var(--border)]` (#1e3048)
- Accent: `text-[var(--accent)]` o `bg-[var(--accent)]` (#3BC9DB)
- Headings: Syne (font-heading), uppercase donde corresponda
- Body: Space Grotesk (font-body)

**Verificar en:** 375px, 768px, 1280px para cada página.

**Commit:** `git commit -m 'fix: colores y tokens CSS unificados en todas las páginas internas'`

---

## FASE 13 — /guide expandida: contenido SEO + mapas + alianzas

**Objetivo:** Convertir `/guide` en la guía de Hvar más útil para turistas que vienen en lancha. Tráfico orgánico long-tail + leads directos a WhatsApp. Doble uso: SEO pre-booking + enviar a guests post-booking.

**Archivo principal:** `app/guide/page.tsx`
**Actualizar también:** `components/ui/JsonLd.tsx` (FAQPage schema) y `app/sitemap.ts`

### Secciones a reescribir/expandir (en orden de aparición en la página):

---

#### Sección 1 — Your Day on the Water ← NUEVA (arriba del todo, antes de What to Bring)

Tono: narrativo, como Fede contando el día. Humano, concreto, sin adjetivos vacíos.

Copy base (expandir y adaptar):
> "We leave at 10am from Hvar Harbour. First stop is usually the Blue Cave — we time it to arrive before the big catamarans crowd in. If we have intel that it's already packed, we adjust the route and come back at the quieter window. Same hours on the water, better experience — no queues, no waiting, just the right place at the right moment. By the end of the day you'll have swum in spots most tourists never find."

Agregar debajo como bullets visuales (icon + texto):
- Private group only — no strangers sharing the boat
- Route adjusts in real time — we know when spots are quiet
- Snorkel gear on board (limited quantity — bring your own for all stops except Blue Cave)
- Cooler with ice included — bring your own drinks and food if you want

---

#### Sección 2 — What to Bring (reescribir con datos reales)

Copy corregido y expandido:

**Essentials:**
- Sunscreen (reef-safe preferred — we're in a protected marine area)
- Towel and swimwear
- Hat and sunglasses
- Cash — most restaurants on the islands accept cards, but prefer cash. Bring some.

**Optional but recommended:**
- Your own snorkel mask and fins — we have gear on board but bringing yours means you can swim at every stop, including shallow coves
- Water shoes — not mandatory, but worth it if you're sensitive to rocky beaches
- Your own cooler — we have one on board with ice, but if you're bringing a lot, yours is welcome too

**Drinks and food:**
- All drinks welcome — glass bottles included. Cans, tetra-packs and reusable bottles obviously fine too.
- You can bring your own food — the cooler keeps it cold. That said, stopping to eat at a restaurant on the islands is part of the experience. We recommend it.

---

#### Sección 3 — On Board Rules (reescribir tono — directo pero amable)

Copy:
- No smoking on board at any time
- Don't hang from the bimini (the shade canopy) — it's built for shade, not for body weight
- The skipper's word is final on safety and route decisions. If anyone disrespects the rules or the captain, the tour may be cancelled with no refund.
- No bathroom on board — we plan stops at restaurants where you can use facilities

---

#### Sección 4 — If You're Renting (sin skipper) ← NUEVA

Título sugerido: **"Renting Without a Skipper — What You Need to Know"**

SEO keywords: "rent speedboat Hvar without skipper", "boat rental Hvar rules"

Copy:
> "All our boats come with stereo, anchor, life jackets, and fenders. Here's what to keep in mind before you head out."

Rules list:
- **Return the tank full.** We check fuel at drop-off.
- **The dinghy (gomon) is inspected on return.** Any damage must be covered — check it with us before leaving so there are no surprises.
- **Respect low-speed zones.** Croatian maritime police patrol actively and issue real fines. No exceptions.
- **Don't push the engine to full throttle.** These are Adriatic waters, not a race track. Enjoy the trip, look around.
- **Not sure about a manoeuvre?** Ask before you go. We'd rather spend 10 minutes walking you through it than have you stuck somewhere.
- **Tell us where you want to go.** We know the area — if you share your plan, we can flag anything to watch out for and point you to the best spots.
- **First time in these waters?** We genuinely recommend going with a skipper. The coast has hidden coves and shallow areas that aren't obvious on a chart. If you still want to go alone, just talk to us first.

---

#### Sección 5 — Safety (reescribir con datos reales — VERIFICAR con Nikola antes de publicar)

Copy:
- Life jackets in adult and child sizes — on board and ready
- Full safety kit on board
- Skipper maintains contact with shore throughout the trip
- Captain checks weather and sea conditions before every departure — if conditions aren't right, we reschedule
- **Boat is licensed and insured under Croatian maritime regulations** ← VERIFICAR con Nikola antes de publicar esta línea

---

#### Sección 6 — Where We Go ← NUEVA — tres mapas embed de Google Maps

**Implementación técnica:** Google Maps iframe embed estándar (sin API key). Usar `<iframe>` con `loading="lazy"` dentro de un componente React. Wrapping div con `aspect-video` o altura fija para evitar CLS.

Crear en Google My Maps (Nikola/Fede): tres mapas públicos separados:

**Mapa 1 — Tour Destinations**
Pins: Hvar Harbour (punto de salida), Blue Cave (Biševo), Pakleni Islands (Palmižana, Stipanska, Vlaka), Vis Island, mejores spots de snorkeling
Título del mapa: "MareBoats — Where We Go"

**Mapa 2 — Partner Restaurants**
Pins: restaurantes en Hvar town (socios con descuento) + restaurantes en las islas accesibles por lancha durante el tour
Título del mapa: "MareBoats — Where to Eat"
Nota en la página: "Most of these are only reachable by boat. Some stops can be included in your tour — ask us when booking."

**Mapa 3 — Hvar Local Tips**
Pins: miradores, playas menos conocidas, mercado local, spots fotográficos, cosas que hacer si llegás temprano o te quedás hasta tarde
Título del mapa: "MareBoats — Hvar Local Tips"

**Copy intro para la sección:**
> "Here's where we usually go — though your route is always flexible. Blue Cave before the crowds, Pakleni for swimming, and a lunch stop somewhere you can only reach by boat."

**Placeholder URL mapas:** `PLACEHOLDER_MAP_URL_TOURS`, `PLACEHOLDER_MAP_URL_RESTAURANTS`, `PLACEHOLDER_MAP_URL_HVAR`
Nikola/Fede deben crear los mapas en Google My Maps, publicarlos, y reemplazar los placeholders.

---

#### Sección 7 — Where to Eat (expandir la existente)

**Subsección A — Restaurants in Hvar Town**
Cards de restaurantes socios. Estructura por card:
- Nombre del restaurante
- Breve descripción (2 líneas)
- Badge: "MareBoats Partner — mention us for [BENEFIT_PLACEHOLDER]"
- Nota: "Most accept cards, but cash is always preferred."

Placeholder hasta que Nikola confirme: "We're building our list of recommended spots in Hvar. Message us on WhatsApp and we'll tell you where we'd go."

**Subsección B — Restaurants on the Water (accessible by boat)**
Cards de restaurantes en las islas o en el agua. Mismo formato.
Copy adicional: "Some of these are only reachable by boat. Depending on your tour, we can include a lunch stop — just let us know when booking. Private water taxi from your yacht or sailboat also available."

**Nota general en ambas subsecciones:**
> "Most restaurants accept cards, but they genuinely prefer cash. Bring some."

---

#### Sección 8 — Hotel Partners ← NUEVA placeholder

Título: "Arriving by Boat? We Work With Local Hotels"

Copy:
> "One of our partner hotels has its own pier — you can start or end your tour directly from there, no need to come to the harbour first. Message us and we'll connect you with the right people."

Estructura: card con nombre del hotel (PLACEHOLDER), descripción breve, badge "Has Private Pier", CTA WhatsApp.
Nikola confirma nombre y detalles.

---

#### Sección 9 — Meeting Point (reescribir con datos reales)

Copy:
> "We meet at Hvar Harbour, next to the fuel station. It's the easiest spot to find — you'll see the boats lined up."

- Link directo a Google Maps: https://maps.app.goo.gl/U6kgAaRG81KZmqUEA
- **Callout box visible (no inline):** "💡 Tip for Nikola: A sign with the MareBoats logo and a QR code pointing to this page would help guests find the boat fast — and gives passing tourists a reason to visit the site and book."

---

#### Sección 10 — FAQ expandida (actualizar JSON-LD también)

Preguntas a agregar o reescribir:

```
Q: Can I bring my own food and drinks on board?
A: Yes. You can bring whatever you like — glass bottles included. We have a cooler with ice on board, or bring your own. That said, stopping to eat at a restaurant on the islands is part of the experience — we recommend it.

Q: Is there a bathroom on board?
A: No. We plan stops at restaurants and beaches where you can use facilities. It works out fine on a full-day tour.

Q: Can I snorkel at every stop?
A: Yes, except inside Blue Cave itself. We have snorkel gear on board in limited quantity. Bringing your own mask and fins is recommended — you'll want to swim at every stop.

Q: Do I need water shoes?
A: Not mandatory. But if you're sensitive to rocky surfaces, they're worth packing. Some coves have sharp pebbles.

Q: What's included in the price?
A: The boat, the skipper, snorkel gear, and a cooler with ice. Entrance to Blue Cave (€20–25/person) is paid separately on site. Lunch and drinks are on you — we know where to stop.

Q: Can I rent a boat without a skipper?
A: Yes, if you have the required licence. All boats have stereo, anchor, life jackets and fenders. Respect low-speed zones — maritime police patrol and fine actively. We recommend going with a skipper if it's your first time in these waters.

Q: What happens if the weather is bad?
A: We check conditions every morning. If it's not safe, we reschedule at no cost. Safety first, always.

Q: Can you pick us up from our yacht or sailboat?
A: Yes. We offer water taxi service for boats anchored in the area — pickup from your yacht, transfer to shore or to a tour starting point. Message us on WhatsApp with your location and we'll sort it out.
```

**Actualizar FAQPage JSON-LD** en `components/ui/JsonLd.tsx` con todas estas preguntas.

---

### Metadata de /guide (actualizar):
```tsx
title: 'Hvar Boat Tour Guide — What to Know Before You Go | MareBoats'
description: 'Everything you need for a private boat tour in Hvar. What to bring, where to eat, where we go, safety rules, snorkeling tips, and local restaurant recommendations.'
```

**Commit:** `git commit -m 'feat: /guide expandida — contenido SEO, mapas, alianzas, rental rules, yacht taxi'`

---

## FASE 14 — Nuevo servicio: Yacht & Sailboat Taxi

**Objetivo:** Capturar tráfico long-tail de turistas que llegan en velero o yate y necesitan transfer al puerto o quieren empezar un tour desde a bordo.

**Keywords objetivo:** "water taxi Hvar yacht", "boat transfer Hvar harbour", "speedboat taxi Hvar sailing"

### Tareas:

**14.1 — Agregar entrada en `lib/tours-data.ts`:**
```ts
{
  slug: 'yacht-sailboat-taxi',
  name: 'Yacht & Sailboat Water Taxi',
  shortDescription: 'Anchored in the area? We pick you up from your yacht and take you wherever you need — harbour, beach, restaurant, or tour starting point.',
  description: `...300+ words SEO...`,
  duration: 'On demand',
  price: 'From €XX',
  includes: ['Pickup from anchored vessel', 'Drop-off at destination', 'Can connect to any MareBoats tour'],
  keywords: ['water taxi Hvar', 'yacht transfer Hvar', 'sailboat taxi Hvar Croatia', 'boat pickup Hvar harbour'],
  meetingPoint: 'We come to you — send us your coordinates on WhatsApp'
}
```

**14.2 — Crear `app/tours/yacht-sailboat-taxi/page.tsx`:**
- Metadata SEO única con keywords long-tail
- H1: "Water Taxi & Yacht Transfer — Hvar"
- Copy: directo, explica el servicio, CTA WhatsApp con mensaje pre-cargado "Hi, I need a water taxi from my yacht. My location is: [coordinates]"
- Agregar al sitemap con priority 0.7

**14.3 — Mencionar en /guide:**
En la sección "Where to Eat — Restaurants on the Water" y en la FAQ, agregar referencia natural: "Private water taxi from your yacht or sailboat also available."

**Commit:** `git commit -m 'feat: nuevo servicio yacht & sailboat water taxi con página SEO'`

---

## PENDIENTE DE TERCEROS (no bloqueante para entrega 30/04)

- Precios reales 5 tours + transfer + yacht taxi → `lib/tours-data.ts` (actualmente `From €XX`)
- Reviews reales OTAs → `Testimonials.tsx` (actualmente placeholders UK/DE/USA)
- Fotos profesionales → comprimir <500KB antes de subir (Fede viaja a Hvar)
- Cambios estéticos de Coti
- **Nikola:** Nombres de restaurantes socios + beneficio para guests (descuento, welcome drink, etc.)
- **Nikola:** Nombre y detalles del hotel socio con muelle
- **Nikola/Fede:** Crear 3 mapas en Google My Maps (tours, restaurantes, Hvar tips) → reemplazar `PLACEHOLDER_MAP_URL_*` en guide
- **Nikola:** Confirmar que el barco está licensiado y asegurado bajo regulaciones marítimas croatas antes de publicar esa línea en /guide
- **Nikola:** Precio del servicio yacht taxi

---

## Reglas siempre activas
- Mobile-first: grid-cols-1 primero, luego md: lg:
- Solo next/image — cero <img> tags
- Solo animar transform y opacity — nunca transition-all
- Todo clickeable necesita hover + focus-visible + active
- npm run build debe pasar sin errores al terminar cada fase
- Commit al terminar cada fase con el mensaje indicado
- NUNCA tocar /src/components/ — legacy
- NUNCA cambiar copy ni imágenes existentes sin instrucción explícita
- Los idiomas a bordo (EN/HR/IT/ES) solo aplican cuando Fede es el skipper — no prometer en copy genérico
