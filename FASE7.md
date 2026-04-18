# CURSOR PROMPT — Fase 7: Fix LCP + Indexación

## Contexto
Acabo de correr Lighthouse y Google Search Console en mareboatshvar.com.
Los resultados muestran dos problemas críticos antes de temporada (Mayo):

1. LCP mobile: 25.2s (debe estar bajo 2.5s)
2. Solo 1 página indexada de 16 — las rutas /tours/[slug] no aparecen en Google

Leer KOSMOS_SKILL.md antes de tocar cualquier archivo de UI.
NO tocar /src/components/ — es código legacy.

---

## Tarea 7.1 — Fix imágenes del Hero (LCP crítico)

El hero es el LCP element. Las imágenes actuales son demasiado pesadas (ahorro potencial 8847 KiB desktop, 6402 KiB mobile).

### Hacer:
1. En el componente Hero (app/page.tsx o components/sections/Hero.tsx), verificar que la imagen principal tenga:
   - `priority={true}` en el next/image del hero — si no lo tiene, agregarlo
   - `quality={75}` — reducir desde el default 100 si está en 100
   - `sizes="100vw"` — para que Next.js genere el srcset correcto
   - El atributo `fetchPriority="high"` se aplica automáticamente con priority={true}

2. Verificar next.config.mjs:
   - `images.formats: ['image/avif', 'image/webp']` — confirmar que está
   - `images.deviceSizes: [390, 768, 1280, 1920]` — agregar si no está
   - `images.minimumCacheTTL: 60` — agregar

3. En todas las imágenes de la galería y tours que NO son above-the-fold:
   - Confirmar que NO tienen `priority={true}`
   - Agregar `loading="lazy"` explícito si no está (aunque es el default en next/image)

4. Revisar si hay alguna imagen inline con `<img>` tag: `grep -r "<img" --include="*.tsx" app/ components/` — debe dar 0 resultados.

---

## Tarea 7.2 — Fix render-blocking requests (750ms en mobile)

Lighthouse reporta "Solicitudes que bloquean el renderizado — ahorro estimado 750ms".

### Hacer:
1. En app/layout.tsx, verificar que las fuentes (Syne + Space Grotesk) tienen `display: 'swap'` — confirmar, no asumir.
2. Si hay algún `<link rel="stylesheet">` o `<script>` sin `defer`/`async` en layout.tsx, agregarlo.
3. Verificar que los dynamic() imports de Fase 5 están correctos para Testimonials, FAQ, Contact, CTABanner con `{ ssr: false }` o `{ ssr: true, loading: () => <div /> }`.

---

## Tarea 7.3 — Fix indexación: enviar sitemap + verificar rutas /tours/[slug]

Google Search Console muestra 1 página indexada de 16. Las 4 rutas de tours probablemente no están siendo rastreadas.

### Hacer:
1. Abrir app/sitemap.ts y verificar que incluye las 4 rutas de tours:
   - /tours/blue-cave-pakleni-islands
   - /tours/pakleni-islands
   - /tours/sunset-cruise
   - /tours/private-boat-charter
   - Con `priority: 0.8` y `changeFrequency: 'monthly'`

2. Verificar public/robots.txt:
   - Que tiene `Allow: /`
   - Que tiene `Sitemap: https://mareboatshvar.com/sitemap.xml`
   - Que NO tiene ninguna regla que bloquee /tours/

3. En cada app/tours/[slug]/page.tsx, verificar que el metadata no tiene `robots: 'noindex'` accidentalmente.

4. Agregar `<link rel="canonical" href="https://mareboatshvar.com/tours/{slug}" />` en el metadata de cada página de tour si no está:
```tsx
alternates: {
  canonical: `https://mareboatshvar.com/tours/${tour.slug}`,
},
```

---

## Tarea 7.4 — Copy: agregar "boat rental" al H1 y descripción

GSC muestra que el sitio tiene impresiones para "boat rental hvar" (42 impr) y "rent a boat hvar" (42 impr) pero el H1 actual probablemente dice "boat tours". Los usuarios buscan ambos.

### Hacer:
1. En el Hero, revisar el H1 actual. Si dice algo como "EXPLORE HVAR BY SEA" o "PRIVATE BOAT TOURS HVAR", ajustar el subtítulo o badge para incluir naturalmente "boat rental" o "boat hire" — sin cambiar el H1 principal si ya tiene la keyword "boat tours".
2. En la metadata description de app/layout.tsx, verificar que incluye tanto "boat tours" como "boat rental" en los primeros 155 caracteres.
3. En cada página de /tours/[slug], verificar que la description del metadata incluye "from Hvar, Croatia" para SEO local.

---

## Verificación final

```bash
npm run build
```
Debe terminar sin errores. 18+ rutas estáticas.

Luego correr localmente y confirmar en DevTools (Network tab) que:
- La imagen del hero se carga primero (priority)
- No hay requests bloqueantes en el waterfall

```bash
git commit -m "perf: fix LCP hero image, render-blocking, canonical tours, sitemap verified"
```

---

## Datos de referencia (no tocar, solo para contexto)
- Lighthouse desktop: Performance 77, LCP 4.1s, CLS 0.072
- Lighthouse mobile: Performance 65, LCP 25.2s 🔴, Speed Index 12.2s
- GSC: 33 clicks / 546 impresiones / posición promedio 38.2
- 1 página indexada de 16
- Top queries por impresiones: "rent a boat hvar" (42), "hvar boat hire" (25), "boat rental hvar" (45)
