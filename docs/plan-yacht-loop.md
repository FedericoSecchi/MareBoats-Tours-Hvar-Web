# Plan de trabajo autónomo: sección yacht (fase 1)

Rama: `yacht-2027`. Nunca commitear a `main` desde este plan. La aprobación de Fede es al revisar el deploy preview del PR, no tarea por tarea.

Leer antes de cada vuelta: `CLAUDE.md` y `docs/brief-seccion-premium.md`. Este plan no reemplaza ninguna regla de esos dos archivos.

## Cómo trabaja cada vuelta del loop

1. Abrir este archivo y tomar la **primera tarea sin tachar** que no esté bloqueada.
2. Hacerla completa. Verificar con el criterio de "terminado" de esa tarea, ejecutando de verdad (no verificación mental).
3. `npm run build` sin errores. Commit descriptivo en `yacht-2027`, push.
4. Tachar la tarea acá (`- [x]`), anotar el hash del commit y cualquier hallazgo en "Bitácora". Commit de este archivo en el mismo push.
5. Si una tarea necesita un dato que no está en el brief, CLAUDE.md, `pricing.ts` o `tours-data.ts`: **no inventar**. Dejar placeholder `[PENDIENTE: qué falta]`, anotarlo en "Bloqueos" y pasar a la siguiente.
6. Cuando no quedan tareas ejecutables: mandarle a Fede el resumen final (SendUserMessage) con el link del preview y la lista de bloqueos, y **frenar el loop**.

## Respuestas de Fede (12/10, 16:47)

- Rama aparte con preview de Netlify. Textos: los escribe Claude Code en inglés como borrador, Fede revisa todo junto al final.
- Precios: "a confirmar". No se escriben números en el sitio. El análisis de precio va a un documento del Project de Claude, **nunca al repo** (los costos no entran ni al build ni a GitHub).
- Sale **del barril** (Beach Križa), como el resto.
- Características: las del Saxdor que estamos evaluando, **sin nombrarlo**. Solo se promete lo que es criterio eliminatorio de compra (vale para cualquier modelo final): baño cerrado a bordo, sombra para todos sentados, cocina a bordo (lo que permite el almuerzo de Juli), más rápido y más estable que un speedboat (sin cifras), plataforma y escalera de baño, máximo 8 invitados. **No prometer**: ducha de agua dulce, cabina con cama, aire acondicionado, eslora, motores, velocidad en nudos.
- Juli: foto y bio ya están en `/about/` (`/images/team/juli-chef.png`). Usar esa bio como base; el menú va como "sample menu" marcado `[PENDIENTE: confirmar con Juli]`. Dietas: no prometer nada específico, solo "tell us about allergies and dietary needs when you request".
- Después de la solicitud: "Te confirmamos fecha y precio final en marzo de 2027, sin pago ahora". Si el barco no se compra, se ofrece la misma experiencia en speedboat al precio del sitio (esto va en el mensaje de confirmación y en el FAQ, con wording neutro, sin decir "si no compramos el barco").
- Avisos del formulario: n8n → Notion → Telegram (topic nuevo "Yacht Requests" en MareBoats Core). WhatsApp sigue como CTA al lado del form.
- Reseñas: **sin nombres de skippers**. Se recortan con "…" las partes que los nombran (recortar está permitido, reescribir no). Posible skipper del yacht: Jozo, **no confirmado, no va en copy**.
- Menú animado de pantalla completa (kam_UIX): solo dentro de la sección yacht.
- Animaciones: probar primero. Si alguna baja el rendimiento mobile, simplificar.

## Slugs (siguen el patrón anidado existente, como `/rentals/boat-rental-hvar-without-licence/`)

| Página | Ruta | Keyword principal |
|---|---|---|
| Hub | `/private-yacht-hvar/` | private yacht Hvar, Hvar yacht day, Hvar yacht tour |
| Blue Cave medio día | `/private-yacht-hvar/blue-cave-half-day/` | blue cave half day from Hvar |
| Almuerzo a bordo | `/private-yacht-hvar/boat-tour-with-lunch/` | private boat tour with lunch Hvar |
| Solicitud 2027 | `/private-yacht-hvar/request/` | (sin keyword, `noindex`) |
| Gracias | `/private-yacht-hvar/request/thanks/` | (`noindex` siempre) |

Antes de crear: grep de que ninguna ruta ni redirect de `netlify.toml` choque.

## Interruptor de publicación

