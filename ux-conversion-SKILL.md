# UX Conversion Skill — Somos Kosmos

**Propósito:** Auditar y mejorar cualquier sitio web desde la perspectiva de UX y conversión.
Nacida auditando mareboatshvar.com — sitio de tours privados en Hvar, Croacia.

---

## Cuándo activar esta skill

Activar cuando el cliente diga:
- "el sitio tiene visitas pero nadie convierte"
- "quiero mejorar el sitio para que la gente contacte más"
- "algo no funciona pero no sé qué"
- "quiero revisar el UX / la conversión"
- Cualquier tarea de rediseño, refactor de secciones, o auditoría de flujo de usuario

---

## Principio Fundamental

> **Un sitio web bien hecho tiene un trabajo: llevar al usuario al CTA principal.**
> Todo lo demás es soporte o distracción.

Antes de tocar código, identificar:
1. ¿Cuál es el CTA principal? (WhatsApp, formulario, reserva, llamada — solo 1)
2. ¿Qué impide que el usuario llegue a ese CTA sin fricción?
3. ¿Qué elementos no contribuyen al CTA y pueden eliminarse o reducirse?

---

## Los 10 Principios

### 1. 1 CTA Principal — Sin Competencia
- Un solo botón/acción dominante por pantalla
- Si hay 2 CTAs, uno es primario (pill sólido, color accent) y el otro es ghost/secundario
- Nunca 3 CTAs del mismo peso visual en el mismo viewport

### 2. CTA Visible Sin Scroll en Mobile (Above the Fold)
- En 375px, el CTA principal debe ser visible sin hacer scroll
- Si no está visible en iPhone SE, no existe para la mayoría de los usuarios móviles
- Verificar con Chrome DevTools → 375x667

### 3. Eliminar Formularios Que No Se Usan
- Si el canal de conversión real es WhatsApp/teléfono/otro, eliminar formularios de email
- Los formularios crean fricción y expectativa de respuesta que no llega
- Reemplazar por: botón WhatsApp, link tel:, link directo a plataforma de reservas

### 4. No Repetir Información
- Si la misma info aparece en 2+ secciones sin agregar valor, eliminar una
- Cada sección debe tener una sola razón de existir en la página
- Test: "¿qué pasa si elimino esta sección?" — si la respuesta es "nada", eliminarla

### 5. Cards Simétricas en Todos los Breakpoints
- Verificar en 375px, 768px, 1280px
- Cards de la misma familia deben tener altura uniforme → usar `h-full` + `flex flex-col` + `mt-auto` en el CTA
- Grillas: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` — nunca romper la simetría con número impar de items en desktop

```tsx
// Patrón correcto para cards simétricas
<div className="flex flex-col h-full">
  <div className="flex-1"> {/* contenido variable */} </div>
  <div className="mt-auto pt-4"> {/* CTA siempre al fondo */} </div>
</div>
```

### 6. Consistencia Visual Entre Home e Internas
- Mismos tokens CSS: `--bg`, `--surface`, `--accent`, `--white`, `--border`
- Mismo NavBar y Footer
- Mismo sistema de tipografía (heading = Syne, body = Space Grotesk en proyectos Kosmos)
- Si el Home tiene un efecto (glassmorphism, sombras tinted), las internas también

### 7. Jerarquía Visual Clara
Orden correcto en cualquier sección o página:
```
H1 / H2 — Propuesta de valor clara
↓
Subtítulo — Especificidad / beneficio
↓
CTA principal
↓
Trust signals (reviews, fotos reales, badges, garantías)
↓
Más detalle (FAQs, descripción larga, etc.)
```
Nunca poner el CTA después de un bloque largo de texto.

### 8. Mobile-First Siempre
- Diseñar y verificar en 375px primero
- Si algo no funciona en mobile, no funciona
- Touch targets mínimo 44x44px
- Spacing entre elementos clickeables mínimo 8px

### 9. Reducir Cognitive Load
- Menos opciones = más conversiones
- Máximo 3-4 tours/productos en la home — los demás van a páginas internas
- Copy de botones: dice exactamente qué pasa → "Book on WhatsApp", "See All Tours", NO "Click here" / "Submit"
- Eliminar adjetivos vacíos: "amazing", "unforgettable", "unique" → reemplazar por hechos específicos

### 10. Trust Signals Cerca del CTA
Qué funciona (en orden de impacto):
1. Reviews reales con nombre + país + foto
2. Número de clientes/tours realizados ("100+ happy guests")
3. Badges de plataformas (TripAdvisor, Viator, Google 5★)
4. Fotos reales del producto/servicio (no stock)
5. Garantías o políticas claras (weather policy, cancelación)

---

## Checklist de Auditoría

Ejecutar antes de cualquier rediseño. Respuesta esperada para cada punto: ✅ OK / ⚠️ Problema / ❌ Blocker.

```
CONVERSIÓN
[ ] ¿Hay 1 solo CTA principal dominante por viewport?
[ ] ¿El CTA principal es visible sin scroll en 375px?
[ ] ¿Los formularios de contacto corresponden al canal de conversión real?
[ ] ¿El copy de los botones dice exactamente qué pasa al hacer click?

