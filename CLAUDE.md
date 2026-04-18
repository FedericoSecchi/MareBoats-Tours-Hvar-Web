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

## Estado actual (18 abril 2026 — actualizado)
- Fase 1 ✅ commit c47932d — tokens, fuentes, Tailwind config
- Fase 2 ✅ commit 4b8df40 — SEO metadata, schema JSON-LD, sitemap, robots
- Fase 3 ✅ commit dd0748d — Rediseño visual completo (Navbar, Hero, Tours, Features, Gallery, Testimonials, FAQ, Contact, CTABanner, Footer)
- Fase 4 ✅ commit fdb830c — Framer Motion + scroll progress bar
- Fase 5 ✅ commit 04c780b — next/image audit, lazy loading, fuentes swap, favicon
- Fase 6 ✅ commit 301457a — Páginas /tours/[slug] con SEO long-tail (4 rutas estáticas)
- Fase 7 ✅ commit 06da4c9 — Fix LCP + trailing slash sitemap + copy "boat rental"
- Fase 8 (parcial) ✅ — Logo SVG horizontal (navbar + footer), ícono SVG (favicon) + PNG OG 1200×630 derivado del ícono; `icon.png` / `apple-icon.png` regenerados desde el ícono

## Datos reales de performance (Lighthouse 18/04/2026 — post Fase 7)
### Desktop
- Performance: 98 ✅ — LCP: 0.8s ✅ — CLS: 0.072 — TBT: 40ms
### Mobile
- Performance: 83 🟡 — LCP: 4.5s ⚠️ — CLS: 0 ✅ — TBT: 0ms
- LCP mobile bajará más cuando se reemplacen las fotos por las profesionales de Nikola

## Datos reales de Google Search Console (últimos 3 meses)
- Clicks: 33 / Impresiones: 546 / CTR: 6% / Posición promedio: 38.2
- Sitemap subido ✅ — indexación /tours/[slug] x4 solicitada
- Top keywords: "boat rental hvar", "rent a boat hvar", "hvar boat rental with skipper"
- INSIGHT: el sitio rankea para "rental" más que "tours" — copy ya actualizado en Fase 7

## Próxima tarea — Fase 8
Implementar cuando Fede entregue los assets:

1. **Logo SVG** — ✅ Hecho (assets en `public/img/mareboats-logo-horizontal.svg`, `mareboats-icon.svg`; OG social `mareboats-og.png`).

2. **WhatsApp real** — reemplazar el número placeholder en todos los componentes:
   - Número real: +385 95 196 6734
   - Buscar con grep todos los href="https://wa.me/..." y tel: en el repo

3. **Reviews reales** — cuando Nikola tenga reviews en OTAs (Viator/GetYourGuide/Airbnb):
   - Reemplazar los 3 placeholders en components/sections/Testimonials.tsx
   - Usar nombre real + país + texto real de la review

4. **Fotos profesionales** — cuando Fede viaje a Hvar:
   - Reemplazar imágenes en /public/images/
   - Comprimir antes de agregar (máx 500 KB por imagen)
   - Actualizar alt text si cambia el contenido visual

5. **Cambios estéticos de Coti** — cuando Fede los entregue

6. **Precios reales** — cuando Nikola los confirme:
   - Reemplazar "From €XX" en components/sections/Tours.tsx y lib/tours-data.ts

## Decisiones de negocio confirmadas
- ✅ Sin formulario de contacto ni email — conversión 100% por WhatsApp
- ✅ El botón WhatsAppButton.tsx siempre visible — es el único CTA de conversión
- ✅ OTAs (Viator, GetYourGuide, Airbnb): trabajo SEO independiente en red. No linkeados desde el sitio por ahora. Si se crean listings activos, evaluar si un link mejora el SEO local.
- ✅ Instagram: linkear en Footer cuando se confirme la URL de la cuenta
- ✅ TikTok: no existe todavía — NO agregar en Footer ni redes sociales
- ✅ Formulario/Formspree: descartado completamente

## Reglas siempre activas
- Mobile-first: grid-cols-1 primero, luego md: lg:
- Solo next/image — cero <img> tags
- Solo animar transform y opacity — nunca transition-all
- Todo clickeable necesita hover + focus-visible + active
- npm run build debe pasar sin errores al terminar cada fase
- Commit al terminar cada fase con el mensaje indicado