Constante única `YACHT_SECTION_LIVE = false` en `lib/yacht-data.ts`. Mientras sea `false`:
- todas las rutas de la sección con `robots: { index: false, follow: false }`
- fuera de `sitemap.ts` y de `llms.txt`
- sin links desde páginas públicas existentes (la card de `/transfers/` y los cross-links se renderizan solo si es `true`)

Pasar a `true` es decisión de Fede, con precios cargados. No lo hace el loop.

## Tareas

### A. Base
- [x] **A1. Datos.** `lib/yacht-data.ts` con el interruptor, las 2 experiencias y el hub como datos tipados (título, meta, H1, secciones, FAQ, includes), siguiendo el patrón de `TourRecord` (`stops`, `faqs`, `fastFacts`). En `lib/pricing.ts` agregar `YACHT_PRICES` con valores `null` y un formatter que devuelva `null` si no hay precio (el componente no muestra nada; nunca "on request"). Terminado: build ok, grep de que no hay números de precio en `yacht-data.ts`.
- [x] **A2. GSAP.** Instalar `gsap` (versión fija). Helper `lib/yacht-motion.ts` (`lib/motion.ts` ya existía, es de framer-motion) que respete `prefers-reduced-motion` y solo use `opacity` y `transform`. Terminado: build ok, peso del chunk anotado en bitácora.

### B. Páginas
- [x] **B1. Hub** `/private-yacht-hvar/`. Bloques del Figma de Coti en orden; bloque del barco sin marca (solo las características permitidas arriba); experiencias; Juli; reseñas; FAQ (incluye celebraciones y "what happens after you request"); CTA doble (form + WhatsApp). Schema: `Service` + `BreadcrumbList` + `FAQPage`, sin `offers` mientras no haya precio, `maximumAttendeeCapacity: 8`, sin `aggregateRating` (ver regla del 09/08).
- [x] **B2. Template de experiencia** + `/private-yacht-hvar/blue-cave-half-day/`. Argumento: llegar antes por velocidad, decir la verdad sobre la espera y los botes oficiales de la cueva. Cross-link a `/tours/blue-cave-pakleni-islands/` ("prefer the full day by speedboat?"). Entrada de la cueva desde `EXTRAS.blueCave`.
- [x] **B3.** `/private-yacht-hvar/boat-tour-with-lunch/` con el mismo template. Juli (foto y bio de `/about/`), sample menu marcado pendiente. Cross-link a Red Rocks full day.
- [x] **B4. Reseñas.** Componente con las 6 del brief. Nombre, fecha, link al perfil si se tiene (si no, `[PENDIENTE: link]`), "Traducido por Google" en la de Sandra. Recortar con "…" las partes con nombres de skippers y los em-dashes de las citas (no reemplazar por otro signo: recortar). Encabezado: "What guests said about MareBoats Hvar in 2026". Las palabras prohibidas que aparezcan dentro de citas son del cliente: se dejan.
- [x] **B5. Menú de la sección** (referencia kam_UIX), solo en rutas `/private-yacht-hvar/*`. El header global sigue intacto.

### C. Formulario y medición
- [x] **C1. Notion.** Base "Yacht Requests 2027" junto a "Skipper Applications" (misma página padre). Campos: nombre, mail, WhatsApp, experiencia, fecha deseada, flexibilidad, personas (1-8), ocasión, alergias/dietas, mensaje, idioma, página de origen, UTMs, fecha de envío. Compartirla con la integración `Kosmos n8n`.
- [x] **C2. Telegram.** Crear el topic "Yacht Requests" en MareBoats Core (`-1004479127955`) con el bot (`createForumTopic`). Si el bot no tiene permiso, usar el topic General de Core y anotarlo en Bloqueos.
- [x] **C3. n8n.** Workflow `MareBoats - Yacht Requests 2027` copiando el patrón de `MareBoats - Skipper Applications` (`1tq81P7T3YNYVTQ7`): Webhook (`allowedOrigins` = `https://mareboatshvar.com` **y** el dominio de deploy preview de Netlify) → Validate (honeypot, fecha con regex `^(202[7])-\d{2}-\d{2}$`, personas 1-8) → IF → Notion por HTTP Request → Telegram en inglés → Respond. Validar, crear, timezone Europe/Zagreb, **publicar**. Probar con un POST real y borrar la fila de prueba de Notion.
- [x] **C4. Form** `/private-yacht-hvar/request/` (`'use client'` solo el form). Fecha con validación en tres capas como careers (rango: abril a octubre 2027). Honeypot `website` fuera de pantalla. Botón de WhatsApp al lado con mensaje prellenado por experiencia. Al enviar: redirige a `/request/thanks/`.
- [x] **C5. GA4.** `premium_form_submit` con `experience`; `whatsapp_click` con `page_section=premium` y `experience`; evento propio en la página de gracias. Verificar en el build que los `gtag` se llaman (log o test).
- [x] **C6. Privacy.** Agregar a `/privacy/` el tratamiento de las solicitudes de yacht (misma base legal, mismos encargados, borrado el 31/03/2028 o al terminar la temporada 2027). Marcar en Bloqueos que esto también lo tiene que ver el asesor de Josip.