INFORMACIÓN
[ ] ¿Hay secciones que repiten la misma info sin agregar valor?
[ ] ¿Cada sección tiene una razón única de existir?
[ ] ¿El copy evita adjetivos vacíos y usa hechos específicos?

DISEÑO
[ ] ¿Las cards mantienen altura uniforme en 375px, 768px, 1280px?
[ ] ¿Los colores y tokens son consistentes entre Home e internas?
[ ] ¿Los trust signals están cerca del CTA?
[ ] ¿La jerarquía visual guía hacia el CTA?

MOBILE
[ ] ¿Touch targets ≥ 44x44px?
[ ] ¿Spacing entre clickeables ≥ 8px?
[ ] ¿El navbar en mobile no ocupa más del 15% del viewport?
[ ] ¿El CTA flotante (WhatsApp, chat) no tapa contenido importante?

TÉCNICO
[ ] ¿Las grillas no rompen simetría con número impar de items?
[ ] ¿Las imágenes tienen alt text descriptivo (no vacío)?
[ ] ¿El scroll-behavior es smooth?
```

---

## Problemas Comunes y Soluciones

### Problema: Cards asimétricas al cambiar pantalla
**Causa:** Contenido variable sin altura fija y CTA no anclado al fondo.
**Solución:**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {tours.map(tour => (
    <div key={tour.slug} className="flex flex-col bg-[var(--surface)] rounded-2xl overflow-hidden">
      {/* imagen */}
      <div className="relative h-48 flex-shrink-0"> ... </div>
      {/* contenido variable */}
      <div className="flex flex-col flex-1 p-6">
        <h3>...</h3>
        <p className="flex-1">...</p> {/* flex-1 absorbe el espacio variable */}
        <div className="mt-4"> {/* CTA siempre al fondo */}
          <Button>Book This Tour</Button>
        </div>
      </div>
    </div>
  ))}
</div>
```

### Problema: Formulario de email que nadie usa
**Causa:** El canal real de conversión es otro (WhatsApp, teléfono, etc.).
**Solución:** Reemplazar por componente de contacto directo:
```tsx
// En lugar del formulario
<div className="flex flex-col gap-4">
  <a
    href="https://wa.me/XXXXXXXXXXXXX?text=Hi%20I'd%20like%20to%20book%20a%20tour"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary flex items-center gap-2 justify-center"
  >
    <WhatsAppIcon /> Book on WhatsApp
  </a>
  <p className="text-[var(--gray)] text-sm text-center">
    We reply within 1 hour · Available Mo–Su 8:00–20:00
  </p>
</div>
```

### Problema: Información repetida en múltiples secciones
**Causa:** Cada sección se diseñó en aislamiento sin ver el conjunto.
**Solución:**
1. Listar todas las secciones y el "trabajo" de cada una
2. Si dos secciones hacen el mismo trabajo, fusionarlas o eliminar la menos visual
3. Asignar a cada sección un único tipo de contenido:
   - Hero → propuesta de valor + CTA
   - Tours → catálogo con precio + CTA por tour
   - Features → por qué elegirnos (diferenciadores)
   - Testimonials → proof social
   - FAQ → objeciones y dudas
   - CTA Banner → urgencia + conversión final

