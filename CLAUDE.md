# MareBoats Tours Hvar — Contexto del Proyecto
**Actualizado: 1 Junio 2026**

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

## Arquitectura de páginas — estado al 01/06/2026
- `/rentals/` — página unificada: Boat Rental (con/sin skipper, con/sin licencia) + Water Scooter + FAQ. Es la página SEO principal para keywords de rental.
- `/boat-rental/` — eliminada. Redirect 301 → `/rentals/` en netlify.toml.
- `/landing/pre-tour/` — reescrita el 01/06. Ver sección abajo.
- `/hvar-islands-guide/` — página nueva creada 01/06. Server Component, indexada, en sitemap (priority 0.8). 9 destinos con historia + 30 paradas locales + Google Maps links. Ataca keywords: "Hvar islands guide", "Blue Cave what to expect", "Pakleni Islands stops". NO tocar `/on-tour/` — sigue intacta para el QR del barco.
- `/explore/` — expandida 01/06. Hub principal de contenido. 7 secciones: Where to Eat, What to See, Beaches, Practical Info, FAQ (FAQPage JSON-LD), CTA. Keywords: "things to do in Hvar", "hvar beaches", "hvar travel guide".
- `/on-tour/` — noindex, sigue intacta. Acceso via QR hub `/qr/`. NO indexar — es herramienta operativa del tour.
- Nav: Tours → Rentals → Transfers → **Explore** → About (Guide renombrado a Explore el 01/06, apunta a `/explore/`)

## Cluster SEO — páginas interconectadas
Las tres páginas de contenido forman un cluster con internal links cruzados:
- `/explore/` (hub) → tiene cards hacia `/guide/` y `/hvar-islands-guide/`
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
- NO mencionar RIB ni mostrar foto del RIB — usar "speedboat" siempre. `/about/` corregido 01/06.
- Boat rental sin licencia: MareBoats lo ofrece directamente (no mencionar "partners" ni operadores externos)
- Em-dashes (—) y en-dashes (–) prohibidos en copy del sitio — usar coma, punto, dos puntos o reescribir

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
- NO mencionar "RIB" ni mostrar foto del RIB (decisión consciente de Nikola)
- Mantener "VIP" en el título

### Reglas de copy GYG (aprendidas mayo 2026)
- "Skipper" > "Tour Guide" en el copy. El tag "Tour guide" en Guide Information ya cubre esa keyword a nivel de metadatos.
- "Hvar Boat Tour" > "From Hvar" como keyword en el título — mayor volumen de búsqueda.
- Blue Cave es la keyword estrella — siempre en el título y al inicio de la descripción.
- No combinar conteo de cuevas ("3 caves") con Blue Cave en el título — confunde al guest.
- No escribir "contact us directly" en listings.
- GYG permite 3000 chars en full description — usarlos.
- Mencionar stops específicos: Stiniva Bay (Vis), Podstražje Beach, Sea-Monk Cave, Zdrilca (Pakleni), Borče Bay, Dubovica Beach, Red Rocks.
- El espíritu de Nikola: menos tiempo navegando, más tiempo en el agua. Skipper como amigo local, no guía turístico.
- Main listing de GYG es el contenedor — no mencionar privado/compartido ni precio ni duración. Eso va en cada opción.

---

## ✅ ESTADO REAL al 01/06/2026

### GA4
- `whatsapp_click` verificado ✅ — 41 eventos · 24 usuarios únicos (últimos 28 días)
- 286 sesiones · 156 usuarios activos · 30s engagement medio
- Canales: Direct 48.6% · Organic Search 32.9% · Organic Social 6.6% · Referral 6.3%
- Páginas top: / (245 vistas) · /tours/ (84) · /tours/blue-cave-pakleni-islands/ (60) · /rentals/ (52)
- Mercados: US #1 · Croatia · UK · Argentina · Italy · Germany
- Google Ads: luz verde técnica. Pendiente: crear/verificar cuenta + importar conversión.

