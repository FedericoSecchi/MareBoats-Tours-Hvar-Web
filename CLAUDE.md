# MareBoats Tours Hvar — Contexto del Proyecto
**Actualizado: 2 Junio 2026**

---

## Negocio
- Tours privados y compartidos en speedboat desde Hvar, Croacia
- Propietario: Nikola (fundador, operaciones). Josip (hermano de Nikola, head skipper). Fede = skipper ocasional + marketing + tech
- WhatsApp único canal de conversión: +385 95 196 6734 → https://wa.me/385951966734
- URL live: https://mareboatshvar.com
- Repo: https://github.com/FedericoSecchi/MareBoats-Tours-Hvar-Web

## Equipo (para copy)
- **Nikola** — fundador, nació y creció en Hvar, dirige las operaciones, skipper ocasional, habla inglés y croata
- **Josip** — hermano de Nikola, ~38 años, head skipper, toda su vida en el agua, vivió en Inglaterra, muy querido por los clientes, habla inglés y croata
- **Federico (Fede)** — argentino, ciudadanía italiana, empezó en Optimist a los 6 años, mundiales y sudamericanos representando Argentina, coach de la Federación de Vela de Ecuador 2 años, trabajó con la clase 69F, clásicos y cruceros hasta 90 pies, maneja el marketing de MareBoats, skipper ocasional. Habla español, italiano e inglés. Sin título/cargo en la web.
- **Coti** — diseño, redes sociales, posts GBP

## La flota — CONFIRMADO por Nikola 29/05
- 4 barcos en total (corregido de 5)
- **Blue Mariner**: cómodo 5 · máximo 8 personas
- **Red Mariner**: cómodo 5 · máximo 8 personas
- **Jolly**: cómodo 6 · máximo 9 personas
- **Clubman**: cómodo 6 · máximo 9 personas
- Motores: 150–300hp
- Equipamiento: sun canopy, sistema de música, conservadora, snorkel y máscaras
- Tours privados (grupo propio) o compartidos (sale cuando se llena). Grupos grandes: múltiples speedboats en convoy. Máximo convoy: 14 personas (2 botes).
- **NO mencionar "RIB" en copy** — decisión consciente de Nikola. Usar "speedboat" siempre.
- El skipper no es un guía, pero puede ir contando y actuando de guía durante el tour.

