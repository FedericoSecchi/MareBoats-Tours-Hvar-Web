# MareBoats Tours Hvar — Contexto del Proyecto
**Actualizado: 07 Junio 2026**

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
- `tourSchemaMap`: map por slug con TouristAttraction + Service para los 6 tours. Cada uno tiene offers con precios reales, maximumAttendeeCapacity: 9, availableLanguage, aggregateRating.
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
- /tours/blue-cave-pakleni-islands/: 4 elementos válidos (Breadcrumbs, Empresa local, Organización, Fragmentos de reseñas) ✅
- /rentals/: 5 elementos válidos (Carruseles, FAQ, Empresa local, Organización, Fragmentos de reseñas) ✅

## Arquitectura de páginas — estado al 07/06/2026
- `/rentals/` — página unificada: Boat Rental (con/sin skipper, con/sin licencia) + Water Scooter + FAQ. Es la página SEO principal para keywords de rental. Sección self-drive actualizada 07/06 con 4 tarjetas de embarcaciones con precios reales y keywords SEO optimizadas.
- `/boat-rental/` — eliminada. Redirect 301 → `/rentals/` en netlify.toml.
- `/landing/pre-tour/` — reescrita el 01/06. Ver sección abajo.
- `/hvar-islands-guide/` — página indexada, en sitemap (priority 0.8). 9 destinos con historia + 30 paradas locales + Google Maps links. Ataca keywords: "Hvar islands guide", "Blue Cave what to expect", "Pakleni Islands stops". Incluye OnTourBanner: banner visible solo cuando ?ref=qr — para guests que llegan via QR del barco. Links a tours desde Blue Cave, Red Rocks y Stiniva dentro del accordion.
- `/on-tour/` — ELIMINADA el 05/06. Redirect 301 → `/hvar-islands-guide/` en netlify.toml. El QR hub apunta a `/hvar-islands-guide?ref=qr`.
- `/explore/` — hub principal de contenido. 7 secciones: Where to Eat, What to See, Beaches, Practical Info, FAQ (FAQPage JSON-LD), CTA. Keywords: "things to do in Hvar", "hvar beaches", "hvar travel guide". Inline CTA después de Beaches. Hero card 3 apunta a /tours/. FAQ con preguntas de booking intent.
- `/guide/` — guía pre-tour. Route cards con links a tour correspondiente. Dead code eliminado.
- `/transfers/` — Mapbox Static Images API implementado. Ver sección abajo.
- Nav: Tours → Rentals → Transfers → **Explore** → About

## Cluster SEO — páginas interconectadas
- `/explore/` (hub) → cards hacia `/guide/`, `/hvar-islands-guide/`, `/tours/`
- `/guide/` → link hacia `/hvar-islands-guide/` al final de "Where We Go" + links a tours desde route cards
- `/hvar-islands-guide/` → links a tours desde Blue Cave, Red Rocks, Stiniva + CTA final hacia WhatsApp + /tours/
- `/tours/` → 6ta card "Boat Rental" apunta a `/rentals/`

## QR Hub — /qr/
- Acceso via QR impreso en el barco
- Opción "On Tour" apunta a `/hvar-islands-guide?ref=qr`
- OnTourBanner en `/hvar-islands-guide/` se activa solo con ese param

## Herramientas operativas
- **Vesselio** — app de gestión de reservas que usa Nikola. Fede tiene acceso como Operator.
  - URL: mareboats.vesselio.app · apikey: Fedde123
  - Muestra flota, calendario de reservas, clima en Hvar
  - Uso: referencia operativa (qué barcos están ocupados, cuándo). No conectar al sitio ni a GA4.