### Google Search Console
- Conectado a GA4 ✅
- 45 clics · 1,550 impresiones · CTR 2.9% · Posición media 24.3 (últimos 28 días)
- Keywords con mayor oportunidad: "hvar boat rental" (126 imp, pos 30.1), "rent a boat hvar" (48 imp, pos 32.7), "hvar boat hire" (31 imp, pos 35.7) — todas en posición 30+ = invisibles

### Google Business Profile
- Verificado · 5.0 ⭐ · Reviews: bajaron a 26, luego +7 nuevas el 30/05 → verificar total actual
- 400 interacciones totales (dic 2025–may 2026) · Pico abril: 129 interacciones
- 249 personas vieron el perfil en mayo 2026
- Fotos: 2 videos + 20+ fotos owner. Top foto: 2,340 vistas.
- Posts activos: solo 2 (ambos de abril) — Coti tiene instrucciones de publicar los pendientes de mayo-junio
- GBP Place ID: 0x1335810a66e18add:0x7bb6c12e07bdddde
- GBP Maps link: https://maps.app.goo.gl/k84JNBQLvqgZunEX6
- Pendiente: 20-30 fotos reales (post-shoot) · cargar Q&A (4-5 preguntas frecuentes)

### GetYourGuide — últimos 30 días (mayo 2026)
- Revenue total: €1,635 · Bookings: 7 · Rating: 5.0 ⭐

**Producto 1 — VIP 5 Islands** (ID: 1099792) ✅
- Revenue: €1,530 · Bookings: 6 · Conversion: 0.78% · ~769 views estimadas
- Capacidad: 7/día · Horario: 10:00 daily
- ⚠️ Jun 15: 6/7 · Jun 22: SOLD OUT · Jul 4: 5/7
- Copy: título + short desc + full desc + highlights actualizados y aprobados (26/05) ✅
- Pendiente: cargar itinerary (falló por error GYG — reintentar) · fotos post-shoot

**Producto 2 — Red Rocks & Pakleni** (ID: 1029796) ✅
- Revenue: €105 · Bookings: 1 · Conversion: 2.59% · ~39 views estimadas
- Copy main listing + 3 opciones: actualizados 29/05 ✅
- Sin reviews aún — pedir al único guest que reservó
- Precio Full-Day: €710 en GYG (con comisión) · €500 en website (sin comisión) ✅ CONFIRMADO
- Max convoy shared: 14 personas (2 botes) ✅ CONFIRMADO

**Producto 3 — Underwater Scooters**
- Not yet submitted (70%) — bloqueado hasta prueba con Fede + aprobación Nikola

### OTAs adicionales
- **Airbnb:** bloqueado por documentación Ministerio de Turismo Hvar. No accionable.
- **Viator:** en espera de aprobación (3+ semanas). No accionable.
- **Booking.com:** copy armado → pendiente aprobación de Nikola → publicar.

---

## Tours y Precios confirmados

### Red Rocks & Pakleni — Paradas
Borče Bay (Milna) → Red Rocks → Dubovica Beach (con cueva secreta) → Pakleni Islands (Palmižana o Zdrilca)
Incluye: speedboat, skipper, fuel, snorkeling masks, icebox con hielo, agua embotellada.

### Precios
- 5 Islands 4 Beaches 3 Caves: €130/persona (grupo) · €700 privado (hasta 10)
- Red Rocks & Pakleni Half-Day (4h): €400 privado
- Red Rocks & Pakleni Full-Day (6h): €500 website · €710 GYG (diferencia = comisión GYG) ✅
- Red Rocks & Pakleni Shared: €85/persona (mín. 4 personas)
- Sunset Cruise: €250
- Private Charter (barco + skipper, sin fuel): €500
- Split–Hvar transfer: €500 · Airport–Hvar transfer: €600
- Scooter Rental: €50/día · €30-40/medio día (6 unidades)
- Yacht/Sailboat Taxi: a pedido
- Water Scooter addon: €40/u (en testing — NO publicar en OTAs aún)
- Photo & Video Shoot addon: €200 (Fede — drone + underwater + on board)
- Boat Rental: desde €150 · con skipper, con licencia propia, o sin licencia

