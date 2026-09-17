## Commits del 8 de septiembre 2026
f58c4cb  LocalBusiness unico, address sin streetAddress, geo alineada a GBP
b7ce091  AGGREGATE_RATING eliminado del schema
e8c97fe  availableLanguage 5 idiomas + copy de disponibilidad real
c0ed593  /rentals FAQ dedup (schema derivado del array) + Fuel policy corregida
5511ae1  Land scooter retirado de landing, home y qr
bb039db  Add-ons separados por tour (UNDERWATER_SCOOTER_ADDON)
4f135b8  Rewrite de #water-scooter + alcance en llms.txt y FAQ

## Pendientes

### Landing rental (prioridad alta)
- app/landing/rental/page.tsx sections[0] "Fuel & Maintenance": dice full-in
  full-out como si aplicara a todos los botes. Solo aplica al Mariner 150hp.
  Pasara 5hp, 20hp y Speedboat 60hp llevan combustible incluido.
- app/landing/rental/page.tsx sections[5] "Return Process": "full tank" en el
  checklist aplicado a todos + "Deposit is released" cuando solo el Mariner
  tiene deposito.
- app/landing/rental/page.tsx rentalFaqs[0] "What if I run out of fuel?":
  enmarcada como universal.
- app/landing/rental/page.tsx rentalFaqs[4]: exige licencia VHF. CONFIRMADO que
  NO se requiere. Sacar esa mencion.

### Cluster "Local skipper" / "Local captain" (12 lugares)
app/layout.tsx:21,55,69 (meta descriptions), app/page.tsx:90 (hero),
app/rentals/page.tsx:343,349, app/landing/explore/page.tsx:146,
app/about/page.tsx:230, app/explore/page.tsx:555,
components/sections/Features.tsx:16, components/sections/Footer.tsx:52,
components/sections/Tours.tsx:30, lib/tours-data.ts:639

### "RIB" en copy publico (regla inamovible)
lib/alt-text.ts:24 y :26

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
- Meta description de la home (app/page.tsx:33) con "Hvar Harbour" y "Private".

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
