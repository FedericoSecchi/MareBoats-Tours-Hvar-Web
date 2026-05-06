# MareBoats Tours Hvar — Contexto del Proyecto
**Actualizado: 5 Mayo 2026**

---

## Negocio
- Tours privados en lancha desde Hvar, Croacia
- Propietario: Nikola (fundador, operaciones). Josip (hermano de Nikola, head skipper). Fede = skipper ocasional + marketing + tech
- WhatsApp único canal de conversión: +385 95 196 6734 → https://wa.me/385951966734
- URL live: https://mareboatshvar.com
- Repo: https://github.com/FedericoSecchi/MareBoats-Tours-Hvar-Web

## Equipo (para copy)
- **Nikola** — fundador, nació y creció en Hvar, dirige las operaciones, skipper ocasional, habla inglés y croata
- **Josip** — hermano de Nikola, ~38 años, head skipper, toda su vida en el agua, vivió en Inglaterra, muy querido por los clientes, habla inglés y croata
- **Federico (Fede)** — argentino, ciudadanía italiana, empezó en Optimist a los 6 años, mundiales y sudamericanos representando Argentina, coach de la Federación de Vela de Ecuador 2 años, trabajó con la clase 69F (un escalón bajo la Copa América), clásicos y cruceros hasta 90 pies, maneja el marketing de MareBoats, skipper ocasional. Habla español, italiano e inglés. Sin título/cargo en la web.

## La flota
- Fleet de RIBs (semi-rígidos) — uno es Joker
- Capacidad: 8 a 12 pasajeros según embarcación
- Motores: 150–300hp
- Equipamiento: sun canopy (toldilla), sistema de música, conservadora, snorkel y máscaras
- Tours privados (grupo propio) o compartidos (sale cuando se llena). Grupos grandes: múltiples RIBs en convoy