### Problema: Diseño inconsistente entre Home e internas
**Causa:** Las páginas internas se crearon después sin replicar el sistema visual.
**Solución:**
1. Extraer los componentes compartidos: `<PageHero>`, `<SectionWrapper>`, `<CTABanner>`
2. Usar los mismos tokens CSS en todas las páginas
3. Crear un layout wrapper para páginas de tipo "tour detail":
```tsx
// app/tours/[slug]/page.tsx
export default function TourPage({ params }) {
  const tour = getTourBySlug(params.slug)
  return (
    <>
      <TourHero tour={tour} />        {/* mismo estilo visual que Home hero */}
      <TourDetails tour={tour} />
      <Testimonials />                 {/* componente compartido */}
      <CTABanner />                    {/* componente compartido */}
    </>
  )
}
```

### Problema: CTA no visible en mobile sin scroll
**Causa:** Hero con demasiado contenido antes del botón, o imagen muy alta.
**Solución:**
- Hero: `min-h-screen flex flex-col justify-center` con CTA en el tercio superior
- En mobile, reducir el h1 con `clamp` y el subtítulo a 1-2 líneas
- Verificar que el NavBar en mobile no consuma más de 56-64px

---

## Implementación en Next.js + Tailwind

### Estructura de archivos recomendada
```
components/
  sections/
    Hero.tsx          — 1 H1, propuesta de valor, CTA, trust signal
    Tours.tsx         — cards simétricas, precio, CTA por tour
    Features.tsx      — diferenciadores, grid 2x2 → 4 cols
    Gallery.tsx       — fotos reales, grid asimétrico OK aquí
    Testimonials.tsx  — reviews reales, trust signals
    FAQ.tsx           — accordion, objeciones comunes
    CTABanner.tsx     — urgencia, CTA final antes del footer
  ui/
    NavBar.tsx        — sticky, progress bar, CTA pill
    WhatsAppButton.tsx — fixed, siempre visible
    Footer.tsx        — info de contacto, links, Google Maps
```

### CTA flotante de WhatsApp (siempre visible)
```tsx
// components/ui/WhatsAppButton.tsx
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/XXXXXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 
                 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg
                 hover:bg-[#1ebe5d] transition-transform hover:scale-105
                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className="w-5 h-5" />
      <span className="font-medium text-sm">Book Now</span>
    </a>
  )
}
```

### Trust signal cerca del CTA (patrón Hero)
```tsx
<div className="flex flex-col items-start gap-6">
  <h1>EXPLORE HVAR BY SEA</h1>
  <p>Private boat tours from Hvar harbour. Blue Cave, Pakleni Islands, sunset cruises.</p>
  
  {/* CTA */}
  <div className="flex gap-3">
    <a href="https://wa.me/..." className="btn-primary">Book on WhatsApp</a>
    <a href="#tours" className="btn-ghost">See All Tours</a>
  </div>
  
  {/* Trust signal INMEDIATAMENTE después del CTA */}
  <div className="flex items-center gap-2 text-sm text-[var(--gray)]">
    <StarRating />
    <span>100+ happy guests · Private tours only</span>
  </div>
</div>
```

---

## Caso de referencia: MareBoats Tours Hvar

**Problemas detectados (Abril 2026):**
- Formularios de email presentes → canal real es solo WhatsApp
- Información repetida entre Hero y Tours
- Cards en grillas asimétricas al cambiar breakpoint
- Diseño del Home no replicado en `/tours/[slug]`
- Sin Instagram en Footer (canal de contenido activo)
- Sin idiomas del skipper en Features (diferenciador clave)

**Soluciones aplicadas en Fase 9:**
- Eliminar todo `<form>` y reemplazar por WhatsApp CTA directo
- Auditar cada sección y eliminar duplicados
- Aplicar patrón `flex-col flex-1 mt-auto` en todas las cards
- Crear componentes compartidos `<TourPageLayout>` para internas
- Agregar Instagram al Footer
- Agregar "Speaks English, Croatian, Italian, Spanish" en Features

---

*Skill creada por Somos Kosmos — Fede Secchi — Abril 2026*
