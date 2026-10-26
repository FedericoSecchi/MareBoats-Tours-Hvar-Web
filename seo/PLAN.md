# Plan — MareBoats Hvar · SEO de tours y alquiler (corrida 1)

> Fecha: 24/10/2026 · Intake en claude.ai con datos reales (Search Console 16 meses, ficha de Google,
> 207 reseñas, SERP, repo) · Aprobado por: Fede ([fecha])
> Fuente de verdad del trabajo. Claude Code lo ejecuta sin preguntar.

## 1. Resumen
- **Qué**: que cada página de dinero apunte a una búsqueda propia y deje de competir con las demás.
  Red Rocks (producto estrella) pasa a ser la mejor respuesta a "red rocks hvar". `/rentals/` gana
  alquiler con las Pasaras como entrada. El home queda para tours privados y marca.
- **Para qué**: más consultas por WhatsApp desde búsquedas sin marca. Hoy el 82% de los clics es de
  marca (345 de 422).
- **Entregable**: PR en la rama `kosmos/seo-tours-rentals` con 10 páginas trabajadas, reseñas reales en
  el sitio y QA por página. Nada se publica sin que Fede mergee.

## 2. Tipo de trabajo y alcance
- **Tipo**: A, mejorar páginas existentes. Sin URLs nuevas ni cambios de URL.
- **Entra**: las 10 páginas de `02-arquitectura.md` + bloque de reseñas reales + actualización de `CLAUDE.md`.
- **No entra**: yacht 2027, transfers, water taxi, explore y guías, careers, crew, precios, OTAs y la ficha de Google (solo checklist en `seo/gbp.md`).
- **Repo**: `FedericoSecchi/MareBoats-Tours-Hvar-Web`, rama base `main`.
- **Hosting**: export estático (`output: 'export'`); el deploy lo maneja Fede, nunca Claude Code.

## 3. Diagnóstico express
| Área | Estado | Hallazgo | Impacto |
|---|---|---|---|
| Canibalización alquiler | ❌ | Home, `/rentals/` y charter pelean "boat rental hvar" y variantes (unas 5.000 impresiones, posición 25–45) | alto |
| Red Rocks | ⚠️ | "red rocks hvar" en posición 11,6 con 0 clics. Qué incluye aparece 4 veces y el precio 5. Los dos formatos (4 h y 6 h) no se leen como dos opciones claras. Sin reseñas en la página | alto |
| Contradicción de licencia | ❌ | El FAQ de `/rentals/` dice que el alquiler self-drive *siempre* requiere licencia, y eso choca con la Pasara 5hp "no licence needed" (confirmada legal) | alto |
| Prueba social | ⚠️ | La web dice "140+ happy guests" contra 216 reseñas en 5.0 en Google. Los 3 testimonios del home no aparecen entre las 207 reseñas de Google | medio |
| Home | ⚠️ | El 75% de sus impresiones sin marca son búsquedas de alquiler; el title y el contenido apuntan a tours | medio |
| Técnico | ⚠️ | Export estático, schema, sitemap y WhatsApp correctos; sin AggregateRating propio (bien). Pero el H1 del home llega al HTML como "Private Boat**T**ours Hvar" (dos `<span>` sin espacio): los bots que leen sin CSS ven "BoatTours". Mismo caso en `/sea-care/` ("SeaCare") | medio |
| Copy | ✅ | `copy_lint` da entre 95 y 100 en las 10 páginas: el texto ya está limpio. La palanca es estructura, cobertura de keywords, repeticiones y prueba social, no reescribir por tono | — |

## 4. Pasos que ejecuta Claude Code
1. **Preparar**:
   - leer `CLAUDE.md` completo, rama `kosmos/seo-tours-rentals`, escribir `seo/` y build de referencia;
   - commit `seo: plan y contexto`.
2. **Base de reseñas**:
   - crear `lib/reviews.ts` con el rating y la cantidad de Google, la fecha de consulta y el link a la ficha, más las citas reales de `00-contexto.md`;
   - hacer que `Testimonials` lea de ahí, mostrando "Google review · mes año";
   - reemplazar "140+ happy guests" (home y `/landing/explore/`) por el dato de Google con su fecha;
   - commit `web: reseñas reales de Google`.
3. **Páginas, en este orden**: Red Rocks → `/rentals/` → Private Charter → home → Pakleni → Blue Cave → Sunset → `/tours/` → sin licencia → Scenic Coast. Para cada una, la fase 2 completa sin frenar, la implementación sobre las fuentes de datos existentes, QA y commit.
4. **Cierre**:
   - enlaces internos según el mapa;
   - `seo/gbp.md`;
   - actualizar `CLAUDE.md`: resolver el bloqueante de la Pasara 5hp, sumar el mapa keyword → URL, dejar las reseñas y su fuente, y corregir la línea de `reviewCount` que ya no existe;
   - build limpio.