## Reglas inamovibles de contenido
- Idiomas a bordo solo aplican cuando Fede es el skipper — NO prometer genéricamente en web ni OTAs
- **Idiomas del equipo: EN + HR + IT + ES + DE** (alemán via Josip) — aplica en feature cards y FAQs del sitio
- Botellas de vidrio: permitidas a bordo
- Comida: permitida, pero se recomiendan restaurantes
- No fumar a bordo
- No hay baño a bordo — guests usan los de restaurantes en paradas
- Formularios de contacto: NO. Solo WhatsApp
- Water Scooter addon: €40/unit — disponible en todos los tours EXCEPTO tours a Vis (isla) y Sunset Cruise. Máx 2h/unit, no recargable a bordo.
- Photo & Video Shoot: €200 — lo hace Fede (drone + underwater + on board). Full gallery post-tour. Disponible en todos los tours privados. Solo cuando Fede está a bordo. Reservar con anticipación — slots limitados.
- NO mencionar año exacto de fundación de MareBoats
- NO mencionar RIB ni mostrar foto del RIB — usar "speedboat" siempre.
- Boat rental sin licencia: solo la Pasara 5hp es legalmente clara. La 20hp se maneja por WhatsApp caso a caso. Copy nunca afirma "no licence needed" para la 20hp.
- Em-dashes (—) y en-dashes (–) prohibidos en copy del sitio — usar coma, punto, dos puntos o reescribir
- **"Lunch not included"** — wording unificado en todo el sitio desde 02/06
- Capacidad máxima: 8 personas por barco. Nunca mencionar 12. Framing: "full-size speedboats, small groups."
- **Brand name unificado: "MareBoats Hvar"** — sin espacio (no "Mare Boats Hvar"). Aplicado en todo el sitio el 04/06.
- Filler phrases prohibidas: "premium", "unforgettable", "ultimate", "ideal for", "flagship"

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

## 🔴 REGLAS INAMOVIBLES — OTAs (establecidas 25/05/2026)

**Nada se cambia en GYG, Booking.com, Viator ni Airbnb sin que Nikola lea y apruebe el texto PRIMERO.**
Flujo obligatorio: Fede redacta → manda por WhatsApp → Nikola aprueba → recién entonces se publica.

**Lección registrada (incidente 25/05):** se modificó el listing VIP 5 Islands sin consultar. Nikola tenía 20 personas reservadas sobre el concepto original. El concepto de un tour es una decisión de negocio, no de copy. Nunca tocar un listing de OTA sin guardar el texto original antes (screenshot o copia).

### Concepto VIP 5 Islands — fuente de verdad (palabras de Nikola, no modificar)
- Salida 10:00 (no 10:30 como la competencia) → evitan multitudes
- Visitan 3 cuevas
- Grupos chicos → mejor experiencia posible
- NO mencionar "RIB" ni mostrar foto del RIB
- Mantener "VIP" en el título

### Reglas de copy GYG (aprendidas mayo 2026)
- "Skipper" > "Tour Guide" en el copy.
- "Hvar Boat Tour" > "From Hvar" como keyword en el título.
- Blue Cave es la keyword estrella — siempre en el título y al inicio de la descripción.
- No combinar conteo de cuevas ("3 caves") con Blue Cave en el título.
- No escribir "contact us directly" en listings.
- GYG permite 3000 chars en full description — usarlos.
- Mencionar stops específicos: Stiniva Bay (Vis), Podstražje Beach, Sea-Monk Cave, Zdrilca (Pakleni), Borče Bay, Dubovica Beach, Red Rocks.
- El espíritu de Nikola: menos tiempo navegando, más tiempo en el agua. Skipper como amigo local, no guía turístico.
- Main listing de GYG es el contenedor — no mencionar privado/compartido ni precio ni duración. Eso va en cada opción.

---

## ✅ ESTADO REAL al 07/06/2026

### GA4
- `whatsapp_click` verificado ✅ — 41 eventos · 24 usuarios únicos (últimos 28 días)
- 286 sesiones · 156 usuarios activos · 30s engagement medio
- Canales: Direct 48.6% · Organic Search 32.9% · Organic Social 6.6% · Referral 6.3%
- Páginas top: / (245 vistas) · /tours/ (84) · /tours/blue-cave-pakleni-islands/ (60) · /rentals/ (52)
- Mercados: US #1 · Croatia · UK · Argentina · Italy · Germany
- Google Ads: luz verde técnica. Pendiente: crear/verificar cuenta + importar conversión.

### Google Search Console
- 45 clics · 1,550 impresiones · CTR 2.9% · Posición media 24.3 (últimos 28 días)
- Keywords oportunidad: "hvar boat rental" (pos 30.1), "rent a boat hvar" (pos 32.7), "hvar boat hire" (pos 35.7)

