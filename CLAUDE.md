# MareBoats Tours Hvar — Contexto del Proyecto
**Actualizado: 29 Mayo 2026 — revisado por Nikola (versión HR)**

---

## Negocio
- Tours privados y compartidos en **speedboat** desde Hvar, Croacia
- Propietario: Nikola (fundador, operaciones). Josip (hermano de Nikola, head skipper). Fede = skipper ocasional + marketing + tech
- WhatsApp único canal de conversión: +385 95 196 6734 → https://wa.me/385951966734
- URL live: https://mareboatshvar.com
- Repo: https://github.com/FedericoSecchi/MareBoats-Tours-Hvar-Web

## Equipo (para copy)
- **Nikola** — fundador, nació y creció en Hvar, dirige las operaciones, skipper ocasional, habla inglés y croata
- **Josip** — hermano de Nikola, ~38 años, head skipper, toda su vida en el agua, vivió en Inglaterra, muy querido por los clientes, habla inglés y croata
- **Federico (Fede)** — argentino, ciudadanía italiana, empezó en Optimist a los 6 años, mundiales y sudamericanos representando Argentina, coach de la Federación de Vela de Ecuador 2 años, trabajó con la clase 69F, clásicos y cruceros hasta 90 pies, maneja el marketing de MareBoats, skipper ocasional. Habla español, italiano e inglés. Sin título/cargo en la web.
- **Coti** — diseño, redes sociales, posts GBP

## La flota
- 4 barcos en total (corregido por Nikola 29/05 — antes figuraba 5 en Vesselio)
- **NO mencionar "RIB" en copy** — decisión consciente de Nikola. Usar **"speedboat"** siempre.
- Motores: 150–300hp
- Equipamiento: sun canopy, sistema de música, conservadora, snorkel y máscaras
- Tours privados (grupo propio) o compartidos (sale cuando se llena). Grupos grandes: múltiples speedboats en convoy

| Barco | Cómodo | Máximo |
|-------|--------|--------|
| Blue Mariner | 5 | 8 |
| Red Mariner | 5 | 8 |
| Jolly | 6 | 9 |
| Clubman | 6 | 9 |

## Stack técnico
- Next.js 14 + Tailwind CSS + TypeScript — `output: 'export'` (static export)
- App Router en `/app` — componentes activos en `/components/ui/` y `/components/sections/`
- **NUNCA tocar `/src/components/`** — es código legacy
- Hosting: Netlify — deploy automático en cada push a `main`
- Redirects: `netlify.toml` (NO usar `next.config.mjs` para redirects en runtime — static export)
- Herramienta de código: Claude Code (reemplazó a Cursor desde 23/05)
- `NEXT_PUBLIC_` env vars son build-time — hardcodear Measurement ID directamente en `layout.tsx`

## Herramientas operativas
- **Vesselio** — app de gestión de reservas que usa Nikola. Fede tiene acceso como Operator.
  - URL: `mareboats.vesselio.app` · apikey: `Fedde123`
  - Muestra flota, calendario de reservas, clima en Hvar
  - Uso: referencia operativa (qué barcos están ocupados, cuándo). **No conectar al sitio ni a GA4.**

## Reglas inamovibles de contenido
- Idiomas a bordo solo aplican cuando Fede es el skipper — NO prometer genéricamente en web ni OTAs
- Botellas de vidrio: permitidas a bordo
- Comida: permitida, pero se recomiendan restaurantes
- No fumar a bordo
- **No hay baño a bordo** — guests usan los de restaurantes en paradas
- Formularios de contacto: NO. Solo WhatsApp
- **Water Scooter (addon): EN TESTING** — no publicar aún. Nikola hace prueba con Fede cuando llegue.
- NO mencionar año exacto de fundación de MareBoats
- **Fotos drone + underwater: se venden APARTE, a pedido, NO incluidas por default**
- **NO mencionar "RIB" ni mostrar foto del RIB** — usar "speedboat" siempre
- El skipper **no es guía turístico** — puede ir contando y actuando de guía, pero no se anuncia como tal

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

Nada se cambia en GYG, Booking.com, Viator ni Airbnb sin que **Nikola lea y apruebe el texto PRIMERO**. Flujo obligatorio: Fede redacta → manda por WhatsApp → Nikola aprueba → recién entonces se publica. Nunca al revés.

**Lección registrada (incidente 25/05):** se modificó el listing VIP 5 Islands sin consultar. Nikola tenía 20 personas reservadas sobre el concepto original. El concepto de un tour es una decisión de negocio, no de copy. Nunca tocar un listing de OTA sin guardar el texto original antes (screenshot o copia).

### Concepto VIP 5 Islands — fuente de verdad (palabras de Nikola, no modificar)
- Salida 10:00 (no 10:30 como la competencia) → evitan multitudes
- Visitan 3 cuevas
- Grupos chicos → mejor experiencia posible
- NO mencionar "RIB" ni mostrar foto del RIB
- Mantener "VIP" en el título
- La descripción original "tenía escrito todo lo que necesitaban saber y por qué el tour es especial"

