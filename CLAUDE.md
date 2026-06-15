# MareBoats Tours Hvar — Contexto del Proyecto
**Actualizado: 15 Junio 2026**

---

## Negocio
- Tours privados y compartidos en speedboat desde Hvar, Croacia
- Propietario: Nikola (fundador, operaciones). Josip (hermano de Nikola, head skipper). Fede = skipper ocasional + marketing + tech
- WhatsApp único canal de conversión: +385 95 196 6734 → https://wa.me/385951966734
- URL live: https://mareboatshvar.com
- Repo: https://github.com/FedericoSecchi/MareBoats-Tours-Hvar-Web

## Equipo (para copy)
- **Nikola** — fundador, nació y creció en Hvar, dirige las operaciones, skipper ocasional, habla inglés y croata
- **Josip** — hermano de Nikola, ~38 años, head skipper, toda su vida en el agua, vivió en Alemania, muy querido por los clientes, habla inglés, croata y alemán
- **Federico (Fede)** — argentino, ciudadanía italiana, empezó en Optimist a los 6 años, mundiales y sudamericanos representando Argentina, coach de la Federación de Vela de Ecuador 2 años, trabajó con la clase 69F, clásicos y cruceros hasta 90 pies, maneja el marketing de MareBoats, skipper ocasional. Habla español, italiano e inglés. Sin título/cargo en la web.
- **Coti** — diseño, redes sociales, posts GBP
- **Sirius/Circus** — ex-tripulación, ya no trabaja en MareBoats. No mencionar en copy.

## La flota — CONFIRMADO por Nikola 29/05
- 4 barcos en total (corregido de 5)
- **Blue Mariner**: cómodo 5 · máximo 8 personas
- **Red Mariner**: cómodo 5 · máximo 8 personas
- **Jolly**: cómodo 6 · máximo 8 personas
- **Clubman**: cómodo 6 · máximo 8 personas
- Motores: 150-300hp
- Equipamiento: sun canopy, sistema de música, conservadora, snorkel y máscaras
- Tours privados (grupo propio) o compartidos (sale cuando se llena). Grupos grandes: múltiples speedboats en convoy. Máximo convoy: 14 personas (2 botes).
- **NO mencionar "RIB" en copy** — decisión consciente de Nikola. Usar "speedboat" siempre.
- El skipper no es un guía, pero puede ir contando y actuando de guía durante el tour.

## Flota self-drive rental — precios por día completo (07/06/2026)
| Embarcación | HP | Precio/día | Fuel | Licencia |
|---|---|---|---|---|
| Pasara | 5hp | €120 | Incluido | No requerida (legal hasta 5hp en Croacia) |
| Pasara | 20hp | €200 | Incluido | Consultar por WhatsApp |
| Speedboat | 60hp | €290 | Incluido | Requerida |
| Speedboat Mariner | 150hp | €350 | Extra (full-in/out) | Requerida |

Nota legal: En Croacia, operar sin licencia es legal solo hasta 5HP (3.7 kW). La Pasara 20hp está en zona gris — Nikola resuelve caso a caso por WhatsApp. El copy dice "ask us about licence" para la 20hp, nunca afirmar "no licence needed".