### Google Business Profile — estado al 07/06/2026
- Verificado · 5.0 ⭐ · 26 reseñas
- Nombre corregido a "MareBoats Hvar" (sin espacio) — aprobado por Google el 07/06
- Descripción actualizada 07/06 (sin em-dashes, keywords integradas)
- 400 interacciones totales (dic 2025–may 2026)
- GBP Maps link: https://maps.app.goo.gl/k84JNBQLvqgZunEX6
- Servicios: cargados
- Pendiente: 20-30 fotos reales (post-shoot) · Q&A (no disponible desde panel desktop ni app mobile — limitación de Google)

### GetYourGuide — mayo 2026
- Revenue: €1,635 · Bookings: 7 · Rating: 5.0 ⭐
- VIP 5 Islands: €1,530 · 6 bookings · Jun 22 SOLD OUT
- Red Rocks: €105 · 1 booking · 0 reviews
- Underwater Scooters: ~70% completo, pendiente prueba + aprobación

### Booking.com — pendiente aprobación Nikola
### Viator — bloqueado por seguro
### Airbnb — bloqueado por Ministerio Turismo Hvar

---

## /landing/pre-tour/ — estado al 04/06/2026

### Mensaje de WhatsApp de Nikola (texto fijo)
```
Hey! 👋 Booking confirmed, looking forward to having you on board.
👉 mareboatshvar.com/landing/pre-tour
Any questions, just message me here.
See you on the water! 🌊
Nikola
```

### Meeting Point
- Coordenadas: 43.1690147, 16.4429617
- Google Maps: https://maps.app.goo.gl/k84JNBQLvqgZunEX6

### Accordion — extra costs y add-ons (estado 04/06)
| Tour | Extra Costs | Add-on |
|---|---|---|
| 5 Islands & Blue Cave (shared) | Blue Cave €24 · Green Cave €12 · Lunch not included (Pakleni o Palmizana) | — (no add-ons en shared) |
| 5 Islands & Blue Cave (private) | Blue Cave €24 · Green Cave €12 · Lunch not included (Pakleni o Palmizana) | Photo & Video Shoot €200 |
| Red Rocks & Pakleni | Lunch not included - restaurants at Pakleni | Water Scooter €40 · Photo & Video Shoot €200 |
| Pakleni Half Day | None | Water Scooter €40 · Photo & Video Shoot €200 |
| Sunset Cruise | None | Photo & Video Shoot €200 |
| Private Charter | Fuel not included | Water Scooter €40 · Photo & Video Shoot €200 |
| Split Transfer | None | — |

---

## /rentals/ — estado al 07/06/2026
- Tipografía body: `text-base` (16px) unificado
- On Board section: cards (una fila por item, badge status izquierda)
- Rental Rules section: tabla (stacked mobile / 2 columnas desktop)
- Water Scooter card: centrada con `mx-auto`
- Sección "With Skipper": desde €400, incluye skipper local, ruta custom, fuel, agua, snorkel, hasta 9 personas
- Sección self-drive "Boat Rental Hvar": grid 2x2 con 4 embarcaciones con precios reales, badges de licencia y keywords SEO optimizadas (07/06)
  - Subtítulo sección: "No licence? No problem. Our Pasara is available without a boating licence — perfect for a day around the Pakleni Islands."
  - Keywords integradas: "no licence needed", "small boat rental Hvar", "speedboat rental Hvar"
  - Badge PASARA 5HP: "NO LICENCE NEEDED · LEGAL"
  - Badge PASARA 20HP: "ASK US ABOUT LICENCE"
  - Badges Speedboats: "LICENCE REQUIRED"
- FAQ rentals: actualizado con precios Pasara y política de fuel por embarcación
- Schema JSON-LD: Service + BreadcrumbList + FAQPage (no tocar)

---

## /transfers/ — estado al 02/06/2026

### Mapbox Static Images API — IMPLEMENTADO ✅
- `lib/mapbox.ts` — función `getMapboxStaticUrl(from, to, width, height, via?)` con Google Polyline encoding
- Estilo: `mapbox/satellite-streets-v12`
- Token: `NEXT_PUBLIC_MAPBOX_TOKEN` en Netlify env vars
- Fallback: `div` oscuro si el token no está seteado
- `RouteSvg` eliminado completamente
- `hoverImage` field intacto — renderiza foto real al asignar