---

## /landing/pre-tour/ — estado al 01/06/2026

### Qué es
Landing page post-booking. Nikola la manda por WhatsApp a cada guest cuando confirma la reserva.

### Mensaje de WhatsApp de Nikola (texto fijo, copiar tal cual)
```
Hey! 👋 Booking confirmed, looking forward to having you on board.
Here's everything you need for the day — meeting point, what to bring, and a few tips:
👉 mareboatshvar.com/landing/pre-tour
Any questions, just message me here.
See you on the water! 🌊
Nikola
```

### URL
`https://mareboatshvar.com/landing/pre-tour/` — **indexable** (robots noindex removido el 01/06)

### Meeting Point — ACTUALIZADO 01/06
- Coordenadas: 43.1690147, 16.4429617
- Dirección: 3 minutos caminando desde el ferry terminal, hacia la catedral. Buscar el barril de madera MareBoats en el puerto.
- Google Maps link: https://maps.app.goo.gl/k84JNBQLvqgZunEX6 (abre GBP de MareBoats)

### Estructura de la página
1. Hero — confirmación de booking + selector de tour
2. Meeting Point — embed mapa + link GBP
3. Upsell — Water Scooter (€40/u) + Photo & Video Shoot (€200)
4. Accordion "Your tour details" — 6 tours con info específica
5. What to Bring — checklist interactivo
6. What the Adriatic is actually like — contenido SEO
7. Weather Policy
8. Link a /guide
9. Final CTA WhatsApp

### Accordion — horarios por tour
| Tour | Meet | Salida | Duración | Extra costs |
|---|---|---|---|---|
| 5 Islands & Blue Cave | 09:45 | 10:00 | 7h | Blue Cave €24 · Green Cave €12 · Lunch |
| Red Rocks & Pakleni | 15 min antes | 09:00 o 14:00 | 4h o 6h | Ninguno · Lunch opcional Pakleni |
| Pakleni Half Day | 15 min antes | 09:00 o 14:00 | 3–4h | Ninguno |
| Sunset Cruise | 19:15 | 19:30 | 2h | Ninguno |
| Private Charter | A convenir | Flexible | Full day | Fuel no incluido |
| Split Transfer | A demanda | - | ~45 min | Ninguno |

### Add-ons — reglas
- Water Scooter: NO disponible en tours a Vis (isla). Todos los demás tours: sí.
- Photo & Video: disponible en todos los tours. Lo hace Fede.

---

## PLAN UNIFICADO — Estado al 01/06/2026

### ✅ BLOQUE 0 — CERRADO
- ✅ `whatsapp_click` verificado en GA4 Realtime
- ✅ UTMs Parte A: GBP e Instagram etiquetados
- ✅ Tarea Coti creada en Notion
- ✅ Importar conversión en Google Ads — pendiente menor

### ✅ SEO Website — CERRADO 31/05
- ✅ `/boat-rental/` limpiada de "RIB", copy actualizado, keywords expandidas
- ✅ FAQ schema con 8 preguntas (featured snippets)
- ✅ Sección "No Licence? No Problem." — producto de rental sin licencia presentado como propio de MareBoats
- ✅ `/boat-rental/` fusionada en `/rentals/` — arquitectura de una sola página
- ✅ Redirect 301 `/boat-rental/` → `/rentals/` en netlify.toml
- ✅ Nav simplificada: Tours → Rentals → Transfers → Guide → About
- ✅ Internal links desde todas las tour pages → `/rentals/`
- ✅ Homepage subtitle: "Private boat tours, boat rental & water scooter hire — from Hvar Harbour."
- Keywords target activas: "hvar boat rental", "rent a boat hvar", "hvar boat hire", "boat hire hvar no licence", "rent a boat hvar no licence"

