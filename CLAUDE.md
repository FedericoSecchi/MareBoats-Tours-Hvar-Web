# MareBoats Tours Hvar — Contexto del Proyecto
**Actualizado: 21 Julio 2026**

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
- **Juan** — skipper nuevo, en entrenamiento con Fede. Mencionado en reviews pero sin perfil público en el sitio.
- **Coti** — diseño, redes sociales, posts GBP, skipper, abre el barril
- **Mati** — skipper, ventas en el barril, apoyo en reparaciones
- **Luka** — skipper, logística (hielo, bebidas, combustible, lavado de alquileres)
- **Toni** — skipper, apertura y cierre de la flota
- **Sirius/Circus** — ex-tripulación, ya no trabaja en MareBoats. No mencionar en copy.

## La flota — CONFIRMADO por Nikola 29/05
- 4 barcos en total (corregido de 5)
- **Blue Mariner**: cómodo 5 · máximo 8 personas
- **Red Mariner**: cómodo 5 · máximo 8 personas
- **Jolly**: cómodo 6 · máximo 8 personas
- **Clubman**: cómodo 6 · máximo 8 personas
- Motores: 150-300hp
- Equipamiento: sun canopy, sistema de música, conservadora, snorkel y máscaras
- Tours privados (grupo propio) o compartidos (sale cuando se llena). Grupos grandes: dos speedboats navegando juntos. Máximo 8 por bote, máximo 2 botes = 16 personas (confirmado Nikola 13/07, corrige el 14 que figuraba antes).
- **NO mencionar "RIB" en copy** — decisión consciente de Nikola. Usar "speedboat" siempre.
- El skipper no es un guía, pero puede ir contando y actuando de guía durante el tour.

## Flota self-drive rental — precios por día completo (actualizado 21/07/2026)
| Embarcación | HP | Precio/día | Máx personas | Fuel | Licencia | Depósito |
|---|---|---|---|---|---|---|
| Pasara | 5hp | €150 | 5 | Incluido | No requerida (legal hasta 5hp en Croacia) | — |
| Pasara | 20hp | €200 | 5 | Incluido | Consultar por WhatsApp | — |
| Speedboat | 60hp | €290 | 5 | Incluido | Requerida | — |
| Speedboat Mariner | 150hp | €400 | 8 | Extra (full-in/out) | Requerida | €300 solo efectivo |

Cambios 21/07: Pasara 5hp €120 → €150. Mariner 150hp €350 → €400 (aumento deliberado para bajar volumen de rental y reducir riesgo operativo). Capacidades máximas confirmadas por Nikola.

Depósito Mariner 150hp: €300, **solo efectivo**, devuelto al terminar. Tiene que estar visible en la web y en el quote, nunca ser una sorpresa en el muelle: un cliente que llega sin efectivo no alquila y deja una review de una estrella.

Nota legal: En Croacia, operar sin licencia es legal solo hasta 5HP (3.7 kW). La Pasara 20hp está en zona gris — Nikola resuelve caso a caso por WhatsApp. El copy dice "ask us about licence" para la 20hp, nunca afirmar "no licence needed".

### 🔴 BLOQUEANTE — Pasara 5hp "no licence needed"
Nikola pidió sacar el texto "no licence needed" de la Pasara 5hp alegando "legal reason", y preguntó si se podía "esconder". **No se ejecutó y no se ejecuta hasta tener la razón concreta.**

Razonamiento: esconderlo es la peor opción de las tres, porque conserva el riesgo legal y pierde la keyword al mismo tiempo. O es legal y se dice fuerte, o no lo es y se saca. "Rent a boat without licence Hvar" es la keyword no-branded que más tráfico de rental trae, y la Pasara 5hp es el único producto sin licencia del catálogo: es la puerta de entrada a toda la categoría.

Pregunta pendiente a Nikola: ¿el motivo es la ley náutica (bajo 5HP es legal en Croacia, se queda) o es el seguro / la licencia de charter del negocio (se saca el mismo día, sin discusión)?

Hasta que responda, la web queda como está.

