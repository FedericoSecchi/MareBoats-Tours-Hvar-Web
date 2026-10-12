# Brief sección premium (yacht, temporada 2027) para Claude Code

Estado al 12-oct-2026. Leer junto con CLAUDE.md. Las reglas de copy del sitio aplican sin excepción.

## Decisiones cerradas

- La sección es hija de mareboatshvar.com: usa header, footer y menú globales.
- Objetivo: test de demanda para la temporada 2027. Toda solicitud es para 2027, sin cobro.
- Sin derivación a otras empresas.
- Capacidad: **máximo 8 invitados** en todos los textos y en el schema.
- Políticas: **iguales al sitio original** (reembolso total si MareBoats cancela por clima u operación; sin reembolso si cancela el cliente).
- Chef: Juli, del equipo propio 2027. Foto real.
- Experiencias que se mantienen: Blue Cave y Wine & Islands (el barco nuevo llega más lejos).
- Textos: los escriben Fede y Claude Code; lo que hay en Figma es relleno.

### Decisiones del 12/10/2026 (aprobadas por Fede)

- **El barco no se nombra** en copy, títulos, alt, schema ni `llms.txt`: ni marca ni modelo hasta que esté comprado. Se describe por lo que ofrece. Sin datos que identifiquen el modelo (eslora exacta, motorización). Sin fotos ni plano del fabricante. Las características que se pueden prometer las confirma Fede (pendiente).
- **Escalera de producto, no canibalización**: cada página nueva apunta a una búsqueda distinta de las existentes y linkea a la versión speedboat actual. Nunca dos páginas para la misma búsqueda.
- **Precio**: posicionado por encima de los tours actuales, mostrado como "desde €X" (nunca "on request"). El número sale de un análisis de costo pendiente; no se escribe hasta tenerlo.
- **Formulario de solicitud 2027**: aprobado como segunda excepción a la regla "solo WhatsApp" (la primera es careers), porque es la herramienta de medición del test. WhatsApp va siempre al lado.

## Arquitectura (aprobada), orientada a la demanda real

Fase 1 (3 páginas y 1 card):
1. **Hub** "private yacht Hvar". Palabras: "private yacht Hvar", "Hvar yacht day", "Hvar yacht tour". Incluye un bloque sobre el barco (sin marca) y el FAQ con celebraciones.
2. **Blue Cave medio día en yacht**. Palabras: "blue cave half day from Hvar" (la página actual de 7 h ya cubre "private"). Argumento: llegar antes por velocidad; decir la verdad sobre la espera y los botes oficiales. Linkea a `/tours/blue-cave-pakleni-islands/`.
3. **Almuerzo a bordo con Juli**. Palabras: "private boat tour with lunch Hvar" ("chef" no se busca).
4. **Card de transfer en yacht dentro de `/transfers/`**, no página nueva (ya existen `/transfers/` y `/tours/split-airport-transfer/`).

Guardado hasta la compra: página del barco (diseño de Coti con plano de cubierta). Se publica con nombre cuando el barco exista.

Fase 2: Red Rocks, Sunset y Wine & Islands con el template de experiencia.

Slugs: proponer siguiendo el ruteo actual del repo (revisar antes de crear). No inventar rutas nuevas sin grep.

## Reseñas para el bloque de testimonios

Reglas:
- Solo reseñas reales de Google, con nombre tal como figura, fecha, link al perfil de Google y rating real del perfil.
- Presentarlas como reseñas de **MareBoats Hvar (temporada 2026)**, nunca como reseñas del barco nuevo ni del almuerzo con chef: esos productos todavía no existen y en la UE está prohibido atribuir reseñas de un producto a otro.
- Se puede recortar con "…" sin cambiar el sentido. No reescribir.
- Las que están traducidas llevan la marca "Traducido por Google".

Seleccionadas (6):

1. **CJ Nuess**, 18-jul-2025 (Vis, familia)
   "We had an unforgettable family boat trip around the island of Vis with Skipper Josip. From the moment we set off, Josip made us feel completely safe and at ease—even while navigating 4-foot swells with our two young daughters on board. … He took us to secluded beaches we never would have found on our own …"

2. **David Josefson**, 3-jul-2026 (privado, familia)
   "We booked what we thought was a group tour but it turned out to be just our family (me, my wife and our two kids 8 and 11) and our skipper Luca on the boat. … Since we had the boat to ourselves Luca let us decide how long to stay at each stop … Communication the day before on WhatsApp was quick and helpful too … Highly recommend especially for families!"

3. **myriam hnatkow**, 6-ago-2026 (privado 6 h, almuerzo)
   "Perfect day with Mare Boats Hvar. We had chosen the 6hour day tour and enjoyed every minute. … As this was a private tour you can decide with him where to go. The lunch place he recommended and booked for us was great. Really an enjoyable experience I would highly recommend!"

4. **Pablo Bouvier**, 5-ago-2026 (medio día privado, familia con tres hijos)
   "We had an unforgettable private half-day boat tour from Hvar with Mare Boats, visiting the Red Rocks and the beautiful Pakleni Islands. Traveling as a family with three children, we wanted something flexible, relaxed, and personal, and this tour was exactly that. …"

5. **Thisbe Barnett**, 21-jun-2026 (reserva, medio día privado)
   "From the moment of booking, I was impressed with the service and fast responses from Nikola. We booked the private half day tour and enjoyed every second - the boat was lovely, the stops on the tour were perfect and the skipper was great! …"

6. **Sandra Blasco**, 12-sep-2026 (sunset + fotos y video; traducida por Google)
   "100% recommended! We took a sunset tour with them … The sunset was amazing … We also opted for the photo and video package for the sunset tour, which is a fantastic memory to cherish forever. …"

Pendiente de Fede: confirmar si se muestran los nombres de skippers que aparecen dentro de las reseñas (la regla de copy los saca del texto propio, pero estas son palabras del cliente).

## Medición (aprobado)

Eventos GA4 por página de la sección:
- `premium_form_submit` (con parámetro `experience`)
- `whatsapp_click` (ya existe; agregar parámetro `page_section=premium` y `experience`)
- Página de gracias propia para la solicitud, con su propio evento de conversión.

## Pendiente (no escribir hasta definir)

- Precios de todos los productos en `lib/pricing.ts` (requiere análisis)
- Ficha de cada producto: duración, horario de salida, punto de encuentro del barco nuevo, qué incluye (requiere análisis)
- Menús de Juli, dietas y alergias, bio (requiere análisis)
- Mensaje 2027: qué pasa después de la solicitud y respuesta si no se compra el barco (requiere análisis)
- Características del barco que se pueden prometer sin conocer el modelo final (Fede)
