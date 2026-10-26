# QA — rentals · 2026-10-26

| Chequeo | Resultado |
|---|---|
| Build (`CUSTOM_DOMAIN=1 npm run build`) | ✅ |
| HTML con contenido sin JS (1 H1) | ✅ 1 H1 |
| Principal en title y H1 | ✅ "boat rental hvar" en los dos |
| Cobertura keywords ≥ 80% | ✅ 100% (6 exactas + 2 parciales de 10) |
| copy_lint ≥ 85 · legibilidad | ✅ 98/100 |
| 0 [CONFIRMAR] | ✅ |
| JSON-LD válido | ✅ Service · BreadcrumbList · FAQPage · ItemList · Product (Pasara 20hp) |
| CTA visible 360×740 | ✅ CTAs por bote + línea al Charter |
| Title ≤ 44 chars de origen | ✅ `"Boat Rental Hvar: Self-Drive or Skipper"` = 39, rendered 56 |

## Antes / después

- **Title**: `"Rentals Hvar - Boat Rental & Underwater Scooter"` (49)
  → `"Boat Rental Hvar: Self-Drive or Skipper"` (39).
- **H1**: `"Rentals Hvar"` → `"Boat Rental Hvar"` (el principal entra
  al H1).
- **Hero lead**: antes "Boat rental, underwater scooter & more", ahora
  arranca con "Boat hire in Hvar from Beach Križa" y nombra los
  cuatro boats + regla de licencia en una oración.
- **Grid**: dejó de ser 2 columnas (With Skipper vs Self-Drive). Ahora
  es una sola columna con la grilla de 4 Pasara/Speedboats dentro de
  Self-Drive. "With Skipper" quedó como una línea al principio del
  H2: *"Want a skipper on board instead? Book a Private Charter from
  €500 →"*.
- **Pasara 5hp**: borde y badge reforzados (`border-accent/60`,
  shadow). Badge: `"No boating licence needed"` arriba, antes del H4.
  Bullets reescritos para dejar explícito "Legal to drive without a
  boating licence in Croatia".
- **FAQ**: la pregunta "Do I need a boat licence to rent a boat in
  Hvar?" ahora diferencia la Pasara 5hp (sin licencia) del resto (con
  licencia o Private Charter). Antes afirmaba que *todo* self-drive
  requería licencia, lo cual contradecía al propio catálogo.
- **ItemList schema**: eliminada la posición `/#boat-skipper` (ya no
  existe). Posición 2 ahora apunta al Private Charter.

## Salidas de los scripts

### kw_coverage.py
```
Principal: boat rental hvar · title ✓ · H1 ✓
Cobertura: 6 exactas + 2 parciales de 10 = 100% (mínimo 80%)
```

### copy_lint.py
```
Palabras: 1003 · Puntaje humano: 98/100
Resultado: ✅ pasa
```

## Pendientes
- La página incluye el link a `/rentals/boat-rental-hvar-without-licence/`
  (sub-página de decisión que se trabaja en task #12). Esperable que
  haga referencia cruzada después de ese commit.
