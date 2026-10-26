# Arquitectura y mapa de keywords — MareBoats Hvar (24/10/2026)

Fuente de demanda: Search Console de los últimos 16 meses (impresiones reales). No hay export de
Keyword Planner, así que el volumen figura como "s/d" y la prioridad sale de las impresiones y de la
SERP. **Regla: una intención = una URL.** Este mapa se copia a `CLAUDE.md` para que no vuelva la
canibalización.

## Problema que resuelve
Las búsquedas de alquiler ("hvar boat rental", "rent a boat hvar", "boat hire hvar"…) suman unas
5.000 impresiones en posición media 25–45, repartidas entre tres páginas: el home (75%), `/rentals/` y
`/tours/private-boat-charter/`. Ninguna gana. "red rocks hvar" está en posición 11,6 con 290
impresiones y 0 clics: es la mejor oportunidad cerca de la página 1.

## Mapa URL → cluster
| Orden | URL | Keyword principal | Evidencia en GSC (impr · pos) | Veredicto SERP | Acción |
|---|---|---|---|---|---|
| 1 | /tours/red-rocks-pakleni-islands/ | red rocks hvar | 290 · 11,6 | atacar ya (cerca de pág. 1) | reescribir contenido |
| 2 | /rentals/ | boat rental hvar | ~5.000 sumadas · 25–45; "boat rental hvar no license" 157 · 9,2 | long-tail sin licencia + GBP; los marketplaces dominan la corta | reescribir; las Pasaras primero |
| 3 | /tours/private-boat-charter/ | private boat charter hvar | 18 · 10,9 | atacar ya | reescribir; dejar de competir por "rent a boat" |
| 4 | / | private boat tours hvar | ~200 entre / y /tours/ · 28–43 | long-tail + marca + GBP (dominan OTAs) | ajustar title, H1, copy; sacar el foco de alquiler |
| 5 | /tours/pakleni-islands/ | pakleni islands boat tour from hvar | ~250 en el cluster · 13–25 | atacar ya | reescribir |
| 6 | /tours/blue-cave-pakleni-islands/ | blue cave tour from hvar | 42 · 47–56 | long-tail (Blue Cave muy disputada) | reescribir sin tocar el concepto VIP 5 Islands |
| 7 | /tours/sunset-cruise/ | sunset cruise hvar | 93 · 11–13 | atacar ya | reescribir |
| 8 | /tours/ | boat trips from hvar | s/d (hoy compite con el home) | comparación de opciones y precios | ajustar: hub de comparación, no repetir el home |
| 9 | /rentals/boat-rental-hvar-without-licence/ | do you need a licence to rent a boat in croatia | 5 · 69 | informacional | ajustar: responde la pregunta y deriva a la Pasara 5hp |
| 10 | /tours/scenic-coast-cruise/ | scenic coast cruise hvar | 0 | sin datos | solo copy y title (sin keyword propia todavía) |

## Quién NO compite por qué
- El home no apunta a alquiler: lo menciona y enlaza a `/rentals/` con ancla descriptiva ("boat rental in Hvar").
- `/tours/private-boat-charter/` no apunta a "rent a boat" ni a "boat hire" sin skipper: es *con skipper, ruta a medida*.
- La card "With Skipper" de `/rentals/` pasa a ser una derivación corta al charter, no un producto que compite.
- `/rentals/` es dueña de "boat rental hvar no license" (transaccional, ya rankea 9,2). La subpágina sin licencia responde la *pregunta legal* (informacional).
- Red Rocks y Pakleni: Red Rocks = "red rocks"; Pakleni = "pakleni islands"/"half day". La tabla comparativa existente se mantiene.
- Ya están en noindex y no compiten: `/blue-cave/`, `/sunset/`, `/faq/`, `/contact/`, `/landing/*`.
- Fuera de alcance y no se tocan: yacht 2027 (`/private-yacht-hvar/` y rutas relacionadas, `lib/yacht-*`), transfers, water taxi, explore y guías, careers, crew. `/explore/short-boat-tour-hvar-few-hours/` es dueña de "short boat tour hvar": Scenic Coast no compite con ella.

## Backlog (próximas corridas)
- Corrida 2: `/transfers/` + `/tours/split-airport-transfer/` (posible canibalización), water taxi ("water taxi hvar" pos 15–21).
- Corrida 3: versión en español (gran parte de las reseñas son de clientes de habla hispana) e italiano. Requiere i18n y decisión de negocio.
- Página propia de Zlatni Rat (pendiente en CLAUDE.md).
