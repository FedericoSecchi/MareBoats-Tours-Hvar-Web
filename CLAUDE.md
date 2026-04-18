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
- Fase 1  ✅ commit c47932d — tokens, fuentes, Tailwind config
- Fase 2  ✅ commit 4b8df40 — SEO metadata, schema JSON-LD, sitemap, robots
- Fase 3  ✅ commit dd0748d — Rediseño visual completo
- Fase 4  ✅ commit fdb830c — Framer Motion + scroll progress bar
- Fase 5  ✅ commit 04c780b — next/image audit, lazy loading, favicon
- Fase 6  ✅ commit 301457a — Páginas /tours/[slug] x4 con SEO long-tail
- Fase 7  ✅ commit 06da4c9 — Fix LCP + trailing slash sitemap + copy "boat rental"
- Fase 8  ✅ commit 116ab39 — Logo SVG, favicon, OG image, WhatsApp confirmado
- Fase 9  ✅ — UX conversion (WhatsApp-only, cards simétricas, TourHero compartido, /tours/split-airport-transfer, Footer cleanup)
- Fase 10 ✅ — Guest Guide /guide con FAQPage schema + sitemap + footer link
- Fase 11 ✅ — Copy humano en Hero, CTAs, Tours, Features, FAQ

## Datos reales de performance (Lighthouse 18/04/2026 — post Fase 7)
- Desktop: Performance 98 ✅ — LCP 0.8s ✅ — CLS 0.072 — TBT 40ms
- Mobile: Performance 83 🟡 — LCP 4.5s ⚠️ — CLS 0 ✅ — TBT 0ms
- LCP mobile bajará con fotos profesionales reales

## Datos confirmados del negocio
- WhatsApp: +385 95 196 6734 (único canal de conversión — SIN formulario ni email)
- Instagram: https://www.instagram.com/mareboats.hvar/
- Google Maps: https://maps.app.goo.gl/U6kgAaRG81KZmqUEA
- Idiomas del skipper: inglés, croata, italiano, español
- Servicios: tours privados, Blue Cave, Pakleni Islands, Sunset Cruise, Snorkeling, transfer Split Airport ↔ Hvar
- TikTok: no existe todavía — NO linkear

## Decisiones de negocio confirmadas
- ✅ Sin formulario de contacto ni email — conversión 100% por WhatsApp
- ✅ OTAs: listings independientes, no linkeados desde el sitio por ahora
- ✅ Reviews de OTAs → reemplazar placeholders en Testimonials.tsx cuando Nikola confirme
- ✅ Google Maps + website trabajan en red para SEO local
- ✅ TikTok: no existe — no linkear
- ✅ /guide es página pública indexable (no PDF) — captura SEO long-tail pre-booking

## Pendiente de terceros
- Precios reales 4 tours + transfer (Nikola)
- OTAs activos + reviews reales (Nikola)
- Fotos profesionales (Fede viaja a Hvar — comprimir <500KB antes de agregar)
- Cambios estéticos de Coti

---

## FASE 9 — UI/UX + Conversión (EN CURSO)

Leer /mnt/skills/user/ux-conversion/SKILL.md antes de empezar.

### Objetivo
Eliminar fricciones en el funnel. Todo empuja hacia el WhatsApp.

### Tasks

**9.1 — Eliminar todos los formularios de email**
- Buscar con `grep -r "form\|Formspree\|email" --include="*.tsx" components/ app/` 
- Reemplazar Contact.tsx por componente de WhatsApp directo
- Patrón:
```tsx
<a href="https://wa.me/385951966734?text=Hi%20I'd%20like%20to%20book%20a%20tour"
   target="_blank" rel="noopener noreferrer"
   className="btn-primary flex items-center gap-2 justify-center">
  <WhatsAppIcon /> Book on WhatsApp
</a>
<p className="text-[var(--gray)] text-sm text-center mt-2">
  We reply within 1 hour · Available Mo–Su 8:00–20:00
</p>
```
- Archivos: `components/sections/Contact.tsx`

**9.2 — Cards simétricas en grillas**
- Aplicar patrón `flex flex-col h-full` + `flex-1` en contenido + `mt-auto` en CTA
- Verificar en 375px, 768px, 1280px
- Aplica a: Tours.tsx, Features.tsx, Testimonials.tsx
- Patrón correcto:
```tsx
<div className="flex flex-col h-full">
  <div className="flex-1">{/* contenido variable */}</div>
  <div className="mt-auto pt-4">{/* CTA siempre al fondo */}</div>
</div>
```

**9.3 — Replicar diseño Home en páginas /tours/[slug]**
- Crear componente compartido `components/sections/TourHero.tsx`
- Mismo sistema visual: tokens, tipografía Syne, overlays, sombras tinted
- Navbar y Footer ya son compartidos — verificar que se vean igual
- Archivos: `app/tours/[slug]/page.tsx`, `components/sections/TourHero.tsx`

**9.4 — Agregar Instagram al Footer**
- URL: https://www.instagram.com/mareboats.hvar/
- Ícono SVG inline, mismo estilo que otros social links
- Archivo: `components/sections/Footer.tsx`

**9.5 — Agregar idiomas del skipper en Features**
- Reemplazar o agregar feature: "Speaks English, Croatian, Italian & Spanish"
- Ícono: globo o speech bubbles SVG inline
- Archivo: `components/sections/Features.tsx`

**9.6 — Nueva ruta /tours/split-airport-transfer**
- Agregar en `lib/tours-data.ts`:
  ```ts
  {
    slug: 'split-airport-transfer',
    name: 'Split Airport Transfer',
    shortDescription: 'Private speedboat transfer from Split Airport to Hvar.',
    // description 300+ palabras con keywords: "Split to Hvar transfer", "airport transfer Hvar", "speedboat Split Hvar"
    duration: '45 min',
    includes: ['Private transfer', 'Luggage handling', 'Flexible departure time'],
    keywords: ['Split to Hvar transfer', 'airport transfer Hvar', 'speedboat Split Hvar', 'Split Hvar boat']
  }
  ```
