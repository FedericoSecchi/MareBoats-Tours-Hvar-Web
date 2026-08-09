# MareBoats Tours Hvar — Contexto del Proyecto
**Actualizado: 06 Agosto 2026**

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

## Flota self-drive rental — precios por día completo (actualizado 04/08/2026)
| Embarcación | HP | Precio/día | Máx personas | Fuel | Licencia | Depósito |
|---|---|---|---|---|---|---|
| Pasara | 5hp | €150 | 5 | Incluido | No requerida (legal hasta 5hp en Croacia) | — |
| Pasara | 20hp | €240 | 5 | Incluido | **No mencionado en copy** (ver nota abajo) | — |
| Speedboat | 60hp | €290 | 5 | Incluido | Requerida | — |
| Speedboat Mariner | 150hp | €400 | 8 | Extra (full-in/out) | Requerida | €300 solo efectivo |

Cambios: Pasara 5hp €120 → €150 (21/07). Mariner 150hp €350 → €400 (21/07, aumento deliberado para bajar volumen de rental y reducir riesgo operativo). Pasara 20hp €200 → €240 (04/08). Capacidades máximas confirmadas por Nikola.

Depósito Mariner 150hp: €300, **solo efectivo**, devuelto al terminar. Tiene que estar visible en la web y en el quote, nunca ser una sorpresa en el muelle: un cliente que llega sin efectivo no alquila y deja una review de una estrella.

### Nota legal — licencia y Pasara 20hp (actualizada 04/08)
Las fuentes sobre el límite real de HP para operar sin licencia en Croacia son **inconsistentes** (rangos vistos: 5kW/6.8hp, 15hp, 20hp, hasta 30hp según la fuente). No hay claridad suficiente para afirmar públicamente que el Pasara 20hp no requiere licencia.

Decisión tomada (04/08): en vez de resolver la ambigüedad legal, **se sacó toda mención a "licencia" del copy del Pasara 20hp**. La card lo posiciona por beneficio (volante, potencia, preferencia de clientes — badge "Most chosen self-drive"), sin ningún claim sobre requisitos legales. Grep case-insensitive confirmó cero menciones de "licencia/licence" en la card.

Esto no resuelve el bloqueante de fondo (ver abajo), pero saca el riesgo inmediato del Pasara 20hp específicamente.

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
| Red Rocks & Pakleni | €85/persona shared · €400 privado half-day · €500 privado full-day | 4h / 6h | Actualizado 27/07: `pricingOptions` agregado a `tours-data.ts` — detail page ahora muestra tarjeta de precios estructurada (igual que Blue Cave/Sunset), el full-day €500 ya no queda enterrado en el cuerpo de texto |
| 5 Islands / Blue Cave | €150/persona shared · €800 privado | 7h, sale 10:00 | Actualizado 04/08 (antes €130/€700) |
| Pakleni Islands | €300 privado 3h · €350 privado 4h | 3h / 4h | 4h con más paradas, sumado 29/07. Ancla deliberada: al lado de Red Rocks & Pakleni €400 el guest ve que por €50 más se lleva los dos |
| Sunset Cruise | por tramos, ver abajo | 2h | Incluye vino, agua y fruta |
| Private Charter | €500 + fuel | día completo | Fuel aparte a propósito |
| Zlatni Rat, Brač | €600 privado | 6h | Producto nuevo 21/07 |

### Sunset Cruise — precio por tramos (CONFIRMADO Nikola 29/07/2026)
| Personas | Botes | Precio | Botellas |
|---|---|---|---|
| 1-4 | 1 | €250 | 1 |
| 5 | 1 | €350 | 1 |
| 6 | 2 | €500 | 2 |
| 7-8 | 2 | €700 | 2 |
| 9+ | 3 | €1000 | 3 |

Botella extra: €30. Incluye siempre agua y fruta fresca.

**Modelo por bote, no por persona.** El sunset prioriza comodidad sobre densidad: desde 6 personas van 2 botes aunque entren en uno solo, y desde 9 van 3 botes. `getSunsetTier(pax)` devuelve precio + botes + botellas.

**Regla dura del código:** botellas = cantidad de botes (una por bote), derivada de los botes, no como número suelto, así no pueden divergir nunca. Botes: 1-5 = 1, 6-8 = 2, 9+ = 3. El tramo 9+ es tope fijo €1000 / 3 botes.