### Rutas y waypoints náuticos reales (WGS84)
Todos parten de Hvar Port: `{ lon: 16.442975, lat: 43.169008 }`

| Card | mapTo | mapVia (en orden) |
|---|---|---|
| Split | lon: 16.437864, lat: 43.507639 | PAKLENI_EXIT(16.348409, 43.191539) → (16.403727, 43.330417) → (16.408034, 43.491876) → (16.365462, 43.505258) |
| Split Airport | lon: 16.301891, lat: 43.529181 | PAKLENI_EXIT → (16.403727, 43.330417) → (16.408034, 43.491876) → (16.365462, 43.505258) |
| Brač | lon: 16.657026, lat: 43.261500 | (16.352940, 43.189754) → (16.364804, 43.211134) → (16.513733, 43.246498) → (16.659022, 43.254864) |
| Korčula | lon: 17.136184, lat: 42.959341 | KORCULA_TURN(16.487209, 43.138280) → (16.65, 43.08) → (16.90, 43.00) |
| Biševo | lon: 16.184168, lat: 43.062260 | (16.439551, 43.164991) → (16.441916, 43.159709) → (16.458060, 43.152451) → (16.193734, 43.061615) |
| Yacht Taxi | lon: 16.393924, lat: 43.160106 | sin waypoints (ruta corta) |

### Precios transfers (estado 04/06)
- Split ciudad: €500
- Split Airport: €600 (incluye taxi corto del terminal al muelle — no incluido en el precio)
- Duración aprox: 1:00-1:10h

---

## /about/ — estado al 03/06/2026
- Fotos crew: `public/img/josip-skipper.jpg` y `public/img/fede-skipper.jpg` — actualizadas 03/06
- Crew cards: `aspect-[3/4]` (portrait), `objectPosition` individual por persona
- "The barrel" explicado: "In Hvar, tour operators work from wooden barrels on the harbour. On the day of your tour, come find us there and we'll take you to the boat."
- Passenger copy: "Up to 8 passengers per boat." + párrafo separado: "Full-size speedboats, small groups. We don't fill them to the limit. That's the whole idea."
- Sin RIBs, sin em-dashes, sin en-dashes en toda la página

---

## Copy — "Lunch not included" unificado (02/06)
Aplicado en `lib/tours-data.ts` + `app/landing/pre-tour/page.tsx`:
| Tour | Wording |
|---|---|
| 5 Islands | "Lunch not included - restaurants available at Pakleni or Palmizana" |
| Red Rocks & Pakleni | "Lunch not included - restaurants available at Pakleni" |
| Pakleni Half Day | "Lunch not included - restaurants available at Pakleni" |
| Private Charter | "Lunch not included - restaurants available at stops along your route" |
| Sunset / Transfer | Sin mención |

---

## Copy — PHOTO_VIDEO_ADDON (constante unificada — 04/06)
Definida en `lib/tours-data.ts` como constante `PHOTO_VIDEO_ADDON`:
> "+Photo & Video Shoot - €200, on request (when Fede is on board). Drone, underwater and on-board footage. Full gallery after the tour. Book in advance - slots are limited."

Aplica en todos los tours privados. NO aplica en shared tour del 5 Islands.

---

## Auditoría copy site-wide — 04/06/2026

### Cambios aplicados (commits 008a64 → aec1fe)

**Capacidades:**
- "up to 8" → "up to 9" en features, FAQs, rentals, Red Rocks, water scooter card, pre-tour accordion (revertido a 8 el 07/06 — decisión Nikola)
- "up to 10" eliminado de 5 Islands hero y tour cards
- Shared vs private reconciliado en FAQs — texto diferencia explícitamente ambos modos

**Idiomas:**
- Alemán agregado en feature card "Speaks Your Language" y en FAQ de idiomas

**Em-dashes:**
- Limpiados en `app/`, `lib/`, `components/` — 34 archivos via sed
- `&mdash;` HTML entity en rentals también corregida