### D. Animaciones (probar primero, simplificar si pesan)
- [x] **D1. Hero zoom** (GSAP YzbPYMx) en el hub.
- [x] **D2. Life on the water** (William-shao bNBeRMe) reconstruido con ScrollTrigger `pin`, sin secuestrar el scroll.
- [x] **D3. Día de Juli** (vii120, clip-path sticky) en la página de almuerzo.
- [x] **D4. Revelados de texto** (SplitText) en H1/H2 de la sección, sutiles.

### E. Transfer
- [x] **E1.** Card "Private yacht transfer" dentro de `/transfers/`, renderizada solo si `YACHT_SECTION_LIVE`. Sin página propia. Precio `null` por ahora.

### F. Precio (fuera del repo)
- [x] **F1.** Documento `claude/analisis-precio-yacht-2027.md` en el Project de Claude (no en el repo): referencias de mercado de `Mercado de tours en Hvar 2027` y `plan-invierno/03-compra-barco.md`, escalera contra los precios actuales de `pricing.ts`, y rangos propuestos marcados "a confirmar". Las celdas de costo (cuota, consumo, Juli, comida) quedan vacías para Fede.

### G. QA y entrega
- [~] **G1. Diseño.** Si existe la carpeta de Drive `MareBoats yacht diseño` con los PNG de Coti, comparar cada página contra su frame y ajustar. Si no existe, construir con los tokens del sitio y anotar en Bloqueos.
- [x] **G2. Capturas** con Playwright a 375 px y 1440 px de cada página. Revisarlas de verdad (Read de la imagen). Sin scroll horizontal.
- [x] **G3. Barridos case-insensitive** sobre los archivos nuevos, mostrando las líneas encontradas: `saxdor`, `rib`, `premium` (solo debe aparecer en nombres internos de evento y en este doc), `unforgettable`, `ultimate`, `ideal for`, `flagship`, em-dash y en-dash, "Hvar Harbour" como punto de encuentro, eslora/motor/nudos.
- [x] **G4. Rendimiento.** Lighthouse mobile del hub contra la home actual. Si el hub queda más de 10 puntos abajo, simplificar animaciones (D) y volver a medir.
- [x] **G5. PR** de `yacht-2027` a `main` (sin mergear). Esperar el deploy preview de Netlify, revisar que cargue, y mandar a Fede: link del preview, capturas clave, lista de Bloqueos. Frenar el loop.

## Bloqueos

Lo que quedó pendiente porque necesita un dato o una decisión de otra persona. Nada de esto se inventó.

| Pendiente | De quién | Qué falta |
|---|---|---|
| Precios de los tres productos | Fede | Completar la tabla de costos en `claude/analisis-precio-yacht-2027.md` (Project). Sin precio la sección no se publica |
| Duración y horario de salida de cada experiencia | Fede / Nikola | Campos `duration` y `departureTime` en `lib/yacht-data.ts` (hoy `null`, no se muestran) |
| Qué incluye cada día (combustible, agua, snorkel, bebidas) | Fede / Nikola | Hoy solo dice yacht + skipper (+ almuerzo). Ampliar `includes` |
| Menú de ejemplo | Juli | `JULI.sampleMenu` (hoy `null`, oculto) |
| Diseño de Coti | Coti | No hay export en Drive (`MareBoats yacht diseño`) y el conector de Figma no tiene permiso. La sección está armada con los tokens del sitio |
| Topic "Yacht Requests" en Telegram Core | Fede | El bot no puede crear topics desde n8n. Hoy avisa al General de Core. Crear el topic, copiar su link (t.me/c/4479127955/NNN) y poner NNN en `message_thread_id` del nodo "Notify Core" |
| Fila de prueba en Notion | Fede | "TEST Claude (borrar)" en Yacht Requests 2027. El conector de Notion no borra filas |
| Revisión legal de `/privacy/` | asesor de Josip | Se sumaron las solicitudes de yacht y Telegram como encargado. Telegram ya se usaba para candidatos y no figuraba en la política |
| Quién responde cada solicitud | Nikola / Fede | La página de gracias promete confirmar recepción por WhatsApp o mail. Alguien tiene que hacerlo con cada aviso de Telegram |
| Espera y cierre de la Blue Cave | Fede | El texto dice que en julio y agosto suele haber espera y que cierra con viento del sur. Confirmar que el wording es el que usamos con los guests |
| `&mdash;` en `/transfers/` | Fede | Línea preexistente ("Hotels with private docks — Podstine…") con em-dash. No se tocó porque es copy aprobado fuera de la sección |
| Links de entrada desde páginas speedboat | al publicar | Cuando la sección esté viva, sumar link desde `/tours/blue-cave-pakleni-islands/` y Red Rocks hacia las versiones yacht |