**El salto 5→6 es un acantilado conocido:** un grupo de 6 pasa de 1 bote/€350 a 2 botes/€500 y se reparte en dos embarcaciones. Tiene incentivo a declararse 5. Es decisión de Nikola priorizar comodidad; el riesgo es perder o irritar grupos de 6.

**⚠️ Pendiente Nikola — botellas en tramos medios.** Una botella por bote deja los tramos del medio cortos de vino (5 pax = 1 copa por cabeza a €350; 8 pax = 1,25 copas a €700). Propuesta en evaluación: "una botella cada 3 personas, mínimo una por bote" → 5=2, 7-8=3, 12=4, sin excepciones. Es costo de vino, o sea decisión de Nikola. La botella NUNCA es dato público (el copy no dice cantidad), así que subirla no toca la web, solo operación y crew dashboard. Hasta que Nikola apruebe, el código queda en botella=bote. Si aprueba, la fórmula pasa a `max(botes, round(pax/3))` (sigue derivada, sin riesgo de divergencia).

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
| Stari Grad | €400 one way — **valor solo interno, ver nota abajo** |
| Brač | €450 one way · €800 ida y vuelta |
| Korčula · Biševo | on request (pendiente Nikola) |

**Hvar → Stari Grad (actualizado 04/08):** sacado del listado público de `/transfers/`. Sigue en `lib/pricing.ts` (`TRANSFER_PRICES.stariGrad: 400`) y en el crew dashboard para quotes internos por WhatsApp. No tiene página standalone, no está en el sitemap, y el `itemListSchema` de `/transfers/` ya no lo incluye. Motivo: decisión de negocio, no legal.

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
| blue-cave-pakleni-islands | €150/persona (shared) · €800 privado |
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
- `/guide/` — guía pre-tour con route cards. **Actualizado 27/07**: las 3 secciones largas ("Blue Cave, Green Cave & Vis", "Red Rocks & Pakleni", "Where to Eat") son accordion colapsable, cerradas por default. Implementado con `<details>/<summary>` nativo (Server Component, sin `'use client'`, sin `useState`), mismo patrón visual que `IslandStopsAccordion` (ícono +/× que rota). Múltiples paneles pueden estar abiertos a la vez. Contenido interno sin cambios, solo el wrapper.
- `/transfers/` — Mapbox Static Images API. hoverImage Split asignada. **Actualizado 04/08**: Hvar → Stari Grad sacado del array `TRANSFERS[]` visible (sigue en pricing.ts para uso interno, ver Transfers arriba).
- `/conditions/` — live weather/marine. Removida del navbar (08/06). Entradas contextuales desde tour pages y footer.
- Nav: Tours → Rentals → Transfers → Explore → About

## 🔒 /crew-9f3kq2/ — panel interno de precios (12/07/2026)

Página de precios para el equipo de ventas (Nikola, Josip, skippers). Lee de `lib/pricing.ts`. Sin login, sin backend, sin datos sensibles.

- Ruta: `app/crew-9f3kq2/page.tsx` + `CrewDashboard.tsx` (`'use client'`)
- **El slug es random a propósito. NO cambiarlo por algo legible** (`/staff`, `/admin`, `/prices` están en todas las wordlists de bots).
- Contenido: buscador, filtros (All/Tours/Rentals/Transfers), card por servicio con precios, capacidad, includes, extras, add-ons, licencia. Header fijo con reglas operativas (meeting point, "speedboat" nunca "RIB"). Pasara 20hp: desde 04/08 el copy no menciona licencia en absoluto (antes decía "ask us about licence").
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
- **Actualizado 27/07**: ícono/botón de WhatsApp compacto en el header (pill, `bg-green-500/15 text-green-400`, ícono SVG real, no emoji), link con mensaje prellenado "Hi, I scanned the MareBoats QR code and have a question." — da contexto a Nikola apenas abre el chat. **No es una card del grid** (se probó como card grande y se revirtió por saturar el hub visualmente); vive como elemento propio junto al logo. Mismo número que el resto del sitio, mismo ícono que `WhatsAppButton.tsx`.

## Herramientas operativas
- **Vesselio** — mareboats.vesselio.app · apikey: Fedde123. Solo referencia operativa, no conectar al sitio.