## Stack
- Next.js 14 + Tailwind CSS + TypeScript
- App Router en /app — componentes activos en /components/ui/ y /components/sections/
- **NUNCA tocar /src/components/** — es código legacy

## Reglas inamovibles de contenido
- Idiomas a bordo solo aplican cuando Fede es el skipper — NO prometer genéricamente
- Botellas de vidrio: permitidas a bordo
- Comida: permitida, pero se recomiendan restaurantes
- No fumar a bordo
- Formularios de contacto: NO. Solo WhatsApp
- Línea de licencia marítima en /guide: suspendida hasta confirmación de Nikola
- NO mencionar año exacto de fundación de MareBoats

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

## Google Business Profile
- Estado: Activo, verificado ✅
- 19 reviews activas (bajaron de 35 — Google removió las inorgánicas)
- URL reviews: https://g.page/r/Cd7dvQcuwbZ7EBM/review
- Coordenadas: lat 43.16847, lng 16.44300
- Dirección: Janka Žagjala 56, 21450, Hvar, Croacia

---

## Estado de fases — Build actual: 33 páginas estáticas

### ✅ COMPLETADAS (Fases 1–36)
| Fase | Commit | Descripción |
|------|--------|-------------|
| 1 | c47932d | Tokens, fuentes, Tailwind config |
| 2 | 4b8df40 | SEO metadata, schema JSON-LD, sitemap, robots |
| 3 | dd0748d | Rediseño visual completo (Navbar, Hero, Tours, Features, Gallery, Testimonials, FAQ, Contact, CTABanner, Footer) |
| 4 | fdb830c | Framer Motion + scroll progress bar |
| 5 | 04c780b | next/image audit, lazy loading, favicon |
| 6 | 301457a | Páginas /tours/[slug] x4 con SEO long-tail |
| 7 | 06da4c9 | Fix LCP + trailing slash sitemap + copy "boat rental" |
| 8 | 116ab39 | Logo SVG, favicon, OG image, WhatsApp confirmado |
| 9 | 78e989b | UX/Conversión: WhatsApp CTAs, cards simétricas, TourHero |
| 10 | be472fd | Guest Guide /guide pública + FAQPage schema |
| 11 | e7ec143 | Copy humano: Hero, CTAs, Features, FAQ |
| 12 | 7865a48 | Fix colores/tokens páginas internas + refactor globals.css |
| 13 | eeeadf1 | /guide expandida: 10 secciones, 8 FAQs JSON-LD, mapas, rental rules |
| 14 | 950dde6 | /tours/yacht-sailboat-taxi con SEO long-tail |
| 15 | dc334dc | /guide reorganizada: 5 secciones + lib/maps-data.ts |
| 15.1 | cae1265 | Fix overflow-x mobile |
| 16 | 5ea136d | 5 landing pages smart routing |
| 17 | — | Precios reales en lib/tours-data.ts |
| 18 | — | /tours/red-rocks-pakleni-islands |
| 19 | — | Scooter rental en /landing/rental |
| 20 | 3f2c161 | WhatsApp templates /public/docs/ |
| 21 | fc385f5 | QR code guide /public/docs/ |
| 22 | b07d154 | Google My Maps setup + placeholders en /guide |
| 23 | 8898692 | /on-tour info page (noindex, uso a bordo) |
| 24–30 | (varios) | /explore, /guide mapas reales + SEO destinos + restaurantes, mapas 500px, /on-tour 36 paradas acordeón, restauración imágenes |
| 31 | 5f8f4b1 | Navbar plano 6 ítems: Tours/Rentals/Transfers/Guide/Explore/About. CTA WhatsApp SVG, usePathname activo, mobile fullscreen overlay, scroll blur |
| 32 | — | /tours index page: listado tours, SEO metadata, ItemList schema, CTA WhatsApp. yacht-sailboat-taxi excluido (va en /transfers) |
| 33 | 3f21694 | /rentals index page: 3 cards (Scooter €50/day, Water Scooter on request, Boat no skipper on request), accordion Rental Rules, schema ItemList |
| 34 | 1213033 | /transfers index page: 6 cards (Split, Airport, Brač, Korčula, Biševo + Yacht Water Taxi → link a /tours/yacht-sailboat-taxi), schema ItemList |
| 35 | ea6bb03 | /about page: equipo (Nikola, Josip, Fede), flota RIBs, "How we work", schema LocalBusiness + Person @graph |
| 35b | 280a2cb | Copy real /about: bios reales Nikola/Josip/Fede, flota real (RIBs 150-300hp, 8-12 pax, toldilla, música, cooler, snorkel) |
| 36 | 06e5be2 | Sitemap limpio (sin /landing/*), links internos homepage → rentals/transfers, /guide → explore, footer ya tenía 6 links |

### ⏳ PENDIENTES
| Fase | Descripción | Prioridad |
|------|-------------|-----------|
| 37 | GA4 setup + Google Search Console | Alta |
| 38 | /qr hub animado (noindex) | Baja |
| 39 | GetYourGuide listing optimizado (junto con fotos mayo) | Media |
| 40 | Fotos reales reemplazando placeholders (Fede viaja 15/05) | Alta |
| 41 | Reviews GBP — sistema post-tour con Nikola | Media |

**Próxima fase a ejecutar: Fase 37 — GA4 + Search Console.**

---

## Datos pendientes de implementar (esperando contenido real)

### Fotos (Fede viaja a Croacia el 15/05)
- Barco en el muelle
- Cada destino: Blue Cave, Red Rocks, Stiniva, Pakleni, Dubovica, Budikovac
- Foto de Nikola, Josip y Fede
- Comprimir a <500KB, formato WebP preferido
- Subir a /public/images/ y reemplazar todos los placeholders

### Google My Maps (3 mapas — Fede tiene acceso)
- Mapa 1: "MareBoats — Where We Go" (destinos del tour)
- Mapa 2: "MareBoats — Where to Eat" (restaurantes recomendados)
- Mapa 3: "MareBoats — Local Tips" (spots locales)
- Una vez creados: pegar URLs embed en lib/maps-data.ts

### GA4 (no activo todavía)
- Fede debe crear propiedad en analytics.google.com
- Obtener Measurement ID (formato: G-XXXXXXXXXX)
- Reemplazar placeholder en app/layout.tsx
- Agregar a .env.local como NEXT_PUBLIC_GA_ID

### Google Search Console (no configurado)
- Verificar dominio
- Enviar sitemap: https://mareboatshvar.com/sitemap.xml
- Conectar con GA4

### GetYourGuide (acceso disponible, listing sin optimizar)
- Optimizar título, descripción, fotos, precio
- Hacer junto con las fotos en mayo

### Reviews GBP (19 activas, bajaron de 35)
- Sistema post-tour con Nikola: template WhatsApp listo
- QR en el barco (pendiente diseño de Coti)
- NO usar reviews de personas cercanas — Google las remueve

---

## Instrucciones para Cursor
1. Leer CLAUDE.md completo antes de empezar
2. `npm run dev` para ver estado local en localhost:3000
3. `npm run build` al terminar cada fase — build debe ser 0 errores
4. Commit al terminar cada fase
5. Mobile-first SIEMPRE — primero 375px, luego md:, lg:
6. Solo `next/image` — cero `<img>` tags
7. Solo `opacity` y `transform` en animaciones — nunca `transition-all`
8. SEO metadata en cada página nueva