## Bitácora

- 12/10 · A1-A2 · `dc1eb9d` · datos tipados en `lib/yacht-data.ts`, `YACHT_PRICES` en null, GSAP 3.15.0 fijo. `lib/motion.ts` existía (framer-motion): el helper nuevo es `lib/yacht-motion.ts`.
- 12/10 · B1-B5, D1-D4 · `dc1eb9d`, `d6f9cf6` · hub, Blue Cave medio día, almuerzo, reseñas recortadas sin nombres de skippers, menú de sección. Animaciones solo con transform y opacity (el clip-path del pen vii120 se reemplazó por tarjetas sticky que se apilan).
- 12/10 · C1-C5 · `d6f9cf6` · Notion "Yacht Requests 2027" (`667af6b5-efda-4673-abdd-6778553c953d`), workflow n8n `JPOWzdATbQG6zXo5` publicado, CORS para mareboatshvar.com y deploy-preview-1. Probado con POST real: fila en Notion y aviso en Telegram. Formulario probado con Playwright: preselección por query, validación de fecha, redirect a gracias, eventos `premium_form_submit` y `premium_request_thanks` en dataLayer.
- 12/10 · C6 · `d6f9cf6` · `/privacy/` con solicitudes de yacht, borrado 31/12/2027.
- 12/10 · E1 · `d6f9cf6` · card en `/transfers/` con `SHOW_YACHT_LINKS` (visible en previews, en producción solo con la sección viva).
- 12/10 · F1 · Project `claude/analisis-precio-yacht-2027.md` · rangos a confirmar, costos vacíos.
- 12/10 · sitemap y llms.txt · se suman solos cuando `YACHT_SECTION_LIVE = true`. Probado en los dos estados.
- 12/10 · G2-G4 · capturas 375 y 1440 sin scroll horizontal ni errores de consola. Barridos limpios (las palabras prohibidas que aparecen son citas de clientes). Lighthouse mobile local: hub 68, tour Blue Cave 75, home 42 (servidor local sin compresión, sirve para comparar, no como valor absoluto).
- 12/10 · G5 · PR #1 en draft, preview https://deploy-preview-1--mareboatshvar.netlify.app/private-yacht-hvar/ · formulario probado en el preview con envío real (segunda fila de prueba en Notion: "TEST preview Claude (borrar)").
- 21/10 · Diseño de Coti aplicado (Figma copia `4FbVWLkr00fcDFEVmKzu59`, frames `296:14537` desktop y `382:470` mobile): títulos en Libre Caslon Text, cards de experiencias, bloque del barco sin marca, "Lunch on board" con pasos sin horarios, grilla "Why the yacht", reseñas en serif, journal de fotos, FAQ en cards, formulario embebido en cada página (#reserve) y cierre full-bleed. El stack sticky pasó a cards alternadas: las largas se cortaban en pantallas bajas.

### Bloqueos nuevos (21/10)

| Pendiente | De quién | Qué falta |
|---|---|---|
| Fotos del Figma | Coti / Fede | No se usaron: fotos de fábrica de Saxdor (logo visible), banco de imágenes y lugares que no son Hvar (cascadas tipo Krka, una "Pakleni" que no es Pakleni). Se usan nuestras fotos de drone hasta tener fotos propias del yacht y de Juli cocinando |
| Neue Montreal | Fede | Tipografía de texto del diseño, paga para uso comercial web. Se usa Space Grotesk (la del sitio). Si se compra la licencia, cambia una línea en `tailwind.config.ts` |
| Página Sea care | Fede | Diseñada por Coti, fuera del plan. La foto principal dice "REAL PHOTO, NO STOCK" y parece generada: no se publica con ese texto si no es nuestra |