## Reglas inamovibles de contenido
- Idiomas a bordo solo cuando Fede es skipper — NO prometer genéricamente
- **Idiomas equipo: EN + HR + IT + ES + DE**
- Botellas de vidrio: permitidas. Comida: permitida. No fumar. Sin baño a bordo.
- Formularios: NO. Solo WhatsApp.
- **Underwater Scooter**: €40/unit. NO en tours a Vis ni Sunset Cruise. Nombre: "Underwater Scooter". **Actualizado 27/07**: en `/rentals/` quedó explícito que es add-on de tours privados únicamente — NO se alquila suelto por día (varios guests lo pidieron por WhatsApp y generaba confusión). Copy, FAQ y `rentalServiceSchema` en `lib/schema.ts` corregidos para reflejarlo.
- Photo & Video Shoot: €200. Solo tours privados, solo cuando Fede está a bordo.
- NO mencionar año de fundación.
- NO mencionar RIB. Usar "speedboat".
- Boat rental sin licencia: solo Pasara 5hp lo menciona explícitamente. Pasara 20hp (desde 04/08) no toca el tema licencia en ningún lugar del copy.
- Em-dashes y en-dashes prohibidos.
- "Lunch not included" — wording unificado.
- **Capacidad: "Licensed for 12. We cap at 8."** Nunca mencionar 12 sin contexto.
- **Brand: "MareBoats Hvar"** (sin espacio).
- Filler prohibido: "premium", "unforgettable", "ultimate", "ideal for", "flagship".
- **llms.txt tiene el mismo status que copy público.** Nombres propios del equipo, información operativa interna y todo lo que no iría en una página del sitio tampoco va ahí. Es el archivo que los modelos citan literalmente.

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

## /landing/pre-tour/ — estado al 07/06/2026 (⚠️ parcialmente desactualizado, ver nota)

> **Nota 29/07/2026:** este bloque quedó anclado al 07/06 y no refleja cambios posteriores. Cambio confirmado a incorporar en un barrido futuro: se agregó un **callout destacado de belongings** en "Good to know" (`dce45d1`) con el texto canónico "Travel light. We keep a secure storage area on board for your phone, keys and valuables, so hand them over before you jump in. MareBoats Hvar is not responsible for items left unattended outside it." CC reportó que ese texto quedó replicado en 3 archivos — verificar si es duplicación pura (candidato a centralizar) o ubicaciones legítimas. El disclaimer sigue con tinte legal: **que Nikola lo lea.** Las departure slots de abajo siguen siendo la deuda de duplicación conocida (ver línea sobre `lib/operations.ts`).

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

## PLAN UNIFICADO — Estado al 09/08/2026

