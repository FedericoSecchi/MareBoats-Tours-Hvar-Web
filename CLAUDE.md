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

## Estado actual (19 abril 2026)

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
- Fase 15 ✅ commit dc334dc — /guide reorganizada: 5 secciones (Where We Go + map embed, What to Bring x6 con SVG, Rules & Rentals accordion, FAQ x8 accordion + JSON-LD, Weather Policy alert) + lib/maps-data.ts
- Fase 16 ⬜ PENDIENTE — 5 landing pages: /landing/explore, /pre-tour, /review, /guide-hvar, /rental
- Fase 17 ⬜ PENDIENTE — WhatsApp templates + post-booking flow (archivos de referencia en /public/docs/)
- Fase 18 ⬜ PENDIENTE — QR code strategy (3 físicos: muelle, barco, guide)
- Fase 19 ⬜ PENDIENTE — Google My Maps embeds integrados (/guide + landing pages)

## Build actual
21 páginas estáticas. Rutas /tours/[slug]:
- blue-cave-pakleni-islands
- pakleni-islands
- sunset-cruise
- split-airport-transfer
- private-boat-charter
- yacht-sailboat-taxi

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
- ✅ /guide es página pública indexable — captura SEO long-tail pre-booking + se envía a guests post-booking por WhatsApp
- ✅ Idiomas a bordo (EN/HR/IT/ES) solo aplican cuando Fede es el skipper — no prometer en copy genérico del sitio
- ✅ No hay baño a bordo — guests usan los de los restaurantes en las paradas
- ✅ Botellas de vidrio: PERMITIDAS — la gente puede traer sus bebidas
- ✅ Heladera/conservadora a bordo incluida — guests también pueden traer la suya
- ✅ Fumar: NO permitido a bordo
- ✅ Zonas de baja velocidad: multas reales de la policía marítima — hay que respetarlas siempre

---

## FASE 15 — /guide Reorganizada

### Objetivo
Página pública, indexable, SEO-optimizada. Para turistas que consideran bookear.
Separar en 5 secciones claras, sin saturar.

### Metadata
```tsx
title: 'Hvar Boat Tour Guide | What to Bring, Rules & Tips'
description: 'Complete guide for MareBoats tours: packing list, weather policy, FAQs, and insider tips for your Hvar boat experience.'
keywords: ['hvar boat tour guide', 'what to bring boat tour', 'boat tour packing list', 'hvar tour rules']
url: 'https://mareboatshvar.com/guide'
```

### Estructura (5 secciones)
```
/guide
├── Hero: "Everything you need to know before your tour"
├── Sección 1: WHERE WE GO — Google My Maps embed #1 (placeholder) + destinos
├── Sección 2: WHAT TO BRING — grid 6 items con ícono + 1 línea
├── Sección 3: RULES & RENTALS — accordion expandible (vidrio ✅, fumar ❌, baño ⚠️, heladera ✅)
├── Sección 4: FAQ PRE-TOUR — accordion 8-10 preguntas + FAQPage schema JSON-LD
├── Sección 5: WEATHER POLICY — alert box, política de cancelación
└── CTA: "More questions? Message Nikola on WhatsApp"
```

### Archivos a tocar
- app/guide/page.tsx — refactor completo
- components/ui/JsonLd.tsx — actualizar FAQPage schema con las nuevas preguntas
- lib/guide-content.ts — actualizar con las 5 secciones (si existe)

### Commit
```bash
git commit -m "feat: fase 15 — /guide reorganizada con 5 secciones (where, what to bring, rules, faq, weather)"
```

---

## FASE 16 — 5 Landing Pages con Smart Routing

### Objetivo
Un QR code, un destino específico por contexto. Cada página tiene 1 CTA claro.

### Rutas