**Brand name:**
- "Mare Boats Hvar" → "MareBoats Hvar" en todo el sitio (layout.tsx, [slug]/page.tsx, lib/seo.ts, og:siteName, meta author/creator/publisher)
- Title tags duplicados resueltos: sufijos `| MareBoats` eliminados del titleMap para dejar que el layout template los agregue solo

**Title tags corregidos (titleMap en [slug]/page.tsx):**
- blue-cave-pakleni-islands: 'Hvar Boat Tour: 5 Islands, Blue Cave & 4 Beaches'
- red-rocks-pakleni-islands: 'Red Rocks & Pakleni Islands Boat Tour from Hvar'
- pakleni-islands: 'Pakleni Islands Half Day Boat Tour from Hvar'
- sunset-cruise: 'Sunset Cruise Hvar'
- private-boat-charter: 'Private Boat Charter Hvar'
- split-airport-transfer: 'Split Airport to Hvar by Speedboat'

**Water scooter:**
- Eliminado del 5 Islands (decisión de Nikola: tour va a Vis, scooter solo disponible en Pakleni)
- Eliminado del Sunset Cruise
- "Life jacket included" eliminado de bullets del water scooter (no tiene sentido bajo el agua)

---

## UX/Conversión audit — 05/06/2026 (commits 28ebd72, 0f89347, f6672cc)

### /explore/
- Hero card 3: era anchor link a sí misma → ahora apunta a /tours/
- Inline CTA: insertado entre Beaches y Practical Info (grid 2 col md+, stacked mobile). WhatsApp primario + "See all tours" secundario. Label GA4: `explore_beaches_cta`
- FAQ: "Is Hvar worth visiting?" y "What is Hvar known for?" reemplazadas por preguntas de booking intent: "How far in advance should I book?" y "Can I book a private tour for my group?"

### /guide/
- Route cards: cada ruta tiene link "See tour details" al tour correspondiente (Blue Cave → /tours/blue-cave-pakleni-islands/, Red Rocks → /tours/red-rocks-pakleni-islands/)
- Dead code eliminado: bloque RULES & RENTALS comentado (28 líneas) removido

### /hvar-islands-guide/
- Links a tours desde accordions: Blue Cave, Red Rocks, Stiniva tienen "See this tour →" pill link al tour correspondiente
- OnTourBanner: componente client que muestra banner solo si ?ref=qr