### ✅ CERRADOS
- Bloque 0, SEO Website, /landing/pre-tour/, SEO Cluster, fixes 02/06, Mobile Audit, Copy Audit, UX/Conversión, Schema markup, GBP, Precios self-drive, /conditions/, Copy 07/06, Session 07/06 noche, Session 08/06
- **Fuente única de precios + crew dashboard — CERRADO (12/07)**: `lib/pricing.ts`, 11 archivos refactorizados, verificación 0 divergencias, `/crew-9f3kq2/` en producción ✅
- **BLOQUE 1 Fotos drone — CERRADO** (09-15/06): 52 fotos migradas a public/images/, estructura nueva, todos los paths actualizados en componentes ✅
- **Fase 1 Red Rocks + Tarea H — CERRADO (06/08)**: página de referencia completa sobre la ruta sur de Hvar. Patrón stops/faqs/fastFacts en TourRecord. Meeting point corregido en 11 archivos. Ruta 7 stops en orden real. Ver changelog 06/08 para detalle. ✅
- **Fase 3 SEO/GEO — CERRADO (09/08)**: tareas A a F + llms.txt. `llms.txt` para crawlers de IA con precios en tiempo real desde `pricing.ts`. Crawlers de IA verificados (no bloqueados en robots.txt). `sameAs` ampliado a 5 URLs (Google Maps, Instagram, Facebook, GetYourGuide, TripAdvisor). `dateModified` en JSON-LD vía `lib/git-dates.ts` (se emite solo en deploys CLI con git completo; en CI Netlify se omite correctamente). Diacríticos croatas corregidos en 8 archivos: Ždrilca, Žarače, Palmižana, Biševo. Deploy por CLI operativo. Ver changelog 09/08 para detalle. ✅

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
- `tour.slug === 'red-rocks-pakleni-islands'` en `app/tours/[slug]/page.tsx` (sección comparativa Tarea C). Mismo patrón que el `if (id === 'brac-zlatni-rat')` del crew dashboard. Si la comparación existe en más de un tour, migrar a un campo opcional en `TourRecord` en vez de acumular condicionales en page.tsx. No refactorizar hasta que haya un segundo caso real.
- **`reviewCount: 26` en `businessSchema`** (`lib/schema.ts`) — el recuento real es **134**. No se corrigió en esta sesión para no mezclarlo con Tarea H. Actualizar con el número real antes de la próxima revisión de schema.
- **GBP vs. schema — horario de temporada** — GBP declara horario todo el año. El `businessSchema` en `lib/schema.ts` declara `openingHours` mayo a septiembre. Son contradictorios. Resolver con Nikola cuál es el horario oficial y unificar.
- **TripAdvisor listing dice "RIB speedboats"** — incorrecto según la regla de marca (usar "speedboat", nunca "RIB"). Requiere aprobación de Nikola antes de tocar. Flujo: Fede redacta corrección → Nikola aprueba por escrito → publicar.
- **GetYourGuide — precios divergen del sitio** — GYG publica €95/persona (shared) y €160/persona (5 Islands), contra €85 y €150 en el sitio. Decisión deliberada de Fede (margen OTA), registrada acá como tal. No es un error. No tocar sin instrucción explícita.
- **Deploy por CLI** (`netlify deploy --prod --dir=out`) — saltea la cola de builds de Netlify. Usarlo solo con todo commiteado y pusheado; si no, producción diverge del repo. El CLI buildea localmente, donde git tiene historial completo.
- **`git fetch --unshallow` en el build command de Netlify** — cuelga el build indefinidamente. No reintentarlo. `|| true` captura errores pero no timeouts/hangs.
- **`dateModified` en JSON-LD solo se emite en deploys por CLI** — el build de Netlify CI usa shallow clone, `getLastModified` devuelve `null`, y el campo se omite. Esto es correcto (null → sin campo, no fecha falsa). Si algún día se quiere `dateModified` en CI, la única vía viable es un mapa de fechas generado en tiempo de commit.

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

## 🗓️ Changelog — 09 Agosto 2026

### Fase 3 SEO/GEO — Tareas A a F + llms.txt

Objetivo: mejorar la visibilidad del sitio para crawlers de IA y buscadores. Todo deployado por CLI (`netlify deploy --prod --dir=out`), que saltea la cola de builds de Netlify.

**llms.txt (Tarea A/B):** `app/llms.txt/route.ts` — archivo generado en build con precios en tiempo real desde `lib/pricing.ts`. Incluye: About, Boats, todos los tours con precios y rutas (Red Rocks con 7 stops y diacríticos), transfers, rentals, meeting point corregido, páginas de decisión. `export const dynamic = 'force-static'` lo convierte en archivo estático en `out/llms.txt`.

**AI crawlers (Tarea C):** Verificado que `User-Agent: * / Allow: /` en robots.txt cubre todos los crawlers de IA. `/crew-9f3kq2/` protegido solo por `X-Robots-Tag` en netlify.toml — correcto, no listarlo en robots.txt lo publicaría.

**sameAs (Tarea D):** `businessSchema.sameAs` ampliado de 2 a 5 URLs: Google Maps, Instagram, Facebook (`profile.php?id=100093516814322`), GetYourGuide (`mareboatshvar-s613289`), TripAdvisor (Attraction_Review-g659912-d34371535).

**dateModified (Tarea E):** `lib/git-dates.ts` — `getLastModified(filePath)` lee la fecha del último commit por archivo vía `git log --format=%aI -1`. Tour pages inyectan `dateModified` en el JSON-LD condicionalmente (`...(dateModified !== null && { dateModified })`). En deploys CLI (git completo) se emite la fecha real. En CI Netlify (shallow clone) devuelve `null` y el campo se omite — correcto, campo ausente > fecha falsa. Intento de `git fetch --unshallow` en el build command colgó el build indefinidamente; revertido. Tarea E cerrada como funcional.

