# Brief — Rentals (`/rentals/`)

## Keyword principal
"boat rental hvar" (GSC: ~5.000 impr sumadas · pos 25–45 contra la home
y charter; cluster: también "boat rental hvar no license" 157 impr pos
9,2 que ya rankea bien).

## Veredicto SERP y por qué cambia la arquitectura
La corta "boat rental hvar" la dominan marketplaces (Click&Boat,
GetMyBoat, Rentalyachts). Un operador pequeño gana por long-tail
transaccional: "boat rental hvar no license", "pasara boat rental",
"self drive boat hvar". La página hoy pelea en los dos lados y pierde:
el bloque "With Skipper" compite con `/tours/private-boat-charter/` y
le roba foco al self-drive, que es donde está la oportunidad real.

## Decisiones (desde PLAN §5.2)
1. **Las Pasaras primero**. Pasara 5hp con **"No boating licence
   needed"** fuerte (bloqueante de CLAUDE.md resuelto por Fede 24/10,
   es legal).
2. **Pasara 20hp** "Most chosen self-drive" sin mencionar licencia
   (regla de CLAUDE.md desde 04/08).
3. **Speedboat 60hp y Mariner 150hp** con licencia requerida y
   depósito €300 cash visible desde la card (ya lo estaba).
4. **"With Skipper"** deja de ser una card; es un deeplink al Private
   Charter en el intro del H2 de rentals.

## FAQ corregida
La respuesta vieja decía: "For self-drive rental, a valid boat licence
is required by Croatian maritime law. If you don't have a licence, we
offer all our boats with a skipper included - no licence needed." Eso
contradice la decisión del 24/10 sobre la Pasara 5hp. Reescrita para
nombrar explícitamente qué boat se puede alquilar sin licencia (5hp) y
derivar el resto a licencia o Private Charter.

## Title y H1
- **Title**: "Boat Rental Hvar: Self-Drive or Skipper" (39 chars,
  rendered 56).
- **H1**: "Rentals Hvar" → **"Boat Rental Hvar"** (el principal entra
  al H1).

## CTA
Siguen los CTAs existentes por bote y la línea al charter desde el
intro. El cierre de página mantiene "Ask us on WhatsApp" + link al
tour hub.

## Qué queda intocado
- Precios (`lib/pricing.ts`): no se tocan.
- Bloque Underwater Scooter: ya corregido en julio como add-on de
  tours privados, no se re-toca.
- Bloque "On Board / Good to know" y "Rental rules": copy ya aprobado,
  no se re-toca.
