# Brief sección premium (Saxdor) para Claude Code

Estado al 12-oct-2026. Leer junto con CLAUDE.md. Las reglas de copy del sitio aplican sin excepción.

## Decisiones cerradas

- La sección es hija de mareboatshvar.com: usa header, footer y menú globales.
- Objetivo: test de demanda para la temporada 2027. Toda solicitud es para 2027, sin cobro.
- Sin derivación a otras empresas.
- Capacidad: **máximo 8 invitados** en todos los textos y en el schema.
- Políticas: **iguales al sitio original** (reembolso total si MareBoats cancela por clima u operación; sin reembolso si cancela el cliente).
- Chef: Juli, del equipo propio 2027. Foto real.
- Experiencias que se mantienen: Blue Cave y Wine & Islands (el Saxdor llega más lejos).
- Textos: los escriben Fede y Claude Code; lo que hay en Figma es relleno.

## Arquitectura (aprobada), orientada a la demanda real

Fase 1:
1. Hub: day yacht charter privado en Hvar (término de búsqueda: "yacht", no "luxury")
2. Blue Cave privado desde Hvar: día completo y medio día (argumento: llegar antes por velocidad; decir la verdad sobre la espera y los botes oficiales)
3. Almuerzo a bordo con Juli (término: "private boat tour with lunch"; "chef" no se busca)
4. Transfer privado Split / aeropuerto de Split a Hvar
5. Página del barco: Saxdor 320

Fase 2: Red Rocks privado, Sunset. Celebraciones va como FAQ del hub, no como página.

Slugs: proponer siguiendo el ruteo actual del repo (revisar antes de crear). No inventar rutas nuevas sin grep.

## Reseñas para el bloque de testimonios

Reglas:
- Solo reseñas reales de Google, con nombre tal como figura, fecha, link al perfil de Google y rating real del perfil.
- Presentarlas como reseñas de **MareBoats Hvar (temporada 2026)**, nunca como reseñas del Saxdor ni del almuerzo con chef: esos productos todavía no existen y en la UE está prohibido atribuir reseñas de un producto a otro.
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
- Ficha de cada producto: duración, horario de salida, punto de encuentro del Saxdor, qué incluye (requiere análisis)
- Menús de Juli, dietas y alergias, bio (requiere análisis)
- Mensaje 2027: qué pasa después de la solicitud y respuesta si no se compra el Saxdor (requiere análisis)