**Diacríticos croatas (Tarea F):** Barrido case-insensitive de Zdrilca/Zarace/Palmizana/Bisevo en 8 archivos. Formas correctas: Ždrilca, Žarače, Palmižana, Biševo. Filenames de imágenes y claves internas (`BISEVO:`, `id: 'bisevo'`) sin tocar. `TourHighlightsList.tsx`: agregado `'ždrilca'` al map de lookup (el form sin tilde ya no matchea el texto corregido). Verificado en producción: Ždrilca ×19, Žarače ×20, Palmižana ×17, Biševo ×4 en `/tours/red-rocks-pakleni-islands/`.

**Netlify CLI:** `netlify-cli@27.1.1` instalado globalmente. Login por browser. Link a sitio `mareboatshvar` (ID `b577ea86-f053-4c3d-bff2-f89fedcd1bce`). Deploy desbloquea la cuenta cuando la cola de builds tiene un build fantasma colgado.

---

## 🗓️ Changelog — 06 Agosto 2026

### Fase 1 — Red Rocks como entidad (Tareas B a G)

Objetivo: convertir `/tours/red-rocks-pakleni-islands/` en la página de referencia más completa sobre la ruta sur de Hvar, estructurada para ser citable por modelos de lenguaje.

**Patrón arquitectónico nuevo — `stops`, `faqs`, `fastFacts` en `TourRecord`:**
Los tres son campos opcionales tipados. El render en `app/tours/[slug]/page.tsx` es genérico: sin condicionales por slug, los datos dirigen el output. Mismo principio que `lib/pricing.ts`: una fuente, varios consumidores. El array `faqs` es fuente única para el render visible y el `FAQPage` JSON-LD: cero divergencia posible.

- **Tarea B** — Sección "The route" con stops, markup H3+dl.
- **Tarea C** — Tabla comparativa Red Rocks vs. 5 Islands Blue Cave.
- **Tarea D** — 10 FAQs + FAQPage JSON-LD desde el mismo array.
- **Tarea E** — Fast Facts `<dl>` data-driven. Included/Not included inyectados desde `tour.includes`/`tour.notIncludes` después de "Meeting point".
- **Tarea F** — Links internos en /explore, /guide, /hvar-islands-guide, /tours. Corrección de orden de stops en /guide.
- **Tarea G** — `components/sections/FleetInfo.tsx` Server Component, rendereado en todas las tour pages excepto `split-airport-transfer`.

### Tarea H — Correcciones de datos (06/08/2026)

**H1 — Meeting point corregido en 11 archivos:**
El punto de encuentro publicado era incorrecto toda la temporada. "Hvar Harbour main dock" y "at the waterfront near the taxi boats" reemplazados por **Beach Križa, at the MareBoats barrel, below the Beach Bay Hvar Hotel**. URL: `https://maps.app.goo.gl/6AJmDACw4ZU1MnSKA`. Archivos: `lib/tours-data.ts` (constante MEETING, MAPS, fastFacts Departs, FAQ Q2, descripción), `app/landing/pre-tour/page.tsx` (Meet rows x2, iframe title, address block, Maps URL), `app/crew-9f3kq2/CrewDashboard.tsx` (quote builder x2, display), `app/tours/[slug]/page.tsx` (intro comparativa, Fast Facts Meeting point como link clickable).

**H2 — Ruta reescrita con tiempos de tramo y 7 stops en orden real:**
Antes: 5 stops desordenados (Red Rocks, Dubovica, Borče Bay, Žarače, Pakleni combinado). Después: Red Rocks, Dubovica, Žarače, Borče Bay, Ždrilca, Perna, Palmižana en orden de navegación. Todos los `travelTime` son tramo a tramo, no "from Hvar Harbour". "Borče Bay (Milna)" → "Borče Bay". Stop combinado "Pakleni Islands (Palmižana or Ždrilca)" dividido en tres stops independientes. Dt `"From Hvar Harbour"` → `"Sailing time"`. Subtítulo de la sección expandido con nota de tiempos aproximados y pace.

**H3 — Tabla comparativa y distancias:**
Duración 5 Islands corregida: "~8 hours" → "7 hours". Fila "Total distance" agregada en tabla (30-35 km / 100-120 km) y en Fast Facts (30 to 35 km total route).