### /on-tour/ → ELIMINADA
- Redirect 301 /on-tour/* → /hvar-islands-guide/ en netlify.toml
- /qr/ actualizado: opción "On Tour" apunta a /hvar-islands-guide?ref=qr
- OnTourBanner en /hvar-islands-guide/ maneja la experiencia del guest en el barco

---

## SEO / GEO — estado al 07/06/2026

### Schema markup implementado (06/06)
- `lib/schema.ts`: businessSchema, websiteSchema, tourSchemaMap (6 tours), rentalServiceSchema, rentalBreadcrumbSchema
- Validado con Google Rich Results Test — 0 errores en todas las páginas testeadas
- reviewCount: 26 (actualizado mismo día)

### GBP optimizado (07/06)
- Nombre corregido: "MareBoats Hvar"
- Descripción reescrita: keywords integradas, sin em-dashes
- Servicios cargados
- Q&A: no disponible desde panel — limitación de Google para esta categoría

### Keywords oportunidad (GSC)
- "hvar boat rental" pos 30.1
- "rent a boat hvar" pos 32.7
- "hvar boat hire" pos 35.7
- "boat rental hvar no licence" — keyword integrada en /rentals/ el 07/06

### Próximas palancas SEO/GEO (en orden de prioridad)
1. Fotos reales en GBP, sitio y GYG (post-shoot)
2. Backlinks earned media: contactar travel blogs que rankean "best boat tours hvar"
3. Contenido GEO: página/sección que responda "how much does a Blue Cave tour cost from Hvar" y queries similares — estas son las que citan las IAs

---

## PLAN UNIFICADO — Estado al 07/06/2026

### ✅ BLOQUE 0 — CERRADO
### ✅ SEO Website — CERRADO 31/05
### ✅ /landing/pre-tour/ — CERRADO 01/06
### ✅ SEO Cluster — CERRADO 01/06
### ✅ Sitio — fixes 02/06 — CERRADO
### ✅ Mobile Audit — CERRADO 03/06
### ✅ Copy Audit site-wide — CERRADO 04/06
### ✅ UX/Conversión audit cluster Explore — CERRADO 05/06
### ✅ Schema markup completo — CERRADO 06/06
### ✅ GBP optimizado — CERRADO 07/06
### ✅ Precios self-drive rentals — CERRADO 07/06

### 📸 BLOQUE 1 — Shoot (drone DJI Mavic 4 Pro)
- Hero del sitio, fotos por tour, barco en muelle, meeting point barrel, Nikola y Fede al timón
- 15-20 sueltas para GBP/OTAs
- Filmar prueba underwater scooters con Nikola
- Post-shoot: asignar `hoverImage` en /transfers/ + actualizar fotos hero/tour pages/OTAs

### 🧹 BLOQUE 2 — Cerrar lo que está al 90%
**GYG:**
- [ ] Cargar itinerary VIP 5 Islands (error GYG — reintentar)
- [ ] Aumentar disponibilidad junio-julio
- [ ] Pedir review al guest de Red Rocks
- [ ] Underwater Scooters: terminar y publicar
- [ ] Post-shoot: actualizar fotos listings

**Booking.com:**
- [ ] Aprobación Nikola → publicar

**Sitio:**
- [ ] /about: cerrar con fotos shoot + historia Nikola
- [ ] /transfers/: hoverImage con fotos reales (post-shoot)

**GBP:**
- [ ] Coti: posts mayo-junio pendientes
- [ ] Post-shoot: 20-30 fotos

### 🚀 BLOQUE 3 — Google Ads
- [ ] Crear/verificar cuenta Google Ads
- [ ] Importar conversión `whatsapp_click` desde GA4
- [ ] 1 campaña · 3 ad groups: Boat Tours / Blue Cave / Boat Rental
- [ ] €15-20/día · Smart Bidding después de 15-20 conversiones
- [ ] Keywords negativas: jobs, for sale, free, cheap, ferry, ciudades distinto de Hvar
- [ ] Geo: Hvar + Split + radio
- [ ] Destino: /landing/* (no la home)
- [ ] Meta Ads: NO ahora — fase 2

### 🇺🇸 EN EL RADAR — Segmento US / alto ticket
US es mercado #1 en GA4. Charter premium varios miles de euros. Definir producto + precio + página. Después de Bloques 0-3.

### 🔗 EN EL RADAR — Backlinks / Earned Media
- Contactar travel blogs que rankean "best boat tours hvar" — ofrecerles tour gratis a cambio de review + link
- Directorios: Croatia.hr, VisitHvar.hr, TripAdvisor listing separado
- Resolver Viator (bloqueado por seguro) — DA alto, backlink valioso
- Reddit / TripAdvisor Q&A: respuestas genuinas de Nikola/Josip en r/croatia, r/travel

---

## Instrucciones para Claude Code
- Leer CLAUDE.md completo antes de empezar
- `npm run dev` para ver estado local en localhost:3000
- `npm run build` al terminar cada tarea — build 0 errores
- Commit al terminar cada tarea con mensaje descriptivo
- Mobile-first SIEMPRE — primero 375px, luego md:, lg:
- Solo `next/image` — cero `<img>` tags
- Solo opacity y transform en animaciones — nunca transition-all
- SEO metadata en cada página nueva
- Redirects van en netlify.toml — NO en next.config.mjs
- NEXT_PUBLIC_ env vars son build-time — hardcodear Measurement ID en layout.tsx
- NUNCA modificar listings de OTAs desde el código — eso se hace a mano con aprobación de Nikola
- Em-dashes (—) y en-dashes (–) prohibidos en todo copy del sitio
- Brand name: siempre "MareBoats Hvar" (sin espacio)
- Capacidad: siempre "up to 8" por barco — nunca 9, nunca 10
- Antes de cualquier cambio de copy: mostrar archivo completo primero, sin modificar
- No usar filler phrases: "premium", "unforgettable", "ultimate", "ideal for", "flagship"
