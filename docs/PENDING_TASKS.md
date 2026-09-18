## Commits del 8 de septiembre 2026
f58c4cb  LocalBusiness unico, address sin streetAddress, geo alineada a GBP
b7ce091  AGGREGATE_RATING eliminado del schema
e8c97fe  availableLanguage 5 idiomas + copy de disponibilidad real
c0ed593  /rentals FAQ dedup (schema derivado del array) + Fuel policy corregida
5511ae1  Land scooter retirado de landing, home y qr
bb039db  Add-ons separados por tour (UNDERWATER_SCOOTER_ADDON)
4f135b8  Rewrite de #water-scooter + alcance en llms.txt y FAQ

## Commits del 17-18 de septiembre 2026
d6d7859  docs: PENDING_TASKS.md creado
65cb104  Landing rental: fuel + return + VHF FAQ alineados con policy real
f489834  Pivote local -> knowledge (14 bloques de copy)
eaad20f  A1 critico: 2 meeting-point residuos a Beach Križa
de1da23  A2/A3/A5: Hvar Harbour cleanup, 29 menciones por contexto
6a759a1  B: RIB fuera del alt-text (regla inamovible)
34af879  C: Features card "Born in Hvar" reencuadrado por experiencia

## Hechas (17-18 sept)
- Landing rental: fuel real por tipo de bote, return process, FAQ "run out of fuel"
  y FAQ licencia (VHF sacado).
- Cluster "Local skipper" / "Local captain": 14 bloques repivoteados. El eje
  ahora es conocimiento ("skipper who knows the island / where the crowds are
  not"), no origen. Cuatro apariciones legitimas de "locals" (residentes reales)
  quedan sin tocar.
- RIB en alt-text: dos strings limpiadas. Grep case-sensitive confirma cero
  apariciones en copy publico fuera de las que enuncian la regla misma
  (CrewDashboard, crew-handbook, CLAUDE.md).
- Hvar Harbour: grueso hecho. 29 menciones aplicadas por regla contextual:
  donde salimos -> Beach Križa, ubica el negocio -> Hvar, drop-off / arrival /
  yates fondeados -> se queda.
- Features "Born in Hvar" -> "Thousands of hours on this stretch of coast":
  cierto para todo el equipo, mantiene peso.

## Pendientes

### Meta descriptions con shared/private mal declarado
- app/about/page.tsx:12 dice "zero shared groups". Falso: vendemos shared en
  Red Rocks y Blue Cave, y el cuerpo de la misma pagina (linea 164) dice
  "Tours can be fully private or shared". La pagina se contradice.
- app/page.tsx:34 dice "Private speedboat tours" cuando la home vende las dos
  modalidades.
- Hace falta una pasada por TODAS las meta descriptions y schema descriptions
  con ese filtro, no solo estas dos.
- Es la misma familia del error que costo un privado regalado en GetYourGuide.

### "captain" en copy publico (nunca grepeado)
El cluster de skipper busco "local captain", no "captain" solo. Confirmado
al menos:
- lib/tours-data.ts, descripcion de Pakleni: "Your captain chooses the best
  stops"
- lib/tours-data.ts, descripcion de Sunset: "Your captain focuses on safety...
  and your skipper chooses the stops" - usa las dos palabras para la misma
  persona en una oracion, parece que hubiera dos personas a bordo.
Falta grep completo case-insensitive de "captain" y decidir criterio: o todo
"skipper" o todo "captain", no mezclado dentro de la misma tour.

### Underwater scooter con alcance viejo en schema
lib/schema.ts, rental schema: "Underwater scooter available as an add-on on
private tours". El alcance real es solo Red Rocks y Pakleni privados. Ya se
corrigio el copy y la FAQ de /rentals/ en el commit 4f135b8, falta este.

### TripAdvisor dice "RIB speedboats"
No es codigo. Requiere aprobacion de Nikola y edicion en el portal. Sigue en
el radar desde julio.

### T4 BUSINESS_INFO campos muertos
lib/tours-data.ts: 6 de 8 campos sin consumidores (.name, .phone, .whatsapp,
.address, .coordinates, .hours). .name dice "MareBoats Tours Hvar" vs schema
"MareBoats Hvar". .coordinates desactualizadas vs sharedGeo. .address dice
"Croacia" en español.

### T5 NIKOLA_WHATSAPP_TEMPLATES.md
Lineas 45,60,95,215: link de meeting point 3UamDy3Mh9dt4UpM7 (abre punto
anonimo). Correcto: https://maps.app.goo.gl/6AJmDACw4ZU1MnSKA
Linea 216: U6kgAaRG81KZmqUEA etiquetado como "Google Business (reviews)".
El real es BUSINESS_INFO.googleReviewUrl.
Lineas 121-134 y 222: template del scooter de tierra (discontinuado).

### Pendientes de decision del cliente
- Testimonials con "Fede": components/sections/Testimonials.tsx:22 y
  app/landing/explore/page.tsx:38. Son citas atribuidas.
- Breadcrumbs de split-airport-transfer y yacht-sailboat-taxi dicen
  "Home / Tours / ..." y no son tours.
- licensedFor faltante en RentalSelfDrivePrice (6/6/6/12).

## Decisiones tomadas, no reabrir
- Land scooter: discontinuado. La URL /services/scooter-rental queda viva con
  redirect 308 + noindex. SCOOTER_RENTAL se conserva en pricing.ts comentada.
- Underwater scooter: solo Red Rocks y Pakleni privados. €40/unidad, 6 unidades.
- Idiomas: schema declara 5 (descubrimiento), el copy aclara que solo ingles
  esta garantizado. GYG declara solo los garantizados (contractual).
- Capacidad: se muestra licenciado vs lo que llevamos. Botes 6/6/6/12
  licenciados, 5/5/5/8 reales. Tours: licensed for 12, cap at 8.
- aggregateRating eliminado: Google lo ignora en LocalBusiness y se
  desactualiza solo.
- Cluster skipper: el eje de venta es conocimiento, no origen. "Local" no
  diferencia en Hvar y media tripulacion no es de aca. Cuatro apariciones
  legitimas de "locals" (residentes reales, no el skipper) se conservan.
- Hvar Harbour: regla por contexto. Donde salimos -> Beach Križa. Ubica el
  negocio -> Hvar. Drop-off / arrival / yates fondeados -> se queda.
- Meeting point label en Contact.tsx: "Beach Križa, at the MareBoats barrel"
  (el header ya dice "Meeting point" y el link ya apunta al barril, el label
  puede ser exacto sin costo de keyword).