**H4** — Capacity fastFact reescrito para explicar la decisión de los 8 guests, no solo enunciar la regla. Subject explícito ("MareBoats Hvar speedboats") para que sea citable fuera de contexto.

**H5** — FAQ underwater scooter: add-on en privados, €`ADDONS.scooter`/unit, per unit not per person, no disponible en shared.

**H6** — FleetInfo bloque de música: playlist histórica + Spotify Jam disponible con app (no garantizado).

**H7** — Calma Beach: parada ocasional, alternativa a Perna, mismo tramo desde Ždrilca (5-8 min). `TourStop.activities` hecho opcional. Palmižana `travelTime` actualizado para funcionar viniendo de Perna, de Calma, o directo desde Ždrilca.

---

## 🗓️ Changelog — 04 Agosto 2026

Sesión de 3 tareas, cerradas una por una (build limpio + commit + push por separado). **Nota de proceso:** Nikola ya estaba al tanto de estos 3 cambios de antemano, así que se pusheó directo a `main` sin pasar por el gate de aprobación de siempre.

1. **Pasara 20hp: €200 → €240 + copy sin claim de licencia.**
   Precio actualizado en `lib/pricing.ts`. Motivo del copy: las fuentes sobre el límite legal real para operar sin licencia en Croacia no coinciden entre sí (van de 5hp a 30hp según la fuente), así que en vez de arriesgar un claim legal se sacó toda mención a "licencia" y se reposicionó el producto por beneficio:
   - Badge nuevo: "Most chosen self-drive"
   - Subtítulo: "Self-drive boat Hvar · fuel included · up to 5 people"
   - 3 bullets: fácil de manejar, más potencia que la 5hp, preferido por los clientes
   - Estructura semántica (H2/H3 + bullets, no párrafo corrido) pensada para que ChatGPT/Perplexity puedan citarlo — GEO explícito, ya que el ~13% del tráfico via AI referral es diferenciador estratégico
   - Schema `Product`/`Offer` (JSON-LD) agregado a la card, leyendo el precio de `RENTAL_SELF_DRIVE.pasara20hp.pricePerDay`
   - Grep case-insensitive de "licencia"/"licence" en la card: 0 resultados
   - **Aprendizaje de proceso:** el primer intento de CC malinterpretó "Pasara 20hp" — no hubo error acá, pero sí en el ítem 2 de abajo. Nombrar el producto por su ID/slug exacto, no por descripción, evita esto.

2. **Blue Cave / 5 Islands: shared €130→€150, privado €700→€800.**
   Precio actualizado en `lib/pricing.ts`. **Incidente de proceso:** la instrucción original decía "Vis tour" y CC lo interpretó como un producto nuevo inexistente (`vis-island-tour`), tocando el archivo equivocado. Se corrigió apuntando al producto real ("5 Islands, 4 Beaches & Blue Cave"), se eliminó la entrada inventada, y se verificó que no quedó ninguna card/página huérfana referenciándola. Reflejado también en `lib/schema.ts` (offers del tour).

3. **Transfer Hvar → Stari Grad: eliminado del sitio público, mantenido en pricing interno.**
   Sacado del array `TRANSFERS[]` en `app/transfers/page.tsx`. `lib/pricing.ts` intacto (`TRANSFER_PRICES.stariGrad: 400`) para que el crew dashboard lo siga usando en quotes por WhatsApp. `itemListSchema` se autogeneró sin la entrada (sin señal de oferta activa para Google/AI crawlers). Sin URL individual previa, así que el sitemap no necesitó cambios. Grep final: cero referencias desde páginas públicas.

**Pendiente:**
- Confirmar que el nombre visible del tour "5 Islands, 4 Beaches & Blue Cave" en el sitio efectivamente muestra los nuevos precios (verificado en pricing.ts y schema, falta chequeo visual en producción).
- El bloqueante de fondo de la Pasara 5hp ("no licence needed") sigue sin resolverse — ver sección de flota rental arriba.

---

## 🗓️ Changelog — 29 Julio 2026

Sesión de 5 tareas cerradas una por una (build limpio + commit + push por separado). Cambios de precios y copy discutidos con Nikola:

