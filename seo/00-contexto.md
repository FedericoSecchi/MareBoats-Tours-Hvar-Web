# Contexto del negocio — MareBoats Hvar

> Fuente única de hechos para este trabajo. Cada dato lleva su fuente. Lo que no está acá ni en
> `CLAUDE.md` / `lib/pricing.ts` / `lib/tours-data.ts` no se publica. Lo que falta: [CONFIRMAR: …].
> Fuentes: CLAUDE.md del repo (actualizado 23/08/2026), sitio publicado (24/10/2026), ficha de Google
> vía Windsor (24/10/2026), Search Console 16 meses, respuestas de Fede en el intake (24/10/2026).

## Jerarquía de fuentes (si dos se contradicen)
1. Respuestas de Fede en este intake (24/10/2026)
2. `CLAUDE.md` del repo (reglas de negocio y de copy: mandan sobre la skill)
3. `lib/pricing.ts` para todo precio (nunca escribir un precio a mano)
4. Datos ya publicados en `lib/tours-data.ts`

## Datos del negocio
- Nombre: **MareBoats Hvar** (sin espacio en "MareBoats") (CLAUDE.md)
- Tours en speedboat privados y compartidos, alquiler de botes y transfers desde Hvar, Croacia (CLAUDE.md, sitio)
- Punto de encuentro: "Beach Križa, at the MareBoats barrel, below the Beach Bay Hvar Hotel". Wording fijo, ver CLAUDE.md § Meeting point. Prohibido ubicarlo en el puerto principal (CLAUDE.md)
- WhatsApp: +385 95 196 6734, único canal de conversión, sin formularios en el flujo de reserva (CLAUDE.md)
- Temporada: abril a octubre (CLAUDE.md)
- Idioma del sitio: inglés
- Ficha de Google: 5.0 con **216 reseñas** al 24/10/2026; la web hoy dice "140+ happy guests" (Windsor GBP, sitio)

## Decisiones de Fede en el intake (24/10/2026)
- **Cada página atrae una búsqueda distinta**: `/rentals/` atrae alquiler, con las Pasaras como producto de entrada; Red Rocks atrae "red rocks"; cada tour su propio destino.
- **Producto estrella: Red Rocks.**
- **Red Rocks tiene dos formatos al mismo destino con horarios distintos**: medio día (4 h) y día completo (6 h). No es una contradicción. Los horarios y precios publicados se mantienen; solo hay que presentarlos como dos opciones claras. Datos en `lib/tours-data.ts` y `lib/pricing.ts`.
- **Pasara 5hp "no licence needed": es legal, se queda y se refuerza.** Resuelve el bloqueante de CLAUDE.md § "BLOQUEANTE — Pasara 5hp". La Pasara 20hp sigue sin ninguna mención de licencia (regla vigente de CLAUDE.md).
- **Transfers a Split: se siguen ofreciendo.** No se tocan en esta corrida.
- **El home ataca tours** ("private boat tours hvar" + marca). El alquiler vive en `/rentals/`.

## Productos en alcance (datos publicados; precios siempre desde `lib/pricing.ts`)
| Producto | URL | Formato | Fuente |
|---|---|---|---|
| Red Rocks & Pakleni Islands | /tours/red-rocks-pakleni-islands/ | medio día 4 h (salidas 09:00 o 14:00) o día completo 6 h (salida 11:00); privado o compartido (compartido mínimo 6, máx. 8) | sitio, tours-data |
| Pakleni Islands Half Day | /tours/pakleni-islands/ | 3 o 4 h, privado | sitio |
| 5 Islands / Blue Cave & Pakleni | /tours/blue-cave-pakleni-islands/ | 7 h, salida 10:00 (concepto "VIP 5 Islands": no modificar, CLAUDE.md § OTAs) | sitio, CLAUDE.md |
| Sunset Cruise | /tours/sunset-cruise/ | 2 h, precio por tramos (CLAUDE.md § Sunset) | sitio |
| Scenic Coast Cruise | /tours/scenic-coast-cruise/ | 2 h, motor apagado en cada bahía, sin fondeo ni desembarco | sitio |
| Private Boat Charter | /tours/private-boat-charter/ | día completo, ruta a medida, combustible aparte, hasta 8 | sitio |
| Boat rental (self-drive) | /rentals/ | Pasara 5hp (sin licencia), Pasara 20hp ("Most chosen self-drive", sin mención de licencia), Speedboat 60hp (licencia), Mariner 150hp (licencia, depósito €300 solo efectivo) | CLAUDE.md § Flota rental |
| Sin licencia (página de decisión) | /rentals/boat-rental-hvar-without-licence/ | responde la pregunta de la licencia | sitio |