### Reglas de copy GYG (aprendidas mayo 2026)
- "Skipper" > "Tour Guide" en el copy — más preciso y premium
- "Hvar Boat Tour" > "From Hvar" como keyword en el título — mayor volumen de búsqueda
- Blue Cave es la keyword estrella — siempre en el título y al inicio de la descripción
- No combinar conteo de cuevas ("3 caves") con Blue Cave en el título — confunde al guest
- No escribir "contact us directly" en listings — usar "ask us for details when booking"
- GYG permite 3000 chars en full description — usarlos. Más detalle = mejor ranking y conversión
- Mencionar stops específicos: Stiniva Bay (Vis), Podstražje Beach, Sea-Monk Cave, Zdrilca (Pakleni), Borče Bay, Dubovica Beach, Red Rocks
- El espíritu de Nikola: **menos tiempo navegando, más tiempo en el agua**. Skipper como amigo local, no guía turístico
- Main listing de GYG es el contenedor — no mencionar privado/compartido ni precio ni duración. Eso va en cada opción
- Diferencias entre opciones en GYG se explican en Option title (60 chars) + Option description (255 chars)

---

## ✅ ESTADO REAL al 29/05/2026

### GA4
- **Conversión `whatsapp_click` VERIFICADA ✅** — dispara en producción (confirmado en Realtime el 25/05)
- Google Ads tiene luz verde técnica. Pendiente: crear/verificar cuenta de Ads + importar la conversión
- **Métricas (últimos 28 días — al 23/05/2026):**
  - 95 usuarios activos · 94 nuevos · 48s interacción media
  - Mercados: US 18 · Croatia 10 · UK 9 · Argentina 7 · Italy 7 · Germany 6
  - Canales: Direct 86 · Organic Search 51 · Unassigned 13 · Referral 12 · Organic Social 11
  - Páginas top: Private Boat Tours 142 · /tours 51 · Blue Cave 36 · Rentals 35
- UTMs Parte A hechos: GBP e Instagram ya etiquetados ✅

### Google Business Profile
- Verificado · **35 reviews · 5.0 ⭐**
- URL listing: https://maps.app.goo.gl/U6kgAaRG81KZmqUEA
- URL reviews directa: https://g.page/r/Cd7dvQcuwbZ7EBM/review
- Punto de encuentro ("barrel"): https://maps.app.goo.gl/3UamDy3Mh9dt4UpM7
- Coordenadas: lat 43.16847, lng 16.44300
- Descripción optimizada ✅ · 3 categorías cargadas ✅
- 8 posts mayo-junio asignados a Coti
- Pendiente: 20-30 fotos reales (post-shoot) · cargar Q&A (4-5 preguntas frecuentes)

### Google Search Console
- Conectado a GA4 ✅
- 44 clics · 775 impresiones · CTR 5.7% · Posición media 35.6 (16 meses)
- Oportunidad: keywords "rent/hire a boat hvar" con 200+ impresiones, casi 0 clics

### GetYourGuide

**Producto 1 — VIP 5 Islands** · Bookable ✅
- Título live: *Hvar Boat Tour: 5 Islands, 4 Beaches & Blue Cave | Speedboat*
- Title, short description, full description, highlights — actualizados y aprobados por Nikola (26/05) ✅
- Pendiente: cargar itinerary (falló por error GYG — reintentar)
- Pendiente post-shoot: actualizar fotos

**Producto 2 — Red Rocks & Pakleni** · Bookable ✅ · 1 main listing + 3 opciones
- Main listing — copy actualizado 29/05 ✅
  - Title: *Hvar Boat Tour: Red Rocks & Pakleni Islands | Speedboat*
  - Short description: *Speedboat tour from Hvar: Red Rocks, Dubovica Beach & Pakleni Islands. Less sailing, more swimming. Local skipper who knows every bay — Hvar the way locals experience it.*
- **Opción 1** — Private Half-Day (4h, €400, 09:00–13:00) ✅
  - Option title: *Private Half-Day Tour — 4 Hours | Morning Departure*
  - Meeting point: barrel en Šetalište put Križa
- **Opción 2** — Private Full-Day (6h, €500 web / €710 GYG, 11:00–17:00) ✅
  - Option title: *Private Full-Day Tour — 6 Hours | Flexible Departure*
- **Opción 3** — Shared (€85/persona, mín. 4 personas, 11:00) ✅
  - Option title: *Shared Boat Tour — Red Rocks & Pakleni | From €85*
  - Max group size: 14 (2 speedboats en convoy) ✅ confirmado por Nikola
  - Booking engine: Automatically accept
  - ⚠️ ESTRATEGIA SHARED: cerrar disponibilidad por defecto y abrir manualmente cuando hay demanda suficiente