## Stack técnico
- Next.js 14 + Tailwind CSS + TypeScript — `output: 'export'` (static export)
- App Router en /app — componentes activos en /components/ui/ y /components/sections/
- **NUNCA tocar /src/components/** — es código legacy
- Hosting: Netlify — deploy automático en cada push a main
- Redirects: netlify.toml (NO usar next.config.mjs para redirects en runtime — static export)
- Herramienta de código: Claude Code (reemplazó a Cursor desde 23/05)
- NEXT_PUBLIC_ env vars son build-time — hardcodear Measurement ID directamente en layout.tsx

## Schema markup — implementado 06/06/2026
Archivo central: `lib/schema.ts`

### Schemas globales (app/layout.tsx)
- `businessSchema`: @type ["LocalBusiness", "TouristAttraction"] · name "MareBoats Hvar" · coordenadas 43.1690147, 16.4429617 · reviewCount: 26 · rating 5.0 · availableLanguage [EN, HR, DE, ES, IT] · openingHours mayo-septiembre · priceRange "€€"
- `websiteSchema`: @type WebSite

### Schemas por página
- `tourSchemaMap`: map por slug con TouristAttraction + Service para los 6 tours. Cada uno tiene offers con precios reales, maximumAttendeeCapacity: 8, availableLanguage, aggregateRating.
- `rentalServiceSchema` + `rentalBreadcrumbSchema`: Service + BreadcrumbList en /rentals/
- BreadcrumbList en todas las tour pages

### Precios en schema (tomados del sitio live)
| Slug | Precio |
|---|---|
| blue-cave-pakleni-islands | €130/persona (shared) · €700 privado |
| red-rocks-pakleni-islands | €85/persona (shared) · €400 privado half-day · €500 privado full-day |
| pakleni-islands | On request |
| sunset-cruise | €250 privado |
| private-boat-charter | €500 + fuel |
| rentals | desde €400 (con skipper) |

### Validación Google Rich Results Test — 06/06/2026
- /tours/blue-cave-pakleni-islands/: 4 elementos válidos ✅
- /rentals/: 5 elementos válidos ✅

## Arquitectura de páginas — estado al 11/06/2026
- `/rentals/` — página unificada: Boat Rental + Underwater Scooter + FAQ. SEO principal para keywords de rental.
- `/boat-rental/` — eliminada. Redirect 301 → `/rentals/` en netlify.toml.
- `/landing/pre-tour/` — reescrita el 01/06.
- `/hvar-islands-guide/` — indexada, priority 0.8. OnTourBanner visible solo con ?ref=qr.
- `/on-tour/` — ELIMINADA. Redirect 301 → `/hvar-islands-guide/`.
- `/explore/` — hub de contenido. Keywords: "things to do in Hvar", "hvar beaches", "hvar travel guide".
- `/guide/` — guía pre-tour con route cards.
- `/transfers/` — Mapbox Static Images API. hoverImage Split asignada.
- `/conditions/` — live weather/marine. Removida del navbar (08/06). Entradas contextuales desde tour pages y footer.
- Nav: Tours → Rentals → Transfers → Explore → About

## Cluster SEO — páginas interconectadas
- `/explore/` → `/guide/`, `/hvar-islands-guide/`, `/tours/`
- `/guide/` → `/hvar-islands-guide/` + links a tours
- `/hvar-islands-guide/` → tours Blue Cave, Red Rocks, Stiniva + WhatsApp CTA
- `/tours/` → 6ta card apunta a `/rentals/`
- `/conditions/` → sunset cruise tour
- `/tours/blue-cave-pakleni-islands/` → `/conditions/`
- `/tours/sunset-cruise/` → `/conditions/`
- Footer → link "Conditions"

## QR Hub — /qr/
- "On Tour" → `/hvar-islands-guide?ref=qr`
- "Current Conditions" → `/conditions/`

## Herramientas operativas
- **Vesselio** — mareboats.vesselio.app · apikey: Fedde123. Solo referencia operativa, no conectar al sitio.

## Reglas inamovibles de contenido
- Idiomas a bordo solo cuando Fede es skipper — NO prometer genéricamente
- **Idiomas equipo: EN + HR + IT + ES + DE**
- Botellas de vidrio: permitidas. Comida: permitida. No fumar. Sin baño a bordo.
- Formularios: NO. Solo WhatsApp.
- **Underwater Scooter**: €40/unit. NO en tours a Vis ni Sunset Cruise. Nombre: "Underwater Scooter".
- Photo & Video Shoot: €200. Solo tours privados, solo cuando Fede está a bordo.
- NO mencionar año de fundación.
- NO mencionar RIB. Usar "speedboat".
- Boat rental sin licencia: solo Pasara 5hp es clara. 20hp por WhatsApp.
- Em-dashes y en-dashes prohibidos.
- "Lunch not included" — wording unificado.
- **Capacidad: "Licensed for 12. We cap at 8."** Nunca mencionar 12 sin contexto.
- **Brand: "MareBoats Hvar"** (sin espacio).
- Filler prohibido: "premium", "unforgettable", "ultimate", "ideal for", "flagship".

## Design tokens
```
--bg: #0d1b2a
--surface: #122236
--accent: #3BC9DB
--accent-dk: #2A9FAF
--white: #F5F0E8
--gray: #8a9ab0
--border: #1e3048
font-heading: Syne (bold/extrabold, uppercase)
font-body: Space Grotesk (regular/medium)
```

---

## 🔴 REGLAS INAMOVIBLES — OTAs

**Nada se cambia en GYG, Booking.com, Viator ni Airbnb sin que Nikola apruebe PRIMERO.**
Flujo: Fede redacta → WhatsApp a Nikola → aprobación escrita → publicar.

### Concepto VIP 5 Islands (no modificar)
- Salida 10:00, 3 cuevas, grupos chicos, NO "RIB", mantener "VIP"

### Reglas copy GYG
- "Skipper" > "Tour Guide". Blue Cave keyword estrella en título y primer párrafo.
- No combinar "3 caves" con Blue Cave en título. No "contact us directly".
- GYG: 3000 chars — usarlos. Mencionar stops específicos.

---

## ✅ ESTADO REAL al 11/06/2026

### GA4
- `whatsapp_click`: 41 eventos · 24 usuarios únicos (últimos 28 días)
- 286 sesiones · 156 usuarios · 30s engagement. US #1, Croatia, UK, AR, IT, DE.
- Google Ads: pendiente crear cuenta + importar conversión.

### GSC
- 45 clics · 1,550 impresiones · CTR 2.9% · pos 24.3
- Keywords: "hvar boat rental" pos 30.1, "rent a boat hvar" pos 32.7, "hvar boat hire" pos 35.7

### GBP
- Verificado · 5.0 ⭐ · 26 reseñas. Nombre y descripción actualizados 07/06.
- Pendiente: 20-30 fotos reales, Q&A (no disponible en panel).

### GYG — mayo 2026
- Revenue: €1,635 · Bookings: 7 · Rating: 5.0 ⭐
- VIP 5 Islands: €1,530 · 6 bookings · Jun 22 SOLD OUT
- Red Rocks: €105 · 1 booking

### Booking.com — pendiente aprobación Nikola
### Viator — bloqueado por seguro
### Airbnb — bloqueado por Ministerio Turismo Hvar

---

## /landing/pre-tour/ — estado al 07/06/2026

### Mensaje WhatsApp Nikola
```
Hey! 👋 Booking confirmed, looking forward to having you on board.
👉 mareboatshvar.com/landing/pre-tour
Any questions, just message me here.
See you on the water! 🌊
Nikola
```

### Meeting Point
- 43.1690147, 16.4429617 — https://maps.app.goo.gl/k84JNBQLvqgZunEX6

### Departure slots (07/06)
- Red Rocks & Pakleni: 09:00, 11:00 or 14:00
- Pakleni Half Day: 09:00, 11:00 or 14:00
- Viven en app/landing/pre-tour/page.tsx

### Extra costs y add-ons
| Tour | Extra Costs | Add-on |
|---|---|---|
| 5 Islands shared | Blue Cave €24 · Green Cave €12 · Lunch not included | — |
| 5 Islands private | Blue Cave €24 · Green Cave €12 · Lunch not included | Photo & Video €200 |
| Red Rocks & Pakleni | Lunch not included | Underwater Scooter €40 · Photo & Video €200 |
| Pakleni Half Day | None | Underwater Scooter €40 · Photo & Video €200 |
| Sunset Cruise | None | Photo & Video €200 |
| Private Charter | Fuel not included | Underwater Scooter €40 · Photo & Video €200 |
| Split Transfer | None | — |

---

## /rentals/ — estado al 07/06/2026
- Grid 2x2 self-drive con precios reales y badges de licencia
- Badge PASARA 5HP: "NO LICENCE NEEDED" · PASARA 20HP: "ASK US ABOUT LICENCE" · Speedboats: "LICENCE REQUIRED"
- Schema JSON-LD: Service + BreadcrumbList + FAQPage (no tocar)

---

## /transfers/ — estado al 11/06/2026

### Mapbox Static Images API ✅
- `lib/mapbox.ts` — `getMapboxStaticUrl(from, to, width, height, via?)`
- Estilo: `mapbox/satellite-streets-v12` · Token: `NEXT_PUBLIC_MAPBOX_TOKEN`
- `hoverImage` Split asignado: `public/images/tours/hvar-open-sea-speedboat-transfer-drone-2026.jpg` ✅
- Resto de hoverImages: null (pendiente fotos)

### Waypoints (WGS84) — origen: Hvar Port 16.442975, 43.169008
| Card | Destino |
|---|---|
| Split | 16.437864, 43.507639 |
| Split Airport | 16.301891, 43.529181 |
| Brač | 16.657026, 43.261500 |
| Korčula | 17.136184, 42.959341 |
| Biševo | 16.184168, 43.062260 |
| Yacht Taxi | 16.393924, 43.160106 |

### Precios
- Split ciudad: €500 · Split Airport: €600 · Duración: 1:00-1:10h

---

## /about/ — estado al 15/06/2026 ✅ CERRADO

### Fotos crew
- `public/images/team/josip-skipper.jpg`
- `public/images/team/fede-skipper.jpg`
- `public/images/team/nikola-mareboats-skipper.png`
- Crew cards: `aspect-[3/4]` (portrait), objectPosition individual

### Hero
- Imagen: `public/images/hero/hvar-pakleni-islands-zdrilca-channel-speedboat-drone-2026-03.jpg`
- objectPosition: `center top` mobile / `md:object-center` desktop
- min-h: `50vh` mobile / `60vh` desktop · justify-start · pt-20

### Story section
- Imagen: `public/images/destinations/hvar-old-town-aerial-rooftops-drone-2026-02.jpg` · objectPosition: center

### Fleet section
- Componente: TourCardImage carrusel autoplay · aspect-[4/3] · cover · center
- Imagen 1: `public/images/destinations/hvar-pakleni-islands-zdrilca-channel-speedboat-drone-2026-07.jpg`
- Imagen 2: `public/images/destinations/hvar-speedboat-open-sea-aerial-drone-2026.jpg`

---

## Fotos drone — estado al 15/06/2026

### Shoot: mayo-junio 2026, DJI Mavic 4 Pro
- 104 fotos · Exportadas: 2000px long edge, 80% JPG, sRGB, Screen/Standard sharpening
- Fuente original: `/Users/federiciandres/Documents/Audiovisual/Mareboats/Exportadas/`
- Formato SEO: `hvar-[location]-drone-2026.jpg`
- Estructura en repo: `public/images/` — subcarpetas: `hero/`, `destinations/`, `tours/`, `team/`, `boat/`, `gallery/`
- `public/img/` — solo logos, icons, SVGs y OG image. NO tocar.
- Blue Cave: sin fotos propias por ahora. Placeholder: `hvar-pakleni-islands-hidden-cove-drone-2026-01.jpg`

### Clusters identificados por GPS
| Cluster | Archivos | Ubicación |
|---|---|---|
| A | 1-2 | Open water S de Hvar |
| B | 3-6 | East Hvar coast (Red Rocks/Dubovica) |
| C | 7-25 | Pakleni E / Taršće |
| D | 26-28 | Hvar harbour (meeting point) |
| E | 29-37 | East Hvar south coast (Red Rocks/Dubovica) |
| F | 38-45 | Zdrilca channel, barco en movimiento |
| G | 46-50 | Hvar harbour golden hour |
| H | 51-54 | Water SW harbour golden hour |
| I | 55-59 | Above Hvar old town golden hour |
| J | 60-70 | Hvar harbour/Spanjola fortress sunset |
| K | 71-72 | Hvar harbour morning |
| L/M | 73-103 | Pakleni anchorage Jerolim |

### Fotos wired en el sitio
| Archivo | Path | Uso |
|---|---|---|
| hvar-speedboat-pakleni-channel-drone-2026.jpg | public/images/hero/ | Hero home |
| hvar-pakleni-islands-zdrilca-channel-speedboat-drone-2026-03.jpg | public/images/hero/ | About hero |
| hvar-open-sea-speedboat-aerial-drone-2026-01.jpg | public/images/hero/ | Tours page hero |
| hvar-harbour-sunset-aerial-drone-2026-03.jpg | public/images/hero/ | Hero general |
| hvar-town-aerial-overview-drone-2026-01.jpg | public/images/hero/ | Explore/Guide hero |
| hvar-old-town-aerial-rooftops-drone-2026-02.jpg | public/images/destinations/ | About story |
| hvar-pakleni-islands-zdrilca-channel-speedboat-drone-2026-07.jpg | public/images/destinations/ | About fleet img 1 |
| hvar-speedboat-open-sea-aerial-drone-2026.jpg | public/images/destinations/ | About fleet img 2 |
| hvar-pakleni-islands-tarske-bay-drone-2026.jpg | public/images/destinations/ | Pakleni card img 1 |
| hvar-pakleni-islands-anchorage-aerial-drone-2026.jpg | public/images/destinations/ | Pakleni card img 2 |
| hvar-dubovica-beach-aerial-drone-2026.jpg | public/images/destinations/ | Dubovica highlight modal |
| hvar-pakleni-islands-hidden-cove-drone-2026-01.jpg | public/images/destinations/ | Blue Cave placeholder |
| hvar-red-rocks-boat-tour-drone-2026.jpg | public/images/tours/ | Red Rocks card img 1 |
| hvar-red-rocks-cliffs-aerial-drone-2026.jpg | public/images/tours/ | Red Rocks card img 2 |
| hvar-town-sunset-spanjola-fortress-drone-2026.jpg | public/images/tours/ | Sunset card img 1 |
| hvar-sunset-cruise-golden-hour-drone-2026.jpg | public/images/tours/ | Sunset card img 2 |
| hvar-private-charter-pakleni-islands-drone-2026.jpg | public/images/tours/ | Charter card img 1 |
| hvar-open-sea-speedboat-transfer-drone-2026.jpg | public/images/tours/ | Transfers Split hoverImage |
| hvar-boat-rental-pakleni-islands-drone-2026.jpg | public/images/tours/ | Rentals hero |
| hvar-pakleni-islands-sea-scooter-snorkel-drone-2026-01.jpg | public/images/boat/ | Rentals underwater scooter |
| hvar-mareboats-fleet-harbour-drone-2026.jpg | public/images/boat/ | Flota en puerto |
| nikola-mareboats-skipper.png | public/images/team/ | About — Nikola card |
| josip-skipper.jpg | public/images/team/ | About — Josip card |
| fede-skipper.jpg | public/images/team/ | About — Fede card |

---

## Tour cards — componentes (estado 11/06/2026)

### components/ui/TourCardImage.tsx
- Carousel autoplay 4000ms on mount
- mouseEnter pausa (sin reset índice), mouseLeave reanuda
- Dots visibles en md+, cleanup en unmount
- **Props opcionales: `objectFit` ('cover'|'contain', default 'cover') y `objectPosition`**

### components/sections/Tours.tsx (home)
- TourCardImage envuelto en Link → /tours/{slug} · trackEvent `tour_card_image_click`

### app/tours/page.tsx
- TourCardImage envuelto en Link → /tours/{slug}/ (consistente con home)

---

## /conditions/ — entradas contextuales
| Origen | Trigger | Destino |
|---|---|---|
| /tours/blue-cave-pakleni-islands/ | Card "Check Blue Cave conditions" | /conditions/ |
| /tours/sunset-cruise/ | Card "Check tonight's sunset quality" | /conditions/ |
| /qr/ | Card "Current Conditions" | /conditions/ |
| Footer | Link columna Explore | /conditions/ |

---

## Copy — PHOTO_VIDEO_ADDON
```
+Photo & Video Shoot - €200, on request (when Fede is on board). Drone, underwater and on-board footage. Full gallery after the tour. Book in advance - slots are limited.
```
Tours privados únicamente. No aplica en shared 5 Islands.

---

## PLAN UNIFICADO — Estado al 15/06/2026

### ✅ CERRADOS
- Bloque 0, SEO Website, /landing/pre-tour/, SEO Cluster, fixes 02/06, Mobile Audit, Copy Audit, UX/Conversión, Schema markup, GBP, Precios self-drive, /conditions/, Copy 07/06, Session 07/06 noche, Session 08/06
- **BLOQUE 1 Fotos drone — CERRADO** (09-15/06): 52 fotos migradas a public/images/, estructura nueva, todos los paths actualizados en componentes ✅

### 🧹 BLOQUE 2 — Pendiente
- GYG: itinerary VIP 5 Islands, disponibilidad jun-jul, review Red Rocks, underwater scooters publicar, fotos listings
- Booking.com: aprobación Nikola
- Sitio: /transfers/ hoverImages resto de cards, home hero confirmar visual, tour pages revisar
- GBP: posts Coti, 20-30 fotos
- Blue Cave: conseguir fotos reales para reemplazar placeholder

### 🚀 BLOQUE 3 — Google Ads
- Crear cuenta · importar conversión whatsapp_click · 3 ad groups · €15-20/día · Smart Bidding post 15-20 conversiones
- Keywords negativas: jobs, for sale, free, cheap, ferry
- Geo: Hvar + Split + radio · Destino: /landing/*

### 🤖 EN EL RADAR
- n8n: WhatsApp bot, Blue Cave status automático, GBP/Instagram automation
- Segmento US: charter premium, definir producto + página
- Backlinks: travel blogs, Croatia.hr, VisitHvar.hr, Viator

---

## Instrucciones para Claude Code
- Leer CLAUDE.md completo antes de empezar
- `npm run build` al terminar cada tarea — 0 errores. Commit con mensaje descriptivo.
- Mobile-first: 375px → md: → lg:
- Solo `next/image` — cero `<img>` tags
- Solo opacity y transform en animaciones — nunca transition-all
- Redirects en netlify.toml — NO en next.config.mjs
- NUNCA modificar OTA listings sin aprobación Nikola
- Em-dashes y en-dashes prohibidos
- Brand: "MareBoats Hvar" (sin espacio)
- Capacidad: "up to 8" / "Licensed for 12. We cap at 8."
- Mostrar archivo completo antes de cualquier cambio de copy
- Filler prohibido: "premium", "unforgettable", "ultimate", "ideal for", "flagship"
- `lib/image-paths.ts` — legacy sin importar, NO tocar
- objectPosition como prop a TourCardImage — valores por imagen
- Fotos drone: formato `hvar-[location]-drone-2026.jpg`
- **Imágenes: SIEMPRE en `public/images/` — nunca en `public/img/` (ese es solo para logos/icons/SVGs/OG)**