1. **Sunset — modelo nuevo confirmado por Nikola** (`3a22124`): `SUNSET_TIERS` reescrito entero. Tramos ahora 1-4 / 5 / 6 / 7-8 / 9+ (€250 / €350 / €500 / €700 / €1000). Modelo por bote: 1-5 = 1 bote, 6-8 = 2, 9+ = 3. Botellas derivadas de botes (una por bote). Se borraron los comentarios viejos de "asunción no confirmada" (redondeos, botellas sin especificar): ya está todo confirmado. El €700 (7-8 pax) es lo que en las notas de Nikola figuraba como "8 to 12".
2. **Pakleni 4h €350** (`90a1658`): sumado al 3h €300 existente (conviven las dos opciones). Precio en `pricing.ts`. Card ordenada al lado de Red Rocks & Pakleni €400 como ancla.
3. **Cards clicables** (`f0f4381`): bug en `/landing/explore` — la card entera no respondía al click (anchors anidados rompen la hidratación). Corregido para que toda la card sea un solo target. Se originó reportado desde el flujo QR.
4. **"local skipper" eliminado** (`a96353a` + dentro de `9dd986e`): 12 ocurrencias activas + 1 en `schema.ts` con L mayúscula que el grep case-sensitive de la tarea no agarró. Ya no es del todo cierto (media tripulación es argentina). **"local company" se queda** (sigue siendo verdad). Aprendizaje: barridos de copy SIEMPRE case-insensitive.
5. **Dos textos nuevos** (`9dd986e`):
   - Shared tours: aclara que el cupo no se abre hasta llegar al mínimo, confirmación por WhatsApp antes de salir. En las tour pages con precio shared.
   - Belongings disclaimer: MareBoats no se responsabiliza por objetos dejados sin atender; hay zona de guardado seguro. En info pre-tour. **⚠️ Tiene tinte legal — que Nikola lo lea antes de darlo por definitivo.**

**Segunda tanda (misma fecha) — CONFIRMADO por hash:**

6. **"Nikola" sacado del copy** de `/tours/red-rocks-pakleni-islands/` (`e417c1`): el nombre propio no va en copy público.
7. **Red Rocks — recorrido reordenado** (`a54ac1`): secuencia real ahora Hvar Harbour → Red Rocks → Dubovica → Borče Bay (Milna) → Pakleni. Se reordenaron `highlights` Y se reescribió la `description` para que coincidan (antes narraban órdenes distintos). Cuidado documentado: el primer intento de CC duplicó el párrafo de Borče y dejó el orden viejo; se agarró en el before/after antes de pushear.
8. **Žarače — parada ocasional** (`a54ac1`): sumada a la description de Red Rocks como parada según clima ("On calm days we also pause at Žarače"), en el tramo de salida antes de Red Rocks. **NO va en highlights**: los highlights son paradas garantizadas, Žarače no lo es (si no se para por clima, un highlight incumplido genera review tibia).
9. **Mínimo shared = 5** (`a54ac1`): subido de 4 a 5 para todos los tours (Red Rocks y Blue Cave). Corregido en `tours-data.ts` (description) y en `page.tsx:188` (nota shared, aplica a ambos slugs). Grep case-insensitive confirmó cero rastros de "minimum 4" en copy visible.

**Regla de convoy reconfirmada:** para tours NO-sunset el tope sigue siendo 2 botes = 16 personas. Los 3 botes son EXCLUSIVOS del sunset (comodidad). No mezclar.

**Tercera tanda (misma fecha) — CONFIRMADO por hash:**

10. **Mínimo shared: público 6, operativo 4** (`1c0870e`): se subió de 5 a **6** en el copy visible (`tours-data.ts` description + `page.tsx:188`, ambos slugs). El 6 es número defensivo público (evita que grupos se declaren menos para forzar salida). El **mínimo operativo real es 4** — igual que "Licensed for 12, we cap at 8": el 4 es interno, NUNCA entra al build ni al código, vive solo acá y en el crew. En el sitio solo existe el 6.
11. **Fillers cerrados** (`ba49d95`): "unforgettable" en Medvidina Cave → "Nothing moves inside"; "Good for families / half-day" de Pakleni summary reescrito sin clavar duración; "Premium pricing, premium quality" de Gariful → reescrito con rango real (mains €30-45). "flagship" de Blue Cave ya no existía (limpiado antes o grep sobre versión vieja). `flagship` de `tours-data.ts:469` sigue intocado (comentario de código).
12. **Belongings disclaimer** (`dce45d1`): callout destacado con el texto canónico suave, en "Good to know" pre-tour. **⚠️ Replicado en 3 archivos** — verificar si centralizar. Sigue con tinte legal → **que Nikola lo lea.**