### ✅ /landing/pre-tour/ — CERRADO 01/06
- ✅ Página reescrita completamente
- ✅ robots noindex removido — página ahora indexable
- ✅ Metadata SEO: "What to Expect on a Hvar Boat Tour | MareBoats"
- ✅ Meeting point actualizado: coordenadas 43.1690147, 16.4429617 · link GBP
- ✅ Upsell section: Water Scooter €40 + Photo & Video €200
- ✅ Accordion con 6 tours — info específica por tour
- ✅ Sección SEO "What the Adriatic is actually like"
- ✅ Link interno a /guide
- ✅ Mensaje WhatsApp de Nikola definido (texto fijo)

### ✅ SEO Cluster — CERRADO 01/06
- ✅ `/hvar-islands-guide/` creada — Server Component, indexada, sitemap priority 0.8
- ✅ `/explore/` expandida a hub — 7 secciones, FAQPage JSON-LD schema
- ✅ Navbar: "Guide" → "Explore" apuntando a `/explore/`
- ✅ Internal links cruzados: /explore/ → /guide/ + /hvar-islands-guide/ · /guide/ → /hvar-islands-guide/
- ✅ `/about/` — "RIBs" eliminado, reemplazado por "Modern speedboats"
- ✅ `/tours/` — 6ta card "Boat Rental" apuntando a `/rentals/`

### 📸 BLOQUE 1 — Shoot (drone DJI Mavic 4 Pro)
- Hero del sitio: barco navegando, agua turquesa, horizontal, sin gente reconocible
- 1 foto por tour: Blue Cave · Red Rocks/cliffs · Pakleni · golden hour (sunset)
- Barco vacío y limpio en el muelle
- "Barrel"/meeting point con cartel MareBoats
- Nikola al timón (desbloquea /about + E-E-A-T)
- Fede skipper (desbloquea /about + /landing/pre-tour)
- 15-20 sueltas para GBP semanal y OTAs
- Filmar prueba de underwater scooters con Nikola
- Reglas: geotag ON · exportar <500KB · nombrar con keyword (`blue-cave-hvar-boat-tour.jpg`)

### 🧹 BLOQUE 2 — Cerrar lo que está al 90%
**GYG:**
- [ ] Cargar itinerary VIP 5 Islands (falló por error GYG — reintentar)
- [ ] Aumentar disponibilidad junio-julio (Jun 15 casi lleno, Jun 22 sold out)
- [ ] Pedir review al guest de Red Rocks (único booking, 0 reviews)
- [ ] Underwater Scooters: terminar y publicar (post-prueba + post-aprobación)
- [ ] Post-shoot: actualizar fotos todos los listings

**Booking.com:**
- [ ] Aprobación de Nikola del copy → publicar

**Sitio:**
- [ ] /about: cerrar con fotos del shoot + historia de Nikola
- [ ] Actualizar fotos hero y tour pages con material del shoot

**GBP:**
- [ ] Coti: publicar posts pendientes mayo-junio
- [ ] Cargar Q&A (4-5 preguntas frecuentes)
- [ ] Post-shoot: subir 20-30 fotos reales

### 🚀 BLOQUE 3 — Google Ads
- [ ] Verificar/crear cuenta Google Ads de MareBoats
- [ ] Importar conversión `whatsapp_click` desde GA4
- [ ] 1 campaña Search · 3 ad groups: Boat Tours / Blue Cave / Boat Rental
- [ ] Presupuesto inicial €15-20/día (shoulder season)
- [ ] Keywords negativas: jobs, for sale, salary, free, cheap, ferry, ciudades ≠ Hvar
- [ ] Geo: Hvar + Split + radio · bid-up para gente físicamente en Hvar
- [ ] Destino: landing pages /landing/* (no la home)
- [ ] Meta Ads: NO ahora — fase 2

### 🇺🇸 EN EL RADAR — Segmento US / alto ticket
US es mercado #1 en GA4. Charter premium varios miles de €. Vuelo directo NY-Split. Definir producto + precio + página. Después de Bloques 0-3.

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
