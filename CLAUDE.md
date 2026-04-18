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

## Estado actual (18 abril 2026)
- Fase 1 ✅ commit c47932d — tokens, fuentes, Tailwind config
- Fase 2 ✅ commit 4b8df40 — SEO metadata, schema JSON-LD, sitemap, robots
- Fase 3 ✅ commit dd0748d — Rediseño visual completo (Navbar, Hero, Tours, Features, Gallery, Testimonials, FAQ, Contact, CTABanner, Footer)
- Fase 4 ✅ commit fdb830c — Framer Motion + scroll progress bar
- Fase 5 ✅ commit 04c780b — next/image audit, lazy loading, fuentes swap, favicon
- Fase 6 ✅ commit 301457a — Páginas /tours/[slug] con SEO long-tail (4 rutas estáticas)

## Datos reales de performance (Lighthouse 18/04/2026)
### Desktop
- Performance: 77 — LCP: 4.1s ⚠️ — CLS: 0.072 — TBT: 0ms
- Ahorro potencial imágenes: 8847 KiB
### Mobile
- Performance: 65 — LCP: 25.2s 🔴 CRÍTICO — Speed Index: 12.2s — CLS: 0
- Ahorro potencial imágenes: 6402 KiB — Render-blocking requests: 750ms

## Datos reales de Google Search Console (últimos 3 meses)
- Clicks: 33 / Impresiones: 546 / CTR: 6% / Posición promedio: 38.2
- Páginas indexadas: 1 de 16 (problema crítico — las /tours/[slug] probablemente no indexadas aún)
- Top keywords por impresiones: "rent a boat hvar" (42), "hvar boat rental with skipper" (19), "boat hire hvar" (19), "hvar boat hire" (25)
- Top keywords por clicks: "boat rental hvar" (2 clicks), "hvar boat rental" (1), "mare boats" (1)
- INSIGHT: el sitio rankea para "rental" más que "tours" — el copy y H1 deben reflejar ambos

## Próxima tarea
### Fase 7 — Fix LCP crítico + indexación de /tours/[slug]
Ver CURSOR_PROMPT.md para las instrucciones exactas.

El LCP de 25.2s en mobile es el problema más urgente antes del lanzamiento de temporada (Mayo).

## Reglas siempre activas
- Mobile-first: grid-cols-1 primero, luego md: lg:
- Solo next/image — cero <img> tags
- Solo animar transform y opacity — nunca transition-all
- Todo clickeable necesita hover + focus-visible + active
- npm run build debe pasar sin errores al terminar cada fase
- Commit al terminar cada fase con el mensaje indicado

## TODOs pendientes de Nikola
- Precios reales 4 tours (actualmente From €XX)
- Número WhatsApp real
- Email de contacto real
- Endpoint Formspree (crear cuenta en formspree.io)
- URL TikTok del negocio
- Logo final SVG o PNG alta resolución
- Fotos profesionales del bote y destinos (crítico para LCP — las actuales pesan demasiado)
- Reviews reales de clientes
- Horarios exactos de temporada