## Stack técnico
- Next.js 14 + Tailwind CSS + TypeScript — `output: 'export'` (static export)
- App Router en /app — componentes activos en /components/ui/ y /components/sections/
- **NUNCA tocar /src/components/** — es código legacy
- Hosting: Netlify — deploy automático en cada push a main
- Redirects: netlify.toml (NO usar next.config.mjs para redirects en runtime — static export)
- Herramienta de código: Claude Code (reemplazó a Cursor desde 23/05)
- NEXT_PUBLIC_ env vars son build-time — hardcodear Measurement ID directamente en layout.tsx

## Arquitectura de páginas — estado al 02/06/2026
- `/rentals/` — página unificada: Boat Rental (con/sin skipper, con/sin licencia) + Water Scooter + FAQ. Es la página SEO principal para keywords de rental.
- `/boat-rental/` — eliminada. Redirect 301 → `/rentals/` en netlify.toml.
- `/landing/pre-tour/` — reescrita el 01/06. Ver sección abajo.
- `/hvar-islands-guide/` — página nueva creada 01/06. Server Component, indexada, en sitemap (priority 0.8). 9 destinos con historia + 30 paradas locales + Google Maps links. Ataca keywords: "Hvar islands guide", "Blue Cave what to expect", "Pakleni Islands stops". NO tocar `/on-tour/` — sigue intacta para el QR del barco.
- `/explore/` — expandida 01/06. Hub principal de contenido. 7 secciones: Where to Eat, What to See, Beaches, Practical Info, FAQ (FAQPage JSON-LD), CTA. Keywords: "things to do in Hvar", "hvar beaches", "hvar travel guide".
- `/on-tour/` — noindex, sigue intacta. Acceso via QR hub `/qr/`. NO indexar — es herramienta operativa del tour.
- `/transfers/` — Mapbox Static Images API implementado. Ver sección abajo.
- Nav: Tours → Rentals → Transfers → **Explore** → About

## Cluster SEO — páginas interconectadas
- `/explore/` (hub) → cards hacia `/guide/` y `/hvar-islands-guide/`
- `/guide/` → link hacia `/hvar-islands-guide/` al final de "Where We Go"
- `/hvar-islands-guide/` → CTA final hacia WhatsApp + /tours/
- `/tours/` → 6ta card "Boat Rental" apunta a `/rentals/`

## Herramientas operativas
- **Vesselio** — app de gestión de reservas que usa Nikola. Fede tiene acceso como Operator.
  - URL: mareboats.vesselio.app · apikey: Fedde123
  - Muestra flota, calendario de reservas, clima en Hvar
  - Uso: referencia operativa (qué barcos están ocupados, cuándo). No conectar al sitio ni a GA4.

## Reglas inamovibles de contenido
- Idiomas a bordo solo aplican cuando Fede es el skipper — NO prometer genéricamente en web ni OTAs
- Botellas de vidrio: permitidas a bordo
- Comida: permitida, pero se recomiendan restaurantes
- No fumar a bordo
- No hay baño a bordo — guests usan los de restaurantes en paradas
- Formularios de contacto: NO. Solo WhatsApp
- Water Scooter addon: €40/unit — disponible en todos los tours EXCEPTO tours a Vis (isla). Máx 2h/unit, no recargable a bordo.
- Photo & Video Shoot: €200 — lo hace Fede (drone + underwater + on board). Full gallery post-tour. Disponible en todos los tours.
- NO mencionar año exacto de fundación de MareBoats
- NO mencionar RIB ni mostrar foto del RIB — usar "speedboat" siempre.
- Boat rental sin licencia: MareBoats lo ofrece directamente (no mencionar "partners" ni operadores externos)
- Em-dashes (—) y en-dashes (–) prohibidos en copy del sitio — usar coma, punto, dos puntos o reescribir
- **"Lunch not included"** — wording unificado en todo el sitio desde 02/06

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

## ✅ ESTADO REAL al 02/06/2026

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

### Google Business Profile
- Verificado · 5.0 ⭐ · +7 reviews nuevas el 30/05
- 400 interacciones totales (dic 2025–may 2026)
- GBP Maps link: https://maps.app.goo.gl/k84JNBQLvqgZunEX6
- Pendiente: 20-30 fotos reales (post-shoot) · Q&A (4-5 preguntas)

### GetYourGuide — mayo 2026
- Revenue: €1,635 · Bookings: 7 · Rating: 5.0 ⭐
- VIP 5 Islands: €1,530 · 6 bookings · Jun 22 SOLD OUT
- Red Rocks: €105 · 1 booking · 0 reviews
- Underwater Scooters: ~70% completo, pendiente prueba + aprobación

### Booking.com — pendiente aprobación Nikola
### Viator — bloqueado por seguro
### Airbnb — bloqueado por Ministerio Turismo Hvar

---

## /landing/pre-tour/ — estado al 02/06/2026

### Mensaje de WhatsApp de Nikola (texto fijo)
```
Hey! 👋 Booking confirmed, looking forward to having you on board.
Here's everything you need for the day — meeting point, what to bring, and a few tips:
👉 mareboatshvar.com/landing/pre-tour
Any questions, just message me here.
See you on the water! 🌊
Nikola
```

### Meeting Point
- Coordenadas: 43.1690147, 16.4429617
- Google Maps: https://maps.app.goo.gl/k84JNBQLvqgZunEX6

### Accordion — extra costs y add-ons (estado 02/06)
| Tour | Extra Costs | Add-on |
|---|---|---|
| 5 Islands & Blue Cave | Blue Cave €24 · Green Cave €12 · Lunch not included (Pakleni o Palmizana) | Water Scooter €40 — solo Pakleni/Palmizana, NO leg Vis/Bisevo |
| Red Rocks & Pakleni | Lunch not included — restaurants at Pakleni | Water Scooter €40 |
| Pakleni Half Day | None | Water Scooter €40 |
| Sunset Cruise | None | Water Scooter €40 |
| Private Charter | Fuel not included | Water Scooter €40 |
| Split Transfer | None | — |

---

## /rentals/ — estado al 02/06/2026
- Tipografía body: `text-base` (16px) unificado
- On Board section: cards (una fila por item, badge status izquierda)
- Rental Rules section: tabla (stacked mobile / 2 columnas desktop)
- Water Scooter card: centrada con `mx-auto`

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

---

## Copy — "Lunch not included" unificado (02/06)
Aplicado en `lib/tours-data.ts` + `app/landing/pre-tour/page.tsx`:
| Tour | Wording |
|---|---|
| 5 Islands | "Lunch not included — restaurants available at Pakleni or Palmizana" |
| Red Rocks & Pakleni | "Lunch not included — restaurants available at Pakleni" |
| Pakleni Half Day | "Lunch not included — restaurants available at Pakleni" |
| Private Charter | "Lunch not included — restaurants available at stops along your route" |
| Sunset / Transfer | Sin mención |

---

## PLAN UNIFICADO — Estado al 02/06/2026

### ✅ BLOQUE 0 — CERRADO
### ✅ SEO Website — CERRADO 31/05
### ✅ /landing/pre-tour/ — CERRADO 01/06
### ✅ SEO Cluster — CERRADO 01/06

### ✅ Sitio — fixes 02/06 — CERRADO
- ✅ Hero pre-tour mobile: font-size fixed
- ✅ "Lunch not included" unificado site-wide
- ✅ Water Scooter add-on en accordion pre-tour (5 tours, restricción Vis correcta)
- ✅ /rentals/: tipografía 16px, On Board cards, Rental Rules tabla, WS card centrada
- ✅ /transfers/: Mapbox Static Images API con rutas náuticas reales

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
- [ ] Q&A (4-5 preguntas)
- [ ] Post-shoot: 20-30 fotos

### 🚀 BLOQUE 3 — Google Ads
- [ ] Crear/verificar cuenta Google Ads
- [ ] Importar conversión `whatsapp_click` desde GA4
- [ ] 1 campaña · 3 ad groups: Boat Tours / Blue Cave / Boat Rental
- [ ] €15-20/día · Smart Bidding después de 15-20 conversiones
- [ ] Keywords negativas: jobs, for sale, free, cheap, ferry, ciudades ≠ Hvar
- [ ] Geo: Hvar + Split + radio
- [ ] Destino: /landing/* (no la home)
- [ ] Meta Ads: NO ahora — fase 2

### 🇺🇸 EN EL RADAR — Segmento US / alto ticket
US es mercado #1 en GA4. Charter premium varios miles de €. Definir producto + precio + página. Después de Bloques 0-3.

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