## Stack técnico
- Next.js 14 + Tailwind CSS + TypeScript — `output: 'export'` (static export)
- App Router en /app — componentes activos en /components/ui/ y /components/sections/
- **NUNCA tocar /src/components/** — es código legacy
- Hosting: Netlify — deploy automático en cada push a main
- Redirects: netlify.toml (NO usar next.config.mjs para redirects en runtime — static export)
- Herramienta de código: Claude Code (reemplazó a Cursor desde 23/05)
- NEXT_PUBLIC_ env vars son build-time — hardcodear Measurement ID directamente en layout.tsx

## 💶 Precios — fuente única de la verdad (12/07/2026)

**`lib/pricing.ts` es la ÚNICA fuente de precios del proyecto. Cero precios hardcodeados en cualquier otro archivo.**

Antes de este refactor los precios vivían duplicados en 11 archivos y ya se habían desincronizado (Blue Cave decía €24 en 4 archivos y €20–25 en 2; `/tours/` mostraba Red Rocks a €400 privado y omitía el €85/persona shared).

### Cómo funciona
- Los precios se guardan como **números estructurados**, nunca como strings de display: `sharedPerPerson`, `privateHalfDay`, `privateFullDay`, `private`, `onRequest`, `fuelIncluded`.
- Los strings los **generan** formatters, así el string corto de una card y el largo de la tour page salen del mismo número y no pueden divergir:
  - `formatPriceShort(slug)` — cards de índice
  - `formatPriceFull(slug)` — tour pages
  - `formatPriceSchema(slug)` — offers del JSON-LD (mantiene `UnitPriceSpecification` con `unitText: 'per person'`)
  - `getLowestPrice(slug)` · `getPricingOptions(slug)`
- Constantes: `TOUR_PRICES`, `RENTAL_SELF_DRIVE`, `RENTAL_WITH_SKIPPER_FROM`, `TRANSFER_PRICES`, `SCOOTER_RENTAL`, `WATER_TAXI_PRICES`, `SUNSET_TIERS`, `SUNSET_WINE_EXTRA`, `EXTRAS` (blueCave: 24, greenCave: 15), `ADDONS` (scooter: 40, photoVideo: 200).
- Helpers de precio variable: `getSunsetTier(pax)` y `getWaterTaxiPrice(zone, pax)`. El sunset y el water taxi no tienen precio único: dependen de la cantidad de gente.

### Archivos que consumen pricing.ts (11)
`lib/tours-data.ts` · `lib/schema.ts` · `lib/faqs.ts` · `lib/guide-content.ts` · `app/tours/page.tsx` · `app/rentals/page.tsx` · `app/transfers/page.tsx` · `app/landing/pre-tour/page.tsx` · `app/landing/rental/page.tsx` · `components/sections/IslandStopsAccordion.tsx` · `app/crew-9f3kq2/CrewDashboard.tsx`

### Regla de seguridad — INAMOVIBLE
**Todo lo que entra al build estático es público.** Con `output: 'export'` los datos terminan en un chunk JS en `/_next/static/` que se sirve sin ninguna protección de ruta. Un `noindex` o un password en la página NO protegen nada.

**NUNCA meter en `pricing.ts` ni en ningún archivo del build: costos, márgenes, precios netos, comisiones OTA, descuentos internos.** Si algún día hace falta, va detrás de una Netlify Function o Supabase con auth, nunca en el bundle.

### Alcance real
`pricing.ts` es fuente única para **precios**, no para contenido. Descripciones SEO, includes/notIncludes, horarios y keywords siguen en `tours-data.ts`, `guide-content.ts` y JSX. Deuda conocida: los **horarios de salida** (Blue Cave 10:00, Red Rocks 09:00/11:00/14:00) están duplicados entre `/landing/pre-tour/`, `tours-data.ts` y el crew dashboard. Candidatos a un futuro `lib/operations.ts`.

### ⚠️ Pendiente Nikola
Blue Cave entrance normalizada a **€24** en todo el sitio (`guide-content.ts` decía €20–25 y se corrigió). El precio lo pone el operador de la cueva, no MareBoats. **Confirmar con Nikola que sigue en €24 esta temporada.**

## 📋 Catálogo de precios — estado 21/07/2026

Todos estos valores viven en `lib/pricing.ts`. Esta tabla es referencia humana, no fuente.

### Tours
| Tour | Precio | Duración | Notas |
|---|---|---|---|
| Red Rocks & Pakleni | €85/persona shared · €400 privado half-day · €500 privado full-day | 4h / 6h | — |
| 5 Islands / Blue Cave | €130/persona shared · €700 privado | 7h, sale 10:00 | — |
| Pakleni Islands | €300 privado | 3h | Dejó de ser "on request" el 13/07 |
| Sunset Cruise | por tramos, ver abajo | 2h | Incluye vino, agua y fruta |
| Private Charter | €500 + fuel | día completo | Fuel aparte a propósito |
| Zlatni Rat, Brač | €600 privado | 6h | Producto nuevo 21/07 |

### Sunset Cruise — precio por tramos
| Personas | Precio | Vino incluido |
|---|---|---|
| 1-4 | €250 | 1 botella |
| 5-6 | €350 | 2 botellas |
| 7-8 | €500 | sin especificar |
| 9-16 | €1000 (2 botes) | sin especificar |

Botella extra: €30. Incluye siempre agua y fruta fresca.

Los tramos de 5 y 7 personas los redondeamos hacia arriba (5 paga tramo 5-6, 7 paga tramo 7-8). Es asunción nuestra, no confirmada por Nikola, y está marcada con comentario en el código.

Para 7-8 personas Nikola no dijo cuántas botellas van, así que el copy **no afirma una cantidad**. No inventar.

**El tramo 9-16 a €1000 fijo es intencional, no un bug.** Un grupo de 9 son dos botes de 5 y 4, que por tramos individuales daría €600. Cobramos €1000 igual porque Nikola dijo explícitamente que no quiere grupos grandes y que si van, pagan precio completo. Es una barrera de entrada. Además, cómo se reparten 9 personas (5+4 u 8+1) lo decide Nikola en el muelle, no un algoritmo, así que un precio fijo es más defendible que uno calculado.

### Water taxi (dejó de ser "on request" el 21/07)
| Zona | Base | Persona extra |
|---|---|---|
| Yates fondeados frente al puerto | €50 hasta 5 | €10 |
| Pakleni Islands | €100 hasta 5 | €20 |

Máximo 8 personas (asunción, marcada en el código). **El water taxi NO tiene meeting point**: vamos nosotros al barco del cliente. El quote cierra pidiendo posición y hora por WhatsApp, nunca mandando al barril del puerto.

### Transfers
| Ruta | Precio |
|---|---|
| Split ciudad ↔ Hvar | €500 |
| Split Airport ↔ Hvar | €600 |
| Stari Grad | €400 one way |
| Brač | €450 one way · €800 ida y vuelta |
| Korčula · Biševo | on request (pendiente Nikola) |

### Extras y add-ons
| Ítem | Precio | Nota |
|---|---|---|
| Blue Cave entrance | €24/persona | Obligatoria, se paga en el lugar |
| Green Cave entrance | €15/persona | **Opcional**, se paga en el lugar |
| Underwater Scooter | €40/unidad | Por unidad, NO por persona |
| Photo & Video | €200 | Solo cuando Fede está a bordo |
| Botella extra de vino (sunset) | €30 | — |

Green Cave subió de €12 a €15 el 13/07 y pasó a ser opcional. Que sea opcional hay que decirlo en el copy: listada como "not included" a secas parece inevitable y sube el precio percibido del tour.

### Convoy — confirmado por Nikola 13/07
- Máximo **8 por bote, sin tolerancia**. 9 personas ya son 2 botes.
- Precio exactamente **doble**, sin descuento por volumen.
- Máximo **2 botes = 16 personas** (el "14" que figuraba antes era un dato viejo).
- Aplica solo a **privados**. Los shared son por persona y no se duplican.
- Nikola autorizó un 10% de descuento para grupos de 9-10 pero **NO lo quiere ofrecer**. Es una herramienta suya para cerrar una venta, se aplica a mano. **NUNCA escribirlo en la web ni en el crew dashboard**: el dashboard es estático, o sea público de hecho, y si un cliente lo ve lo va a pedir siempre.
- Copy público: "two boats sailing together", nunca "convoy" (suena militar).

### 🐕 Pet friendly
MareBoats acepta perros a bordo. Casi ningún operador de Hvar lo publicita y la competencia por "dog friendly boat tour Hvar" es casi nula. Es un filtro absoluto: el que viaja con perro busca eso específicamente y reserva con el primero que lo dice.

Escribirlo como frase natural ("Dogs are welcome on board. Let us know when you book."), no como badge tipo Booking.

## Schema markup — implementado 06/06/2026
Archivo central: `lib/schema.ts`

### Schemas globales (app/layout.tsx)
- `businessSchema`: @type ["LocalBusiness", "TouristAttraction"] · name "MareBoats Hvar" · coordenadas 43.1690147, 16.4429617 · reviewCount: 26 · rating 5.0 · availableLanguage [EN, HR, DE, ES, IT] · openingHours mayo-septiembre · priceRange "€€"
- `websiteSchema`: @type WebSite

### Schemas por página
- `tourSchemaMap`: map por slug con TouristAttraction + Service para los 6 tours. Cada uno tiene offers con precios reales, maximumAttendeeCapacity: 8, availableLanguage, aggregateRating.
- `rentalServiceSchema` + `rentalBreadcrumbSchema`: Service + BreadcrumbList en /rentals/
- BreadcrumbList en todas las tour pages

### Precios en schema — desde 12/07/2026 salen de `lib/pricing.ts` vía `formatPriceSchema()`
No hardcodear offers en schema.ts. Valores actuales:

| Slug | Precio |
|---|---|
| blue-cave-pakleni-islands | €130/persona (shared) · €700 privado |
| red-rocks-pakleni-islands | €85/persona (shared) · €400 privado half-day · €500 privado full-day |
| pakleni-islands | €300 privado, 3 hrs |
| sunset-cruise | desde €250 (por tramos) |
| private-boat-charter | €500 + fuel |
| brac-zlatni-rat | €600 privado, 6 hrs |
| yacht-sailboat-taxi | desde €50 (base + persona extra) |
| rentals | desde €500 (con skipper) |

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

## 🔒 /crew-9f3kq2/ — panel interno de precios (12/07/2026)

Página de precios para el equipo de ventas (Nikola, Josip, skippers). Lee de `lib/pricing.ts`. Sin login, sin backend, sin datos sensibles.

- Ruta: `app/crew-9f3kq2/page.tsx` + `CrewDashboard.tsx` (`'use client'`)
- **El slug es random a propósito. NO cambiarlo por algo legible** (`/staff`, `/admin`, `/prices` están en todas las wordlists de bots).
- Contenido: buscador, filtros (All/Tours/Rentals/Transfers), card por servicio con precios, capacidad, includes, extras, add-ons, licencia. Header fijo con reglas operativas (meeting point, "speedboat" nunca "RIB", Pasara 20hp "ask us about licence").
- **Quote builder** por card: modo (shared/private/half/full), contador de pax o días, unidades de scooter, date picker, total en vivo, botón "Copy Quote" → mensaje en inglés listo para pegar en WhatsApp.
- Reglas del quote: privados NO multiplican por pax. Extras de cueva (Blue €24, Green €12) van listados aparte, **nunca sumados al total**. Scooter es €40 **por unidad**, no por persona. Cierra siempre con meeting point.
- Campos dedicados para el copy del quote: `quoteName`, `quoteIncluded`, `quoteNotIncluded`. Escritos a mano, **no procesar copy con regex** (un `clean()` con regex mutiló "Snorkel gear (limited)" → "snorkel gear").

### Invisibilidad — checklist
- `metadata.robots: { index: false, follow: false, nocache: true }`
- Header `X-Robots-Tag = "noindex, nofollow"` para `/crew-9f3kq2/*` en `netlify.toml`
- Excluida de `app/sitemap.ts`
- **NO listar en robots.txt** — poner la ruta ahí la publica, robots.txt lo lee cualquiera
- Cero links desde el sitio público
- `rel="noopener noreferrer"` en todo link externo (si no, el header `Referer` filtra la URL)

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

## ✅ ESTADO REAL al 02/07/2026

### GA4
- `whatsapp_click`: 41 eventos · 24 usuarios únicos (últimos 28 días)
- 286 sesiones · 156 usuarios · 30s engagement. US #1, Croatia, UK, AR, IT, DE.
- Google Ads: pendiente crear cuenta + importar conversión.

### GSC
- 45 clics · 1,550 impresiones · CTR 2.9% · pos 24.3
- Keywords: "hvar boat rental" pos 30.1, "rent a boat hvar" pos 32.7, "hvar boat hire" pos 35.7

### GBP — estado al 02/07/2026
- Verificado · 5.0 ⭐ · ~90+ reseñas (crecimiento activo toda la temporada)
- Nombre y descripción actualizados 07/06.
- Pendiente: 20-30 fotos reales, Q&A.

### GYG — mayo 2026
- Revenue: €1,635 · Bookings: 7 · Rating: 5.0 ⭐
- VIP 5 Islands: €1,530 · 6 bookings · Jun 22 SOLD OUT
- Red Rocks: €105 · 1 booking

### Booking.com — pendiente aprobación Nikola
### Viator — bloqueado por seguro
### Airbnb — bloqueado por Ministerio Turismo Hvar

---

## GBP Reviews — Sistema y Estado

### Reglas inamovibles
- Respuestas SIEMPRE en inglés, sin importar el idioma de la review
- Keywords integradas naturalmente — nunca forzadas
- Tono humano, directo. Sin filler turístico.
- No confirmar nombres de lugares cuando hay ambigüedad legal (ej: "la cueva" en vez de "Dubovica cave" si el guest la llamó Blue Cave)
- Rental sin skipper: si hay queja por condiciones de mar, redirigir sutilmente a tours con skipper sin contradecir al reviewer directamente

### Keywords por nivel de impacto SEO
**Nivel 1 — identidad (máximo peso)**
- MareBoats Hvar, Hvar

**Nivel 2 — tipo de servicio**
- private boat tour Hvar, boat tour Hvar, speedboat Hvar, boat rental Hvar, skipper

**Nivel 3 — productos específicos (long-tail)**
- Blue Cave, Red Rocks, Pakleni Islands, Dubovica Beach, secret cave

**Nivel 4 — intención/calidad**
- worth every euro, best tour in Hvar, private / small group, highly recommend

### Estado reviews al 02/07/2026
- 90+ reviews · 5.0 ⭐ · crecimiento sostenido durante temporada
- Umbral 50 cruzado ✅ — perfil establecido ante Google
- Umbral 100 en camino — estimado julio/agosto 2026
- Efecto ranking: reviews actuales impactan posición en Maps con 4-8 semanas de delay

### Por qué Google filtra reviews auténticas
El algoritmo anti-spam es agresivo. Triggers comunes que eliminan reviews reales:
- Muchas reviews en pocas horas (patrón de compra de reviews aunque sean auténticas)
- Reviewers con perfil nuevo ("0 opiniones")
- Múltiples reviews desde misma red/ubicación
- Texto similar entre reviews del mismo día (van en el mismo barco)
No hay forma de apelar efectivamente. Mitigación: escalonar el pedido post-tour, pedir que usen datos móviles propios.

### Patrón de respuesta por tipo
- **Review larga con keywords**: responder con 2-3 keywords específicas, personalizar con lo que menciona
- **Review corta genérica**: respuesta corta, agregar 1-2 keywords naturales
- **Menciona nombre del skipper**: incluirlo en la respuesta
- **Local Guide (peso alto)**: respuesta más trabajada, siempre
- **Review negativa**: empática pero firme, dejar contexto claro para quien la lee después

### Skippers mencionados en reviews (para personalizar respuestas)
- **Fede / Federico / Frederico** — skipper principal, más mencionado
- **Nikola** — fundador, skipper ocasional, gestiona WhatsApp/booking
- **Josip** — head skipper, muy querido
- **Juan** — skipper nuevo en entrenamiento, aparece en reviews de junio 2026

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
| 5 Islands shared | Blue Cave €24 · Green Cave €15 (opcional) · Lunch not included | — |
| 5 Islands private | Blue Cave €24 · Green Cave €15 (opcional) · Lunch not included | Photo & Video €200 |
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
- Stari Grad: €400 one way · Brač: €450 one way, €800 ida y vuelta (21/07)
- Korčula y Biševo: siguen on request, pendiente Nikola

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

## PLAN UNIFICADO — Estado al 02/07/2026

### ✅ CERRADOS
- Bloque 0, SEO Website, /landing/pre-tour/, SEO Cluster, fixes 02/06, Mobile Audit, Copy Audit, UX/Conversión, Schema markup, GBP, Precios self-drive, /conditions/, Copy 07/06, Session 07/06 noche, Session 08/06
- **Fuente única de precios + crew dashboard — CERRADO (12/07)**: `lib/pricing.ts`, 11 archivos refactorizados, verificación 0 divergencias, `/crew-9f3kq2/` en producción ✅
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

### 🔜 Pendiente inmediato (21/07)

**Bloqueantes (esperando a Nikola)**
- 🔴 **Pasara 5hp**: cuál es la "legal reason" concreta. Ley náutica → se queda. Seguro o licencia de charter → se saca el mismo día. No se toca nada hasta la respuesta.
- Confirmar tramo sunset 9+ a €1000 fijo (recomendación: dejarlo, es barrera de entrada)
- Rango realista de fuel para el Private Charter: un día tipo Pakleni vs una corrida larga a Vis. Sin un número el cliente no puede decidir y se va al tour de precio cerrado.
- Confirmar tramos sunset de 5 y 7 personas (hoy redondeamos hacia arriba, es asunción nuestra)
- Cuántas botellas van para 7-8 personas
- Precios de Korčula y Biševo (últimos dos "on request" del catálogo)
- Confirmar Blue Cave entrance sigue en €24

**Ejecutable**
- Pasar link `/crew-9f3kq2/` a Nikola y Josip por WhatsApp (explicar qué es, no compartir)
- Probar Copy Quote en celular con datos móviles
- Página propia para Zlatni Rat: hoy es solo una línea de precio, pero es de las playas más buscadas de Croacia y no competimos por nada de eso
- Vender bien el Private Charter: hoy es "€500 + fuel" al lado de un Red Rocks full-day de "€500 con fuel incluido", o sea parece el mismo producto pero peor. El fuel aparte no es una desventaja, es la consecuencia de elegir vos la ruta. Hay que decirlo, no dejarlo como letra chica.

**Deuda técnica**
- Horarios de salida: unificar en `lib/operations.ts` (hoy duplicados en 3 archivos)
- `if (id === 'brac-zlatni-rat')` hardcodeado en el crew dashboard para imprimir la duración. Reemplazar por un campo opcional `quoteDuration` en el servicio.

### 🤖 EN EL RADAR
- n8n: WhatsApp bot, Blue Cave status automático, GBP/Instagram automation
- Segmento US: charter premium, definir producto + página
- Backlinks: travel blogs, Croatia.hr, VisitHvar.hr, Viator

---

## 👥 Organización interna del equipo — Temporada 2026 (20/07/2026)

Aprobado por Nikola el 19/07/2026. Esto es organización operativa interna, **no es copy público** y no va al sitio.

### Equipo completo y roles

| Persona | Rol | Responsable de |
|---|---|---|
| **Nikola** | Founder / Sales | Ventas por teléfono 100%, queda libre para eso. Palabra final en precios, OTAs y compras grandes. Backup de supervisión de cierre. |
| **Fede** | Manager / Operations / Backup skipper | Contrataciones, personal, organización de la empresa. Web, SEO, Ads, sistemas. Eléctrica y audio de la flota. Entrega y recepción de alquileres. Formación **técnica** de skippers nuevos. Supervisión de cierre (lee reportes, no camina los barcos). Navega si falta skipper. |
| **Jozo (Josip)** | Founder / Head Skipper | Estándar en el agua: rutas, seguridad, trato con el huésped. Formación **humana y de servicio** de skippers nuevos. Clubman 26: responsable único. Prepara las underwater scooters en el Jolly. |
| **Coti** | Skipper / Digital & Media / Sales | Abre el barril a la mañana y vende. Social media, GBP, diseño, contenido. |
| **Mati** | Skipper / Sales / Support | En el barril todas las mañanas salvo que tenga tour asignado. Ventas. Apoyo a Fede en reparaciones. Backup de lavado y **segundo backup** de entrega de alquileres. |
| **Luka** | Skipper / Logistics | Hielo, agua y bebidas en cada barco cada mañana + heladera del barril. Combustible y compras diarias. Lavado de barcos de alquiler. |
| **Toni** | Skipper / Opening & Closing | Arranca y chequea los 4 motores cada mañana. Chequeo final de flota al cierre. |

### Reglas de asignación

- **Clubman 26 es de Jozo. Nadie más lo usa. Regla de Nikola, no se discute.** Está en boya separada, no flota con el resto.
- **Taxi al Clubman**: Jozo no tiene forma de llegar solo a su barco. Lo lleva Luka o Toni, el que esté libre cuando aparece. 3 minutos, 50 metros del Mariner. Jozo avisa en el topic Today cuándo viene y Luka o Toni contesta quién lo lleva. El hielo del Clubman va en el barco que haga el taxi. **Nadie asume que lo hace el otro.**
- **Toni abre y cierra el día. Por eso no puede ir a full day tours** (Biševo, 5 Islands). Morning check, uno o dos tours cortos, cierre. Esto hay que vigilarlo en la grilla diaria, no está protegido por ninguna regla escrita.
- **Formación de skippers nuevos**: Fede lo técnico, Jozo lo humano. Se le dice explícito al skipper nuevo para que no elija referente por conveniencia.
- **Alquileres**: entrega y recepción Fede → backup Niko → segundo backup Mati (a formar con 2-3 entregas acompañadas). Lavado Luka → backup Mati.
- Coti y Mati están los dos en el barril a la mañana. Coti abre, Mati acompaña.

### Cierre en 3 capas (reemplaza la regla vieja de "nadie se va hasta que Fede revisa")

1. **Cada skipper cierra su propio barco** y postea el checklist en Today antes de irse del muelle.
2. **Toni** camina la flota cuando ya no sale nadie, confirma que lo posteado coincide, cierra lo que falte y postea "Fleet closed".
3. **Fede** lee los reportes desde el teléfono. Si falta un mensaje o algo no cuadra, pregunta. Backup: Nikola.

El Clubman queda fuera del sistema: Jozo lo cierra y reporta él mismo.

Acordado con Nikola: se prueba 2 semanas. Si aparece un problema real no reportado, se vuelve al sistema viejo.

### Checklist de cierre (formato fijo, un mensaje por barco, en Today)

```
Boat: _______   Skipper: _______

- Propeller checked, no damage
- Distance from the dock correct
- Bilge pump working
- Fenders in place
- Mooring lines tight and correct
- Tube pressure ok
- Fridge stocked for tomorrow: water, beer and Somersby for every
  skipper who sailed today
- Fridge drained, no water inside
- Keys stored
- Electricity off
- Fuel level: _______
```

Lo que no se puede arreglar esa noche se arregla a primera hora del día siguiente, antes de que salga nadie. Fede define quién lo arregla, esa misma noche.

### Rutina de mañana

- **Toni**: arranca y chequea los 4 motores, confirma que todo funciona, postea en Today antes de que salga nadie.
- **Luka**: carga hielo, agua y bebidas en cada barco + heladera del barril. A la mañana **solo se agrega hielo**, el resto se dejó cargado la noche anterior.
- **Coti**: abre el barril.
- Cada skipper chequea su propio equipo de seguridad antes de salir.

---

## 💬 Telegram — estructura de grupos (20/07/2026)

Dos grupos con topics. **Core es para decisiones, Crew es para ejecución.** Lo que se decide en Core baja al Crew como Announcement. Nikola, Fede, Jozo y Coti están en los dos.

### Grupo 1 — MareBoats Core (Nikola, Fede, Jozo, Coti)

| Topic | Para qué |
|---|---|
| General | Lo que no entra en otro lado. Coordinación rápida, links. |
| **Decisions** | Todo lo que necesita aprobación de Nikola: precios, OTA listings, copy público, compras grandes. Un mensaje = una decisión. Se marca "APPROVED". |
| Website & Marketing | Web, SEO, Google Ads, analytics. |
| Media | Contenido terminado, posts, reviews. El material crudo va al Crew. |
| Fleet & Purchases | Upgrades, repuestos, presupuestos, proyectos de audio y eléctrica. |
| Numbers | Bookings, ocupación, revenue, performance de OTAs. Revisión semanal. |
| Ideas | Productos nuevos, rutas, partnerships. Nada urgente. |

**Decisions es el topic más importante de los dos grupos**: es el rastro escrito y buscable de lo que Nikola aprobó. Después del incidente del listing de GYG, esto es cobertura.

### Grupo 2 — MareBoats Crew (los 7)

| Topic | Para qué |
|---|---|
| Announcements | Solo Nikola, Jozo o Fede postean. Cambios de horario, reglas nuevas. No se responde acá. |
| **Today** | Plan del día, morning check, reportes de cierre, aviso del taxi al Clubman. |
| Damage Report | Todo lo roto, con foto y nombre del barco, el mismo día. |
| Supplies | Hielo, agua, bebidas, combustible, limpieza. |
| Barrel & Sales | Ventas en el barril, walk-ins, precios consultados. |
| Media Drop | Fotos y videos crudos de los tours. |
| General | Chat libre, cambios de turno, días libres. |

### Reglas pineadas en el Crew

1. Usar el topic correcto. Si no sabés cuál, General.
2. Leer Announcements cada mañana antes de salir del muelle.
3. **Todo escrito. Sin audios.** Si no está escrito, no pasó.
4. Los bookings viven en **Vesselio**. Chequear la app antes de prometer algo a un huésped.
5. Nunca cotizar un precio del que no estás seguro.
6. Los daños se reportan el mismo día con foto en Damage Report.
7. Si reportás un barco como ok y no lo estaba, lo arreglás vos a la mañana siguiente. Nadie tiene problemas por un problema real, solo por esconderlo.
8. Lo que no se arregla de noche se arregla a primera hora, antes de que salga nadie.
9. El Clubman 26 es de Jozo. Solo Jozo lo usa. Sin excepciones.
10. La heladera queda lista para el día siguiente y sin agua. A la mañana solo se agrega hielo.
11. Alquileres: Fede entrega y recibe, Niko backup, Mati segundo backup. Luka lava, Mati backup.
12. Toda comunicación con huéspedes va por el WhatsApp de la empresa, no por el personal.
13. No publicar fotos de huéspedes. Van a Media Drop.
14. Si no podés cubrir un turno, avisá en General lo antes posible, no la misma mañana.
15. El grupo es interno. Nada de acá sale del equipo.

---

## Instrucciones para Claude Code
- Leer CLAUDE.md completo antes de empezar
- `npm run build` al terminar cada tarea — 0 errores. Commit con mensaje descriptivo.
- Mobile-first: 375px → md: → lg:
- Solo `next/image` — cero `<img>` tags
- Solo opacity y transform en animaciones — nunca transition-all
- Redirects en netlify.toml — NO en next.config.mjs
- **Precios: SIEMPRE desde `lib/pricing.ts`. Cero números hardcodeados.**
- **Nada sensible (costos, márgenes, comisiones) puede entrar al build estático.**
- Refactors: verificar output, no solo que compile. Comparar strings ANTES vs DESPUÉS.
- **Verificación mental NO cuenta.** Correr el código, imprimir el output real y pegarlo. Dos veces se reportó "verificado" sin ejecutar nada, y la única vez que se corrió de verdad apareció un bug que la revisión mental no había visto.
- **No procesar copy con regex.** Un `clean()` con regex mutiló "Snorkel gear (limited)" en "snorkel gear". El copy de cliente se escribe a mano en campos dedicados (`quoteName`, `quoteIncluded`, `quoteNotIncluded`).
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