**Producto 3 — Underwater Scooters** · No submitted (70%)
- Bloqueado hasta: prueba con Fede en Hvar + aprobación de Nikola

### OTAs adicionales
- **Airbnb**: bloqueado por documentación Ministerio de Turismo Hvar. No accionable.
- **Viator**: en espera de aprobación (3+ semanas). No accionable.
- **Booking.com**: copy armado → pendiente aprobación de Nikola → publicar.

---

## Tours y Precios confirmados

### Red Rocks & Pakleni — Paradas
Borče Bay (Milna) → Red Rocks → Dubovica Beach (con cueva secreta) → Pakleni Islands (Palmižana o Zdrilca)

Incluye: speedboat, skipper, fuel, snorkeling masks, icebox con hielo, agua embotellada.

| Tour | Precio |
|------|--------|
| 5 Islands 4 Beaches 3 Caves | €130/persona (grupo) · €700 privado (hasta 10) |
| Red Rocks & Pakleni Half-Day (4h) | €400 privado |
| Red Rocks & Pakleni Full-Day (6h) | €500 privado web · €710 en GYG |
| Red Rocks & Pakleni Shared | €85/persona (mín. 4 personas) |
| Sunset Cruise | €250 |
| Private Charter (barco + skipper, sin fuel) | €500 |
| Split–Hvar transfer | €500 |
| Airport–Hvar transfer | €600 |
| Scooter Rental | €50/día · €30-40/medio día (6 unidades) |
| Yacht/Sailboat Taxi | a pedido |
| Water Scooter addon | €40/u ⚠️ en testing — NO publicar |

---

## PLAN UNIFICADO — Estado al 29/05/2026

### ✅ BLOQUE 0 — CERRADO
- ✅ `whatsapp_click` verificado en GA4 Realtime
- ✅ UTMs Parte A: GBP e Instagram etiquetados
- ✅ Tarea Coti creada en Notion
- Pendiente menor: importar conversión en cuenta de Google Ads

### 📸 BLOQUE 1 — Shoot (drone DJI Mavic 4 Pro)
Shot list prioritaria:
- Hero del sitio: barco navegando, agua turquesa, horizontal, sin gente reconocible
- 1 foto por tour: Blue Cave · Red Rocks/cliffs · Pakleni · golden hour (sunset)
- Barco vacío y limpio en el muelle
- "Barrel"/meeting point con cartel MareBoats
- Nikola al timón (desbloquea /about + E-E-A-T)
- Fede skipper (desbloquea /about + /landing/pre-tour)
- 15-20 sueltas para GBP semanal y OTAs
- Filmar prueba de underwater scooters con Nikola

Reglas: geotag ON · exportar <500KB · nombrar con keyword (`blue-cave-hvar-boat-tour.jpg`)

### 🧹 BLOQUE 2 — Cerrar lo que está al 90%
**GYG:**
- Cargar itinerary VIP 5 Islands (falló por error GYG — reintentar)
- Underwater Scooters: terminar y publicar (post-prueba + post-aprobación)
- Post-shoot: actualizar fotos todos los listings

**Booking.com:**
- Aprobación de Nikola del copy → publicar

**Sitio:**
- `/about`: cerrar con fotos del shoot + historia de Nikola
- GBP: cargar Q&A (4-5 preguntas frecuentes)

### 🚀 BLOQUE 3 — Google Ads
- Verificar/crear cuenta Google Ads de MareBoats
- Importar conversión `whatsapp_click` desde GA4
- 1 campaña Search · 3 ad groups: Boat Tours / Blue Cave / Boat Rental
- Presupuesto inicial €15-20/día (shoulder season)
- Keywords negativas: jobs, for sale, salary, free, cheap, ferry, ciudades ≠ Hvar
- Geo: Hvar + Split + radio · bid-up para gente físicamente en Hvar
- Destino: landing pages `/landing/*` (no la home)
- Meta Ads: NO ahora — fase 2

### 🇺🇸 EN EL RADAR — Segmento US / alto ticket
US es mercado #1 en GA4. Charter premium varios miles de €. Vuelo directo NY-Split. Definir producto + precio + página. Después de Bloques 0-3.

---

## Instrucciones para Claude Code
1. Leer CLAUDE.md completo antes de empezar
2. `npm run dev` para ver estado local en localhost:3000
3. `npm run build` al terminar cada tarea — build 0 errores
4. Commit al terminar cada tarea con mensaje descriptivo
5. Mobile-first SIEMPRE — primero 375px, luego `md:`, `lg:`
6. Solo `next/image` — cero `<img>` tags
7. Solo `opacity` y `transform` en animaciones — nunca `transition-all`
8. SEO metadata en cada página nueva
9. Redirects van en `netlify.toml` — NO en `next.config.mjs`
10. `NEXT_PUBLIC_` env vars son build-time — hardcodear Measurement ID en `layout.tsx`
11. **NUNCA modificar listings de OTAs desde el código** — eso se hace a mano con aprobación de Nikola
