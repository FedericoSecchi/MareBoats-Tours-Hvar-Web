# QA — home · 2026-10-26

| Chequeo | Resultado |
|---|---|
| Build | ✅ |
| 1 H1 | ✅ |
| Principal en title y H1 | ✅ `private boat tours hvar` en los dos |
| Cobertura keywords ≥ 80% | ✅ 100% (6/6 exactas) |
| copy_lint ≥ 85 | ✅ 100/100 |
| 0 [CONFIRMAR] | ✅ |
| JSON-LD válido | ✅ FAQPage + LocalBusiness desde layout.tsx |
| CTA visible 360×740 | ✅ Book on WhatsApp sobre el hero |
| Title ≤ 44 chars de origen | ✅ `Private Boat Tours Hvar from Beach Križa` = 39 chars |

## Antes / después

- **Title**: `'Private Boat Tours Hvar Croatia | MareBoats - Book on
  WhatsApp'` (62) → `'Private Boat Tours Hvar from Beach Križa'` (39).
  Resuelve el bug de "doble marca" que CLAUDE.md identificaba.
- **H1 (desde task #3)**: antes el HTML sin CSS leía `"Private
  BoatTours Hvar"` (dos spans sin whitespace). Ahora con `{' '}` lee
  `"Private Boat Tours Hvar"`.
- **Sección "Also from Beach Križa"**: 2 links sin valor → 1 link con
  ancla descriptiva **"Boat rental in Hvar →"**.
- **Testimonios + badge**: hero muestra reseñas reales de Google
  (216, Oct 2026) linkeadas a la ficha.

## kw_coverage.py / copy_lint.py
```
Principal: private boat tours hvar · title ✓ · H1 ✓
Cobertura: 6 exactas + 0 parciales de 6 = 100%

Palabras: 439 · Puntaje humano: 100/100 · ✅ pasa
```