- Agregar en `app/sitemap.ts`
- Verificar que generateStaticParams en `app/tours/[slug]/page.tsx` incluya el nuevo slug

**9.7 — Google Maps embed en Footer/Contact**
- Embed iframe con coordenadas 43.1729, 16.4413
- Hvar Harbour como meeting point
- Usar link directo: https://maps.app.goo.gl/U6kgAaRG81KZmqUEA
- NO iframe pesado — usar link con mapa estático si afecta LCP
- Archivo: `components/sections/Footer.tsx`

**9.8 — Auditar repetición de información**
- Revisar si Hero y otra sección repiten el mismo contenido sin agregar valor
- Si hay duplicados: eliminar el más débil visualmente
- Cada sección tiene UN trabajo: Hero=propuesta, Tours=catálogo, Features=diferenciadores, Testimonials=proof, FAQ=objeciones, CTA=urgencia

### Commit
```
git commit -m "feat: fase 9 — UX conversion, WhatsApp CTAs, cards simétricas, transfer slug, Instagram footer"
```

---

## FASE 10 — Guest Guide /guide (SEO + post-booking)

**Decisión:** Página pública indexable en `/guide` — no PDF.
**Razón:** Captura long-tail keywords de turistas buscando antes/después de reservar.
Las mismas preguntas que hacen por WhatsApp = búsquedas reales en Google.

### Keywords objetivo
- "what to bring on a boat tour Hvar"
- "can you swim at Blue Cave Croatia"
- "what to bring snorkeling Croatia"
- "weather policy boat tour Hvar"
- "Hvar harbour meeting point"
- "restaurants Hvar harbour"
- "sea sickness boat tour tips"

### Estructura de la página

**Metadata:**
```tsx
export const metadata: Metadata = {
  title: 'Your Hvar Boat Tour Guide | What to Bring, Swim Spots & Tips',
  description: 'Everything you need to know before your private boat tour in Hvar. What to bring, where we swim, weather policy, and local restaurant tips.',
  keywords: ['what to bring boat tour Hvar', 'swimming Blue Cave Croatia', 'Hvar boat tour tips', 'weather policy boat charter']
}
```

**Schema:** FAQPage — las mismas preguntas de la página como JSON-LD

**Secciones en orden:**
1. **Hero corto** — "Your Guide to the Tour" — H1 con keyword, subtítulo, link "Book on WhatsApp" (CTA siempre presente)
2. **What to Bring** — lista concreta: sunscreen (SPF50+), water shoes, camera, snacks, cash for lunch stops, towel, motion sickness tablet if needed
3. **Swimming & Snorkeling** — ¿Dónde nadamos? Pakleni Islands, Blue Cave (no se puede nadar adentro), hidden coves. ¿Me voy a mojar? Sí, siempre. ¿Hay vida marina? Qué esperar.
4. **On Board Rules** — Breve, tono amigable: no shoes on deck, life jackets available, no glass bottles
5. **Safety** — VHF radio, life jackets a bordo, experiencia del capitán, seguro
6. **Weather Policy** — Si hay viento fuerte (Bura/Jugo) → reprogramamos. Decisión del capitán. Reembolso completo si cancelamos nosotros.
7. **Meeting Point** — Hvar Harbour, coordenadas, foto/mapa, hora recomendada de llegada (10 min antes)
8. **Where to Eat in Hvar** — 3-4 restaurantes reales cerca del puerto (SEO local: "restaurants near Hvar harbour"). Esto genera backlinks orgánicos y tráfico local.
9. **FAQ rápido** — 4 preguntas cortas: ¿Hay baño a bordo? / ¿Puedo llevar bebés? / ¿Se acepta tarjeta? / ¿Qué pasa si me mareo?
10. **CTA final** — "Ready? Message us on WhatsApp" con link directo

### Archivos a crear
- `app/guide/page.tsx` — página completa
- Agregar `/guide` en `app/sitemap.ts` con priority 0.7
- Agregar link "Guest Guide" en Footer bajo sección "Useful Links" o similar

### Nota de implementación
- Mismos tokens CSS, NavBar y Footer que el resto del sitio
- CTA WhatsApp visible en cada sección (sticky o inline)
- Imágenes: next/image, alt text con keywords
- No crear componentes nuevos si los existentes sirven — reusar CTABanner, FAQ accordion si aplica

### Commit
```
git commit -m "feat: fase 10 — página /guide SEO long-tail guest guide"
```

---

## FASE 11 — Copy humano

Leer `/mnt/skills/user/human-copy/SKILL.md` antes de empezar.

Revisar todos los textos: eliminar adjetivos vacíos, frases genéricas de IA, CTAs vagos.
Tono: cálido, directo, específico — como habla Fede en persona.

Orden de prioridad: Hero → CTAs → Tours → Features → FAQ → Footer.

Commit: `git commit -m "copy: fase 11 — copy humano, eliminar adjetivos vacíos, CTAs directos"`

---

## Reglas siempre activas
- Mobile-first: grid-cols-1 primero, luego md: lg:
- Solo next/image — cero <img> tags
- Solo animar transform y opacity — nunca transition-all
- Todo clickeable necesita hover + focus-visible + active
- npm run build debe pasar sin errores al terminar cada fase
- Commit al terminar cada fase con el mensaje indicado
- NUNCA tocar /src/components/ — legacy
- NUNCA cambiar copy ni imágenes existentes sin instrucción explícita