| Ruta | Quién | Objetivo | Indexable |
|------|-------|----------|-----------|
| /landing/explore | Turista en muelle (no bookeó) | Convertir a booking WhatsApp | ✅ SÍ |
| /landing/pre-tour | Cliente que ya bookeó (Nikola le manda link) | Llegar preparado | ❌ noindex |
| /landing/review | Cliente que terminó el tour (QR en barco) | Dejar review en Google Maps | ❌ noindex |
| /landing/guide-hvar | Turista con guide impreso | SEO long-tail + engagement | ✅ SÍ |
| /landing/rental | Cliente alquilando sin skipper | Informar reglas | opcional noindex |

### Estructura de archivos
```
app/landing/
├── explore/page.tsx
├── pre-tour/page.tsx
├── review/page.tsx
├── guide-hvar/page.tsx
└── rental/page.tsx

app/review/page.tsx  ← redirect 301 → Google Business Profile
```

### /landing/explore
```
Hero: "Choose Your Adventure" + "⭐ 100+ happy guests"
Tours Grid: 4 cards (Blue Cave, Pakleni, Sunset, Charter) con precio + CTA WhatsApp
CTA Section: "When are you visiting Hvar?" + WhatsApp prominente + "We reply within 1 hour"
Trust: 3 reviews + Google Maps score
```
Metadata: `title: 'Private Boat Tours Hvar | Blue Cave & Island Tours'`
SEO keywords: boat tour hvar, private boat hvar, blue cave tour, pakleni islands boat

### /landing/pre-tour (noindex)
```
Hero: "Your MareBoats Tour is Tomorrow! 🌊"
Sección 1: MEETING POINT — "Hvar Harbour, main dock" + Google Maps embed
Sección 2: TIMELINE — 9:00 meet / 9:15 depart / 11:00 Blue Cave / 13:00 lunch / 16:00 back
Sección 3: WHAT TO BRING — checklist visual (checkboxes no funcionales)
Sección 4: IMPORTANT INFO — weather cancellation policy + WhatsApp Nikola
Sección 5: BONUS — Spotify playlist + Instagram @mareboats.hvar
CTA: "See you tomorrow! 🌊" + WhatsApp +385 95 196 6734
```

### /landing/review (noindex)
```
Hero: "Thanks for joining us! 🎉" + "Help us stay #1 in Hvar"
CTA GIGANTE: "⭐ Leave a Review on Google" → apunta a /review (que redirige a Google Business)
Copia: "Takes 30 seconds"
Bonus: Spotify playlist + "Tag us @mareboats.hvar" + "Your photos are our best marketing"
```

### /review (redirect)
```tsx
// app/review/page.tsx
// 301 redirect a Google Business Profile review URL
// URL: https://maps.app.goo.gl/U6kgAaRG81KZmqUEA (confirmar URL directa de review)
```

### /landing/guide-hvar (indexable)
```
Hero: "You have time in Hvar? 🏝️" — "Must-see spots, restaurants, hidden gems"
Sección 1: WHERE TO EAT — Google My Maps embed #2 (Partner Restaurants) — placeholder
Sección 2: WHAT TO DO — Old Town, beaches, beach clubs, nightlife
Sección 3: LOCAL TIPS — horarios, moneda, números de emergencia
Sección 4: MAPS — Google My Maps embed #3 (Hvar Local Tips) — placeholder
CTA Primario: "Want to explore from the sea?" → /landing/explore
CTA Secundario: Instagram @mareboats.hvar
```
Metadata: `title: 'Hvar Travel Guide | Restaurants, Beaches & Local Tips'`
SEO keywords: hvar croatia guide, things to do hvar, hvar restaurants, hvar beaches

### /landing/rental
```
Hero: "Boat Rental — Important Rules" + "We want you to have fun & stay safe"
Sección 1: FUEL & MAINTENANCE — full tank in/out, dónde recargar
Sección 2: SPEED ZONES — mapa + multas reales de policía marina + "national laws"
Sección 3: SAFETY & EQUIPMENT — chalecos, botiquín, radio, instrucciones
Sección 4: DAMAGE POLICY — qué cubre / no cubre / depósito / cómo reportar
Sección 5: ALCOHOL & SMOKING — alcohol ✅ con moderación / smoking solo en proa ❌ cabina / botellas vidrio OK en deck
Sección 6: RETURN PROCESS — hora, checklist devolución, fotos pre/post
FAQ Accordion: "What if I run out of fuel?", "Can I go to Italy?", "Bad weather?", "Can I hire a skipper?"
CTA: "Questions? Call Nikola" + link a /landing/explore
```