5. **PR**: `gh pr create`, o el texto en `seo/PR.md`.

## 5. Detalle por página
Todas: title de origen ≤ 44 caracteres (el layout suma " | MareBoats Hvar"), un H1 con la keyword principal, reglas de copy de `CLAUDE.md`, precios solo desde `lib/pricing.ts`, un CTA principal de WhatsApp con mensaje prellenado propio de la página. Cluster: `seo/paginas/<slug>/keywords.md`.

### 1 · Red Rocks (`/tours/red-rocks-pakleni-islands/`) — producto estrella
- **Principal**: "red rocks hvar". Quien busca quiere saber qué son y cómo verlas: la página responde eso arriba y lo convierte en tour.
- **Estructura**:
  - Hero: qué son las Red Rocks, una prueba de Google y el CTA.
  - Los **dos formatos** como dos opciones lado a lado:
    - medio día, 4 h, salidas 09:00 o 14:00;
    - día completo, 6 h, salida 11:00;
    - privado o compartido;
    - datos desde `tours-data`/`pricing`, sin cambiar valores.
  - La ruta: se mantienen las paradas existentes.
  - Qué incluye + qué no, **una sola vez**.
  - Reseñas reales con temas Red Rocks / clima.
  - Comparación con 5 Islands (ya existe).
  - FAQ sin repetir lo anterior.
  - Punto de encuentro.
  - CTA final.
- **Quitar repeticiones**: incluye ×4 → ×1, precio ×5 → hero + bloque de formatos, punto de encuentro ×3 → ×1 + footer.
- **CTA**: "Check Red Rocks availability on WhatsApp". Prellenado: "Hi! I'd like to book the Red Rocks tour (half day / full day) on ___ for ___ people".

### 2 · Rentals (`/rentals/`)
- **Principal**: "boat rental hvar".
- **Orden**:
  1. Pasara 5hp como entrada, con **"No boating licence needed"** fuerte (confirmado legal).
  2. Pasara 20hp ("Most chosen self-drive", **sin mencionar licencia**).
  3. Speedboat 60hp y Mariner 150hp (licencia requerida; el depósito de €300 solo en efectivo, visible).
  4. La card "With Skipper" queda como una línea que deriva al Private Charter.
  5. Underwater scooter, aclarado como add-on de tours privados.
- **Corregir el FAQ**: hoy dice que el self-drive siempre requiere licencia, y eso es falso para la Pasara 5hp. Reescribirlo.
- **Quitar repeticiones**: sin licencia ×5 → hero + card + FAQ; botellas/fumar ×2 → ×1; combustible y depósito → una vez cada uno.
- **CTA**: "Ask which boat is free on WhatsApp". Prellenado por bote (ya existe; revisarlo).

### 3 · Private Charter (`/tours/private-boat-charter/`)
- **Principal**: "private boat charter hvar". El ángulo es *con skipper, tu ruta*.
- El combustible aparte se explica como consecuencia de elegir la ruta, no como letra chica (pendiente de CLAUDE.md). El rango de combustible es `[CONFIRMAR]`.
- Sacar cualquier término de alquiler sin skipper del title, el H1 y los encabezados.

### 4 · Home (`/`)
- **Principal**: "private boat tours hvar".
- **Fix del H1**: agregar un espacio real entre los dos `<span>` (`{' '}`), para que el texto sea "Private Boat Tours Hvar". Hacer lo mismo en `/sea-care/` ("Sea Care"); es el único cambio fuera de alcance permitido.
- Title de origen ≤ 44 caracteres; hoy es largo y lleva la marca dos veces. Corregir a la regla del layout.
- El alquiler se menciona en una sección corta que enlaza a `/rentals/` con el ancla "boat rental in Hvar".
- Reseñas reales en lugar de los 3 testimonios actuales.

### 5 a 7 · Pakleni / Blue Cave / Sunset
- Cada una con su principal del mapa.
- Quitar repeticiones, FAQ propia y reseñas que mencionen ese destino, si existen en `00-contexto.md`.
- **Blue Cave**: respetar el concepto "VIP 5 Islands" (salida 10:00, 3 cuevas, grupos chicos).
- **Sunset**: mantener los tramos de precio.

### 8 · Tours hub (`/tours/`)
- **Principal**: "boat trips from hvar".
- Es una tabla y cards para comparar duración, precio desde y qué ves. No repite el texto del home.

### 9 · Sin licencia (`/rentals/boat-rental-hvar-without-licence/`)
- Responde la pregunta en la primera frase: en Croacia la Pasara 5hp se maneja sin licencia; las de más potencia piden licencia o skipper.
- Deriva a la Pasara 5hp en `/rentals/` y al charter.
- **No afirmar umbrales legales numéricos** más allá de lo que ya dice CLAUDE.md para los 5hp.

