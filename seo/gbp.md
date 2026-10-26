# Google Business Profile — MareBoats Hvar

> En negocios locales y alojamiento la ficha suele mover más consultas que la web al principio.
> Reglas: nombre real del negocio (sin keywords agregadas), un perfil por negocio, reseñas sin
> incentivos.

## Estado actual (24/10/2026)
- Verificada ✅
- Nombre: **MareBoats Hvar** (sin keywords agregadas — regla CLAUDE.md § OTAs).
- Rating: **5.0 (216 reseñas)** al 24/10/2026, fuente: ficha vía Windsor.
- La web muestra el conteo con fecha y linkea a la ficha (`lib/reviews.ts`).

## Tareas priorizadas para esta corrida

- [ ] **Servicios con el mismo nombre que las páginas de la web** (una línea cada uno):
  - "Private Boat Tours" → `/`
  - "Boat Rental Hvar" → `/rentals/`
  - "Boat Rental Hvar Without a Licence" → `/rentals/boat-rental-hvar-without-licence/`
  - "Red Rocks & Pakleni Islands Boat Tour" → `/tours/red-rocks-pakleni-islands/`
  - "Pakleni Islands Boat Tour" → `/tours/pakleni-islands/`
  - "Blue Cave & 5 Islands Boat Tour" → `/tours/blue-cave-pakleni-islands/`
  - "Sunset Cruise Hvar" → `/tours/sunset-cruise/`
  - "Private Boat Charter Hvar" → `/tours/private-boat-charter/`
  - "Boat Trips from Hvar (compare)" → `/tours/`
- [ ] **Horario**: unificar GBP con el schema del sitio. CLAUDE.md marca
      pendiente: GBP dice "todo el año", schema dice "abril-octubre".
      Decidir con Nikola y poner lo mismo en los dos.
- [ ] **Link de la web** con UTM:
      `https://mareboatshvar.com/?utm_source=gbp&utm_medium=organic&utm_campaign=ficha`
- [ ] **Pedido de reseñas sin incentivo**: usar el link que ya está en
      el repo (`BUSINESS_INFO.googleReviewUrl` en `lib/tours-data.ts`,
      actualmente apunta a `https://g.page/r/.../review`).

## Mensaje para pedir reseñas post-tour
```
Thanks for sailing with us today! If you had a good time, a quick Google
review would help us a lot: https://g.page/r/Cd7dvQcuwbZ7EBM/review
```

## Fuera de alcance de esta corrida
- Alta de 20-30 fotos reales (en el BLOQUE 2 de `CLAUDE.md`).
- Q&A pre-cargadas.
- Posts semanales de Coti.
