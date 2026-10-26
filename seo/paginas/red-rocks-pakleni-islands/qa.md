# QA — red-rocks-pakleni-islands · 2026-10-26

| Chequeo | Resultado |
|---|---|
| Build (`CUSTOM_DOMAIN=1 npm run build`) | ✅ limpio |
| HTML con contenido sin JS (1 H1) | ✅ 1 H1 |
| Principal en title y H1 | ✅ "red rocks hvar" en los dos |
| Cobertura keywords ≥ 80% | ✅ 100% (6 exactas + 3 parciales de 9) |
| copy_lint ≥ 85 · legibilidad | ✅ 97/100, Flesch 77.5 |
| 0 [CONFIRMAR] | ✅ |
| JSON-LD válido | ✅ TouristAttraction, BreadcrumbList, FAQPage |
| CTA visible 360×740 y 390×844 | ✅ hero + footer con `Book on WhatsApp` |
| Title ≤ 44 chars de origen | ✅ `"Red Rocks Hvar: Half or Full-Day Boat Tour"` = 42, rendered 59 |

## Antes / después

- **Title**:
  - antes: `"Red Rocks & Pakleni Islands Boat Tour from Hvar"` (47 chars)
  - después: `"Red Rocks Hvar: Half or Full-Day Boat Tour"` (42 chars)
- **Description meta**: incluye el principal en la primera frase.
- **H1**: sin cambios ("Red Rocks & Pakleni Islands - Hvar Boat Tour").
- **Precios** repetidos ×7 → **hero + bloque Pricing** (sacados de la
  description larga, de 2 filas de fastFacts y de 2 FAQs).
- **Incluye** repetido ×4 → **sección dedicada "What's included"**
  (eliminado FAQ "What is included..." y las filas Included/Not
  included se siguen inyectando bajo la fila "Meeting point" del
  fastFacts, que es su único lugar estructurado).
- **Meeting point** repetido ×3 → **sección "Meeting point" + footer**
  (sacado el párrafo del FAQ de horarios).
- **Reseñas reales**: ahora hay un bloque de reseñas de Google con el
  topic `red-rocks`, entre la comparación y "What's included".
- **CTA WhatsApp** prellenado específico de la página: `"Hi! I'd like
  to book the Red Rocks tour (half day / full day) on ___ for ___
  people."`

## Salidas de los scripts

### kw_coverage.py
```
Principal: red rocks hvar · title: ✓ · H1: ✓ · primeras 100 palabras: ✓
Cobertura: 6 exactas + 3 parciales de 9 = 100% (mínimo 80%)
Resultado: ✅ pasa
```

### copy_lint.py
```
Palabras: 2676 · Puntaje humano: 97/100 (mínimo 85)
Legibilidad: 77.5 (objetivo web ≥60)
0 rayas largas con espacios (em/en-dash)
Resultado: ✅ pasa
```

## Notas
- `exceptional experience / pristine waters` que marca `copy_lint` es
  parte de una reseña real de Google citada tal cual: queda.
- La cita de 2 páginas del equipo (`MareBoats Hvar speedboat` repetido
  en el mismo párrafo) viene de los FAQ existentes de capacidad; es
  marca contextualizada, no stuffing. Queda.