**Aprendizaje de esta sesión (patrón de CC):** dos veces CC frenó bien pidiendo confirmación (description duplicada de Borče; rango de precio de Gariful que no debía inventar). El before/after obligatorio antes de commit atrapó ambos. Mantener esa disciplina.

**Pendiente Nikola:**
- Belongings disclaimer: que lo lea (tinte legal).
- Botellas sunset tramos medios: propuesta "1 cada 3 pax, mín 1 por bote" pendiente (costo de vino). Código en botella=bote hasta el OK. `minGuests/maxGuests` ya en `pricing.ts:102-106`, listo.
- Confirmar origen del mínimo (Fede lo definió: público 6 / operativo 4).

---

## 🗓️ Changelog — 27 Julio 2026

Sesión de tareas chicas y cerradas, una por una, todas commiteadas y pusheadas por separado:

1. **`/rentals/` — Underwater Scooter**: copy reescrito para dejar explícito que es add-on de tours privados, no rental standalone. FAQ y `rentalServiceSchema` corregidos en línea. Precio sigue leyendo de `lib/pricing.ts` (`ADDONS.scooter`).
2. **Card Red Rocks & Pakleni** (home + listado): badge pasó de un texto saturado a duración simple; precio pasó a distinguir explícito "Shared from €X/person · Private from €Y", número leído de `TOUR_PRICES`.
3. **Badges de todas las cards normalizados** a formato `N HRS` consistente. Se corrigió Pakleni de "3-4 hours" a "3 HRS" (el tour dura 3, no 3-4).
4. **Precio de cards unificado entre home y listado**: ambos consumen el mismo formatter (`formatPriceShort`) para Blue Cave y Pakleni, que antes divergían entre `formatPriceFull` (home) y `formatPriceShort` (listado). Sunset sigue en `formatPriceFull` en home por ahora — mismo output, no rompe nada, pendiente de unificar si se quiere prolijidad total.
5. **Red Rocks — detail page**: agregado `pricingOptions` (shared / private half-day / private full-day) con el mismo componente que ya usan Blue Cave y Sunset. El full-day €500 ahora tiene tarjeta propia, no vive solo en el cuerpo de texto.
6. **Barrido completo de em-dashes y en-dashes** en todo el copy visible del repo (15 archivos, 21 reemplazos) — quedaban en horarios tipo "09:00–13:00". Verificado con build limpio; los únicos guiones largos que sobreviven están en comentarios de código, no en copy.
7. **`/qr/`**: se agregó un ícono de WhatsApp con mensaje contextual ("scanned the QR code"). Primer intento fue una card grande en el grid — se revirtió por saturar el hub y quedó como ícono compacto en el header.
8. **`/guide/`**: las 3 secciones largas pasaron a accordion colapsable con `<details>/<summary>` nativo, cerradas por default, mismo patrón visual que `IslandStopsAccordion`.

**Pendiente para la próxima sesión**: route maps por tour con Mapbox (todos los tours, nombre + descripción + foto por parada — fotos se agregan después). Preguntas para Luka/Mati/Toni ya redactadas (bio + conocimiento local + operación práctica), pendiente de enviar.

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
- **Al pedir cambios de precio, nombrar el producto por su ID/slug exacto en `pricing.ts`, no por descripción libre.** El 04/08 "Vis tour" se interpretó como producto nuevo inexistente y se creó una entrada (`vis-island-tour`) que no correspondía a nada real, en vez de tocar "5 Islands, 4 Beaches & Blue Cave" que sí existía. Si el nombre del producto en la instrucción no calza 1:1 con una key conocida de `pricing.ts`, parar y confirmar antes de crear nada nuevo.
- **Barridos de copy SIEMPRE case-insensitive.** Un grep case-sensitive de "local skipper" (29/07) dejó pasar "Local skipper" en schema.ts. Al buscar una frase para sacar/reemplazar, cubrir todas las capitalizaciones.
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
