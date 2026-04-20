# Google My Maps — Setup guide (para Nikola / Fede)

Instrucciones paso a paso para crear los **3 mapas públicos** que se
van a embeber en el sitio web. Cada mapa tarda unos 15–20 minutos en
quedar armado.

Una vez creados, el desarrollador pega el link del embed en
`lib/maps-data.ts` y los mapas aparecen automáticamente en el sitio.

Actualizado: abril 2026

---

## Herramienta

https://www.google.com/mymaps

Se accede con la misma cuenta de Google del negocio
(la que tiene el Google Business Profile de MareBoats Hvar).

---

## Paso a paso común para los 3 mapas

1. Entrar a https://www.google.com/mymaps
2. Click en **"Crear un mapa nuevo" / "Create a new map"**
3. En la esquina superior izquierda, click en "Untitled map" y poner
   el **título exacto** que se indica abajo para cada mapa.
4. Para cada punto de interés:
   - Usar la barra de búsqueda dentro del mapa para encontrar el lugar.
   - Click en el pin azul que aparece → **"Add to map"**.
   - Editar el pin: escribir un nombre corto (máx 30 caracteres) y
     una descripción de 1–2 líneas si suma.
   - (Opcional) Cambiar el color o el ícono del pin para que el mapa
     quede más prolijo.
5. **Publicar el mapa:**
   - Botón **"Share" / "Compartir"** arriba a la derecha.
   - En "Who has access" seleccionar: **"Anyone with the link can view"**.
   - Guardar cambios.
6. **Obtener el link del embed:**
   - Click en los 3 puntitos (⋮) al lado del título del mapa →
     **"Embed on my site"**.
   - Se abre un popup con el código `<iframe src="..."></iframe>`.
   - Copiar **solo la URL dentro del `src="..."`** (entre comillas).
   - Pegarla en el archivo `lib/maps-data.ts` reemplazando el `null`
     correspondiente, o enviársela a Coti/desarrollador por mensaje.

Si se actualiza un mapa después (agregar/editar pins), los cambios se
reflejan automáticamente en el sitio — **no hay que volver a publicar
ni re-embeber.**

---

## Mapa #1 — Tour Destinations

**Título exacto:** `MareBoats — Tour Destinations`

**Dónde se usa:** `/guide` (sección "Where we go")

**Pins a agregar (aprox 10):**

- Hvar Harbour — booking barrel (punto de salida)
- Blue Cave (Modra Špilja, Biševo)
- Green Cave (Zelena Špilja, Biševo)
- Medvidina Cave (Biševo)
- Stiniva Bay (Vis)
- Budikovac (Blue Lagoon)
- Red Rocks (costa sur de Hvar)
- Dubovica Beach
- Borče Bay
- Pakleni Islands — Ždrilca
- Pakleni Islands — Palmižana

Sugerencia de color: **azul / turquesa** para los pins de tours.

---

## Mapa #2 — Recommended Restaurants

**Título exacto:** `MareBoats — Recommended Restaurants`

**Dónde se usa:** `/landing/guide-hvar` (sección "Where to Eat")

**Pins a agregar:**

- Moli Onte (Milna)
- Gego Restaurant (Zarace)
- Tri Grede (Ždrilca) — también llamado "Zdrilca"
- Bacchus (Palmižana)
- (Opcional) Algún restaurante favorito en Hvar town

**Importante:** estos restaurantes **NO son socios oficiales**.
En el sitio ya se aclara: "Restaurants we often stop at — no official
deal, just places we like." No prometer descuentos ni beneficios a los
guests.

Sugerencia de color: **naranja / amarillo** para los pins de comida.

---

## Mapa #3 — Hvar Local Tips

**Título exacto:** `MareBoats — Hvar Local Tips`

**Dónde se usa:** `/landing/guide-hvar` (sección "Local tips map")

**Pins a agregar (aprox 12–15):**

Lugares útiles:
- ATM / Cajero automático más cercano al puerto
- Farmacia (Ljekarna)
- Hospital / Centro de salud
- Supermercado (Konzum o Studenac)
- Panadería recomendada

Puntos turísticos:
- Španjola Fortress (fortaleza)
- Catedral de San Esteban
- Plaza principal de Hvar
- Beach clubs (Hula-Hula, Carpe Diem)
- Mejor punto para ver el atardecer

Beaches (city side):
- Pokonji Dol
- Mekićevica
- Dubovica (también está en mapa #1, podés saltearla)

Sugerencia de color: **verde** para servicios, **rojo** para puntos
turísticos.

---

## Archivo donde se pegan los links

Ruta: `lib/maps-data.ts`

Antes (placeholder):
```ts
tourDestinations: {
  src: null,
  ...
}
```

Después (con el link real):
```ts
tourDestinations: {
  src: 'https://www.google.com/maps/d/u/0/embed?mid=XXXXXXXXXXXXXXXX',
  ...
}
```

El orden sugerido para mandar los links:
1. Tour Destinations (más visible — es el que aparece en `/guide`)
2. Recommended Restaurants
3. Hvar Local Tips

---

## Checklist final

- [ ] Mapa 1 creado, publicado, link copiado
- [ ] Mapa 2 creado, publicado, link copiado
- [ ] Mapa 3 creado, publicado, link copiado
- [ ] Los 3 links enviados a Coti/desarrollador por WhatsApp o email
- [ ] Verificado en el sitio que los mapas se ven bien en mobile y desktop

Mientras los links no estén cargados, el sitio muestra un bloque
"Map coming soon" como placeholder — nada se rompe.