### Commit
```bash
git commit -m "feat: fase 16 — 5 landing pages con smart routing (/explore, /pre-tour, /review, /guide-hvar, /rental)"
```

---

## FASE 17 — WhatsApp Templates + Post-Booking Flow

### Template de Nikola (1 línea)
Después de confirmar booking:
```
Tu tour está confirmado ✅
Toda la info aquí: mareboatshvar.com/landing/pre-tour
¡Nos vemos! 🌊
```

Follow-up (día anterior, 2 horas antes):
```
Buen día! Tu tour es hoy a las 09:00 en Hvar Harbour, main dock.
Último check: mareboatshvar.com/landing/pre-tour
¡Nos vemos! ⛵
```

Post-tour:
```
¡Gracias por viajar con nosotros! 🎉
Dejá una reseña rápida: mareboatshvar.com/review
Compartí tus fotos: @mareboats.hvar 📸
```

### Archivos a crear
```
/public/docs/NIKOLA_WHATSAPP_TEMPLATES.md — templates copiables para Nikola
/public/docs/QR_CODES_GUIDE.md — cómo generar los QR (para Nikola)
/public/docs/GOOGLE_MAPS_SETUP.md — cómo crear los 3 mapas My Maps
```

### Commit
```bash
git commit -m "feat: fase 17 — WhatsApp templates + post-booking flow (Nikola reference)"
```

---

## FASE 18 — QR Code Strategy (Físico)

### 3 QR Codes

| QR | Ubicación | URL destino | Objetivo |
|----|-----------|-------------|----------|
| #1 Muelle | Cartel harbour | /landing/explore | Turistas indecisos → booking |
| #2 Barco | Sticker popa/cabina | /landing/review | Reviews post-tour → Google ranking |
| #3 Guide | Guide impreso | /landing/guide-hvar | Engagement + SEO long-tail |

### Cartel QR #1 (printable)
```
╔════════════════════════════════════╗
║   🎫 BOAT TOURS FROM HVAR HARBOUR  ║
║          [QR CODE HERE]            ║
║      Scan for tours & prices       ║
║      Private • Professional • Fun  ║
║     mareboatshvar.com/landing/     ║
║              explore               ║
╚════════════════════════════════════╝
```

### Sticker QR #2 (pequeño, discreto)
```
⭐ Just finished?
Leave a review:
[QR CODE]
30 seconds. Huge help.
```

### Generación (para Nikola)
Tool: https://www.qr-code-generator.com (free)
Color sugerido: turquesa #3BC9DB o blanco/negro
Descargar PNG alta resolución para impresión
Testear en múltiples teléfonos antes de imprimir

### Commit
```bash
git commit -m "feat: fase 18 — QR code strategy + embed templates (muelle, barco, guide)"
```

---

## FASE 19 — Google My Maps Embeds

### 3 Mapas a crear (Nikola o Fede en Google My Maps)

| Mapa | Dónde se usa | Pins sugeridos |
|------|-------------|----------------|
| Tour Destinations | /guide#where-we-go | Blue Cave, Pakleni Islands N/S, Hvar Harbour, lunch spots |
| Partner Restaurants | /landing/guide-hvar#where-to-eat | Restaurantes Hvar Town + en las islas |
| Hvar Local Tips | /landing/guide-hvar#maps | Old Town, beaches, beach clubs, farmacia, ATM, hospital |

### Cómo Nikola publica los mapas
1. Ir a https://www.google.com/mymaps
2. Crear mapa, agregar pins, publicar → "Anyone with the link can view"
3. Share → "Embed on my website" → copiar URL del atributo `src` del iframe
4. Pegar en lib/maps-data.ts