Incluido en todos los tours: speedboat y skipper, combustible, conservadora con hielo, agua, máscaras de snorkel. No incluido: almuerzo ("Lunch not included", wording unificado), traslado desde el hotel (sitio, CLAUDE.md).

## Hechos útiles para el copy (con fuente)
- "Licensed for 12. We cap at 8." Nunca mencionar 12 sin ese contexto (CLAUDE.md)
- Grupos de 9 a 16: dos speedboats navegando juntos (CLAUDE.md)
- A bordo: toldo, música, conservadora con hielo, sin asientos asignados, sin baño (paradas en restaurantes); se permiten botellas de vidrio y comida; no se fuma (CLAUDE.md)
- Mascotas en tours privados, a pedido (CLAUDE.md § Pet friendly)
- Si el viento no da, se avisa en el punto de encuentro, antes de subir, y se cambia la ruta (reseñas del 20/08/2026, varias)
- Red Rocks: acantilados; salto desde 5 a 10 m; parada en Dubovica; almuerzo en Palmižana o Ždrilca (sitio)
- Equipo para copy: Nikola (fundador, nacido en Hvar), Josip (head skipper). Fede sin cargo ni título en la web. Idiomas a bordo solo prometidos cuando Fede es skipper (CLAUDE.md)

## Frases textuales de clientes (Google, 2026) — usar tal cual, sin cambiar el sentido
Elegidas por sonar espontáneas. No usar reseñas con redacción cargada de keywords.

> "Awesome adventure to do with a group! Need to go to red rocks!" (Google, ago 2026)

> "We did a half day private tour and it was so worth it! Went to the red rocks, a few other bays, and the Pakleni islands." (Google, jun 2026)

> "Overall had a great experience! Tony was the best, taking us to ~5 different stops, each of which were beautiful. Got to swim, cliff jump, hang at the beach and snorkel." (Google, jul 2026)

> "When I travel to a new place, I always take a boat tour. Mareboats was an exceptional experience. Pristine waters and good energy as we explored the Red Rocks, Dubovica, Bolce. You can snorkel, swim and even cliff jump if you're adventurous!" (Google, ago 2026)

> "Weather changed our route from Red Rocks to Pakleni Islands. MareBoats Hvar told us before we left, at the meeting point by the barrel. Respect for that. A lot of operators would say nothing and just do a worse version of the original tour." (Google, ago 2026)

> "Fede and Mat were awesome. They took us for a 6-hr journey across the coast; From hidden spots to lovely beaches, including a great restaurant for lunch." (Google, jun 2026)

> "We did a tour with Luka. He made the day so fun and relaxing." (Google, jul 2026)

> "Check in was quick and straightforward. No awkward limitations imposed to explore at your own pace. Support during rental for any questions was quick and friendly." (Google, jul 2026, alquiler)

> "Incredible boat tour experience in Hvar. Fede was brilliant." (Google, jun 2026)

Temas que más se repiten en las 204 reseñas con texto: Red Rocks (85 menciones), Pakleni (72), privado (51), skippers por nombre (Fede 51, Josip 12, Nikola 8, Luka 7), lugares escondidos o vacíos, honestidad con el clima, agua clara.

## Voz y tono
- Inglés claro y directo, frases cortas, hechos concretos (minutos de navegación, paradas, qué incluye).
- Honestidad como argumento: el clima manda y se avisa antes de subir; lo que no se incluye se dice.
- Prohibido (CLAUDE.md): rayas (em/en dash), "premium", "unforgettable", "ultimate", "ideal for", "flagship", "RIB", cantidad de botes de la flota, año de fundación.
- Nombres croatas con diacríticos: Ždrilca, Žarače, Palmižana, Borče, Biševo, Crvene Stijene, Brač, Križa.

## Pendientes ([CONFIRMAR])
- Afirmar como hecho que a Red Rocks "solo se llega por agua": solo aparece en una reseña. No publicarlo como hecho sin confirmación; sí se puede citar la reseña.
- Rango de combustible del Private Charter: pendiente con Nikola desde julio (CLAUDE.md).