### 10 · Scenic Coast (`/tours/scenic-coast-cruise/`)
- Solo pasa por `copy_lint` y la regla de title. Sin keyword propia hasta tener datos.

## 6. Decisiones tomadas
| Decisión | Elección | Quién / cuándo |
|---|---|---|
| Página por búsqueda | Cada página atrae algo distinto; rentals = Pasaras | Fede, 24/10 |
| Producto estrella | Red Rocks | Fede, 24/10 |
| Pasara 5hp sin licencia | Legal: se queda y se refuerza | Fede, 24/10 |
| Transfers Split | Se siguen ofreciendo; no se tocan | Fede, 24/10 |
| Home | Tours + marca; el alquiler va a `/rentals/` | Fede, 24/10 |
| Testimonios | Reemplazar por citas reales de Google | intake (supuesto, ver §8) |

## 7. Restricciones
- **URLs**: no cambia ninguna. Nada de redirects nuevos.
- **Fuera de alcance**: no se tocan `lib/pricing.ts` (valores), `lib/yacht-*`, `app/private-yacht-hvar/`, `app/crew-*`, `app/careers/`, `netlify.toml`, `.github/`, ni los listados en OTAs.
- **Reglas de `CLAUDE.md`**: mandan sobre la skill cuando chocan (rayas prohibidas, filler prohibido, punto de encuentro, capacidad, idiomas, diacríticos, títulos).
- **Archivos viejos de skills**: `KOSMOS_SKILL.md`, `human-copy-SKILL.md` y `ux-conversion-SKILL.md` en la raíz del repo quedan reemplazados por la skill instalada kosmos-web. No borrarlos en esta corrida.
- **`app/llms.txt`**: si una página cambia un dato que figura ahí, actualizarlo. Mismas reglas que el copy público.

## 8. Supuestos (defaults usados donde no hubo respuesta)
- Los 3 testimonios del home no figuran entre las 207 reseñas de Google de 2025–2026; se reemplazan por citas reales. Si venían de otra fuente real (TripAdvisor, GYG), Fede puede restaurarlos en el PR con la fuente.
- Las citas se publican sin nombre del autor (la API no lo trae): "Google review · mes año".
- La cantidad de reseñas se publica con la fecha de consulta ("216 Google reviews · Oct 2026"), para que no quede desactualizada sin aviso.

## 9. Pendientes → `[CONFIRMAR]`
| Dato | Dónde impacta | Estado |
|---|---|---|
| Rango de combustible del Private Charter | Charter (§5.3) | pendiente con Nikola desde julio |
| "A Red Rocks solo se llega por agua" como hecho | Red Rocks | no afirmar; se puede citar la reseña |
| Link directo a las reseñas de Google | bloque de reseñas | usar el link de Maps del repo si no hay otro |

## 10. Línea de base (build actual, 24/10)

Cobertura del cluster y principal en H1, medidas con los scripts de la skill sobre `out/`. El PR tiene que mostrar el después.

| Página | Cobertura | Principal en H1 | Copy |
|---|---|---|---|
| home | 100% | ✗ ("BoatTours") | 100 |
| red-rocks | 56% | ✓ | 95 |
| rentals | 60% | ✗ ("Rentals Hvar") | 98 |
| private-boat-charter | 67% | ✓ | 95 |
| pakleni-islands | 50% | ✗ | 97 |
| blue-cave-pakleni-islands | 67% | ✓ | 95 |
| sunset-cruise | 40% | ✓ | 96 |
| tours | 0% | ✗ | 100 |
| boat-rental-hvar-without-licence | 75% | ✗ | 97 |
| scenic-coast-cruise | 50% | ✓ | 97 |

## 11. Criterios de terminado
- **QA técnico ✅ por página**:
  - build OK y 1 H1;
  - `kw_coverage.py` ✅ y `copy_lint.py` ✅ (con `--allow` para los nombres croatas y los del equipo);
  - JSON-LD válido;
  - CTA visible en 360×740;
  - title de origen ≤ 44 caracteres.
- **PR abierto, nada mergeado.** Los `[CONFIRMAR]` bloquean el merge, no el PR.
- Todo build se hace con `CUSTOM_DOMAIN=1 npm run build` (igual que `deploy.yml`); sin esa variable, Next agrega el basePath de GitHub Pages y los canonicals salen mal.

## 12. Después del merge
- Search Console: pedir indexación de las 10 URLs; revisar "red rocks hvar" y "boat rental hvar" a las 4 y 8 semanas.
- GA4: comparar `whatsapp_click` por página contra el mismo período del año anterior.
- Ficha de Google: completar `seo/gbp.md` (servicios con el mismo nombre que las páginas).