### lib/maps-data.ts (a crear)
```tsx
export const MAPS = {
  tourDestinations: null,       // TODO: Nikola agrega embed URL
  partnerRestaurants: null,     // TODO: Nikola agrega embed URL
  hvarLocalTips: null,          // TODO: Nikola agrega embed URL
}
```

### Implementación en componentes
```tsx
{MAPS.tourDestinations && (
  <iframe
    width="100%"
    height="400"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    src={MAPS.tourDestinations}
    title="MareBoats tour destinations map"
  />
)}
```

Nota: Si `null`, mostrar placeholder: "Map coming soon — check back before your tour"

### Commit
```bash
git commit -m "feat: fase 19 — Google My Maps embeds integrados en /guide + /landing pages"
git commit -m "docs: actualizado CLAUDE.md con fases 15-19 completadas"
```

---

## Arquitectura final de URLs (post Fases 15-19)

```
mareboatshvar.com/
├── / (HOME)
├── /tours/[slug] — 6 tours individuales
├── /guide ✨ REORGANIZADA (Fase 15)
├── /landing/explore (Fase 16) ← QR #1 muelle
├── /landing/pre-tour (Fase 16) ← Nikola lo manda por WhatsApp
├── /landing/review (Fase 16) ← QR #2 barco
├── /landing/guide-hvar (Fase 16) ← QR #3 guide impreso
├── /landing/rental (Fase 16)
└── /review ← redirect 301 → Google Business Profile
```

---

## PENDIENTE DE TERCEROS — desbloquea contenido final

| Item | Responsable | Dónde se usa |
|------|-------------|--------------|
| Mapa Google My Maps — Tour Destinations (embedUrl) | Nikola / Fede | /guide → Where We Go |
| Mapa Google My Maps — Partner Restaurants (embedUrl) | Nikola / Fede | /landing/guide-hvar → Where to Eat |
| Mapa Google My Maps — Hvar Local Tips (embedUrl) | Nikola / Fede | /landing/guide-hvar → Maps |
| Lista de restaurantes socios Hvar Town + beneficio para guests | Nikola | /landing/guide-hvar → Where to Eat |
| Lista de restaurantes en el agua (islas) accesibles por lancha | Nikola | /landing/guide-hvar → Restaurants on the Water |
| URL directa de Google Business review page | Nikola | /review redirect |
| Spotify playlist link "Hvar vibes" | Fede | /landing/pre-tour + /landing/review |
| Precios reales 5 tours + transfer + yacht taxi | Nikola | lib/tours-data.ts |
| Reviews reales OTAs | Nikola | components/sections/Testimonials.tsx |
| Fotos profesionales | Fede (viaja a Hvar) | Comprimir <500KB antes de agregar |
| Cambios estéticos | Coti | — |

### Cómo crear los mapas (para Nikola o Fede):
1. Ir a https://www.google.com/mymaps
2. Crear mapa nuevo, agregar pins, publicar → "Anyone with the link can view"
3. Botón "Share" → "Embed on my website" → copiar la URL del atributo `src` del iframe
4. Pegar esa URL en `lib/maps-data.ts` reemplazando `null`

---

## Reglas siempre activas
- Mobile-first: grid-cols-1 primero, luego md: lg:
- Solo next/image — cero <img> tags
- Solo animar transform y opacity — nunca transition-all
- Todo clickeable necesita hover + focus-visible + active
- npm run build debe pasar sin errores al terminar cada fase
- Commit al terminar cada fase con el mensaje indicado
- NUNCA tocar /src/components/ — legacy
- NUNCA cambiar copy ni imágenes existentes sin instrucción explícica
- Los idiomas a bordo (EN/HR/IT/ES) solo aplican cuando Fede es el skipper — no prometer en copy genérico
- /landing/pre-tour y /landing/review son noindex: true
- /review redirige a Google Business Profile — no es una página indexable
