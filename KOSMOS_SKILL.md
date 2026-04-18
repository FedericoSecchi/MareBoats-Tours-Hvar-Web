# Kosmos Web Skill — Claude Code Context

Agencia: **Somos Kosmos** — Branding, Web, Automation  
Stack: **Next.js 14 + Tailwind CSS + TypeScript**  
Filosofía: Mobile-first · SEO nativo · Sin templates genéricos

---

## Sistema de Diseño

### Colores (adaptar a tokens del cliente)
```css
--bg:       #0d1b2a;   /* navy profundo */
--surface:  #122236;   /* cards/superficies */
--accent:   #3BC9DB;   /* turquesa mediterráneo */
--accent-dk:#2A9FAF;   /* hover */
--white:    #F5F0E8;   /* texto principal */
--gray:     #8a9ab0;   /* texto secundario */
--border:   #1e3048;   /* bordes/divisores */
```

### Tipografía
- Títulos: **Syne** Bold/ExtraBold, uppercase, `letter-spacing: -0.02em`
- Body: **Space Grotesk** Regular/Medium, `line-height: 1.7`
- Hero: `clamp(3rem, 10vw, 8rem)`

### Reglas de código
- Mobile-first SIEMPRE (`grid-cols-1 md:grid-cols-3`, nunca al revés)
- Nunca colores Tailwind default (indigo-500, blue-600, etc.)
- Sombras con color tinted: `0 4px 20px rgba(59,201,219,0.15)`
- Animaciones solo con `transform` y `opacity`, nunca `transition-all`
- Easing: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Todo clickeable: `hover` + `focus-visible` + `active`
- Imágenes: siempre `next/image` + overlay `bg-gradient-to-t from-black/60`
- SEO metadata en CADA página

### Guardrails anti-genéricos
- Sombras múltiples capas, nunca `shadow-md` plano
- Headings: `leading-none` o `line-height: 1`
- Gradientes radiales para profundidad de fondo
- Sistema de Z-planes: base → elevated → floating

---

## SEO para Tour Operator
```tsx
export const metadata: Metadata = {
  title: 'MareBoats Tours Hvar | Private Boat Tours Croatia',
  description: 'Book private boat tours in Hvar, Croatia. Blue Cave, Pakleni Islands, sunset cruises. Best boat tours from Hvar harbour.',
  keywords: ['boat tours Hvar', 'private boat Hvar Croatia', 'Blue Cave tour', 'Pakleni Islands', 'Hvar day trips'],
  openGraph: {
    title: 'MareBoats Tours Hvar',
    description: '...',
    images: ['/og-image.jpg'],
    locale: 'en_US',
  }
}
```

### Schema markup (LocalBusiness + TouristAttraction)
Agregar en `app/layout.tsx` como JSON-LD script tag.

---

## Checklist antes de terminar
- [ ] Mobile responsive en 375px, 768px, 1280px
- [ ] Metadata SEO en todas las páginas
- [ ] Alt text descriptivo en todas las imágenes
- [ ] Favicon configurado
- [ ] Formulario de contacto/reservas funcional
- [ ] `next/image` para todas las imágenes
- [ ] Fuentes con `display: swap`
- [ ] Schema JSON-LD agregado
- [ ] Core Web Vitals: LCP < 2.5s, CLS = 0
